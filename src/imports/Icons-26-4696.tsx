import svgPaths from "./svg-o1c4660cnp";

function Layer2() {
  return (
    <div
      className="absolute bottom-[21.431%] left-[27.103%] right-[48.685%] top-[52.307%]"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 44 48"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p36183200}
            fill="var(--fill-0, #DC332E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div
      className="absolute bottom-[10.731%] left-[7.987%] right-[11.745%] top-[17.84%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 146 130"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p3db2b480}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[10.731%] contents left-[7.987%] right-[11.745%] top-[17.84%]">
      <Layer2 />
      <Layer1 />
    </div>
  );
}

function Illustration() {
  return (
    <div
      className="absolute left-[11.5px] overflow-clip size-[181px] top-2"
      data-name="Illustration"
    >
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
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-12 items-start justify-start left-[60px] p-0 rounded-[300px] size-[203px] top-[156px]">
      <div className="absolute border-[#47567b] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <Frame7 />
    </div>
  );
}

function Layer3() {
  return (
    <div
      className="absolute bottom-[47.798%] left-[38.638%] right-[41.315%] top-[14.642%]"
      data-name="Layer_2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 53 99"
      >
        <g id="Layer_2">
          <path
            d={svgPaths.p3d38cd00}
            fill="var(--fill-0, #DC332E)"
            id="Vector"
          />
          <path
            d={svgPaths.p23966280}
            fill="var(--fill-0, #DC332E)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p37a93b00}
            fill="var(--fill-0, #DC332E)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Layer4() {
  return (
    <div
      className="absolute bottom-[16.125%] left-[7.987%] right-[7.992%] top-[16.121%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 220 177"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p1de8e400}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Illustration1() {
  return (
    <div
      className="absolute left-[-29px] overflow-clip size-[261px] top-[-29px]"
      data-name="Illustration"
    >
      <Layer3 />
      <Layer4 />
    </div>
  );
}

function CoupleHover() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[290px] rounded-[300px] size-[203px] top-[164px]"
      data-name="Couple/hover"
    >
      <div className="overflow-clip relative size-[203px]">
        <Illustration1 />
      </div>
      <div className="absolute border-[#47567b] border-[3px] border-solid inset-0 pointer-events-none rounded-[300px]" />
    </div>
  );
}

export default function Icons() {
  return (
    <div className="bg-[#ccd7e6] relative size-full" data-name="Icons">
      <div className="absolute font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] left-[60px] text-[#000000] text-[24px] text-left text-nowrap top-[60px]">
        <p className="block leading-[1.5] whitespace-pre">{`Here are the selected / hover version of the icons. `}</p>
      </div>
      <Frame8 />
      <CoupleHover />
    </div>
  );
}