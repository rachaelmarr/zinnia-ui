import React from 'react';
import VenueService from './VenueService';
import FloristService from './FloristService';
import PhotographerService from './PhotographerService';

type VendorType = 'venue' | 'florist' | 'photographer';

interface UnifiedServiceCreationProps {
  onNavigate: (view: string) => void;
  onBack: () => void;
  onNext: (data: any) => void;
  vendorType: VendorType;
  initialData?: any;
}

export default function UnifiedServiceCreation({ 
  onNavigate, 
  onBack, 
  onNext, 
  vendorType,
  initialData 
}: UnifiedServiceCreationProps) {
  // Render the appropriate service component based on vendor type
  const renderServiceComponent = () => {
    switch (vendorType) {
      case 'venue':
        return (
          <VenueService 
            onNavigate={onNavigate}
            onBack={onBack}
            onNext={onNext}
            initialData={initialData}
          />
        );
      case 'florist':
        return (
          <FloristService 
            onNavigate={onNavigate}
            onBack={onBack}
            onNext={onNext}
            initialData={initialData}
          />
        );
      case 'photographer':
        return (
          <PhotographerService 
            onNavigate={onNavigate}
            onBack={onBack}
            onNext={onNext}
            initialData={initialData}
          />
        );
      default:
        throw new Error(`Unknown vendor type: ${vendorType}`);
    }
  };

  return renderServiceComponent();
}












