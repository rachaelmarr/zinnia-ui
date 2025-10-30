import React from "react";
import { XCircle, RefreshCw, ArrowLeft, X } from "lucide-react";
import VendorProgressIndicator from "./VendorProgressIndicator";

interface PaymentFailureStepProps {
  onNavigate: (view: string) => void;
  onRetry: () => void;
  onBack: () => void;
  onCancel: () => void;
  paymentInfo?: {
    testMode?: 'success' | 'failure' | 'bypass';
    errorMessage?: string;
  };
}

export default function PaymentFailureStep({ 
  onNavigate, 
  onRetry, 
  onBack, 
  onCancel,
  paymentInfo 
}: PaymentFailureStepProps) {
  const getErrorMessage = () => {
    if (paymentInfo?.testMode === 'failure') {
      return "Simulated payment failure for testing";
    }
    return paymentInfo?.errorMessage || "Your payment could not be processed";
  };

  const getErrorDetails = () => {
    if (paymentInfo?.testMode === 'failure') {
      return "This is a test failure scenario to demonstrate the error handling flow.";
    }
    return "This could be due to insufficient funds, an expired card, or a temporary issue with your bank.";
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
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <XCircle className="w-12 h-12 text-red-600" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-[#47567B] mb-2 text-center" style={{ fontFamily: 'Literata, serif' }}>
          Payment Failed
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm text-[#47567B] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {getErrorMessage()}
        </p>

        {/* Error Details */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 w-full mb-8">
          <h3 className="text-sm font-semibold text-red-800 mb-3" style={{ fontFamily: 'Literata, serif' }}>
            What happened?
          </h3>
          <p className="text-sm text-red-700 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {getErrorDetails()}
          </p>
          <div className="space-y-2 text-sm text-red-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <p className="font-medium">Please try:</p>
            <ul className="space-y-1 ml-4">
              <li>• Check your card details</li>
              <li>• Verify sufficient funds</li>
              <li>• Try a different payment method</li>
              <li>• Contact your bank if issues persist</li>
            </ul>
          </div>
        </div>

        {/* Test Mode Notice */}
        {paymentInfo?.testMode === 'failure' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-full mb-6">
            <p className="text-sm text-blue-700 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              🧪 <strong>Test Mode:</strong> Simulated payment failure for testing purposes
            </p>
          </div>
        )}
      </div>

      {/* Footer with navigation buttons */}
      <div className="p-6 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-[#6b7280] hover:text-[#374151] transition-colors flex items-center gap-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Payment
        </button>
        <button
          onClick={onRetry}
          className="px-8 py-3 rounded-full font-medium bg-[#2f7685] hover:bg-[#1e6b7a] text-white transition-colors flex items-center gap-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}
