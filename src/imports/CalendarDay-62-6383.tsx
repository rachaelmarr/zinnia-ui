function Frame11957() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">14</p>
      </div>
    </div>
  );
}

export default function CalendarDay() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Calendar day">
      <div className="relative size-full">
        <div className="absolute flex h-[109.999px] items-center justify-center left-px top-[2.5px] w-[109.999px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[155.563px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="155.563" y1="0.5" y2="0.5" />
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