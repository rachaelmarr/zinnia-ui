import { useState } from 'react';
import { Search, ChevronDown, MapPin, ShoppingCart, HelpCircle } from 'lucide-react';
import svgPaths from "../imports/svg-nag4br4gyo";
import Calendar from './Calendar';

interface HeaderProps {
  onNavigate: (view: string) => void;
  onSearch?: (searchParams: SearchParams) => void;
  cartItems?: any[];
  searchParams?: SearchParams;
  showSearch?: boolean;
  profilePhotos?: any[];
}

interface SearchParams {
  vendorType: string;
  location: string;
  date: string;
}

function UserCircle({ size = 24, profilePhotos = [] }: { size?: number; profilePhotos?: any[] }) {
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
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg p-6 mx-4 w-full max-w-md shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="step-title text-[#47567b]">Search Vendors</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Vendor Type */}
          <div>
            <label className="block setup-description text-[#47567b] mb-2">Vendor Type</label>
            <div className="relative">
              <select 
                value={searchParams.vendorType}
                onChange={(e) => onSearchChange({ ...searchParams, vendorType: e.target.value })}
                className="w-full h-10 px-3 pr-8 bg-white border border-gray-300 rounded-lg setup-description text-[#47567b] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
              >
                <option value="Florists">Florists</option>
                <option value="Venues">Venues</option>
                <option value="Photographers">Photographers</option>
                <option value="Caterers">Caterers</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block setup-description text-[#47567b] mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                value={searchParams.location}
                onChange={(e) => onSearchChange({ ...searchParams, location: e.target.value })}
                className="w-full h-10 pl-10 pr-3 bg-[#f1f6fa] border-0 rounded-lg setup-description text-[#47567b] focus:outline-none focus:ring-2 focus:ring-[#2f7685] placeholder:text-gray-400"
                placeholder="Enter location"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block setup-description text-[#47567b] mb-2">Date</label>
            <Calendar
              value={searchParams.date}
              onChange={(date) => onSearchChange({ ...searchParams, date })}
              placeholder="Any Day"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={() => {
              onSearch();
              onClose();
            }}
            className="button-text bg-[#2f7685] hover:bg-[#1e6b7a] text-white px-6 py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 h-10 w-full"
          >
            <Search size={16} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Header({ 
  onNavigate, 
  onSearch, 
  cartItems = [], 
  searchParams = { vendorType: 'Florists', location: 'Chicago, IL', date: 'Any Day' },
  showSearch = true,
  profilePhotos = []
}: HeaderProps) {
  const [localSearchParams, setLocalSearchParams] = useState(searchParams);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(localSearchParams);
    }
  };

  const handleLogoClick = () => {
    onNavigate('landing');
  };

  // Get total number of items in cart
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-4 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="cursor-pointer">
              <svg width="143" height="24" viewBox="0 0 143 24" fill="none" className="w-auto h-6">
                <path d="M26.5215 0.0224609C26.7077 -0.0359005 27.0396 0.0227781 27.1416 0.15332C27.2391 0.284034 27.1991 0.627173 27.0928 0.793945C26.8845 1.11834 26.6186 1.41564 26.3262 1.66797C24.4116 3.33569 22.5279 5.05306 20.5469 6.63965C16.5583 9.83981 12.4901 12.9366 8.50586 16.1367C6.80845 17.5024 5.23054 19.0217 3.59961 20.4775C3.55986 20.5091 3.55527 20.5807 3.5332 20.6348C3.5775 20.6573 3.63059 20.7112 3.66602 20.7021C6.50672 19.945 9.3075 20.1937 12.1172 20.9238C14.6166 21.5729 17.1253 22.2079 19.6602 22.6992C23.0195 23.3528 26.3438 23.0373 29.5879 21.915C32.0874 21.0496 34.1709 19.531 36.0322 17.665C36.1386 17.5614 36.2227 17.4306 36.3379 17.3359C36.7899 16.9573 37.3571 17.0923 37.5742 17.6377C37.6495 17.8314 37.6987 18.0476 37.7031 18.2549C37.7341 19.544 38.7443 20.5046 40.2334 20.5361C41.328 20.5587 42.4447 20.5132 43.5127 20.2969C46.5484 19.6839 49.4913 18.7285 52.3408 17.498C52.7751 17.3088 53.1432 16.9523 53.6572 16.5918C54.3308 16.6639 54.4108 16.7631 54.2734 17.5518C54.2336 17.7771 54.2114 18.0071 54.1582 18.3857C54.5214 18.1335 54.7476 17.9444 55 17.8047C55.3634 17.6064 55.7321 17.3848 56.1221 17.2676C56.6846 17.0965 57.0212 17.282 57.2959 17.8047C57.3623 17.9353 57.4251 18.0795 57.4561 18.2236C57.6999 19.4269 58.5727 20.0127 59.5742 20.4814C60.9924 21.144 62.4597 21.0542 63.9443 20.8018C67.1041 20.2608 70.0781 19.1336 72.9941 17.8311C73.2864 17.7002 73.4948 17.3623 73.7783 17.083C74.5094 17.1146 74.6247 17.2318 74.5273 17.9346C74.4875 18.1959 74.4298 18.4578 74.3545 18.8633C74.6512 18.6741 74.833 18.5482 75.0234 18.4355C75.3558 18.2327 75.6708 17.9984 76.0254 17.8496C76.6946 17.5702 77.0093 17.7189 77.3018 18.377C77.3239 18.4309 77.3461 18.4894 77.3594 18.5479C77.6474 20.0443 78.7642 20.4588 80.0361 20.6436C82.0305 20.9365 84.0117 20.7116 85.9795 20.3916C87.6502 20.1212 89.2945 19.7112 90.8633 19.0352C91.816 18.625 92.6797 18.1288 93.0166 17.0293C93.1097 16.7318 93.3093 16.4931 93.8057 16.6914C93.788 17.124 93.8013 17.5974 93.7393 18.0615C93.6109 19.0213 94.0274 19.6794 94.8691 19.9814C95.6713 20.2699 96.5183 20.5404 97.3604 20.6035C100.104 20.8018 102.82 20.626 105.422 19.5713C106.53 19.1206 107.598 18.5976 108.511 17.7998C108.794 17.5474 109.078 17.2544 109.251 16.9209C110.235 15.0368 112.757 14.9287 113.771 16.2539C113.803 16.2989 113.865 16.3211 113.967 16.3887C114.365 15.9832 114.764 15.5506 115.198 15.1631C115.579 14.8251 115.602 14.852 116.187 15.2529C115.938 15.5503 115.673 15.8298 115.451 16.1406C115.225 16.4561 114.999 16.7856 114.849 17.1416C114.299 18.4262 114.765 19.409 116.09 19.8057C117.317 20.1706 118.562 20.0624 119.799 19.8506C123.663 19.1925 127.524 18.4939 131.393 17.8809C133.272 17.5879 135.169 17.4117 137.062 17.2539C138.847 17.1053 140.62 17.3532 142.384 17.6191L142.379 17.5967C142.578 17.6282 142.774 17.7002 143 17.7588C142.934 18.268 142.685 18.4805 142.225 18.4355C141.843 18.395 141.457 18.3496 141.076 18.291C138.909 17.953 136.751 18.1873 134.588 18.3496C130.551 18.6561 126.633 19.7114 122.645 20.3379C120.508 20.6759 118.358 21.0319 116.178 20.6758C115.854 20.6217 115.536 20.5448 115.226 20.4502C114.454 20.2158 113.953 19.7015 113.736 18.9082C113.683 18.71 113.625 18.516 113.55 18.2412C113.195 18.4845 112.916 18.6877 112.624 18.877C112.349 19.0527 112.069 19.2335 111.781 19.3867C110.456 20.0851 109.77 19.9089 108.919 18.6875C107.949 19.1877 107.004 19.7469 106.003 20.166C102.945 21.4371 99.7845 21.9422 96.4961 21.3428C96.146 21.2797 95.8002 21.1851 95.459 21.0859C94.3377 20.7569 93.3892 20.1794 92.8086 19.0391C92.5737 19.1698 92.3698 19.2734 92.1748 19.3906C90.4553 20.4137 88.572 20.9506 86.6221 21.248C84.5036 21.5681 82.3759 21.8697 80.2354 21.5361C79.5131 21.4235 78.7864 21.2121 78.0996 20.9463C77.2531 20.6218 76.6763 19.981 76.4414 19.0615C76.4059 18.9219 76.3439 18.7913 76.2598 18.5752C75.5907 18.8817 75.0408 19.2559 74.5889 19.7832C74.4117 19.9904 74.2437 20.1983 74.0576 20.3965C73.7784 20.6938 73.4232 20.7612 73.082 20.5674C72.7499 20.3781 72.5909 20.0535 72.7061 19.6436C72.7459 19.4993 72.7719 19.3546 72.8428 19.0391C72.4398 19.1967 72.1254 19.3005 71.8242 19.4355C69.6969 20.3731 67.5247 21.1896 65.2334 21.6133C63.381 21.9558 61.515 22.0684 59.667 21.541C58.6433 21.248 57.7256 20.7343 57.0254 19.9365C56.5822 19.4362 56.3035 18.7865 55.918 18.1465C55.3596 18.3448 54.8892 18.8045 54.4238 19.2598C54.1668 19.5121 53.9589 19.8414 53.6621 20.0127C53.4449 20.1389 53.09 20.1436 52.8418 20.0625C52.7002 20.0127 52.5847 19.6932 52.5625 19.4814C52.5315 19.1614 52.5935 18.8318 52.6201 18.4307C52.3368 18.5342 52.1198 18.6107 51.9072 18.6963C48.8715 19.9448 45.7868 21.0319 42.5117 21.415C41.6342 21.5187 40.7252 21.5503 39.8477 21.4512C38.3232 21.2844 37.0116 20.7115 36.626 18.8818C36.4354 19.0035 36.2797 19.066 36.1689 19.1787C33.5897 21.8109 30.3993 23.1045 26.8584 23.7266C23.4148 24.3305 20.0502 23.853 16.7041 23.0732C14.5948 22.582 12.5033 21.9962 10.3984 21.4824C8.49273 21.0182 6.56399 21.0046 4.64941 21.3877C3.90057 21.5365 3.18697 21.8795 2.48242 22.1904C1.83112 22.4788 1.2106 22.8344 0.594727 23.1543C-0.100979 22.6631 -0.1453 22.6273 0.249023 22.0234C0.608006 21.478 1.00723 20.9323 1.48145 20.4951C5.22618 17.0337 9.31195 14.0137 13.3447 10.9219C16.4072 8.57805 19.3552 6.08534 22.3467 3.65137C22.9715 3.14658 23.5789 2.62377 24.1904 2.10547L24.0967 1.94336C23.8221 2.04244 23.5475 2.12787 23.2773 2.23145C20.2681 3.38082 17.2007 4.32308 14.0098 4.77832C12.6005 4.98113 11.1779 5.12069 9.75098 4.88184C8.33288 4.64296 7.07405 4.08868 6.0459 3.05664C5.76674 2.77724 5.47012 2.4705 5.68262 1.88477C5.87287 2.04225 5.98365 2.12325 6.08105 2.21777C7.37064 3.5158 8.93077 4.1473 10.7344 4.16992C12.711 4.19697 14.6437 3.83632 16.5361 3.31348C18.2779 2.83119 19.9933 2.23552 21.7129 1.66309C23.3215 1.13126 24.9129 0.549774 26.5215 0.0224609ZM112.385 16.29C111.33 16.0331 110.11 16.9211 109.995 18.0254C109.915 18.8319 110.31 19.1521 111.055 18.8457C111.888 18.4987 112.553 17.9081 113.204 17.2275C112.841 16.4661 112.766 16.3801 112.385 16.29ZM37.7031 11.7646C38.0797 11.7873 38.3543 12.1076 38.3145 12.4951C38.2744 12.8824 38.0396 13.0804 37.6719 13.1074V13.1123C37.2997 13.1393 37.0118 12.8148 37.0205 12.4229C37.0294 12.0217 37.322 11.7421 37.7031 11.7646ZM93.1904 11.0029C93.598 10.9895 93.9835 11.3542 94.0146 11.7822C94.0501 12.2285 93.6997 12.6389 93.292 12.6299C92.8976 12.6208 92.5299 12.2237 92.5166 11.791C92.4991 11.363 92.7961 11.0164 93.1904 11.0029Z" fill="#47567B"/>
              </svg>
            </button>
          </div>

          {/* Desktop Search Form */}
          {showSearch && (
            <div className="hidden lg:flex items-center gap-5">
              {/* Vendor Type */}
              <div className="w-[211px]">
                <div className="relative">
                  <select 
                    value={localSearchParams.vendorType}
                    onChange={(e) => setLocalSearchParams(prev => ({ ...prev, vendorType: e.target.value }))}
                    className="w-full h-9 px-3 pr-8 bg-white border border-[#8c97ac] rounded-lg setup-description text-[#47567b] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                  >
                    <option value="Florists">Florists</option>
                    <option value="Venues">Venues</option>
                    <option value="Photographers">Photographers</option>
                    <option value="Caterers">Caterers</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#667593]" size={20} />
                </div>
              </div>

              {/* Location */}
              <div className="w-[327px]">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667593]" size={20} />
                  <input
                    type="text"
                    value={localSearchParams.location}
                    onChange={(e) => setLocalSearchParams(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full h-9 pl-10 pr-3 bg-white border border-[#8c97ac] rounded-lg setup-description text-[#667593] focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685] placeholder:text-[#667593]"
                    placeholder="Anywhere"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="w-[157px]">
                <Calendar
                  value={localSearchParams.date}
                  onChange={(date) => setLocalSearchParams(prev => ({ ...prev, date }))}
                  placeholder="Any Day"
                />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-[#2f7685] hover:bg-[#265a66] rounded-full px-3 py-2 flex items-center gap-2 h-9 transition-colors"
              >
                <Search className="text-[#FAFAFA]" size={20} />
                <span className="button-text text-[#FAFAFA]">Search</span>
              </button>
            </div>
          )}

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Button */}
            {showSearch && (
              <button 
                onClick={() => setShowSearchModal(true)}
                className="lg:hidden p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search size={20} />
              </button>
            )}

            {/* Cart Button */}
            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart size={20} />
              {getTotalCartItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center">
                  {getTotalCartItems()}
                </span>
              )}
            </button>

            {/* User Button */}
            <button 
              onClick={() => onNavigate('auth')}
              className="p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors"
            >
              <UserCircle size={22} profilePhotos={profilePhotos} />
            </button>

            {/* Help Button - Desktop Only */}
            <button className="hidden md:block p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors">
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