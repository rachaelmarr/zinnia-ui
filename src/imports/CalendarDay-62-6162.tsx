import svgPaths from "./svg-n9dpj63hyn";

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

function Wedding() {
  return (
    <div
      className="absolute bg-[#2e7684] h-10 overflow-clip rounded-xl top-9 translate-x-[-50%] w-[108px]"
      data-name="wedding"
      style={{ left: "calc(50% + 0.428px)" }}
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

export default function CalendarDay() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Calendar day">
      <div className="relative size-full">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">23</p>
        </div>
        <Wedding />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#47567b] border-solid inset-0 pointer-events-none" />
    </div>
  );
}