import svgPaths from "./svg-0bj5lmep9w";

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 143 24"
      >
        <g clipPath="url(#clip0_1_2416)" id="Logo">
          <path
            d={svgPaths.p28a7000}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2416">
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
      <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoContainer />
      <Icons />
    </div>
  );
}

function Frame154() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0">
      <Header />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#667593] text-[14px] text-center tracking-[0.28px] w-[375px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          Welcome Ted Lasso!
        </p>
      </div>
    </div>
  );
}

function Top() {
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

function MainHeader() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[1.459px] items-start justify-start left-0 p-0 top-0 w-[308px]"
      data-name="Main Header"
    >
      <Top />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Page Header">
      <MainHeader />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            1
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day1() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            2
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day2() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.733px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            3
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day3() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[123.982px] rounded-[72.9305px] size-[43.758px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.233px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            4
          </p>
        </div>
      </div>
      <div className="absolute border-[#47567b] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            5
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day5() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.233px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            6
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.868px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            7
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.774px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            8
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day8() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.503px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            9
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day9() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.18px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            10
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day10() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.982px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            11
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            12
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day12() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.409px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            13
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.18px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            14
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.951px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            15
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day15() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            16
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day16() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.045px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            17
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day17() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.982px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.909px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            18
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            19
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day19() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.451px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            20
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day20() {
  return (
    <div
      className="absolute h-[40.112px] left-[252.34px] rounded-[72.9305px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.045px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            21
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.857px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            22
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day22() {
  return (
    <div
      className="absolute h-[40.112px] left-[40.112px] rounded-[72.9305px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.586px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            23
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
    </div>
  );
}

function Day23() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.086px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            24
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day24() {
  return (
    <div
      className="absolute h-[40.112px] left-[123.982px] rounded-[72.9305px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            25
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.086px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            26
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day26() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.815px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            27
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day27() {
  return (
    <div
      className="absolute h-[40.112px] left-[252.34px] rounded-[72.9305px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.086px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            28
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.357px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            29
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day29() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.721px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            30
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day30() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.045px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            31
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day31() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.982px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.191px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            1
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            2
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day33() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.097px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            3
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.503px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            4
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
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
      className="absolute box-border content-stretch flex flex-col h-[218.792px] items-start justify-start left-[13.127px] p-0 top-[55.036px] w-[294.639px]"
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
    <div className="absolute box-border content-stretch flex flex-row gap-[61.991px] items-center justify-start left-[27.714px] p-0 top-[24.405px]">
      <ChevronLeft />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">September 2023</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            Manage Availability
          </p>
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
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
      <BaseButton />
    </div>
  );
}

function Calendar() {
  return (
    <div
      className="bg-[#ffffff] h-[340px] relative rounded-[11.6689px] shrink-0 w-[321px]"
      data-name="Calendar"
    >
      <div className="h-[340px] overflow-clip relative w-[321px]">
        <Month />
        <Frame127 />
        <ButtonOutlineManageAvailability />
      </div>
      <div className="absolute border-[#ccd7e6] border-[0.729306px] border-solid inset-0 pointer-events-none rounded-[11.6689px]" />
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

function Top1() {
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

function MainHeader1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Header"
    >
      <Top1 />
    </div>
  );
}

function TextHeaderMyservices() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[312px]"
      data-name="text/header/myservices"
    >
      <MainHeader1 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          2 services listed | 40 views this month
        </p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0">
      <TextHeaderMyservices />
      <Frame128 />
    </div>
  );
}

function Chart() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[22px] items-end justify-center p-0 relative shrink-0 w-full"
      data-name="Chart"
    >
      <div className="bg-[#2e7684] h-[109px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[79px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[121px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[69px] rounded-lg shrink-0 w-[42px]" />
      <div className="bg-[#ccd7e6] h-[88px] rounded-lg shrink-0 w-[42px]" />
    </div>
  );
}

function Years() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Literata:Light',_sans-serif] font-light gap-[22px] items-end justify-center leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px] uppercase w-full"
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

function Chart1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-end overflow-clip p-0 relative shrink-0 w-full"
      data-name="chart"
    >
      <Chart />
      <Years />
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            Manage My Services
          </p>
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function ButtonOutlineManageServices() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button/outline/ManageServices"
    >
      <BaseButton1 />
    </div>
  );
}

function GroupMyservices() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-[27px] items-center justify-start overflow-clip px-0 py-5 relative rounded-[20px] shrink-0 w-[312px]"
      data-name="Group/Myservices"
    >
      <Frame125 />
      <Chart1 />
      <ButtonOutlineManageServices />
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0">
      <GroupMyservices />
    </div>
  );
}

function GroupMyServices() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-[27px] items-center justify-start overflow-clip p-[20px] relative shrink-0 w-[375px]"
      data-name="Group/MyServices"
    >
      <Frame126 />
    </div>
  );
}

function Top2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[17.503px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px] text-center">
        <p className="block leading-[1.5]">4 New Bookings</p>
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
      <Top2 />
    </div>
  );
}

function TextBodyBookingInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end leading-[0] p-0 relative shrink-0 text-[#47567b] text-left text-nowrap"
      data-name="text/body/bookingInfo"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px]">
        <p className="block leading-[1.5] text-nowrap whitespace-pre">
          Leto Wedding
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Saturday May 21st, 2023
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          5:00 PM - 9:00 PM
        </p>
      </div>
    </div>
  );
}

function BaseButton2() {
  return (
    <div
      className="bg-[#8c97ac] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Confirm Now
        </p>
      </div>
    </div>
  );
}

function ButtonPrimaryConfirmNow() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button/Primary/ConfirmNow"
    >
      <BaseButton2 />
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
      <ButtonPrimaryConfirmNow />
    </div>
  );
}

function TextBodyBookingInfo1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end leading-[0] p-0 relative shrink-0 text-[#47567b] text-left text-nowrap"
      data-name="text/body/bookingInfo"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px]">
        <p className="block leading-[1.5] text-nowrap whitespace-pre">
          Marigold Wedding
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Saturday May 21st, 2023
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          5:00 PM - 9:00 PM
        </p>
      </div>
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#8c97ac] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Confirm Now
        </p>
      </div>
    </div>
  );
}

function ButtonPrimaryConfirmNow1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button/Primary/ConfirmNow"
    >
      <BaseButton3 />
    </div>
  );
}

function Wedding1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[38px] h-20 items-center justify-start p-0 relative shrink-0 w-[342px]"
      data-name="Wedding"
    >
      <TextBodyBookingInfo1 />
      <ButtonPrimaryConfirmNow1 />
    </div>
  );
}

function TextBodyBookingInfo2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end leading-[0] p-0 relative shrink-0 text-[#47567b] text-left text-nowrap"
      data-name="text/body/bookingInfo"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px]">
        <p className="block leading-[1.5] text-nowrap whitespace-pre">
          Marr Wall Wedding
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Saturday May 21st, 2023
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          5:00 PM - 9:00 PM
        </p>
      </div>
    </div>
  );
}

function BaseButton4() {
  return (
    <div
      className="bg-[#8c97ac] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Confirm Now
        </p>
      </div>
    </div>
  );
}

function ButtonPrimaryConfirmNow2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button/Primary/ConfirmNow"
    >
      <BaseButton4 />
    </div>
  );
}

function Wedding2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[26px] h-20 items-center justify-start p-0 relative shrink-0 w-[342px]"
      data-name="Wedding"
    >
      <TextBodyBookingInfo2 />
      <ButtonPrimaryConfirmNow2 />
    </div>
  );
}

function TextBodyBookingInfo3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-end leading-[0] p-0 relative shrink-0 text-[#47567b] text-left text-nowrap"
      data-name="text/body/bookingInfo"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px]">
        <p className="block leading-[1.5] text-nowrap whitespace-pre">
          Scott Wedding
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          Saturday May 21st, 2023
        </p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">
          5:00 PM - 9:00 PM
        </p>
      </div>
    </div>
  );
}

function BaseButton5() {
  return (
    <div
      className="bg-[#8c97ac] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Confirm Now
        </p>
      </div>
    </div>
  );
}

function ButtonPrimaryConfirmNow3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button/Primary/ConfirmNow"
    >
      <BaseButton5 />
    </div>
  );
}

function Wedding3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[50px] h-20 items-center justify-start p-0 relative shrink-0 w-[342px]"
      data-name="Wedding"
    >
      <TextBodyBookingInfo3 />
      <ButtonPrimaryConfirmNow3 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0">
      <Wedding />
      <Wedding1 />
      <Wedding2 />
      <Wedding3 />
    </div>
  );
}

function BaseButton6() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            View all bookings
          </p>
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function ButtonOutlineViewallbookings() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Button/outline/Viewallbookings"
    >
      <BaseButton6 />
    </div>
  );
}

function GroupBookings() {
  return (
    <div
      className="bg-[#ccd7e6] box-border content-stretch flex flex-col gap-10 items-start justify-start p-[20px] relative shrink-0 w-[375px]"
      data-name="Group/Bookings"
    >
      <TextHeaderNewbookings />
      <Frame129 />
      <ButtonOutlineViewallbookings />
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
        <p className="block leading-[1.5]">Earnings</p>
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

function TextSubheaderEarnings() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[353px]"
      data-name="text/subheader/Earnings"
    >
      <MainHeader2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bottom-[-1.221%] box-border content-stretch flex flex-row font-['Literata:Light',_sans-serif] font-light items-center justify-between leading-[0] left-[1.494%] p-0 right-0 text-[#47567b] text-[14px] text-left text-nowrap top-[91.97%] tracking-[0.28px] uppercase">
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

function ChartGraphic() {
  return (
    <div
      className="absolute bottom-[-1.221%] contents left-[1.494%] right-0 top-[2.643%]"
      data-name="chart-graphic"
    >
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[3.653%] right-[96.005%] top-[2.643%]" />
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[16.864%] right-[82.794%] top-[2.643%]" />
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[30.076%] right-[69.582%] top-[2.643%]" />
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[43.286%] right-[56.372%] top-[2.643%]" />
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[56.497%] right-[43.161%] top-[2.643%]" />
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[69.708%] right-[29.95%] top-[2.643%]" />
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[82.92%] right-[16.738%] top-[2.643%]" />
      <div className="absolute bg-[#f3f3f3] bottom-[12.295%] left-[96.131%] right-[3.527%] top-[2.643%]" />
      <Frame13 />
    </div>
  );
}

function ChartGraphic1() {
  return (
    <div
      className="h-[227px] relative shrink-0 w-full"
      data-name="chart-graphic"
    >
      <ChartGraphic />
      <div className="absolute bottom-[13.776%] flex items-center justify-center left-[6.891%] right-[3.358%] top-[85.783%]">
        <div className="flex-none h-px scale-y-[-100%] w-[336.565px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute bottom-[-1000%] left-[-2.971%] right-[-2.971%] top-[-1000%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 357 21"
              >
                <path
                  d={svgPaths.p20e5e380}
                  id="Vector"
                  stroke="var(--stroke-0, #FAFAFA)"
                  strokeLinecap="round"
                  strokeWidth="20"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[10.693%] flex items-center justify-center left-[6.891%] right-[3.912%] top-[89.307%]">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute bottom-[-2.908px] left-[-0.869%] right-[-0.869%] top-[-2.908px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 341 6"
              >
                <path
                  d={svgPaths.p335db00}
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
      <div className="absolute h-36 left-[71.5px] top-[58px] w-[277px]">
        <div className="absolute bottom-[-0.237%] left-[-0.339%] right-[-0.048%] top-[-0.688%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 279 146"
          >
            <path
              d={svgPaths.p1258fd80}
              id="Vector 1"
              stroke="var(--stroke-0, #47567B)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[7.168%] left-[17.695%] right-[77.873%] top-[85.783%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <path
            d={svgPaths.pab4580}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-[52.423%] left-[28.255%] right-[67.313%] top-[40.529%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <path
            d={svgPaths.pab4580}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-[33.04%] left-[41.274%] right-[54.294%] top-[59.912%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <path
            d={svgPaths.pab4580}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-[55.947%] left-[55.125%] right-[40.443%] top-[37.004%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <path
            d={svgPaths.pab4580}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-[59.471%] left-[67.59%] right-[27.978%] top-[33.48%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <path
            d={svgPaths.pab4580}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-[68.722%] left-[80.609%] right-[14.959%] top-[24.229%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <path
            d={svgPaths.pab4580}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-[70.925%] left-[93.906%] right-[1.662%] top-[22.026%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <path
            d={svgPaths.pab4580}
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Earnings() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-3 items-center justify-center px-0 py-3 relative shrink-0 w-[375px]"
      data-name="Earnings"
    >
      <TextSubheaderEarnings />
      <div
        className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[32px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">$900 this month</p>
      </div>
      <ChartGraphic1 />
    </div>
  );
}

function Zinnia() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[60px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Zinnia"
    >
      <Frame154 />
      <GroupCalendar />
      <GroupMyServices />
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
    <div
      className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]"
      style={{
        backgroundImage:
          "linear-gradient(91.5759deg, rgb(26, 38, 82) 4.4853%, rgb(46, 118, 132) 72.168%)",
      }}
    >
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

export default function ZinniaVendorDashboardCollapse() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-11 items-center justify-start p-0 relative size-full"
      data-name="Zinnia vendor dashboard collapse"
    >
      <Zinnia />
      <BottomNav />
    </div>
  );
}