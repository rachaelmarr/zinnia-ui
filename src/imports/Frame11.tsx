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

export default function Frame11() {
  return (
    <div className="bg-neutral-50 relative shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] size-full">
      <div className="flex flex-col items-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-end justify-start px-[100px] py-8 relative size-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}