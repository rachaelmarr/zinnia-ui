import svgPaths from "./svg-e3csbmu4ms";

function BaseButton() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
          <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
            <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Back</p>
          </div>
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
      className="box-border content-stretch flex h-[37px] items-center justify-center p-0 relative shrink-0 w-[164px]"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function BaseButton1() {
  return (
    <div
      className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
          <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
            <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex h-[37px] items-center justify-start p-0 relative shrink-0 w-[164px]"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start left-[-10.5px] overflow-clip px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-[1450px]">
      <Frame9 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-[1392px] size-6 top-6" data-name="x">
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

function Layer2() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, #667593)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, #667593)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, #667593)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, #667593)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer2 />
      <Layer1 />
    </div>
  );
}

function TimelineStepDefault() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="1">
          <li className="ms-[21px]">
            <span className="adjustLetterSpacing leading-[1.5]">Create Listing</span>
          </li>
        </ol>
      </div>
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
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer4() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo1() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer3 />
      <Layer4 />
    </div>
  );
}

function TimelineStepDefault1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo1 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="2">
          <li className="ms-[21px]">
            <span className="adjustLetterSpacing leading-[1.5]">Add Services</span>
          </li>
        </ol>
      </div>
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

function Layer5() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer6() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo2() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer5 />
      <Layer6 />
    </div>
  );
}

function TimelineStepDefault2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo2 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="3">
          <li className="ms-[21px]">
            <span className="adjustLetterSpacing leading-[1.5]">Confirm</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault2 />
    </div>
  );
}

function Timeline() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[100px] items-start justify-start p-0 top-[60px] translate-x-[-50%]"
      data-name="Timeline"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <TimelineStep />
      <TimelineStep1 />
      <TimelineStep2 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b]">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-center w-[440px]">
        <p className="block leading-[1.5]">Create your business listing</p>
      </div>
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium relative shrink-0 text-[14px] tracking-[0.28px] w-[440px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`Your listing is a larger page that groups your services together. This is what prospective clients will see when they search for services. `}</p>
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div
      className="absolute size-[60px] translate-x-[-50%] translate-y-[-50%]"
      data-name="camera"
      style={{ top: "calc(50% - 50px)", left: "calc(50% - 0.5px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="camera">
          <path
            d={svgPaths.p3e629780}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p307dbb00}
            id="Vector_2"
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

function PhotoOne() {
  return (
    <div className="absolute bg-[#ccd7e6] h-[382px] left-[-2px] overflow-clip top-px w-[679px]" data-name="Photo one">
      <Camera />
    </div>
  );
}

function Camera1() {
  return (
    <div
      className="absolute size-[60px] translate-x-[-50%] translate-y-[-50%]"
      data-name="camera"
      style={{ top: "calc(50% - 21.5px)", left: "calc(50% - 0.5px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="camera">
          <path
            d={svgPaths.p3e629780}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p307dbb00}
            id="Vector_2"
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

function BaseButton2() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Add a photo</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-center left-[102px] p-0 top-[204px]"
      data-name="Button"
    >
      <BaseButton2 />
    </div>
  );
}

function PhotoOne1() {
  return (
    <div className="absolute bg-[#ccd7e6] h-[383px] left-1.5 overflow-clip top-[399px] w-[325px]" data-name="Photo one">
      <Camera1 />
      <Button2 />
    </div>
  );
}

function Camera2() {
  return (
    <div
      className="absolute left-1/2 size-[60px] translate-x-[-50%] translate-y-[-50%]"
      data-name="camera"
      style={{ top: "calc(50% - 22.5px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="camera">
          <path
            d={svgPaths.p3e629780}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p307dbb00}
            id="Vector_2"
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

function BaseButton3() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Add a photo</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-center left-[102px] p-0 top-[105px]"
      data-name="Button"
    >
      <BaseButton3 />
    </div>
  );
}

function PhotoOne2() {
  return (
    <div
      className="absolute bg-[#ccd7e6] h-[183px] left-[347px] overflow-clip top-[399px] w-[324px]"
      data-name="Photo one"
    >
      <Camera2 />
      <Button3 />
    </div>
  );
}

function Camera3() {
  return (
    <div
      className="absolute left-1/2 size-[60px] translate-x-[-50%] translate-y-[-50%]"
      data-name="camera"
      style={{ top: "calc(50% - 22.5px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="camera">
          <path
            d={svgPaths.p3e629780}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p307dbb00}
            id="Vector_2"
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

function BaseButton4() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Add a photo</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-center left-[102px] p-0 top-[105px]"
      data-name="Button"
    >
      <BaseButton4 />
    </div>
  );
}

function PhotoOne3() {
  return (
    <div
      className="absolute bg-[#ccd7e6] h-[183px] left-[347px] overflow-clip top-[598px] w-[324px]"
      data-name="Photo one"
    >
      <Camera3 />
      <Button4 />
    </div>
  );
}

function Group144() {
  return (
    <div className="absolute contents left-1.5 top-[399px]">
      <PhotoOne1 />
      <PhotoOne2 />
      <PhotoOne3 />
    </div>
  );
}

function Test() {
  return (
    <div className="absolute bg-[#ffffff] h-[800px] left-0 overflow-clip top-0 w-[677px]" data-name="Test">
      <PhotoOne />
      <Group144 />
    </div>
  );
}

function BaseButton5() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Add a photo</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-center left-[273px] p-0 top-[204px]"
      data-name="Button"
    >
      <BaseButton5 />
    </div>
  );
}

function Photos() {
  return (
    <div className="h-[800px] relative shrink-0 w-[677px]" data-name="photos">
      <Test />
      <Button5 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b]">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-center text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Add photos</p>
      </div>
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium relative shrink-0 text-[0px] tracking-[0.28px] w-[438px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre-wrap">
          <span>
            {`You must have 4 photos to create your listing.  `}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] tracking-[0.28px]">
            We recommend:
          </span>
          <span className="adjustLetterSpacing text-[#47567b]">
            <br aria-hidden="true" />- High quality JPGs or PNGs
            <br aria-hidden="true" />- Natural lighting as much as possible
            <br aria-hidden="true" />- A variety of shots
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0">
      <Photos />
      <Frame143 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[18px] text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Business hours</p>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxBox() {
  return (
    <div
      className="bg-cyan-700 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check />
    </div>
  );
}

function InputContainer() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0"
      data-name="Input Container"
    >
      <CheckboxBox />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-gray-950 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Sunday</p>
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

function TextContainer1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]"
      data-name="Text Container"
    >
      <CoreInputLabel />
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name=".Base - Checkbox">
      <InputContainer />
      <TextContainer1 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">9:00 AM</p>
      </div>
    </div>
  );
}

function ChevronDownFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer3 />
          <ChevronDownFill />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function WrapperHyphen() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Wrapper - Hyphen"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function TextContainer5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill1() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField1() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer5 />
          <ChevronDownFill1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField1 />
    </div>
  );
}

function Clock() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Clock"
    >
      <TextInput1 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
      <TextInput />
      <WrapperHyphen />
      <Clock />
    </div>
  );
}

function Frame146() {
  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      <BaseCheckbox />
      <Frame145 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxBox1() {
  return (
    <div
      className="bg-cyan-700 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check1 />
    </div>
  );
}

function InputContainer1() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0"
      data-name="Input Container"
    >
      <CheckboxBox1 />
    </div>
  );
}

function TextContainer6() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-gray-950 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Monday</p>
      </div>
    </div>
  );
}

function CoreInputLabel3() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer6 />
    </div>
  );
}

function TextContainer7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]"
      data-name="Text Container"
    >
      <CoreInputLabel3 />
    </div>
  );
}

function BaseCheckbox1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name=".Base - Checkbox">
      <InputContainer1 />
      <TextContainer7 />
    </div>
  );
}

function TextContainer9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill2() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField2() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer9 />
          <ChevronDownFill2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField2 />
    </div>
  );
}

function TextInput2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField2 />
    </div>
  );
}

function WrapperHyphen1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Wrapper - Hyphen"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function TextContainer11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill3() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField3() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer11 />
          <ChevronDownFill3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField3 />
    </div>
  );
}

function TextInput3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField3 />
    </div>
  );
}

function Clock1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Clock"
    >
      <TextInput3 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
      <TextInput2 />
      <WrapperHyphen1 />
      <Clock1 />
    </div>
  );
}

function Frame11928() {
  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      <BaseCheckbox1 />
      <Frame147 />
    </div>
  );
}

function CheckboxBox2() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-neutral-500 border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer2() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0"
      data-name="Input Container"
    >
      <CheckboxBox2 />
    </div>
  );
}

function TextContainer12() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ccd7e6] text-[16px] text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Tuesday</p>
      </div>
    </div>
  );
}

function CoreInputLabel6() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer12 />
    </div>
  );
}

function TextContainer13() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]"
      data-name="Text Container"
    >
      <CoreInputLabel6 />
    </div>
  );
}

function BaseCheckbox2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name=".Base - Checkbox">
      <InputContainer2 />
      <TextContainer13 />
    </div>
  );
}

function TextContainer15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ccd7e6] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill4() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #CCD7E6)" id="Vector" stroke="var(--stroke-0, #CCD7E6)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField4() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer15 />
          <ChevronDownFill4 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f1f6fa] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField4 />
    </div>
  );
}

function TextInput4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField4 />
    </div>
  );
}

function WrapperHyphen2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Wrapper - Hyphen"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function TextContainer17() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ccd7e6] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill5() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #CCD7E6)" id="Vector" stroke="var(--stroke-0, #CCD7E6)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField5() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer17 />
          <ChevronDownFill5 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f1f6fa] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField5 />
    </div>
  );
}

function TextInput5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField5 />
    </div>
  );
}

function Clock2() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Clock"
    >
      <TextInput5 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
      <TextInput4 />
      <WrapperHyphen2 />
      <Clock2 />
    </div>
  );
}

function Frame11929() {
  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      <BaseCheckbox2 />
      <Frame148 />
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxBox3() {
  return (
    <div
      className="bg-cyan-700 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check2 />
    </div>
  );
}

function InputContainer3() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0"
      data-name="Input Container"
    >
      <CheckboxBox3 />
    </div>
  );
}

function TextContainer18() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-gray-950 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Wednesday</p>
      </div>
    </div>
  );
}

function CoreInputLabel9() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer18 />
    </div>
  );
}

function TextContainer19() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]"
      data-name="Text Container"
    >
      <CoreInputLabel9 />
    </div>
  );
}

function BaseCheckbox3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name=".Base - Checkbox">
      <InputContainer3 />
      <TextContainer19 />
    </div>
  );
}

function TextContainer21() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill6() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField6() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer21 />
          <ChevronDownFill6 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField6 />
    </div>
  );
}

function TextInput6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField6 />
    </div>
  );
}

function WrapperHyphen3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Wrapper - Hyphen"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function TextContainer23() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill7() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField7() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer23 />
          <ChevronDownFill7 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField7 />
    </div>
  );
}

function TextInput7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField7 />
    </div>
  );
}

function Clock3() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Clock"
    >
      <TextInput7 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
      <TextInput6 />
      <WrapperHyphen3 />
      <Clock3 />
    </div>
  );
}

function Frame11930() {
  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      <BaseCheckbox3 />
      <Frame149 />
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxBox4() {
  return (
    <div
      className="bg-cyan-700 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check3 />
    </div>
  );
}

function InputContainer4() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0"
      data-name="Input Container"
    >
      <CheckboxBox4 />
    </div>
  );
}

function TextContainer24() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-gray-950 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Thursday</p>
      </div>
    </div>
  );
}

function CoreInputLabel12() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer24 />
    </div>
  );
}

function TextContainer25() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]"
      data-name="Text Container"
    >
      <CoreInputLabel12 />
    </div>
  );
}

function BaseCheckbox4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name=".Base - Checkbox">
      <InputContainer4 />
      <TextContainer25 />
    </div>
  );
}

function TextContainer27() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill8() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField8() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer27 />
          <ChevronDownFill8 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField8 />
    </div>
  );
}

function TextInput8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField8 />
    </div>
  );
}

function WrapperHyphen4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Wrapper - Hyphen"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function TextContainer29() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill9() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField9() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer29 />
          <ChevronDownFill9 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField9 />
    </div>
  );
}

function TextInput9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField9 />
    </div>
  );
}

function Clock4() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Clock"
    >
      <TextInput9 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
      <TextInput8 />
      <WrapperHyphen4 />
      <Clock4 />
    </div>
  );
}

function Frame11931() {
  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      <BaseCheckbox4 />
      <Frame150 />
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxBox5() {
  return (
    <div
      className="bg-cyan-700 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check4 />
    </div>
  );
}

function InputContainer5() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0"
      data-name="Input Container"
    >
      <CheckboxBox5 />
    </div>
  );
}

function TextContainer30() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-gray-950 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Friday</p>
      </div>
    </div>
  );
}

function CoreInputLabel15() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer30 />
    </div>
  );
}

function TextContainer31() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]"
      data-name="Text Container"
    >
      <CoreInputLabel15 />
    </div>
  );
}

function BaseCheckbox5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name=".Base - Checkbox">
      <InputContainer5 />
      <TextContainer31 />
    </div>
  );
}

function TextContainer33() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill10() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField10() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer33 />
          <ChevronDownFill10 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField10 />
    </div>
  );
}

function TextInput10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField10 />
    </div>
  );
}

function WrapperHyphen5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Wrapper - Hyphen"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function TextContainer35() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill11() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField11() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer35 />
          <ChevronDownFill11 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField11 />
    </div>
  );
}

function TextInput11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField11 />
    </div>
  );
}

function Clock5() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Clock"
    >
      <TextInput11 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
      <TextInput10 />
      <WrapperHyphen5 />
      <Clock5 />
    </div>
  );
}

function Frame11932() {
  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      <BaseCheckbox5 />
      <Frame151 />
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxBox6() {
  return (
    <div
      className="bg-cyan-700 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check5 />
    </div>
  );
}

function InputContainer6() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-0 pb-0 pt-0.5 px-0 top-0"
      data-name="Input Container"
    >
      <CheckboxBox6 />
    </div>
  );
}

function TextContainer36() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-gray-950 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Saturday</p>
      </div>
    </div>
  );
}

function CoreInputLabel18() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer36 />
    </div>
  );
}

function TextContainer37() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-6 p-0 top-[-3px]"
      data-name="Text Container"
    >
      <CoreInputLabel18 />
    </div>
  );
}

function BaseCheckbox6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114px]" data-name=".Base - Checkbox">
      <InputContainer6 />
      <TextContainer37 />
    </div>
  );
}

function TextContainer39() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill12() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField12() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer39 />
          <ChevronDownFill12 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField12 />
    </div>
  );
}

function TextInput12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField12 />
    </div>
  );
}

function WrapperHyphen6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Wrapper - Hyphen"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function TextContainer41() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2:00 PM</p>
      </div>
    </div>
  );
}

function ChevronDownFill13() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #47567B)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField13() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer41 />
          <ChevronDownFill13 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField13 />
    </div>
  );
}

function TextInput13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[140px]"
      data-name="Text Input"
    >
      <BaseInputField13 />
    </div>
  );
}

function Clock6() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Clock"
    >
      <TextInput13 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-[294px]">
      <TextInput12 />
      <WrapperHyphen6 />
      <Clock6 />
    </div>
  );
}

function Frame11933() {
  return (
    <div className="box-border content-stretch flex gap-8 items-center justify-start p-0 relative shrink-0 w-[440px]">
      <BaseCheckbox6 />
      <Frame152 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <Frame146 />
      <Frame11928 />
      <Frame11929 />
      <Frame11930 />
      <Frame11931 />
      <Frame11932 />
      <Frame11933 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame117 />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[441px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          These are the recurring business hours that you are available. We’ll allow couples to book you during this
          time.
        </p>
      </div>
      <Frame153 />
    </div>
  );
}

function TextContainer42() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor. lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor.lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris aliquam ultrices tempor.
        </p>
      </div>
    </div>
  );
}

function CoreInputField14() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-[271px] ml-0 mt-0 relative rounded-lg w-[440px]"
      data-name=".Core - Input Field"
    >
      <div className="box-border content-stretch flex gap-2 h-[271px] items-start justify-start overflow-clip p-[12px] relative w-[440px]">
        <TextContainer42 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Group113() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <CoreInputField14 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Group113 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[18px] text-center text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Description</p>
      </div>
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[440px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`This is your chance to sell yourself. We recommend you mention how long you’ve been doing weddings and what you love about what you do. `}</p>
      </div>
      <Frame116 />
    </div>
  );
}

function Frame156() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-7 items-center justify-start p-0 top-[200px] translate-x-[-50%]"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <Frame142 />
      <Frame144 />
      <div className="h-0 relative shrink-0 w-[438px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 1">
            <line id="Line 41" stroke="var(--stroke-0, #CCD7E6)" x2="438" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame154 />
      <div className="h-0 relative shrink-0 w-[438px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 1">
            <line id="Line 41" stroke="var(--stroke-0, #CCD7E6)" x2="438" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame155 />
    </div>
  );
}

export default function ListingAndServicesStepOne() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-xl size-full"
      data-name="Listing and services -- Step one"
    >
      <Frame11 />
      <X />
      <Timeline />
      <Frame156 />
    </div>
  );
}