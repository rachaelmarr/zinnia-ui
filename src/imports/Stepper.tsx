import svgPaths from "./svg-f0v1fij1k5";

function Layer2() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p586dc60}
            fill="var(--fill-0, #667593)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #667593)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, #667593)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, #667593)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer2 />
      <Layer1 />
    </div>
  );
}

function TimelineStepDefault() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo />
    </div>
  );
}

function TimelineStep() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault />
    </div>
  );
}

function Layer3() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path d={svgPaths.p586dc60} fill="var(--fill-0, white)" id="Vector" />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer4() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo1() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer3 />
      <Layer4 />
    </div>
  );
}

function TimelineStepDefault1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo1 />
    </div>
  );
}

function TimelineStep1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault1 />
    </div>
  );
}

function Timeline() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row h-[15px] items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Timeline"
    >
      <TimelineStep />
      {[...Array(4).keys()].map((_, i) => (
        <TimelineStep1 key={i} />
      ))}
    </div>
  );
}

function Group158() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Timeline />
      <div className="[grid-area:1_/_1] flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center ml-[39px] mt-[37.5px] relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px] translate-y-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Step 1 of 4: ADD PHOTOS
        </p>
      </div>
    </div>
  );
}

function Layer11() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p586dc60}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer12() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo5() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer11 />
      <Layer12 />
    </div>
  );
}

function TimelineStepDefault5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo5 />
    </div>
  );
}

function TimelineStep5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault5 />
    </div>
  );
}

function Layer13() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p586dc60}
            fill="var(--fill-0, #667593)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #667593)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, #667593)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, #667593)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer14() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo6() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer13 />
      <Layer14 />
    </div>
  );
}

function TimelineStepDefault6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo6 />
    </div>
  );
}

function TimelineStep6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault6 />
    </div>
  );
}

function Layer15() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path d={svgPaths.p586dc60} fill="var(--fill-0, white)" id="Vector" />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer16() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo7() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer15 />
      <Layer16 />
    </div>
  );
}

function TimelineStepDefault7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo7 />
    </div>
  );
}

function TimelineStep7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault7 />
    </div>
  );
}

function Timeline1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[15px] items-start justify-start p-0 relative shrink-0"
      data-name="Timeline"
    >
      <TimelineStep5 />
      <TimelineStep6 />
      {[...Array(2).keys()].map((_, i) => (
        <TimelineStep7 key={i} />
      ))}
    </div>
  );
}

function Frame154() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0 w-[214px]">
      <Timeline1 />
      <div
        className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] uppercase"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Step 2 of 4: Business hours</p>
      </div>
    </div>
  );
}

function Layer19() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p586dc60}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer20() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo9() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer19 />
      <Layer20 />
    </div>
  );
}

function TimelineStepDefault9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo9 />
    </div>
  );
}

function TimelineStep9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault9 />
    </div>
  );
}

function Layer23() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p586dc60}
            fill="var(--fill-0, #667593)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #667593)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, #667593)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, #667593)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer24() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo11() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer23 />
      <Layer24 />
    </div>
  );
}

function TimelineStepDefault11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo11 />
    </div>
  );
}

function TimelineStep11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault11 />
    </div>
  );
}

function Layer25() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path d={svgPaths.p586dc60} fill="var(--fill-0, white)" id="Vector" />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer26() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo12() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer25 />
      <Layer26 />
    </div>
  );
}

function TimelineStepDefault12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo12 />
    </div>
  );
}

function TimelineStep12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault12 />
    </div>
  );
}

function Timeline2() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row h-[15px] items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Timeline"
    >
      {[...Array(2).keys()].map((_, i) => (
        <TimelineStep9 key={i} />
      ))}
      <TimelineStep11 />
      <TimelineStep12 />
    </div>
  );
}

function Group156() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Timeline2 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center ml-[9.3px] mt-[37.5px] relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px] translate-y-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Step 3 of 4: Description
        </p>
      </div>
    </div>
  );
}

function Layer27() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p586dc60}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, #CCD7E6)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer28() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo13() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer27 />
      <Layer28 />
    </div>
  );
}

function TimelineStepDefault13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo13 />
    </div>
  );
}

function TimelineStep13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault13 />
    </div>
  );
}

function Layer33() {
  return (
    <div
      className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 13"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p586dc60}
            fill="var(--fill-0, #667593)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #667593)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34c07280}
            fill="var(--fill-0, #667593)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28a3b5c0}
            fill="var(--fill-0, #667593)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer34() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-[4.03%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 15"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p2080a580}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo16() {
  return (
    <div
      className="h-[15.511px] relative shrink-0 w-[51.4px]"
      data-name="Timeline Illo"
    >
      <Layer33 />
      <Layer34 />
    </div>
  );
}

function TimelineStepDefault16() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5.311px] items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo16 />
    </div>
  );
}

function TimelineStep16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault16 />
    </div>
  );
}

function Timeline3() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row h-[15px] items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Timeline"
    >
      {[...Array(3).keys()].map((_, i) => (
        <TimelineStep13 key={i} />
      ))}
      <TimelineStep16 />
    </div>
  );
}

function Group157() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Timeline3 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center ml-[29.3px] mt-[37.5px] relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px] translate-y-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Step 4 of 4: Service
        </p>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[46px] items-center justify-start left-[50px] p-0 top-[42px]">
      <Group158 />
      <Frame154 />
      <Group156 />
      <Group157 />
    </div>
  );
}

export default function Stepper() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Stepper">
      <Frame159 />
    </div>
  );
}