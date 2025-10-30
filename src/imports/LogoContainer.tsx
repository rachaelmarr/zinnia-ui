import svgPaths from "./svg-cuohfsqlag";

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 143 24"
      >
        <g clipPath="url(#clip0_2_39)" id="Logo">
          <path
            d={svgPaths.p24958200}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_39">
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

export default function LogoContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Logo Container"
    >
      <Frame130 />
    </div>
  );
}