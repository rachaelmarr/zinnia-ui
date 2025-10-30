import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart } from 'lucide-react';
import Header from './Header';

interface CartProps {
  onNavigate: (view: string) => void;
  cartItems: CartItem[];
  onUpdateCart: (items: CartItem[]) => void;
}

interface CartItem {
  vendorId: string;
  vendorName: string;
  serviceName: string;
  price: number;
  date: string;
  image: string;
  quantity?: number;
}

export default function Cart({ onNavigate, cartItems, onUpdateCart }: CartProps) {
  const [items, setItems] = useState<CartItem[]>(
    cartItems.map(item => ({ ...item, quantity: item.quantity || 1 }))
  );

  const updateQuantity = (vendorId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(vendorId);
      return;
    }

    const updatedItems = items.map(item =>
      item.vendorId === vendorId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    onUpdateCart(updatedItems);
  };

  const removeItem = (vendorId: string) => {
    const updatedItems = items.filter(item => item.vendorId !== vendorId);
    setItems(updatedItems);
    onUpdateCart(updatedItems);
  };

  const subtotal = items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header 
        onNavigate={onNavigate} 
        cartItems={items}
        showSearch={false}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('search')}
          className="flex items-center gap-2 text-[#47567b] hover:text-[#2f7685] mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="button-text">Continue Shopping</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="section-heading text-[#47567b] mb-6">Your Cart</h1>
            
            {items.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <ShoppingCart size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="step-title text-[#47567b] mb-2">Your cart is empty</h3>
                <p className="setup-description text-gray-600 mb-6">
                  Browse our vendors and add services to get started.
                </p>
                <button
                  onClick={() => onNavigate('landing')}
                  className="button-text bg-[#2f7685] hover:bg-[#1e6b7a] text-white px-6 py-3 rounded-full transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.vendorId} className="bg-white rounded-lg p-4 flex items-center gap-4">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.vendorName}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="step-title text-[#47567b] mb-1">{item.vendorName}</h3>
                      <p className="setup-description text-gray-600 mb-1">{item.serviceName}</p>
                      <p className="setup-description text-gray-600">Date: {item.date}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 border rounded">
                        <button
                          onClick={() => updateQuantity(item.vendorId, (item.quantity || 1) - 1)}
                          className="p-1 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-2 setup-description text-[#47567b]">{item.quantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.vendorId, (item.quantity || 1) + 1)}
                          className="p-1 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right min-w-[80px]">
                        <p className="step-title text-[#47567b]">
                          ${(item.price * (item.quantity || 1)).toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.vendorId)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-8">
                <h2 className="section-heading text-[#47567b] mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="setup-description text-gray-600">Subtotal</span>
                    <span className="setup-description text-[#47567b]">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="setup-description text-gray-600">Tax</span>
                    <span className="setup-description text-[#47567b]">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="step-title text-[#47567b]">Total</span>
                      <span className="step-title text-[#47567b]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('checkout')}
                  className="w-full button-text bg-[#2f7685] hover:bg-[#1e6b7a] text-white py-3 rounded-full transition-colors mb-4"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => onNavigate('search')}
                  className="w-full button-text border border-[#47567b] text-[#47567b] py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="step-title text-[#47567b] mb-3">We Accept</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">VISA</span>
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">MC</span>
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">AMEX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}