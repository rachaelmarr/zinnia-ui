import { useState } from 'react';
import { ArrowLeft, Heart, Star, MapPin, Calendar, Bell, Search, ChevronDown, LogOut } from 'lucide-react';
import { BudgetCard } from './BudgetCard';
import FavoritesPage from './FavoritesPage';
import ProfileSettings from './ProfileSettings';
import { useAuth } from '../hooks/useAuth';

interface CoupleDashboardProps {
  onNavigate: (view: string) => void;
}

export default function CoupleDashboard({ onNavigate }: CoupleDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      // Navigate back to the main screen after logout
      onNavigate('auth');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Budget data
  const budgetData = {
    budget: 20000,
    items: [
      { name: 'Venue', value: 8000, color: '#64748b' },
      { name: 'Florist', value: 2000, color: '#0891b2' },
      { name: 'Photographer', value: 5000, color: '#1e3a8a' }
    ]
  };

  // Debug logging
  console.log('CoupleDashboard budgetData:', budgetData);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="w-full px-4 py-5 bg-white border-b border-slate-300 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="w-36 h-6"></div>
        </div>
        
        {/* Search and Filters */}
        <div className="flex items-center gap-5">
          <div className="w-52">
            <div className="h-9 p-3 bg-white rounded-lg border border-slate-400 flex items-center gap-2">
              <div className="flex-1 text-slate-500 text-sm font-normal font-['Montserrat']">All vendors</div>
              <ChevronDown className="w-5 h-5 text-slate-500" />
            </div>
          </div>
          
          <div className="w-80">
            <div className="h-9 p-3 bg-white rounded-lg border border-slate-400 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-slate-500" />
              <div className="flex-1 text-slate-500 text-sm font-normal font-['Montserrat']">Anywhere</div>
            </div>
          </div>
          
          <div className="w-40">
            <div className="h-9 p-3 bg-white rounded-lg border border-slate-400 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-500" />
              <div className="flex-1 text-slate-500 text-sm font-normal font-['Montserrat']">Any day</div>
            </div>
          </div>
          
          <button className="w-24 h-9 px-3 py-2 bg-cyan-700 rounded-3xl flex items-center gap-2">
            <Search className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium font-['Montserrat']">Search</span>
          </button>
        </div>
        
        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <Heart className="w-6 h-6 text-slate-600" />
          <div className="relative">
            <Bell className="w-6 h-6 text-slate-600" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-700 rounded-full"></div>
          </div>
          <img className="w-6 h-6 rounded-full" src="https://placehold.co/24x24" alt="Profile" />
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-[#47567B] text-sm font-medium font-['Montserrat'] hover:bg-slate-100 rounded-lg transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-10 py-4">
        <button className="flex items-center gap-2 text-[#47567B] text-sm font-normal font-['Montserrat']">
          <ArrowLeft className="w-6 h-6" />
          Back
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="px-10 border-b border-neutral-300 flex gap-4">
        <button 
          className={`h-9 p-2 border-b-2 flex items-center gap-x-2 ${activeTab === 'dashboard' ? 'border-neutral-900' : 'border-transparent'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <span className={`text-sm font-normal font-['Montserrat'] ${activeTab === 'dashboard' ? 'text-[#47567B]' : 'text-slate-500'}`}>
            Dashboard
          </span>
        </button>
        <button 
          className={`h-9 p-2 border-b-2 flex items-center gap-x-2 ${activeTab === 'messages' ? 'border-neutral-900' : 'border-transparent'}`}
          onClick={() => setActiveTab('messages')}
        >
          <span className={`text-sm font-normal font-['Montserrat'] ${activeTab === 'messages' ? 'text-[#47567B]' : 'text-slate-500'}`}>
            Messages
          </span>
          <div className="px-1.5 py-0.5 bg-slate-400 rounded-full min-w-[20px] flex items-center justify-center">
            <span className="text-neutral-50 text-xs font-normal font-['Jost']">5</span>
          </div>
        </button>
        <button 
          className={`h-9 p-2 border-b-2 flex items-center gap-x-2 ${activeTab === 'favorites' ? 'border-neutral-900' : 'border-transparent'}`}
          onClick={() => setActiveTab('favorites')}
        >
          <span className={`text-sm font-normal font-['Montserrat'] ${activeTab === 'favorites' ? 'text-[#47567B]' : 'text-slate-500'}`}>
            Favorites
          </span>
        </button>
        <button 
          className={`h-9 p-2 border-b-2 flex items-center gap-x-2 ${activeTab === 'payments' ? 'border-neutral-900' : 'border-transparent'}`}
          onClick={() => setActiveTab('payments')}
        >
          <span className={`text-sm font-normal font-['Montserrat'] ${activeTab === 'payments' ? 'text-[#47567B]' : 'text-slate-500'}`}>
            Payments
          </span>
        </button>
        <button 
          className={`h-9 p-2 border-b-2 flex items-center gap-x-2 ${activeTab === 'profile' ? 'border-neutral-900' : 'border-transparent'}`}
          onClick={() => setActiveTab('profile')}
        >
          <span className={`text-sm font-normal font-['Montserrat'] ${activeTab === 'profile' ? 'text-[#47567B]' : 'text-slate-500'}`}>
            Profile Settings
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full min-h-screen bg-slate-100">
        {activeTab === 'dashboard' && (
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Budget Card */}
            <BudgetCard budget={budgetData.budget} items={budgetData.items} />

            {/* Notifications Card */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full">
              <h2 className="text-xl font-semibold text-cyan-700 font-['Literata'] mb-4">Notifications</h2>
              
              {/* Notification Tabs */}
              <div className="border-b border-neutral-300 flex gap-4 mb-6">
                <button className="h-9 p-2 border-b-2 border-neutral-900 flex items-center gap-3">
                  <span className="text-[#47567B] text-sm font-normal font-['Montserrat']">My vendors</span>
                  <div className="px-2 bg-neutral-900 rounded-lg">
                    <span className="text-neutral-50 text-xs font-normal font-['Jost']">2</span>
                  </div>
                </button>
                <button className="h-9 p-2 flex items-center gap-3">
                  <span className="text-slate-500 text-sm font-normal font-['Montserrat']">Messages</span>
                  <div className="px-2 bg-slate-400 rounded-lg">
                    <span className="text-neutral-50 text-xs font-normal font-['Jost']">5</span>
                  </div>
                </button>
              </div>
              
              {/* Notification Cards */}
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="px-1 bg-yellow-700 rounded">
                          <span className="text-neutral-50 text-xs font-normal font-['Jost']">Awaiting confirmation</span>
                        </div>
                        <div className="w-6 h-6 relative">
                          <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-1 outline-slate-600"></div>
                        </div>
                      </div>
                      <div className="text-[#47567B] text-base font-medium font-['Literata']">Ginny's Makeup</div>
                      <div className="text-[#47567B] text-sm font-normal font-['Montserrat']">3/27/2024 10-11 AM</div>
                    </div>
                    <button className="h-9 px-3 py-2 rounded-3xl border border-slate-400 flex items-center">
                      <span className="text-[#47567B] text-sm font-medium font-['Montserrat']">Message Vendor</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-3 bg-white rounded-lg border border-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="px-1 bg-cyan-700 rounded flex items-center gap-1">
                          <div className="w-3 h-3 relative">
                            <div className="w-2 h-2 left-[1.5px] top-[1.5px] absolute outline outline-1 outline-neutral-100"></div>
                          </div>
                          <span className="text-neutral-50 text-xs font-normal font-['Jost']">Confirmed</span>
                        </div>
                        <div className="w-6 h-6 relative">
                          <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-1 outline-slate-600"></div>
                        </div>
                      </div>
                      <div className="text-[#47567B] text-base font-medium font-['Literata']">Cool Photographer</div>
                      <div className="text-[#47567B] text-sm font-normal font-['Montserrat']">3/27/2024 10-11 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 w-full">
              <h2 className="text-xl font-semibold text-cyan-700 font-['Literata'] mb-6">Favorites</h2>
              
              {/* Favorite Card */}
              <div className="mb-6">
                <div className="w-full h-52 relative bg-white rounded-md overflow-hidden mb-4">
                  <img className="w-full h-full object-cover" src="https://placehold.co/400x300" alt="Venue" />
                  <div className="absolute top-3 right-3 p-1.5 bg-neutral-100 rounded-full">
                    <Heart className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-[#47567B] text-base font-semibold font-['Literata']">A Beach Place</h3>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-slate-500" />
                    <span className="text-slate-500 text-sm font-normal font-['Montserrat']">Redondo Beach, CA</span>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-3.5 h-3.5 ${star <= 4 ? 'text-cyan-700 fill-current' : 'text-cyan-700'}`} />
                      ))}
                    </div>
                    <span className="text-[#47567B] text-sm font-normal font-['Montserrat']">3.0 | 2 Reviews</span>
                  </div>
                  
                  <div className="flex items-end">
                    <span className="text-[#47567B] text-base font-medium font-['Literata']">From </span>
                    <span className="text-[#47567B] text-base font-semibold font-['Literata']"> $7,000.00</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full h-9 px-3 py-2 rounded-3xl border border-slate-400 flex items-center justify-center gap-2">
                <span className="text-[#47567B] text-sm font-medium font-['Montserrat']">View all favorites</span>
                <div className="w-5 h-5 relative">
                  <div className="w-3.5 h-3 left-[2.5px] top-[4px] absolute outline outline-1 outline-neutral-50"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 w-full">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-cyan-700 font-['Literata'] mb-2">My Big Day</h2>
                <p className="text-slate-500 text-sm font-medium font-['Literata']">Saturday May 21st, 2024</p>
              </div>
              
              {/* Timeline */}
              <div className="space-y-6 mb-6">
                {['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM'].map((time) => (
                  <div key={time} className="flex items-center gap-4">
                    <div className="w-12 text-right text-[#47567B] text-sm font-medium font-['Montserrat']">{time}</div>
                    <div className="flex-1 h-0 border-t border-zinc-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Timeline Events */}
              <div className="space-y-4 mb-6">
                <div className="w-full h-14 bg-slate-300 rounded-lg p-4 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-base font-medium font-['Literata']">Ginny's makeup</div>
                      <div className="text-white text-sm font-normal font-['Montserrat']">10 AM - 11 AM</div>
                    </div>
                    <div className="p-2 bg-white rounded-full">
                      <div className="w-5 h-5 relative">
                        <div className="w-3.5 h-3.5 left-[2.5px] top-[3px] absolute outline outline-1 outline-slate-600"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-4 right-4 border-t border-white"></div>
                  <div className="absolute bottom-1 left-4 text-white text-sm font-normal font-['Montserrat']">
                    1000 Wabash St Chicago, IL 60006
                  </div>
                </div>
                
                <div className="w-full h-24 bg-blue-950 rounded-lg p-4 relative">
                  <div className="mb-2">
                    <div className="text-white text-base font-medium font-['Literata']">Cool Photographer</div>
                    <div className="text-white text-sm font-normal font-['Montserrat']">2PM - 10PM</div>
                  </div>
                  <div className="absolute bottom-2 left-4 right-4 border-t border-white"></div>
                  <div className="absolute bottom-1 left-4 text-white text-sm font-normal font-['Montserrat']">
                    1000 Wabash St Chicago, IL 60006
                  </div>
                </div>
                
                <div className="w-full h-20 bg-slate-600 rounded-lg p-4 relative">
                  <div className="mb-2">
                    <div className="text-white text-base font-medium font-['Literata']">Tidal Basin</div>
                    <div className="text-white text-sm font-normal font-['Montserrat']">11 AM - 2PM</div>
                  </div>
                  <div className="absolute bottom-2 left-4 right-4 border-t border-white"></div>
                  <div className="absolute bottom-1 left-4 text-white text-sm font-normal font-['Montserrat']">
                    1000 Wabash St Chicago, IL 60006
                  </div>
                </div>
              </div>
              
              <button className="w-full h-9 px-3 py-2 rounded-3xl border border-slate-400 flex items-center justify-center gap-2">
                <span className="text-[#47567B] text-sm font-medium font-['Montserrat']">Find more vendors</span>
              </button>
            </div>
          </div>
        </div>
        </div>
        )}

        {activeTab === 'favorites' && (
          <FavoritesPage onNavigate={onNavigate} />
        )}

        {activeTab === 'messages' && (
          <div className="p-6">
            <h1 className="text-2xl font-semibold font-['Literata'] text-[#47567B] mb-6">Messages</h1>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-slate-500 font-['Montserrat']">Messages feature coming soon...</p>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="p-6">
            <h1 className="text-2xl font-semibold font-['Literata'] text-[#47567B] mb-6">Payments</h1>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-slate-500 font-['Montserrat']">Payments feature coming soon...</p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <ProfileSettings />
        )}
      </div>
    </div>
  );
}