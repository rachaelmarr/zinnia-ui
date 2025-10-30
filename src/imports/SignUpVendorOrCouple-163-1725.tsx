import svgPaths from "./svg-am7mhyihkm";

function LoginAndTerms() {
  return (
    <div className="content-stretch flex flex-col gap-1 h-[29px] items-start justify-start relative shrink-0" data-name=".Login and Terms">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[0px] tracking-[0.28px] w-full">
        <p className="leading-[1.5] text-[14px]">
          <span>{`Already have an account? `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">Log in here</span>
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[24px] text-center w-[530.5px]">
        <p className="leading-[1.5]">{`What type of vendor are you? `}</p>
      </div>
      <LoginAndTerms />
    </div>
  );
}

function Illustration() {
  return (
    <div className="absolute size-[203px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Illustration" style={{ left: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 203">
        <g id="Illustration">
          <path d={svgPaths.p1d96da00} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CoupleHover() {
  return (
    <div className="bg-[#ffffff] relative rounded-[300px] shrink-0 size-[203px]" data-name="Couple/hover">
      <div className="overflow-clip relative size-[203px]">
        <Illustration />
      </div>
      <div aria-hidden="true" className="absolute border-[#ccd7e6] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
    </div>
  );
}

function CoupleHover1() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start overflow-clip relative shrink-0" data-name="Couple/hover">
      <CoupleHover />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Florist</p>
      </div>
    </div>
  );
}

function Illustration1() {
  return (
    <div className="absolute left-0 size-[207px] top-[-4.5px]" data-name="Illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 207">
        <g id="Illustration">
          <path d={svgPaths.p583bc00} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[230px]">
      <Illustration1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-12 items-start justify-start relative rounded-[300px] shrink-0 size-[203px]">
      <div aria-hidden="true" className="absolute border-[#ccd7e6] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <Frame12 />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Photographer</p>
      </div>
    </div>
  );
}

function Illustration2() {
  return (
    <div className="absolute left-1/2 size-[207px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 207">
        <g id="Illustration">
          <path d={svgPaths.pe89ae00} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[230px]">
      <Illustration2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative rounded-[300px] shrink-0 size-[203px]">
      <div className="content-stretch flex gap-12 items-start justify-start overflow-clip relative size-[203px]">
        <Frame13 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ccd7e6] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <Frame14 />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Venue</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[61px] items-start justify-start relative shrink-0">
      <CoupleHover1 />
      <Frame10 />
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0">
      <Frame8 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center justify-start left-1/2 top-[190px] translate-x-[-50%]">
      <Frame16 />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-9 items-center justify-center relative shrink-0" data-name="Button">
      <BaseButton />
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
          <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
            <p className="leading-[1.5] whitespace-pre">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[37px] items-center justify-start relative shrink-0 w-[164px]" data-name="Button">
      <BaseButton1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start left-0 overflow-clip px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-[1440px]">
      <Frame18 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, #CCD7E6)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, #CCD7E6)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, #CCD7E6)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, #CCD7E6)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer2 />
      <Layer1 />
    </div>
  );
}

function TimelineStepDefault() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="1">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Get Started</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault />
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, #667593)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, #667593)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, #667593)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, #667593)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer4() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo1() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer3 />
      <Layer4 />
    </div>
  );
}

function TimelineStepDefault1() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo1 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="2">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Vendor type</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault1 />
    </div>
  );
}

function Layer5() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer6() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo2() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer5 />
      <Layer6 />
    </div>
  );
}

function TimelineStepDefault2() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo2 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="3">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Business info</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault2 />
    </div>
  );
}

function Layer7() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer8() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo3() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer7 />
      <Layer8 />
    </div>
  );
}

function TimelineStepDefault3() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo3 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="4">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Create account</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault3 />
    </div>
  );
}

function Timeline() {
  return (
    <div className="absolute content-stretch flex h-[100px] items-start justify-start left-1/2 top-[60px] translate-x-[-50%]" data-name="Timeline">
      <TimelineStep />
      <TimelineStep1 />
      <TimelineStep2 />
      <TimelineStep3 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute size-6 top-6" data-name="x" style={{ left: "calc(91.667% + 72px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M6 6L18 18M6 18L18 6L6 18Z" id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function SignUpVendorOrCouple() {
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-xl size-full" data-name="Sign Up - Vendor or Couple">
      <Frame17 />
      <Frame11 />
      <Timeline />
      <X />
    </div>
  );
}