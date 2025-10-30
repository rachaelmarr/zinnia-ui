import svgPaths from "./svg-1ck4usl2gq";
import imgScreenshot20250211At80525Pm1 from "figma:asset/d9faf21f4457be2dfec41979673dfa028f9491a4.png";
import { imgScreenshot20250211At80525Pm2 } from "./svg-0ihi0";

function BaseUnderlinedTabItem() {
  return (
    <div className="h-9 relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Activity</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BaseUnderlinedTabItem1() {
  return (
    <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Notes and tasks</p>
      </div>
    </div>
  );
}

function BaseUnderlinedTabItem2() {
  return (
    <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Messages</p>
      </div>
    </div>
  );
}

function UnderlinedTabs() {
  return (
    <div className="absolute content-stretch flex gap-4 items-start justify-start left-[347px] top-[29px] w-[825px]" data-name="Underlined Tabs">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-300 border-solid inset-0 pointer-events-none" />
      <BaseUnderlinedTabItem />
      <BaseUnderlinedTabItem1 />
      <BaseUnderlinedTabItem2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[94px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2px] mask-size-[90px_90px] ml-[-2px] mt-[-2px] w-[101px]" data-name="Screenshot 2025-02-11 at 8.05.25 PM 1" style={{ backgroundImage: `url('${imgScreenshot20250211At80525Pm1}')`, maskImage: `url('${imgScreenshot20250211At80525Pm2}')` }} />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-5" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mail">
          <path d={svgPaths.p80d7900} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Mail />
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chat">
          <path d={svgPaths.pac89d00} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Chat />
    </div>
  );
}

function PencilAlt() {
  return (
    <div className="relative shrink-0 size-5" data-name="pencil-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="pencil-alt">
          <path d={svgPaths.p27607500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <PencilAlt />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-5" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="trash">
          <path d={svgPaths.p9c56500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Trash />
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Quick actions">
      <IconButton />
      <IconButton1 />
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-center relative shrink-0 w-full">
      <MaskGroup />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">John Doe</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">
          Last activity
          <br aria-hidden="true" />
          February 6, 2025 12:35 PM
        </p>
      </div>
      <QuickActions />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span>{`You’ve been paid. `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">View invoice</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[257px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#667593] text-[32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">$1,000</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span>{`You’re owed. `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">Send invoice.</span>
        </p>
      </div>
    </div>
  );
}

function Frame12040() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[257px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#dc332e] text-[32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">$2,000</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0">
      <Frame3 />
      <Frame12040 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Email</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Frame12038() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start leading-[0] relative shrink-0 w-full">
      <Frame7 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">john.doe@example.com</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Phone number</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Frame12036() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start leading-[0] relative shrink-0 w-full">
      <Frame8 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">312-555-1234</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Address</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Frame12037() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start leading-[0] relative shrink-0 w-full">
      <Frame9 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">
          10607 Lockridge drive
          <br aria-hidden="true" />
          Silver Spring, MD
          <br aria-hidden="true" />
          20901
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Tags</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function BaseBadge() {
  return (
    <div className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">New lead</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge />
    </div>
  );
}

function BaseBadge1() {
  return (
    <div className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Interested</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0">
      <Badge />
      <Badge1 />
    </div>
  );
}

function Frame12039() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-[257px]">
      <Frame6 />
      <Frame12038 />
      <Frame12036 />
      <Frame12037 />
      <Frame12039 />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute content-stretch flex flex-col gap-5 items-start justify-start left-9 top-[29px] w-[257px]" data-name="contact">
      <Frame1 />
      <Frame12 />
    </div>
  );
}

export default function Frame12033() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg size-full">
      <div className="overflow-clip relative size-full">
        <UnderlinedTabs />
        <div className="absolute flex h-[787px] items-center justify-center left-[324px] top-[29px] w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[787px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 787 1">
                  <line id="Line 6" stroke="var(--stroke-0, #CCD7E6)" x2="787" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}