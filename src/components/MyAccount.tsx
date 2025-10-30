import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProfileTab from "./account/ProfileTab";
import BusinessTab from "./account/BusinessTab";
import SecurityTab from "./account/SecurityTab";
import NotificationsTab from "./account/NotificationsTab";
import BillingTab from "./account/BillingTab";
import { 
  ACCOUNT_TABS, 
  INITIAL_PROFILE_DATA, 
  INITIAL_BUSINESS_DATA, 
  INITIAL_SECURITY_DATA, 
  INITIAL_NOTIFICATION_DATA,
  type AccountTab,
  type ProfileData,
  type BusinessData,
  type SecurityData,
  type NotificationData
} from "../constants/accountData";

interface MyAccountProps {
  onNavigate: (view: string) => void;
  profilePhotos: any[];
  setProfilePhotos: (photos: any[]) => void;
}

export default function MyAccount({ onNavigate, profilePhotos, setProfilePhotos }: MyAccountProps) {
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);

  // Form data states
  const [profileData, setProfileData] = useState(INITIAL_PROFILE_DATA);
  const [businessData, setBusinessData] = useState(INITIAL_BUSINESS_DATA);
  const [securityData, setSecurityData] = useState(INITIAL_SECURITY_DATA);
  const [notificationData, setNotificationData] = useState(INITIAL_NOTIFICATION_DATA);


  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      // TODO: Implement API call to save profile data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBusiness = async () => {
    setLoading(true);
    try {
      // TODO: Implement API call to save business data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Business information updated successfully!');
    } catch (error) {
      console.error('Failed to update business information:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      console.error('New passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement API call to change password
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Password changed successfully!');
      setSecurityData(INITIAL_SECURITY_DATA);
    } catch (error) {
      console.error('Failed to change password:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNotifications = async () => {
    setLoading(true);
    try {
      // TODO: Implement API call to save notification preferences
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Notification preferences updated successfully!');
    } catch (error) {
      console.error('Failed to update notification preferences:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <ProfileTab
            profileData={profileData}
            setProfileData={setProfileData}
            loading={loading}
            onSave={handleSaveProfile}
            profilePhotos={profilePhotos}
            setProfilePhotos={setProfilePhotos}
          />
        );
      case 'business':
        return (
          <BusinessTab
            businessData={businessData}
            setBusinessData={setBusinessData}
            loading={loading}
            onSave={handleSaveBusiness}
          />
        );
      case 'security':
        return (
          <SecurityTab
            securityData={securityData}
            setSecurityData={setSecurityData}
            loading={loading}
            onChangePassword={handleChangePassword}
          />
        );
      case 'notifications':
        return (
          <NotificationsTab
            notificationData={notificationData}
            setNotificationData={setNotificationData}
            loading={loading}
            onSave={handleSaveNotifications}
          />
        );
      case 'billing':
        return <BillingTab />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="flex items-center gap-2 text-[#47567B] hover:text-[#2f7685] transition-all duration-200 group bg-white/50 hover:bg-white px-4 py-2 rounded-lg border border-[#e5e7eb] hover:border-[#2f7685]"
                >
                  <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Back to Dashboard
                  </span>
                </button>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#47567B] mb-3" style={{ fontFamily: 'Literata, serif' }}>
                    My Account
                  </h1>
                  <p className="text-[#667593] text-lg max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Manage your profile, business information, and account settings. Keep your information up to date for the best experience.
                  </p>
                </div>
                
                {/* Account Status & Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Account Status Badge */}
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-lg border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Account Active
                    </span>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="hidden lg:flex items-center gap-6 text-sm text-[#667593]">
                    <div className="text-center">
                      <div className="font-semibold text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {ACCOUNT_TABS.length}
                      </div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif' }}>Sections</div>
                    </div>
                    <div className="w-px h-8 bg-[#e5e7eb]"></div>
                    <div className="text-center">
                      <div className="font-semibold text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {activeTab === 'profile' ? '1' : activeTab === 'business' ? '2' : activeTab === 'security' ? '3' : activeTab === 'notifications' ? '4' : '5'}
                      </div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif' }}>Current</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden">
              {/* Tab Headers */}
              <div className="border-b border-[#e5e7eb] bg-gray-50/50">
                <div className="flex overflow-x-auto">
                  {ACCOUNT_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as AccountTab)}
                      className={`relative px-6 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-[#2f7685] bg-white border-b-2 border-[#2f7685]'
                          : 'text-[#667593] hover:text-[#47567B] hover:bg-white/50'
                      }`}
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2f7685]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
  );
}