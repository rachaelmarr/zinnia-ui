import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Filter, MoreHorizontal, Star, MapPin, List, MapIcon } from 'lucide-react';
import Header from './Header';
import MapView from './MapView';
import floristImage from 'figma:asset/1abf7516e268ccef20abc3127374b4bad589b3c2.png';
import photographerImage from 'figma:asset/dad425db94f84361cd20b779316b74a7f98662a2.png';
import venueImage from 'figma:asset/78225c81e42df94a4d8bb62867b1a8490bc3d242.png';

interface SearchResultsProps {
  onNavigate: (view: string, vendorId?: string) => void;
  onAddToCart: (vendor: Vendor) => void;
  searchParams: {
    vendorType: string;
    location: string;
    date: string;
  };
  cartItems: CartItem[];
}

interface Vendor {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  image: string;
  isFavorited: boolean;
  category: string;
}

interface CartItem {
  vendorId: string;
  vendorName: string;
  serviceName: string;
  price: number;
  date: string;
  image: string;
}

const mockVendors: Vendor[] = [
  {
    id: 'daisys-flowers',
    name: "Daisy's Flowers",
    location: "Chicago, IL",
    rating: 4.0,
    reviewCount: 2,
    priceFrom: 2000,
    image: floristImage,
    isFavorited: false,
    category: "florists"
  },
  {
    id: 'atl-florists',
    name: "ATL Florists",
    location: "Atlanta, Georgia", 
    rating: 4.0,
    reviewCount: 2,
    priceFrom: 6000,
    image: floristImage,
    isFavorited: true,
    category: "florists"
  },
  {
    id: 'colorado-florists',
    name: "Colorado Florists",
    location: "Denver, CO",
    rating: 4.0,
    reviewCount: 2,
    priceFrom: 6000,
    image: floristImage,
    isFavorited: false,
    category: "florists"
  },
  {
    id: 'a-beach-place',
    name: 'A Beach Place',
    location: 'Chicago, IL',
    rating: 3.0,
    reviewCount: 2,
    priceFrom: 7000,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'garden-oaks-venue', 
    name: 'Garden Oaks Venue',
    location: 'Chicago, IL',
    rating: 4.5,
    reviewCount: 8,
    priceFrom: 8000,
    image: venueImage,
    isFavorited: true,
    category: "venues"
  },
  {
    id: 'lakefront-pavilion',
    name: 'Lakefront Pavilion',
    location: 'Chicago, IL', 
    rating: 4.2,
    reviewCount: 12,
    priceFrom: 8050,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'millennium-event-center',
    name: 'Millennium Event Center',
    location: 'Chicago, IL',
    rating: 4.0,
    reviewCount: 6,
    priceFrom: 2000,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'historic-union-station',
    name: 'Historic Union Station',
    location: 'Chicago, IL',
    rating: 4.8,
    reviewCount: 25,
    priceFrom: 1400,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'riverside-ballroom',
    name: 'Riverside Ballroom', 
    location: 'Chicago, IL',
    rating: 3.5,
    reviewCount: 4,
    priceFrom: 1350,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'skyline-terrace',
    name: 'Skyline Terrace',
    location: 'Chicago, IL',
    rating: 4.7,
    reviewCount: 18,
    priceFrom: 2300,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'navy-pier-venue',
    name: 'Navy Pier Venue',
    location: 'Chicago, IL',
    rating: 4.1,
    reviewCount: 9,
    priceFrom: 5000,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'garden-district-venue',
    name: "Garden District Venue",
    location: "New Orleans, LA",
    rating: 4.5,
    reviewCount: 15,
    priceFrom: 8000,
    image: venueImage,
    isFavorited: false,
    category: "venues"
  },
  {
    id: 'lindas-wedding-photography',
    name: "Linda's Wedding Photography",
    location: "Austin, TX",
    rating: 4.8,
    reviewCount: 28,
    priceFrom: 3500,
    image: photographerImage,
    isFavorited: true,
    category: "photographers"
  },
  {
    id: 'chicago-caterers-co',
    name: "Chicago Caterers Co",
    location: "Chicago, IL",
    rating: 4.3,
    reviewCount: 8,
    priceFrom: 5500,
    image: floristImage, // Using florist image for caterers as well since they're both food/styling related
    isFavorited: false,
    category: "caterers"
  }
];

export default function SearchResults({ onNavigate, onAddToCart, searchParams, cartItems }: SearchResultsProps) {
  const [searchForm, setSearchForm] = useState(searchParams);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [favoriteCount, setFavoriteCount] = useState(25);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    rating: 0,
    availability: 'any'
  });

  useEffect(() => {
    // Filter vendors based on search params
    const filtered = mockVendors.filter(vendor => {
      const matchesCategory = searchParams.vendorType.toLowerCase().includes(vendor.category) || 
                             vendor.category.includes(searchParams.vendorType.toLowerCase());
      const matchesLocation = searchParams.location === 'Anywhere' || 
                             vendor.location.toLowerCase().includes(searchParams.location.toLowerCase());
      return matchesCategory || matchesLocation;
    });
    setVendors(filtered);
  }, [searchParams]);

  const toggleFavorite = (vendorId: string) => {
    setVendors(prevVendors => 
      prevVendors.map(vendor => 
        vendor.id === vendorId 
          ? { ...vendor, isFavorited: !vendor.isFavorited }
          : vendor
      )
    );
    
    // Update favorite count
    const vendor = vendors.find(v => v.id === vendorId);
    if (vendor) {
      setFavoriteCount(prev => vendor.isFavorited ? prev - 1 : prev + 1);
    }
  };

  const handleSearch = () => {
    // Update search params and filter results
    const filtered = mockVendors.filter(vendor => {
      const matchesCategory = searchForm.vendorType.toLowerCase().includes(vendor.category) || 
                             vendor.category.includes(searchForm.vendorType.toLowerCase());
      const matchesLocation = searchForm.location === 'Anywhere' || 
                             vendor.location.toLowerCase().includes(searchForm.location.toLowerCase());
      return matchesCategory || matchesLocation;
    });
    setVendors(filtered);
  };

  const handleAddToCart = (vendor: Vendor) => {
    const cartItem: CartItem = {
      vendorId: vendor.id,
      vendorName: vendor.name,
      serviceName: `${vendor.category} service`,
      price: vendor.priceFrom,
      date: searchForm.date,
      image: vendor.image
    };
    onAddToCart(cartItem);
  };

  const handleVendorClick = (vendor: Vendor) => {
    // Navigate to vendor detail page  
    onNavigate('vendorDetail', vendor.id);
  };

  // Check if current search is for venues
  const isVenueSearch = searchParams.vendorType.toLowerCase().includes('venue') || 
                       searchParams.vendorType.toLowerCase().includes('venues');

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header 
        onNavigate={onNavigate} 
        onSearch={handleSearch}
        cartItems={cartItems}
        searchParams={searchForm}
        showSearch={true}
      />
      
      {/* Filters Bar */}
      <div className="bg-white px-4 py-5 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="button-text border border-[#47567b] text-[#47567b] px-4 py-2 rounded flex items-center gap-2">
              <Heart size={14} />
              Favorites ({favoriteCount})
            </button>
            <button className="button-text border border-[#47567b] text-[#47567b] px-4 py-2 rounded flex items-center gap-2">
              <Filter size={14} />
              Filters
            </button>
            <button className="button-text border border-[#47567b] text-[#47567b] px-4 py-2 rounded flex items-center gap-2">
              <MoreHorizontal size={14} />
              Sort
            </button>
          </div>

          {/* Only show view toggle for venues */}
          {isVenueSearch && (
            <div className="flex items-center">
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 border ${viewMode === 'list' ? 'border-[#ccd7e6] bg-white' : 'border-[#ccd7e6] bg-white'} transition-colors`}
              >
                <List size={20} className="text-[#47567b]" />
              </button>
              <button 
                onClick={() => setViewMode('map')}
                className={`p-2 border ${viewMode === 'map' ? 'border-[#ccd7e6] bg-[#ccd7e6]' : 'border-[#ccd7e6] bg-white'} transition-colors`}
              >
                <MapIcon size={20} className="text-[#47567b]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Show Map View for venues when map mode is selected */}
      {isVenueSearch && viewMode === 'map' ? (
        <MapView 
          venues={vendors}
          onVendorClick={handleVendorClick}
          onToggleFavorite={toggleFavorite}
        />
      ) : (
        /* Results */
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <div 
                key={vendor.id} 
                onClick={() => handleVendorClick(vendor)}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-[250px] md:h-[300px] object-cover"
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click when clicking heart
                      toggleFavorite(vendor.id);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-neutral-100/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
                  >
                    <Heart 
                      size={20} 
                      className={vendor.isFavorited ? 'text-red-500 fill-red-500' : 'text-[#47567b]'} 
                    />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="step-title text-[#47567b] mb-1">{vendor.name}</h3>
                  
                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin size={14} />
                    <span className="setup-description">{vendor.location}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={16}
                          className={i < Math.floor(vendor.rating) ? 'text-[#2e7684] fill-[#2e7684]' : 'text-[#2e7684]'}
                        />
                      ))}
                    </div>
                    <span className="setup-description text-[#47567b]">
                      {vendor.rating} | {vendor.reviewCount} Reviews
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="step-title text-[#47567b]">From ${vendor.priceFrom.toLocaleString()}</span>
                    <span className="setup-description text-[#667593]">View Services →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {vendors.length === 0 && (
            <div className="text-center py-16">
              <p className="section-heading text-[#47567b] mb-4">No vendors found</p>
              <p className="setup-description text-gray-600 mb-8">
                Try adjusting your search criteria or browse different vendor types.
              </p>
              <button
                onClick={() => onNavigate('landing')}
                className="button-text bg-[#2f7685] hover:bg-[#1e6b7a] text-white px-6 py-3 rounded-full transition-colors"
              >
                Back to Search
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}