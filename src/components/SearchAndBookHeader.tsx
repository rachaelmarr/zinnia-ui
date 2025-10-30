import { useState } from 'react';
import { Search, ShoppingCart, HelpCircle } from 'lucide-react';
import svgPaths from "../imports/svg-nag4br4gyo";

interface SearchParams {
  vendorType: string;
  location: string;
  date: string;
}

interface SearchAndBookHeaderProps {
  onNavigate: (view: string) => void;
  onSearch?: (searchParams: SearchParams) => void;
  cartItems?: any[];
  searchParams?: SearchParams;
  showSearch?: boolean;
  profilePhotos?: any[];
}

function UserCircle({ size = 22, profilePhotos = [] }: { size?: number; profilePhotos?: any[] }) {
  const hasProfilePhoto = profilePhotos && profilePhotos.length > 0;
  
  if (hasProfilePhoto) {
    return (
      <div className="relative shrink-0 rounded-full overflow-hidden" style={{ width: size, height: size }} data-name="user-avatar">
        <img
          src={profilePhotos[0].preview}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} data-name="user-circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="user-circle">
          <path
            d={svgPaths.p221cbb00}
            stroke="var(--stroke-0, #47567B)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function SearchModal({ isOpen, onClose, searchParams, onSearchChange, onSearch }: {
  isOpen: boolean;
  onClose: () => void;
  searchParams: SearchParams;
  onSearchChange: (params: SearchParams) => void;
  onSearch: () => void;
}) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
                Search & Book
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Vendor Type */}
              <div>
                <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif' }}>
                  What are you looking for?
                </label>
                <select
                  value={searchParams.vendorType}
                  onChange={(e) => onSearchChange({ ...searchParams, vendorType: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <option value="Florists">Florists</option>
                  <option value="Photographers">Photographers</option>
                  <option value="Venues">Venues</option>
                  <option value="Caterers">Caterers</option>
                  <option value="DJs">DJs</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif' }}>
                  Location
                </label>
                <input
                  type="text"
                  value={searchParams.location}
                  onChange={(e) => onSearchChange({ ...searchParams, location: e.target.value })}
                  placeholder="Enter city or zip code"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif' }}>
                  Event Date
                </label>
                <select
                  value={searchParams.date}
                  onChange={(e) => onSearchChange({ ...searchParams, date: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <option value="Any Day">Any Day</option>
                  <option value="This Weekend">This Weekend</option>
                  <option value="Next Week">Next Week</option>
                  <option value="This Month">This Month</option>
                  <option value="Next Month">Next Month</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={() => {
                onSearch();
                onClose();
              }}
              className="button-text bg-[#2f7685] hover:bg-[#1e6b7a] text-white px-6 py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 h-10 w-full mt-6"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function SearchAndBookHeader({ 
  onNavigate, 
  onSearch, 
  cartItems = [], 
  searchParams = { vendorType: 'Florists', location: 'Chicago, IL', date: 'Any Day' },
  showSearch = true,
  profilePhotos = []
}: SearchAndBookHeaderProps) {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [localSearchParams, setLocalSearchParams] = useState(searchParams);

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(localSearchParams);
    }
  };

  return (
    <>
      <header className="bg-white border-b border-[#ccd7e6] px-4 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="143" height="24" viewBox="0 0 143 24" fill="none" className="w-auto h-6 cursor-pointer" onClick={() => onNavigate('landing')}>
              <g clipPath="url(#clip0_26_2042)">
                <path d={svgPaths.p33702600} fill="#47567B" />
              </g>
              <defs>
                <clipPath id="clip0_26_2042">
                  <rect fill="white" height="24" width="143" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-3">
            {showSearch && (
              <button 
                onClick={() => setShowSearchModal(true)}
                className="p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search size={20} />
              </button>
            )}
            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart size={20} />
              {getTotalCartItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center">
                  {getTotalCartItems()}
                </span>
              )}
            </button>
            <button 
              onClick={() => onNavigate('auth')}
              className="p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
            >
              <UserCircle size={22} profilePhotos={profilePhotos} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {showSearch && (
              <button 
                onClick={() => setShowSearchModal(true)}
                className="p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search size={20} />
              </button>
            )}
            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart size={20} />
              {getTotalCartItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center">
                  {getTotalCartItems()}
                </span>
              )}
            </button>
            <button 
              onClick={() => onNavigate('auth')}
              className="p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
            >
              <UserCircle size={22} profilePhotos={profilePhotos} />
            </button>
            <button className="p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors">
              <HelpCircle size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Search Modal */}
      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        searchParams={localSearchParams}
        onSearchChange={setLocalSearchParams}
        onSearch={handleSearch}
      />
    </>
  );
}












