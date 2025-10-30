import { useCallback } from 'react';
import type { CartItem, SearchParams, View } from '../types';

interface UseCartManagementProps {
  setSearchParams: (params: SearchParams) => void;
  setCurrentView: (view: View) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export function useCartManagement({ setSearchParams, setCurrentView, setCartItems }: UseCartManagementProps) {
  const handleSearch = useCallback((params: SearchParams) => {
    setSearchParams(params);
    setCurrentView('search');
  }, [setSearchParams, setCurrentView]);

  const handleAddToCart = useCallback((item: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(p => p.vendorId === item.vendorId);
      if (existingItem) {
        return prev.map(p => 
          p.vendorId === item.vendorId 
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    
    console.log('Added to cart:', item.vendorName);
  }, [setCartItems]);

  const handleUpdateCart = useCallback((items: CartItem[]) => {
    setCartItems(items);
  }, [setCartItems]);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);

  return {
    handleSearch,
    handleAddToCart,
    handleUpdateCart,
    handleClearCart
  };
}