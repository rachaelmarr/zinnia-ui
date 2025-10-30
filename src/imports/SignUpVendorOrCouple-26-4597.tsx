import svgPaths from "./svg-7ab2231e03";

function LoginAndTerms() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-[29px] items-start justify-start p-0 relative shrink-0"
      data-name=".Login and Terms"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-left tracking-[0.28px] w-full">
        <p className="leading-[1.5] text-[14px]">
          <span>{`Already have an account? `}</span>
          <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px]">
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[24px] text-center w-[530.5px]">
        <p className="block leading-[1.5]">
          Are you signing up as a couple or vendor?
        </p>
      </div>
      <LoginAndTerms />
    </div>
  );
}

function Illustration() {
  return (
    <div
      className="absolute left-1/2 size-[261px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Illustration"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 261 261"
      >
        <g id="Illustration">
          <path
            d={svgPaths.p2e0def80}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function CoupleHover() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[300px] shrink-0 size-[203px]"
      data-name="Couple/hover"
    >
      <div className="overflow-clip relative size-[203px]">
        <Illustration />
      </div>
      <div className="absolute border-[#ccd7e6] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
    </div>
  );
}

function CoupleHover1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Couple/hover"
    >
      <CoupleHover />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Couple</p>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div
      className="absolute bottom-[10.731%] left-[7.987%] right-[11.745%] top-[17.84%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 146 130"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p3db2b480}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[10.731%] contents left-[7.987%] right-[11.745%] top-[17.84%]">
      <Layer1 />
    </div>
  );
}

function Illustration1() {
  return (
    <div
      className="absolute left-[11.5px] overflow-clip size-[181px] top-2"
      data-name="Illustration"
    >
      <Group1 />
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
    <div className="box-border content-stretch flex flex-row gap-12 items-start justify-start p-0 relative rounded-[300px] shrink-0 size-[203px]">
      <div className="absolute border-[#ccd7e6] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0">
      <Frame12 />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Vendor</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[61px] items-start justify-start p-0 relative shrink-0">
      <CoupleHover1 />
      <Frame9 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0">
      <Frame8 />
      <Frame13 />
    </div>
  );
}

function Frame10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[60px] items-center justify-start p-0 top-[190px]"
      style={{ left: "calc(25% + 94.75px)" }}
    >
      <Frame14 />
    </div>
  );
}

function BaseButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Cancel
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function BaseButton1() {
  return (
    <div
      className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center px-3 py-2 relative w-full">
          <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
            <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
              Next
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[37px] items-center justify-start p-0 relative shrink-0 w-[164px]"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start left-0 overflow-clip px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-[1440px]">
      <Frame15 />
    </div>
  );
}

function X() {
  return (
    <div
      className="absolute size-6 top-6"
      data-name="x"
      style={{ left: "calc(91.667% + 71.5px)" }}
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
  );
}

export default function SignUpVendorOrCouple() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-xl size-full"
      data-name="Sign Up - Vendor or Couple"
    >
      <Frame10 />
      <Frame11 />
      <X />
    </div>
  );
}