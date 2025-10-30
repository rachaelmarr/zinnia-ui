import React, { useState } from 'react';
import PhotoEditOverlay from '../PhotoEditOverlay';

interface ServiceLayoutProps {
  title: string;
  description: string;
  onNavigate: (view: string) => void;
  onNext: () => void;
  children: React.ReactNode;
  uploadedImage?: string;
  onImageUpload: () => void;
  onImageDelete?: () => void;
  cameraPath: string;
  timelineSvgPaths: any;
}

export function ServiceLayout({ 
  title, 
  description, 
  onNavigate, 
  onNext, 
  children, 
  uploadedImage, 
  onImageUpload,
  onImageDelete,
  cameraPath,
  timelineSvgPaths 
}: ServiceLayoutProps) {
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

  const handleDeleteImage = () => {
    if (onImageDelete) {
      onImageDelete();
    }
  };
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-xl size-full">
      {/* Main Content */}
      <div className="absolute box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 top-[200px] translate-x-[-50%] w-[464px]" style={{ left: "calc(54.167% - 48px)" }}>
        
        {/* Title Section */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b]">
          <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] text-center w-[440px]">
            <p className="block leading-[1.5]">{title}</p>
          </div>
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-[440px]">
            <p className="leading-[1.5]">{description}</p>
          </div>
        </div>

        {/* Photo Upload Section */}
        <div className="bg-[#ccd7e6] h-[320px] overflow-clip relative shrink-0 w-[240px] mx-auto">
          {uploadedImage ? (
            <div 
              className="relative w-full h-full cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img 
                src={uploadedImage} 
                alt="Uploaded service" 
                className="w-full h-full object-cover"
                style={{
                  transform: photoEdits[`${uploadedImage}_0`] 
                    ? `scale(${1 + photoEdits[`${uploadedImage}_0`].scale}) translate(${photoEdits[`${uploadedImage}_0`].offset.x}px, ${photoEdits[`${uploadedImage}_0`].offset.y}px)` 
                    : undefined,
                }}
              />
              {/* Overlay buttons for editing/changing/deleting image - show on hover */}
              {isHovering && (
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
                      onClick={onImageUpload}
                    >
                      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                        <span className="button-text text-[#47567b]">Change photo</span>
                      </div>
                      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
                    </div>
                    
                    {/* Delete Button */}
                    <div 
                      className="relative rounded-3xl shrink-0 cursor-pointer bg-red-500/90 backdrop-blur-sm hover:bg-red-600 transition-colors"
                      onClick={handleDeleteImage}
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
            <>
              <div className="absolute left-1/2 size-[60px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 23px)" }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                  <g>
                    <path
                      d={cameraPath}
                      stroke="var(--stroke-0, #47567B)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              
              <div className="absolute box-border content-stretch flex h-9 items-center justify-center left-[157px] p-0 top-[167px]">
                <div className="relative rounded-3xl shrink-0 cursor-pointer" onClick={onImageUpload}>
                  <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                    <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
                      <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Add a photo</p>
                    </div>
                  </div>
                  <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Form Content */}
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[440px]">
          {children}
        </div>
      </div>

      {/* Close Button */}
      <div className="absolute size-6 top-6 cursor-pointer" style={{ left: "calc(91.667% + 72px)" }} onClick={() => onNavigate('dashboard')}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path
            d="M6 6L18 18M6 18L18 6L6 18Z"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Timeline */}
      <div className="absolute box-border content-stretch flex h-[100px] items-start justify-start p-0 top-[60px] translate-x-[-50%]" style={{ left: "calc(50% + 0.26px)" }}>
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0">
            <div className="h-[46.726px] relative shrink-0 w-[154.84px]">
              <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                  <g>
                    <path d={timelineSvgPaths.p3ed46880} fill="var(--fill-0, #CCD7E6)" />
                    <path d={timelineSvgPaths.p3b39e600} fill="var(--fill-0, #CCD7E6)" />
                    <path d={timelineSvgPaths.p2ea1a80} fill="var(--fill-0, #CCD7E6)" />
                    <path d={timelineSvgPaths.p2aef6b00} fill="var(--fill-0, #CCD7E6)" />
                  </g>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-[4.03%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
                  <g>
                    <path d={timelineSvgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
              <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1. Create Listing</p>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0">
            <div className="h-[46.726px] relative shrink-0 w-[154.84px]">
              <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                  <g>
                    <path d={timelineSvgPaths.p3ed46880} fill="var(--fill-0, #667593)" />
                    <path d={timelineSvgPaths.p3b39e600} fill="var(--fill-0, #667593)" />
                    <path d={timelineSvgPaths.p2ea1a80} fill="var(--fill-0, #667593)" />
                    <path d={timelineSvgPaths.p2aef6b00} fill="var(--fill-0, #667593)" />
                  </g>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-[4.03%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
                  <g>
                    <path d={timelineSvgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
              <ol className="list-decimal" start="2">
                <li className="ms-[21px]">
                  <span className="adjustLetterSpacing leading-[1.5]">Add Services</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0">
            <div className="h-[46.726px] relative shrink-0 w-[154.84px]">
              <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                  <g>
                    <path d={timelineSvgPaths.p3ed46880} fill="var(--fill-0, white)" />
                    <path d={timelineSvgPaths.p3b39e600} fill="var(--fill-0, white)" />
                    <path d={timelineSvgPaths.p2ea1a80} fill="var(--fill-0, white)" />
                    <path d={timelineSvgPaths.p2aef6b00} fill="var(--fill-0, white)" />
                  </g>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-[4.03%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
                  <g>
                    <path d={timelineSvgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] uppercase">
              <ol className="list-decimal" start="3">
                <li className="ms-[21px]">
                  <span className="adjustLetterSpacing leading-[1.5]">Confirm</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start overflow-clip px-[100px] py-8 right-[0.5px] shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-[1440px]">
        <div className="box-border content-stretch flex gap-3 items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex h-[37px] items-center justify-start p-0 relative shrink-0 w-[164px]">
            <button
              onClick={onNext}
              className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0 flex flex-row justify-center overflow-clip"
            >
              <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
                <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
                  <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Next</p>
                </div>
              </div>
            </button>
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