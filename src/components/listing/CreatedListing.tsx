import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Star, MapPin, Share2, Calendar, Edit3, Eye, Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import PhotoGallery from '../PhotoGallery';
import VendorHeader from '../VendorHeader';
import VendorLeftNav from '../VendorLeftNav';

interface CreatedListingProps {
  onNavigate: (view: string) => void;
  wizardData?: any;
}

export default function CreatedListing({ onNavigate, wizardData }: CreatedListingProps) {
  const [listingData, setListingData] = useState<any>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGalleryOpen = (index: number) => {
    setGalleryStartIndex(index);
    setIsGalleryOpen(true);
  };

  const handleGalleryClose = () => {
    setIsGalleryOpen(false);
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('tempListingData');
      let data = wizardData || {};
      
      if (stored) {
        const parsedData = JSON.parse(stored);
        data = { ...data, ...parsedData };
      }
      
      // If we have data, set it immediately
      if (data && (data.photos || data.description || data.businessHours)) {
        setListingData(data);
        console.log('🎯 Loaded listing data for created listing:', data);
      } else {
        // If no data yet, wait a bit and try again
        const timer = setTimeout(() => {
          setListingData(data);
          console.log('🎯 Fallback: Set listing data after timeout:', data);
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error('Error loading listing data:', error);
      // Set empty data to prevent infinite loading
      setListingData({});
    }
  }, [wizardData]);

  if (!listingData || listingData === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2E7684] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your listing...</p>
          <p className="mt-2 text-sm text-gray-500">Debug: listingData is {JSON.stringify(listingData)}</p>
        </div>
      </div>
    );
  }

  console.log('🎯 CreatedListing rendering with data:', listingData);
  
  return (
    <div className="min-h-screen bg-slate-100 w-full">
      {/* Vendor Header */}
      <VendorHeader onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      
      {/* Main Layout */}
      <div className="flex">
        {/* Left Navigation */}
        <VendorLeftNav onNavigate={onNavigate} />
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold font-['Literata'] text-slate-600 text-center">
              {listingData?.businessName || listingData?.service?.serviceName || "Linda's Wedding Photography"}
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-neutral-300 flex gap-4 mb-6">
            <div className="h-9 p-2 border-b-2 border-neutral-900 flex justify-start items-center gap-3">
              <div className="text-slate-600 text-sm font-normal font-['Montserrat']">My Listing</div>
            </div>
            <div className="h-9 p-2 flex justify-start items-center gap-3">
              <div className="text-slate-500 text-sm font-normal font-['Montserrat']">My Services</div>
            </div>
          </div>

          {/* Action Buttons and URL */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-cyan-700 text-sm font-normal font-['Montserrat'] underline">
              www.zinnia.com/Lindasweddingphotography
            </div>
            <div className="flex gap-4">
              <button className="px-3 py-2 rounded-3xl border border-slate-400 text-slate-600 text-sm font-medium font-['Montserrat']">
                Go to listing
              </button>
              <button className="px-3 py-2 bg-slate-500 rounded-3xl text-white text-sm font-medium font-['Montserrat'] flex items-center gap-2">
                <Edit3 className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-lg p-6">
            {/* Photo Gallery */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 h-96">
                {/* Main Photo - Top Left */}
                <div className="row-span-2">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={listingData.photos?.[0] || "https://placehold.co/400x400"} 
                    alt="Main photo"
                  />
                </div>
                {/* Right Column Photos */}
                <div className="space-y-4">
                  <img 
                    className="w-full h-44 object-cover rounded-lg" 
                    src={listingData.photos?.[1] || "https://placehold.co/400x200"} 
                    alt="Photo 2"
                  />
                  <img 
                    className="w-full h-44 object-cover rounded-lg" 
                    src={listingData.photos?.[2] || "https://placehold.co/400x200"} 
                    alt="Photo 3"
                  />
                </div>
              </div>
            </div>
            
            {/* Booking Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center gap-4">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 px-3 py-2 border border-slate-400 rounded-md">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600 text-sm font-normal font-['Montserrat']">5/12/2023</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 border border-slate-400 rounded-md">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600 text-sm font-normal font-['Montserrat']">5:00 PM</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-slate-500 rounded-full text-white text-sm font-medium font-['Montserrat']">
                  Book Now
                </button>
              </div>
              <div className="border-t border-slate-300 mt-4"></div>
            </div>
          </div>

          {/* Listing Details */}
          <div className="bg-white rounded-lg p-6 mt-6">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold font-['Literata'] text-slate-600 mb-2">
                    {listingData?.businessName || listingData?.service?.serviceName || "Linda's Wedding Photography"}
                  </h2>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= 3 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-slate-600 text-sm">3.0 | </span>
                    <span className="text-cyan-700 text-sm underline">2 reviews</span>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 px-3 py-2 border border-slate-400 rounded-full text-slate-600 text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  Favorite
                </button>
              </div>
              
              {/* Description */}
              <div className="space-y-2">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {listingData?.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam'}
                </p>
                <p className="text-slate-600 text-sm">
                  Photos will be available in 60 days. You will have the rights to print the photos.
                </p>
              </div>
            </div>
            
            {/* Service Card */}
            <div className="mt-8 max-w-sm mx-auto overflow-hidden rounded-2xl shadow-md bg-white">
              {/* Top Image - Full Width Header */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={listingData.photos?.[0] || "https://placehold.co/400x300"} 
                  alt="Wedding Day Photography"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content - Stacked Below Image */}
              <div className="p-4">
                {/* Title + Location */}
                <div className="mb-3">
                  <h3 className="text-lg font-semibold font-['Literata'] text-slate-600 mb-1">
                    {listingData?.service?.serviceName || 'Wedding Day Photography'}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-600 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>Based in Skokie, IL • Mobile Business</span>
                  </div>
                </div>

                {/* Hours + Guests */}
                <div className="mb-3 text-xs space-y-1">
                  <p>
                    <span className="font-semibold">Hours included:</span> {listingData?.service?.hours || '5'}
                  </p>
                  <p>
                    <span className="font-semibold">Total guests:</span> 10
                  </p>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <p className="font-semibold text-xs mb-1">Description</p>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {listingData?.service?.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor.'}
                  </p>
                </div>

                {/* What's Included */}
                <div className="mb-3">
                  <p className="font-semibold text-xs mb-1">What's included</p>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    {listingData?.service?.included ? 
                      Object.keys(listingData.service.included).filter(key => listingData.service.included[key] === true).join(', ') : 
                      'Ceremony, Bridal portraits, First Look, Reception'
                    }
                  </p>
                </div>

                {/* What's Delivered */}
                <div className="mb-4">
                  <p className="font-semibold text-xs mb-1">What's delivered</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {['Online gallery', 'Photo album', 'Same day prints', 'Unedited photos', 'Highlight film'].map((item, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-slate-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Price + CTA */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                  <div>
                    <p className="text-base font-semibold text-slate-600">${listingData?.service?.price || '300'} total</p>
                    <p className="text-xs text-slate-500">includes taxes + fees</p>
                  </div>
                  <button className="rounded-lg bg-slate-500 px-3 py-1.5 text-xs text-white hover:bg-slate-600 transition-colors">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Reviews Section */}
            <div className="mt-8 bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold font-['Literata'] text-slate-600 mb-4">2 reviews</h3>
              <div className="space-y-4">
                {/* Review 1 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-600">Maya Rudolph</span>
                    <span className="text-sm text-slate-400">•</span>
                    <span className="text-sm text-slate-600">November 30, 2023</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam
                  </p>
                </div>
                
                {/* Review 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-600">Maya Rudolph</span>
                    <span className="text-sm text-slate-400">•</span>
                    <span className="text-sm text-slate-600">November 30, 2023</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam
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