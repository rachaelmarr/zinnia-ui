import { useCallback } from 'react';
import { listingsAPI } from '../lib/api';
import type { WizardData, View } from '../types';

interface UseWizardDataProps {
  user: any;
  userType: string | null;
  setWizardData: React.Dispatch<React.SetStateAction<WizardData>>;
  setCurrentView: (view: View) => void;
  setEditingPhotoUrl: React.Dispatch<React.SetStateAction<string>>;
  setEditingPhotoIndex: React.Dispatch<React.SetStateAction<number>>;
  setPhotoEdits: React.Dispatch<React.SetStateAction<{[key: string]: { scale: number, offset: { x: number, y: number } }}>>;
  setHasCompletedListing: React.Dispatch<React.SetStateAction<boolean>>;
  loadVendorData: () => Promise<void>;
  wizardData: WizardData;
  editingPhotoUrl: string;
  editingPhotoIndex: number;
}

export function useWizardData({
  user,
  userType,
  setWizardData,
  setCurrentView,
  setEditingPhotoUrl,
  setEditingPhotoIndex,
  setPhotoEdits,
  setHasCompletedListing,
  loadVendorData,
  wizardData,
  editingPhotoUrl,
  editingPhotoIndex
}: UseWizardDataProps) {
  const handleEditPhoto = useCallback((photoUrl: string, photoIndex: number) => {
    setEditingPhotoUrl(photoUrl);
    setEditingPhotoIndex(photoIndex);
    setCurrentView('photoEdit');
  }, [setEditingPhotoUrl, setEditingPhotoIndex, setCurrentView]);

  const handleClosePhotoEdit = useCallback(() => {
    // Photo editing now happens inline, no navigation needed
  }, []);

  const handleSavePhotoEdit = useCallback((editData: { scale: number, offset: { x: number, y: number } }) => {
    const photoKey = `${editingPhotoUrl}_${editingPhotoIndex}`;
    setPhotoEdits(prev => ({
      ...prev,
      [photoKey]: editData
    }));
    // Photo editing now happens inline, no navigation needed
  }, [editingPhotoUrl, editingPhotoIndex, setPhotoEdits]);

  const handlePhotosNext = useCallback((photos: string[]) => {
    setWizardData(prev => ({ ...prev, photos }));
    setCurrentView('service');
  }, [setWizardData, setCurrentView]);


  const handleServiceBack = useCallback(() => {
    setCurrentView('createListing');
  }, [setCurrentView]);

  const handleServiceNext = useCallback((serviceData: any) => {
    setWizardData(prev => ({ ...prev, service: serviceData }));
    setCurrentView('review');
  }, [setWizardData, setCurrentView]);

  const handleReviewBack = useCallback(() => {
    setCurrentView('service');
  }, [setCurrentView]);

  const handleReviewComplete = useCallback(async () => {
    if (!user || userType !== 'vendor') return;
    
    try {
      // Load data from localStorage and merge with wizardData
      const tempListingData = localStorage.getItem('tempListingData');
      let finalWizardData = wizardData;
      
      if (tempListingData) {
        const parsedData = JSON.parse(tempListingData);
        finalWizardData = {
          ...wizardData,
          ...parsedData,
          photos: parsedData.photos || wizardData.photos || [],
          businessHours: parsedData.businessHours || wizardData.businessHours || [],
          description: parsedData.description || wizardData.description || ''
        };
        
        // Update the wizardData state with merged data
        setWizardData(finalWizardData);
        
        // Don't clear the temporary data yet - let CreatedListing component access it
        // localStorage.removeItem('tempListingData');
      }
      
      await listingsAPI.createListing(user.id, finalWizardData);
      
      console.log('Listing published successfully!', finalWizardData);
      setHasCompletedListing(true);
      
      await loadVendorData();
      
      setCurrentView('createdListing');
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  }, [user, userType, wizardData, setHasCompletedListing, loadVendorData, setCurrentView, setWizardData]);

  return {
    handleEditPhoto,
    handleClosePhotoEdit,
    handleSavePhotoEdit,
    handlePhotosNext,
    handleServiceBack,
    handleServiceNext,
    handleReviewBack,
    handleReviewComplete
  };
}