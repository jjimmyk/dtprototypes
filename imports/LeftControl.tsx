import svgPaths from "./svg-6lqymln1yg";

function Capsule() {
  return (
    <div className="relative shrink-0 size-14" data-name="Capsule">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 56"
      >
        <g id="Capsule">
          <path
            d={svgPaths.p29a8a500}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-11 items-start justify-start p-0 relative shrink-0"
      data-name="Top"
    >
      <Capsule />
    </div>
  );
}

function MenuIconLogo() {
  return (
    <div
      className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#02a3fe] from-[8.524%] gap-8 items-center justify-center overflow-clip p-[8px] relative shrink-0 size-16 to-[#6876ee] to-[94.739%]"
      data-name="Menu-icon-Logo"
    >
      <Top />
    </div>
  );
}

function OrgName() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Org Name"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">Demo Org</p>
      </div>
    </div>
  );
}

export default function LeftControl() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative size-full"
      data-name="left control"
    >
      <MenuIconLogo />
      <OrgName />
    </div>
  );
}