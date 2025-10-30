import { useState } from 'react';
import CoupleYourInfoStep from './CoupleYourInfoStep';
import CoupleContactInfoStep from './CoupleContactInfoStep';

interface CoupleSignupFlowProps {
  onNavigate: (view: string) => void;
  onComplete: (data: CoupleSignupData) => void;
}

interface CoupleYourInfoData {
  firstName: string;
  lastName: string;
  partnerFirstName: string;
  partnerLastName: string;
  city: string;
  state: string;
  hasDate: boolean;
  weddingDate: string;
}

interface CoupleContactInfoData {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  textUpdatesConsent: boolean;
}

interface CoupleSignupData {
  yourInfo: CoupleYourInfoData;
  contactInfo: CoupleContactInfoData;
}

type Step = 'yourInfo' | 'contactInfo';

export default function CoupleSignupFlow({ onNavigate, onComplete }: CoupleSignupFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>('yourInfo');
  const [yourInfoData, setYourInfoData] = useState<CoupleYourInfoData | null>(null);
  const [contactInfoData, setContactInfoData] = useState<CoupleContactInfoData | null>(null);

  const handleYourInfoNext = (data: CoupleYourInfoData) => {
    setYourInfoData(data);
    setCurrentStep('contactInfo');
  };

  const handleContactInfoNext = (data: CoupleContactInfoData) => {
    setContactInfoData(data);
    
    // Complete the signup flow
    if (yourInfoData) {
      const completeData: CoupleSignupData = {
        yourInfo: yourInfoData,
        contactInfo: data
      };
      onComplete(completeData);
    }
  };

  const handleBack = () => {
    if (currentStep === 'contactInfo') {
      setCurrentStep('yourInfo');
    }
  };

  const handleCancel = () => {
    onNavigate('landing');
  };

  const handleBackToUserType = () => {
    onNavigate('userTypeSelection');
  };

  if (currentStep === 'yourInfo') {
    return (
      <CoupleYourInfoStep
        onNext={handleYourInfoNext}
        onBack={handleBackToUserType}
        onCancel={handleCancel}
      />
    );
  }

  if (currentStep === 'contactInfo') {
    return (
      <CoupleContactInfoStep
        onNext={handleContactInfoNext}
        onBack={handleBack}
        onCancel={handleCancel}
      />
    );
  }

  return null;
}

