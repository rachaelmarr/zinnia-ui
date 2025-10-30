import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Star, MapPin, Share2, Edit3, Calendar, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Header from '../Header';

interface CreatedServicesProps {
  onNavigate: (view: string) => void;
  wizardData?: any;
}

export default function CreatedServices({ onNavigate, wizardData }: CreatedServicesProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [listingData, setListingData] = useState<any>(null);

  // Load data from localStorage and wizardData
  useEffect(() => {
    try {
      const stored = localStorage.getItem('tempListingData');
      let data = wizardData || {};
      
      if (stored) {
        const parsedData = JSON.parse(stored);
        data = { ...data, ...parsedData };
      }
      
      setListingData(data);
      console.log('🎯 Loaded listing data for services page:', data);
    } catch (error) {
      console.error('Error loading listing data:', error);
    }
  }, [wizardData]);

  const handleBackToDashboard = () => {
    onNavigate('dashboard');
  };

  const handleBackToListing = () => {
    onNavigate('createdListing');
  };

  const handleEditService = () => {
    onNavigate('service');
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleShare = () => {
    console.log('Sharing service:', listingData?.service?.name);
  };

  const renderStars = (rating: number, size: 'sm' | 'md' = 'md') => {
    const starSize = size === 'sm' ? 16 : 20;
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={starSize} 
            className={star <= Math.floor(rating) ? 'fill-[#2E7684] text-[#2E7684]' : 'text-[#2E7684]'} 
          />
        ))}
      </div>
    );
  };

  const formatBusinessHours = (hours: any[]) => {
    if (!hours || hours.length === 0) return 'Hours not specified';
    
    return hours
      .filter(day => day.enabled)
      .map(day => `${day.name}: ${day.startTime} - ${day.endTime}`)
      .join(', ');
  };

  if (!listingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2E7684] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={handleBackToListing}
            className="flex items-center gap-2 text-[#2E7684] hover:text-[#1e5a63] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Listing</span>
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {listingData.service?.name || 'Your Service'}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#2E7684] text-[#2E7684]" />
                      <span className="text-sm">New Service</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{listingData.location || 'Location not specified'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleFavorite}
                    className={`p-2 rounded-full transition-colors ${
                      isFavorited ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Service Image */}
              {listingData.service?.image || listingData.photos?.[0] ? (
                <div className="mb-6">
                  <ImageWithFallback
                    src={listingData.service?.image || listingData.photos?.[0]}
                    alt={listingData.service?.name || 'Service'}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ) : null}
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
              
              <div className="space-y-6">
                {/* Price */}
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <span className="text-lg font-medium text-gray-900">Price</span>
                  <span className="text-2xl font-bold text-[#2E7684]">
                    ${listingData.service?.price || '0'}
                  </span>
                </div>

                {/* Description */}
                {listingData.service?.description && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-700 leading-relaxed">{listingData.service.description}</p>
                  </div>
                )}

                {/* What's Included */}
                {listingData.service?.included && listingData.service.included.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {listingData.service.included.map((item: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Duration */}
                {listingData.service?.duration && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Duration</h4>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{listingData.service.duration}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleEditService}
                  className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Edit3 className="w-5 h-5" />
                  Edit Service
                </button>
              </div>
            </div>

            {/* Business Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Business Name</h4>
                  <p className="text-gray-700">{listingData.businessName || 'Not specified'}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700">{listingData.location || 'Not specified'}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-700">{formatBusinessHours(listingData.businessHours)}</p>
                </div>

                {listingData.description && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">About</h4>
                    <p className="text-gray-700 leading-relaxed">{listingData.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews Section (Empty for new services) */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reviews</h3>
              <div className="text-center py-8">
                <Star className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No reviews yet</p>
                <p className="text-sm text-gray-400 mt-1">Reviews will appear here once couples start booking this service</p>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#2E7684] mb-2">
                    ${listingData.service?.price || '0'}
                  </div>
                  <p className="text-gray-600">per {listingData.service?.duration || 'service'}</p>
                </div>

                {/* Booking Information */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">Available for booking</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {listingData.service?.duration || 'Duration not specified'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">Instant confirmation</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleEditService}
                    className="w-full bg-[#2E7684] text-white py-3 rounded-lg hover:bg-[#1e5a63] transition-colors"
                  >
                    Edit Service Details
                  </button>
                  
                  <button
                    onClick={handleBackToListing}
                    className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back to Listing
                  </button>
                </div>

                {/* Contact Information */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Need help?</h4>
                  <p className="text-sm text-gray-600">
                    Contact support if you need assistance with your service listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






