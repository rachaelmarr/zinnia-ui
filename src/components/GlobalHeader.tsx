import React, { useState, useRef, useEffect } from "react";
import { Bell, MessagesSquare } from 'lucide-react';
import svgPaths from "../imports/svg-9qipy85krk";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import { MobileMenuButton } from "./VendorLeftNav";
import { useAuth } from "../hooks/useAuth";


interface GlobalHeaderProps {
  onOpenMobileMenu: () => void;
  onNavigate: (view: string) => void;
  profilePhotos?: any[];
}

export default function GlobalHeader({ onOpenMobileMenu, onNavigate, profilePhotos = [] }: GlobalHeaderProps) {
  const { signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      console.log('🚨 LOGOUT CLICKED: User explicitly clicked logout button');
      await signOut();
      setIsDropdownOpen(false);
      
      // Force a page refresh to ensure complete logout
      console.log('🔄 Forcing page refresh to complete logout...');
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="bg-white h-[72px] w-full border-b border-gray-200">
      <div className="flex items-center justify-between h-full px-4 lg:px-10">
        {/* Left Content with Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={onOpenMobileMenu} />
          
          {/* Logo */}
          <div className="h-6 w-[143px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
              <g clipPath="url(#clip0_96_2725)" id="Logo">
                <path d={svgPaths.p3d68ed00} fill="var(--fill-0, #47567B)" id="Zinnia" />
              </g>
              <defs>
                <clipPath id="clip0_96_2725">
                  <rect fill="white" height="24" width="143" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex items-center gap-6">
          {/* Action Icons */}
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => onNavigate('messages')}
              className="p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
            >
              <MessagesSquare size={20} />
            </button>
            <button 
              onClick={() => onNavigate('notifications')}
              className="p-2 text-[#47567B] hover:bg-gray-100 rounded-full transition-colors"
            >
              <Bell size={20} />
            </button>
          </div>
          
          {/* Avatar with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative size-10 rounded-full hover:ring-2 hover:ring-gray-200 transition-all duration-200"
            >
              {profilePhotos && profilePhotos.length > 0 ? (
                <img
                  src={profilePhotos[0].preview}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div
                  className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-full"
                  style={{ backgroundImage: `url('${imgWebexAvatarMolly}')` }}
                />
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
