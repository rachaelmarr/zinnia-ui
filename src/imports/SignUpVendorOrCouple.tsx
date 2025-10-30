import svgPaths from "./svg-d84tt88dya";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031 from "figma:asset/c8aef5ebec69305b4618ca6a832edb8b1f501ee6.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175032 from "figma:asset/b1763f40b660ea37bdd99b911d92264472498e83.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033 from "figma:asset/9f044ae93909e7fd97a060db97a4ba0fdfb38125.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175034 from "figma:asset/8cd16c648535b962006e31cec6253d533315ca08.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175035 from "figma:asset/24733bcce8b67c72b4c746bc391d514e7acb5793.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175036 from "figma:asset/d799cc730f1bf8d3c7804cba6580800dc772354f.png";

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
      className="h-9 relative shrink-0"
      data-name=".Base - Underlined Tab Item"
    >
      <div className="box-border content-stretch flex flex-row gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            My Listing
          </p>
        </div>
      </div>
      <div className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BaseUnderlinedTabItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0"
      data-name=".Base - Underlined Tab Item"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          My Services
        </p>
      </div>
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

function PhotoOne() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[190.676px] left-[539.859px] overflow-clip top-0 w-[255.02px]"
      data-name="Photo one"
    >
      <div
        className="[background-size:99%_193.76%] absolute bg-[0%_29.23%] bg-no-repeat h-[208.433px] left-[-0.203px] top-[-0.392px] w-[255.224px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175031}')`,
        }}
      />
    </div>
  );
}

function Frame11987() {
  return (
    <div className="h-[168px] relative shrink-0 w-[1071px]">
      <PhotoOne />
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
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.694px] items-start justify-start px-3 py-0 relative shrink-0 w-[335px]">
      <Frame156 />
      <div className="h-0 relative shrink-0 w-[1067.94px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.785px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1068 1"
          >
            <line
              id="Line 40"
              stroke="var(--stroke-0, #CCD7E6)"
              strokeWidth="0.784676"
              x2="1067.94"
              y1="0.607662"
              y2="0.607662"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.694px] items-start justify-start p-0 relative shrink-0 w-[335px]">
      <Frame11987 />
      <Frame133 />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[15.694px]" data-name="heart">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="heart">
          <path
            d={svgPaths.p14248e00}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.784676"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseButton2() {
  return (
    <div
      className="relative rounded-[18.832px] shrink-0"
      data-name=".Base - Button"
    >
      <div className="box-border content-stretch flex flex-row gap-[6.277px] items-start justify-start overflow-clip px-[9.416px] py-[6.277px] relative">
        <Heart />
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{`Favorite `}</p>
        </div>
      </div>
      <div className="absolute border-[#8c97ac] border-[0.785px] border-solid inset-0 pointer-events-none rounded-[18.832px]" />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[28.248px] items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton2 />
    </div>
  );
}

function Star() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18.832px]"
      data-name="star"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="star">
          <path
            d={svgPaths.p2450ea80}
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.56935"
          />
        </g>
      </svg>
    </div>
  );
}

function StarFill() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[0.325px] mt-[0.195px] relative size-[18.832px]"
      data-name="star-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="star-fill">
          <path
            d={svgPaths.p3eed4980}
            fill="var(--fill-0, #5EB9B9)"
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeWidth="1.56935"
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

function Star2() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18.832px]"
      data-name="star"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="star">
          <path
            d={svgPaths.p2450ea80}
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.56935"
          />
        </g>
      </svg>
    </div>
  );
}

function StarFill2() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[0.322px] mt-[0.195px] relative size-[18.832px]"
      data-name="star-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="star-fill">
          <path
            d={svgPaths.p3eed4980}
            fill="var(--fill-0, #5EB9B9)"
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeWidth="1.56935"
          />
        </g>
      </svg>
    </div>
  );
}

function Group116() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Star2 />
      <StarFill2 />
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-[18.832px]" data-name="star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <g id="star">
          <path
            d={svgPaths.p2450ea80}
            id="Vector"
            stroke="var(--stroke-0, #5EB9B9)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.56935"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.139px] items-start justify-start p-0 relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Group114 key={i} />
      ))}
      <Group116 />
      <Star3 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[12.555px] items-center justify-start p-0 relative shrink-0">
      <Frame117 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
    <div className="box-border content-stretch flex flex-col gap-[3.139px] items-start justify-start p-0 relative shrink-0">
      <div className="font-['Jost:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[9.416px] text-left w-[345.258px]">
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-[14.124px]">
            <span className="leading-[1.5]">
              Photos will be available in 60 days
            </span>
          </li>
          <li className="ms-[14.124px]">
            <span className="leading-[1.5]">
              You will have the rights to print the photos
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.694px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Jost:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[9.416px] text-left w-[331px]">
        <p className="block leading-[1.5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet
          nibh ligula. Vestibulum porttitor eros at commodo finibus. Sed eget
          sodales tellus. Maecenas rutrum leo id ex fringilla vestibulum. Nullam
          sed venenatis quam
        </p>
      </div>
      <Frame131 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.694px] items-start justify-start p-0 relative shrink-0 w-[329px]">
      <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#47567b] text-[25.11px] text-left w-[324px]">
        <p className="block leading-[1.5]">Linda’s Wedding Photography</p>
      </div>
      <Button2 />
      <Frame118 />
      <Frame134 />
    </div>
  );
}

function PhotoOne1() {
  return (
    <div
      className="bg-[#ffffff] h-[288.761px] overflow-clip relative rounded-[6.277px] shrink-0 w-[354.674px]"
      data-name="Photo one"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[281.699px] left-[-15.694px] top-0 w-[378.747px]"
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
      className="box-border content-stretch flex flex-row gap-[6.277px] h-[255.02px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[352.32px]"
      data-name="Photos"
    >
      <PhotoOne1 />
    </div>
  );
}

function Photos1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[255.02px] items-start justify-start p-0 relative shrink-0 w-[352.32px]"
      data-name="Photos"
    >
      <Photos />
    </div>
  );
}

function WeddingDay() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[12.555px] h-[250.312px] items-start justify-start overflow-clip p-0 relative shrink-0 w-[349.966px]"
      data-name="Wedding day"
    >
      <Photos1 />
    </div>
  );
}

function LocationMarker() {
  return (
    <div
      className="relative shrink-0 size-[10.986px]"
      data-name="location-marker"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 11"
      >
        <g clipPath="url(#clip0_23_2777)" id="location-marker">
          <path
            d={svgPaths.p21bf5e00}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.784676"
          />
          <path
            d={svgPaths.p10d72d00}
            id="Vector_2"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.784676"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_2777">
            <rect fill="white" height="10.9855" width="10.9855" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.139px] items-center justify-start p-0 relative shrink-0">
      <LocationMarker />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left tracking-[0.2197px] w-[314.655px]">
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
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[15.694px] text-left w-[314.655px]">
        <p className="block leading-[1.5]">Wedding Day Photography</p>
      </div>
      <Frame137 />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-left text-nowrap tracking-[0.2197px]">
        <p className="leading-[1.5] text-[10.985px] whitespace-pre">
          <span className="font-['Literata:ExtraBold',_sans-serif] font-extrabold tracking-[0.2197px]">
            Hours included:
          </span>{" "}
          <span className="adjustLetterSpacing font-['Montserrat:Regular',_sans-serif] font-normal tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer />
    </div>
  );
}

function BaseInputField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.277px] items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel />
    </div>
  );
}

function Hours() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.277px] items-end justify-start p-0 relative shrink-0 w-[314.655px]"
      data-name="Hours"
    >
      <BaseInputField />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-left text-nowrap tracking-[0.2197px]">
        <p className="leading-[1.5] text-[10.985px] whitespace-pre">
          <span className="font-['Literata:ExtraBold',_sans-serif] font-extrabold tracking-[0.2197px]">
            Total guests:
          </span>{" "}
          <span className="adjustLetterSpacing font-['Montserrat:Regular',_sans-serif] font-normal tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer1 />
    </div>
  );
}

function BaseInputField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.277px] items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel1 />
    </div>
  );
}

function Guests() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.277px] items-end justify-start p-0 relative shrink-0 w-[314.655px]"
      data-name="Guests"
    >
      <BaseInputField1 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0 w-[234.618px]"
      data-name=".Core - Input Label"
    >
      <TextContainer2 />
    </div>
  );
}

function Description() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3.139px] items-start justify-start p-0 relative shrink-0 w-[314.655px]"
      data-name="Description"
    >
      <CoreInputLabel2 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left tracking-[0.2197px] w-[314.655px]">
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
    <div className="box-border content-stretch flex flex-row gap-[9.416px] items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[320.933px]"
      data-name="Whats included"
    >
      <Frame114 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Ceremony, Bridal portraits, First Look, Reception
        </p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[9.416px] items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          What’s delivered
        </p>
      </div>
    </div>
  );
}

function CheckCircleFill() {
  return (
    <div
      className="relative shrink-0 size-[15.694px]"
      data-name="check-circle-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p1700ab00}
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
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
    <div className="box-border content-stretch flex flex-row gap-[9.416px] items-start justify-start p-0 relative shrink-0">
      <Checkbox />
    </div>
  );
}

function CheckCircleFill1() {
  return (
    <div
      className="relative shrink-0 size-[15.694px]"
      data-name="check-circle-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p1700ab00}
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
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
    <div className="box-border content-stretch flex flex-row gap-[18.832px] items-center justify-start p-0 relative shrink-0">
      <Checkbox1 />
    </div>
  );
}

function CheckCircleFill2() {
  return (
    <div
      className="relative shrink-0 size-[15.694px]"
      data-name="check-circle-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p1700ab00}
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
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
    <div className="box-border content-stretch flex flex-row gap-[18.832px] items-start justify-start p-0 relative shrink-0">
      <Checkbox2 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[6.277px] items-start justify-start p-0 relative shrink-0">
      <Frame113 />
      <Frame119 />
      <Frame120 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[6.277px] items-start justify-start p-0 relative shrink-0">
      <Frame116 />
      <Frame115 />
    </div>
  );
}

function CheckCircleFill3() {
  return (
    <div
      className="relative shrink-0 size-[15.694px]"
      data-name="check-circle-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p1700ab00}
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
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <TextContainer10 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <CheckCircleFill3 />
      <BaseCheckbox3 />
    </div>
  );
}

function CheckCircleFill4() {
  return (
    <div
      className="relative shrink-0 size-[15.694px]"
      data-name="check-circle-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="check-circle-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p1700ab00}
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
      className="box-border content-stretch flex flex-row items-start justify-start pb-0 pt-[1.569px] px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckCircleFill4 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[1.569px] items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
      className="box-border content-stretch flex flex-row gap-[6.277px] items-center justify-start p-0 relative shrink-0"
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
    <div className="box-border content-stretch flex flex-col gap-[6.277px] items-start justify-start pb-0 pt-[25.11px] px-0 relative shrink-0">
      <Checkbox3 />
      <Checkbox4 />
    </div>
  );
}

function Delivery() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.277px] items-start justify-start p-0 relative shrink-0 w-[314.655px]"
      data-name="Delivery"
    >
      <Frame121 />
      <Frame123 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9.416px] items-start justify-start p-0 relative shrink-0">
      <VendorName />
      <Hours />
      <Guests />
      <Description />
      <WhatsIncluded />
      <Delivery />
    </div>
  );
}

function Frame138() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.694px] items-center justify-start p-0 relative shrink-0">
      <Frame132 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.694px] items-center justify-start p-0 relative shrink-0">
      <WeddingDay />
      <Frame138 />
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex flex-row gap-[6.277px] items-start justify-start overflow-clip px-[9.416px] py-[6.277px] relative rounded-[18.832px] shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[10.985px] text-left text-neutral-50 text-nowrap tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-row h-[28.248px] items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton3 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[6.277px] items-start justify-start ml-0 mt-0 p-0 relative">
      <Button3 />
    </div>
  );
}

function Group121() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame122 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="box-border content-stretch flex flex-row items-end justify-start leading-[0] p-0 relative shrink-0 w-[317.794px]">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] text-left">
        <p className="leading-[1.5]">
          <span className="text-[12.555px]">
            $1,092.50 total
            <br />
          </span>
          <span className="font-['Montserrat:Regular',_sans-serif] font-normal text-[10.985px] tracking-[0.2197px]">
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
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[318.579px]"
      data-name="Book"
    >
      <Frame140 />
    </div>
  );
}

function Price() {
  return (
    <div
      className="bg-neutral-100 box-border content-stretch flex flex-col gap-[7.847px] items-center justify-end p-[15.694px] relative shrink-0"
      data-name="Price"
    >
      <Book />
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[28.248px] items-center justify-end p-0 relative shrink-0">
      <Frame139 />
      <Price />
    </div>
  );
}

function SearchResult() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 rounded-[6.277px] top-[-0.46px] w-[339px]"
      data-name="Search result"
    >
      <div className="box-border content-stretch flex flex-row gap-[7.847px] items-start justify-start overflow-clip p-0 relative w-[339px]">
        <Frame141 />
      </div>
      <div className="absolute border-[#ccd7e6] border-[0.785px] border-solid inset-0 pointer-events-none rounded-[6.277px]" />
    </div>
  );
}

function Frame11986() {
  return (
    <div className="h-[647px] relative shrink-0 w-[339px]">
      <SearchResult />
    </div>
  );
}

function StarFill3() {
  return (
    <div className="relative shrink-0 size-[15.694px]" data-name="star-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star-fill">
          <path
            d={svgPaths.p386aa480}
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
    <div className="relative shrink-0 size-[15.694px]" data-name="star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p28cb19f0}
            id="Vector"
            stroke="var(--stroke-0, #2E7684)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.56935"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame142() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.139px] items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill3 key={i} />
      ))}
      <Star4 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[10.201px] items-center justify-start p-0 relative shrink-0">
      <Frame142 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Maya Rudolph
        </p>
      </div>
      <div className="flex h-[13.609px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[13.621px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.785px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 1"
              >
                <line
                  id="Line 34"
                  stroke="var(--stroke-0, #CCD7E6)"
                  strokeWidth="0.784676"
                  x2="13.6211"
                  y1="0.607662"
                  y2="0.607662"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          November 30, 2023
        </p>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12.555px] h-[67.482px] items-start justify-start p-0 relative shrink-0 w-[423.725px]">
      <Frame144 />
      <div className="font-['Jost:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[9.416px] text-left w-[346px]">
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
    <div className="relative shrink-0 size-[15.694px]" data-name="star-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star-fill">
          <path
            d={svgPaths.p386aa480}
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
    <div className="relative shrink-0 size-[15.694px]" data-name="star">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="star">
          <path
            d={svgPaths.p28cb19f0}
            id="Vector"
            stroke="var(--stroke-0, #2E7684)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.56935"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame146() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.139px] items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <StarFill7 key={i} />
      ))}
      <Star5 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[10.201px] items-center justify-start p-0 relative shrink-0">
      <Frame146 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Maya Rudolph
        </p>
      </div>
      <div className="flex h-[13.609px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[13.621px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.785px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 1"
              >
                <line
                  id="Line 34"
                  stroke="var(--stroke-0, #CCD7E6)"
                  strokeWidth="0.784676"
                  x2="13.6211"
                  y1="0.607662"
                  y2="0.607662"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[10.985px] text-left text-nowrap tracking-[0.2197px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          November 30, 2023
        </p>
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12.555px] items-start justify-start p-0 relative shrink-0">
      <Frame147 />
      <div className="font-['Jost:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[9.416px] text-left w-[346px]">
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

function Frame149() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.694px] items-start justify-start p-0 relative shrink-0">
      <Frame145 />
      <Frame148 />
    </div>
  );
}

function Frame11980() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9.416px] items-start justify-start p-0 relative shrink-0 w-[343px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[18.832px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">2 reviews</p>
      </div>
      <Frame149 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[37.664px] h-[1192px] items-start justify-start overflow-clip px-3 py-0 relative shrink-0 w-[355px]">
      <Frame136 />
      <Frame11986 />
      <Frame11980 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[25.11px] items-start justify-start p-0 relative shrink-0 w-[1070.3px]">
      <Frame135 />
      <Frame150 />
    </div>
  );
}

function SignUpVendorOrCouple() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-2 overflow-clip px-0 py-[33px] rounded-[9.416px] top-[266px] w-[359px]"
      data-name="Sign Up - Vendor or Couple"
    >
      <Frame151 />
    </div>
  );
}

function BaseButton4() {
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

function Button4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-9 items-center justify-center left-[961px] p-0 top-[248px]"
      data-name="Button"
    >
      <BaseButton4 />
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
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseButton5() {
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

function Button5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-9 items-center justify-start left-[1085px] p-0 top-[248px]"
      data-name="Button"
    >
      <BaseButton5 />
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

function Frame152() {
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

function PhotoOne2() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[169.778px] left-[307.419px] overflow-clip top-0 w-[144.444px]"
      data-name="Photo one"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[430.082px] left-[-19px] top-[-0.5px] w-[364.952px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033}')`,
        }}
      />
    </div>
  );
}

function PhotoOne3() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[81.333px] left-[460.752px] overflow-clip top-0 w-36"
      data-name="Photo one"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[214px] left-[-1.218px] top-[-18px] w-[262px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175034}')`,
        }}
      />
    </div>
  );
}

function PhotoOne4() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[81.333px] left-[460.308px] overflow-clip top-[88.444px] w-[144.444px]"
      data-name="Photo one"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[213px] left-[-0.432px] top-[-16.486px] w-[261px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175035}')`,
        }}
      />
    </div>
  );
}

function Group143() {
  return (
    <div className="absolute contents left-0 top-0">
      <div
        className="[background-size:100.71%_125.92%] absolute bg-no-repeat bg-top-left h-[169.778px] left-0 top-[0.222px] w-[301.778px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 1"
        style={{
          backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175036}')`,
        }}
      />
      <PhotoOne2 />
      <PhotoOne3 />
      <PhotoOne4 />
    </div>
  );
}

function Frame2609515() {
  return (
    <div className="absolute h-[170px] left-5 overflow-clip top-[297px] w-[335px]">
      <Group143 />
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
        <g clipPath="url(#clip0_23_2752)" id="Logo">
          <path
            d={svgPaths.p1b2ae900}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_2752">
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

export default function SignUpVendorOrCouple1() {
  return (
    <div
      className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full"
      data-name="Sign Up - Vendor or Couple"
    >
      <Frame129 />
      <UnderlinedTabs />
      <SignUpVendorOrCouple />
      <Button4 />
      <Button5 />
      <Frame152 />
      <Frame2609515 />
      <BottomNav />
      <Header />
    </div>
  );
}