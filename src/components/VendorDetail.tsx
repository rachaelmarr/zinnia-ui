import { useState } from 'react';
import { ArrowLeft, Heart, Star, Calendar, MapPin, Upload, Search, ShoppingCart, User, HelpCircle, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import PhotoGallery from './PhotoGallery';
import Header from './Header';
import CalendarComponent from './Calendar';
import type { VendorDetails, CartItem } from '../types';

interface VendorDetailProps {
  vendor: VendorDetails;
  onNavigate: (view: string) => void;
  onAddToCart: (item: CartItem) => void;
  cartItems: CartItem[];
  searchParams?: {
    vendorType: string;
    location: string;
    date: string;
  };
}

export default function VendorDetail({ vendor, onNavigate, onAddToCart, cartItems, searchParams }: VendorDetailProps) {
  const [selectedDate, setSelectedDate] = useState('Any Day');
  const [isFavorited, setIsFavorited] = useState(vendor.isFavorited);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const [addedToCartServices, setAddedToCartServices] = useState<string[]>([]);

  const handleBackToSearch = () => {
    onNavigate('search');
  };

  const handleAddToCart = (service: any) => {
    const cartItem: CartItem = {
      vendorId: vendor.id,
      vendorName: vendor.name,
      serviceName: service.name,
      price: service.price,
      date: selectedDate,
      image: service.image,
      quantity: 1
    };
    onAddToCart(cartItem);
    
    // Add service to the added list and show success state
    setAddedToCartServices(prev => [...prev, service.id]);
    
    // Remove from success state after 2 seconds
    setTimeout(() => {
      setAddedToCartServices(prev => prev.filter(id => id !== service.id));
    }, 2000);
  };

  // Check if a service is already in the cart
  const isServiceInCart = (service: any) => {
    return cartItems.some(item => 
      item.vendorId === vendor.id && item.serviceName === service.name
    );
  };

  // Get total number of items in cart
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleShare = () => {
    console.log('Sharing vendor:', vendor.name);
  };

  const handleBookNow = () => {
    console.log('Book now for vendor:', vendor.name);
  };

  const handleGalleryOpen = (index: number) => {
    setGalleryStartIndex(index);
    setIsGalleryOpen(true);
  };

  const handleGalleryClose = () => {
    setIsGalleryOpen(false);
  };

  const handleSearch = (params: { vendorType: string; location: string; date: string }) => {
    // Navigate back to search with new params
    onNavigate('search');
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header 
        onNavigate={onNavigate}
        onSearch={handleSearch}
        cartItems={cartItems}
        searchParams={searchParams || { vendorType: 'Florists', location: 'Chicago, IL', date: 'Any Day' }}
        showSearch={true}
      />
      
      {/* Back to Search */}
      <div className="px-5 pt-5">
        <button 
          onClick={handleBackToSearch}
          className="flex items-center gap-1 text-[#47567b] hover:text-[#2e7684] transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-['Literata:SemiBold',_sans-serif] font-semibold text-base">
            Back to search
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="px-5 md:px-10 py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 h-auto md:h-[539px]">
            {/* Main large image */}
            <div className="md:col-span-3 h-[400px] md:h-full">
              <button 
                onClick={() => handleGalleryOpen(0)}
                className="w-full h-full group"
              >
                <ImageWithFallback
                  src={vendor.gallery[0] || vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity cursor-pointer"
                />
              </button>
            </div>
            
            {/* Side images */}
            {vendor.gallery.slice(1, 3).map((image, index) => (
              <div key={index} className={`hidden md:block ${index >= 2 ? 'md:col-span-1' : 'md:col-span-1'} h-full`}>
                <button 
                  onClick={() => handleGalleryOpen(index + 1)}
                  className="w-full h-full group"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${vendor.name} gallery ${index + 2}`}
                    className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Info Section */}
        <div className="mb-12">
          {/* Vendor Name */}
          <div className="mb-5">
            <h1 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[32px] leading-[1.5] mb-4">
              {vendor.name}
            </h1>
            <button 
              onClick={handleToggleFavorite}
              className="flex items-center gap-2 border border-[#8c97ac] rounded-full px-3 py-2 hover:bg-gray-50 h-9"
            >
              <Heart size={20} className={isFavorited ? 'text-red-500 fill-red-500' : 'text-[#47567b]'} />
              <span className="text-[#47567b] text-sm font-medium">Favorite</span>
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-5">
            {renderStars(vendor.rating)}
            <span className="text-[#47567b] text-sm">
              {vendor.rating} | <span className="text-[#2e7684] underline cursor-pointer">{vendor.reviewCount} reviews</span>
            </span>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="w-[262px]">
              <CalendarComponent
                value={selectedDate}
                onChange={setSelectedDate}
                placeholder="Select event date"
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-3 py-2 text-[#47567b] hover:bg-gray-100 rounded-full h-9"
              >
                <Upload size={20} />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-5">
            <div>
              <p className="text-[#47567b] text-sm leading-relaxed max-w-[440px]">
                {vendor.description}
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

          {/* Services Section */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-5 overflow-x-auto">
              {vendor.services.map((service) => (
                <div key={service.id} className="bg-white border border-[#ccd7e6] rounded-lg min-w-[440px] flex-shrink-0">
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
                        {vendor.businessInfo.basedIn} • {vendor.businessInfo.businessType === 'mobile' ? 'Mobile Business' : 'Physical Location'}
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
                        <button 
                          onClick={() => !isServiceInCart(service) ? handleAddToCart(service) : undefined}
                          disabled={isServiceInCart(service)}
                          className={`px-4 py-2 rounded-full transition-all duration-300 h-9 flex items-center gap-2 ${
                            isServiceInCart(service)
                              ? 'bg-gray-400 text-white cursor-not-allowed'
                              : addedToCartServices.includes(service.id)
                              ? 'bg-green-500 text-white'
                              : 'bg-[#667493] text-white hover:bg-[#5a6587]'
                          }`}
                        >
                          {isServiceInCart(service) ? (
                            <>
                              <Check size={16} />
                              <span className="text-sm font-medium">Added to cart</span>
                            </>
                          ) : addedToCartServices.includes(service.id) ? (
                            <>
                              <Check size={16} />
                              <span className="text-sm font-medium">Added!</span>
                            </>
                          ) : (
                            <span className="text-sm font-medium">Add to cart</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className="mt-3">
              <button className="text-[#2e7684] hover:text-[#245861] text-sm font-medium">
                Show more offerings
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8 max-w-[655px]">
          <h2 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[24px] leading-[1.5] mb-3">
            {vendor.reviewCount} reviews
          </h2>

          <div className="space-y-5">
            {vendor.reviews.map((review) => (
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
      {isGalleryOpen && (
        <PhotoGallery
          images={vendor.gallery}
          initialIndex={galleryStartIndex}
          onClose={handleGalleryClose}
          vendorName={vendor.name}
        />
      )}
    </div>
  );
}