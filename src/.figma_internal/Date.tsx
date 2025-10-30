function Group129() {
  return (
    <div className="absolute contents font-semibold leading-[0] left-3 text-[#ccd7e6] text-center text-nowrap top-3 uppercase">
      <div className="absolute font-['Montserrat:SemiBold',_sans-serif] left-[30.5px] text-[12px] top-3 tracking-[0.48px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          Sat
        </p>
      </div>
      <div className="absolute font-['Literata:SemiBold',_sans-serif] left-[30.5px] text-[32px] top-[26px] tracking-[1.28px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          28
        </p>
      </div>
    </div>
  );
}

export default function Date() {
  return (
    <div
      className="bg-neutral-50 relative rounded-lg size-full"
      data-name="Date"
    >
      <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group129 />
      <div className="absolute flex h-[74.999px] items-center justify-center left-[7px] top-[7px] w-[44px]">
        <div className="flex-none rotate-[59.601deg]">
          <div className="h-0 relative w-[86.954px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 87 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #CCD7E6)"
                  x2="86.954"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}