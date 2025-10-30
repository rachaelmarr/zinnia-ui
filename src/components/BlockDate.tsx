interface BlockDateProps {
  selectedDate: Date;
  onBack: () => void;
  onBlockDate: (notes: string) => Promise<void>;
  onCancel: () => void;
}

export default function BlockDate({ selectedDate, onBack, onBlockDate, onCancel }: BlockDateProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="progress-heading text-[#47567b] mb-4">Block Date</h2>
        <p className="setup-description text-[#667593] mb-8">Block date functionality coming soon!</p>
        <button
          onClick={onBack}
          className="button-text bg-[#667493] hover:bg-[#5a6280] text-white px-6 py-3 rounded-full transition-colors"
        >
          Back to Calendar
        </button>
      </div>
    </div>
  );
}