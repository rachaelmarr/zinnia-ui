import React from "react";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import VendorProgressIndicator from "./VendorProgressIndicator";

interface PaymentSuccessStepProps {
  onNavigate: (view: string) => void;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  paymentInfo?: {
    testMode?: 'success' | 'failure' | 'bypass';
  };
}

export default function PaymentSuccessStep({ 
  onNavigate, 
  onNext, 
  onBack, 
  onCancel,
  paymentInfo 
}: PaymentSuccessStepProps) {
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
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-[#47567B] mb-2 text-center" style={{ fontFamily: 'Literata, serif' }}>
          Payment Successful!
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm text-[#47567B] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {paymentInfo?.testMode === 'bypass' 
            ? "Payment bypassed for testing purposes" 
            : "Your subscription has been activated successfully"
          }
        </p>

        {/* Success Details */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 w-full mb-8">
          <h3 className="text-sm font-semibold text-green-800 mb-3" style={{ fontFamily: 'Literata, serif' }}>
            What's Next?
          </h3>
          <ul className="space-y-2 text-sm text-green-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Your account is being set up</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>You'll receive a welcome email shortly</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Access your vendor dashboard to get started</span>
            </li>
          </ul>
        </div>

        {/* Test Mode Notice */}
        {paymentInfo?.testMode && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-full mb-6">
            <p className="text-sm text-blue-700 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              🧪 <strong>Test Mode:</strong> {paymentInfo.testMode === 'bypass' ? 'Payment bypassed' : `Simulated ${paymentInfo.testMode}`}
            </p>
          </div>
        )}
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
          onClick={onNext}
          className="px-8 py-3 rounded-full font-medium bg-[#2f7685] hover:bg-[#1e6b7a] text-white transition-colors flex items-center gap-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Continue to Dashboard
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
