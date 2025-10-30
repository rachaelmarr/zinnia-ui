import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, ChevronDown, MapPin, ShoppingCart, HelpCircle } from 'lucide-react';
import SearchAndBookHeader from './SearchAndBookHeader';
import svgPaths from "../imports/svg-nag4br4gyo";
import heroImage from 'figma:asset/5cb1cb85e10e9c83e69affc04caae0601b1e01a2.png';
import floristImage from 'figma:asset/1abf7516e268ccef20abc3127374b4bad589b3c2.png';
import photographerImage from 'figma:asset/dad425db94f84361cd20b779316b74a7f98662a2.png';
import venueImage from 'figma:asset/78225c81e42df94a4d8bb62867b1a8490bc3d242.png';
import Calendar from './Calendar';

interface LandingProps {
  onNavigate: (view: string) => void;
  onSearch: (searchParams: SearchParams) => void;
}

interface SearchParams {
  vendorType: string;
  location: string;
  date: string;
}

const vendorCategories = [
  {
    title: "Check out venues",
    image: venueImage,
    category: "venues"
  },
  {
    title: "Check out photographers", 
    image: photographerImage,
    category: "photographers"
  },
  {
    title: "Check out florists",
    image: floristImage,
    category: "florists"
  }
];

const recentlyAdded = [
  {
    id: 1,
    title: "This venue",
    price: "$1,092.50 total",
    subtitle: "includes taxes + fees",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=214&h=171&fit=crop"
  },
  {
    id: 2,
    title: "This venue", 
    price: "$1,092.50 total",
    subtitle: "includes taxes + fees",
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=214&h=171&fit=crop"
  },
  {
    id: 3,
    title: "This venue",
    price: "$1,092.50 total", 
    subtitle: "includes taxes + fees",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=214&h=171&fit=crop"
  },
  {
    id: 4,
    title: "This venue",
    price: "$1,092.50 total",
    subtitle: "includes taxes + fees", 
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=214&h=171&fit=crop"
  },
  {
    id: 5,
    title: "This venue",
    price: "$1,092.50 total",
    subtitle: "includes taxes + fees",
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=214&h=171&fit=crop"
  },
  {
    id: 6,
    title: "This venue",
    price: "$1,092.50 total",
    subtitle: "includes taxes + fees",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=214&h=171&fit=crop"
  }
];


export default function Landing({ onNavigate, onSearch }: LandingProps) {
  const [searchForm, setSearchForm] = useState({
    vendorType: 'Florists',
    location: 'Chicago, IL',
    date: 'Any Day'
  });

  const handleSearch = () => {
    onSearch(searchForm);
  };

  const handleCategoryClick = (category: string) => {
    setSearchForm(prev => ({ ...prev, vendorType: category }));
    onSearch({ ...searchForm, vendorType: category });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <SearchAndBookHeader 
        onNavigate={onNavigate}
        onSearch={onSearch}
        searchParams={searchForm}
      />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-[#47567b] mb-3" style={{ fontFamily: 'Literata, serif', fontSize: '2rem', fontWeight: '600' }}>
              Craft Your Perfect Day
            </h1>
            <p className="text-[#47567b] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem' }}>
              Get the party started on your wedding adventure. Dive into seamless planning by searching for your dream vendors—your vision, our expertise, effortlessly united.
            </p>

            {/* Search Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg w-full max-w-4xl mx-auto">
              <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end">
                {/* Vendor Type */}
                <div className="w-full md:flex-1">
                  <div className="relative">
                    <select 
                      value={searchForm.vendorType}
                      onChange={(e) => setSearchForm(prev => ({ ...prev, vendorType: e.target.value }))}
                      className="w-full h-10 md:h-9 px-3 pr-8 bg-white border border-gray-300 rounded-lg text-[#47567b] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem' }}
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
                <div className="w-full md:flex-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      value={searchForm.location}
                      onChange={(e) => setSearchForm(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full h-10 md:h-9 pl-10 pr-3 bg-[#f1f6fa] border-0 rounded-lg text-[#47567b] focus:outline-none focus:ring-2 focus:ring-[#2f7685] placeholder:text-gray-400"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem' }}
                      placeholder="Enter location"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="w-full md:flex-1">
                  <Calendar
                    value={searchForm.date}
                    onChange={(date) => setSearchForm(prev => ({ ...prev, date }))}
                    placeholder="Any Day"
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="bg-[#2f7685] hover:bg-[#1e6b7a] text-white px-6 py-2.5 md:py-2 rounded-full transition-colors flex items-center justify-center gap-2 h-10 md:h-9 w-full md:w-auto md:flex-shrink-0"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: '500' }}
                >
                  <Search size={16} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup CTA */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif', fontSize: '1.5rem', fontWeight: '600' }}>
            Don't have an account?
          </h2>
          <p className="text-[#47567b] mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem' }}>
            Join thousands of couples and vendors who use Zinnia to plan their perfect wedding day and grow their business.
          </p>
          <button 
            onClick={() => {
              console.log('🎯 Landing page: Sign up button clicked');
              console.log('🎯 onNavigate function:', onNavigate);
              console.log('🎯 Calling onNavigate with userTypeSelection');
              onNavigate('userTypeSelection');
              console.log('🎯 onNavigate call completed');
            }}
            className="bg-[#2f7685] hover:bg-[#1e6b7a] text-white px-8 py-3 rounded-full transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: '500' }}
          >
            Sign up now
          </button>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vendorCategories.map((category, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onClick={() => handleCategoryClick(category.category)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[319px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#47567b]" style={{ fontFamily: 'Literata, serif', fontSize: '1.25rem', fontWeight: '600' }}>{category.title}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#47567b]">
                    <path d="M8.16667 2.91667L12.25 7M12.25 7L8.16667 11.0833M12.25 7H1.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#47567b] mb-8" style={{ fontFamily: 'Literata, serif', fontSize: '1.5rem', fontWeight: '600' }}>Recently added in Chicago</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {recentlyAdded.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[149px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#47567b] hover:bg-white transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1.9498 4.53712C2.08172 4.21863 2.27508 3.92925 2.51883 3.6855C2.76259 3.44174 3.05197 3.24838 3.37045 3.11646C3.68893 2.98454 4.03028 2.91664 4.375 2.91664C4.71972 2.91664 5.06107 2.98454 5.37955 3.11646C5.69803 3.24838 5.98741 3.44174 6.23117 3.6855L7 4.45433L7.76883 3.6855C8.26112 3.19321 8.9288 2.91665 9.625 2.91665C10.3212 2.91665 10.9889 3.19321 11.4812 3.6855C11.9735 4.17779 12.25 4.84547 12.25 5.54167C12.25 6.23786 11.9735 6.90555 11.4812 7.39783L7 11.879L2.51883 7.39783C2.27508 7.15408 2.08172 6.8647 1.9498 6.54622C1.81788 6.22774 1.74998 5.88639 1.74998 5.54167C1.74998 5.19694 1.81788 4.8556 1.9498 4.53712Z" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="text-center">
                  <p className="text-[#47567b] mb-1" style={{ fontFamily: 'Literata, serif', fontSize: '1.25rem', fontWeight: '600' }}>{item.title}</p>
                  <p className="text-[#47567b] mb-1" style={{ fontFamily: 'Literata, serif', fontSize: '1.25rem', fontWeight: '600' }}>{item.price}</p>
                  <p className="text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem' }}>{item.subtitle}</p>
                  
                  <button className="bg-[#667493] hover:bg-[#5a6280] text-white px-4 py-2 rounded-full mt-4 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: '500' }}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Couple Spotlight */}
      <section className="py-16 px-4 bg-[#ccd7e6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="step-title text-[#47567b] mb-2">Couple Spotlight</p>
              <h2 className="booking-title text-[#47567b] mb-6">Evelyn Oaks + Keeley Barns</h2>
              <blockquote className="step-title text-[#47567b] mb-6">
                "We created our most perfect wedding."
              </blockquote>
              <div className="space-y-4">
                <p className="setup-description text-[#47567b]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam
                </p>
                <p className="setup-description text-[#47567b]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam sed venenatis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-[300px] h-[300px] md:w-[438px] md:h-[438px] rounded-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=438&h=438&fit=crop"
                  alt="Evelyn Oaks and Keeley Barns"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Signup Section */}
      <section className="py-16 px-4 bg-[#f0f5fa]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
            Are you a wedding vendor?
          </h2>
          <p className="text-[#47567b] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Join our platform and grow your business by connecting with couples looking for your services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Venue Signup */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="/assets/venue-default.svg" 
                  alt="Venue" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>
                Venue Owners
              </h3>
              <p className="text-[#47567b] mb-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                List your venue and connect with couples planning their special day.
              </p>
              <button 
                onClick={() => onNavigate('venueAuth')}
                className="w-full bg-[#667493] text-white py-2 px-4 rounded-lg hover:bg-[#5a6785] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Get Started
              </button>
            </div>

            {/* Florist Signup */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="/assets/florist-default.svg" 
                  alt="Florist" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>
                Florists
              </h3>
              <p className="text-[#47567b] mb-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Showcase your floral designs and attract couples for their wedding flowers.
              </p>
              <button 
                onClick={() => onNavigate('floristAuth')}
                className="w-full bg-[#667493] text-white py-2 px-4 rounded-lg hover:bg-[#5a6785] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Get Started
              </button>
            </div>

            {/* Photographer Signup */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="/assets/photographer-default.svg" 
                  alt="Photographer" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>
                Photographers
              </h3>
              <p className="text-[#47567b] mb-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Display your portfolio and book couples for their wedding photography.
              </p>
              <button 
                onClick={() => onNavigate('photographerAuth')}
                className="w-full bg-[#667493] text-white py-2 px-4 rounded-lg hover:bg-[#5a6785] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}