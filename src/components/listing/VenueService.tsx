import { useState } from "react";
import svgPaths from "../../imports/svg-j4b4jnqjp9";
import PhotoEditOverlay from "./PhotoEditOverlay";
import CreateListingStepper from "./CreateListingStepper";

interface VenueServiceProps {
  onNavigate: (view: string) => void;
  onBack: () => void;
  onNext: (data: any) => void;
  initialData?: any;
}

export default function VenueService({ onNavigate, onBack, onNext, initialData }: VenueServiceProps) {
  const [formData, setFormData] = useState({
    serviceName: initialData?.serviceName || "Ceremony + Reception",
    daysOfWeek: initialData?.daysOfWeek || [],
    description: initialData?.description || "",
    hours: initialData?.hours || "5 hours",
    price: initialData?.price || "300",
    included: initialData?.included || {
      groomRoom: true,
      chairs: true,
      bridalSuite: false,
      other: true
    },
    otherServices: initialData?.otherServices || "Other included services"
  });

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const [photoEdits, setPhotoEdits] = useState<{[key: string]: { scale: number, offset: { x: number, y: number } }}>({});

  const handleDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      daysOfWeek: prev.daysOfWeek.includes(day)
        ? prev.daysOfWeek.filter(d => d !== day)
        : [...prev.daysOfWeek, day]
    }));
  };

  const handleIncludedToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      included: {
        ...prev.included,
        [item]: !prev.included[item]
      }
    }));
  };

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
      }
    };
    input.click();
  };

  const handleImageDelete = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
      setUploadedImage(null);
    }
  };

  const handleEditPhoto = () => {
    setShowEditOverlay(true);
  };

  const handleCloseEditOverlay = () => {
    setShowEditOverlay(false);
  };

  const handleSavePhotoEdit = (editData: { scale: number, offset: { x: number, y: number } }) => {
    const editKey = `${uploadedImage}_0`;
    setPhotoEdits(prev => ({
      ...prev,
      [editKey]: editData
    }));
  };

  // Validation function
  const isVenueServiceValid = () => {
    // Check if required fields are filled
    return formData.serviceName && formData.serviceName.trim() !== '' &&
           formData.hours && formData.hours.trim() !== '' &&
           formData.price && formData.price.trim() !== '' &&
           uploadedImage && uploadedImage.trim() !== '';
  };

  const handleSubmit = () => {
    // Only proceed if validation passes
    if (!isVenueServiceValid()) {
      console.log('Validation failed - missing required venue service fields');
      return;
    }
    
    onNext(formData);
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="bg-white overflow-hidden relative rounded-xl size-full min-h-screen">
      {/* Close button */}
      <button 
        onClick={() => onNavigate?.('listings')}
        className="absolute right-6 top-6 z-10 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke="#47567B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {/* Stepper Section */}
      <div className="w-full flex justify-center pt-4 pb-8">
        <CreateListingStepper stepNumber={2} debug={false} />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          
          {/* Photo Section */}
          <div className="p-6 border-b border-[#e5e7eb]">
            <h2 className="text-lg font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
              Add a photo
            </h2>
            <div className="relative">
              {uploadedImage ? (
                <div 
                  className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <img 
                    src={uploadedImage} 
                    alt="Service photo" 
                    className="w-full h-full object-cover"
                    style={{
                      transform: photoEdits[`${uploadedImage}_0`] 
                        ? `scale(${1 + photoEdits[`${uploadedImage}_0`].scale}) translate(${photoEdits[`${uploadedImage}_0`].offset.x}px, ${photoEdits[`${uploadedImage}_0`].offset.y}px)` 
                        : undefined,
                    }}
                  />
                  {isHovering && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button
                          onClick={handleEditPhoto}
                          className="bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full text-[#47567b] text-sm font-medium transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={handleImageUpload}
                          className="bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-full text-[#47567b] text-sm font-medium transition-colors"
                        >
                          Change
                        </button>
                        <button
                          onClick={handleImageDelete}
                          className="bg-red-500/90 backdrop-blur-sm hover:bg-red-600 px-4 py-2 rounded-full text-white text-sm font-medium transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div 
                  className="w-full h-64 bg-[#ccd7e6] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#b8c7d6] transition-colors"
                  onClick={handleImageUpload}
                >
                  <svg className="w-12 h-12 text-[#47567b] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[#47567b] font-medium">Add a photo</p>
                </div>
              )}
            </div>
          </div>

          {/* Service Details */}
          <div className="p-6 space-y-6">
            {/* Service Name */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Service name
              </label>
              <input
                type="text"
                value={formData.serviceName}
                onChange={(e) => setFormData(prev => ({ ...prev, serviceName: e.target.value }))}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
                placeholder="Enter service name"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b] resize-none"
                placeholder="Describe your venue services..."
              />
            </div>

            {/* Available Days */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Available days
              </label>
              <div className="grid grid-cols-2 gap-3">
                {daysOfWeek.map((day) => (
                  <label key={day} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.daysOfWeek.includes(day)}
                      onChange={() => handleDayToggle(day)}
                      className="sr-only"
                    />
                    <div className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      formData.daysOfWeek.includes(day)
                        ? 'border-[#47567b] bg-[#47567b] text-white'
                        : 'border-[#8c97ac] text-[#47567b] hover:border-[#47567b]'
                    }`}>
                      {day}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Duration
              </label>
              <select
                value={formData.hours}
                onChange={(e) => setFormData(prev => ({ ...prev, hours: e.target.value }))}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
              >
                <option value="2 hours">2 hours</option>
                <option value="4 hours">4 hours</option>
                <option value="5 hours">5 hours</option>
                <option value="6 hours">6 hours</option>
                <option value="8 hours">8 hours</option>
                <option value="12 hours">12 hours</option>
                <option value="Full day">Full day</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#47567b]">$</span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full pl-8 pr-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b]"
                  placeholder="0"
                />
              </div>
            </div>

            {/* What's Included */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What's included
              </label>
              <div className="space-y-4">
                {Object.entries(formData.included).map(([key, included]) => (
                  <div key={key} className="flex items-center justify-between p-4 border border-[#e5e7eb] rounded-lg">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={included}
                        onChange={() => handleIncludedToggle(key)}
                        className="w-5 h-5 text-[#47567b] border-[#8c97ac] rounded focus:ring-[#47567b]"
                      />
                      <span className="text-[#47567b] font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Services */}
            <div>
              <label className="block text-sm font-medium text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Other included services
              </label>
              <textarea
                value={formData.otherServices}
                onChange={(e) => setFormData(prev => ({ ...prev, otherServices: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[#47567b] resize-none"
                placeholder="List any other services included..."
              />
            </div>
          </div>

          {/* Bottom Actions - FIXED STICKY BAR */}
          <div className="fixed bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start left-0 right-0 overflow-clip px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] z-20" style={{backgroundColor: '#f5f5f5'}}>
            <div className="box-border content-stretch flex gap-3 items-start justify-start p-0 relative shrink-0">
              {/* Back Button */}
              <div 
                className="box-border content-stretch flex h-[37px] items-center justify-center p-0 relative shrink-0 w-[164px] cursor-pointer"
                onClick={onBack}
              >
                <div className="basis-0 grow min-h-px min-w-px relative rounded-3xl shrink-0 hover:bg-gray-100 transition-colors">
                  <div className="flex flex-row justify-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
                      <span className="button-text text-[#47567b]">Back</span>
                    </div>
                  </div>
                  <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
                </div>
              </div>
              
              {/* Next Button */}
              <div 
                className={`box-border content-stretch flex h-[37px] items-center justify-start p-0 relative shrink-0 w-[164px] ${isVenueServiceValid() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                onClick={handleSubmit}
              >
                <div className={`basis-0 grow min-h-px min-w-px relative rounded-3xl shrink-0 transition-colors ${isVenueServiceValid() ? 'bg-[#667493] hover:bg-[#5a6884]' : 'bg-[#8c97ac]'}`}>
                  <div className="flex flex-row justify-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
                      <span className="button-text text-white">Next</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Edit Overlay */}
      {showEditOverlay && uploadedImage && (
        <PhotoEditOverlay
          photoUrl={uploadedImage}
          photoIndex={0}
          onClose={handleCloseEditOverlay}
          onSave={handleSavePhotoEdit}
          existingEdit={photoEdits[`${uploadedImage}_0`]}
        />
      )}
    </div>
  );
}