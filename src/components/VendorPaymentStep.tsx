import React, { useState, useEffect, useRef } from "react";
import { X, CreditCard, Lock, Smartphone } from "lucide-react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import VendorProgressIndicator from "./VendorProgressIndicator";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface VendorPaymentStepProps {
  onNavigate: (view: string) => void;
  onNext: (paymentData: PaymentData) => void;
  onBack: () => void;
  onCancel: () => void;
  subscriptionInfo?: {
    planType: 'solo' | 'team';
  };
  yourInfoData?: {
    // No longer storing business address - only billing address with Stripe
  };
}

interface PaymentData {
  cardholderName: string;
  billingAddress: string;
  promoCode?: string;
  testMode?: 'success' | 'failure' | 'bypass' | 'next';
  paymentStatus?: 'pending' | 'success' | 'failed';
  paymentError?: string;
}

// Stripe Payment Form Component
function StripePaymentForm({ 
  formData, 
  setFormData, 
  errors, 
  setErrors, 
  touched, 
  setTouched, 
  handleInputChange, 
  handleBlur, 
  onNext,
  showMobilePayments,
  setShowMobilePayments,
  addressInputRef
}: {
  formData: PaymentData;
  setFormData: React.Dispatch<React.SetStateAction<PaymentData>>;
  errors: Partial<PaymentData>;
  setErrors: React.Dispatch<React.SetStateAction<Partial<PaymentData>>>;
  touched: Partial<PaymentData>;
  setTouched: React.Dispatch<React.SetStateAction<Partial<PaymentData>>>;
  handleInputChange: (field: keyof PaymentData, value: string) => void;
  handleBlur: (field: keyof PaymentData) => void;
  onNext: (paymentData: PaymentData) => void;
  showMobilePayments: boolean;
  setShowMobilePayments: React.Dispatch<React.SetStateAction<boolean>>;
  addressInputRef: React.RefObject<HTMLInputElement>;
}) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    // Set payment status to pending
    setFormData(prev => ({ ...prev, paymentStatus: 'pending' }));

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: formData.cardholderName,
          address: {
            line1: formData.billingAddress,
          },
        },
      });

      if (error) {
        console.error('Error creating payment method:', error);
        setErrors({ cardElement: error.message || 'Payment method creation failed' });
        setFormData(prev => ({ 
          ...prev, 
          paymentStatus: 'failed', 
          paymentError: error.message || 'Payment method creation failed' 
        }));
        return;
      }

      console.log('Payment method created:', paymentMethod);

      // In a real app, you would now create a payment intent and confirm it
      // For now, we'll simulate the payment processing
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing time

      // Simulate payment success (in real app, this would be based on actual payment result)
      setFormData(prev => ({ ...prev, paymentStatus: 'success' }));
      
      // Proceed to next step with successful payment
      onNext({ ...formData, paymentStatus: 'success' });

    } catch (error) {
      console.error('Payment processing error:', error);
      setFormData(prev => ({ 
        ...prev, 
        paymentStatus: 'failed', 
        paymentError: 'Payment processing failed. Please try again.' 
      }));
      setErrors({ cardElement: 'Payment processing failed. Please try again.' });
    }
  };

  const handlePayPalPayment = async () => {
    setFormData(prev => ({ ...prev, paymentStatus: 'pending' }));
    
    try {
      // Simulate PayPal payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormData(prev => ({ ...prev, paymentStatus: 'success' }));
      onNext({ ...formData, paymentStatus: 'success' });
    } catch (error) {
      setFormData(prev => ({ 
        ...prev, 
        paymentStatus: 'failed', 
        paymentError: 'PayPal payment failed. Please try again.' 
      }));
    }
  };


  return (
    <form id="stripe-payment-form" onSubmit={handleSubmit} className="w-full space-y-6">
      {/* Stripe Card Element */}
      <div>
        <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
          Card Information
        </label>
        <div className="p-4 border border-[#d1d5db] rounded-lg focus-within:ring-2 focus-within:ring-[#2f7685] focus-within:border-transparent">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#374151',
                  fontFamily: 'Montserrat, sans-serif',
                  '::placeholder': {
                    color: '#9ca3af',
                  },
                },
              },
            }}
          />
        </div>
        {errors.cardElement && (
          <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {errors.cardElement}
          </p>
        )}
      </div>

      {/* Alternative Payment Methods */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Or pay with
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {/* PayPal Button */}
        <button
          type="button"
          onClick={handlePayPalPayment}
          className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.543-.676c-.608-.685-1.46-1.074-2.53-1.174-.847-.078-1.578.19-2.18.8-.302.304-.52.662-.654 1.06-.134.398-.178.82-.13 1.26.048.44.19.856.42 1.23.23.375.54.7.92.97.38.27.81.48 1.28.63.47.15.97.23 1.49.23h.04c.52 0 1.02-.08 1.49-.23.47-.15.9-.36 1.28-.63.38-.27.69-.595.92-.97.23-.374.372-.79.42-1.23.048-.44.004-.862-.13-1.26-.134-.398-.352-.756-.654-1.06z" fill="#0070ba"/>
          </svg>
          <span className="text-gray-700 font-medium">Pay with PayPal</span>
        </button>
      </div>

      {/* Cardholder Name */}
      <div>
        <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
          Cardholder Name
        </label>
        <input
          type="text"
          value={formData.cardholderName}
          onChange={(e) => handleInputChange('cardholderName', e.target.value)}
          onBlur={() => handleBlur('cardholderName')}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
            errors.cardholderName ? 'border-red-500' : 'border-[#d1d5db]'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          placeholder="John Doe"
        />
        {errors.cardholderName && (
          <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.cardholderName}</p>
        )}
      </div>

      {/* Billing Address */}
      <div>
        <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
          Billing Address
        </label>
        <input
          ref={addressInputRef}
          type="text"
          value={formData.billingAddress}
          onChange={(e) => handleInputChange('billingAddress', e.target.value)}
          onBlur={() => handleBlur('billingAddress')}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
            errors.billingAddress ? 'border-red-500' : 'border-[#d1d5db]'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          placeholder="Start typing your billing address..."
          autoComplete="off"
        />
        {errors.billingAddress && (
          <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.billingAddress}</p>
        )}
      </div>

      {/* Helper text for address autocomplete */}
      {!errors.billingAddress && (
        <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          💡 Start typing and select from Google suggestions for complete address details
        </p>
      )}
    </form>
  );
}

export default function VendorPaymentStep({ 
  onNavigate, 
  onNext, 
  onBack, 
  onCancel,
  subscriptionInfo
}: VendorPaymentStepProps) {
  const [formData, setFormData] = useState<PaymentData>({
    cardholderName: "",
    billingAddress: "",
    promoCode: ""
  });

  const [errors, setErrors] = useState<Partial<PaymentData>>({});
  const [touched, setTouched] = useState<Partial<PaymentData>>({});
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const addressInputRef = useRef<HTMLInputElement | null>(null);


  // Initialize Google Places Autocomplete for billing address
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && addressInputRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'us' }
        }
      );

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          setFormData(prev => ({
            ...prev,
            billingAddress: place.formatted_address
          }));
        }
      });
    }

    return () => {
      if (autocompleteRef.current) {
        window.google?.maps?.event?.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  const handleInputChange = (field: keyof PaymentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof PaymentData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PaymentData> = {};

    if (!formData.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required";
    if (!formData.billingAddress.trim()) newErrors.billingAddress = "Billing address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with progress indicator */}
      <div className="flex justify-between items-center p-6">
        {/* Progress indicator - centered */}
        <div className="flex-1 flex justify-center">
          <VendorProgressIndicator currentStep={4} />
        </div>

        {/* Close button */}
        <button
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-[#47567B] mb-2 text-center" style={{ fontFamily: 'Literata, serif' }}>
          Payment Information
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm text-[#47567B] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Secure payment powered by Stripe
        </p>


        {/* Subscription Summary */}
        {subscriptionInfo && (
          <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-lg p-4 mb-6 w-full">
            <h3 className="text-sm font-semibold text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif' }}>
              Selected Plan
            </h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {subscriptionInfo.planType.charAt(0).toUpperCase() + subscriptionInfo.planType.slice(1)} Plan
                </p>
                <p className="text-xs text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Monthly billing
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#2f7685]" style={{ fontFamily: 'Literata, serif' }}>
                  ${subscriptionInfo.planType === 'solo' ? '25' : 'TBD'}/month
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Promo Code */}
        <div className="w-full mb-6">
          <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
            Promo Code (Optional)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={formData.promoCode}
              onChange={(e) => handleInputChange('promoCode', e.target.value.toUpperCase())}
              onBlur={() => handleBlur('promoCode')}
              className="flex-1 px-4 py-3 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              placeholder="Enter promo code"
            />
            <button
              type="button"
              className="px-4 py-3 bg-[#2f7685] text-white rounded-lg hover:bg-[#1e6b7a] transition-colors font-medium"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Apply
            </button>
          </div>
          {formData.promoCode && (
            <p className="text-sm text-green-600 mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Promo code applied! You'll see the discount at checkout.
            </p>
          )}
        </div>

        {/* Payment Status */}
        {formData.paymentStatus === 'pending' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
              <p className="text-blue-800 text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Processing payment...
              </p>
            </div>
          </div>
        )}

        {formData.paymentStatus === 'failed' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Payment failed: {formData.paymentError || 'Please try again.'}
            </p>
          </div>
        )}

        {/* Stripe Payment Form */}
        <Elements stripe={stripePromise}>
          <StripePaymentForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            touched={touched}
            setTouched={setTouched}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            onNext={onNext}
            showMobilePayments={false}
            setShowMobilePayments={() => {}}
            addressInputRef={addressInputRef}
          />
        </Elements>

        {/* Security Notice */}
        <div className="flex items-center gap-2 mt-6 text-sm text-[#6b7280]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <Lock className="w-4 h-4" />
          <span>Your payment information is secure and encrypted</span>
        </div>

        {/* Test Credentials Info */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Smartphone className="w-4 h-4 text-gray-500 mt-0.5" />
            <div className="text-xs text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p className="font-medium mb-1">Test Credentials:</p>
              <p><strong>PayPal:</strong> Use test account or simulate payment flow</p>
              <p><strong>Card:</strong> 4242 4242 4242 4242 (Success) | 4000 0000 0000 0002 (Declined)</p>
              
            </div>
          </div>
        </div>

      </div>

      {/* Footer with navigation buttons */}
      <div className="p-6 flex justify-end space-x-4">
        <button
          onClick={onBack}
          className="px-6 py-3 text-[#6b7280] hover:text-[#374151] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Back
        </button>
        <button
          type="submit"
          form="stripe-payment-form"
          className="px-8 py-3 rounded-full font-medium bg-[#2f7685] hover:bg-[#1e6b7a] text-white transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Continue to Account
        </button>
      </div>
    </div>
  );
}
