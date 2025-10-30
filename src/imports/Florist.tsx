import svgPaths from "./svg-tphb3kiegn";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031 from "figma:asset/fd022ff8afea47b950bcf9c321df1f06d24eeace.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175032 from "figma:asset/ad0656988e96724fb4c8a09ab70deb7ba75c8c37.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033 from "figma:asset/eba88ce53b228a34ea5ad37751ab56bb9c101f6b.png";

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
        <g clipPath="url(#clip0_48_10903)" id="Logo">
          <path d={svgPaths.p24342a00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_48_10903">
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

function TextContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Florists</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path
            d={svgPaths.p7b68400}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer1 />
          <ChevronDown />
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[211px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function LocationMarker1() {
  return (
    <div className="relative shrink-0 size-5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="location-marker">
          <path
            d={svgPaths.p28445280}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p365cb300}
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

function TextContainer3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Anywhere</p>
      </div>
    </div>
  );
}

function CoreInputField1() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <LocationMarker1 />
          <TextContainer3 />
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[327px]"
      data-name="Text Input"
    >
      <BaseInputField1 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Any Day</p>
      </div>
    </div>
  );
}

function CoreInputField2() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <Calendar />
          <TextContainer5 />
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[157px]"
      data-name="Text Input"
    >
      <BaseInputField2 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path
            d={svgPaths.p99f0820}
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

function BaseButton() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <Search />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0 w-[101px]"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function Search1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0"
      data-name="Search"
    >
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <Button />
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-6" data-name="shopping-cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart">
          <path
            d={svgPaths.p62e7f00}
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
      <ShoppingCart />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-6" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <g id="Vector">
            <path
              d={svgPaths.pd0b4000}
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p16a77900}
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuestionMarkCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="question-mark-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="question-mark-circle">
          <path
            d={svgPaths.p3a1b5100}
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

function Icons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Icons"
    >
      <ActionIcons />
      <User />
      <QuestionMarkCircle />
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between px-4 py-5 relative shrink-0 w-[1440px]"
      data-name="Header"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <LogoContainer />
      <Search1 />
      <Icons />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="heart">
          <path
            d={svgPaths.p1178ab00}
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

function Frame125() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <Heart />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Favorites (25)</p>
      </div>
    </div>
  );
}

function Favorites() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[12px] relative rounded shrink-0 w-[133px]"
      data-name="Favorites"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#47567b] border-[0.5px] border-solid inset-0 pointer-events-none rounded"
      />
      <Frame125 />
    </div>
  );
}

function SlidersH() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="sliders-h">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_48_10897)" id="sliders-h">
          <path d={svgPaths.pfc3ab10} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_48_10897">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <SlidersH />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[12px] relative rounded shrink-0 w-24"
      data-name="Filters"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#47567b] border-[0.5px] border-solid inset-0 pointer-events-none rounded"
      />
      <Frame126 />
    </div>
  );
}

function SortAmountUpAlt() {
  return (
    <div className="relative shrink-0 size-4" data-name="sort-amount-up-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_48_10894)" id="sort-amount-up-alt">
          <path d={svgPaths.pbcea500} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_48_10894">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <SortAmountUpAlt />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Sort</p>
      </div>
    </div>
  );
}

function Sort() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[12px] relative rounded shrink-0 w-24"
      data-name="Sort"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#47567b] border-[0.5px] border-solid inset-0 pointer-events-none rounded"
      />
      <Frame127 />
    </div>
  );
}

function SearchFilters() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-end p-[20px] relative shrink-0 w-[1440px]"
      data-name="SearchFilters"
    >
      <Favorites />
      <Filters />
      <Sort />
    </div>
  );
}

function Heart1() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart2() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart1 />
    </div>
  );
}

function PhotoOne() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-[-2px] w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031}')` }}
      />
      <Heart2 />
    </div>
  );
}

function Photos() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne />
    </div>
  );
}

function Photos1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos />
    </div>
  );
}

function LocationMarker2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame122() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker2 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Chicago, IL</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">Daisy’s Flowers</p>
      </div>
      <Frame122 />
    </div>
  );
}

function StarFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame131() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill key={i} />
      ))}
      <Star />
    </div>
  );
}

function Frame11992() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame131 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $2,000.00`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame134 />
    </div>
  );
}

function Book() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame123 />
      <Frame11992 />
      <Frame132 />
    </div>
  );
}

function Book1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book />
    </div>
  );
}

function Book2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book1 />
    </div>
  );
}

function WeddingPhotography2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 2"
    >
      <Photos1 />
      <Book2 />
    </div>
  );
}

function Heart3() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="heart">
          <path
            d={svgPaths.p175fa700}
            fill="var(--fill-0, #DC332E)"
            id="Vector"
            stroke="var(--stroke-0, #DC332E)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Heart4() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart3 />
    </div>
  );
}

function PhotoOne1() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-0 w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175032}')` }}
      />
      <Heart4 />
    </div>
  );
}

function Photos2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne1 />
    </div>
  );
}

function Photos3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos2 />
    </div>
  );
}

function LocationMarker3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame124() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker3 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Atlanta, Georgia</p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">ATL Florists</p>
      </div>
      <Frame124 />
    </div>
  );
}

function StarFill4() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame133() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill4 key={i} />
      ))}
      <Star1 />
    </div>
  );
}

function Frame11993() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame133 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $6,000.00 `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame135 />
    </div>
  );
}

function Book3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame128 />
      <Frame11993 />
      <Frame136 />
    </div>
  );
}

function Book4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book3 />
    </div>
  );
}

function Book5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book4 />
    </div>
  );
}

function WeddingPhotography1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 1"
    >
      <Photos3 />
      <Book5 />
    </div>
  );
}

function Heart5() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart6() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart5 />
    </div>
  );
}

function PhotoOne2() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-[-1px] w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033}')` }}
      />
      <Heart6 />
    </div>
  );
}

function Photos4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne2 />
    </div>
  );
}

function Photos5() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos4 />
    </div>
  );
}

function LocationMarker4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
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
      <LocationMarker4 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Denver, CO</p>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">Colorado Florists</p>
      </div>
      <Frame129 />
    </div>
  );
}

function StarFill8() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame138() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill8 key={i} />
      ))}
      <Star2 />
    </div>
  );
}

function Frame11994() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame138 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $6,000.00 `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame139 />
    </div>
  );
}

function Book6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame137 />
      <Frame11994 />
      <Frame140 />
    </div>
  );
}

function Book7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book6 />
    </div>
  );
}

function Book8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book7 />
    </div>
  );
}

function WeddingPhotography3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 3"
    >
      <Photos5 />
      <Book8 />
    </div>
  );
}

function Frame11998() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-center px-0 py-5 relative shrink-0 w-[1440px]">
      <WeddingPhotography2 />
      <WeddingPhotography1 />
      <WeddingPhotography3 />
    </div>
  );
}

function Heart7() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart8() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart7 />
    </div>
  );
}

function PhotoOne3() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-0 w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175032}')` }}
      />
      <Heart8 />
    </div>
  );
}

function Photos6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne3 />
    </div>
  );
}

function Photos7() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos6 />
    </div>
  );
}

function LocationMarker5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker5 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Atlanta, Georgia</p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">ATL Florists</p>
      </div>
      <Frame141 />
    </div>
  );
}

function StarFill12() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame143() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill12 key={i} />
      ))}
      <Star3 />
    </div>
  );
}

function Frame11995() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame143 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $6,000.00 `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame144 />
    </div>
  );
}

function Book9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame142 />
      <Frame11995 />
      <Frame145 />
    </div>
  );
}

function Book10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book9 />
    </div>
  );
}

function Book11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book10 />
    </div>
  );
}

function WeddingPhotography4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 1"
    >
      <Photos7 />
      <Book11 />
    </div>
  );
}

function Heart9() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart10() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart9 />
    </div>
  );
}

function PhotoOne4() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-[-1px] w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033}')` }}
      />
      <Heart10 />
    </div>
  );
}

function Photos8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne4 />
    </div>
  );
}

function Photos9() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos8 />
    </div>
  );
}

function LocationMarker6() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame146() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker6 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Denver, CO</p>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">Colorado Florists</p>
      </div>
      <Frame146 />
    </div>
  );
}

function StarFill16() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame148() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill16 key={i} />
      ))}
      <Star4 />
    </div>
  );
}

function Frame11996() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame148 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $6,000.00 `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame149 />
    </div>
  );
}

function Book12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame147 />
      <Frame11996 />
      <Frame150 />
    </div>
  );
}

function Book13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book12 />
    </div>
  );
}

function Book14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book13 />
    </div>
  );
}

function WeddingPhotography5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 3"
    >
      <Photos9 />
      <Book14 />
    </div>
  );
}

function Heart11() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart12() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart11 />
    </div>
  );
}

function PhotoOne5() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-[-2px] w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031}')` }}
      />
      <Heart12 />
    </div>
  );
}

function Photos10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne5 />
    </div>
  );
}

function Photos11() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos10 />
    </div>
  );
}

function LocationMarker7() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame151() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker7 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Chicago, IL</p>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">Daisy’s Flowers</p>
      </div>
      <Frame151 />
    </div>
  );
}

function StarFill20() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star5() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame153() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill20 key={i} />
      ))}
      <Star5 />
    </div>
  );
}

function Frame11999() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame153 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $2,000.00`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame154 />
    </div>
  );
}

function Book15() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame152 />
      <Frame11999 />
      <Frame155 />
    </div>
  );
}

function Book16() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book15 />
    </div>
  );
}

function Book17() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book16 />
    </div>
  );
}

function WeddingPhotography6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 2"
    >
      <Photos11 />
      <Book17 />
    </div>
  );
}

function Frame12000() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-center px-0 py-5 relative shrink-0 w-[1440px]">
      <WeddingPhotography4 />
      <WeddingPhotography5 />
      <WeddingPhotography6 />
    </div>
  );
}

function Heart13() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart14() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart13 />
    </div>
  );
}

function PhotoOne6() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-[-2px] w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031}')` }}
      />
      <Heart14 />
    </div>
  );
}

function Photos12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne6 />
    </div>
  );
}

function Photos13() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos12 />
    </div>
  );
}

function LocationMarker8() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker8 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Chicago, IL</p>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">Daisy’s Flowers</p>
      </div>
      <Frame156 />
    </div>
  );
}

function StarFill24() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star6() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame158() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill24 key={i} />
      ))}
      <Star6 />
    </div>
  );
}

function Frame12002() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame158 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $2,000.00`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame159 />
    </div>
  );
}

function Book18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame157 />
      <Frame12002 />
      <Frame160 />
    </div>
  );
}

function Book19() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book18 />
    </div>
  );
}

function Book20() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book19 />
    </div>
  );
}

function WeddingPhotography7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 2"
    >
      <Photos13 />
      <Book20 />
    </div>
  );
}

function Heart15() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart16() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart15 />
    </div>
  );
}

function PhotoOne7() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-0 w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175032}')` }}
      />
      <Heart16 />
    </div>
  );
}

function Photos14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne7 />
    </div>
  );
}

function Photos15() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos14 />
    </div>
  );
}

function LocationMarker9() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame161() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker9 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Atlanta, Georgia</p>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">ATL Florists</p>
      </div>
      <Frame161 />
    </div>
  );
}

function StarFill28() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star7() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame163() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill28 key={i} />
      ))}
      <Star7 />
    </div>
  );
}

function Frame12003() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame163 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame164() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $6,000.00 `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame164 />
    </div>
  );
}

function Book21() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame162 />
      <Frame12003 />
      <Frame165 />
    </div>
  );
}

function Book22() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book21 />
    </div>
  );
}

function Book23() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book22 />
    </div>
  );
}

function WeddingPhotography8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 1"
    >
      <Photos15 />
      <Book23 />
    </div>
  );
}

function Heart17() {
  return (
    <div className="relative shrink-0 size-5" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Heart18() {
  return (
    <div
      className="absolute bg-neutral-100 box-border content-stretch flex flex-row items-start justify-start left-[392px] p-[8px] rounded-[100px] top-4"
      data-name="Heart"
    >
      <Heart17 />
    </div>
  );
}

function PhotoOne8() {
  return (
    <div className="bg-[#ffffff] h-[359px] overflow-clip relative rounded-lg shrink-0 w-[444px]" data-name="Photo one">
      <div
        className="absolute bg-[50.96%_-594.65%] bg-no-repeat bg-size-[112.03%_99.92%] h-[352px] left-[-6px] top-[-1px] w-[450px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033}')` }}
      />
      <Heart18 />
    </div>
  );
}

function Photos16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[319px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <PhotoOne8 />
    </div>
  );
}

function Photos17() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[319px] items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Photos"
    >
      <Photos16 />
    </div>
  );
}

function LocationMarker10() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="location-marker">
          <path
            d={svgPaths.p2dccd900}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p23ef04b0}
            id="Vector_2"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame166() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker10 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left tracking-[0.28px] w-[363px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Denver, CO</p>
      </div>
    </div>
  );
}

function Frame167() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold h-6 leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left w-[438px]">
        <p className="block leading-[1.5]">Colorado Florists</p>
      </div>
      <Frame166 />
    </div>
  );
}

function StarFill32() {
  return (
    <div className="relative shrink-0 size-5" data-name="star-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-fill">
          <path d={svgPaths.p3507a9c0} fill="var(--fill-0, #2E7684)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Star8() {
  return (
    <div className="relative shrink-0 size-5" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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

function Frame168() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill32 key={i} />
      ))}
      <Star8 />
    </div>
  );
}

function Frame12004() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame168 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px] w-[438px]">
        <p className="adjustLetterSpacing block leading-[1.5]">3.0 | 2 Reviews</p>
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-[438px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5] text-[16px]">
          <span className="font-['Literata:Medium',_sans-serif] font-medium tracking-[0.32px]">From</span>
          <span>{` $6,000.00 `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame170() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame169 />
    </div>
  );
}

function Book24() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Frame167 />
      <Frame12004 />
      <Frame170 />
    </div>
  );
}

function Book25() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book24 />
    </div>
  );
}

function Book26() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[438px]"
      data-name="Book"
    >
      <Book25 />
    </div>
  );
}

function WeddingPhotography9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Wedding photography 3"
    >
      <Photos17 />
      <Book26 />
    </div>
  );
}

function Frame12001() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-center px-0 py-5 relative shrink-0 w-[1440px]">
      <WeddingPhotography7 />
      <WeddingPhotography8 />
      <WeddingPhotography9 />
    </div>
  );
}

function Frame11997() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-0">
      <Header />
      <SearchFilters />
      <Frame11998 />
      <Frame12000 />
      <Frame12001 />
    </div>
  );
}

export default function Florist() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="Florist">
      <Frame11997 />
    </div>
  );
}