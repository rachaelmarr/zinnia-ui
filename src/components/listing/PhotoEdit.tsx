import { useState } from "react";
import svgPaths from "../../imports/svg-g5fnjh1sx9";
import imgDecoratedHallWeddingIsReadyCelebration1 from "figma:asset/0ee9d70a8b6f484ef6801ef361ebdff714fe3068.png";

interface PhotoEditProps {
  onNavigate?: (view: string) => void;
  onClose?: () => void;
  onSave?: (editData: { scale: number, offset: { x: number, y: number } }) => void;
  photoUrl?: string;
  photoIndex?: number;
  existingEdit?: { scale: number, offset: { x: number, y: number } };
}

export default function PhotoEdit({ onNavigate, onClose, onSave, photoUrl, photoIndex, existingEdit }: PhotoEditProps) {
  const [scale, setScale] = useState(existingEdit?.scale || 0.25);
  const [offset, setOffset] = useState(existingEdit?.offset || { x: 0, y: 0 });

  const handleSave = () => {
    if (onSave) {
      onSave({ scale, offset });
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleSliderChange = (value: number) => {
    setScale(value / 100);
  };

  return (
    <div className="bg-neutral-100 relative size-full min-h-screen">
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
            <g clipPath="url(#clip0_17_2292)" id="Logo">
              <path
                d={svgPaths.p33702600}
                fill="var(--fill-0, #47567B)"
                id="Zinnia"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_2292">
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

      {/* Title and Close Button */}
      <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-[23px] p-0 top-[92px] w-[335px]">
        <div className="flex flex-col justify-center relative shrink-0 text-[#47567b] text-left w-[303px]">
          <h1 className="text-3xl font-semibold leading-[1.5]" style={{ fontFamily: 'Literata, serif' }}>Edit photo</h1>
        </div>
        <div 
          onClick={handleClose}
          className="relative shrink-0 size-6 cursor-pointer hover:bg-gray-100 rounded transition-colors p-1" 
          data-name="x"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <g id="x">
              <path
                d="M6 6L18 18M6 18L18 6L6 18Z"
                id="Vector"
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Photo Preview */}
      <div className="absolute h-[252px] left-[23px] overflow-clip top-[156px] w-[336px]">
        <div
          className="absolute bg-[#ccd7e6] h-[252px] left-0 rounded-[4.253px] top-0 w-[336px]"
          data-name="Main photo"
        />
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[278.599px] left-[-41.468px] top-0 w-[417.848px]"
          data-name="photo"
          style={{
            backgroundImage: `url('${photoUrl || imgDecoratedHallWeddingIsReadyCelebration1}')`,
            transform: `scale(${1 + scale}) translate(${offset.x}px, ${offset.y}px)`
          }}
        />
        <div
          className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 p-0 top-[8.506px]"
          data-name="Badge"
        >
          <div
            className="bg-neutral-900 box-border content-stretch flex flex-row gap-[4.253px] items-center justify-start overflow-clip px-[4.253px] py-0 relative rounded-[4.253px] shrink-0"
            data-name=".Base - Badge"
          >
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12.759px] text-left text-neutral-50 text-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p className="block leading-[1.5] whitespace-pre">Main photo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Navigation Icons */}
      <div className="absolute left-5 size-6 top-[423px]" data-name="photograph">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g id="photograph">
            <path
              d={svgPaths.p6548d00}
              id="Vector"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute left-[329px] size-9 top-[417px]"
        data-name="photograph"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <g id="photograph">
            <path
              d={svgPaths.p8c0f200}
              id="Vector"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {/* Slider */}
      <div
        className="absolute h-5 left-14 top-[425px] w-[262px]"
        data-name="Slider"
      >
        <div className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 px-2 py-0 right-0 rounded top-2">
          <div className="basis-0 bg-[#ccd7e6] grow h-1 min-h-px min-w-px rounded shrink-0" />
        </div>
        <div className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 px-1.5 py-0 right-3/4 rounded top-[7px]">
          <div className="basis-0 bg-[#47567b] grow h-1.5 min-h-px min-w-px rounded shrink-0" />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={scale * 100}
          onChange={(e) => handleSliderChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className="absolute right-[-12.5px] size-10 top-[-10px]"
          data-name="Interactive Icon"
          style={{ 
            transform: `translateX(${scale * 100 * 2.62}px)` 
          }}
        >
          <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row inset-0 items-start justify-start overflow-clip p-[10px] rounded-[30px]">
            <div className="relative shrink-0 size-5" data-name="Circle">
              <div className="absolute bottom-[-8.75%] left-[-3.75%] right-[-3.75%] top-0">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 22 22"
                >
                  <g filter="url(#filter0_ddd_17_2283)" id="Circle">
                    <path
                      d={svgPaths.p1d0639f0}
                      fill="var(--fill-0, #47567B)"
                      id="Vector"
                    />
                  </g>
                  <defs>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="26"
                      id="filter0_ddd_17_2283"
                      width="26"
                      x="-2"
                      y="-2"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_17_2283"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="effect1_dropShadow_17_2283"
                        mode="normal"
                        result="effect2_dropShadow_17_2283"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                      />
                      <feBlend
                        in2="effect2_dropShadow_17_2283"
                        mode="normal"
                        result="effect3_dropShadow_17_2283"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect3_dropShadow_17_2283"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Grid */}
      <div className="absolute box-border content-stretch flex flex-row items-center justify-start left-[22px] p-0 top-[156px] w-[336px]">
        {[...Array(3).keys()].map((_, i) => (
          <div key={i} className="box-border content-stretch flex flex-col h-[252px] items-start justify-start p-0 relative shrink-0 w-[113px]">
            <div className="h-24 relative shrink-0 w-full">
              <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none" />
            </div>
            <div className="h-[78px] relative shrink-0 w-full">
              <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none" />
            </div>
            <div className="h-[78px] relative shrink-0 w-full">
              <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div
        onClick={handleSave}
        className="absolute box-border content-stretch flex flex-row h-14 items-center justify-start p-0 top-[465px] translate-x-[-50%] w-[164px] cursor-pointer"
        data-name="Button"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <div
          className="basis-0 bg-[#47567b] grow h-[57px] min-h-px min-w-px relative rounded-3xl shrink-0 hover:bg-[#3a4a68] transition-colors"
          data-name=".Base - Button"
        >
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-[57px] items-center justify-center px-3 py-2 relative w-full">
              <span className="button-text text-white">Save</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}