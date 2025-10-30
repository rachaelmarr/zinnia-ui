import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Star, MapPin, ChevronRight } from 'lucide-react';
import mapBackground from 'figma:asset/fc8af43061d82b872aeef55d4e67dece8f02c575.png';
import venueImage from 'figma:asset/dad425db94f84361cd20b779316b74a7f98662a2.png';

interface Venue {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  image: string;
  isFavorited: boolean;
  coordinates: { x: number; y: number }; // Percentage-based positioning
}

interface MapViewProps {
  venues: any[];
  onVendorClick: (vendor: any) => void;
  onToggleFavorite: (vendorId: string) => void;
}

// Mock venue data with map coordinates (percentage-based)
const mockMapVenues: Venue[] = [
  {
    id: 'a-beach-place',
    name: 'A Beach Place',
    location: 'Chicago, IL',
    rating: 3.0,
    reviewCount: 2,
    priceFrom: 7000,
    image: venueImage,
    isFavorited: false,
    coordinates: { x: 75, y: 65 } // Bottom right area
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
    coordinates: { x: 75, y: 35 } // Top right area
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
    coordinates: { x: 75, y: 42 } // Mid right area
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
    coordinates: { x: 67, y: 40 } // Center right area
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
    coordinates: { x: 67, y: 37 } // Center area
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
    coordinates: { x: 58, y: 40 } // Left center area
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
    coordinates: { x: 58, y: 25 } // Top center area  
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
    coordinates: { x: 75, y: 52 } // Right side
  }
];

export default function MapView({ venues, onVendorClick, onToggleFavorite }: MapViewProps) {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

  const handleMarkerClick = (venue: Venue) => {
    setSelectedVenue(venue);
  };

  const handleVenueCardClick = (venue: Venue) => {
    onVendorClick(venue);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-neutral-50">
      {/* Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${mapBackground}')`,
          backgroundPosition: 'center -320px' // Adjust vertical positioning
        }}
      />

      {/* Price Markers */}
      {mockMapVenues.map((venue) => (
        <button
          key={venue.id}
          onClick={() => handleMarkerClick(venue)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-110 ${
            selectedVenue?.id === venue.id 
              ? 'bg-neutral-900 text-[#ccd7e6] border border-[#667593]' 
              : 'bg-neutral-100 text-[#47567b] border-2 border-[#667593] hover:bg-white'
          }`}
          style={{ 
            left: `${venue.coordinates.x}%`, 
            top: `${venue.coordinates.y}%`,
            fontFamily: 'Literata, serif',
            fontSize: '16px',
            fontWeight: '500',
            letterSpacing: '0.32px'
          }}
        >
          ${venue.priceFrom.toLocaleString()}
        </button>
      ))}

      {/* Selected Venue Card */}
      {selectedVenue && (
        <div 
          className="absolute bg-white rounded-lg shadow-lg max-w-[440px] z-20"
          style={{
            right: '59px',
            bottom: '20px'
          }}
        >
          {/* Venue Image */}
          <div className="relative h-[319px] overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src={selectedVenue.image}
              alt={selectedVenue.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(selectedVenue.id);
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-neutral-100/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <Heart 
                size={20} 
                className={selectedVenue.isFavorited ? 'text-red-500 fill-red-500' : 'text-[#47567b]'} 
              />
            </button>
          </div>

          {/* Venue Details */}
          <div className="p-3">
            <div className="mb-3">
              <h3 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[16px] leading-[1.5] mb-1">
                {selectedVenue.name}
              </h3>
              <div className="flex items-center gap-1">
                <MapPin size={14} className="text-[#667593]" />
                <span className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#667593] text-[14px] leading-[1.5]">
                  {selectedVenue.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(selectedVenue.rating) ? 'fill-[#2e7684] text-[#2e7684]' : 'text-[#2e7684]'}
                  />
                ))}
              </div>
              <span className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] leading-[1.5]">
                {selectedVenue.rating} | {selectedVenue.reviewCount} Reviews
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[16px] tracking-[0.32px]">
                  From
                </span>
                <span className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[16px] ml-1">
                  ${selectedVenue.priceFrom.toLocaleString()}.00
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Details Button */}
      {selectedVenue && (
        <button
          onClick={() => handleVenueCardClick(selectedVenue)}
          className="absolute bg-white border border-[#47567b] rounded-full p-2 hover:bg-gray-50 transition-colors z-20"
          style={{
            right: '29px',
            bottom: '80px'
          }}
        >
          <ChevronRight size={20} className="text-[#47567b]" />
        </button>
      )}
    </div>
  );
}