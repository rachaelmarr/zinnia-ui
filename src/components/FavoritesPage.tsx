import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Star, MapPin } from 'lucide-react';

// Dummy favorites data
const favorites = [
  {
    id: 1,
    name: "Great Lakes Photography",
    location: "Chicago, IL",
    rating: 4.5,
    reviews: 12,
    price: 6000,
    image: "https://placehold.co/400x300/0891b2/ffffff?text=Photography",
    favorited: true,
  },
  {
    id: 2,
    name: "Elegant Venues",
    location: "Skokie, IL",
    rating: 4.8,
    reviews: 8,
    price: 8500,
    image: "https://placehold.co/400x300/64748b/ffffff?text=Venue",
    favorited: true,
  },
  {
    id: 3,
    name: "Bloom & Blossom",
    location: "Evanston, IL",
    rating: 4.2,
    reviews: 15,
    price: 3200,
    image: "https://placehold.co/400x300/1e3a8a/ffffff?text=Florist",
    favorited: true,
  },
  {
    id: 4,
    name: "Dreamy Catering",
    location: "Winnetka, IL",
    rating: 4.7,
    reviews: 22,
    price: 4500,
    image: "https://placehold.co/400x300/0891b2/ffffff?text=Catering",
    favorited: true,
  },
  {
    id: 5,
    name: "Harmony Music",
    location: "Highland Park, IL",
    rating: 4.9,
    reviews: 18,
    price: 2800,
    image: "https://placehold.co/400x300/64748b/ffffff?text=Music",
    favorited: true,
  },
  {
    id: 6,
    name: "Luxury Transportation",
    location: "Lake Forest, IL",
    rating: 4.6,
    reviews: 9,
    price: 1200,
    image: "https://placehold.co/400x300/1e3a8a/ffffff?text=Transport",
    favorited: true,
  },
];

interface FavoritesPageProps {
  onNavigate?: (view: string) => void;
}

export default function FavoritesPage({ onNavigate }: FavoritesPageProps) {
  const [favoritesList, setFavoritesList] = useState(favorites);
  const hasFavorites = favoritesList.length > 0;

  const handleRemoveFavorite = (id: number) => {
    setFavoritesList(prev => 
      prev.filter(favorite => favorite.id !== id)
    );
  };

  const handleBookNow = (vendorId: number) => {
    console.log('Book now clicked for vendor:', vendorId);
    // Add booking logic here
  };

  const handleStartSearch = () => {
    console.log('Start search clicked');
    onNavigate?.('search'); // Navigate to search page
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold font-['Literata'] text-[#47567B] mb-2">
          Favorites
        </h1>
        <p className="text-slate-500 text-sm font-['Montserrat']">
          {hasFavorites 
            ? `${favoritesList.length} vendor${favoritesList.length === 1 ? '' : 's'} saved` 
            : 'No favorites yet'
          }
        </p>
      </div>

      {!hasFavorites ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          {/* Empty State Illustration */}
          <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-16 h-16 text-slate-400" />
          </div>
          
          <h2 className="text-xl font-semibold font-['Literata'] text-[#47567B] mb-2">
            No favorites yet
          </h2>
          <p className="text-slate-500 font-['Montserrat'] mb-6 max-w-md">
            Start exploring vendors and save your favorites to see them here. 
            Your saved vendors will appear in this grid.
          </p>
          
          <Button 
            onClick={handleStartSearch}
            variant="secondary"
            size="lg"
          >
            Start a search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritesList.map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-60 object-cover"
                />
                {/* Heart/Favorite Button */}
                <button 
                  onClick={() => handleRemoveFavorite(vendor.id)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>
              </div>

              {/* Card Content */}
              <CardContent className="p-4">
                {/* Vendor Name */}
                <h2 className="font-semibold font-['Literata'] text-[#47567B] text-lg mb-1">
                  {vendor.name}
                </h2>
                
                {/* Location */}
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <p className="text-sm text-slate-500 font-['Montserrat']">
                    {vendor.location}
                  </p>
                </div>
                
                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 text-sm text-[#47567B] mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-['Montserrat'] font-medium">{vendor.rating}</span>
                  </div>
                  <span className="text-slate-400">|</span>
                  <span className="font-['Montserrat']">{vendor.reviews} Reviews</span>
                </div>
                
                {/* Price */}
                <p className="text-lg font-semibold font-['Literata'] text-[#47567B] mb-4">
                  From ${vendor.price.toLocaleString()}
                </p>
                
                {/* Book Now Button */}
                <Button 
                  onClick={() => handleBookNow(vendor.id)}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Book now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
