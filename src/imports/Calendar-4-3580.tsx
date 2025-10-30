import svgPaths from "./svg-ik3zcn299n";

function LocationMarker() {
  return (
    <div className="relative shrink-0 size-6" data-name="location-marker">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="location-marker">
          <path
            d={svgPaths.p356cbf00}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p2acb45a2}
            id="Vector_2"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          The Garden Loft
        </p>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Jess + Ryan wedding</p>
      </div>
      <div
        className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">3:00 PM - 11:00 PM</p>
      </div>
      <Frame129 />
      <div
        className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Booked by: jess@gmail.com</p>
      </div>
    </div>
  );
}

export default function Calendar() {
  return (
    <div className="bg-purple-100 relative size-full" data-name="Calendar">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-center p-[12px] relative size-full">
          <Frame130 />
        </div>
      </div>
    </div>
  );
}