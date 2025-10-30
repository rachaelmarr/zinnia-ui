import { useState } from "react";
import svgPaths from "../imports/svg-x5d06n5tza";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import Timeline from "../imports/Timeline";
import PhotoEditOverlay from "./listing/PhotoEditOverlay";
import CreateListingStepper from "./listing/CreateListingStepper";

interface ListingsPageProps {
  onNavigate?: (view: string) => void;
  currentView?: string;
}

// Mobile Header Component
function MobileHeader({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-[375px]">
      <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="h-6 relative shrink-0 w-[143px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
          <g clipPath="url(#clip0_17_1044)">
            <path d={svgPaths.p33702600} fill="var(--fill-0, #47567B)" />
          </g>
          <defs>
            <clipPath id="clip0_17_1044">
              <rect fill="white" height="24" width="143" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative shrink-0 size-[39px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
          <g>
            <path
              d={svgPaths.p221cbb00}
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Timeline Wrapper Component

function TimelineWrapper() {
  return (
    <div 
      className="absolute box-border content-stretch flex h-[100px] items-start justify-start p-0 top-[60px] translate-x-[-50%] z-10"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <Timeline />
    </div>
  );
}

// Photo Components
function PhotoPlaceholder({ 
  className, 
  onAddPhoto,
  showButton = true,
  buttonLeft = "102px",
  buttonTop = "105px",
  uploadedImage,
  onImageUpload,
  onImageDelete
}: { 
  className: string; 
  onAddPhoto?: () => void;
  showButton?: boolean;
  buttonLeft?: string;
  buttonTop?: string;
  uploadedImage?: string;
  onImageUpload?: (imageUrl: string) => void;
  onImageDelete?: () => void;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const [photoEdits, setPhotoEdits] = useState<{[key: string]: { scale: number, offset: { x: number, y: number } }}>({});

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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      onImageUpload?.(imageUrl);
    }
  };

  const handleAddPhotoClick = () => {
    if (onImageUpload) {
      // Create a temporary file input for this specific photo slot
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => handleFileSelect(e as any);
      input.click();
    } else if (onAddPhoto) {
      onAddPhoto();
    }
  };

  const handleDeleteClick = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
    }
    onImageDelete?.();
  };

  return (
    <div className={`absolute overflow-clip ${className}`}>
      {uploadedImage ? (
        // Show uploaded image
        <div 
          className="relative w-full h-full cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img 
            src={uploadedImage} 
            alt="Uploaded" 
            className="w-full h-full object-cover"
            style={{
              transform: photoEdits[`${uploadedImage}_0`] 
                ? `scale(${1 + photoEdits[`${uploadedImage}_0`].scale}) translate(${photoEdits[`${uploadedImage}_0`].offset.x}px, ${photoEdits[`${uploadedImage}_0`].offset.y}px)` 
                : undefined,
            }}
          />
          {/* Overlay buttons for changing/deleting image - show on hover */}
          {showButton && isHovering && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="flex gap-3">
                {/* Edit Photo Button */}
                <div 
                  className="relative rounded-3xl shrink-0 cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                  onClick={handleEditPhoto}
                >
                  <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                    <span className="button-text text-[#47567b]">Edit</span>
                  </div>
                  <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
                </div>

                {/* Change Photo Button */}
                <div 
                  className="relative rounded-3xl shrink-0 cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                  onClick={handleAddPhotoClick}
                >
                  <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                    <span className="button-text text-[#47567b]">Change photo</span>
                  </div>
                  <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
                </div>
                
                {/* Delete Button */}
                <div 
                  className="relative rounded-3xl shrink-0 cursor-pointer bg-red-500/90 backdrop-blur-sm hover:bg-red-600 transition-colors"
                  onClick={handleDeleteClick}
                >
                  <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                    <span className="button-text text-white">Delete</span>
                  </div>
                  <div className="absolute border border-red-600 border-solid inset-0 pointer-events-none rounded-3xl" />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Show placeholder with upload functionality
        <div className="bg-[#ccd7e6] w-full h-full relative flex flex-col items-center justify-center">
          {/* Camera Icon and Button Group */}
          <div className="flex flex-col items-center gap-4">
            {/* Camera Icon */}
            <div className="size-[60px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                <g>
                  <path
                    d={svgPaths.p3e629780}
                    stroke="var(--stroke-0, #47567B)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p307dbb00}
                    stroke="var(--stroke-0, #47567B)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            
            {/* Add Photo Button */}
            {showButton && (
              <div 
                className="relative rounded-3xl shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={handleAddPhotoClick}
              >
                <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                  <span className="button-text text-[#47567b]">Add a photo</span>
                </div>
                <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
              </div>
            )}
          </div>
        </div>
      )}

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

// Business Hours Component
function BusinessHoursDay({ 
  day, 
  isChecked = false, 
  startTime = "12:00 PM", 
  endTime = "2:00 PM", 
  onToggle 
}: { 
  day: string; 
  isChecked?: boolean; 
  startTime?: string; 
  endTime?: string; 
  onToggle?: () => void;
}) {
  const textColor = isChecked ? "#47567b" : "#ccd7e6";
  const dayTextColor = isChecked ? "#030213" : "#ccd7e6";
  const borderColor = isChecked ? "#8c97ac" : "#f1f6fa";

  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      {/* Checkbox and Day */}
      <div className="h-[18px] relative shrink-0 w-[114px]">
        <div className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0">
          <div 
            className={`${isChecked ? 'bg-[#47567b]' : 'bg-[#ffffff]'} box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4 cursor-pointer`}
            onClick={onToggle}
          >
            {isChecked && (
              <div className="relative shrink-0 size-3.5">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g>
                    <path
                      d={svgPaths.p8f1dd80}
                      stroke="var(--stroke-0, #FAFAFA)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            )}
            {!isChecked && (
              <div className="absolute border border-neutral-500 border-solid inset-0 pointer-events-none rounded" />
            )}
          </div>
        </div>
        <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]">
          <div className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0">
              <div 
                className="relative shrink-0 text-[16px]"
                style={{ color: dayTextColor, fontFamily: 'Literata, serif' }}
              >
                <p className="font-semibold block leading-[1.5] whitespace-pre">{day}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Inputs */}
      <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
        {/* Start Time */}
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]">
          <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
                <div className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <div 
                    className="flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]"
                    style={{ color: textColor, fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <p className="block leading-[1.5] whitespace-pre">{startTime}</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-5">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path 
                        d={svgPaths.p38d3d340} 
                        fill={textColor} 
                        stroke={textColor} 
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className={`absolute border border-[${borderColor}] border-solid inset-0 pointer-events-none rounded-lg`} />
          </div>
        </div>

        {/* Hyphen */}
        <div className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0">
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <p className="block leading-[1.5] whitespace-pre">-</p>
          </div>
        </div>

        {/* End Time */}
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]">
          <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
                <div className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <div 
                    className="flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]"
                    style={{ color: textColor, fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <p className="block leading-[1.5] whitespace-pre">{endTime}</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-5">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path 
                        d={svgPaths.p38d3d340} 
                        fill={textColor} 
                        stroke={textColor} 
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className={`absolute border border-[${borderColor}] border-solid inset-0 pointer-events-none rounded-lg`} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Desktop Content
function DesktopMainContent({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const [businessHours, setBusinessHours] = useState({
    Sunday: { isChecked: true, startTime: "9:00 AM", endTime: "5:00 PM" },
    Monday: { isChecked: true, startTime: "12:00 PM", endTime: "2:00 PM" },
    Tuesday: { isChecked: false, startTime: "12:00 PM", endTime: "2:00 PM" },
    Wednesday: { isChecked: true, startTime: "12:00 PM", endTime: "2:00 PM" },
    Thursday: { isChecked: true, startTime: "12:00 PM", endTime: "2:00 PM" },
    Friday: { isChecked: true, startTime: "12:00 PM", endTime: "2:00 PM" },
    Saturday: { isChecked: true, startTime: "12:00 PM", endTime: "2:00 PM" }
  });

  const [descriptionText, setDescriptionText] = useState("");
  const [uploadedImages, setUploadedImages] = useState<{
    main?: string;
    secondary1?: string;
    secondary2?: string;
    secondary3?: string;
  }>({});

  const handleDayToggle = (day: string) => {
    setBusinessHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof prev],
        isChecked: !prev[day as keyof typeof prev].isChecked
      }
    }));
  };

  const handleImageUpload = (slot: string, imageUrl: string) => {
    setUploadedImages(prev => ({
      ...prev,
      [slot]: imageUrl
    }));
  };

  const handleImageDelete = (slot: string) => {
    setUploadedImages(prev => {
      const updated = { ...prev };
      delete updated[slot as keyof typeof updated];
      return updated;
    });
  };

  // Validation function
  const isStep1Valid = () => {
    // Check if at least the main photo is uploaded
    const hasMainPhoto = uploadedImages.main && uploadedImages.main.trim() !== '';
    
    // Check if description is filled
    const hasDescription = descriptionText && descriptionText.trim() !== '';
    
    return hasMainPhoto && hasDescription;
  };

  const handleNext = () => {
    console.log('🎯 handleNext called in ListingsPage');
    console.log('🎯 onNavigate function:', onNavigate);
    
    // Only proceed if validation passes
    if (!isStep1Valid()) {
      console.log('Validation failed - missing required fields');
      return;
    }
    
    // Collect all the data from this step
    const photos = Object.values(uploadedImages).filter(Boolean) as string[];
    
    console.log('🎯 Uploaded images object:', uploadedImages);
    console.log('🎯 Photos array:', photos);
    
    // Convert business hours to the expected format
    const formattedBusinessHours = Object.entries(businessHours).map(([day, hours]) => ({
      name: day,
      enabled: hours.isChecked,
      startTime: hours.startTime,
      endTime: hours.endTime
    }));

    // Store the data in localStorage temporarily (since we don't have access to wizardData here)
    const listingData = {
      photos,
      businessHours: formattedBusinessHours,
      description: descriptionText
    };
    
    console.log('🎯 Listing data to store:', listingData);
    localStorage.setItem('tempListingData', JSON.stringify(listingData));
    
    // Navigate to the next step (add services)
    console.log('🎯 Navigating to vendorService');
    onNavigate?.('vendorService');
  };

  return (
    <div className="bg-[#ffffff] overflow-y-auto relative rounded-xl size-full min-h-screen">
      {/* Close Button */}
      <div 
        className="absolute right-6 size-6 top-6 cursor-pointer hover:opacity-70 transition-opacity z-10"
        onClick={() => onNavigate?.('listings')}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path
              d="M6 6L18 18M6 18L18 6L6 18Z"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {/* Stepper Section */}
      <div className="w-full flex justify-center pt-4 pb-8">
        <CreateListingStepper stepNumber={1} debug={false} />
      </div>

      {/* Main Content */}
      <div 
        className="box-border content-stretch flex flex-col gap-7 items-center justify-start px-6 pb-32 w-full"
      >
        
        {/* Title Section */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b]">
          <div className="flex flex-col justify-center relative shrink-0 text-center w-[440px]">
            <h1 className="text-2xl font-semibold text-[#47567b] leading-[1.5]" style={{ fontFamily: 'Literata, serif' }}>Create your business listing</h1>
          </div>
          <div className="relative shrink-0 text-[14px] tracking-[0.28px] w-[440px]">
            <p className="block leading-[1.5] text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Your listing is a larger page that groups your services together. This is what prospective clients will see when they search for services.</p>
          </div>
        </div>

        {/* Photos Section */}
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0">
          <div className="h-[800px] relative shrink-0 w-[677px]">
            <div className="absolute bg-[#ffffff] h-[800px] left-0 overflow-clip top-0 w-[677px]">
              {/* Main Photo */}
              <PhotoPlaceholder 
                className="h-[382px] left-[-2px] top-px w-[679px]"
                onAddPhoto={() => onNavigate?.('addPhotos')}
                showButton={true}
                uploadedImage={uploadedImages.main}
                onImageUpload={(url) => handleImageUpload('main', url)}
                onImageDelete={() => handleImageDelete('main')}
              />
              
              {/* Secondary Photos */}
              <PhotoPlaceholder 
                className="h-[383px] left-1.5 top-[399px] w-[325px]"
                onAddPhoto={() => onNavigate?.('addPhotos')}
                showButton={true}
                buttonLeft="102px"
                buttonTop="204px"
                uploadedImage={uploadedImages.secondary1}
                onImageUpload={(url) => handleImageUpload('secondary1', url)}
                onImageDelete={() => handleImageDelete('secondary1')}
              />
              <PhotoPlaceholder 
                className="h-[183px] left-[347px] top-[399px] w-[324px]"
                onAddPhoto={() => onNavigate?.('addPhotos')}
                showButton={true}
                buttonLeft="102px"
                buttonTop="105px"
                uploadedImage={uploadedImages.secondary2}
                onImageUpload={(url) => handleImageUpload('secondary2', url)}
                onImageDelete={() => handleImageDelete('secondary2')}
              />
              <PhotoPlaceholder 
                className="h-[183px] left-[347px] top-[598px] w-[324px]"
                onAddPhoto={() => onNavigate?.('addPhotos')}
                showButton={true}
                buttonLeft="102px"
                buttonTop="105px"
                uploadedImage={uploadedImages.secondary3}
                onImageUpload={(url) => handleImageUpload('secondary3', url)}
                onImageDelete={() => handleImageDelete('secondary3')}
              />
            </div>
          </div>

          {/* Photo Instructions */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b]">
            <div className="flex flex-col justify-center relative shrink-0 text-center">
              <h2 className="text-lg font-semibold text-[#47567b] leading-[1.5]" style={{ fontFamily: 'Literata, serif' }}>Add photos</h2>
            </div>
            <div className="relative shrink-0 tracking-[0.28px] w-[438px]">
              <p className="leading-[1.5] text-[14px] text-[#47567b] whitespace-pre-wrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span>You must have 4 photos to create your listing. <br /></span>
                <span className="font-semibold">We recommend:</span>
                <span>
                  <br />- High quality JPGs or PNGs
                  <br />- Natural lighting as much as possible
                  <br />- A variety of shots
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-[438px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 1">
              <line stroke="var(--stroke-0, #CCD7E6)" x2="438" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>

        {/* Business Hours Section */}
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0">
            <div className="relative shrink-0 text-[#47567b]">
              <h2 className="text-lg font-semibold leading-[1.5]" style={{ fontFamily: 'Literata, serif' }}>Business hours</h2>
            </div>
          </div>
          <div className="relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[441px]">
            <p className="block leading-[1.5]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              These are the recurring business hours that you are available. We'll allow couples to book you during this time.
            </p>
          </div>
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
            {Object.entries(businessHours).map(([day, hours]) => (
              <BusinessHoursDay
                key={day}
                day={day}
                isChecked={hours.isChecked}
                startTime={hours.startTime}
                endTime={hours.endTime}
                onToggle={() => handleDayToggle(day)}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-[438px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 1">
              <line stroke="var(--stroke-0, #CCD7E6)" x2="438" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>

        {/* Description Section */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
          <div className="flex flex-col justify-center relative shrink-0 text-[#47567b] text-center">
            <h2 className="text-lg font-semibold leading-[1.5]" style={{ fontFamily: 'Literata, serif' }}>Description</h2>
          </div>
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[440px]">
            <div className="relative w-[440px]">
              <textarea
                value={descriptionText}
                onChange={(e) => setDescriptionText(e.target.value)}
                placeholder="This is your chance to sell yourself. We recommend you mention how long you've been doing weddings and what you love about what you do."
                className="bg-[#ffffff] h-[271px] w-full rounded-lg p-3 resize-none border border-[#8c97ac] focus:outline-none focus:ring-2 focus:ring-[#47567b] focus:border-transparent text-[14px] text-[#47567b] tracking-[0.28px] leading-[1.5] placeholder:text-[#8c97ac]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start left-0 right-0 overflow-clip px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] z-20">
        <div className="box-border content-stretch flex gap-3 items-start justify-start p-0 relative shrink-0">
          {/* Back Button */}
          <div 
            className="box-border content-stretch flex h-[37px] items-center justify-center p-0 relative shrink-0 w-[164px] cursor-pointer"
            onClick={() => onNavigate?.('listings')}
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
            className={`box-border content-stretch flex h-[37px] items-center justify-start p-0 relative shrink-0 w-[164px] ${isStep1Valid() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
            onClick={(e) => {
              console.log('🎯 Next button clicked!', e);
              if (isStep1Valid()) {
                handleNext();
              }
            }}
          >
            <div className={`basis-0 grow min-h-px min-w-px relative rounded-3xl shrink-0 transition-colors ${isStep1Valid() ? 'bg-[#667493] hover:bg-[#5a6785]' : 'bg-[#8c97ac]'}`}>
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
  );
}

// Mobile Content (simplified version)
function MobileContent({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="bg-neutral-100 relative size-full min-h-screen pb-16">
      <MobileHeader onNavigate={onNavigate} />

      {/* Content */}
      <div className="text-center max-w-md mx-auto pt-24 px-6">
        <div className="mb-8">
          <div className="relative overflow-clip size-[200px] mx-auto mb-8">
            <div className="absolute inset-[17.84%_11.74%_10.73%_7.99%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 143">
                <g>
                  <path d={svgPaths.p5e03900} fill="var(--fill-0, #47567B)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
          Create your listing
        </h1>
        
        <p className="text-[14px] text-[#47567b] text-center tracking-[0.28px] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          lorem upsum dolor sit. lorem upsum dolor sit. lorem upsum dolor sit. lorem upsum dolor sit. lorem upsum dolor sit.
        </p>
        
        <button 
          className="bg-[#667493] box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-6 py-3 relative rounded-3xl shrink-0 cursor-pointer hover:opacity-90 transition-opacity mx-auto"
          onClick={() => {
            // For mobile, provide default data and go directly to service step
            const defaultListingData = {
              photos: [],
              businessHours: [
                { name: 'Sunday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
                { name: 'Monday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
                { name: 'Tuesday', enabled: false, startTime: '9:00 AM', endTime: '5:00 PM' },
                { name: 'Wednesday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
                { name: 'Thursday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
                { name: 'Friday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
                { name: 'Saturday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' }
              ],
              description: ''
            };
            localStorage.setItem('tempListingData', JSON.stringify(defaultListingData));
            onNavigate?.('vendorService');
          }}
        >
          <span className="button-text text-white">Create listing</span>
        </button>
      </div>
    </div>
  );
}

// Main Listings Page Component
export default function ListingsPage({ onNavigate, currentView }: ListingsPageProps) {
  // Desktop view
  const renderDesktopView = () => (
    <div className="bg-[#f0f5fa] flex flex-col min-h-screen w-full relative">
      <div className="flex-1 relative">
        <DesktopMainContent onNavigate={onNavigate} />
      </div>
    </div>
  );

  // Mobile view
  const renderMobileView = () => (
    <div className="bg-[#f0f5fa] flex flex-col min-h-screen w-full max-w-[375px] mx-auto relative">
      <MobileContent onNavigate={onNavigate} />
    </div>
  );

  // Responsive rendering
  return (
    <div className="w-full">
      <div className="md:hidden">
        {renderMobileView()}
      </div>
      <div className="hidden md:block">
        {renderDesktopView()}
      </div>
    </div>
  );
}