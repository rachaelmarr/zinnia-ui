import svgPaths from "./svg-1t8rks951t";
import imgMap from "figma:asset/3a139f5c438cc3d08ea7f3470b38333bcbc7e543.png";

function CheckFill() {
  return (
    <div className="relative shrink-0 size-3" data-name="check-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check-fill">
          <path d={svgPaths.p208c1900} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #F5F5F5)" />
        </g>
      </svg>
    </div>
  );
}

function BaseBadge() {
  return (
    <div
      className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0"
      data-name=".Base - Badge"
    >
      <CheckFill />
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Confirmed</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0" data-name="Badge">
      <BaseBadge />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-6" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heart">
          <path
            d={svgPaths.p2f964100}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame11959() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0 w-[230px]">
      <Heart />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[225px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`Ted Lasso & Stephanie Kane`}</p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <Badge />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Lasso Wedding</p>
      </div>
      <Frame11959 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#2e7684] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[1.5] whitespace-pre">
          View Profile
        </p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame126 />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Message</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function Frame128() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Service Booked</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">Wedding Day</p>
      </div>
    </div>
  );
}

function Frame11965() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame128 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Start time</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">10:00 AM</p>
      </div>
    </div>
  );
}

function Frame11961() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame129 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">End Time</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">2:00 PM</p>
      </div>
    </div>
  );
}

function Frame11962() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame130 />
    </div>
  );
}

function LocationMarkerFill() {
  return (
    <div className="absolute left-[38px] size-5 top-14" data-name="location-marker-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="location-marker-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p16c81e80}
            fill="var(--fill-0, #2E7684)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Map() {
  return (
    <div className="[grid-area:1_/_1] h-[166px] ml-0 mt-0 overflow-clip relative w-[304px]" data-name="map">
      <div
        className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[448px] left-[-6.5px] top-0 w-[313.5px]"
        data-name="Map"
        style={{ backgroundImage: `url('${imgMap}')` }}
      />
      <div className="absolute left-[143px] size-[11px] top-[33px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <circle cx="5.5" cy="5.5" fill="var(--fill-0, #47567B)" id="Ellipse 43" r="5.5" />
        </svg>
      </div>
      <div className="absolute h-[59px] left-12 top-[41px] w-[99px]">
        <div className="absolute inset-[-3.39%_-2.02%_-4.32%_-2.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 64">
            <path
              d="M101 2L49 61L16 42L2 35"
              id="Vector 1"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
      <LocationMarkerFill />
    </div>
  );
}

function Frame131() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start left-0 p-0 top-0 w-[304px]">
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px]">
          <span className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#318913] tracking-[0.28px]">
            10 mins
          </span>
          <span>{` (via Jia Garuda Dr.)`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame11967() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame131 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[14px] text-right tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b] w-full">
        <p className="block leading-[1.5]">{`1002 Lake Dr. `}</p>
      </div>
      <div className="relative shrink-0 text-[#47567b] w-full">
        <p className="block leading-[1.5]">Chicago, IL 60076</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684] w-full">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5]">
          View on Map
        </p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start left-0 p-0 top-0 w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Address</p>
      </div>
      <Frame132 />
    </div>
  );
}

function Frame11966() {
  return (
    <div className="h-[63px] relative shrink-0 w-full">
      <Frame133 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-3 items-start justify-start ml-0 mt-[178px] p-0 relative w-[304px]">
      <Frame11967 />
      <Frame11966 />
    </div>
  );
}

function Group126() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Map />
      <Frame135 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Total Guests</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">200</p>
      </div>
    </div>
  );
}

function Frame11963() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame136 />
    </div>
  );
}

function Frame11964() {
  return (
    <div className="box-border content-stretch flex gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-full">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Total Payout</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">$5,000</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex font-['Literata:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]"
      data-name="Text Container"
    >
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Notes</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-[14px] text-nowrap whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function InformationCircleFill() {
  return (
    <div className="relative shrink-0 size-4" data-name="information-circle-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="information-circle-fill">
          <path d={svgPaths.p337a47f0} fill="var(--fill-0, #667593)" id="Vector" stroke="var(--stroke-0, #667593)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer />
      <InformationCircleFill />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Notes about this job....</p>
      </div>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-[76px] relative rounded-lg shrink-0 w-[308px]" data-name=".Core - Input Field">
      <div className="box-border content-stretch flex gap-2 h-[76px] items-start justify-start overflow-clip px-3 py-1 relative w-[308px]">
        <TextContainer1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function PaperClip() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="paper-clip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="paper-clip">
          <path
            d={svgPaths.p2d7b8280}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame134() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0">
      <PaperClip />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Attach image
        </p>
      </div>
    </div>
  );
}

function BaseInputField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[308px]"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel />
      <CoreInputField />
      <Frame134 />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[308px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function Frame137() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-5 items-start justify-start left-[18.71px] p-0 top-16 w-[304px]">
      <Frame127 />
      <Button />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11965 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11961 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11962 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group126 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11963 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11964 />
      <div className="h-0 relative shrink-0 w-[304px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 304 1">
            <line id="Line 19" stroke="var(--stroke-0, #CCD7E6)" x2="304" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TextInput />
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-5 size-6 top-5" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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
  );
}

export default function Frame11958() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <Frame137 />
      <X />
    </div>
  );
}