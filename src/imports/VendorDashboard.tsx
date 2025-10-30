import svgPaths from "./svg-9vd54gaep1";
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
      className="absolute box-border content-stretch flex items-start justify-start left-0 p-0 top-0 w-[1440px]"
      data-name="Global Header - Vendor Admin"
    >
      <BaseGlobalHeaderDefault />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-6 left-10 top-6 w-[143px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
        <g clipPath="url(#clip0_96_2725)" id="Logo">
          <path d={svgPaths.p3d68ed00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_96_2725">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Day() {
  return (
    <div className="absolute bg-[#ffffff] left-0 size-[55px] top-0" data-name="day">
      <div className="overflow-clip relative size-[55px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[27.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day1() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[55px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day2() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-28 top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">3</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day3() {
  return (
    <div className="absolute bg-[#ffffff] left-[170px] rounded-[100px] size-[60px] top-0" data-name="day">
      <div className="overflow-clip relative size-[60px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[30px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">4</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#47567b] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Day4() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[230px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day5() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[287px] top-0 w-[59px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[59px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">6</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day6() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[346px] top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">7</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Week3() {
  return (
    <div className="h-[60px] relative shrink-0 w-[410px]" data-name="Week 3">
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
    <div className="absolute bg-[#ffffff] left-0 size-[55px] top-0" data-name="day">
      <div className="overflow-clip relative size-[55px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[27.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">8</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day8() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[55px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">9</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day9() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-28 top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">10</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day10() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[170px] top-0 w-[60px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[60px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[30px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">11</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day11() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[230px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day12() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[287px] top-0 w-[59px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[59px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">13</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day13() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[346px] top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">14</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Week6() {
  return (
    <div className="h-[60px] relative shrink-0 w-[410px]" data-name="Week 6">
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
    <div className="absolute bg-[#ffffff] left-0 size-[55px] top-0" data-name="day">
      <div className="overflow-clip relative size-[55px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[27.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">15</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day15() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[55px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">16</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day16() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-28 top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">17</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day17() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[170px] top-0 w-[60px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[60px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[30px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">18</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day18() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[230px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">19</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day19() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[287px] top-0 w-[59px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[59px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">20</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day20() {
  return (
    <div className="absolute h-[55px] left-[346px] rounded-[100px] top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">21</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Week7() {
  return (
    <div className="h-[60px] relative shrink-0 w-[410px]" data-name="Week 7">
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
    <div className="absolute bg-[#ffffff] left-0 size-[55px] top-0" data-name="day">
      <div className="overflow-clip relative size-[55px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[27.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">22</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day22() {
  return (
    <div className="absolute h-[55px] left-[55px] rounded-[100px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">23</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Day23() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-28 top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">24</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day24() {
  return (
    <div className="absolute h-[55px] left-[170px] rounded-[100px] top-0 w-[60px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[60px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[30px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">25</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Day25() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[230px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">26</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day26() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[287px] top-0 w-[59px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[59px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">27</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day27() {
  return (
    <div className="absolute h-[55px] left-[346px] rounded-[100px] top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">28</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Week8() {
  return (
    <div className="h-[60px] relative shrink-0 w-[410px]" data-name="Week 8">
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
    <div className="absolute bg-[#ffffff] left-0 size-[55px] top-0" data-name="day">
      <div className="overflow-clip relative size-[55px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[27.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">29</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day29() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[55px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">30</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day30() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-28 top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">31</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day31() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[170px] top-0 w-[60px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[60px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[30px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day32() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[230px] top-0 w-[57px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[28.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day33() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[287px] top-0 w-[59px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[59px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29.5px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">3</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Day34() {
  return (
    <div className="absolute bg-[#ffffff] h-[55px] left-[346px] top-0 w-[58px]" data-name="day">
      <div className="h-[55px] overflow-clip relative w-[58px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[29px] text-[#47567b] text-[14px] text-center text-nowrap top-[17px] tracking-[0.28px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">4</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ffffff] border-[0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Week9() {
  return (
    <div className="h-[60px] relative shrink-0 w-[410px]" data-name="Week 9">
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
      className="absolute box-border content-stretch flex flex-col h-[300px] items-start justify-start left-[18px] p-0 top-[107px] w-[404px]"
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

function BaseButton() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Manage Availability</p>
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
      className="absolute box-border content-stretch flex h-9 items-center justify-center left-1/2 p-0 top-[420px] translate-x-[-50%]"
      data-name="Button"
    >
      <BaseButton />
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
            stroke="var(--stroke-0, #CCD7E6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
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

function Frame127() {
  return (
    <div className="absolute box-border content-stretch flex gap-[85px] items-center justify-start left-[38px] p-0 top-[65px]">
      <ChevronLeft />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">September 2023</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px]">
        <p className="block leading-[1.5]">My Calendar</p>
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
      <Top />
    </div>
  );
}

function PageHeader() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-10 p-0 top-4 w-[353px]"
      data-name="Page Header"
    >
      <MainHeader />
    </div>
  );
}

function Calendar() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[480px] overflow-clip rounded-2xl top-28 w-[440px]"
      data-name="Calendar"
      style={{ left: "calc(66.667% - 1px)" }}
    >
      <Month />
      <Button />
      <Frame127 />
      <PageHeader />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bottom-[-1.02%] box-border content-stretch flex font-['Literata:Light',_sans-serif] font-light items-center justify-between leading-[0] left-[10.56%] p-0 right-0 text-[#47567b] text-[14px] text-nowrap top-[91.79%] tracking-[0.28px] uppercase">
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">AUG</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">SEP</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">OCT</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">NOV</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">DEC</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">JAN</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">FEB</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">MAR</p>
      </div>
    </div>
  );
}

function ChartGraphic() {
  return (
    <div className="absolute bottom-[-1.02%] contents left-[10.56%] right-0 top-[2.64%]" data-name="chart-graphic">
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_87.17%_12.47%_12.52%]" />
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_75.17%_12.47%_24.52%]" />
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_63.18%_12.47%_36.51%]" />
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_51.18%_12.47%_48.51%]" />
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_39.19%_12.47%_60.5%]" />
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_27.19%_12.47%_72.5%]" />
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_15.2%_12.47%_84.49%]" />
      <div className="absolute bg-[#f3f3f3] inset-[2.64%_3.2%_12.47%_96.49%]" />
      <Frame13 />
    </div>
  );
}

function Tooltips() {
  return (
    <div
      className="absolute bg-[#47567b] box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip px-3 py-[7px] rounded translate-x-[-50%] translate-y-[-50%]"
      data-name="tooltips"
      style={{ top: "calc(50% + 47.5px)", left: "calc(50% - 86.829px)" }}
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">$0</p>
      </div>
    </div>
  );
}

function ChartGraphic1() {
  return (
    <div className="absolute inset-[9.67%_4.54%_9.67%_-8.35%]" data-name="chart-graphic">
      <ChartGraphic />
      <div className="absolute flex inset-[85.61%_3.05%_13.95%_15.46%] items-center justify-center">
        <div className="flex-none h-px scale-y-[-100%] w-[324px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-1000%_-3.09%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 21">
                <path
                  d={svgPaths.p377ca600}
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
      <div className="absolute flex inset-[89.13%_3.55%_10.87%_15.46%] items-center justify-center">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-2.91px_-0.9%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 6">
                <path
                  d={svgPaths.p59bbbf0}
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
      <div className="absolute inset-[85.61%_70.71%_7.35%_25.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, #47567B)"
            id="Ellipse 41"
            r="7"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Tooltips />
    </div>
  );
}

function CardBody() {
  return (
    <div className="absolute h-[282px] left-[201.5px] overflow-clip top-[-8px] w-[383px]" data-name="card-body">
      <ChartGraphic1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#ffffff] h-[289px] left-0 overflow-clip rounded-[20px] top-0 w-[670px]">
      <div className="absolute font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] left-10 text-[#47567b] text-[32px] text-nowrap top-[66px]">
        <p className="block leading-[1.5] whitespace-pre">$0</p>
      </div>
      <CardBody />
    </div>
  );
}

function Top1() {
  return (
    <div
      className="box-border content-stretch flex gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px]">
        <p className="block leading-[1.5]">Revenue</p>
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

function PageHeader1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-10 p-0 top-5 w-[353px]"
      data-name="Page Header"
    >
      <MainHeader1 />
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame14 />
      <PageHeader1 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="absolute h-[289px] overflow-clip top-[980px] w-[660px]" style={{ left: "calc(16.667% + 31px)" }}>
      <Group123 />
    </div>
  );
}

function Chart() {
  return (
    <div
      className="box-border content-stretch flex items-end justify-between p-0 relative shrink-0 w-full"
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
      className="box-border content-stretch flex font-['Literata:Light',_sans-serif] font-light items-end justify-between leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px] uppercase w-full"
      data-name="years"
    >
      <div className="h-[21.936px] relative shrink-0 w-[39.906px]">
        <p className="adjustLetterSpacing block leading-[1.5]">AUG</p>
      </div>
      <div className="h-[21.936px] relative shrink-0 w-[39.906px]">
        <p className="adjustLetterSpacing block leading-[1.5]">SEP</p>
      </div>
      <div className="h-[21.936px] relative shrink-0 w-[39.906px]">
        <p className="adjustLetterSpacing block leading-[1.5]">OCT</p>
      </div>
      <div className="h-[21.936px] relative shrink-0 w-[39.906px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Nov</p>
      </div>
      <div className="h-[21.936px] relative shrink-0 w-[39.906px]">
        <p className="adjustLetterSpacing block leading-[1.5]">DEC</p>
      </div>
    </div>
  );
}

function ChartGraphic2() {
  return (
    <div
      className="absolute bottom-[27.23%] box-border content-stretch flex flex-col gap-2.5 items-start justify-end overflow-clip p-0 top-[28.11%] translate-x-[-50%] w-[370.259px]"
      data-name="chart-graphic"
      style={{ left: "calc(50% + 0.001px)" }}
    >
      <Chart />
      <Years />
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Manage My Services</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-center left-1/2 p-0 top-[403px] translate-x-[-50%]"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="absolute box-border content-stretch flex gap-2 items-center justify-start left-10 p-0 top-[70px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">
          <span className="text-[#2e7684]">0</span>
          <span className="adjustLetterSpacing">{` Services`}</span>
        </p>
      </div>
      <div className="flex h-[24.5px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[24.5px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                <line id="Line 10" stroke="var(--stroke-0, #47567B)" x2="24.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">
          <span className="text-[#2e7684]">0</span>
          <span className="adjustLetterSpacing">{` total views this month`}</span>
        </p>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div
      className="box-border content-stretch flex gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px]">
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
      <Top2 />
    </div>
  );
}

function PageHeader2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-10 p-0 top-5 w-[353px]"
      data-name="Page Header"
    >
      <MainHeader2 />
    </div>
  );
}

function Frame11943() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[459px] overflow-clip rounded-[20px] top-[625px] translate-x-[-50%] w-[440px]"
      style={{ left: "calc(83.333% - 21px)" }}
    >
      <div
        className="absolute font-['Literata:Medium',_sans-serif] font-medium leading-[0] text-[#47567b] text-[14px] text-nowrap top-[350px] tracking-[0.28px]"
        style={{ left: "calc(50% - 40.5px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Total views</p>
      </div>
      <ChartGraphic2 />
      <Button1 />
      <Frame128 />
      <PageHeader2 />
    </div>
  );
}

function Bookings() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[285px] leading-[0] overflow-clip rounded-[20px] top-[675px] w-[669px]"
      data-name="bookings"
      style={{ left: "calc(16.667% + 30px)" }}
    >
      <div className="absolute font-['Literata:SemiBold',_sans-serif] font-semibold left-10 text-[#2e7684] text-[20px] top-5 w-[590px]">
        <p className="block leading-[1.5]">New Bookings</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal left-[189px] text-[#000000] text-[14px] text-nowrap top-[143px] tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{`You don’t have any bookings to confirm. `}</p>
      </div>
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
            stroke="var(--stroke-0, #F5F5F5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BadgeFpo() {
  return (
    <div
      className="bg-[#1d576b] box-border content-stretch flex flex-col items-start justify-start px-2 py-0 relative rounded shrink-0"
      data-name="Badge - FPO"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function RightContent1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-end p-0 relative shrink-0"
      data-name="Right Content"
    >
      <BadgeFpo />
    </div>
  );
}

function BaseLeftNavItem() {
  return (
    <div
      className="basis-0 bg-[#2e7684] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Home />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-100 tracking-[0.28px]">
            <p className="block leading-[1.5]">Dashboard</p>
          </div>
          <RightContent1 />
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

function Calendar1() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
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

function BaseLeftNavItem1() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Calendar1 />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Availability</p>
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

function Breadcrumb3() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-2 items-center justify-start left-5 p-0 top-0 w-[648px]"
      data-name="Breadcrumb"
    >
      <div className="font-['Jost:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[12px] text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Welcome Ted Lasso!</p>
      </div>
    </div>
  );
}

function Top3() {
  return (
    <div
      className="box-border content-stretch flex gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[32px]">
        <p className="block leading-[1.5]">0/4 steps completed</p>
      </div>
    </div>
  );
}

function MainHeader3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-0.5 items-start justify-start left-5 p-0 top-[22px] w-[648px]"
      data-name="Main Header"
    >
      <Top3 />
    </div>
  );
}

function Top4() {
  return (
    <div
      className="box-border content-stretch flex gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
        <p className="block leading-[1.5]">{`Once your profile is complete customers can book you. `}</p>
      </div>
    </div>
  );
}

function MainHeader4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-0.5 items-start justify-start left-5 p-0 top-[74px] w-[648px]"
      data-name="Main Header"
    >
      <Top4 />
    </div>
  );
}

function PageHeader3() {
  return (
    <div className="h-[95px] relative shrink-0 w-[648px]" data-name="Page Header">
      <Breadcrumb3 />
      <MainHeader3 />
      <MainHeader4 />
    </div>
  );
}

function Illustration() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Illustration">
          <path d={svgPaths.p1d3de700} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Illustration1() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="illustration">
      <div className="box-border content-stretch flex gap-3 items-start justify-start overflow-clip p-[8px] relative">
        <Illustration />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]"
      data-name="text"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Create your listing</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Create your listing and add services</p>
      </div>
    </div>
  );
}

function IlloText() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-4 items-center justify-start left-5 p-0 top-0 w-[434px]"
      data-name="illo+text"
    >
      <Illustration1 />
      <Text />
    </div>
  );
}

function BaseButton2() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Create listing</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-start left-[490px] p-0 top-[13px]"
      data-name="Button"
    >
      <BaseButton2 />
    </div>
  );
}

function Availability() {
  return (
    <div className="absolute h-[62px] left-[-20px] top-2.5 w-[634px]" data-name="availability">
      <IlloText />
      <Button2 />
    </div>
  );
}

function Services() {
  return (
    <div className="absolute h-[82px] left-5 top-0 w-[589px]" data-name="Services">
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0"
      />
      <Availability />
    </div>
  );
}

function Illustration2() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Illustration">
          <path d={svgPaths.p1d3de700} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Illustration3() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="illustration">
      <div className="box-border content-stretch flex gap-3 items-start justify-start overflow-clip p-[8px] relative">
        <Illustration2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]"
      data-name="text"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Set your availability</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`Set your availability so people can book you. `}</p>
      </div>
    </div>
  );
}

function IlloText1() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-4 items-center justify-start left-5 p-0 top-0 w-[421px]"
      data-name="illo+text"
    >
      <Illustration3 />
      <Text1 />
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Set Availability</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-start left-[477px] p-0 top-[13px]"
      data-name="Button"
    >
      <BaseButton3 />
    </div>
  );
}

function Availability1() {
  return (
    <div className="absolute h-[62px] left-[-20px] top-2.5 w-[634px]" data-name="availability">
      <IlloText1 />
      <Button3 />
    </div>
  );
}

function Availability2() {
  return (
    <div className="absolute h-[82px] left-5 top-[94px] w-[589px]" data-name="availability">
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0"
      />
      <Availability1 />
    </div>
  );
}

function Illustration4() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Illustration">
          <path d={svgPaths.p1d3de700} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Illustration5() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="illustration">
      <div className="box-border content-stretch flex gap-3 items-start justify-start overflow-clip p-[8px] relative">
        <Illustration4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Text2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]"
      data-name="text"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Bank account and tax information</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">We’ll use stripe to verify your information</p>
      </div>
    </div>
  );
}

function IlloText2() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-4 items-center justify-start left-5 p-0 top-0 w-[424px]"
      data-name="illo+text"
    >
      <Illustration5 />
      <Text2 />
    </div>
  );
}

function BaseButton4() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Add Bank Info</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-start left-[480px] p-0 top-[13px]"
      data-name="Button"
    >
      <BaseButton4 />
    </div>
  );
}

function Availability3() {
  return (
    <div className="absolute h-[62px] left-[-20px] top-2.5 w-[634px]" data-name="availability">
      <IlloText2 />
      <Button4 />
    </div>
  );
}

function BankAccount() {
  return (
    <div className="absolute h-[82px] left-5 top-[188px] w-[589px]" data-name="bank account">
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0"
      />
      <Availability3 />
    </div>
  );
}

function Illustration6() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Illustration">
          <path d={svgPaths.p1d3de700} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Illustration7() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="illustration">
      <div className="box-border content-stretch flex gap-3 items-start justify-start overflow-clip p-[8px] relative">
        <Illustration6 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]"
      data-name="text"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Finalize your bio</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 w-[523.103px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Finalize your listing bio</p>
      </div>
    </div>
  );
}

function IlloText3() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-4 items-center justify-start left-5 p-0 top-0 w-[446px]"
      data-name="illo+text"
    >
      <Illustration7 />
      <Text3 />
    </div>
  );
}

function BaseButton5() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Update Bio</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-start left-[502px] p-0 top-[13px]"
      data-name="Button"
    >
      <BaseButton5 />
    </div>
  );
}

function Availability4() {
  return (
    <div className="absolute h-[62px] left-[-20px] top-2.5 w-[634px]" data-name="availability">
      <IlloText3 />
      <Button5 />
    </div>
  );
}

function Bio() {
  return (
    <div className="absolute h-[82px] left-5 top-[282px] w-[589px]" data-name="Bio">
      <div aria-hidden="true" className="absolute border-0 border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <Availability4 />
    </div>
  );
}

function Everything() {
  return (
    <div className="h-[364px] relative shrink-0 w-[634px]" data-name="everything">
      <Services />
      <Availability2 />
      <BankAccount />
      <Bio />
    </div>
  );
}

function StartedGuide() {
  return (
    <div className="bg-[#ffffff] relative rounded-[20px] shrink-0 w-full" data-name="Started guide">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-11 items-start justify-start p-[20px] relative w-full">
          <PageHeader3 />
          <Everything />
        </div>
      </div>
    </div>
  );
}

function Frame11948() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 top-28 w-[669px]"
      style={{ left: "calc(16.667% + 31px)" }}
    >
      <StartedGuide />
    </div>
  );
}

export default function VendorDashboard() {
  return (
    <div className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full" data-name="Vendor Dashboard">
      <GlobalHeaderVendorAdmin />
      <Logo />
      <Calendar />
      <Frame124 />
      <Frame11943 />
      <Bookings />
      <SideBar />
      <Frame11948 />
    </div>
  );
}