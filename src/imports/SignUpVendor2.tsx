import svgPaths from "./svg-r7isaca6s3";

function Frame8() {
  return <div className="h-9 shrink-0 w-[471px]" />;
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-center justify-start relative shrink-0 w-[466px]">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center justify-center left-1/2 top-[190px] translate-x-[-50%]">
      <Frame110 />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-9 items-center justify-center relative shrink-0" data-name="Button">
      <BaseButton />
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
          <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
            <p className="leading-[1.5] whitespace-pre">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[37px] items-center justify-start relative shrink-0 w-[164px]" data-name="Button">
      <BaseButton1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start left-0 overflow-clip px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-[1440px]">
      <Frame9 />
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, #CCD7E6)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, #CCD7E6)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, #CCD7E6)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, #CCD7E6)" id="Vector_4" />
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
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="1">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Get Started</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault />
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, #CCD7E6)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, #CCD7E6)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, #CCD7E6)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, #CCD7E6)" id="Vector_4" />
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
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo1 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="2">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Vendor type</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault1 />
    </div>
  );
}

function Layer5() {
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
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo2 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="3">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Business info</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault2 />
    </div>
  );
}

function Layer7() {
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

function Layer8() {
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

function TimelineIllo3() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer7 />
      <Layer8 />
    </div>
  );
}

function TimelineStepDefault3() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0" data-name="Timeline Step/Default">
      <TimelineIllo3 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="4">
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Create account</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Timeline Step">
      <TimelineStepDefault3 />
    </div>
  );
}

function Timeline() {
  return (
    <div className="absolute content-stretch flex h-[100px] items-start justify-start left-1/2 top-[60px] translate-x-[-50%]" data-name="Timeline">
      <TimelineStep />
      <TimelineStep1 />
      <TimelineStep2 />
      <TimelineStep3 />
    </div>
  );
}

function LoginAndTerms() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0 w-[468px]" data-name=".Login and Terms">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px] w-full">
        <p className="leading-[1.5]">All fields are required.</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-[471px]">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[24px] text-center w-[471px]">
        <p className="leading-[1.5]">Tell us about your business</p>
      </div>
      <LoginAndTerms />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Your first name</p>
      </div>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">lindawedding.com</p>
      </div>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel />
      <CoreInputField />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[469px]" data-name="Text Input">
      <BaseInputField />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Your last name</p>
      </div>
    </div>
  );
}

function CoreInputLabel1() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">lindawedding.com</p>
      </div>
    </div>
  );
}

function CoreInputField1() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel1 />
      <CoreInputField1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[469px]" data-name="Text Input">
      <BaseInputField1 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Business name</p>
      </div>
    </div>
  );
}

function CoreInputLabel2() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer4 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Linda’s Wedding Photography</p>
      </div>
    </div>
  );
}

function CoreInputField2() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel2 />
      <CoreInputField2 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[469px]" data-name="Text Input">
      <BaseInputField2 />
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Website</p>
      </div>
    </div>
  );
}

function CoreInputLabel3() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer6 />
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">lindawedding.com</p>
      </div>
    </div>
  );
}

function CoreInputField3() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField3() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel3 />
      <CoreInputField3 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[469px]" data-name="Text Input">
      <BaseInputField3 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <TextInput3 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Business Address</p>
      </div>
    </div>
  );
}

function CoreInputLabel4() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer8 />
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">613 Train Street</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p99f0820} id="Vector" stroke="var(--stroke-0, #667593)" strokeLinecap="round" strokeLinejoin="round" />
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
          <TextContainer9 />
          <Search />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField4() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel4 />
      <CoreInputField4 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[469px]" data-name="Text Input">
      <BaseInputField4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0">
      <TextInput4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Instagram</p>
      </div>
    </div>
  );
}

function CoreInputLabel5() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer10 />
    </div>
  );
}

function AtSymbolFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="at-symbol-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="at-symbol-fill">
          <path d={svgPaths.p2e9cad00} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #667593)" />
        </g>
      </svg>
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Handle</p>
      </div>
    </div>
  );
}

function CoreInputField5() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <AtSymbolFill />
          <TextContainer11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField5() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel5 />
      <CoreInputField5 />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[469px]" data-name="Text Input">
      <BaseInputField5 />
    </div>
  );
}

function Frame11944() {
  return (
    <div className="content-stretch flex flex-col gap-4 h-[445px] items-start justify-start relative shrink-0">
      <Frame121 />
      <Frame13 />
      <TextInput5 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="absolute content-stretch flex flex-col gap-4 h-[547px] items-start justify-start top-[190px]" style={{ left: "calc(33.333% + 5px)" }}>
      <Frame12 />
      <Frame11944 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute size-6 top-6" data-name="x" style={{ left: "calc(91.667% + 72px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M6 6L18 18M6 18L18 6L6 18Z" id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function SignUpVendor2() {
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-xl size-full" data-name="Sign Up - Vendor 2">
      <Frame10 />
      <Frame11 />
      <Timeline />
      <Frame122 />
      <X />
    </div>
  );
}