import svgPaths from "./svg-huts8kz60a";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";

function ChatAlt2() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat-alt-2">
          <path
            d={svgPaths.p3a2fce80}
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

function Bell() {
  return (
    <div className="relative shrink-0 size-6" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bell">
          <path
            d={svgPaths.pe392c80}
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
      className="box-border content-stretch flex gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Icons"
    >
      <ChatAlt2 />
      <Bell />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-10" data-name="Avatar">
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[120px]"
        data-name="Webex_Avatar_Molly"
        style={{ backgroundImage: `url('${imgWebexAvatarMolly}')` }}
      />
    </div>
  );
}

function RightContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-6 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name=".Right Content"
    >
      <ActionIcons />
      <Avatar />
    </div>
  );
}

function BaseGlobalHeaderDefault() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[72px] min-h-px min-w-px relative shrink-0"
      data-name=".BASE - Global Header/Default"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-11 h-[72px] items-center justify-start px-10 py-4 relative w-full">
          <RightContent />
        </div>
      </div>
    </div>
  );
}

function GlobalHeaderVendorAdmin() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-[0.29px] p-0 top-0 w-[1440px]"
      data-name="Global Header - Vendor Admin"
    >
      <BaseGlobalHeaderDefault />
    </div>
  );
}

function CalendarDay() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-0 mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">27</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-28 mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">28</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-56 mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">29</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay3() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-[336px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">30</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay4() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-[448px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">31</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CursorClickFill() {
  return (
    <div className="absolute left-[55.71px] size-5 top-[66px]" data-name="cursor-click-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="cursor-click-fill">
          <path clipRule="evenodd" d={svgPaths.pf3f3800} fill="var(--fill-0, #47567B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CalendarDay5() {
  return (
    <div className="[grid-area:1_/_1] bg-[#ffffff] ml-[560px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#667593] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
        </div>
        <CursorClickFill />
      </div>
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay6() {
  return (
    <div className="[grid-area:1_/_1] bg-[#ffffff] ml-[672px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group125() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <CalendarDay />
      <CalendarDay1 />
      <CalendarDay2 />
      <CalendarDay3 />
      <CalendarDay4 />
      <CalendarDay5 />
      <CalendarDay6 />
    </div>
  );
}

function CalendarDay7() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay8() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">4</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay9() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11957() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-2 top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function CalendarDay10() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11957 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11959() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-2 top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">7</p>
      </div>
    </div>
  );
}

function CalendarDay11() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11959 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11960() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function CalendarDay12() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11960 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11961() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function CalendarDay13() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11961 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11962() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function CalendarDay14() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11962 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11963() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">11</p>
      </div>
    </div>
  );
}

function CalendarDay15() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11963 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11964() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12</p>
      </div>
    </div>
  );
}

function CalendarDay16() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11964 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay17() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">13</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11965() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">14</p>
      </div>
    </div>
  );
}

function CalendarDay18() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11965 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay19() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">15</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay20() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">16</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay21() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">17</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay22() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">18</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay23() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">19</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay24() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">20</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay25() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">21</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay26() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">22</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay27() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">23</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#44979f] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay28() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">24</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay29() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">25</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay30() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">26</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay31() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">27</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11966() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function CalendarDay32() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11966 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay33() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">29</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11967() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">30</p>
      </div>
    </div>
  );
}

function CalendarDay34() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.664px] items-center justify-center left-px top-[2.5px] w-[145.664px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11967 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay35() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">31</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay36() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay37() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay38() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay39() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">4</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay40() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay41() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">6</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11956() {
  return (
    <div
      className="absolute box-border content-start flex flex-wrap gap-0 h-[664px] items-start justify-start p-0 top-[223px] w-[784px]"
      style={{ left: "calc(16.667% + 30.286px)" }}
    >
      <Group125 />
      <CalendarDay7 />
      <CalendarDay8 />
      <CalendarDay9 />
      <CalendarDay10 />
      <CalendarDay11 />
      <CalendarDay12 />
      <CalendarDay13 />
      <CalendarDay14 />
      <CalendarDay15 />
      <CalendarDay16 />
      <CalendarDay17 />
      <CalendarDay18 />
      <CalendarDay19 />
      <CalendarDay20 />
      <CalendarDay21 />
      <CalendarDay22 />
      <CalendarDay23 />
      <CalendarDay24 />
      <CalendarDay25 />
      <CalendarDay26 />
      <CalendarDay27 />
      <CalendarDay28 />
      <CalendarDay29 />
      <CalendarDay30 />
      <CalendarDay31 />
      <CalendarDay32 />
      <CalendarDay33 />
      <CalendarDay34 />
      <CalendarDay35 />
      <CalendarDay36 />
      <CalendarDay37 />
      <CalendarDay38 />
      <CalendarDay39 />
      <CalendarDay40 />
      <CalendarDay41 />
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

function CheckboxBox() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Block day</p>
      </div>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer />
    </div>
  );
}

function CoreHelperText() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 shrink-0"
      data-name=".Core - Helper Text"
    />
  );
}

function TextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel />
      <CoreHelperText />
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer />
      <TextContainer1 />
    </div>
  );
}

function Checkbox() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox />
    </div>
  );
}

function Frame138() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-5 p-0 top-16">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Block day</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] tracking-[0.28px] w-[314px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`Block this day to not show up when a couple searches. `}</p>
      </div>
      <Checkbox />
    </div>
  );
}

function Frame11958() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[1048px] overflow-clip top-[72px] w-[365px]"
      style={{ left: "calc(75% - 5px)" }}
    >
      <X />
      <Frame138 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left">
          <path
            d="M15 19L8 12L15 5"
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

function Frame127() {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-center p-0 relative shrink-0">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[18px] text-center text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">September 2023</p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path
            d="M9 5L16 12L9 19"
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

function Frame128() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-[300px] items-center justify-center p-0 top-[180px] w-[781px]"
      style={{ left: "calc(16.667% + 35px)" }}
    >
      <ChevronLeft />
      <Frame127 />
      <ChevronRight />
    </div>
  );
}

function Warning() {
  return (
    <div className="absolute left-2 size-3 top-[13px]" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="warning">
          <path
            d={svgPaths.p3d2be900}
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Wedding() {
  return (
    <div
      className="absolute bg-neutral-400 h-[38px] overflow-clip rounded-xl top-[713px] translate-x-[-50%] w-[108px]"
      data-name="wedding"
      style={{ left: "calc(45.833% + 1.714px)" }}
    >
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-7 text-[#ffffff] text-[12px] text-nowrap top-[19px] tracking-[0.24px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
          10AM - 2PM
          <br aria-hidden="true" />
          Kent
        </p>
      </div>
      <Warning />
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="absolute left-[7px] size-3 top-3.5" data-name="check-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check-circle">
          <path
            d={svgPaths.p37f67170}
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Wedding1() {
  return (
    <div
      className="absolute bg-[#2e7684] h-10 overflow-clip rounded-xl top-[594px] translate-x-[-50%] w-[108px]"
      data-name="wedding"
      style={{ left: "calc(70.833% - 22.286px)" }}
    >
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-6 text-[#ffffff] text-[12px] text-nowrap top-5 tracking-[0.24px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
          10 AM - 2 PM
          <br aria-hidden="true" />
          Lasso
        </p>
      </div>
      <CheckCircle />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-5" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home">
          <path
            d={svgPaths.p2d4f9980}
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

function BaseLeftNavItem() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Home />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem1() {
  return (
    <div
      className="basis-0 bg-[#2e7684] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Calendar />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-100 tracking-[0.28px]">
            <p className="block leading-[1.5]">Calendar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem1 />
    </div>
  );
}

function ClipboardList() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="clipboard-list">
          <path
            d={svgPaths.p5d88c0}
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

function BaseLeftNavItem2() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <ClipboardList />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">{`My Listing & Services`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem2 />
    </div>
  );
}

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency-dollar">
          <path
            d={svgPaths.p12005030}
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

function BaseLeftNavItem3() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <CurrencyDollar />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Invoices</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem3() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem3 />
    </div>
  );
}

function ChatAlt3() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chat-alt-2">
          <path
            d={svgPaths.pf3bce40}
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

function BaseLeftNavItem4() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <ChatAlt3 />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Messages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem4() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem4 />
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-5" data-name="user-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user-circle">
          <path
            d={svgPaths.p1de73df0}
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

function BaseLeftNavItem5() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <UserCircle />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem5() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <LeftNavItem />
      <LeftNavItem1 />
      <LeftNavItem2 />
      <LeftNavItem3 />
      <LeftNavItem4 />
      <LeftNavItem5 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame1 />
    </div>
  );
}

function SideBar() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-11 h-[884px] items-start justify-start left-8 overflow-clip p-0 top-28 w-[210px]"
      data-name="Side Bar"
    >
      <Content />
    </div>
  );
}

export default function AvailabilityLandingScreen() {
  return (
    <div className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full" data-name="Availability landing screen">
      <GlobalHeaderVendorAdmin />
      <Frame11956 />
      <div
        className="absolute font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] text-[#47567b] text-[32px] text-center top-28 translate-x-[-50%] w-[784px]"
        style={{ left: "calc(16.667% + 422.286px)" }}
      >
        <p className="block leading-[1.5]">Calendar</p>
      </div>
      <Frame11958 />
      <Frame128 />
      <Wedding />
      <Wedding1 />
      <SideBar />
    </div>
  );
}