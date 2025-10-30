import svgPaths from "./svg-xix7mucpst";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031 from "figma:asset/b1763f40b660ea37bdd99b911d92264472498e83.png";

function Frame128() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[24px] text-left w-[307px]">
        <p className="block leading-[1.5]">Linda’s Wedding Photography</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-8 items-start justify-start left-[26px] p-0 top-28 w-[307px]">
      <Frame128 />
    </div>
  );
}

function BaseUnderlinedTabItem() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0"
      data-name=".Base - Underlined Tab Item"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          My Listing
        </p>
      </div>
    </div>
  );
}

function BaseUnderlinedTabItem1() {
  return (
    <div
      className="h-9 relative shrink-0"
      data-name=".Base - Underlined Tab Item"
    >
      <div className="box-border content-stretch flex flex-row gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            My Services
          </p>
        </div>
      </div>
      <div className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function UnderlinedTabs() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 items-start justify-start left-[26px] p-0 top-[211px] w-[335px]"
      data-name="Underlined Tabs"
    >
      <div className="absolute border-[0px_0px_1px] border-neutral-300 border-solid inset-0 pointer-events-none" />
      <BaseUnderlinedTabItem />
      <BaseUnderlinedTabItem1 />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            Go to listing
          </p>
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-9 items-center justify-center left-[961px] p-0 top-[248px]"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-5" data-name="pencil">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="pencil">
          <path
            d={svgPaths.p3c2b3d80}
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

function BaseButton1() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <Pencil />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Edit
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-9 items-center justify-start left-[1085px] p-0 top-[248px]"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function Copy01() {
  return (
    <div className="relative shrink-0 size-6" data-name="copy-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="copy-01">
          <path
            d={svgPaths.p2fbc8000}
            id="Icon"
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

function Frame143() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <Copy01 />
    </div>
  );
}

function Frame144() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 top-40 translate-x-[-50%]"
      style={{ left: "calc(50% - 496.5px)" }}
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#2e7684] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[1.5] whitespace-pre">
          www.zinnia.com/Lindasweddingphotography
        </p>
      </div>
      <Frame143 />
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
      className="[flex-flow:wrap] absolute bg-neutral-50 bottom-0 box-border content-start flex gap-0 h-[75px] items-start justify-center left-[-5px] p-0 w-[375px]"
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
        <g clipPath="url(#clip0_23_3891)" id="Logo">
          <path
            d={svgPaths.p1b2ae900}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_3891">
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

function PhotoOne() {
  return (
    <div
      className="bg-[#ffffff] h-[368px] overflow-clip relative rounded-lg shrink-0 w-[452px]"
      data-name="Photo one"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[359px] left-[-20px] top-0 w-[482.68px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031}')`,
        }}
      />
    </div>
  );
}

function Photos() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[325px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[449px]"
      data-name="Photos"
    >
      <PhotoOne />
    </div>
  );
}

function Photos1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[325px] items-start justify-start p-0 relative shrink-0 w-[449px]"
      data-name="Photos"
    >
      <Photos />
    </div>
  );
}

function WeddingDay() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[335px]"
      data-name="Wedding day"
    >
      <Photos1 />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-left text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span className="font-['Literata:ExtraBold',_sans-serif] font-extrabold tracking-[0.28px]">
            Hours included:
          </span>{" "}
          <span className="adjustLetterSpacing font-['Montserrat:Regular',_sans-serif] font-normal tracking-[0.28px]">
            5
          </span>
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer />
    </div>
  );
}

function BaseInputField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative shrink-0 w-[401px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-left text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span className="font-['Literata:ExtraBold',_sans-serif] font-extrabold tracking-[0.28px]">
            Total guests:
          </span>{" "}
          <span className="adjustLetterSpacing font-['Montserrat:Regular',_sans-serif] font-normal tracking-[0.28px]">
            10
          </span>
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer1 />
    </div>
  );
}

function BaseInputField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative shrink-0 w-[401px]"
      data-name="Text Input"
    >
      <BaseInputField1 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Description
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[299px]"
      data-name=".Core - Input Label"
    >
      <TextContainer2 />
    </div>
  );
}

function Description() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-80"
      data-name="Description"
    >
      <CoreInputLabel2 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[322px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquam ultrices tempor.
        </p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          What’s included
        </p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-80">
      <Frame114 />
      <div
        className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">
          Ceremony, Bridal portraits, First Look, Reception
        </p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-left tracking-[0.28px] w-[353px]">
        <p className="leading-[1.5] text-[14px]">
          <span className="font-['Literata:ExtraBold',_sans-serif] font-extrabold tracking-[0.28px]">
            Travel:
          </span>
          <span>
            {" "}
            <br />
          </span>
          <span className="adjustLetterSpacing font-['Montserrat:Regular',_sans-serif] font-normal tracking-[0.28px]">{`Up to 50 miles from 60076. `}</span>
        </p>
      </div>
    </div>
  );
}

function ListItem() {
  return <div className="h-[21px] shrink-0 w-0" data-name="List Item" />;
}

function Frame11978() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3.5 items-start justify-start p-0 relative shrink-0">
      <ListItem />
    </div>
  );
}

function Trave() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative shrink-0"
      data-name="Trave;"
    >
      <Frame117 />
      <Frame11978 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <Trave />
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          What’s delivered
        </p>
      </div>
    </div>
  );
}

function CheckCircleFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="check-circle-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p2bb50f00}
            fill="var(--fill-0, #47567B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Online gallery
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer3 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel3 />
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <CheckCircleFill />
      <TextContainer4 />
    </div>
  );
}

function Checkbox() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox />
    </div>
  );
}

function Frame113() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
      <Checkbox />
    </div>
  );
}

function CheckCircleFill1() {
  return (
    <div className="relative shrink-0 size-5" data-name="check-circle-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p2bb50f00}
            fill="var(--fill-0, #47567B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Photo album
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer5 />
    </div>
  );
}

function TextContainer6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel4 />
    </div>
  );
}

function BaseCheckbox1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <CheckCircleFill1 />
      <TextContainer6 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox1 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0">
      <Checkbox1 />
    </div>
  );
}

function CheckCircleFill2() {
  return (
    <div className="relative shrink-0 size-5" data-name="check-circle-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p2bb50f00}
            fill="var(--fill-0, #47567B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Same day prints
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer7 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel5 />
    </div>
  );
}

function BaseCheckbox2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <CheckCircleFill2 />
      <TextContainer8 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox2 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <Checkbox2 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <Frame113 />
      <Frame119 />
      <Frame120 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <Frame118 />
      <Frame115 />
    </div>
  );
}

function CheckCircleFill3() {
  return (
    <div className="relative shrink-0 size-5" data-name="check-circle-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p2bb50f00}
            fill="var(--fill-0, #47567B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Unedited photos
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer9 />
    </div>
  );
}

function TextContainer10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel6 />
    </div>
  );
}

function BaseCheckbox3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <TextContainer10 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckCircleFill3 />
      <BaseCheckbox3 />
    </div>
  );
}

function CheckCircleFill4() {
  return (
    <div className="relative shrink-0 size-5" data-name="check-circle-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p2bb50f00}
            fill="var(--fill-0, #47567B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function InputContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckCircleFill4 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Highlight film
        </p>
      </div>
    </div>
  );
}

function CoreInputLabel7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer11 />
    </div>
  );
}

function TextContainer12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel7 />
    </div>
  );
}

function BaseCheckbox4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer />
      <TextContainer12 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox4 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-8 px-0 relative shrink-0">
      <Checkbox3 />
      <Checkbox4 />
    </div>
  );
}

function Delivery() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-[401px]"
      data-name="Delivery"
    >
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-left w-[401px]">
        <p className="block leading-[1.5]">Wedding Day Photography</p>
      </div>
      <TextInput />
      <TextInput1 />
      <Description />
      <Frame116 />
      <Frame134 />
      <Delivery />
    </div>
  );
}

function Frame133() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame132 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start px-3 py-0 relative shrink-0 w-[335px]">
      <Frame133 />
    </div>
  );
}

function Pencil1() {
  return (
    <div className="relative shrink-0 size-5" data-name="pencil">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="pencil">
          <path
            d={svgPaths.p3c2b3d80}
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseButton2() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <Pencil1 />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Edit
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton2 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Button2 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[218px]">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[323px]">
        <p className="block leading-[1.5]">{`$1,000 `}</p>
      </div>
      <Frame150 />
    </div>
  );
}

function Pencil2() {
  return (
    <div className="relative shrink-0 size-5" data-name="pencil">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="pencil">
          <path
            d={svgPaths.p3c2b3d80}
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <Pencil2 />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Edit
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton3 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Button3 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
      <Frame136 />
      <Frame151 />
    </div>
  );
}

function Book() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[300px]"
      data-name="Book"
    >
      <Frame156 />
    </div>
  );
}

function Frame11994() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-end p-[20px] relative shrink-0">
      <Book />
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex flex-col gap-9 items-start justify-start p-0 relative shrink-0 w-[335px]">
      <WeddingDay />
      <Frame135 />
      <Frame11994 />
    </div>
  );
}

function SearchResult() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg self-stretch shrink-0 w-[335px]"
      data-name="Search result"
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start overflow-clip p-0 relative w-[335px]">
        <Frame137 />
      </div>
      <div className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Services() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-5 items-start justify-start left-5 p-0 top-[315px] w-[335px]"
      data-name="services"
    >
      <SearchResult />
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-5" data-name="plus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="plus">
          <path
            d={svgPaths.p2cb872a0}
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

function BaseButton4() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <Plus1 />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Add Service
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-9 items-center justify-start left-[26px] p-0 top-[263px]"
      data-name="Button"
    >
      <BaseButton4 />
    </div>
  );
}

export default function SignUpVendorOrCouple() {
  return (
    <div
      className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full"
      data-name="Sign Up - Vendor or Couple"
    >
      <Frame129 />
      <UnderlinedTabs />
      <Button />
      <Button1 />
      <Frame144 />
      <BottomNav />
      <Header />
      <Services />
      <Button4 />
    </div>
  );
}