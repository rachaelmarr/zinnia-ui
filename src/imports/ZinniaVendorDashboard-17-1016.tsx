import svgPaths from "./svg-haolh49eiz";
import imgDecoratedHallWeddingIsReadyCelebration1 from "figma:asset/0ee9d70a8b6f484ef6801ef361ebdff714fe3068.png";
import imgHappyWeddingCoupleComoLakeItaly1 from "figma:asset/cc8399b758ae35654750afd69402f4d84aa054ba.png";
import imgBrideGroomHugKissOutdoorsWeddingDayYoungCoupleWalkPragueValentineSDay1 from "figma:asset/a9ea79898f49abf3c0ff96a2150d45adc3f32646.png";

function MainPhoto() {
  return (
    <div
      className="absolute bg-[#ccd7e6] h-[237px] left-0 rounded top-0 w-[316px]"
      data-name="Main photo"
    />
  );
}

function BaseBadge() {
  return (
    <div
      className="bg-neutral-900 box-border content-stretch flex flex-row gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0"
      data-name=".Base - Badge"
    >
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Main photo</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-0 p-0 top-2"
      data-name="Badge"
    >
      <BaseBadge />
    </div>
  );
}

function Frame145() {
  return (
    <div className="absolute bg-[#ccd7e6] h-[44.581px] left-[-18px] opacity-70 top-[193px] w-[352px]" />
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="pencil">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="pencil">
          <path
            d={svgPaths.p2e5be3f0}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-0 p-[8.129px] rounded-[101.613px] top-0"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Pencil />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="trash">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="trash">
          <path
            d={svgPaths.p3e825d80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-[47.419px] p-[8.129px] rounded-[101.613px] top-0"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Trash />
    </div>
  );
}

function Group145() {
  return (
    <div className="absolute contents left-0 top-0">
      <IconButton />
      <IconButton1 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute h-[37px] left-1/2 overflow-clip top-[196px] translate-x-[-50%] w-[84px]"
      data-name="button"
    >
      <Group145 />
    </div>
  );
}

function Frame2609512() {
  return (
    <div className="absolute bg-[#000000] h-[237px] left-[23px] overflow-clip top-[388px] w-[316px]">
      <MainPhoto />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[262px] left-[-39px] top-0 w-[393px]"
        data-name="decorated-hall-wedding-is-ready-celebration 1"
        style={{
          backgroundImage: `url('${imgDecoratedHallWeddingIsReadyCelebration1}')`,
        }}
      />
      <Badge />
      <Frame145 />
      <Button />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-5" data-name="home">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="home">
          <g id="Vector">
            <path d={svgPaths.pca0a7b1} fill="var(--fill-0, #F5F5F5)" />
            <path
              d={svgPaths.p2d4f9980}
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <Home />
      <div
        className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Home</p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
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

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <Calendar />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Calendar</p>
      </div>
    </div>
  );
}

function ClipboardFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clipboard-fill">
          <path
            d={svgPaths.p18157200}
            fill="var(--fill-0, #47567B)"
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
          />
          <path
            d={svgPaths.p21c86a00}
            fill="var(--fill-0, #F5F5F5)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <ClipboardFill />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[10px] text-center text-neutral-100 tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Listings</p>
      </div>
    </div>
  );
}

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="currency-dollar">
          <path
            d={svgPaths.p12005030}
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

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <CurrencyDollar />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Billing</p>
      </div>
    </div>
  );
}

function ChatAlt2() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat-alt-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chat-alt-2">
          <path
            d={svgPaths.pf3bce40}
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

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <ChatAlt2 />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Clients</p>
      </div>
    </div>
  );
}

function DotsHorizontal() {
  return (
    <div className="relative shrink-0 size-5" data-name="dots-horizontal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="dots-horizontal">
          <path
            d={svgPaths.p32a3d900}
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

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
      <DotsHorizontal />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">More</p>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div
      className="[flex-flow:wrap] absolute bg-neutral-50 bottom-0 box-border content-start flex gap-0 h-[75px] items-start justify-center left-0 p-0 w-[375px]"
      data-name="bottom nav"
    >
      <Frame1 />
      <Frame2 />
      <Frame7 />
      <Frame8 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 143 24"
      >
        <g clipPath="url(#clip0_17_1044)" id="Logo">
          <path
            d={svgPaths.p33702600}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_1044">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0">
      <Logo />
    </div>
  );
}

function LogoContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Logo Container"
    >
      <Frame130 />
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="user-circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="user-circle">
          <path
            d={svgPaths.p221cbb00}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function ActionIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Icons"
    >
      <UserCircle />
    </div>
  );
}

function Icons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 size-10"
      data-name="Icons"
    >
      <ActionIcons />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-[375px]"
      data-name="Header"
    >
      <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoContainer />
      <Icons />
    </div>
  );
}

function Layer2() {
  return (
    <div
      className="absolute bottom-[18.628%] left-[39.883%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <div className="absolute bottom-0 left-[-0.001%] right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 13"
        >
          <g id="Layer_2">
            <path
              d={svgPaths.p39ed1046}
              fill="var(--fill-0, #667593)"
              id="Vector"
            />
            <path
              d={svgPaths.p2041bb70}
              fill="var(--fill-0, #667593)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p1ac5de50}
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
      className="absolute bottom-[18.628%] left-[39.883%] right-[38.05%] top-0"
      data-name="Layer_2"
    >
      <div className="absolute bottom-0 left-[-0.001%] right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 13"
        >
          <g id="Layer_2">
            <path
              d={svgPaths.p39ed1046}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p2041bb70}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p1ac5de50}
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
      className="absolute box-border content-stretch flex flex-row h-[15px] items-start justify-start left-1/2 p-0 top-[104px] translate-x-[-50%]"
      data-name="Timeline"
    >
      <TimelineStep />
      {[...Array(4).keys()].map((_, i) => (
        <TimelineStep1 key={i} />
      ))}
    </div>
  );
}

function Frame142() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] left-[23px] p-0 text-[#47567b] top-[188px] w-[335px]">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-center text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Add photos</p>
      </div>
      <div
        className="font-['Montserrat:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[0px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[1.5] text-[14px]">
          <span>{`You must have 4 photos to create your listing. `}</span>
          <span className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] tracking-[0.28px]">
            We recommend:
          </span>
          <span className="text-[#47567b]">
            <br />- High quality JPGs or PNGs
            <br />- Natural lighting as much as possible
            <br />- A variety of shots
          </span>
        </p>
      </div>
    </div>
  );
}

function MainPhoto1() {
  return (
    <div
      className="absolute bg-[#ccd7e6] box-border content-stretch flex flex-col gap-2.5 items-center justify-center left-0 overflow-clip px-[67px] py-[43px] rounded size-[150px] top-0"
      data-name="Main photo"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[150px] shrink-0 w-[225px]"
        data-name="happy-wedding-couple-como-lake-italy 1"
        style={{
          backgroundImage: `url('${imgHappyWeddingCoupleComoLakeItaly1}')`,
        }}
      />
    </div>
  );
}

function Frame146() {
  return (
    <div className="absolute bg-[#ccd7e6] h-[45px] left-0 opacity-70 top-[106px] w-[150px]" />
  );
}

function Pencil1() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="pencil">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="pencil">
          <path
            d={svgPaths.p2e5be3f0}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-0 p-[8.129px] rounded-[101.613px] top-0"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Pencil1 />
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="trash">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="trash">
          <path
            d={svgPaths.p3e825d80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-[47.419px] p-[8.129px] rounded-[101.613px] top-0"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Trash1 />
    </div>
  );
}

function Group146() {
  return (
    <div className="absolute contents left-0 top-0">
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute h-[37px] left-1/2 overflow-clip top-[109px] translate-x-[-50%] w-[84px]"
      data-name="button"
    >
      <Group146 />
    </div>
  );
}

function Frame2609513() {
  return (
    <div className="absolute left-[23px] overflow-clip size-[150px] top-[641px]">
      <MainPhoto1 />
      <Frame146 />
      <Button1 />
    </div>
  );
}

function BaseButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[18px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function BaseButton1() {
  return (
    <div
      className="basis-0 bg-[#47567b] grow h-[57px] min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[57px] items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[18px] text-left text-neutral-50 text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-14 items-center justify-start p-0 relative shrink-0 w-[164px]"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function Frame10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[46px] items-center justify-center p-0 top-[871px] translate-x-[-50%]"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <Button2 />
      <Button3 />
    </div>
  );
}

function MainPhoto2() {
  return (
    <div
      className="absolute bg-[#ccd7e6] box-border content-stretch flex flex-col gap-2.5 items-center justify-center left-0 overflow-clip px-[67px] py-[43px] rounded size-[150px] top-0"
      data-name="Main photo"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[152px] shrink-0 w-[228px]"
        data-name="bride-groom-hug-kiss-outdoors-wedding-day-young-couple-walk-prague-valentine-s-day 1"
        style={{
          backgroundImage: `url('${imgBrideGroomHugKissOutdoorsWeddingDayYoungCoupleWalkPragueValentineSDay1}')`,
        }}
      />
    </div>
  );
}

function Frame147() {
  return (
    <div className="absolute bg-[#ccd7e6] h-[45px] left-0 opacity-70 top-[106px] w-[150px]" />
  );
}

function Pencil2() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="pencil">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="pencil">
          <path
            d={svgPaths.p2e5be3f0}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-0 p-[8.129px] rounded-[101.613px] top-0"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Pencil2 />
    </div>
  );
}

function Trash2() {
  return (
    <div className="relative shrink-0 size-[20.323px]" data-name="trash">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 21"
      >
        <g id="trash">
          <path
            d={svgPaths.p3e825d80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.01613"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start left-[47.419px] p-[8.129px] rounded-[101.613px] top-0"
      data-name="Icon Button"
    >
      <div className="absolute border-[#47567b] border-[1.016px] border-solid inset-0 pointer-events-none rounded-[101.613px]" />
      <Trash2 />
    </div>
  );
}

function Group147() {
  return (
    <div className="absolute contents left-0 top-0">
      <IconButton4 />
      <IconButton5 />
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute h-[37px] left-1/2 overflow-clip top-[109px] translate-x-[-50%] w-[84px]"
      data-name="button"
    >
      <Group147 />
    </div>
  );
}

function Frame2609514() {
  return (
    <div className="absolute left-[189px] size-[150px] top-[641px]">
      <MainPhoto2 />
      <Frame147 />
      <Button4 />
    </div>
  );
}

export default function ZinniaVendorDashboard() {
  return (
    <div
      className="bg-neutral-100 relative size-full"
      data-name="Zinnia vendor dashboard"
    >
      <Frame2609512 />
      <BottomNav />
      <Header />
      <Timeline />
      <div
        className="absolute flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] text-[#47567b] text-[14px] text-left text-nowrap top-[141.5px] tracking-[0.28px] translate-y-[-50%] uppercase"
        style={{ left: "calc(50% - 89.5px)" }}
      >
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Step 1 of 4: ADD PHOTOS
        </p>
      </div>
      <Frame142 />
      <Frame2609513 />
      <div className="absolute bg-neutral-50 h-[120px] left-0 top-[839px] w-[375px]" />
      <Frame10 />
      <Frame2609514 />
    </div>
  );
}