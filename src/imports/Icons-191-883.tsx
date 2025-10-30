import svgPaths from "./svg-o7v90jecmg";

function Layer2() {
  return (
    <div className="absolute inset-[52.31%_48.69%_21.43%_27.1%]" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 48">
        <g id="Layer_2">
          <path d={svgPaths.p36183200} fill="var(--fill-0, #DC332E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute inset-[17.84%_11.74%_10.73%_7.99%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 130">
        <g id="Layer_1">
          <path d={svgPaths.p3db2b480} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[17.84%_11.74%_10.73%_7.99%]">
      <Layer2 />
      <Layer1 />
    </div>
  );
}

function Illustration() {
  return (
    <div className="absolute left-[11.5px] overflow-clip size-[181px] top-2" data-name="Illustration">
      <Group1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[230px]">
      <Illustration />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-white content-stretch flex gap-12 items-start justify-start left-[60px] rounded-[300px] size-[203px] top-[156px]">
      <div aria-hidden="true" className="absolute border-[#47567b] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <Frame7 />
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute inset-[14.64%_41.31%_47.8%_38.64%]" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 99">
        <g id="Layer_2">
          <path d={svgPaths.p3d38cd00} fill="var(--fill-0, #DC332E)" id="Vector" />
          <path d={svgPaths.p23966280} fill="var(--fill-0, #DC332E)" id="Vector_2" />
          <path d={svgPaths.p37a93b00} fill="var(--fill-0, #DC332E)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Layer4() {
  return (
    <div className="absolute inset-[16.12%_7.99%_16.13%_7.99%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 177">
        <g id="Layer_1">
          <path d={svgPaths.p1de8e400} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Illustration1() {
  return (
    <div className="absolute left-[-29px] overflow-clip size-[261px] top-[-29px]" data-name="Illustration">
      <Layer3 />
      <Layer4 />
    </div>
  );
}

function CoupleHover() {
  return (
    <div className="absolute bg-white left-[290px] rounded-[300px] size-[203px] top-[164px]" data-name="Couple/hover">
      <div className="overflow-clip relative size-[203px]">
        <Illustration1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#47567b] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
    </div>
  );
}

export default function Icons() {
  return (
    <div className="bg-[#ccd7e6] relative size-full" data-name="Icons">
      <div className="absolute font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] left-[60px] text-[24px] text-black text-nowrap top-[60px]">
        <p className="leading-[1.5] whitespace-pre">{`Here are the selected / hover version of the icons. `}</p>
      </div>
      <Frame8 />
      <CoupleHover />
    </div>
  );
}