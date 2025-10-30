import svgPaths from "./svg-qb25chq9m";

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 143 24"
      >
        <g clipPath="url(#clip0_37_2083)" id="Logo">
          <path
            d={svgPaths.p28a7000}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_37_2083">
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

function Header() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between px-4 py-5 relative shrink-0 w-[375px]"
      data-name="Header"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <LogoContainer />
      <Icons />
    </div>
  );
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 h-[52px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-center w-[360px]">
        <p className="block leading-[1.2]">0/4 steps done</p>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px]">
        <p className="block leading-[1.5]">{`Once your profile is complete customers can book you. `}</p>
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Header"
    >
      <Top1 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#667593] text-[14px] text-center tracking-[0.28px] w-full">
        <p className="block leading-[1.5]">{`Welcome {{vendorName}}!`}</p>
      </div>
      <Top />
      <MainHeader />
    </div>
  );
}

function BaseButton() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Create listing
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function ButtonDescription() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 h-[42px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="button+description"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[205px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          Create your listing and add services
        </p>
      </div>
      <Button />
    </div>
  );
}

function Dashboard() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[340px]"
      data-name="dashboard"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-full">
        <p className="block leading-[1.5]">Create your listing</p>
      </div>
      <ButtonDescription />
    </div>
  );
}

function BaseButton1() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Add Bank Info
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function ButtonDescription1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="button+description"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[205px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          We’ll use stripe to verify your information
        </p>
      </div>
      <Button1 />
    </div>
  );
}

function Dashboard1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[340px]"
      data-name="dashboard"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[209px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          Bank account information
        </p>
      </div>
      <ButtonDescription1 />
    </div>
  );
}

function BaseButton2() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Set availability
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton2 />
    </div>
  );
}

function ButtonDescription2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="button+description"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[205px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`Set your availability so people can book you. `}</p>
      </div>
      <Button2 />
    </div>
  );
}

function Dashboard2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[340px]"
      data-name="dashboard"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-full">
        <p className="block leading-[1.5] whitespace-pre-wrap">{`Set  availability`}</p>
      </div>
      <ButtonDescription2 />
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Update Bio
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton3 />
    </div>
  );
}

function ButtonDescription3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[26px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="button+description"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[206px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          Finalize your listing bio
        </p>
      </div>
      <Button3 />
    </div>
  );
}

function Dashboard3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[340px]"
      data-name="dashboard"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-full">
        <p className="block leading-[1.5]">Finalize your bio</p>
      </div>
      <ButtonDescription3 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative size-6" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chevron-down">
          <path
            d="M19 9L12 16L5 9"
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

function GroupSetupstepsCollapsed() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-[340px]"
      data-name="Group/setupsteps/collapsed"
    >
      <Frame125 />
      <Dashboard />
      <Dashboard1 />
      <Dashboard2 />
      <Dashboard3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Steps() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip px-[17px] py-0 relative shrink-0"
      data-name="Steps"
    >
      <GroupSetupstepsCollapsed />
    </div>
  );
}

function Top2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[17.503px] items-center justify-start p-0 relative shrink-0 w-[373px]"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[20px] text-center">
        <p className="block leading-[1.5]">My Calendar</p>
      </div>
    </div>
  );
}

function MainHeader1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[1.459px] items-start justify-start left-0 p-0 top-0 w-[308px]"
      data-name="Main Header"
    >
      <Top2 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Page Header">
      <MainHeader1 />
    </div>
  );
}

function Day() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.37px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            1
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day1() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.11px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.37px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            2
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day2() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.68px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.73px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            3
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day3() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[123.98px] rounded-[72.931px] size-[43.758px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.23px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            4
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#47567b] border-[0.365px] border-solid inset-0 pointer-events-none rounded-[72.931px]"
      />
    </div>
  );
}

function Day4() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.37px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            5
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day5() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.31px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.23px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            6
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day6() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[252.34px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.87px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            7
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Week3() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 3"
    >
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
    </div>
  );
}

function Day7() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.77px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            8
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day8() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.11px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.5px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            9
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day9() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.68px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.18px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            10
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day10() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.98px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.37px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            11
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day11() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            12
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day12() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.31px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.41px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            13
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day13() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[252.34px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.18px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            14
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Week6() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 6"
    >
      <Day7 />
      <Day8 />
      <Day9 />
      <Day10 />
      <Day11 />
      <Day12 />
      <Day13 />
    </div>
  );
}

function Day14() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.95px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            15
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day15() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.11px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            16
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day16() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.68px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.05px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            17
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day17() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.98px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.91px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            18
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day18() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            19
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day19() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.31px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.45px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            20
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day20() {
  return (
    <div
      className="absolute h-[40.112px] left-[252.34px] rounded-[72.931px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.05px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            21
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none rounded-[72.931px]"
      />
    </div>
  );
}

function Week7() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 7"
    >
      <Day14 />
      <Day15 />
      <Day16 />
      <Day17 />
      <Day18 />
      <Day19 />
      <Day20 />
    </div>
  );
}

function Day21() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.86px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            22
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day22() {
  return (
    <div
      className="absolute h-[40.112px] left-[40.11px] rounded-[72.931px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.59px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            23
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none rounded-[72.931px]"
      />
    </div>
  );
}

function Day23() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.68px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.09px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            24
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day24() {
  return (
    <div
      className="absolute h-[40.112px] left-[123.98px] rounded-[72.931px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            25
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none rounded-[72.931px]"
      />
    </div>
  );
}

function Day25() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.09px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            26
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day26() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.31px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.82px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            27
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day27() {
  return (
    <div
      className="absolute h-[40.112px] left-[252.34px] rounded-[72.931px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.09px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            28
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none rounded-[72.931px]"
      />
    </div>
  );
}

function Week8() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 8"
    >
      <Day21 />
      <Day22 />
      <Day23 />
      <Day24 />
      <Day25 />
      <Day26 />
      <Day27 />
    </div>
  );
}

function Day28() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.36px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            29
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day29() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.11px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.72px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            30
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day30() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.68px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.05px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            31
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day31() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.98px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.19px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            1
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day32() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.37px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            2
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day33() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.31px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.1px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            3
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day34() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[252.34px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.5px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.4px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            4
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.365px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Week9() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 9"
    >
      <Day28 />
      <Day29 />
      <Day30 />
      <Day31 />
      <Day32 />
      <Day33 />
      <Day34 />
    </div>
  );
}

function Month() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[218.792px] items-start justify-start left-[13.13px] p-0 top-[55.04px] w-[294.639px]"
      data-name="Month"
    >
      <Week3 />
      <Week6 />
      <Week7 />
      <Week8 />
      <Week9 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[17.503px]" data-name="chevron-left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="chevron-left">
          <path
            d={svgPaths.p1d08b380}
            id="Vector"
            stroke="var(--stroke-0, #CCD7E6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.45861"
          />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div
      className="relative shrink-0 size-[17.503px]"
      data-name="chevron-right"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="chevron-right">
          <path
            d={svgPaths.p1e8d2100}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.45861"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-12 items-center justify-start left-7 p-0 top-6 w-72">
      <ChevronLeft />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">{`{{currentMonth}}`}</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function BaseButton4() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            Manage Availability
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function ButtonOutlineManageAvailability() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-9 items-center justify-center p-0 top-[280px] translate-x-[-50%]"
      data-name="Button/Outline/manageAvailability"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <BaseButton4 />
    </div>
  );
}

function Calendar() {
  return (
    <div
      className="bg-[#ffffff] h-[340px] relative rounded-[11.669px] shrink-0 w-[321px]"
      data-name="Calendar"
    >
      <div className="h-[340px] overflow-clip relative w-[321px]">
        <Month />
        <Frame127 />
        <ButtonOutlineManageAvailability />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0.729px] border-solid inset-0 pointer-events-none rounded-[11.669px]"
      />
    </div>
  );
}

function GroupCalendar() {
  return (
    <div
      className="bg-[#ccd7e6] box-border content-stretch flex flex-col gap-2 items-center justify-start overflow-clip px-0 py-7 relative shrink-0 w-[375px]"
      data-name="Group/Calendar"
    >
      <PageHeader />
      <Calendar />
    </div>
  );
}

function Top3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px] text-center">
        <p className="block leading-[1.5]">My services</p>
      </div>
    </div>
  );
}

function MainHeader2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Header"
    >
      <Top3 />
    </div>
  );
}

function PageHeader1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[312px]"
      data-name="Page Header"
    >
      <MainHeader2 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          0 services listed | 0 views this month
        </p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0">
      <PageHeader1 />
      <Frame128 />
    </div>
  );
}

function Chart() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[22px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Chart"
    >
      <div className="bg-[#2e7684] h-[3.064px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[3.064px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[3.064px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[3.064px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[3.064px] rounded-lg shrink-0 w-[42px]" />
    </div>
  );
}

function Years() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Literata:Light',_sans-serif] font-light gap-[22px] items-end justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px] uppercase w-full"
      data-name="years"
    >
      <div className="h-[22px] relative shrink-0 w-[42px]">
        <p className="adjustLetterSpacing block leading-[1.5]">AUG</p>
      </div>
      <div className="h-[22px] relative shrink-0 w-[42px]">
        <p className="adjustLetterSpacing block leading-[1.5]">SEP</p>
      </div>
      <div className="h-[22px] relative shrink-0 w-[42px]">
        <p className="adjustLetterSpacing block leading-[1.5]">OCT</p>
      </div>
      <div className="h-[22px] relative shrink-0 w-[42px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Nov</p>
      </div>
      <div className="h-[22px] relative shrink-0 w-[42px]">
        <p className="adjustLetterSpacing block leading-[1.5]">DEC</p>
      </div>
    </div>
  );
}

function ChartGraphic() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-[205px] items-start justify-end overflow-clip p-0 relative shrink-0 w-full"
      data-name="chart-graphic"
    >
      <Chart />
      <Years />
    </div>
  );
}

function BaseButton5() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            Manage My Services
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button4() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton5 />
    </div>
  );
}

function GroupMyservices() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-[27px] items-center justify-start overflow-clip px-0 py-5 relative rounded-[20px] shrink-0 w-[312px]"
      data-name="Group/Myservices"
    >
      <Frame126 />
      <ChartGraphic />
      <Button4 />
    </div>
  );
}

function Top4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[17.503px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px] text-center">
        <p className="block leading-[1.5]">New Bookings</p>
      </div>
    </div>
  );
}

function TextHeaderNewbookings() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[1.459px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="text/header/newbookings"
    >
      <Top4 />
    </div>
  );
}

function TextBodyBookingInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0 w-[342px]"
      data-name="text/body/bookingInfo"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-center w-[375px]">
        <p className="block leading-[1.5]">{`You’ll see new bookings here once clients reach out. `}</p>
      </div>
    </div>
  );
}

function Wedding() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[50px] h-20 items-center justify-start p-0 relative shrink-0 w-[342px]"
      data-name="Wedding"
    >
      <TextBodyBookingInfo />
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0">
      <Wedding />
    </div>
  );
}

function GroupBookings() {
  return (
    <div
      className="bg-[#ccd7e6] box-border content-stretch flex flex-col gap-10 items-center justify-start p-[20px] relative shrink-0 w-[375px]"
      data-name="Group/Bookings"
    >
      <TextHeaderNewbookings />
      <Frame129 />
    </div>
  );
}

function Top5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px] text-center">
        <p className="block leading-[1.5]">Earnings</p>
      </div>
    </div>
  );
}

function MainHeader3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Header"
    >
      <Top5 />
    </div>
  );
}

function TextSubheaderEarnings() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[353px]"
      data-name="text/subheader/Earnings"
    >
      <MainHeader3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute box-border content-stretch flex flex-row font-['Literata:Light',_sans-serif] font-light inset-[86.93%_8.59%_3.82%_5.57%] items-center justify-between leading-[0] p-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px] uppercase">
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          AUG
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          SEP
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          OCT
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          NOV
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          DEC
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          JAN
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          FEB
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          MAR
        </p>
      </div>
    </div>
  );
}

function ChartGraphic1() {
  return (
    <div
      className="absolute contents inset-[-2.21%_8.59%_3.82%_5.57%]"
      data-name="chart-graphic"
    >
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_92.25%_17.32%_7.45%]" />
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_80.73%_17.32%_18.97%]" />
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_69.22%_17.32%_30.48%]" />
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_57.71%_17.32%_41.99%]" />
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_46.2%_17.32%_53.5%]" />
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_34.69%_17.32%_65.02%]" />
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_23.17%_17.32%_76.53%]" />
      <div className="absolute bg-[#f3f3f3] inset-[-2.21%_11.66%_17.32%_88.04%]" />
      <Frame13 />
    </div>
  );
}

function Tooltips() {
  return (
    <div
      className="absolute bg-[#47567b] box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-3 py-[7px] rounded translate-x-[-50%] translate-y-[-50%]"
      data-name="tooltips"
      style={{ top: "calc(50% + 47.728px)", left: "calc(50% - 86.535px)" }}
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          $0
        </p>
      </div>
    </div>
  );
}

function ChartEarnings() {
  return (
    <div
      className="h-[227px] relative shrink-0 w-full"
      data-name="Chart/earnings"
    >
      <ChartGraphic1 />
      <div className="absolute flex inset-[84.28%_6.32%_15.72%_12.69%] items-center justify-center">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-2.91px_-0.96%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 310 6"
              >
                <path
                  d={svgPaths.p24c6a00}
                  id="Vector"
                  stroke="var(--stroke-0, #47567B)"
                  strokeLinecap="round"
                  strokeWidth="5.81515"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[80.77%_73.48%_12.2%_22.5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path
            d={svgPaths.pd304b00}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Tooltips />
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[182px] text-[#000000] text-[14px] text-center top-8 tracking-[0.28px] translate-x-[-50%] w-[300px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          Your earnings will show up here after your first payment.
        </p>
      </div>
    </div>
  );
}

function Earnings() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-3 items-center justify-center p-0 relative shrink-0 w-[375px]"
      data-name="Earnings"
    >
      <TextSubheaderEarnings />
      <div
        className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[32px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">$0 this month</p>
      </div>
      <ChartEarnings />
    </div>
  );
}

function GroupVendorDashboard() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-11 items-center justify-start p-0 relative shrink-0 w-[375.5px]"
      data-name="Group/vendorDashboard"
    >
      <Steps />
      <GroupCalendar />
      <GroupMyservices />
      <GroupBookings />
      <Earnings />
    </div>
  );
}

function HomeFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="home-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="home-fill">
          <path
            d={svgPaths.p15e23cf0}
            fill="var(--fill-0, #F5F5F5)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <HomeFill />
      <div
        className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[10px] text-center text-neutral-100 tracking-[0.2px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Home</p>
      </div>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
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

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <Calendar1 />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Calendar</p>
      </div>
    </div>
  );
}

function ClipboardList() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clipboard-list">
          <path
            d={svgPaths.p5d88c0}
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

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <ClipboardList />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Listings</p>
      </div>
    </div>
  );
}

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="currency-dollar">
          <path
            d={svgPaths.p12005030}
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

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <CurrencyDollar />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Billing</p>
      </div>
    </div>
  );
}

function ChatAlt3() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat-alt-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chat-alt-2">
          <path
            d={svgPaths.pf3bce40}
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

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <ChatAlt3 />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Clients</p>
      </div>
    </div>
  );
}

function DotsHorizontal() {
  return (
    <div className="relative shrink-0 size-5" data-name="dots-horizontal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="dots-horizontal">
          <path
            d={svgPaths.p32a3d900}
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

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <DotsHorizontal />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">More</p>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div
      className="[flex-flow:wrap] bg-neutral-50 box-border content-start flex gap-0 h-[75px] items-start justify-center p-0 relative shrink-0 w-[375px]"
      data-name="bottom nav"
    >
      <Frame1 />
      <Frame2 />
      <Frame7 />
      <Frame8 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function PageVendorDashboardStepsCollapsed() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-[47px] items-center justify-start p-0 relative size-full"
      data-name="Page/VendorDashboard/steps collapsed"
    >
      <Header />
      <GroupVendorDashboard />
      <BottomNav />
    </div>
  );
}