import svgPaths from "./svg-52v02jk3bz";
import imgImage1 from "figma:asset/07f4483b98adf41a5d1c5a899eae6d58c8b2d776.png";
import imgCapsule from "figma:asset/371be526cb6c078a2a123792205d9842b99edd6d.png";
import imgCapsule1 from "figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";

function Cloud() {
  return (
    <div className="relative shrink-0 size-5" data-name="cloud">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="cloud">
          <mask
            height="20"
            id="mask0_37_20176"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20176)">
            <g id="vector">
              <path d={svgPaths.p38f7c900} fill="var(--fill-0, #02A3FE)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tab() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Tab"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#02a3fe] border-[0px_0px_2px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[8px] relative w-full">
          <Cloud />
          <div
            className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#02a3fe] text-[24px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[32px] whitespace-pre">
              Weather Analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ElectricBoltOutlined() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="electric_bolt_outlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="electric_bolt_outlined">
          <mask
            height="20"
            id="mask0_37_20168"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20168)">
            <path
              d={svgPaths.p3d169b00}
              fill="var(--fill-0, #AFB5BC)"
              id="electric_bolt"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Tab"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[8px] relative w-full">
          <ElectricBoltOutlined />
          <div
            className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#afb5bc] text-[24px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[32px] whitespace-pre">
              Outage Prediction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WaActive() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row items-start justify-start p-0 shrink-0 sticky top-0 w-full"
      data-name="WA Active"
    >
      <Tab />
      <Tab1 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-end justify-start px-2 py-0 relative shrink-0 w-[1143px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[36px] text-left text-nowrap tracking-[-0.72px]">
        <p className="adjustLetterSpacing block leading-[44px] whitespace-pre">
          Weather Analytics
        </p>
      </div>
    </div>
  );
}

function Fullscreen() {
  return (
    <div className="relative shrink-0 size-6" data-name="fullscreen">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="fullscreen">
          <mask
            height="24"
            id="mask0_37_20062"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_37_20062)">
            <g id="vector">
              <path d={svgPaths.p30c4ba00} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[4px] relative rounded shrink-0"
      data-name="wrapper"
    >
      <Fullscreen />
    </div>
  );
}

function Frame2050() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center w-[853px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">
          Peak System Wind Gust (mph) - Mean Scenario
        </p>
      </div>
      <Wrapper />
    </div>
  );
}

function Wrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Vermont</p>
      </div>
    </div>
  );
}

function ButtonGroupSm() {
  return (
    <div
      className="bg-[#01476f] box-border content-stretch flex flex-row gap-1 items-center justify-center mr-[-1px] overflow-clip px-3 py-2 relative rounded-bl-[4px] rounded-tl-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)] shrink-0"
      data-name="Button Group/sm"
    >
      <Wrapper1 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Northeast</p>
      </div>
    </div>
  );
}

function ButtonGroupSm1() {
  return (
    <div
      className="mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0"
      data-name="Button Group/sm"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-3 py-2 relative">
        <Wrapper2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function ButtonGroupExample() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-px py-0 relative shrink-0"
      data-name="button group example"
    >
      <ButtonGroupSm />
      <ButtonGroupSm1 />
    </div>
  );
}

function Frame2033() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[22px] items-center justify-start p-0 relative shrink-0">
      <ButtonGroupExample />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="title">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center px-4 py-2 relative w-full">
          <Frame2050 />
          <Frame2033 />
        </div>
      </div>
    </div>
  );
}

function Frame2037() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 h-[257px] items-center justify-center p-0 relative w-full">
      <div className="flex h-[165.344px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[270deg]">
          <div
            className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative text-[#ffffff] text-[16px] text-nowrap text-right"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px] whitespace-pre">
              Peak wind gust (mph)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2036() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[37px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">26</p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-4">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, #039855)"
            id="Ellipse 2"
            r="8"
          />
        </svg>
      </div>
    </div>
  );
}

function Group2037() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[37px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">40</p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-4">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, #FDB022)"
            id="Ellipse 3"
            r="8"
          />
        </svg>
      </div>
    </div>
  );
}

function Group2038() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[37px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">50</p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-4">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, #DC6803)"
            id="Ellipse 5"
            r="8"
          />
        </svg>
      </div>
    </div>
  );
}

function Group2039() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[37px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">65</p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-4">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, #B42318)"
            id="Ellipse 6"
            r="8"
          />
        </svg>
      </div>
    </div>
  );
}

function Group2040() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[45px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">66+</p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-4">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            fill="var(--fill-0, #9932CC)"
            id="Ellipse 6"
            r="8"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame2041() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start leading-[0] p-0 relative shrink-0">
      <Group2036 />
      <Group2037 />
      <Group2038 />
      <Group2039 />
      <Group2040 />
    </div>
  );
}

function Frame2038() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-0 relative shrink-0">
      <div
        className="flex items-center justify-center relative shrink-0 w-full"
        style={
          {
            "--transform-inner-width": "343.0625",
            "--transform-inner-height": "257",
            height:
              "calc(1px * ((var(--transform-inner-width) * 1) + (var(--transform-inner-height) * 0)))",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg] w-full">
          <Frame2037 />
        </div>
      </div>
      <Frame2041 />
    </div>
  );
}

function Frame2047() {
  return (
    <div className="bg-[#14171a] relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start px-[67px] py-2 relative w-full">
          <Frame2038 />
        </div>
      </div>
    </div>
  );
}

function Map1() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-3 h-[969px] items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Map"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[969px] shrink-0 w-full"
        data-name="image 1"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
    </div>
  );
}

function Map2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[1075px] items-start justify-start overflow-clip p-0 relative rounded shrink-0 w-[917px]"
      data-name="map"
    >
      <Title />
      <Frame2047 />
      <Map1 />
    </div>
  );
}

function Wrapper8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">
          Map time hourly interval
        </p>
      </div>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-6" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="more_vert">
          <mask
            height="24"
            id="mask0_37_20113"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_37_20113)">
            <g id="vector">
              <path d={svgPaths.p2519f800} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonGroupMd() {
  return (
    <div
      className="h-11 relative shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)] shrink-0 w-full"
      data-name="Button Group/md"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-11 items-center justify-center px-2 py-2.5 relative w-full">
          <Wrapper8 />
          <MoreVert />
        </div>
      </div>
    </div>
  );
}

function KeyboardDoubleArrowLeft() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="keyboard_double_arrow_left"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="keyboard_double_arrow_left">
          <mask
            height="20"
            id="mask0_37_20036"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20036)">
            <g id="vector">
              <path d={svgPaths.p1067900} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrapper9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Backward</p>
      </div>
    </div>
  );
}

function ButtonSm1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[8px] relative rounded shrink-0"
      data-name="Button/sm"
    >
      <KeyboardDoubleArrowLeft />
      <Wrapper9 />
    </div>
  );
}

function PlayArrow() {
  return (
    <div className="relative shrink-0 size-6" data-name="play_arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="play_arrow">
          <mask
            height="24"
            id="mask0_37_20028"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_37_20028)">
            <g id="vector">
              <path d={svgPaths.p2d85c000} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrapper10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">Play</p>
      </div>
    </div>
  );
}

function ButtonMd() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative rounded shrink-0"
      data-name="Button/md"
    >
      <PlayArrow />
      <Wrapper10 />
    </div>
  );
}

function Wrapper11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Forward</p>
      </div>
    </div>
  );
}

function DoubleArrow() {
  return (
    <div className="relative shrink-0 size-5" data-name="double_arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="double_arrow">
          <mask
            height="20"
            id="mask0_37_20121"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20121)">
            <g id="vector">
              <path d={svgPaths.p2f0f8f00} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonSm2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[8px] relative rounded shrink-0"
      data-name="Button/sm"
    >
      <Wrapper11 />
      <DoubleArrow />
    </div>
  );
}

function Frame2049() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <ButtonSm1 />
      <ButtonMd />
      <ButtonSm2 />
    </div>
  );
}

function SliderBar() {
  return (
    <div
      className="absolute bg-[#353a40] h-2 left-0 right-[0.42px] rounded top-2"
      data-name="Slider/Bar"
    />
  );
}

function SliderBar1() {
  return (
    <div
      className="absolute bg-[#01669f] h-2 left-0 right-[160.42px] rounded top-2"
      data-name="Slider/Bar"
    />
  );
}

function SliderControl() {
  return (
    <div
      className="absolute right-[148.42px] size-6 top-0"
      data-name="Slider/Control"
    >
      <div className="absolute inset-0" data-name="Control">
        <div className="absolute inset-[-8.33%_-25%_-41.67%_-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 36 36"
          >
            <g filter="url(#filter0_dd_37_20184)" id="Control">
              <circle cx="18" cy="14" fill="var(--fill-0, white)" r="12" />
              <circle
                cx="18"
                cy="14"
                r="11.5"
                stroke="var(--stroke-0, #01669F)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="36"
                id="filter0_dd_37_20184"
                width="36"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feMorphology
                  in="SourceAlpha"
                  operator="erode"
                  radius="2"
                  result="effect1_dropShadow_37_20184"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0.1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_37_20184"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feMorphology
                  in="SourceAlpha"
                  operator="erode"
                  radius="2"
                  result="effect2_dropShadow_37_20184"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0.06 0"
                />
                <feBlend
                  in2="effect1_dropShadow_37_20184"
                  mode="normal"
                  result="effect2_dropShadow_37_20184"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_37_20184"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="absolute flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-1/2 text-[#ffffff] text-[14px] text-center text-nowrap top-10 translate-x-[-50%] translate-y-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">08:00 21 Nov 2024</p>
      </div>
    </div>
  );
}

function OperationalPeriodSlider() {
  return (
    <div
      className="[grid-area:1_/_1] h-[53px] ml-[61.029px] mt-0 relative rounded-lg w-[763.424px]"
      data-name="operational Period Slider"
    >
      <SliderBar />
      <SliderBar1 />
      <SliderControl />
    </div>
  );
}

function Group2046() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <OperationalPeriodSlider />
      <div
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold h-[44.167px] ml-[24.213px] mt-[2.208px] relative text-[#afb5bc] text-[14px] text-center translate-x-[-50%] w-[48.425px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px]">
          <span>{`0 `}</span>
          <span
            className="font-['Open_Sans:Bold',_sans-serif] font-bold text-[#afb5bc]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            hr
          </span>
        </p>
      </div>
      <div
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold h-[44.167px] ml-[861.87px] mt-[2.208px] relative text-[#afb5bc] text-[14px] text-center translate-x-[-50%] w-[62.261px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px]">
          <span>{`168 `}</span>
          <span
            className="font-['Open_Sans:Bold',_sans-serif] font-bold text-[#afb5bc]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            hr
          </span>
        </p>
      </div>
    </div>
  );
}

function Group2047() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Group2046 />
    </div>
  );
}

function Component1920MapTimeSlider() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-center justify-center p-[12px] relative shrink-0 w-[917px]"
      data-name="1920 map time slider"
    >
      <ButtonGroupMd />
      <Frame2049 />
      <Group2047 />
    </div>
  );
}

function StaticMapWeatherAnalytics() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[917px]"
      data-name="Static Map Weather analytics"
    >
      <Map2 />
      <Component1920MapTimeSlider />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Open_Sans:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap w-full"
      data-name="Label"
    >
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          Select Region or Utility
        </p>
      </div>
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] text-nowrap whitespace-pre">*</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">GMP Districts</p>
      </div>
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_drop_down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_drop_down">
          <mask
            height="20"
            id="mask0_37_20190"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20190)">
            <g id="vector">
              <path d={svgPaths.p1889d880} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1ee8e600} stroke="var(--stroke-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Input">
      <div
        aria-hidden="true"
        className="absolute border border-[#6e757c] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-2.5 relative w-full">
          <Content />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}

function InputDropdownMd() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-80"
      data-name="Input Dropdown/md"
    >
      <Label2 />
      <Input />
    </div>
  );
}

function Description() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Description"
    >
      <InputDropdownMd />
    </div>
  );
}

function Response() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 h-[101px] items-start justify-center p-[12px] relative rounded-lg shrink-0"
      data-name="Response"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#353a40] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Description />
    </div>
  );
}

function InfoTag() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Info Tag">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g id="Info Tag">
          <path
            clipRule="evenodd"
            d={svgPaths.p34ca5a00}
            fill="var(--fill-0, #02A3FE)"
            fillRule="evenodd"
            id="-g-ic_info_gray"
          />
        </g>
      </svg>
    </div>
  );
}

function Label3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-start justify-center p-0 relative shrink-0 w-[57px]"
      data-name="Label"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Model</p>
      </div>
      <InfoTag />
    </div>
  );
}

function Wrapper12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">NBM</p>
      </div>
    </div>
  );
}

function ButtonGroupSm6() {
  return (
    <div
      className="bg-[#01476f] box-border content-stretch flex flex-row gap-1 items-center justify-center mr-[-1px] overflow-clip px-3 py-2 relative rounded-bl-[4px] rounded-tl-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)] shrink-0"
      data-name="Button Group/sm"
    >
      <Wrapper12 />
    </div>
  );
}

function Wrapper13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">HRRR</p>
      </div>
    </div>
  );
}

function ButtonGroupSm7() {
  return (
    <div
      className="mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0"
      data-name="Button Group/sm"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-3 py-2 relative">
        <Wrapper13 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function ButtonGroupExample2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-px py-0 relative shrink-0"
      data-name="button group example"
    >
      <ButtonGroupSm6 />
      <ButtonGroupSm7 />
    </div>
  );
}

function Frame2035() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[22px] items-center justify-start p-0 relative shrink-0">
      <Label3 />
      <ButtonGroupExample2 />
    </div>
  );
}

function InfoTag1() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Info Tag">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g id="Info Tag">
          <path
            clipRule="evenodd"
            d={svgPaths.p34ca5a00}
            fill="var(--fill-0, #02A3FE)"
            fillRule="evenodd"
            id="-g-ic_info_gray"
          />
        </g>
      </svg>
    </div>
  );
}

function Label4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-start justify-center p-0 relative shrink-0"
      data-name="Label"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Hazard</p>
      </div>
      <InfoTag1 />
    </div>
  );
}

function Wrapper14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Wind</p>
      </div>
    </div>
  );
}

function ButtonGroupSm8() {
  return (
    <div
      className="bg-[#01476f] box-border content-stretch flex flex-row gap-1 items-center justify-center mr-[-1px] overflow-clip px-3 py-2 relative rounded-bl-[4px] rounded-tl-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)] shrink-0"
      data-name="Button Group/sm"
    >
      <Wrapper14 />
    </div>
  );
}

function Wrapper15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Wet Snow</p>
      </div>
    </div>
  );
}

function ButtonGroupSm9() {
  return (
    <div className="mr-[-1px] relative shrink-0" data-name="Button Group/sm">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-3 py-2 relative">
        <Wrapper15 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function Wrapper16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Ice</p>
      </div>
    </div>
  );
}

function ButtonGroupSm10() {
  return (
    <div className="mr-[-1px] relative shrink-0" data-name="Button Group/sm">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-3 py-2 relative">
        <Wrapper16 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function Wrapper17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Heavy Precip</p>
      </div>
    </div>
  );
}

function ButtonGroupSm11() {
  return (
    <div
      className="mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0"
      data-name="Button Group/sm"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-3 py-2 relative">
        <Wrapper17 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function ButtonGroupExample3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-px py-0 relative shrink-0"
      data-name="button group example"
    >
      <ButtonGroupSm8 />
      <ButtonGroupSm9 />
      <ButtonGroupSm10 />
      <ButtonGroupSm11 />
    </div>
  );
}

function Frame2036() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Label4 />
      <ButtonGroupExample3 />
    </div>
  );
}

function Description1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 h-[77px] items-start justify-start p-0 relative shrink-0"
      data-name="Description"
    >
      <Frame2035 />
      <Frame2036 />
    </div>
  );
}

function Response1() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 h-[101px] items-start justify-center p-[12px] relative rounded-lg shrink-0 w-[446px]"
      data-name="Response"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#353a40] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Description1 />
    </div>
  );
}

function Label5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-[300px]"
      data-name="Label"
    >
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Start Date</p>
      </div>
    </div>
  );
}

function DateRange() {
  return (
    <div className="relative shrink-0 size-5" data-name="date_range">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="date_range">
          <mask
            height="20"
            id="mask0_37_20013"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20013)">
            <g id="vector">
              <path d={svgPaths.p13457580} fill="var(--fill-0, #AFB5BC)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-2 relative w-full">
          <div
            className="basis-0 font-['Open_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[14px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px]">03/07/2024</p>
          </div>
          <DateRange />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function InputSm() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-32"
      data-name="Input/sm"
    >
      <Label5 />
      <Input1 />
    </div>
  );
}

function Label6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Label"
    >
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Start Time</p>
      </div>
    </div>
  );
}

function NestClockFarsightAnalog() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="nest_clock_farsight_analog"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="nest_clock_farsight_analog">
          <mask
            height="20"
            id="mask0_37_20164"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20164)">
            <g id="vector">
              <path d={svgPaths.p3d515940} fill="var(--fill-0, #AFB5BC)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-2 relative w-full">
          <div
            className="basis-0 font-['Open_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[14px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px]">10:00 AM</p>
          </div>
          <NestClockFarsightAnalog />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function InputSm1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-32"
      data-name="Input/sm"
    >
      <Label6 />
      <Input2 />
    </div>
  );
}

function Frame2028() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <InputSm />
      <InputSm1 />
    </div>
  );
}

function Response2() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-6 h-[101px] items-center justify-center p-[12px] relative rounded-lg shrink-0 w-[292px]"
      data-name="Response"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#353a40] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Frame2028 />
    </div>
  );
}

function WaSettings() {
  return (
    <div
      className="[flex-flow:wrap] absolute bg-[#14171a] box-border content-start flex gap-4 h-[250px] items-start justify-start left-0 p-[16px] rounded top-0 w-[916px]"
      data-name="WA Settings"
    >
      <Response />
      <Response1 />
      <Response2 />
    </div>
  );
}

function Type1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Type"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">
          Time Series Hazard Table
        </p>
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-5" data-name="download">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="download">
          <mask
            height="20"
            id="mask0_37_20005"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20005)">
            <g id="vector">
              <path d={svgPaths.p1d2d6000} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function PrimaryTableTitle() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-row gap-2 items-center justify-start left-0 px-4 py-1 top-0 w-[916px]"
      data-name="Primary table title"
    >
      <Type1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div
          className="basis-0 grow h-full min-h-px min-w-px shrink-0"
          data-name="filler"
        />
      </div>
      <Download />
    </div>
  );
}

function LastActive() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[100px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">HazarD</p>
      </div>
    </div>
  );
}

function LastActive1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 1</p>
      </div>
    </div>
  );
}

function LastActive2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 2</p>
      </div>
    </div>
  );
}

function LastActive3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 3</p>
      </div>
    </div>
  );
}

function LastActive4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 4</p>
      </div>
    </div>
  );
}

function LastActive5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 5</p>
      </div>
    </div>
  );
}

function LastActive6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 6</p>
      </div>
    </div>
  );
}

function LastActive7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 7</p>
      </div>
    </div>
  );
}

function Frame2052() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[73px] items-center justify-start p-0 relative shrink-0">
      <LastActive1 />
      <LastActive2 />
      <LastActive3 />
      <LastActive4 />
      <LastActive5 />
      <LastActive6 />
      <LastActive7 />
    </div>
  );
}

function Tab2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[73px] items-center justify-start p-[8px] relative shrink-0 w-[884px]"
      data-name="Tab"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <LastActive />
      <Frame2052 />
    </div>
  );
}

function Title2() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row items-start justify-start pl-2 pointer-events-auto pr-12 py-0 sticky top-0 w-[916px]"
      data-name="Title"
    >
      <Tab2 />
    </div>
  );
}

function Name() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Wind</p>
      </div>
    </div>
  );
}

function NameEmail() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <div className="flex flex-row items-center self-stretch">
        <Name />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[162px]"
      data-name="Profile"
    >
      <NameEmail />
    </div>
  );
}

function TableCellSm() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2039() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-0 mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm key={i} />
      ))}
    </div>
  );
}

function Group2044() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame2039 />
    </div>
  );
}

function TableCellSm8() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm12() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm14() {
  return (
    <div
      className="bg-[#dc6803] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2040() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[102px] mt-0 p-0 relative">
      {[...Array(4).keys()].map((_, i) => (
        <TableCellSm8 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm12 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm14 key={i} />
      ))}
    </div>
  );
}

function TableCellSm16() {
  return (
    <div
      className="bg-[#dc6803] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm17() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm19() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2029() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[204px] mt-0 p-0 relative">
      <TableCellSm16 />
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm17 key={i} />
      ))}
      {[...Array(5).keys()].map((_, i) => (
        <TableCellSm19 key={i} />
      ))}
    </div>
  );
}

function TableCellSm24() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2030() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[306px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm24 key={i} />
      ))}
    </div>
  );
}

function TableCellSm32() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2031() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[408px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm32 key={i} />
      ))}
    </div>
  );
}

function TableCellSm40() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2032() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[510px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm40 key={i} />
      ))}
    </div>
  );
}

function TableCellSm48() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2042() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[612px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm48 key={i} />
      ))}
    </div>
  );
}

function Group2045() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2044 />
      <Frame2040 />
      <Frame2029 />
      <Frame2030 />
      <Frame2031 />
      <Frame2032 />
      <Frame2042 />
    </div>
  );
}

function Frame2043() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Profile />
      <Group2045 />
    </div>
  );
}

function ResourceBase() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2043 />
        </div>
      </div>
    </div>
  );
}

function XsmallTable() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-20 w-[916px]"
      data-name="Xsmall table"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase />
    </div>
  );
}

function Name1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Wet Snow</p>
      </div>
    </div>
  );
}

function NameEmail1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <div className="flex flex-row items-center self-stretch">
        <Name1 />
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[162px]"
      data-name="Profile"
    >
      <NameEmail1 />
    </div>
  );
}

function TableCellSm56() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2044() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-0 mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm56 key={i} />
      ))}
    </div>
  );
}

function Group2048() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame2044 />
    </div>
  );
}

function TableCellSm64() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm66() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm69() {
  return (
    <div
      className="bg-[#dc6803] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm71() {
  return (
    <div
      className="bg-[#b42318] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2045() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[102px] mt-0 p-0 relative">
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm64 key={i} />
      ))}
      {[...Array(3).keys()].map((_, i) => (
        <TableCellSm66 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm69 key={i} />
      ))}
      <TableCellSm71 />
    </div>
  );
}

function TableCellSm72() {
  return (
    <div
      className="bg-[#b42318] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm75() {
  return (
    <div
      className="bg-[#dc6803] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm76() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm78() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2048() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[204px] mt-0 p-0 relative">
      {[...Array(3).keys()].map((_, i) => (
        <TableCellSm72 key={i} />
      ))}
      <TableCellSm75 />
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm76 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm78 key={i} />
      ))}
    </div>
  );
}

function TableCellSm80() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2051() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[306px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm80 key={i} />
      ))}
    </div>
  );
}

function TableCellSm88() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2053() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[408px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm88 key={i} />
      ))}
    </div>
  );
}

function TableCellSm96() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2054() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[510px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm96 key={i} />
      ))}
    </div>
  );
}

function TableCellSm104() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2055() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[612px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm104 key={i} />
      ))}
    </div>
  );
}

function Group2049() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2048 />
      <Frame2045 />
      <Frame2048 />
      <Frame2051 />
      <Frame2053 />
      <Frame2054 />
      <Frame2055 />
    </div>
  );
}

function Frame2056() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Profile1 />
      <Group2049 />
    </div>
  );
}

function ResourceBase1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2056 />
        </div>
      </div>
    </div>
  );
}

function XsmallTable1() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-[120px] w-[916px]"
      data-name="Xsmall table"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase1 />
    </div>
  );
}

function Name2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Ice</p>
      </div>
    </div>
  );
}

function NameEmail2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <div className="flex flex-row items-center self-stretch">
        <Name2 />
      </div>
    </div>
  );
}

function Profile2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[162px]"
      data-name="Profile"
    >
      <NameEmail2 />
    </div>
  );
}

function TableCellSm112() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2057() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-0 mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm112 key={i} />
      ))}
    </div>
  );
}

function Group2050() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame2057 />
    </div>
  );
}

function TableCellSm120() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm126() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2058() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[102px] mt-0 p-0 relative">
      {[...Array(6).keys()].map((_, i) => (
        <TableCellSm120 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm126 key={i} />
      ))}
    </div>
  );
}

function TableCellSm128() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm130() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2059() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[204px] mt-0 p-0 relative">
      {[...Array(2).keys()].map((_, i) => (
        <TableCellSm128 key={i} />
      ))}
      {[...Array(6).keys()].map((_, i) => (
        <TableCellSm130 key={i} />
      ))}
    </div>
  );
}

function TableCellSm136() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2060() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[306px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm136 key={i} />
      ))}
    </div>
  );
}

function TableCellSm144() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2061() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[408px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm144 key={i} />
      ))}
    </div>
  );
}

function TableCellSm152() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2062() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[510px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm152 key={i} />
      ))}
    </div>
  );
}

function TableCellSm160() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2063() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[612px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm160 key={i} />
      ))}
    </div>
  );
}

function Group2051() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2050 />
      <Frame2058 />
      <Frame2059 />
      <Frame2060 />
      <Frame2061 />
      <Frame2062 />
      <Frame2063 />
    </div>
  );
}

function Frame2064() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Profile2 />
      <Group2051 />
    </div>
  );
}

function ResourceBase2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2064 />
        </div>
      </div>
    </div>
  );
}

function XsmallTable2() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-40 w-[916px]"
      data-name="Xsmall table"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase2 />
    </div>
  );
}

function Name3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Heavy Preciptiation
        </p>
      </div>
    </div>
  );
}

function NameEmail3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <div className="flex flex-row items-center self-stretch">
        <Name3 />
      </div>
    </div>
  );
}

function Profile3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[162px]"
      data-name="Profile"
    >
      <NameEmail3 />
    </div>
  );
}

function TableCellSm168() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2065() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-0 mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm168 key={i} />
      ))}
    </div>
  );
}

function Group2052() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame2065 />
    </div>
  );
}

function TableCellSm176() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm180() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2066() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[102px] mt-0 p-0 relative">
      {[...Array(4).keys()].map((_, i) => (
        <TableCellSm176 key={i} />
      ))}
      {[...Array(4).keys()].map((_, i) => (
        <TableCellSm180 key={i} />
      ))}
    </div>
  );
}

function TableCellSm184() {
  return (
    <div
      className="bg-[#fdb022] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function TableCellSm189() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2067() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[204px] mt-0 p-0 relative">
      {[...Array(5).keys()].map((_, i) => (
        <TableCellSm184 key={i} />
      ))}
      {[...Array(3).keys()].map((_, i) => (
        <TableCellSm189 key={i} />
      ))}
    </div>
  );
}

function TableCellSm192() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2068() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[306px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm192 key={i} />
      ))}
    </div>
  );
}

function TableCellSm200() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2069() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[408px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm200 key={i} />
      ))}
    </div>
  );
}

function TableCellSm208() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2070() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[510px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm208 key={i} />
      ))}
    </div>
  );
}

function TableCellSm216() {
  return (
    <div
      className="bg-[#039855] relative rounded-[5px] shrink-0 w-2.5"
      data-name="Table Cell Sm"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] w-2.5" />
      </div>
    </div>
  );
}

function Frame2071() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-0.5 items-center justify-start ml-[612px] mt-0 p-0 relative">
      {[...Array(8).keys()].map((_, i) => (
        <TableCellSm216 key={i} />
      ))}
    </div>
  );
}

function Group2053() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2052 />
      <Frame2066 />
      <Frame2067 />
      <Frame2068 />
      <Frame2069 />
      <Frame2070 />
      <Frame2071 />
    </div>
  );
}

function Frame2072() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Profile3 />
      <Group2053 />
    </div>
  );
}

function ResourceBase3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2072 />
        </div>
      </div>
    </div>
  );
}

function XsmallTable3() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-[200px] w-[916px]"
      data-name="Xsmall table"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase3 />
    </div>
  );
}

function Group2034() {
  return (
    <div className="absolute contents left-0 top-0">
      <PrimaryTableTitle />
      <div
        className="absolute bottom-0 left-0 pointer-events-none top-7"
        style={{ height: "calc(100% - 28px)" }}
      >
        <Title2 />
      </div>
      <XsmallTable />
      <XsmallTable1 />
      <XsmallTable2 />
      <XsmallTable3 />
    </div>
  );
}

function LastActive8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 shrink-0 w-[177px]"
      data-name="Last Active"
    />
  );
}

function LastActive9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[95px]"
      data-name="Last Active"
    >
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-justify tracking-[1.7px] uppercase">
        <p className="block leading-[18px]">1 2 3 4 5 6 7 8</p>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0 w-[911px]"
      data-name="Tab"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <LastActive8 />
      {[...Array(7).keys()].map((_, i) => (
        <LastActive9 key={i} />
      ))}
    </div>
  );
}

function Title3() {
  return (
    <div
      className="bg-[#14171a] shrink-0 sticky top-0 w-full"
      data-name="Title"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pl-2 pr-12 py-0 relative w-full">
          <Tab3 />
        </div>
      </div>
    </div>
  );
}

function Frame2046() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[250px] items-start justify-start left-0 px-0 py-[62px] top-0 w-[916px]">
      <Group2034 />
      <Title3 />
    </div>
  );
}

function Tooltip() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-1 items-start justify-start left-[443px] p-[12px] rounded shadow-[0px_4px_6px_-2px_rgba(34,34,34,0.03),0px_12px_16px_-4px_rgba(34,34,34,0.08)] top-0 w-[164px]"
      data-name="Tooltip"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[20px]">19 mph N</p>
      </div>
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#afb5bc] text-[12px] text-left"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[18px]">
          {`8-11 am EST `}
          <br aria-hidden="true" />
          25 Nov 2024
        </p>
      </div>
      <div
        className="absolute bottom-[-8px] h-2.5 left-1/2 translate-x-[-50%] w-4"
        data-name="arrow"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 10"
        >
          <path
            d={svgPaths.p1f793a40}
            fill="var(--fill-0, #353A40)"
            id="arrow"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame2073() {
  return (
    <div className="absolute h-[250px] left-0 top-[274px] w-[916px]">
      <Frame2046 />
      <Tooltip />
    </div>
  );
}

function Type2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Type"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">
          Peak System Wind Gust (mph)
        </p>
      </div>
    </div>
  );
}

function Download1() {
  return (
    <div className="relative shrink-0 size-5" data-name="download">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="download">
          <mask
            height="20"
            id="mask0_37_20005"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_20005)">
            <g id="vector">
              <path d={svgPaths.p1d2d6000} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function PrimaryTableTitle1() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start left-0 px-4 py-1 top-0 w-[916px]"
      data-name="Primary table title"
    >
      <Type2 />
      <div
        className="basis-0 grow h-full min-h-px min-w-px shrink-0"
        data-name="filler"
      />
      <Download1 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_right">
          <mask
            height="20"
            id="mask0_37_19959"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_19959)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">90% Probability</p>
      </div>
    </div>
  );
}

function NameEmail4() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name4 />
    </div>
  );
}

function Profile4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight />
      <NameEmail4 />
    </div>
  );
}

function Wrapper18() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">7 S</p>
      </div>
    </div>
  );
}

function TableCellMed() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper18 />
    </div>
  );
}

function Wrapper19() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">7 NW</p>
      </div>
    </div>
  );
}

function TableCellMed1() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper19 />
    </div>
  );
}

function Wrapper20() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">8 W</p>
      </div>
    </div>
  );
}

function TableCellMed2() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper20 />
    </div>
  );
}

function Wrapper21() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">9 NW</p>
      </div>
    </div>
  );
}

function TableCellMed3() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper21 />
    </div>
  );
}

function Wrapper22() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">7 N</p>
      </div>
    </div>
  );
}

function TableCellMed4() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper22 />
    </div>
  );
}

function Wrapper23() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">8 S</p>
      </div>
    </div>
  );
}

function TableCellMed5() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper23 />
    </div>
  );
}

function Wrapper24() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 S</p>
      </div>
    </div>
  );
}

function TableCellMed6() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper24 />
    </div>
  );
}

function Frame2074() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <TableCellMed />
      <TableCellMed1 />
      <TableCellMed2 />
      <TableCellMed3 />
      <TableCellMed4 />
      <TableCellMed5 />
      <TableCellMed6 />
    </div>
  );
}

function Frame2075() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[893px]">
      <Profile4 />
      <Frame2074 />
    </div>
  );
}

function ResourceBase4() {
  return (
    <div
      className="h-[54px] relative shrink-0 w-full"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2075 />
    </div>
  );
}

function PrimaryTableRowMed() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start left-0 p-0 top-[66px] w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase4 />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_right">
          <mask
            height="20"
            id="mask0_37_19959"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_19959)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">75% Probability</p>
      </div>
    </div>
  );
}

function NameEmail5() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name5 />
    </div>
  );
}

function Profile5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight1 />
      <NameEmail5 />
    </div>
  );
}

function Wrapper25() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">8 S</p>
      </div>
    </div>
  );
}

function TableCellMed7() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper25 />
    </div>
  );
}

function Wrapper26() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">{`9  NW`}</p>
      </div>
    </div>
  );
}

function TableCellMed8() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper26 />
    </div>
  );
}

function Wrapper27() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">{`10  W`}</p>
      </div>
    </div>
  );
}

function TableCellMed9() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper27 />
    </div>
  );
}

function Wrapper28() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 NW</p>
      </div>
    </div>
  );
}

function TableCellMed10() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper28 />
    </div>
  );
}

function Wrapper29() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 N</p>
      </div>
    </div>
  );
}

function TableCellMed11() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper29 />
    </div>
  );
}

function Wrapper30() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">13 S</p>
      </div>
    </div>
  );
}

function TableCellMed12() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper30 />
    </div>
  );
}

function Wrapper31() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">17 S</p>
      </div>
    </div>
  );
}

function TableCellMed13() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper31 />
    </div>
  );
}

function Frame2076() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <TableCellMed7 />
      <TableCellMed8 />
      <TableCellMed9 />
      <TableCellMed10 />
      <TableCellMed11 />
      <TableCellMed12 />
      <TableCellMed13 />
    </div>
  );
}

function Frame2077() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[893px]">
      <Profile5 />
      <Frame2076 />
    </div>
  );
}

function ResourceBase5() {
  return (
    <div
      className="h-[54px] relative shrink-0 w-full"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2077 />
    </div>
  );
}

function PrimaryTableRowMed1() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start left-0 p-0 top-[120px] w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase5 />
    </div>
  );
}

function ArrowDropDown3() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_drop_down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_drop_down">
          <mask
            height="20"
            id="mask0_37_19981"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_19981)">
            <g id="vector">
              <path d={svgPaths.p1889d880} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Mean Scenario</p>
      </div>
    </div>
  );
}

function NameEmail6() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name6 />
    </div>
  );
}

function Profile6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowDropDown3 />
      <NameEmail6 />
    </div>
  );
}

function Wrapper32() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">9 S</p>
      </div>
    </div>
  );
}

function TableCellMed14() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper32 />
    </div>
  );
}

function Wrapper33() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">{`10  NW`}</p>
      </div>
    </div>
  );
}

function TableCellMed15() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper33 />
    </div>
  );
}

function Wrapper34() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 W</p>
      </div>
    </div>
  );
}

function TableCellMed16() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper34 />
    </div>
  );
}

function Wrapper35() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">16 NW</p>
      </div>
    </div>
  );
}

function TableCellMed17() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper35 />
    </div>
  );
}

function Wrapper36() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">16 N</p>
      </div>
    </div>
  );
}

function TableCellMed18() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper36 />
    </div>
  );
}

function Wrapper37() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 S</p>
      </div>
    </div>
  );
}

function TableCellMed19() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper37 />
    </div>
  );
}

function Wrapper38() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 S</p>
      </div>
    </div>
  );
}

function TableCellMed20() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper38 />
    </div>
  );
}

function Frame2078() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <TableCellMed14 />
      <TableCellMed15 />
      <TableCellMed16 />
      <TableCellMed17 />
      <TableCellMed18 />
      <TableCellMed19 />
      <TableCellMed20 />
    </div>
  );
}

function Frame2079() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[894px]">
      <Profile6 />
      <Frame2078 />
    </div>
  );
}

function ResourceBase6() {
  return (
    <div
      className="h-[54px] relative shrink-0 w-full"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2079 />
    </div>
  );
}

function PrimaryTableRowMed2() {
  return (
    <div
      className="absolute bg-[#01476f] box-border content-stretch flex flex-col gap-1 items-start justify-start left-0 p-0 top-[174px] w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#02a3fe] border-[0px_0px_3px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase6 />
    </div>
  );
}

function Name7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Battleboro</p>
      </div>
    </div>
  );
}

function NameEmail7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name7 />
    </div>
  );
}

function Profile7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail7 />
    </div>
  );
}

function Wrapper39() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 S</p>
      </div>
    </div>
  );
}

function TableCellMed21() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper39 />
    </div>
  );
}

function Wrapper40() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 NW</p>
      </div>
    </div>
  );
}

function TableCellMed22() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper40 />
    </div>
  );
}

function Wrapper41() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 W</p>
      </div>
    </div>
  );
}

function TableCellMed23() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper41 />
    </div>
  );
}

function Wrapper42() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">20 W</p>
      </div>
    </div>
  );
}

function TableCellMed24() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper42 />
    </div>
  );
}

function Wrapper43() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">18 N</p>
      </div>
    </div>
  );
}

function TableCellMed25() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper43 />
    </div>
  );
}

function Wrapper44() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 S</p>
      </div>
    </div>
  );
}

function TableCellMed26() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper44 />
    </div>
  );
}

function Wrapper45() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 SW</p>
      </div>
    </div>
  );
}

function TableCellMed27() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper45 />
    </div>
  );
}

function Frame2080() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed21 />
      <TableCellMed22 />
      <TableCellMed23 />
      <TableCellMed24 />
      <TableCellMed25 />
      <TableCellMed26 />
      <TableCellMed27 />
    </div>
  );
}

function Frame2081() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile7 />
      <Frame2080 />
    </div>
  );
}

function ResourceBase7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2081 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[228px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase7 />
    </div>
  );
}

function Name8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Colchester</p>
      </div>
    </div>
  );
}

function NameEmail8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name8 />
    </div>
  );
}

function Profile8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail8 />
    </div>
  );
}

function Wrapper46() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 SE</p>
      </div>
    </div>
  );
}

function TableCellMed28() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper46 />
    </div>
  );
}

function Wrapper47() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">13 NW</p>
      </div>
    </div>
  );
}

function TableCellMed29() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper47 />
    </div>
  );
}

function Wrapper48() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">17 S</p>
      </div>
    </div>
  );
}

function TableCellMed30() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper48 />
    </div>
  );
}

function Wrapper49() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 S</p>
      </div>
    </div>
  );
}

function TableCellMed31() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper49 />
    </div>
  );
}

function Wrapper50() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 N</p>
      </div>
    </div>
  );
}

function TableCellMed32() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper50 />
    </div>
  );
}

function Wrapper51() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">28 S</p>
      </div>
    </div>
  );
}

function TableCellMed33() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper51 />
    </div>
  );
}

function Wrapper52() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">31 S</p>
      </div>
    </div>
  );
}

function TableCellMed34() {
  return (
    <div
      className="bg-[#dc6803] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper52 />
    </div>
  );
}

function Frame2082() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed28 />
      <TableCellMed29 />
      <TableCellMed30 />
      <TableCellMed31 />
      <TableCellMed32 />
      <TableCellMed33 />
      <TableCellMed34 />
    </div>
  );
}

function Frame2083() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile8 />
      <Frame2082 />
    </div>
  );
}

function ResourceBase8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2083 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed1() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[268px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase8 />
    </div>
  );
}

function Name9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Full Service</p>
      </div>
    </div>
  );
}

function NameEmail9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name9 />
    </div>
  );
}

function Profile9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail9 />
    </div>
  );
}

function Wrapper53() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 S</p>
      </div>
    </div>
  );
}

function TableCellMed35() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper53 />
    </div>
  );
}

function Wrapper54() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 NW</p>
      </div>
    </div>
  );
}

function TableCellMed36() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper54 />
    </div>
  );
}

function Wrapper55() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">18 SW</p>
      </div>
    </div>
  );
}

function TableCellMed37() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper55 />
    </div>
  );
}

function Wrapper56() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 N</p>
      </div>
    </div>
  );
}

function TableCellMed38() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper56 />
    </div>
  );
}

function Wrapper58() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">28 S</p>
      </div>
    </div>
  );
}

function TableCellMed40() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper58 />
    </div>
  );
}

function Wrapper59() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">31 S</p>
      </div>
    </div>
  );
}

function TableCellMed41() {
  return (
    <div
      className="bg-[#dc6803] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper59 />
    </div>
  );
}

function Frame2084() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed35 />
      <TableCellMed36 />
      <TableCellMed37 />
      {[...Array(2).keys()].map((_, i) => (
        <TableCellMed38 key={i} />
      ))}
      <TableCellMed40 />
      <TableCellMed41 />
    </div>
  );
}

function Frame2085() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile9 />
      <Frame2084 />
    </div>
  );
}

function ResourceBase9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2085 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed2() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[308px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase9 />
    </div>
  );
}

function Name10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Jacksonville</p>
      </div>
    </div>
  );
}

function NameEmail10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name10 />
    </div>
  );
}

function Profile10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail10 />
    </div>
  );
}

function Wrapper60() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">10 W</p>
      </div>
    </div>
  );
}

function TableCellMed42() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper60 />
    </div>
  );
}

function Wrapper61() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 NW</p>
      </div>
    </div>
  );
}

function TableCellMed43() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper61 />
    </div>
  );
}

function Wrapper62() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 W</p>
      </div>
    </div>
  );
}

function TableCellMed44() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper62 />
    </div>
  );
}

function Wrapper63() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">20 W</p>
      </div>
    </div>
  );
}

function TableCellMed45() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper63 />
    </div>
  );
}

function Wrapper64() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">17 N</p>
      </div>
    </div>
  );
}

function TableCellMed46() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper64 />
    </div>
  );
}

function Wrapper65() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">16 SE</p>
      </div>
    </div>
  );
}

function TableCellMed47() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper65 />
    </div>
  );
}

function Wrapper66() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 SW</p>
      </div>
    </div>
  );
}

function TableCellMed48() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper66 />
    </div>
  );
}

function Frame2086() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed42 />
      <TableCellMed43 />
      <TableCellMed44 />
      <TableCellMed45 />
      <TableCellMed46 />
      <TableCellMed47 />
      <TableCellMed48 />
    </div>
  );
}

function Frame2087() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile10 />
      <Frame2086 />
    </div>
  );
}

function ResourceBase10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2087 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed3() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[348px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase10 />
    </div>
  );
}

function Name11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Middlebury</p>
      </div>
    </div>
  );
}

function NameEmail11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name11 />
    </div>
  );
}

function Profile11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail11 />
    </div>
  );
}

function Wrapper67() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 S</p>
      </div>
    </div>
  );
}

function TableCellMed49() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper67 />
    </div>
  );
}

function Wrapper68() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 NW</p>
      </div>
    </div>
  );
}

function TableCellMed50() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper68 />
    </div>
  );
}

function Wrapper69() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">16 SW</p>
      </div>
    </div>
  );
}

function TableCellMed51() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper69 />
    </div>
  );
}

function Wrapper70() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">23 N</p>
      </div>
    </div>
  );
}

function TableCellMed52() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper70 />
    </div>
  );
}

function Wrapper71() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 N</p>
      </div>
    </div>
  );
}

function TableCellMed53() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper71 />
    </div>
  );
}

function Wrapper72() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">24 S</p>
      </div>
    </div>
  );
}

function TableCellMed54() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper72 />
    </div>
  );
}

function Wrapper73() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">27 S</p>
      </div>
    </div>
  );
}

function TableCellMed55() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper73 />
    </div>
  );
}

function Frame2088() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed49 />
      <TableCellMed50 />
      <TableCellMed51 />
      <TableCellMed52 />
      <TableCellMed53 />
      <TableCellMed54 />
      <TableCellMed55 />
    </div>
  );
}

function Frame2089() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile11 />
      <Frame2088 />
    </div>
  );
}

function ResourceBase11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2089 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed4() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[388px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase11 />
    </div>
  );
}

function Name12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Montpelier</p>
      </div>
    </div>
  );
}

function NameEmail12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name12 />
    </div>
  );
}

function Profile12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail12 />
    </div>
  );
}

function Wrapper74() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 S</p>
      </div>
    </div>
  );
}

function TableCellMed56() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper74 />
    </div>
  );
}

function Wrapper75() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 NW</p>
      </div>
    </div>
  );
}

function TableCellMed57() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper75 />
    </div>
  );
}

function Wrapper76() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">16 SW</p>
      </div>
    </div>
  );
}

function TableCellMed58() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper76 />
    </div>
  );
}

function Wrapper77() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 NW</p>
      </div>
    </div>
  );
}

function TableCellMed59() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper77 />
    </div>
  );
}

function Wrapper78() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 N</p>
      </div>
    </div>
  );
}

function TableCellMed60() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper78 />
    </div>
  );
}

function Wrapper79() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 S</p>
      </div>
    </div>
  );
}

function TableCellMed61() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper79 />
    </div>
  );
}

function Wrapper80() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">28 S</p>
      </div>
    </div>
  );
}

function TableCellMed62() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper80 />
    </div>
  );
}

function Frame2090() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed56 />
      <TableCellMed57 />
      <TableCellMed58 />
      <TableCellMed59 />
      <TableCellMed60 />
      <TableCellMed61 />
      <TableCellMed62 />
    </div>
  );
}

function Frame2091() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile12 />
      <Frame2090 />
    </div>
  );
}

function ResourceBase12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2091 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed5() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[428px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase12 />
    </div>
  );
}

function Name13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Northfield</p>
      </div>
    </div>
  );
}

function NameEmail13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name13 />
    </div>
  );
}

function Profile13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail13 />
    </div>
  );
}

function Wrapper81() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">9 W</p>
      </div>
    </div>
  );
}

function TableCellMed63() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper81 />
    </div>
  );
}

function Wrapper82() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 NW</p>
      </div>
    </div>
  );
}

function TableCellMed64() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper82 />
    </div>
  );
}

function Wrapper83() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">13 W</p>
      </div>
    </div>
  );
}

function TableCellMed65() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper83 />
    </div>
  );
}

function Wrapper84() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">18 NW</p>
      </div>
    </div>
  );
}

function TableCellMed66() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper84 />
    </div>
  );
}

function Wrapper85() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">17 N</p>
      </div>
    </div>
  );
}

function TableCellMed67() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper85 />
    </div>
  );
}

function Wrapper86() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 S</p>
      </div>
    </div>
  );
}

function TableCellMed68() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper86 />
    </div>
  );
}

function Wrapper87() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 SW</p>
      </div>
    </div>
  );
}

function TableCellMed69() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper87 />
    </div>
  );
}

function Frame2092() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed63 />
      <TableCellMed64 />
      <TableCellMed65 />
      <TableCellMed66 />
      <TableCellMed67 />
      <TableCellMed68 />
      <TableCellMed69 />
    </div>
  );
}

function Frame2093() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile13 />
      <Frame2092 />
    </div>
  );
}

function ResourceBase13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2093 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed6() {
  return (
    <div
      className="absolute bg-[#353a40] left-0 top-[468px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-center overflow-clip px-0 py-0.5 relative w-[916px]">
        <ResourceBase13 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Name14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Poultney</p>
      </div>
    </div>
  );
}

function NameEmail14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name14 />
    </div>
  );
}

function Profile14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail14 />
    </div>
  );
}

function Wrapper88() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">10 S</p>
      </div>
    </div>
  );
}

function TableCellMed70() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper88 />
    </div>
  );
}

function Wrapper89() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">13 NW</p>
      </div>
    </div>
  );
}

function TableCellMed71() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper89 />
    </div>
  );
}

function Wrapper90() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">15 W</p>
      </div>
    </div>
  );
}

function TableCellMed72() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper90 />
    </div>
  );
}

function Wrapper91() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 NW</p>
      </div>
    </div>
  );
}

function TableCellMed73() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper91 />
    </div>
  );
}

function Wrapper92() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 N</p>
      </div>
    </div>
  );
}

function TableCellMed74() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper92 />
    </div>
  );
}

function Wrapper93() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 S</p>
      </div>
    </div>
  );
}

function TableCellMed75() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper93 />
    </div>
  );
}

function Wrapper94() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 S</p>
      </div>
    </div>
  );
}

function TableCellMed76() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper94 />
    </div>
  );
}

function Frame2094() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed70 />
      <TableCellMed71 />
      <TableCellMed72 />
      <TableCellMed73 />
      <TableCellMed74 />
      <TableCellMed75 />
      <TableCellMed76 />
    </div>
  );
}

function Frame2095() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile14 />
      <Frame2094 />
    </div>
  );
}

function ResourceBase14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2095 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed7() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[508px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase14 />
    </div>
  );
}

function Name15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Royalton</p>
      </div>
    </div>
  );
}

function NameEmail15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name15 />
    </div>
  );
}

function Profile15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail15 />
    </div>
  );
}

function Wrapper95() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 W</p>
      </div>
    </div>
  );
}

function TableCellMed77() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper95 />
    </div>
  );
}

function Wrapper96() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">13 NW</p>
      </div>
    </div>
  );
}

function TableCellMed78() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper96 />
    </div>
  );
}

function Wrapper97() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">15 SW</p>
      </div>
    </div>
  );
}

function TableCellMed79() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper97 />
    </div>
  );
}

function Wrapper98() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 N</p>
      </div>
    </div>
  );
}

function TableCellMed80() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper98 />
    </div>
  );
}

function Wrapper99() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 N</p>
      </div>
    </div>
  );
}

function TableCellMed81() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper99 />
    </div>
  );
}

function Wrapper100() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">22 S</p>
      </div>
    </div>
  );
}

function TableCellMed82() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper100 />
    </div>
  );
}

function Wrapper101() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 S</p>
      </div>
    </div>
  );
}

function TableCellMed83() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper101 />
    </div>
  );
}

function Frame2096() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed77 />
      <TableCellMed78 />
      <TableCellMed79 />
      <TableCellMed80 />
      <TableCellMed81 />
      <TableCellMed82 />
      <TableCellMed83 />
    </div>
  );
}

function Frame2097() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile15 />
      <Frame2096 />
    </div>
  );
}

function ResourceBase15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2097 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed8() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[548px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase15 />
    </div>
  );
}

function Name16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Rutland</p>
      </div>
    </div>
  );
}

function NameEmail16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name16 />
    </div>
  );
}

function Profile16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail16 />
    </div>
  );
}

function Wrapper102() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 S</p>
      </div>
    </div>
  );
}

function TableCellMed84() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper102 />
    </div>
  );
}

function Wrapper103() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 NW</p>
      </div>
    </div>
  );
}

function TableCellMed85() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper103 />
    </div>
  );
}

function Wrapper104() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">18 W</p>
      </div>
    </div>
  );
}

function TableCellMed86() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper104 />
    </div>
  );
}

function Wrapper105() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 NW</p>
      </div>
    </div>
  );
}

function TableCellMed87() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper105 />
    </div>
  );
}

function Wrapper106() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 N</p>
      </div>
    </div>
  );
}

function TableCellMed88() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper106 />
    </div>
  );
}

function Wrapper107() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">26 SE</p>
      </div>
    </div>
  );
}

function TableCellMed89() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper107 />
    </div>
  );
}

function Wrapper108() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">29 S</p>
      </div>
    </div>
  );
}

function TableCellMed90() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper108 />
    </div>
  );
}

function Frame2098() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed84 />
      <TableCellMed85 />
      <TableCellMed86 />
      <TableCellMed87 />
      <TableCellMed88 />
      <TableCellMed89 />
      <TableCellMed90 />
    </div>
  );
}

function Frame2099() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile16 />
      <Frame2098 />
    </div>
  );
}

function ResourceBase16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2099 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed9() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[588px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase16 />
    </div>
  );
}

function Name17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Springfield</p>
      </div>
    </div>
  );
}

function NameEmail17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name17 />
    </div>
  );
}

function Profile17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail17 />
    </div>
  );
}

function Wrapper109() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">10 SW</p>
      </div>
    </div>
  );
}

function TableCellMed91() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper109 />
    </div>
  );
}

function Wrapper110() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 NW</p>
      </div>
    </div>
  );
}

function TableCellMed92() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper110 />
    </div>
  );
}

function Wrapper111() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">15 W</p>
      </div>
    </div>
  );
}

function TableCellMed93() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper111 />
    </div>
  );
}

function Wrapper112() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">20 W</p>
      </div>
    </div>
  );
}

function TableCellMed94() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper112 />
    </div>
  );
}

function Wrapper113() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">18 N</p>
      </div>
    </div>
  );
}

function TableCellMed95() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper113 />
    </div>
  );
}

function Wrapper114() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">17 S</p>
      </div>
    </div>
  );
}

function TableCellMed96() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper114 />
    </div>
  );
}

function Wrapper115() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 S</p>
      </div>
    </div>
  );
}

function TableCellMed97() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper115 />
    </div>
  );
}

function Frame2100() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed91 />
      <TableCellMed92 />
      <TableCellMed93 />
      <TableCellMed94 />
      <TableCellMed95 />
      <TableCellMed96 />
      <TableCellMed97 />
    </div>
  );
}

function Frame2101() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile17 />
      <Frame2100 />
    </div>
  );
}

function ResourceBase17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2101 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed10() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[628px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase17 />
    </div>
  );
}

function Name18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">St Albans</p>
      </div>
    </div>
  );
}

function NameEmail18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name18 />
    </div>
  );
}

function Profile18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail18 />
    </div>
  );
}

function Wrapper116() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">10 SE</p>
      </div>
    </div>
  );
}

function TableCellMed98() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper116 />
    </div>
  );
}

function Wrapper117() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 NW</p>
      </div>
    </div>
  );
}

function TableCellMed99() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper117 />
    </div>
  );
}

function Wrapper118() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">15 S</p>
      </div>
    </div>
  );
}

function TableCellMed100() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper118 />
    </div>
  );
}

function Wrapper119() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 S</p>
      </div>
    </div>
  );
}

function TableCellMed101() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper119 />
    </div>
  );
}

function Wrapper120() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 N</p>
      </div>
    </div>
  );
}

function TableCellMed102() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper120 />
    </div>
  );
}

function Wrapper121() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">26 S</p>
      </div>
    </div>
  );
}

function TableCellMed103() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper121 />
    </div>
  );
}

function Wrapper122() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">28 S</p>
      </div>
    </div>
  );
}

function TableCellMed104() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper122 />
    </div>
  );
}

function Frame2102() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed98 />
      <TableCellMed99 />
      <TableCellMed100 />
      <TableCellMed101 />
      <TableCellMed102 />
      <TableCellMed103 />
      <TableCellMed104 />
    </div>
  );
}

function Frame2103() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile18 />
      <Frame2102 />
    </div>
  );
}

function ResourceBase18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2103 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed11() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[668px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase18 />
    </div>
  );
}

function Name19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">St Johnsbury</p>
      </div>
    </div>
  );
}

function NameEmail19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name19 />
    </div>
  );
}

function Profile19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[206px]"
      data-name="Profile"
    >
      <NameEmail19 />
    </div>
  );
}

function Wrapper123() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">9 SW</p>
      </div>
    </div>
  );
}

function TableCellMed105() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper123 />
    </div>
  );
}

function Wrapper124() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 NW</p>
      </div>
    </div>
  );
}

function TableCellMed106() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper124 />
    </div>
  );
}

function Wrapper125() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 W</p>
      </div>
    </div>
  );
}

function TableCellMed107() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper125 />
    </div>
  );
}

function Wrapper126() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">18 N</p>
      </div>
    </div>
  );
}

function TableCellMed108() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper126 />
    </div>
  );
}

function Wrapper127() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 N</p>
      </div>
    </div>
  );
}

function TableCellMed109() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper127 />
    </div>
  );
}

function Wrapper128() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 S</p>
      </div>
    </div>
  );
}

function TableCellMed110() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper128 />
    </div>
  );
}

function Wrapper129() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 S</p>
      </div>
    </div>
  );
}

function TableCellMed111() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper129 />
    </div>
  );
}

function Frame2104() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellMed105 />
      <TableCellMed106 />
      <TableCellMed107 />
      <TableCellMed108 />
      <TableCellMed109 />
      <TableCellMed110 />
      <TableCellMed111 />
    </div>
  );
}

function Frame2105() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[859px]">
      <Profile19 />
      <Frame2104 />
    </div>
  );
}

function ResourceBase19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[15px] py-2 relative w-full">
          <Frame2105 />
        </div>
      </div>
    </div>
  );
}

function SecondaryTableRowMed12() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-0.5 items-start justify-center left-0 px-0 py-0.5 top-[708px] w-[916px]"
      data-name="Secondary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase19 />
    </div>
  );
}

function Group2035() {
  return (
    <div className="absolute contents left-0 top-[228px]">
      <SecondaryTableRowMed />
      <SecondaryTableRowMed1 />
      <SecondaryTableRowMed2 />
      <SecondaryTableRowMed3 />
      <SecondaryTableRowMed4 />
      <SecondaryTableRowMed5 />
      <SecondaryTableRowMed6 />
      <SecondaryTableRowMed7 />
      <SecondaryTableRowMed8 />
      <SecondaryTableRowMed9 />
      <SecondaryTableRowMed10 />
      <SecondaryTableRowMed11 />
      <SecondaryTableRowMed12 />
    </div>
  );
}

function ArrowRight15() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_right">
          <mask
            height="20"
            id="mask0_37_19959"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_19959)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name20() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25% Probability</p>
      </div>
    </div>
  );
}

function NameEmail20() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name20 />
    </div>
  );
}

function Profile20() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight15 />
      <NameEmail20 />
    </div>
  );
}

function Wrapper130() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">11 S</p>
      </div>
    </div>
  );
}

function TableCellMed112() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper130 />
    </div>
  );
}

function Wrapper131() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 NW</p>
      </div>
    </div>
  );
}

function TableCellMed113() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper131 />
    </div>
  );
}

function Wrapper132() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">16 W</p>
      </div>
    </div>
  );
}

function TableCellMed114() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper132 />
    </div>
  );
}

function Wrapper133() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 NW</p>
      </div>
    </div>
  );
}

function TableCellMed115() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper133 />
    </div>
  );
}

function Wrapper134() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 N</p>
      </div>
    </div>
  );
}

function TableCellMed116() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper134 />
    </div>
  );
}

function Wrapper135() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 S</p>
      </div>
    </div>
  );
}

function TableCellMed117() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper135 />
    </div>
  );
}

function Wrapper136() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">28 S</p>
      </div>
    </div>
  );
}

function TableCellMed118() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper136 />
    </div>
  );
}

function Frame2106() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <TableCellMed112 />
      <TableCellMed113 />
      <TableCellMed114 />
      <TableCellMed115 />
      <TableCellMed116 />
      <TableCellMed117 />
      <TableCellMed118 />
    </div>
  );
}

function Frame2107() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[893px]">
      <Profile20 />
      <Frame2106 />
    </div>
  );
}

function ResourceBase20() {
  return (
    <div
      className="h-[54px] relative shrink-0 w-full"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2107 />
    </div>
  );
}

function PrimaryTableRowMed3() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start left-0 p-0 top-[752px] w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase20 />
    </div>
  );
}

function ArrowRight16() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow_right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow_right">
          <mask
            height="20"
            id="mask0_37_19959"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_37_19959)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Open_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">10% Probability</p>
      </div>
    </div>
  );
}

function NameEmail21() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name21 />
    </div>
  );
}

function Profile21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight16 />
      <NameEmail21 />
    </div>
  );
}

function Wrapper137() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">12 S</p>
      </div>
    </div>
  );
}

function TableCellMed119() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper137 />
    </div>
  );
}

function Wrapper138() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">14 NW</p>
      </div>
    </div>
  );
}

function TableCellMed120() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper138 />
    </div>
  );
}

function Wrapper139() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">19 W</p>
      </div>
    </div>
  );
}

function TableCellMed121() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper139 />
    </div>
  );
}

function Wrapper140() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 NW</p>
      </div>
    </div>
  );
}

function TableCellMed122() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper140 />
    </div>
  );
}

function Wrapper141() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 N</p>
      </div>
    </div>
  );
}

function TableCellMed123() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper141 />
    </div>
  );
}

function Wrapper142() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">31 S</p>
      </div>
    </div>
  );
}

function TableCellMed124() {
  return (
    <div
      className="bg-[#dc6803] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper142 />
    </div>
  );
}

function Wrapper143() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">33 S</p>
      </div>
    </div>
  );
}

function TableCellMed125() {
  return (
    <div
      className="bg-[#dc6803] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
      data-name="Table Cell Med"
    >
      <Wrapper143 />
    </div>
  );
}

function Frame2108() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <TableCellMed119 />
      <TableCellMed120 />
      <TableCellMed121 />
      <TableCellMed122 />
      <TableCellMed123 />
      <TableCellMed124 />
      <TableCellMed125 />
    </div>
  );
}

function Frame2109() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[893px]">
      <Profile21 />
      <Frame2108 />
    </div>
  );
}

function ResourceBase21() {
  return (
    <div
      className="h-[54px] relative shrink-0 w-full"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2109 />
    </div>
  );
}

function PrimaryTableRowMed4() {
  return (
    <div
      className="absolute bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start left-0 p-0 top-[806px] w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase21 />
    </div>
  );
}

function Frame2110() {
  return (
    <div className="absolute h-[860px] left-0 top-[548px] w-[916px]">
      <PrimaryTableTitle1 />
      <PrimaryTableRowMed />
      <PrimaryTableRowMed1 />
      <PrimaryTableRowMed2 />
      <Group2035 />
      <PrimaryTableRowMed3 />
      <PrimaryTableRowMed4 />
      <div
        className="absolute inset-[9.77%_82.97%_89.07%_15.94%]"
        data-name="-g-ic_info_gray"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p34ca5a00}
            fill="var(--fill-0, #02A3FE)"
            fillRule="evenodd"
            id="-g-ic_info_gray"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[16.28%_82.97%_82.56%_15.94%]"
        data-name="-g-ic_info_gray"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p34ca5a00}
            fill="var(--fill-0, #02A3FE)"
            fillRule="evenodd"
            id="-g-ic_info_gray"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[22.67%_82.97%_76.16%_15.94%]"
        data-name="-g-ic_info_gray"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p34ca5a00}
            fill="var(--fill-0, #02A3FE)"
            fillRule="evenodd"
            id="-g-ic_info_gray"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[89.42%_82.97%_9.42%_15.94%]"
        data-name="-g-ic_info_gray"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p34ca5a00}
            fill="var(--fill-0, #02A3FE)"
            fillRule="evenodd"
            id="-g-ic_info_gray"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[95.81%_82.97%_3.02%_15.94%]"
        data-name="-g-ic_info_gray"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p34ca5a00}
            fill="var(--fill-0, #02A3FE)"
            fillRule="evenodd"
            id="-g-ic_info_gray"
          />
        </svg>
      </div>
    </div>
  );
}

function Tooltip1() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-1 items-start justify-start left-[578px] p-[12px] rounded shadow-[0px_4px_6px_-2px_rgba(34,34,34,0.03),0px_12px_16px_-4px_rgba(34,34,34,0.08)] top-[1152px] w-[164px]"
      data-name="Tooltip"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[20px]">19 mph N</p>
      </div>
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#afb5bc] text-[12px] text-left"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[18px]">
          8 am EST 25 Nov 2024
          <br aria-hidden="true" />
          St Johnsbury
          <br aria-hidden="true" />
          Mean Scenario
        </p>
      </div>
      <div
        className="absolute bottom-[-8px] h-2.5 left-1/2 translate-x-[-50%] w-4"
        data-name="arrow"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 10"
        >
          <path
            d={svgPaths.p1f793a40}
            fill="var(--fill-0, #353A40)"
            id="arrow"
          />
        </svg>
      </div>
    </div>
  );
}

function Tooltip2() {
  return (
    <div
      className="absolute bg-[#353a40] box-border content-stretch flex flex-col gap-1 items-start justify-start left-[314px] p-[12px] rounded shadow-[0px_4px_6px_-2px_rgba(34,34,34,0.03),0px_12px_16px_-4px_rgba(34,34,34,0.08)] top-[1220px] w-[164px]"
      data-name="Tooltip"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[20px]">12 mph N</p>
      </div>
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#afb5bc] text-[12px] text-left"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[18px]">
          8 am EST 22 Nov 2024
          <br aria-hidden="true" />
          25% Probability
        </p>
      </div>
      <div
        className="absolute bottom-[-8px] h-2.5 left-1/2 translate-x-[-50%] w-4"
        data-name="arrow"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 10"
        >
          <path
            d={svgPaths.p1f793a40}
            fill="var(--fill-0, #353A40)"
            id="arrow"
          />
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="h-full overflow-x-clip overflow-y-auto relative rounded shrink-0 w-[916px]"
      data-name="Content"
    >
      <WaSettings />
      <Frame2073 />
      <Frame2110 />
      <Tooltip1 />
      <Tooltip2 />
    </div>
  );
}

function Frame2111() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 h-[1440px] items-start justify-start p-0 relative shrink-0 w-[1855px]">
      <StaticMapWeatherAnalytics />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 h-[1600px] items-start justify-start left-[7px] pb-6 pl-6 pr-8 pt-5 top-16 w-[1913px]"
      data-name="Content"
    >
      <WaActive />
      <Header />
      <Frame2111 />
    </div>
  );
}

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

function LeftControl() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 items-center justify-start left-0 p-0 top-0"
      data-name="left control"
    >
      <MenuIconLogo />
      <OrgName />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-4" data-name="search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="search">
          <path
            d={svgPaths.p24e77f00}
            fill="var(--fill-0, #AFB5BC)"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function NavbarSearchCollapsed() {
  return (
    <div
      className="absolute bg-[#222529] box-border content-stretch flex flex-row gap-2 items-center justify-start left-1/2 px-4 py-3 rounded-md top-1/2 translate-x-[-50%] translate-y-[-50%] w-[360px]"
      data-name="Navbar-Search / Collapsed"
    >
      <Search />
      <div
        className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#afb5bc] text-[16px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-none">Search</p>
      </div>
    </div>
  );
}

function TopMessage() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0"
      data-name="Top Message"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[18px] whitespace-pre">Wed Jan 10</p>
      </div>
    </div>
  );
}

function TimeZone01() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Open_Sans:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-center text-nowrap"
      data-name="TimeZone01"
    >
      <div
        className="relative shrink-0 text-[#ffffff] text-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-none text-nowrap whitespace-pre">11:42</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#afb5bc] text-[12px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-none text-nowrap whitespace-pre">
          CEST/GMT+2
        </p>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div
      className="bg-[#222529] box-border content-stretch flex flex-col gap-2 items-start justify-center px-3 py-2 relative rounded shrink-0"
      data-name="Time"
    >
      <TimeZone01 />
    </div>
  );
}

function TimeZone() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[13px] items-center justify-center p-0 relative rounded-md shrink-0"
      data-name="TimeZone"
    >
      <TopMessage />
      <Time />
    </div>
  );
}

function QuestionCircle() {
  return (
    <div className="relative shrink-0 size-4" data-name="question-circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="question-circle">
          <g id="Vector">
            <path d={svgPaths.p230304a0} fill="white" />
            <path d={svgPaths.p87e3800} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrapper144() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0"
      data-name="wrapper"
    >
      <QuestionCircle />
    </div>
  );
}

function Capsule1() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[46px] rounded-[72px] shrink-0 w-11"
      data-name="Capsule"
      style={{ backgroundImage: `url('${imgCapsule}'), url('${imgCapsule1}')` }}
    />
  );
}

function RightControl() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 h-16 items-center justify-end left-[1591px] p-0 top-0"
      data-name="right control"
    >
      <TimeZone />
      <Wrapper144 />
      <Capsule1 />
    </div>
  );
}

function TopNavLogo() {
  return (
    <div
      className="absolute bg-[#353a40] h-16 left-0 top-0 w-[1920px]"
      data-name="Top Nav & Logo"
    >
      <LeftControl />
      <NavbarSearchCollapsed />
      <RightControl />
    </div>
  );
}

export default function WaHoverExamples() {
  return (
    <div
      className="bg-[#090909] relative size-full"
      data-name="WA- hover examples"
    >
      <Content2 />
      <TopNavLogo />
    </div>
  );
}