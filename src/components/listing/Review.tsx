import { useState, useEffect } from "react";
import { Heart, Star, MapPin } from 'lucide-react';
import { ImageWithFallback } from "../figma/ImageWithFallback";
import PhotoGallery from "../PhotoGallery";
import CreateListingStepper from "./CreateListingStepper";

interface ReviewProps {
  onNavigate?: (view: string) => void;
  onBack?: () => void;
  onComplete?: () => void;
  wizardData?: any;
}

export default function Review({ onNavigate, onBack, onComplete, wizardData }: ReviewProps) {
  // Load data from localStorage (from steps 1 and 2)
  const [listingData, setListingData] = useState(() => {
    try {
      const stored = localStorage.getItem('tempListingData');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error loading listing data from localStorage:', error);
      return null;
    }
  });

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  // Load fresh data when component mounts
  useEffect(() => {
    try {
      const stored = localStorage.getItem('tempListingData');
      if (stored) {
        const parsedData = JSON.parse(stored);
        setListingData(parsedData);
        console.log('🎯 Loaded listing data from localStorage:', parsedData);
      }
    } catch (error) {
      console.error('Error loading listing data from localStorage:', error);
    }
  }, []);

  // Combine wizardData with localStorage data
  const combinedData = {
    ...wizardData,
    ...listingData,
    // Prioritize wizardData for photos since they're stored there via handlePhotosNext
    photos: wizardData?.photos || listingData?.photos || [],
    businessHours: listingData?.businessHours || wizardData?.businessHours || [],
    description: listingData?.description || wizardData?.description || '',
    service: wizardData?.service || null
  };

  // Debug logging
  console.log('🎯 Review component - listingData:', listingData);
  console.log('🎯 Review component - wizardData:', wizardData);
  console.log('🎯 Review component - combinedData:', combinedData);
  console.log('🎯 Review component - photos array:', combinedData.photos);
  console.log('🎯 Review component - photos length:', combinedData.photos?.length);

  const handleComplete = () => {
    // Merge localStorage data into wizardData before completing
    if (listingData) {
      // Update wizardData with the combined data
      const updatedWizardData = {
        ...wizardData,
        ...listingData,
        photos: listingData.photos || wizardData?.photos || [],
        businessHours: listingData.businessHours || wizardData?.businessHours || [],
        description: listingData.description || wizardData?.description || ''
      };
      
      // Store the updated data back to wizardData state
      // This will be handled by the parent component
      console.log('🎯 Updated wizard data for completion:', updatedWizardData);
    }
    
    if (onComplete) {
      onComplete();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleGalleryOpen = (index: number) => {
    setGalleryStartIndex(index);
    setIsGalleryOpen(true);
  };

  const handleGalleryClose = () => {
    setIsGalleryOpen(false);
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

  // Create a single service from the wizard data
  const createServiceFromWizardData = () => {
    const service = combinedData?.service || {};
    return {
      id: 'wizard-service',
      name: service.serviceName || service.type || 'Wedding Photography',
      image: combinedData.photos?.[0] || '/assets/vendor-default.png',
      description: service.description || combinedData.description || 'Professional wedding photography services',
      hoursIncluded: service.hours || '5',
      totalGuests: '10',
      whatsIncluded: service.included ? Object.keys(service.included).filter(key => service.included[key] === true || (typeof service.included[key] === 'object' && service.included[key].selected)) : ['Ceremony', 'Bridal portraits', 'First Look', 'Reception'],
      whatsDelivered: service.delivered ? Object.keys(service.delivered).filter(key => service.delivered[key] === true || (typeof service.delivered[key] === 'object' && service.delivered[key].selected)) : ['Online gallery', 'Unedited photos', 'Photo album', 'Highlight film', 'Same day prints'],
      price: parseInt(service.price) || 1092
    };
  };

  const service = createServiceFromWizardData();

  return (
    <div className="min-h-screen bg-white relative">
      {/* Close button */}
      <button 
        onClick={() => onNavigate?.('listings')}
        className="absolute right-6 top-6 z-10 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke="#47567B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {/* Stepper Section */}
      <div className="w-full flex justify-center pt-4 pb-8">
        <CreateListingStepper stepNumber={3} debug={false} />
      </div>

      {/* Title and Description */}
      <div className="px-6 pb-4">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start leading-[0] px-3 py-0 text-[#47567b] text-center">
          <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center text-[32px]">
            <p className="block leading-[1.5]">Review your listing</p>
          </div>
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px]">
            <p className="adjustLetterSpacing block leading-[1.5]">This is how you'll be viewed to customers. You can always edit it later.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 md:px-10 pb-32">
        {/* Image Gallery - 2+2 Grid Layout */}
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
            {/* Top Row - Two photos side by side */}
            <div className="col-span-2 grid grid-cols-2 gap-4 h-1/2">
              {/* Photo 1 */}
              <div className="h-full">
                <button 
                  onClick={() => handleGalleryOpen(0)}
                  className="w-full h-full group"
                >
                  <ImageWithFallback
                    src={combinedData.photos?.[0] || '/assets/vendor-default.png'}
                    alt={combinedData?.businessName || "Business"}
                    className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </button>
              </div>
              
              {/* Photo 2 */}
              <div className="h-full">
                <button 
                  onClick={() => handleGalleryOpen(1)}
                  className="w-full h-full group"
                >
                  <ImageWithFallback
                    src={combinedData.photos?.[1] || '/assets/vendor-default.png'}
                    alt={`Gallery image 2`}
                    className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </button>
              </div>
            </div>
            
            {/* Bottom Row - Two photos side by side */}
            <div className="col-span-2 grid grid-cols-2 gap-4 h-1/2">
              {/* Photo 3 */}
              <div className="h-full">
                <button 
                  onClick={() => handleGalleryOpen(2)}
                  className="w-full h-full group"
                >
                  <ImageWithFallback
                    src={combinedData.photos?.[2] || '/assets/vendor-default.png'}
                    alt={`Gallery image 3`}
                    className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </button>
              </div>
              
              {/* Photo 4 */}
              <div className="h-full">
                <button 
                  onClick={() => handleGalleryOpen(3)}
                  className="w-full h-full group"
                >
                  <ImageWithFallback
                    src={combinedData.photos?.[3] || '/assets/vendor-default.png'}
                    alt={`Gallery image 4`}
                    className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Info */}
        <div className="mb-8">
          {/* Name, Rating, and Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-5">
            <div className="flex-1">
              <h1 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[32px] leading-[1.2] mb-2">
                {combinedData?.businessName || combinedData?.service?.serviceName || "Linda's Wedding Photography"}
              </h1>
              
              <div className="flex items-center gap-4">
                {renderStars(3, 'md')}
                <span className="text-[#47567b] text-sm">
                  3.0 | <span className="text-[#2e7684] underline cursor-pointer">2 reviews</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="flex items-center gap-2 px-3 py-2 text-[#47567b] hover:bg-gray-100 rounded-full h-9">
                <Heart size={20} />
                <span className="text-sm font-medium">Favorite</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-5">
            <div>
              <p className="text-[#47567b] text-sm leading-relaxed max-w-[440px]">
                {combinedData?.description || 'Professional wedding photography services with a focus on capturing your special moments with creativity and care.'}
              </p>
            </div>
            <div>
              <ul className="text-[#47567b] text-sm space-y-1 max-w-[440px]">
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 bg-[#47567b] rounded-full mt-2 flex-shrink-0"></span>
                  Photos will be available in 60 days
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 bg-[#47567b] rounded-full mt-2 flex-shrink-0"></span>
                  You will have the rights to print the photos
                </li>
              </ul>
            </div>
          </div>

          {/* Single Service Card */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="bg-white border border-[#ccd7e6] rounded-lg w-full max-w-[440px]">
                {/* Service Image */}
                <div className="h-[325px] overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service Content */}
                <div className="p-5">
                  {/* Service Name */}
                  <h3 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[20px] leading-[1.5] mb-1">
                    {service.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1 mb-3">
                    <MapPin size={14} className="text-[#47567b]" />
                    <span className="text-[#47567b] text-sm">
                      {combinedData?.service?.serviceLocation === 'mobile' ? 'Multiple Locations' : 'Skokie, IL'} • {combinedData?.service?.serviceLocation === 'mobile' ? 'Mobile Business' : 'Physical Location'}
                    </span>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="font-['Literata:ExtraBold',_sans-serif] font-extrabold text-[#47567b] text-sm">
                        Hours included: 
                      </span>
                      <span className="text-[#47567b] text-sm ml-1">{service.hoursIncluded}</span>
                    </div>
                    
                    <div>
                      <span className="font-['Literata:ExtraBold',_sans-serif] font-extrabold text-[#47567b] text-sm">
                        Total guests: 
                      </span>
                      <span className="text-[#47567b] text-sm ml-1">{service.totalGuests}</span>
                    </div>

                    <div>
                      <h4 className="font-['Literata:ExtraBold',_sans-serif] font-extrabold text-[#47567b] text-sm mb-1">
                        Description
                      </h4>
                      <p className="text-[#47567b] text-sm">{service.description}</p>
                    </div>

                    <div>
                      <h4 className="font-['Literata:ExtraBold',_sans-serif] font-extrabold text-[#47567b] text-sm mb-1">
                        What's included
                      </h4>
                      <p className="text-[#47567b] text-sm">{service.whatsIncluded.join(', ')}</p>
                    </div>

                    <div>
                      <h4 className="font-['Literata:ExtraBold',_sans-serif] font-extrabold text-[#47567b] text-sm mb-2">
                        What's delivered
                      </h4>
                      <div className="space-y-2">
                        {service.whatsDelivered.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-[#47567b] rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="text-[#47567b] text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="bg-neutral-100 p-5 rounded-lg">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-base">
                          ${service.price.toLocaleString()}.00 total
                        </div>
                        <div className="text-[#47567b] text-sm">includes taxes + fees</div>
                      </div>
                      <button className="px-4 py-2 bg-[#667493] text-white hover:bg-[#5a6587] rounded-full transition-all duration-300 h-9 flex items-center gap-2">
                        <span className="text-sm font-medium">Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8 max-w-[655px]">
          <h2 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[24px] leading-[1.5] mb-3">
            2 reviews
          </h2>

          <div className="space-y-5">
            {[
              {
                id: 1,
                rating: 4,
                customerName: 'Maya Rudolph',
                date: 'November 30, 2023',
                comment: 'Absolutely fantastic service! The photographer was professional, creative, and captured every special moment beautifully. Highly recommended for any wedding.'
              },
              {
                id: 2,
                rating: 4,
                customerName: 'Maya Rudolph',
                date: 'November 30, 2023',
                comment: 'Great experience from start to finish. The team was responsive, the photos turned out amazing, and the delivery was prompt. Would definitely book again.'
              }
            ].map((review) => (
              <div key={review.id} className="border-b border-[#ccd7e6] pb-4">
                <div className="flex flex-wrap items-center gap-[13px] mb-4">
                  {renderStars(review.rating, 'sm')}
                  <span className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-sm">
                    {review.customerName}
                  </span>
                  <div className="w-[17px] h-[17px] flex items-center justify-center">
                    <div className="w-[17px] h-[1px] bg-[#ccd7e6] rotate-90"></div>
                  </div>
                  <span className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-sm">
                    {review.date}
                  </span>
                </div>
                <p className="text-[#47567b] text-sm leading-relaxed max-w-[540px]">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      {isGalleryOpen && combinedData.photos && combinedData.photos.length > 0 && (
        <PhotoGallery
          images={combinedData.photos}
          initialIndex={galleryStartIndex}
          onClose={handleGalleryClose}
          vendorName={combinedData?.businessName || "Business"}
        />
      )}

      {/* Bottom Actions - FIXED STICKY BAR */}
      <div className="fixed bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start left-0 right-0 overflow-clip px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] z-20" style={{backgroundColor: '#f5f5f5'}}>
        <div className="box-border content-stretch flex gap-3 items-start justify-start p-0 relative shrink-0">
          {/* Back Button */}
          <div 
            className="box-border content-stretch flex h-[37px] items-center justify-center p-0 relative shrink-0 w-[164px] cursor-pointer"
            onClick={handleBack}
          >
            <div className="basis-0 grow min-h-px min-w-px relative rounded-3xl shrink-0 hover:bg-gray-100 transition-colors">
              <div className="flex flex-row justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
                  <span className="font-['Montserrat:Medium',_sans-serif] font-medium text-[14px] text-[#47567b]">Back</span>
                </div>
              </div>
              <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
            </div>
          </div>
          
          {/* Complete Button */}
          <div 
            className="box-border content-stretch flex h-[37px] items-center justify-start p-0 relative shrink-0 w-[164px] cursor-pointer"
            onClick={handleComplete}
          >
            <div className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0 hover:bg-[#5a6884] transition-colors">
              <div className="flex flex-row justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
                  <span className="font-['Montserrat:Medium',_sans-serif] font-medium text-[14px] text-white">Looks good!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}