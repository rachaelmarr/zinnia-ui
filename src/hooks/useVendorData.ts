import { useCallback } from 'react';
import { listingsAPI, blockedDatesAPI } from '../lib/api';
import { CALENDAR_DATES } from '../constants';
import type { View } from '../types';

interface UseVendorDataProps {
  user: any;
  userType: string | null;
  setVendorListings: React.Dispatch<React.SetStateAction<any[]>>;
  setHasCompletedListing: React.Dispatch<React.SetStateAction<boolean>>;
  setBlockedDates: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentView: (view: View) => void;
  setSelectedDate: React.Dispatch<React.SetStateAction<number | undefined>>;
  blockedDates: number[];
  currentDateIndex: number;
}

export function useVendorData({ 
  user, 
  userType, 
  setVendorListings, 
  setHasCompletedListing, 
  setBlockedDates, 
  setCurrentView, 
  setSelectedDate,
  blockedDates,
  currentDateIndex 
}: UseVendorDataProps) {
  const loadVendorData = useCallback(async () => {
    if (!user || userType !== 'vendor') return;

    try {
      const listings = await listingsAPI.getVendorListings(user.id);
      setVendorListings(listings);
      setHasCompletedListing(listings.length > 0);

      const blocked = await blockedDatesAPI.getBlockedDates(user.id);
      const blockedDateNumbers = blocked.map(b => {
        const date = new Date(b.blocked_date);
        return date.getDate();
      });
      setBlockedDates(blockedDateNumbers);
    } catch (error) {
      console.error('Error loading vendor data:', error);
    }
  }, [user, userType, setVendorListings, setHasCompletedListing, setBlockedDates]);

  const getCurrentSelectedDate = useCallback(() => {
    const currentCalendarDate = CALENDAR_DATES[currentDateIndex];
    const year = currentCalendarDate.month === 'Jun' ? 2025 : 2025;
    const month = currentCalendarDate.month === 'Jun' ? 5 : 6;
    return new Date(year, month, currentCalendarDate.date);
  }, [currentDateIndex]);

  const handleBlockDate = useCallback(async (notes: string) => {
    if (!user || userType !== 'vendor') return;
    
    const selectedDate = getCurrentSelectedDate();
    const dateString = selectedDate.toISOString().split('T')[0];
    
    try {
      await blockedDatesAPI.blockDate(user.id, dateString, notes);
      
      const dateToBlock = selectedDate.getDate();
      if (!blockedDates.includes(dateToBlock)) {
        const newBlockedDates = [...blockedDates, dateToBlock];
        setBlockedDates(newBlockedDates);
      }
      
      setCurrentView('calendar');
    } catch (error) {
      console.error('Error blocking date:', error);
    }
  }, [user, userType, getCurrentSelectedDate, blockedDates, setBlockedDates, setCurrentView]);

  const handleDateClick = useCallback(async (date: number) => {
    console.log('Date clicked:', date);
    
    if (!user || userType !== 'vendor') return;
    
    setSelectedDate(date);
    
    const isBlocked = blockedDates.includes(date);
    
    if (isBlocked) {
      try {
        const dateToUnblock = CALENDAR_DATES.find(d => d.date === date);
        if (!dateToUnblock) return;
        
        const year = dateToUnblock.month === 'Jun' ? 2025 : 2025;
        const month = dateToUnblock.month === 'Jun' ? 5 : 6;
        const dateObj = new Date(year, month, date);
        const dateString = dateObj.toISOString().split('T')[0];
        
        await blockedDatesAPI.unblockDate(user.id, dateString);
        
        const newBlockedDates = blockedDates.filter(d => d !== date);
        setBlockedDates(newBlockedDates);
        
        console.log(`Date ${date} unblocked successfully`);
      } catch (error) {
        console.error('Error unblocking date:', error);
      }
    } else {
      try {
        const dateToBlock = CALENDAR_DATES.find(d => d.date === date);
        if (!dateToBlock) return;
        
        const year = dateToBlock.month === 'Jun' ? 2025 : 2025;
        const month = dateToBlock.month === 'Jun' ? 5 : 6;
        const dateObj = new Date(year, month, date);
        const dateString = dateObj.toISOString().split('T')[0];
        
        await blockedDatesAPI.blockDate(user.id, dateString, `Blocked on ${dateToBlock.day} ${dateToBlock.month} ${date}`);
        
        const newBlockedDates = [...blockedDates, date];
        setBlockedDates(newBlockedDates);
        
        console.log(`Date ${date} blocked successfully`);
      } catch (error) {
        console.error('Error blocking date:', error);
      }
    }
  }, [user, userType, setSelectedDate, blockedDates, setBlockedDates]);

  return {
    loadVendorData,
    getCurrentSelectedDate,
    handleBlockDate,
    handleDateClick
  };
}