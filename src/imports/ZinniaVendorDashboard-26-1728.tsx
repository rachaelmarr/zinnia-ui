import svgPaths from "./svg-nag4br4gyo";

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 143 24"
      >
        <g clipPath="url(#clip0_26_2042)" id="Logo">
          <path
            d={svgPaths.p33702600}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_2042">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0">
      <Logo />
    </div>
  );
}

function LogoContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Logo Container"
    >
      <Frame130 />
    </div>
  );
}

function UserCircle() {
  return (
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
  );
}

function ActionIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Icons"
    >
      <UserCircle />
    </div>
  );
}

function Icons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 size-10"
      data-name="Icons"
    >
      <ActionIcons />
    </div>
  );
}

function MobileHeader() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-[375px]"
      data-name="Mobile/Header"
    >
      <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoContainer />
      <Icons />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-center text-nowrap"
      data-name="Title"
    >
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[20px]">
        <p className="block leading-[1.5] text-nowrap whitespace-pre">
          Sign in to your account
        </p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">
          <span className="text-[#667593]">New to Zinnia?</span>{" "}
          <span className="adjustLetterSpacing text-[#2e7684]">
            Create a free account
          </span>
        </p>
      </div>
    </div>
  );
}

function LoginHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0"
      data-name=".Login Header"
    >
      <Title />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Literata:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]"
      data-name="Text Container"
    >
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Email address
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          (required)
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Enter your email address
        </p>
      </div>
    </div>
  );
}

function CoreInputField() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name=".Core - Input Field"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer1 />
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel />
      <CoreInputField />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function TextContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Literata:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]"
      data-name="Text Container"
    >
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Password
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          (required)
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Enter your password
        </p>
      </div>
    </div>
  );
}

function CoreInputField1() {
  return (
    <div
      className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full"
      data-name=".Core - Input Field"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer3 />
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel1 />
      <CoreInputField1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Text Input"
    >
      <BaseInputField1 />
    </div>
  );
}

function SecondaryActions() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Secondary Actions"
    >
      <div className="basis-0 flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[14px] text-center tracking-[0.28px]">
        <p className="block leading-[1.5]">Forgot password?</p>
      </div>
    </div>
  );
}

function BaseButton() {
  return (
    <div
      className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center px-3 py-2 relative w-full">
          <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
            <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
              Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[37px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function LoginForm() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[18px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Login Form"
    >
      <TextInput />
      <TextInput1 />
      <SecondaryActions />
      <Button />
    </div>
  );
}

function Frame156() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-[26px] p-0 top-[131px] w-[324px]">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default function ZinniaVendorDashboard() {
  return (
    <div
      className="bg-neutral-100 relative size-full"
      data-name="Zinnia vendor dashboard"
    >
      <MobileHeader />
      <Frame156 />
    </div>
  );
}