import React, { useState } from "react";
import { X, Check, Zap, Users } from "lucide-react";
import VendorProgressIndicator from "./VendorProgressIndicator";
import { Badge } from "./ui/badge";

interface VendorSubscriptionStepProps {
  onNavigate: (view: string) => void;
  onNext: (subscriptionData: SubscriptionData) => void;
  onBack: () => void;
  onCancel: () => void;
}

interface SubscriptionData {
  planType: 'solo' | 'team';
}

export default function VendorSubscriptionStep({ 
  onNavigate, 
  onNext, 
  onBack, 
  onCancel 
}: VendorSubscriptionStepProps) {
  const [selectedPlan, setSelectedPlan] = useState<'solo' | 'team'>('solo');

  const handleNext = () => {
    onNext({
      planType: selectedPlan
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with progress indicator */}
      <div className="flex justify-between items-center p-6">
        {/* Progress indicator - centered */}
        <div className="flex-1 flex justify-center">
          <VendorProgressIndicator currentStep={3} />
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
      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto w-full">
        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-8">
          {/* Solo Plan */}
          <div
            onClick={() => setSelectedPlan('solo')}
            className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
              selectedPlan === 'solo'
                ? 'border-[#2f7685] bg-[#f8fafc]'
                : 'border-[#e5e7eb] hover:border-[#d1d5db]'
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-[#2f7685] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Plan Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#47567B] mb-4" style={{ fontFamily: 'Literata, serif' }}>
                Solo Plan
              </h3>
              <p className="text-lg font-semibold text-[#47567B] mb-4" style={{ fontFamily: 'Literata, serif' }}>
                $25 a month
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-sm text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="font-medium">Best for:</span> Freelancers & independent vendors
              </p>
              <p className="text-sm text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Everything you need to run your business, beautifully — without the overhead.
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-[#47567B] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                You get:
              </h4>
              <div className="space-y-2">
                {[
                  '1 user seat',
                  'CRM, contracts, invoices, payments',
                  'Text + email in one place',
                  'Availability calendar',
                  'Custom listing for couples',
                  'Mobile-friendly dashboard'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#2f7685] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concluding Statement */}
            <p className="text-sm text-[#47567B] text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Built for simplicity, speed, and solo workflows.
            </p>

            {/* Selection Indicator */}
            {selectedPlan === 'solo' && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-[#2f7685] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Team Plan */}
          <div
            className="relative p-8 rounded-2xl border-2 cursor-not-allowed transition-all duration-200 border-[#e5e7eb] opacity-60"
          >
            {/* Coming Soon Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span 
                style={{ 
                  display: 'inline-block',
                  backgroundColor: '#6b7280',
                  color: '#ffffff',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'Montserrat, sans-serif',
                  lineHeight: '1',
                  whiteSpace: 'nowrap'
                }}
              >
                Coming soon!
              </span>
            </div>

            {/* Icon */}
            <div className="absolute top-4 left-4 mt-8">
              <div className="w-12 h-12 bg-[#6b7280] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Plan Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1f2937] mb-4" style={{ fontFamily: 'Literata, serif' }}>
                Team Plan
              </h3>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-sm text-[#6b7280] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="font-medium">Best for:</span> Studios, venues, and multi-person teams
              </p>
              <p className="text-sm text-[#6b7280]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Powerful tools for teams to collaborate, assign work, and grow together.
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-[#374151] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                You get:
              </h4>
              <div className="space-y-2">
                {[
                  'Unlimited team members',
                  'Role-based permissions',
                  'Shared inbox + pipeline',
                  'Team calendar & reporting',
                  'Everything in Solo plan'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#6b7280] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-[#374151]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concluding Statement */}
            <p className="text-sm text-[#6b7280] text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Coordinate your crew, impress clients, scale with confidence.
            </p>

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
          onClick={handleNext}
          className="px-8 py-3 rounded-full font-medium bg-[#2f7685] hover:bg-[#1e6b7a] text-white transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
