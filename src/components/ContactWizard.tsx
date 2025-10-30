import { useState, useRef, useEffect } from "react";
import { 
  ContactWizardStep1, 
  ContactWizardStep2, 
  ContactWizardStep3, 
  ContactTag, 
  ContactStatus,
  STATUS_OPTIONS,
  AVATAR_OPTIONS
} from "../types/contacts";
import { supabase } from "../lib/supabase";
import { projectId } from "../utils/supabase/info";

interface ContactWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (contactId: string) => void;
  onError: (field: string, message: string) => void;
}

interface ValidationError {
  field: string;
  message: string;
}

// Phone number validation and formatting to E.164
function formatPhoneToE164(phone: string, countryCode: string = '+1'): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Handle US/Canada numbers (assume default)
  if (digits.length === 10) {
    return `+1${digits}`;
  } else if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`;
  }
  
  // Return with country code if not already present
  if (phone.startsWith('+')) {
    return phone;
  }
  
  return `${countryCode}${digits}`;
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// API functions with better session validation
async function callAPI(endpoint: string, method: string = 'GET', data?: any) {
  try {
    console.log('📡 CallAPI attempting to connect to:', endpoint);
    
    // Check if we're in offline/mock mode by checking if we have a real Supabase session
    const { data: sessionData } = await supabase.auth.getSession();
    const hasSupabaseSession = sessionData?.session?.access_token;
    const savedUser = localStorage.getItem('zinnia_user');
    const savedAccessToken = localStorage.getItem('zinnia_access_token');
    
    // If we have a user in localStorage but no Supabase session and no saved access token,
    // we're likely in mock/offline mode
    const isOfflineMode = savedUser && !hasSupabaseSession && !savedAccessToken;
    
    if (isOfflineMode) {
      console.log('📱 Detected offline/mock mode - using localStorage for contacts/tags');
      return handleOfflineAPICall(endpoint, method, data);
    }
    
    // Continue with online Supabase mode
    let session = null;
    let accessToken = null;
    
    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.warn('⚠️ Session error from Supabase client:', sessionError);
      } else if (sessionData?.session?.access_token) {
        session = sessionData.session;
        accessToken = session.access_token;
        console.log('✅ Got valid session from Supabase client');
      }
    } catch (supabaseError) {
      console.warn('⚠️ Supabase client session check failed:', supabaseError);
    }
    
    // Fallback: Try to get access token from localStorage if Supabase session failed
    if (!accessToken) {
      console.log('🔄 No Supabase session, checking localStorage for access token...');
      const savedAccessToken = localStorage.getItem('zinnia_access_token');
      
      if (savedAccessToken) {
        accessToken = savedAccessToken;
        console.log('✅ Using access token from localStorage');
      } else {
        console.log('❌ No access token in localStorage either');
      }
    }
    
    // If we still don't have an access token, try to refresh the session ONE TIME ONLY
    if (!accessToken && session?.refresh_token) {
      console.log('🔄 Attempting to refresh session...');
      
      try {
        const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();
        
        if (refreshError) {
          console.error('❌ Session refresh failed:', refreshError);
          throw new Error('Session expired - please sign in again');
        }
        
        if (refreshData?.session?.access_token) {
          accessToken = refreshData.session.access_token;
          console.log('✅ Session refreshed successfully');
          
          // Save the new access token to localStorage
          localStorage.setItem('zinnia_access_token', accessToken);
        } else {
          console.error('❌ Session refresh did not return access token');
          throw new Error('Authentication failed - please sign in again');
        }
      } catch (refreshError) {
        console.error('❌ Session refresh exception:', refreshError);
        throw new Error('Session expired - please sign in again');
      }
    }

    // Final check - if we still don't have an access token, we can't proceed
    if (!accessToken) {
      console.error('❌ No access token available after all attempts');
      throw new Error('Not authenticated - please sign in again');
    }

    console.log('📡 Making API call with access token to:', endpoint);
    
    const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6e4d8724${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { message: errorText };
      }
      
      console.error('❌ API call failed:', {
        endpoint,
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      
      // If we get a 401, clear the stored access token since it's invalid
      if (response.status === 401) {
        console.log('🗑️ Clearing invalid access token from localStorage');
        localStorage.removeItem('zinnia_access_token');
      }
      
      throw new Error(errorData.message || errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('✅ API call successful to:', endpoint);
    return result;
  } catch (error) {
    console.error('❌ CallAPI error for', endpoint, ':', error);
    throw error;
  }
}

// Handle API calls in offline/mock mode using localStorage
function handleOfflineAPICall(endpoint: string, method: string, data?: any) {
  console.log('📱 Handling offline API call for:', endpoint, method);
  
  const savedUser = JSON.parse(localStorage.getItem('zinnia_user') || '{}');
  const userId = savedUser.id;
  
  if (!userId) {
    throw new Error('User not found in offline mode');
  }
  
  // Handle different endpoints
  if (endpoint === '/contacts/tags' && method === 'GET') {
    // Get tags from localStorage
    const tags = JSON.parse(localStorage.getItem(`contacts_tags_${userId}`) || '[]');
    console.log('✅ Retrieved tags from localStorage:', tags);
    return Promise.resolve(tags);
  }
  
  if (endpoint === '/contacts/tags' && method === 'POST') {
    // Create new tag in localStorage
    const existingTags = JSON.parse(localStorage.getItem(`contacts_tags_${userId}`) || '[]');
    const newTag = {
      id: `tag_${userId}_${Date.now()}`,
      vendor_id: userId,
      name: data.name,
      color: data.color || '#8c97ac',
      created_at: new Date().toISOString()
    };
    
    // Check for duplicate names
    const duplicateName = existingTags.find((tag: any) => tag.name.toLowerCase() === data.name.toLowerCase());
    if (duplicateName) {
      throw new Error('A tag with this name already exists');
    }
    
    existingTags.push(newTag);
    localStorage.setItem(`contacts_tags_${userId}`, JSON.stringify(existingTags));
    
    console.log('✅ Created tag in localStorage:', newTag);
    return Promise.resolve(newTag);
  }
  
  if (endpoint === '/contacts' && method === 'POST') {
    // Create new contact in localStorage
    const existingContacts = JSON.parse(localStorage.getItem(`contacts_${userId}`) || '[]');
    const contactId = `contact_${userId}_${Date.now()}`;
    
    // Check for duplicate email/phone
    const duplicateEmail = existingContacts.find((contact: any) => contact.email === data.email.toLowerCase());
    const duplicatePhone = existingContacts.find((contact: any) => contact.phone === data.phone);
    
    if (duplicateEmail) {
      return Promise.resolve({ ok: false, field: 'email', message: 'This email address is already in use' });
    }
    if (duplicatePhone) {
      return Promise.resolve({ ok: false, field: 'phone', message: 'This phone number is already in use' });
    }
    
    const newContact = {
      id: contactId,
      vendor_id: userId,
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    existingContacts.push(newContact);
    localStorage.setItem(`contacts_${userId}`, JSON.stringify(existingContacts));
    
    console.log('✅ Created contact in localStorage:', newContact);
    return Promise.resolve({ ok: true, contact_id: contactId });
  }
  
  if (endpoint === '/contacts' && method === 'GET') {
    // Get contacts from localStorage
    const contacts = JSON.parse(localStorage.getItem(`contacts_${userId}`) || '[]');
    console.log('✅ Retrieved contacts from localStorage:', contacts);
    return Promise.resolve(contacts);
  }
  
  // If we don't handle this endpoint in offline mode, throw an error
  throw new Error(`Offline mode: Endpoint ${endpoint} not supported`);
}

async function createContact(contactData: any) {
  return await callAPI('/contacts', 'POST', contactData);
}

async function getTags(): Promise<ContactTag[]> {
  return await callAPI('/contacts/tags');
}

async function createTag(tagData: { name: string; color?: string }): Promise<ContactTag> {
  return await callAPI('/contacts/tags', 'POST', tagData);
}

export default function ContactWizard({ isOpen, onClose, onSuccess, onError }: ContactWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableTags, setAvailableTags] = useState<ContactTag[]>([]);
  const [newTagName, setNewTagName] = useState("");
  const [tagsLoaded, setTagsLoaded] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form data for each step
  const [step1Data, setStep1Data] = useState<ContactWizardStep1>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: ""
  });

  const [step2Data, setStep2Data] = useState<ContactWizardStep2>({
    status: "new_contact",
    tag_ids: [],
    notes: ""
  });

  const [step3Data, setStep3Data] = useState<ContactWizardStep3>({
    photo_mode: "none",
    avatar_key: "",
    photo_file: undefined,
    sms_opt_in: false,
    email_opt_in: true
  });

  // Load available tags when wizard opens
  const loadTags = async () => {
    try {
      const tags = await getTags();
      setAvailableTags(tags);
      setTagsLoaded(true);
    } catch (error) {
      console.error('Error loading tags:', error);
      setTagsLoaded(true); // Mark as loaded even on error to prevent infinite loop
    }
  };

  // Reset form when opening
  const resetForm = () => {
    setCurrentStep(1);
    setStep1Data({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company_name: ""
    });
    setStep2Data({
      status: "new_contact",
      tag_ids: [],
      notes: ""
    });
    setStep3Data({
      photo_mode: "none",
      avatar_key: "",
      photo_file: undefined,
      sms_opt_in: false,
      email_opt_in: true
    });
    setNewTagName("");
    setIsSubmitting(false);
    setTagsLoaded(false);
    setAvailableTags([]);
    
    // Clean up image preview
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl("");
    }
  };

  // Load tags when wizard opens using useEffect
  useEffect(() => {
    if (isOpen && !tagsLoaded) {
      // Add a small delay to ensure authentication system is ready
      const loadTagsWithDelay = async () => {
        try {
          // Check if we're in offline/mock mode first
          const { data: sessionData } = await supabase.auth.getSession();
          const hasSupabaseSession = sessionData?.session?.access_token;
          const savedUser = localStorage.getItem('zinnia_user');
          const savedAccessToken = localStorage.getItem('zinnia_access_token');
          
          // If we have a user in localStorage but no Supabase session and no saved access token,
          // we're likely in mock/offline mode - proceed to load tags
          const isOfflineMode = savedUser && !hasSupabaseSession && !savedAccessToken;
          
          if (isOfflineMode) {
            console.log('📱 Offline mode detected, loading tags immediately');
            await loadTags();
            return;
          }
          
          // For online mode, check for valid session
          if (sessionData?.error) {
            console.error('Error getting session:', sessionData.error);
            setTagsLoaded(true); // Mark as loaded to prevent infinite retry
            return;
          }
          
          if (!sessionData?.session?.access_token && !savedAccessToken) {
            console.log('No access token available, waiting for authentication...');
            // Don't mark as loaded, allow retry when session becomes available
            return;
          }
          
          console.log('Session available, loading tags...');
          await loadTags();
        } catch (error) {
          console.error('Error in loadTagsWithDelay:', error);
          setTagsLoaded(true); // Mark as loaded to prevent infinite retry
        }
      };
      
      // Small delay to allow authentication to settle
      const timeoutId = setTimeout(loadTagsWithDelay, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, tagsLoaded]);

  // Add retry mechanism for authentication - retry every 500ms for up to 3 times
  useEffect(() => {
    if (isOpen && !tagsLoaded) {
      let retryCount = 0;
      const maxRetries = 3;
      
      const retryLoadTags = async () => {
        try {
          // Check if we're in offline mode first
          const savedUser = localStorage.getItem('zinnia_user');
          const savedAccessToken = localStorage.getItem('zinnia_access_token');
          const { data: sessionData } = await supabase.auth.getSession();
          const hasSupabaseSession = sessionData?.session?.access_token;
          
          const isOfflineMode = savedUser && !hasSupabaseSession && !savedAccessToken;
          
          if (isOfflineMode) {
            console.log('📱 Offline mode in retry, loading tags immediately');
            await loadTags();
            return;
          }
          
          // For online mode, check for valid session
          const session = sessionData?.session;
          
          if (session?.access_token || savedAccessToken) {
            console.log('Retrying tag load with valid session...');
            await loadTags();
            return;
          }
          
          retryCount++;
          if (retryCount < maxRetries) {
            console.log(`Retry ${retryCount}/${maxRetries} - no session yet, retrying in 500ms...`);
            setTimeout(retryLoadTags, 500);
          } else {
            console.log('Max retries reached, marking tags as loaded to prevent infinite loop');
            setTagsLoaded(true);
          }
        } catch (error) {
          console.error('Error in retry mechanism:', error);
          setTagsLoaded(true);
        }
      };
      
      // Start retry mechanism after initial delay
      const timeoutId = setTimeout(retryLoadTags, 250);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  // Reset form when closing
  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  // Validate step 1
  const validateStep1 = (): ValidationError | null => {
    if (!step1Data.first_name.trim()) {
      return { field: "first_name", message: "First name is required" };
    }
    if (!step1Data.last_name.trim()) {
      return { field: "last_name", message: "Last name is required" };
    }
    if (!step1Data.email.trim()) {
      return { field: "email", message: "Email is required" };
    }
    if (!isValidEmail(step1Data.email)) {
      return { field: "email", message: "Please enter a valid email address" };
    }
    if (!step1Data.phone.trim()) {
      return { field: "phone", message: "Phone number is required" };
    }
    
    return null;
  };

  // Handle step 1 next
  const handleStep1Next = () => {
    const validation = validateStep1();
    if (validation) {
      onError(validation.field, validation.message);
      return;
    }
    setCurrentStep(2);
  };

  // Handle step 2 next
  const handleStep2Next = () => {
    setCurrentStep(3);
  };

  // Create new tag with better error handling
  const handleCreateTag = async () => {
    if (!newTagName.trim()) return;
    
    // Check for duplicate names before making API call (case-insensitive)
    const trimmedName = newTagName.trim();
    const existingTag = availableTags.find(tag => 
      tag.name.toLowerCase() === trimmedName.toLowerCase()
    );
    
    if (existingTag) {
      onError("tags", `A tag named "${trimmedName}" already exists. Please choose a different name.`);
      return;
    }
    
    try {
      console.log('Attempting to create tag:', trimmedName);
      
      const newTag = await createTag({
        name: trimmedName,
        color: "#8c97ac" // Default color
      });
      
      console.log('Tag created successfully:', newTag);
      
      setAvailableTags(prev => [...prev, newTag]);
      setStep2Data(prev => ({
        ...prev,
        tag_ids: [...prev.tag_ids, newTag.id]
      }));
      setNewTagName("");
    } catch (error: any) {
      console.error('Error creating tag:', error);
      
      // Provide more specific error messages based on the error type
      let errorMessage = "Failed to create tag";
      
      if (error.message.includes('A tag with this name already exists') || 
          error.message.includes('already exists')) {
        errorMessage = `A tag named "${trimmedName}" already exists. Please choose a different name.`;
        // Clear the input field so user can try again
        setNewTagName("");
      } else if (error.message.includes('Not authenticated')) {
        errorMessage = "Authentication expired. Please refresh the page and try again.";
      } else if (error.message.includes('please sign in again')) {
        errorMessage = "Please sign in again to continue.";
      } else if (error.message.includes('HTTP 401')) {
        errorMessage = "Authentication required. Please refresh the page and try again.";
      } else if (error.message.includes('HTTP 403')) {
        errorMessage = "Permission denied. Please check your account permissions.";
      } else if (error.message.includes('HTTP 500')) {
        errorMessage = "Server error. Please try again in a moment.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      onError("tags", errorMessage);
    }
  };

  // Handle tag toggle
  const handleTagToggle = (tagId: string) => {
    setStep2Data(prev => ({
      ...prev,
      tag_ids: prev.tag_ids.includes(tagId)
        ? prev.tag_ids.filter(id => id !== tagId)
        : [...prev.tag_ids, tagId]
    }));
  };

  // Handle photo file selection
  const handlePhotoFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Clean up previous preview URL to prevent memory leaks
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      
      // Create new preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      setStep3Data(prev => ({ ...prev, photo_file: file }));
    }
  };

  // Cleanup preview URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  // Upload photo to server endpoint
  const uploadPhoto = async (file: File): Promise<string> => {
    console.log('📸 Uploading photo via server endpoint:', file.name);
    
    // Check if we're in offline mode first
    const { data: sessionData } = await supabase.auth.getSession();
    const hasSupabaseSession = sessionData?.session?.access_token;
    const savedUser = localStorage.getItem('zinnia_user');
    const savedAccessToken = localStorage.getItem('zinnia_access_token');
    
    // If we're in offline/mock mode, just return a placeholder URL
    const isOfflineMode = savedUser && !hasSupabaseSession && !savedAccessToken;
    
    if (isOfflineMode) {
      console.log('📱 Offline mode - returning placeholder photo URL');
      // In offline mode, just return the preview URL we already have
      return imagePreviewUrl || URL.createObjectURL(file);
    }
    
    // Use the same authentication logic as callAPI
    let session = null;
    let accessToken = null;
    
    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.warn('⚠️ Session error from Supabase client:', sessionError);
      } else if (sessionData?.session?.access_token) {
        session = sessionData.session;
        accessToken = session.access_token;
        console.log('✅ Got valid session from Supabase client for photo upload');
      }
    } catch (supabaseError) {
      console.warn('⚠️ Supabase client session check failed:', supabaseError);
    }
    
    // Fallback: Try to get access token from localStorage if Supabase session failed
    if (!accessToken) {
      console.log('🔄 No Supabase session, checking localStorage for access token...');
      const savedAccessToken = localStorage.getItem('zinnia_access_token');
      
      if (savedAccessToken) {
        accessToken = savedAccessToken;
        console.log('✅ Using access token from localStorage for photo upload');
      } else {
        console.log('❌ No access token in localStorage either');
      }
    }
    
    // If we still don't have an access token, try to refresh the session ONE TIME ONLY
    if (!accessToken && session?.refresh_token) {
      console.log('🔄 Attempting to refresh session for photo upload...');
      
      try {
        const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();
        
        if (refreshError) {
          console.error('❌ Session refresh failed:', refreshError);
          throw new Error('Session expired - please sign in again');
        }
        
        if (refreshData?.session?.access_token) {
          accessToken = refreshData.session.access_token;
          console.log('✅ Session refreshed successfully for photo upload');
          
          // Save the new access token to localStorage
          localStorage.setItem('zinnia_access_token', accessToken);
        } else {
          console.error('❌ Session refresh did not return access token');
          throw new Error('Authentication failed - please sign in again');
        }
      } catch (refreshError) {
        console.error('❌ Session refresh exception:', refreshError);
        throw new Error('Session expired - please sign in again');
      }
    }

    // Final check - if we still don't have an access token, we can't proceed
    if (!accessToken) {
      console.error('❌ No access token available for photo upload after all attempts');
      throw new Error('Authentication required for photo upload - please sign in again');
    }

    // Create FormData to send the file
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6e4d8724/contacts/upload-photo`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Upload failed' }));
        console.error('Photo upload failed:', errorData);
        
        // If we get a 401, clear the stored access token since it's invalid
        if (response.status === 401) {
          console.log('🗑️ Clearing invalid access token from localStorage due to photo upload failure');
          localStorage.removeItem('zinnia_access_token');
        }
        
        throw new Error(errorData.error || 'Failed to upload photo');
      }

      const result = await response.json();
      
      if (!result.success || !result.url) {
        throw new Error('Invalid response from upload server');
      }

      console.log('✅ Photo uploaded successfully');
      return result.url;

    } catch (error) {
      console.error('Photo upload error:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to upload photo');
    }
  };

  // Submit the complete form
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Prepare contact data
      let photoUrl = "";
      if (step3Data.photo_mode === "upload" && step3Data.photo_file) {
        photoUrl = await uploadPhoto(step3Data.photo_file);
      }

      const contactData = {
        first_name: step1Data.first_name.trim(),
        last_name: step1Data.last_name.trim(),
        email: step1Data.email.toLowerCase().trim(),
        phone: formatPhoneToE164(step1Data.phone.trim()),
        company_name: step1Data.company_name?.trim() || undefined,
        status: step2Data.status,
        photo_mode: step3Data.photo_mode,
        avatar_key: step3Data.photo_mode === "avatar" ? step3Data.avatar_key : undefined,
        photo_url: step3Data.photo_mode === "upload" ? photoUrl : undefined,
        sms_opt_in: step3Data.sms_opt_in,
        email_opt_in: step3Data.email_opt_in,
        notes: step2Data.notes?.trim() || undefined,
        source: "manual",
        tag_ids: step2Data.tag_ids.length > 0 ? step2Data.tag_ids : undefined
      };

      // Create the contact via server
      const result = await createContact(contactData);

      if (result.ok) {
        // Success
        onSuccess(result.contact_id);
        onClose();
      } else {
        // Server returned validation error
        onError(result.field, result.message);
      }
      
    } catch (error: any) {
      console.error('Error creating contact:', error);
      onError("general", error.message || "Failed to create contact. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header with Stepper */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-center mb-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center min-w-20">
              <div className={`size-8 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-[#47567b] text-white' : 'border border-gray-300 text-gray-500'
              }`}>
                {currentStep > 1 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-base font-medium">1</span>
                )}
              </div>
              <span className={`text-base font-medium mt-2 text-center ${
                currentStep >= 1 ? 'text-[#47567b]' : 'text-gray-500'
              }`}>
                Contact basic info
              </span>
            </div>

            {/* Line */}
            <div className="w-15 h-px bg-gray-300 mx-4" />

            {/* Step 2 */}
            <div className="flex flex-col items-center min-w-20">
              <div className={`size-8 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-[#47567b] text-white' : 'border border-gray-300 text-gray-500'
              }`}>
                {currentStep > 2 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-base font-medium">2</span>
                )}
              </div>
              <span className={`text-base font-medium mt-2 text-center ${
                currentStep >= 2 ? 'text-[#47567b]' : 'text-gray-500'
              }`}>
                Organize your contact
              </span>
            </div>

            {/* Line */}
            <div className="w-15 h-px bg-gray-300 mx-4" />

            {/* Step 3 */}
            <div className="flex flex-col items-center min-w-20">
              <div className={`size-8 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'bg-[#47567b] text-white' : 'border border-gray-300 text-gray-500'
              }`}>
                <span className="text-base font-medium">3</span>
              </div>
              <span className={`text-base font-medium mt-2 text-center ${
                currentStep >= 3 ? 'text-[#47567b]' : 'text-gray-500'
              }`}>
                Upload photo
              </span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#47567b] mb-2">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={step1Data.first_name}
                    onChange={(e) => setStep1Data(prev => ({ ...prev, first_name: e.target.value }))}
                    placeholder="First name"
                    className="w-full h-9 px-3 text-sm text-[#667593] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#47567b] mb-2">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={step1Data.last_name}
                    onChange={(e) => setStep1Data(prev => ({ ...prev, last_name: e.target.value }))}
                    placeholder="Last name"
                    className="w-full h-9 px-3 text-sm text-[#667593] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#47567b] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={step1Data.email}
                  onChange={(e) => setStep1Data(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Email"
                  className="w-full h-9 px-3 text-sm text-[#667593] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#47567b] mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={step1Data.phone}
                  onChange={(e) => setStep1Data(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Phone number"
                  className="w-full h-9 px-3 text-sm text-[#667593] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#47567b] mb-2">
                  Company name
                </label>
                <input
                  type="text"
                  value={step1Data.company_name}
                  onChange={(e) => setStep1Data(prev => ({ ...prev, company_name: e.target.value }))}
                  placeholder="Company name"
                  className="w-full h-9 px-3 text-sm text-[#667593] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                />
              </div>
            </div>
          )}

          {/* Step 2: Status & Tags */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#47567b] mb-2">
                  Status <span className="text-red-500">*</span>
                </label>
                <select
                  value={step2Data.status}
                  onChange={(e) => setStep2Data(prev => ({ ...prev, status: e.target.value as ContactStatus }))}
                  className="w-full h-9 px-3 text-sm text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                >
                  {STATUS_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#47567b] mb-2">Tags</label>
                <p className="text-sm text-[#667593] mb-4">
                  Tags are custom labels you can assign to contacts. They help you organize and quickly find contacts with specific characteristics.
                </p>
                
                {/* Create new tag */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    placeholder="Create new tag..."
                    className="flex-1 h-9 px-3 text-sm text-[#667593] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                    onKeyPress={(e) => e.key === 'Enter' && handleCreateTag()}
                  />
                  <button
                    onClick={handleCreateTag}
                    disabled={!newTagName.trim()}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#2f7685] hover:bg-[#265a66] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    Add
                  </button>
                </div>

                {/* Selected tags */}
                {step2Data.tag_ids.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[#47567b] mb-2">Selected Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {availableTags
                        .filter(tag => step2Data.tag_ids.includes(tag.id))
                        .map(tag => (
                        <div 
                          key={`selected-${tag.id}`}
                          className="flex items-center gap-1 px-3 py-1 text-sm bg-[#2f7685] text-white border border-[#2f7685] rounded-full"
                        >
                          <span>{tag.name}</span>
                          <button
                            onClick={() => handleTagToggle(tag.id)}
                            className="ml-1 p-0.5 hover:bg-[#265a66] rounded-full transition-colors"
                            title="Remove tag"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available tags */}
                <div>
                  <p className="text-sm font-medium text-[#47567b] mb-2">Available Tags</p>
                  <p className="text-xs text-[#667593] mb-3">Click to add tags to this contact</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTags
                      .filter(tag => !step2Data.tag_ids.includes(tag.id))
                      .map(tag => (
                      <button
                        key={tag.id}
                        onClick={() => handleTagToggle(tag.id)}
                        className="px-3 py-1 text-sm bg-white text-[#667593] border border-[#8c97ac] hover:border-[#2f7685] hover:text-[#2f7685] rounded-full transition-colors"
                      >
                        {tag.name}
                      </button>
                    ))}
                    {availableTags.filter(tag => !step2Data.tag_ids.includes(tag.id)).length === 0 && (
                      <p className="text-sm text-[#8c97ac] italic">All available tags are selected</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#47567b] mb-2">Notes</label>
                <textarea
                  value={step2Data.notes}
                  onChange={(e) => setStep2Data(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Add any notes about this contact..."
                  rows={3}
                  className="w-full px-3 py-2 text-sm text-[#667593] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685] resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Photo & Preferences */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#47567b] mb-4">Photo Option</label>
                <div className="space-y-3">
                  {/* Use avatar */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="photo_mode"
                      value="avatar"
                      checked={step3Data.photo_mode === "avatar"}
                      onChange={(e) => setStep3Data(prev => ({ ...prev, photo_mode: e.target.value as any }))}
                      className="w-4 h-4 text-[#2f7685] border-gray-300 focus:ring-[#2f7685]"
                    />
                    <span className="text-sm font-medium text-[#47567b]">Use avatar</span>
                  </label>

                  {/* Upload image */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="photo_mode"
                      value="upload"
                      checked={step3Data.photo_mode === "upload"}
                      onChange={(e) => setStep3Data(prev => ({ ...prev, photo_mode: e.target.value as any }))}
                      className="w-4 h-4 text-[#2f7685] border-gray-300 focus:ring-[#2f7685]"
                    />
                    <span className="text-sm font-medium text-[#47567b]">Upload an image</span>
                  </label>

                  {/* No photo */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="photo_mode"
                      value="none"
                      checked={step3Data.photo_mode === "none"}
                      onChange={(e) => setStep3Data(prev => ({ ...prev, photo_mode: e.target.value as any }))}
                      className="w-4 h-4 text-[#2f7685] border-gray-300 focus:ring-[#2f7685]"
                    />
                    <span className="text-sm font-medium text-[#47567b]">No photo</span>
                  </label>
                </div>
              </div>

              {/* Avatar selection */}
              {step3Data.photo_mode === "avatar" && (
                <div>
                  <label className="block text-sm font-medium text-[#47567b] mb-3">Choose Avatar</label>
                  <div className="grid grid-cols-3 gap-3">
                    {AVATAR_OPTIONS.map(avatar => (
                      <button
                        key={avatar.key}
                        onClick={() => setStep3Data(prev => ({ ...prev, avatar_key: avatar.key }))}
                        className={`p-4 border-2 rounded-lg text-center transition-colors ${
                          step3Data.avatar_key === avatar.key
                            ? 'border-[#2f7685] bg-[#2f7685]/10'
                            : 'border-gray-200 hover:border-[#2f7685]'
                        }`}
                      >
                        <div className="text-2xl mb-2">{avatar.icon}</div>
                        <div className="text-sm font-medium text-[#47567b]">{avatar.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* File upload */}
              {step3Data.photo_mode === "upload" && (
                <div>
                  <label className="block text-sm font-medium text-[#47567b] mb-3">Upload Photo</label>
                  
                  {imagePreviewUrl && step3Data.photo_file ? (
                    /* Image preview */
                    <div className="space-y-4">
                      <div className="relative border-2 border-[#2f7685] rounded-lg p-4 bg-[#2f7685]/5">
                        <img 
                          src={imagePreviewUrl} 
                          alt="Preview" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 right-2">
                          <button
                            onClick={() => {
                              if (imagePreviewUrl) {
                                URL.revokeObjectURL(imagePreviewUrl);
                              }
                              setImagePreviewUrl("");
                              setStep3Data(prev => ({ ...prev, photo_file: undefined }));
                              if (fileInputRef.current) {
                                fileInputRef.current.value = '';
                              }
                            }}
                            className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-3 text-center">
                          <p className="text-sm font-medium text-[#47567b]">{step3Data.photo_file.name}</p>
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="text-sm text-[#2f7685] hover:text-[#265a66] underline mt-1"
                          >
                            Choose different image
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Upload area */
                    <div 
                      className="border-2 border-dashed border-[#8c97ac] rounded-lg p-8 text-center cursor-pointer hover:border-[#2f7685] transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="text-[#47567b] mb-2">
                        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                        </svg>
                      </div>
                      <p className="text-base font-medium text-[#47567b]">
                        Drop your image here or <span className="text-[#2f7685] underline">browse</span>
                      </p>
                      <p className="text-sm text-[#667593] mt-2">
                        Supported formats: JPG, PNG, GIF (max 5MB)
                      </p>
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoFileChange}
                    className="hidden"
                  />
                </div>
              )}

              {/* Opt-in preferences */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-[#47567b]">Communication Preferences</h3>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={step3Data.email_opt_in}
                    onChange={(e) => setStep3Data(prev => ({ ...prev, email_opt_in: e.target.checked }))}
                    className="w-4 h-4 text-[#2f7685] border-gray-300 rounded focus:ring-[#2f7685]"
                  />
                  <span className="text-sm text-[#47567b]">Email notifications (recommended)</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={step3Data.sms_opt_in}
                    onChange={(e) => setStep3Data(prev => ({ ...prev, sms_opt_in: e.target.checked }))}
                    className="w-4 h-4 text-[#2f7685] border-gray-300 rounded focus:ring-[#2f7685]"
                  />
                  <span className="text-sm text-[#47567b]">SMS notifications</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#47567b] border border-[#8c97ac] rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="px-4 py-2 text-sm font-medium text-[#47567b] border border-[#8c97ac] rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          )}

          {currentStep < 3 ? (
            <button
              onClick={currentStep === 1 ? handleStep1Next : handleStep2Next}
              className="px-4 py-2 text-sm font-medium text-white bg-[#667493] hover:bg-[#5a6485] rounded-lg transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-[#2f7685] hover:bg-[#265a66] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              {isSubmitting ? 'Creating...' : 'Create Contact'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}