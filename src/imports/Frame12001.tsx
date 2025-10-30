import svgPaths from "./svg-1ttw622xvq";

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">|</p>
      </div>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <Calendar />
          <TextContainer1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#2e7684] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[168px] p-0 top-0 w-[157px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function Arrows() {
  return (
    <div className="[grid-area:1_/_1] h-[11.314px] ml-[374px] mt-2.5 relative w-[38.627px]" data-name="Arrows">
      <div className="absolute inset-[-8.84%_-2.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 14">
          <g id="Arrows">
            <path
              d={svgPaths.pe68f400}
              id="Previous"
              stroke="var(--stroke-0, #333333)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p29e60600}
              id="Next"
              stroke="var(--stroke-0, #333333)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MonthSelector() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Month Selector"
    >
      <div className="[grid-area:1_/_1] capitalize flex flex-col font-['Literata:Bold',_sans-serif] font-bold justify-center ml-[79.5px] mt-[15px] relative text-[#47567b] text-[24px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="block leading-[1.25] whitespace-pre">October 2020</p>
      </div>
      <Arrows />
    </div>
  );
}

function Weekdays() {
  return (
    <div
      className="font-['Literata:ExtraBold',_sans-serif] font-extrabold grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px]"
      data-name="Weekdays"
    >
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[11.5px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Mo</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[77.5px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Tu</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[143px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">We</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[210.5px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Th</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[270px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Fr</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[329px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Sa</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[391.5px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Su</p>
      </div>
    </div>
  );
}

function Week01() {
  return (
    <div
      className="font-['Montserrat:Regular',_sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px]"
      data-name="Week / 01"
    >
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[3px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">1</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[63px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">2</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[122px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">3</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[184px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Week02() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Week / 02"
    >
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center ml-1 mt-[28.5px] relative text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center ml-[70.5px] mt-[28.5px] relative text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">6</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center ml-[136.5px] mt-[28.5px] relative text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">7</p>
      </div>
      <div className="[grid-area:1_/_1] ml-[175px] mt-0 relative size-14" data-name="Current Day">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" fill="var(--fill-0, #2E7684)" id="Current Day" r="28" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center ml-[203.5px] mt-[28.5px] relative text-[#ffffff] text-[14px] text-center text-nowrap tracking-[0.28px] translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">8</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center ml-[263.5px] mt-[28.5px] relative text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">9</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center ml-[322.5px] mt-[28.5px] relative text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">10</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center ml-[384.5px] mt-[28.5px] relative text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">11</p>
      </div>
    </div>
  );
}

function Week03() {
  return (
    <div
      className="font-['Montserrat:Regular',_sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px]"
      data-name="Week / 03"
    >
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[7px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">12</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[73px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">13</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[139.5px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">14</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[206px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">15</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[266px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">16</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[325px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">17</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[387.5px] mt-[10.5px] relative translate-x-[-50%] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">18</p>
      </div>
    </div>
  );
}

function Week04() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-[47px] items-end justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px]"
      data-name="Week / 04"
    >
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">19</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">20</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">21</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">22</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">23</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">24</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">25</p>
      </div>
    </div>
  );
}

function Week5() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-[47px] items-end justify-start leading-[0] p-0 relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.28px]"
      data-name="Week / 5"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[#47567b]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">26</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#47567b]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">27</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#47567b]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">28</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#47567b]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">29</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#47567b]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">30</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#47567b]">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">31</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-neutral-100">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">25</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[33px] items-end justify-start ml-0 mt-0 p-0 relative">
      <Weekdays />
      <Week01 />
      <Week02 />
      <Week03 />
      <Week04 />
      <Week5 />
    </div>
  );
}

function WeekdaysWeeks() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Weekdays & Weeks"
    >
      <Frame129 />
    </div>
  );
}

function CalendarEvents() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Calendar + Events"
    >
      <WeekdaysWeeks />
    </div>
  );
}

function CalendarCollapsedLight() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-14 items-start justify-start left-0 p-[40px] rounded-lg top-9"
      data-name="Calendar Collapsed (Light)"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_4px_32px_0px_rgba(170,170,170,0.03)]"
      />
      <MonthSelector />
      <CalendarEvents />
    </div>
  );
}

export default function Frame12001() {
  return (
    <div className="relative size-full">
      <TextInput />
      <CalendarCollapsedLight />
      <div className="absolute h-14 left-[408px] top-[-55px] w-[68px]">
        <div className="absolute bottom-0 left-[-0.74%] right-0 top-[-0.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 57">
            <path d={svgPaths.p53eb7c0} id="Vector 8" stroke="var(--stroke-0, #DC332E)" />
          </svg>
        </div>
      </div>
    </div>
  );
}