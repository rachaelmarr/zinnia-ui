import { useState } from "react";
import svgPaths from "../../imports/svg-haolh49eiz";
import imgDecoratedHallWeddingIsReadyCelebration1 from "figma:asset/0ee9d70a8b6f484ef6801ef361ebdff714fe3068.png";
import imgHappyWeddingCoupleComoLakeItaly1 from "figma:asset/cc8399b758ae35654750afd69402f4d84aa054ba.png";
import imgBrideGroomHugKissOutdoorsWeddingDayYoungCoupleWalkPragueValentineSDay1 from "figma:asset/a9ea79898f49abf3c0ff96a2150d45adc3f32646.png";
import Stepper from "./Stepper";
import PhotoEditOverlay from "./PhotoEditOverlay";

interface AddPhotosProps {
  onNavigate?: (view: string) => void;
  onBack?: () => void;
  onNext?: (photos: string[]) => void;
  onEditPhoto?: (photoUrl: string, photoIndex: number) => void;
  photoEdits?: {[key: string]: { scale: number, offset: { x: number, y: number } }};
}

function MainPhoto() {
  return (
    <div
      className="absolute bg-[#ccd7e6] h-full left-0 rounded top-0 w-full"
      data-name="Main photo"
    />
  );
}

function BaseBadge() {
  return (
    <div
      className="bg-neutral-900 box-border content-stretch flex flex-row gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0"
      data-name=".Base - Badge"
    >
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <p className="block leading-[1.5] whitespace-pre">Main photo</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 p-0 top-2"
      data-name="Badge"
    >
      <BaseBadge />
    </div>
  );
}

function Frame145() {
  return (
    <div className="absolute bg-[#ccd7e6] h-[44.581px] left-[-18px] opacity-70 bottom-0 w-[352px]" />
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="pencil">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="pencil">
          <path
            d={svgPaths.p2e5be3f0}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-0 p-[8.129px] rounded-[101.613px] top-0 cursor-pointer hover:bg-gray-100 transition-colors"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Pencil />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="trash">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="trash">
          <path
            d={svgPaths.p3e825d80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton1({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-[47.419px] p-[8.129px] rounded-[101.613px] top-0 cursor-pointer hover:bg-gray-100 transition-colors"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Trash />
    </div>
  );
}

function Group145({ onEdit, onDelete }: { onEdit?: () => void; onDelete?: () => void }) {
  return (
    <div className="absolute contents left-0 top-0">
      <IconButton onClick={onEdit} />
      <IconButton1 onClick={onDelete} />
    </div>
  );
}

function Button({ onEdit, onDelete }: { onEdit?: () => void; onDelete?: () => void }) {
  return (
    <div
      className="absolute h-[37px] left-1/2 overflow-clip bottom-4 translate-x-[-50%] w-[84px]"
      data-name="button"
    >
      <Group145 onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

function PhotoCard({ 
  image, 
  badgeText, 
  onEdit, 
  onDelete, 
  className,
  photoEdits,
  photoIndex
}: { 
  image: string;
  badgeText: string;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
  photoEdits?: {[key: string]: { scale: number, offset: { x: number, y: number } }};
  photoIndex?: number;
}) {
  const editKey = `${image}_${photoIndex}`;
  const edit = photoEdits?.[editKey];
  
  return (
    <div className={`bg-[#000000] overflow-clip ${className}`}>
      <MainPhoto />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-full left-[-39px] top-0 w-[393px]"
        data-name="photo"
        style={{
          backgroundImage: `url('${image}')`,
          transform: edit ? `scale(${1 + edit.scale}) translate(${edit.offset.x}px, ${edit.offset.y}px)` : undefined,
        }}
      />
      <div
        className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 p-0 top-2"
        data-name="Badge"
      >
        <div
          className="bg-neutral-900 box-border content-stretch flex flex-row gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0"
          data-name=".Base - Badge"
        >
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <p className="block leading-[1.5] whitespace-pre">{badgeText}</p>
          </div>
        </div>
      </div>
      <Frame145 />
      <Button onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default function AddPhotos({ onNavigate, onBack, onNext, onEditPhoto, photoEdits }: AddPhotosProps) {
  // Sample photos - in a real app these would come from state
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: imgDecoratedHallWeddingIsReadyCelebration1,
      badge: "Main photo"
    },
    {
      id: 2,
      url: imgHappyWeddingCoupleComoLakeItaly1,
      badge: "Photo 2"
    },
    {
      id: 3,
      url: imgBrideGroomHugKissOutdoorsWeddingDayYoungCoupleWalkPragueValentineSDay1,
      badge: "Photo 3"
    },
    {
      id: 4,
      url: imgDecoratedHallWeddingIsReadyCelebration1,
      badge: "Photo 4"
    },
    {
      id: 5,
      url: imgHappyWeddingCoupleComoLakeItaly1,
      badge: "Photo 5"
    }
  ]);

  // Overlay state
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const [editingPhotoUrl, setEditingPhotoUrl] = useState("");
  const [editingPhotoIndex, setEditingPhotoIndex] = useState(0);
  const [localPhotoEdits, setLocalPhotoEdits] = useState(photoEdits || {});

  const handleEditPhoto = (photoIndex: number) => {
    if (photos[photoIndex]) {
      setEditingPhotoUrl(photos[photoIndex].url);
      setEditingPhotoIndex(photoIndex);
      setShowEditOverlay(true);
    }
  };

  const handleCloseEditOverlay = () => {
    setShowEditOverlay(false);
    setEditingPhotoUrl("");
    setEditingPhotoIndex(0);
  };

  const handleSavePhotoEdit = (editData: { scale: number, offset: { x: number, y: number } }) => {
    const editKey = `${editingPhotoUrl}_${editingPhotoIndex}`;
    setLocalPhotoEdits(prev => ({
      ...prev,
      [editKey]: editData
    }));
    
    // Also call the parent handler if provided
    if (onEditPhoto) {
      onEditPhoto(editingPhotoUrl, editingPhotoIndex);
    }
  };

  const handleDeletePhoto = (photoIndex: number) => {
    const newPhotos = photos.filter((_, index) => index !== photoIndex);
    setPhotos(newPhotos);
  };

  const handleNext = () => {
    if (onNext) {
      onNext(photos.map(p => p.url));
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="bg-neutral-100 relative size-full min-h-screen pb-16">
      {/* Header */}
      <div
        className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-[375px]"
        data-name="Header"
      >
        <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 143 24"
          >
            <g clipPath="url(#clip0_17_1044)" id="Logo">
              <path
                d={svgPaths.p33702600}
                fill="var(--fill-0, #47567B)"
                id="Zinnia"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_1044">
                <rect fill="white" height="24" width="143" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="relative shrink-0 size-[39px]" data-name="user-circle">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 39 39"
          >
            <g id="user-circle">
              <path
                d={svgPaths.p221cbb00}
                id="Vector"
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Stepper */}
      <div className="absolute left-1/2 top-[104px] translate-x-[-50%]">
        <Stepper currentStep={1} />
      </div>

      {/* Title and Description */}
      <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] left-[23px] p-0 text-[#47567b] top-[188px] w-[335px]">
        <div className="flex flex-col justify-center relative shrink-0 text-center">
          <h1 className="text-3xl font-semibold text-[#47567b] leading-[1.5]" style={{ fontFamily: 'Literata, serif' }}>Add photos</h1>
        </div>
        <div
          className="min-w-full relative shrink-0 text-left tracking-[0.28px]"
          style={{ width: "min-content", fontFamily: 'Montserrat, sans-serif' }}
        >
          <p className="leading-[1.5] text-[14px] text-[#47567b]">
            <span>{`You must have 4 photos to create your listing. `}</span>
            <span className="font-semibold">
              We recommend:
            </span>
            <span className="text-[#47567b]">
              <br />- High quality JPGs or PNGs
              <br />- Natural lighting as much as possible
              <br />- A variety of shots
            </span>
          </p>
        </div>
      </div>

      {/* Photo Cards - Step 3 Layout: 2 side by side, 2 stacked on right */}
      
      {/* Top Row - Two photos side by side */}
      <div className="absolute left-[23px] top-[388px] flex gap-4">
        {photos.length > 0 ? (
          <PhotoCard
            image={photos[0].url}
            badgeText={photos[0].badge}
            onEdit={() => handleEditPhoto(0)}
            onDelete={() => handleDeletePhoto(0)}
            className="h-[40vh] w-[150px]"
            photoEdits={localPhotoEdits}
            photoIndex={0}
          />
        ) : (
          <div className="bg-[#ccd7e6] h-[40vh] w-[150px] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#b8c5d4] transition-colors">
            <div className="size-[40px] mb-2">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <g>
                  <path
                    d="M20 8C16.69 8 14 10.69 14 14C14 17.31 16.69 20 20 20C23.31 20 26 17.31 26 14C26 10.69 23.31 8 20 8ZM20 18C17.79 18 16 16.21 16 14C16 11.79 17.79 10 20 10C22.21 10 24 11.79 24 14C24 16.21 22.21 18 20 18ZM30 4H26.83L25.41 2.59C25.02 2.2 24.53 2 24 2H16C15.47 2 14.98 2.2 14.59 2.59L13.17 4H10C8.9 4 8 4.9 8 6V32C8 33.1 8.9 34 10 34H30C31.1 34 32 33.1 32 32V6C32 4.9 31.1 4 30 4ZM30 32H10V6H12.83L14.24 4.59C14.42 4.41 14.71 4.41 14.89 4.59L16.31 6H23.69L25.11 4.59C25.29 4.41 25.58 4.41 25.76 4.59L27.17 6H30V32Z"
                    stroke="var(--stroke-0, #47567B)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            <span className="text-[12px] text-[#47567B] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Add a photo
            </span>
          </div>
        )}
        
        {photos.length > 1 ? (
          <PhotoCard
            image={photos[1].url}
            badgeText={photos[1].badge}
            onEdit={() => handleEditPhoto(1)}
            onDelete={() => handleDeletePhoto(1)}
            className="h-[40vh] w-[150px]"
            photoEdits={localPhotoEdits}
            photoIndex={1}
          />
        ) : (
          <div className="bg-[#ccd7e6] h-[40vh] w-[150px] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#b8c5d4] transition-colors">
            <div className="size-[40px] mb-2">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <g>
                  <path
                    d="M20 8C16.69 8 14 10.69 14 14C14 17.31 16.69 20 20 20C23.31 20 26 17.31 26 14C26 10.69 23.31 8 20 8ZM20 18C17.79 18 16 16.21 16 14C16 11.79 17.79 10 20 10C22.21 10 24 11.79 24 14C24 16.21 22.21 18 20 18ZM30 4H26.83L25.41 2.59C25.02 2.2 24.53 2 24 2H16C15.47 2 14.98 2.2 14.59 2.59L13.17 4H10C8.9 4 8 4.9 8 6V32C8 33.1 8.9 34 10 34H30C31.1 34 32 33.1 32 32V6C32 4.9 31.1 4 30 4ZM30 32H10V6H12.83L14.24 4.59C14.42 4.41 14.71 4.41 14.89 4.59L16.31 6H23.69L25.11 4.59C25.29 4.41 25.58 4.41 25.76 4.59L27.17 6H30V32Z"
                    stroke="var(--stroke-0, #47567B)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            <span className="text-[12px] text-[#47567B] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Add a photo
            </span>
          </div>
        )}
      </div>

      {/* Bottom Row - Two photos stacked vertically on the right */}
      <div className="absolute right-[23px] top-[388px] flex flex-col gap-4">
        {photos.length > 2 ? (
          <PhotoCard
            image={photos[2].url}
            badgeText={photos[2].badge}
            onEdit={() => handleEditPhoto(2)}
            onDelete={() => handleDeletePhoto(2)}
            className="h-[18vh] w-[150px]"
            photoEdits={localPhotoEdits}
            photoIndex={2}
          />
        ) : (
          <div className="bg-[#ccd7e6] h-[18vh] w-[150px] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#b8c5d4] transition-colors">
            <div className="size-[40px] mb-2">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <g>
                  <path
                    d="M20 8C16.69 8 14 10.69 14 14C14 17.31 16.69 20 20 20C23.31 20 26 17.31 26 14C26 10.69 23.31 8 20 8ZM20 18C17.79 18 16 16.21 16 14C16 11.79 17.79 10 20 10C22.21 10 24 11.79 24 14C24 16.21 22.21 18 20 18ZM30 4H26.83L25.41 2.59C25.02 2.2 24.53 2 24 2H16C15.47 2 14.98 2.2 14.59 2.59L13.17 4H10C8.9 4 8 4.9 8 6V32C8 33.1 8.9 34 10 34H30C31.1 34 32 33.1 32 32V6C32 4.9 31.1 4 30 4ZM30 32H10V6H12.83L14.24 4.59C14.42 4.41 14.71 4.41 14.89 4.59L16.31 6H23.69L25.11 4.59C25.29 4.41 25.58 4.41 25.76 4.59L27.17 6H30V32Z"
                    stroke="var(--stroke-0, #47567B)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            <span className="text-[12px] text-[#47567B] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Add a photo
            </span>
          </div>
        )}
        
        {photos.length > 3 ? (
          <PhotoCard
            image={photos[3].url}
            badgeText={photos[3].badge}
            onEdit={() => handleEditPhoto(3)}
            onDelete={() => handleDeletePhoto(3)}
            className="h-[18vh] w-[150px]"
            photoEdits={localPhotoEdits}
            photoIndex={3}
          />
        ) : (
          <div className="bg-[#ccd7e6] h-[18vh] w-[150px] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#b8c5d4] transition-colors">
            <div className="size-[40px] mb-2">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <g>
                  <path
                    d="M20 8C16.69 8 14 10.69 14 14C14 17.31 16.69 20 20 20C23.31 20 26 17.31 26 14C26 10.69 23.31 8 20 8ZM20 18C17.79 18 16 16.21 16 14C16 11.79 17.79 10 20 10C22.21 10 24 11.79 24 14C24 16.21 22.21 18 20 18ZM30 4H26.83L25.41 2.59C25.02 2.2 24.53 2 24 2H16C15.47 2 14.98 2.2 14.59 2.59L13.17 4H10C8.9 4 8 4.9 8 6V32C8 33.1 8.9 34 10 34H30C31.1 34 32 33.1 32 32V6C32 4.9 31.1 4 30 4ZM30 32H10V6H12.83L14.24 4.59C14.42 4.41 14.71 4.41 14.89 4.59L16.31 6H23.69L25.11 4.59C25.29 4.41 25.58 4.41 25.76 4.59L27.17 6H30V32Z"
                    stroke="var(--stroke-0, #47567B)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
            <span className="text-[12px] text-[#47567B] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Add a photo
            </span>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 w-full bg-neutral-50 px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3 items-start justify-end">
          <button
            onClick={handleBack}
            className="flex items-center justify-center h-9 px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-[#47567b] tracking-[0.28px] leading-[1.5] hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center h-[37px] w-[164px] px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-white tracking-[0.28px] leading-[1.5] transition-colors bg-[#667493] hover:bg-[#5a6884]"
          >
            Next
          </button>
        </div>
      </div>

      {/* Photo Edit Overlay */}
      {showEditOverlay && (
        <PhotoEditOverlay
          photoUrl={editingPhotoUrl}
          photoIndex={editingPhotoIndex}
          onClose={handleCloseEditOverlay}
          onSave={handleSavePhotoEdit}
          existingEdit={localPhotoEdits[`${editingPhotoUrl}_${editingPhotoIndex}`]}
        />
      )}
    </div>
  );
}