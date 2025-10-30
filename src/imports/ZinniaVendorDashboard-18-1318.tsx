import svgPaths from "./svg-4gq7skxyz3";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031 from "figma:asset/d799cc730f1bf8d3c7804cba6580800dc772354f.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175032 from "figma:asset/b1763f40b660ea37bdd99b911d92264472498e83.png";

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

function Button() {
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
            <p className="block leading-[1.5] whitespace-pre">Looks good!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
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
    <div className="box-border content-stretch flex flex-row gap-[46px] items-center justify-center p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="absolute bg-neutral-50 bottom-[73px] box-border content-stretch flex flex-col gap-2.5 h-[120px] items-start justify-start left-0 px-12 py-8 w-[375px]">
      <Frame10 />
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
        <g clipPath="url(#clip0_18_1345)" id="Logo">
          <path
            d={svgPaths.p73549c0}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_18_1345">
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

function Frame157() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] px-3 py-0 relative text-[#47567b] text-left w-full">
          <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-[375px]">
            <p className="block leading-[1.5]">Review your listing</p>
          </div>
          <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-[342px]">
            <p className="adjustLetterSpacing block leading-[1.5]">{`This is how you’ll be viewed to customers. You can always edit it later. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoOne() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-[211px] ml-0 mt-0 overflow-clip relative w-[375px]"
      data-name="Photo one"
    >
      <div
        className="[background-size:100.71%_125.92%] absolute bg-no-repeat bg-top-left h-[212px] left-[-1px] top-[-1px] w-[376px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031}')`,
        }}
      />
    </div>
  );
}

function Group119() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <PhotoOne />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="heart">
          <path
            d={svgPaths.p175fa700}
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

function BaseButton2() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <Heart />
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{`Favorite `}</p>
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton2 />
    </div>
  );
}

function Star() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-6"
      data-name="star"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="star">
          <path
            d={svgPaths.p23e6b780}
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function StarFill() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[0.413px] mt-[0.25px] relative size-6"
      data-name="star-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="star-fill">
          <path
            d={svgPaths.p69a0680}
            fill="var(--fill-0, #5EB9B9)"
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group114() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Star />
      <StarFill />
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-6" data-name="star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="star">
          <path
            d={svgPaths.p23e6b780}
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0">
      {[...Array(3).keys()].map((_, i) => (
        <Group114 key={i} />
      ))}
      <Star3 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Frame117 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">
          <span>{`3.0  | `}</span>
          <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] text-[#2e7684]">
            2 reviews
          </span>
          <span className="adjustLetterSpacing text-[#2e7684]"> </span>
        </p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[440px]">
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-[21px]">
            <span className="adjustLetterSpacing leading-[1.5]">
              Photos will be available in 60 days
            </span>
          </li>
          <li className="ms-[21px]">
            <span className="adjustLetterSpacing leading-[1.5]">
              You will have the rights to print the photos
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="clock">
          <path
            d={svgPaths.p19d41c00}
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

function Frame11995() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]">
      <div className="relative shrink-0 w-[90px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Wednesday</p>
      </div>
      <div className="relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          12:00PM - 2:00 PM
        </p>
      </div>
    </div>
  );
}

function Friday() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Friday"
    >
      <Frame11995 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <Clock />
      <Friday />
    </div>
  );
}

function Frame11996() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]">
      <div className="relative shrink-0 w-[90px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Thursday</p>
      </div>
      <div className="relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          12:00PM - 2:00 PM
        </p>
      </div>
    </div>
  );
}

function Friday1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Friday"
    >
      <Frame11996 />
    </div>
  );
}

function Frame11997() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]">
      <div className="relative shrink-0 w-[90px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Friday</p>
      </div>
      <div className="relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          12:00PM - 2:00 PM
        </p>
      </div>
    </div>
  );
}

function Friday2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Friday"
    >
      <Frame11997 />
    </div>
  );
}

function Frame11998() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]">
      <div className="relative shrink-0 w-[90px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Saturday</p>
      </div>
      <div className="relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          12:00PM - 2:00 PM
        </p>
      </div>
    </div>
  );
}

function Friday3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Friday"
    >
      <Frame11998 />
    </div>
  );
}

function Frame11999() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]">
      <div className="relative shrink-0 w-[90px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Sunday</p>
      </div>
      <div className="relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          12:00PM - 2:00 PM
        </p>
      </div>
    </div>
  );
}

function Friday4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Friday"
    >
      <Frame11999 />
    </div>
  );
}

function Frame12000() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]">
      <div className="relative shrink-0 w-[90px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Monday</p>
      </div>
      <div className="relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          12:00PM - 2:00 PM
        </p>
      </div>
    </div>
  );
}

function Friday5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Friday"
    >
      <Frame12000 />
    </div>
  );
}

function Frame12001() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]">
      <div className="relative shrink-0 w-[90px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Tuesday</p>
      </div>
      <div className="relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          12:00PM - 2:00 PM
        </p>
      </div>
    </div>
  );
}

function Friday6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Friday"
    >
      <Frame12001 />
    </div>
  );
}

function Days() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start pl-5 pr-0 py-0 relative shrink-0 w-[255px]"
      data-name="Days"
    >
      <Friday1 />
      <Friday2 />
      <Friday3 />
      <Friday4 />
      <Friday5 />
      <Friday6 />
    </div>
  );
}

function Hours() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Hours"
    >
      <Frame145 />
      <Days />
    </div>
  );
}

function Frame134() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[338px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet
          nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget
          sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam
          sed venenatis quam
        </p>
      </div>
      <Frame131 />
      <Hours />
    </div>
  );
}

function Frame135() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start px-3 py-0 relative w-full">
          <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-left w-[375px]">
            <p className="block leading-[1.5]">
              {`Linda’s Wedding `}
              <br />
              Photography
            </p>
          </div>
          <Button2 />
          <Frame118 />
          <Frame134 />
        </div>
      </div>
    </div>
  );
}

function PhotoOne1() {
  return (
    <div
      className="bg-[#ffffff] h-[368px] overflow-clip relative rounded-lg shrink-0 w-[452px]"
      data-name="Photo one"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[359px] left-[-20px] top-0 w-[482.68px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175032}')`,
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
      <PhotoOne1 />
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
      className="box-border content-stretch flex flex-col gap-4 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[446px]"
      data-name="Wedding day"
    >
      <Photos1 />
    </div>
  );
}

function LocationMarker() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
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

function Frame136() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[401px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          Based in Skokie, IL • Mobile Business
        </p>
      </div>
    </div>
  );
}

function VendorName() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Vendor name"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-left w-[401px]">
        <p className="block leading-[1.5]">Wedding Day Photography</p>
      </div>
      <Frame136 />
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

function Hours1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative shrink-0 w-[401px]"
      data-name="Hours"
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

function Guests() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative shrink-0 w-[401px]"
      data-name="Guests"
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
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Description"
    >
      <CoreInputLabel2 />
      <div
        className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">
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

function WhatsIncluded() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Whats included"
    >
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

function Frame116() {
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
      <Frame116 />
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

function Frame123() {
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
      <Frame123 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[337px]">
      <VendorName />
      <Hours1 />
      <Guests />
      <Description />
      <WhatsIncluded />
      <Delivery />
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame132 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <WeddingDay />
      <Frame137 />
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Add to cart
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

function Frame122() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2 items-start justify-start ml-0 mt-0 p-0 relative">
      <Button3 />
    </div>
  );
}

function Group121() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid mr-[-80px] place-items-start relative shrink-0">
      <Frame122 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start leading-[0] pl-0 pr-20 py-0 relative shrink-0 w-[405px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold mr-[-80px] relative shrink-0 text-[#47567b] text-[0px] text-left w-[329px]">
        <p className="leading-[1.5]">
          <span className="text-[16px]">
            $1,092.50 total
            <br />
          </span>
          <span className="adjustLetterSpacing font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px]">
            includes taxes + fees
          </span>
        </p>
      </div>
      <Group121 />
    </div>
  );
}

function Book() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[357px]"
      data-name="Book"
    >
      <Frame139 />
    </div>
  );
}

function Price() {
  return (
    <div className="bg-neutral-100 relative shrink-0 w-full" data-name="Price">
      <div className="flex flex-col items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-end p-[20px] relative w-full">
          <Book />
        </div>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="box-border content-stretch flex flex-col gap-9 items-center justify-end p-0 relative shrink-0 w-[375px]">
      <Frame138 />
      <Price />
    </div>
  );
}

function SearchResult() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 rounded-lg top-[-0.25px] w-[375px]"
      data-name="Search result"
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start overflow-clip p-0 relative w-[375px]">
        <Frame140 />
      </div>
      <div className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Frame11986() {
  return (
    <div className="h-[873px] relative shrink-0 w-full">
      <SearchResult />
    </div>
  );
}

function StarFill3() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star-fill">
          <path
            d={svgPaths.p3507a9c0}
            fill="var(--fill-0, #2E7684)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star">
          <path
            d={svgPaths.p3c72a580}
            id="Vector"
            stroke="var(--stroke-0, #2E7684)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill3 key={i} />
      ))}
      <Star4 />
    </div>
  );
}

function Group154() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Literata:Medium',_sans-serif] font-medium ml-0 mt-0 relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Maya Rudolph
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex h-[17.344px] items-center justify-center ml-[114px] mt-[1.821px] relative w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[17.359px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 1"
              >
                <line
                  id="Line 34"
                  stroke="var(--stroke-0, #CCD7E6)"
                  x2="17.3589"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:Medium',_sans-serif] font-medium ml-[127px] mt-0 relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          November 30, 2023
        </p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <Frame141 />
      <Group154 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame142 />
      <div
        className="font-['Jost:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[12px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet
          nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget
          sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam
          sed venenatis quam
        </p>
      </div>
    </div>
  );
}

function StarFill7() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star-fill">
          <path
            d={svgPaths.p3507a9c0}
            fill="var(--fill-0, #2E7684)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Star5() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="star">
          <path
            d={svgPaths.p3c72a580}
            id="Vector"
            stroke="var(--stroke-0, #2E7684)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame144() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill7 key={i} />
      ))}
      <Star5 />
    </div>
  );
}

function Group155() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Literata:Medium',_sans-serif] font-medium ml-0 mt-0 relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Maya Rudolph
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex h-[17.344px] items-center justify-center ml-[114px] mt-[1.821px] relative w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[17.359px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 1"
              >
                <line
                  id="Line 34"
                  stroke="var(--stroke-0, #CCD7E6)"
                  x2="17.3589"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:Medium',_sans-serif] font-medium ml-[127px] mt-0 relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          November 30, 2023
        </p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <Frame144 />
      <Group155 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame146 />
      <div className="font-['Jost:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[12px] text-left w-[348px]">
        <p className="block leading-[1.5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet
          nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget
          sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam
          sed venenatis quam
        </p>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame143 />
      <Frame133 />
    </div>
  );
}

function Frame11980() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-3 py-0 relative w-full">
          <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[24px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">2 reviews</p>
          </div>
          <Frame147 />
        </div>
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-12 h-[2350px] items-start justify-start left-0 overflow-clip p-0 top-[76px] w-[375px]">
      <Frame157 />
      <Group119 />
      <Frame135 />
      <Frame11986 />
      <Frame11980 />
    </div>
  );
}

export default function ZinniaVendorDashboard() {
  return (
    <div
      className="bg-neutral-100 relative size-full"
      data-name="Zinnia vendor dashboard"
    >
      <Frame156 />
      <BottomNav />
      <Header />
      <Frame148 />
    </div>
  );
}