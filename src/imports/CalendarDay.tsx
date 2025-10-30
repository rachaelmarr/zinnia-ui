import svgPaths from "./svg-tqy3jjq3f3";

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
      className="absolute bg-neutral-400 h-[38px] overflow-clip rounded-xl top-[37px] translate-x-[-50%] w-[108px]"
      data-name="wedding"
      style={{ left: "calc(50% + 0.428px)" }}
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

export default function CalendarDay() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Calendar day">
      <div className="relative size-full">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">27</p>
        </div>
        <Wedding />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}