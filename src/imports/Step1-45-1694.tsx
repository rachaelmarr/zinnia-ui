import svgPaths from "./svg-hw3yknuja4";

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
            d={svgPaths.p3891bf00}
            fill="var(--fill-0, #667593)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, #667593)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p961bd00}
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
          <path
            d={svgPaths.p3891bf00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p2041bb70}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p961bd00}
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
      {[...Array(3).keys()].map((_, i) => (
        <TimelineStep1 key={i} />
      ))}
    </div>
  );
}

function Group159() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Timeline />
      <div className="[grid-area:1_/_1] flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center ml-[13.3px] mt-[37.5px] relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px] translate-y-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Step 1 of 4: ADD PHOTOS
        </p>
      </div>
    </div>
  );
}

export default function Step1() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="step1">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[20px] relative size-full">
          <Group159 />
        </div>
      </div>
    </div>
  );
}