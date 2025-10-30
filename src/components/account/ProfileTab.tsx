import { useState, useRef } from 'react';
import { Upload, X, Camera, Trash2, Eye } from 'lucide-react';
import ContactPhoto from "../ContactPhoto";
import type { ProfileData } from "../../constants/accountData";

interface UploadedPhoto {
  id: string;
  file: File;
  preview: string;
  name: string;
  size: number;
  uploadedAt: Date;
}

interface ProfileTabProps {
  profileData: ProfileData;
  setProfileData: (data: ProfileData | ((prev: ProfileData) => ProfileData)) => void;
  loading: boolean;
  onSave: () => void;
  profilePhotos: UploadedPhoto[];
  setProfilePhotos: (photos: UploadedPhoto[]) => void;
}

export default function ProfileTab({ profileData, setProfileData, loading, onSave, profilePhotos, setProfilePhotos }: ProfileTabProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewPhoto, setPreviewPhoto] = useState<UploadedPhoto | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file: File): string | null => {
    const acceptedFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    const maxFileSize = 10; // 10MB for profile pic
    
    if (!acceptedFormats.includes(file.type)) {
      return `File type ${file.type} is not supported. Please use: ${acceptedFormats.join(', ')}`;
    }
    if (file.size > maxFileSize * 1024 * 1024) {
      return `File size must be less than ${maxFileSize}MB`;
    }
    return null;
  };

  const createPhotoObject = (file: File): UploadedPhoto => ({
    id: Math.random().toString(36).substr(2, 9),
    file,
    preview: URL.createObjectURL(file),
    name: file.name,
    size: file.size,
    uploadedAt: new Date()
  });

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    setError(null);
    
    // Only take the first file since we only allow one profile photo
    const file = files[0];
    
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    const newPhoto = createPhotoObject(file);
    setProfilePhotos([newPhoto]); // Replace with single photo
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };


  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const openPreview = (photo: UploadedPhoto) => {
    setPreviewPhoto(photo);
  };

  const closePreview = () => {
    setPreviewPhoto(null);
  };

  return (
    <div className="space-y-8">
      {/* Profile Pictures Section */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#2f7685]/10 rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6 text-[#2f7685]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#47567B] mb-1" style={{ fontFamily: 'Literata, serif' }}>
              Profile Pictures
            </h3>
            <p className="text-[#667593] text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Upload photos to showcase your work and build trust with customers
            </p>
          </div>
        </div>

        {/* Upload Area or Photo Preview */}
        {profilePhotos.length === 0 ? (
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
              isDragOver
                ? 'border-[#2f7685] bg-[#2f7685]/5'
                : 'border-[#ccd7e6] hover:border-[#2f7685] hover:bg-white'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleFileInputChange}
              className="hidden"
            />

            <div className="space-y-3">
              <div className="mx-auto w-12 h-12 bg-[#2f7685]/10 rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-[#2f7685]" />
              </div>

              <div>
                <p className="text-[#47567B] font-medium mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Drag and drop a photo here, or click to browse
                </p>
                <p className="text-sm text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Supports: JPEG, PNG, WebP, GIF • Max 10MB
                </p>
              </div>

              <button
                onClick={openFileDialog}
                className="bg-[#2f7685] hover:bg-[#1e5a63] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Choose Photo
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Avatar Preview */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="w-20 h-20 bg-white rounded-full border-2 border-[#e5e7eb] overflow-hidden">
                  <img
                    src={profilePhotos[0].preview}
                    alt={profilePhotos[0].name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1">
                    <button
                      onClick={() => openPreview(profilePhotos[0])}
                      className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                      title="Preview"
                    >
                      <Eye className="w-3 h-3 text-white" />
                    </button>
                    <button
                      onClick={() => setProfilePhotos([])}
                      className="p-1.5 bg-red-500/80 hover:bg-red-600 rounded-full transition-colors"
                      title="Remove"
                    >
                      <X className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Photo Info and Actions */}
              <div className="flex-1">
                <div className="mb-2">
                  <p className="text-sm font-medium text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {profilePhotos[0].name}
                  </p>
                  <p className="text-xs text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {formatFileSize(profilePhotos[0].size)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={openFileDialog}
                    className="text-[#2f7685] hover:text-[#1e5a63] text-sm font-medium flex items-center gap-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <Upload className="w-3 h-3" />
                    Change
                  </button>
                  <button
                    onClick={() => setProfilePhotos([])}
                    className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <Trash2 className="w-3 h-3" />
                    Remove
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleFileInputChange}
          className="hidden"
        />

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700 whitespace-pre-line" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {error}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Personal Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#2f7685]/10 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-[#2f7685]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#47567B] mb-1" style={{ fontFamily: 'Literata, serif' }}>
              Personal Information
            </h3>
            <p className="text-[#667593] text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Update your personal details and contact information
            </p>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#47567B] mb-2">
            First Name
          </label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
            className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#47567B] mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
            className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#47567B] mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#47567B] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={profileData.phone}
            onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#47567B] mb-2">
            Website
          </label>
          <input
            type="url"
            value={profileData.website}
            onChange={(e) => setProfileData(prev => ({ ...prev, website: e.target.value }))}
            className="w-full h-10 px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#47567B] mb-2">
            Bio
          </label>
          <textarea
            value={profileData.bio}
            onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
            rows={4}
            className="w-full px-3 py-2 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685] resize-none"
          />
        </div>
      </div>

        <div className="flex justify-end">
          <button
            onClick={onSave}
            disabled={loading}
            className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Photo Preview Modal */}
      {previewPhoto && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-[#e5e7eb]">
              <h3 className="text-lg font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
                {previewPhoto.name}
              </h3>
              <button
                onClick={closePreview}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-[#667593]" />
              </button>
            </div>
            
            <div className="p-4">
              <img
                src={previewPhoto.preview}
                alt={previewPhoto.name}
                className="max-w-full max-h-[60vh] object-contain mx-auto"
              />
              
              <div className="mt-4 flex items-center justify-between text-sm text-[#667593]">
                <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Size: {formatFileSize(previewPhoto.size)}
                </span>
                <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Uploaded: {previewPhoto.uploadedAt.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}