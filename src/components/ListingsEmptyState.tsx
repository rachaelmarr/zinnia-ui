import ListingAndServicesEmpty from "../imports/ListingAndServicesEmpty-69-9018";

interface ListingsEmptyStateProps {
  onNavigate?: (view: string) => void;
}

// Wrapper component that handles navigation for the empty state
export default function ListingsEmptyState({ onNavigate }: ListingsEmptyStateProps) {
  const handleEmptyStateNavigate = (view: string) => {
    // Map the create listing button to the create listing modal
    if (view === 'createListing') {
      onNavigate?.('createListing');
    } else {
      onNavigate?.(view);
    }
  };

  return <ListingAndServicesEmpty onNavigate={handleEmptyStateNavigate} />;
}