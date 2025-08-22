import svgPaths from "./svg-xetbchd022";
import imgImage1 from "figma:asset/07f4483b98adf41a5d1c5a899eae6d58c8b2d776.png";

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
            id="mask0_2018_19123"
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
          <g mask="url(#mask0_2018_19123)">
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
            id="mask0_2018_18978"
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
          <g mask="url(#mask0_2018_18978)">
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
            id="mask0_2018_19080"
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
          <g mask="url(#mask0_2018_19080)">
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
            id="mask0_2018_19070"
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
          <g mask="url(#mask0_2018_19070)">
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
            id="mask0_2018_19029"
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
          <g mask="url(#mask0_2018_19029)">
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
            <g filter="url(#filter0_dd_2018_19056)" id="Control">
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
                id="filter0_dd_2018_19056"
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
                  result="effect1_dropShadow_2018_19056"
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
                  result="effect1_dropShadow_2018_19056"
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
                  result="effect2_dropShadow_2018_19056"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0.06 0"
                />
                <feBlend
                  in2="effect1_dropShadow_2018_19056"
                  mode="normal"
                  result="effect2_dropShadow_2018_19056"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_2018_19056"
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
            id="mask0_2018_19092"
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
          <g mask="url(#mask0_2018_19092)">
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
            id="mask0_2018_19025"
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
          <g mask="url(#mask0_2018_19025)">
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
            id="mask0_2018_18986"
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
          <g mask="url(#mask0_2018_18986)">
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
      className="bg-[#14171a] h-[250px] relative rounded shrink-0 w-full"
      data-name="WA Settings"
    >
      <div className="relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-4 h-[250px] items-start justify-start p-[16px] relative w-full">
          <Response />
          <Response1 />
          <Response2 />
        </div>
      </div>
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
            id="mask0_2018_18982"
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
          <g mask="url(#mask0_2018_18982)">
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

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-4" data-name="keyboard_arrow_down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="keyboard_arrow_down">
          <mask
            height="16"
            id="mask0_2018_19041"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_2018_19041)"></g>
        </g>
      </svg>
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
      <KeyboardArrowDown1 />
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

function Tab() {
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
      <Tab />
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

function Frame2051() {
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

function Frame2053() {
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

function Frame2054() {
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

function Frame2055() {
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

function Frame2056() {
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
      <Frame2051 />
      <Frame2053 />
      <Frame2054 />
      <Frame2055 />
      <Frame2056 />
    </div>
  );
}

function Frame2057() {
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
          <Frame2057 />
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

function Frame2058() {
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
      <Frame2058 />
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

function Frame2059() {
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

function Frame2060() {
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

function Frame2061() {
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

function Frame2062() {
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

function Frame2063() {
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

function Frame2064() {
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
      <Frame2059 />
      <Frame2060 />
      <Frame2061 />
      <Frame2062 />
      <Frame2063 />
      <Frame2064 />
    </div>
  );
}

function Frame2065() {
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
          <Frame2065 />
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

function Frame2066() {
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
      <Frame2066 />
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

function Frame2067() {
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

function Frame2068() {
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

function Frame2069() {
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

function Frame2070() {
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

function Frame2071() {
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

function Frame2072() {
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
      <Frame2067 />
      <Frame2068 />
      <Frame2069 />
      <Frame2070 />
      <Frame2071 />
      <Frame2072 />
    </div>
  );
}

function Frame2073() {
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
          <Frame2073 />
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

function LastActive10() {
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

function Tab1() {
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
      <LastActive9 />
      <LastActive10 />
      <LastActive9 />
      <LastActive9 />
      <LastActive9 />
      <LastActive9 />
      <LastActive9 />
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
          <Tab1 />
        </div>
      </div>
    </div>
  );
}

function Frame2046() {
  return (
    <div className="box-border content-stretch flex flex-col h-[250px] items-start justify-start px-0 py-[62px] relative shrink-0 w-[916px]">
      <Group2034 />
      <Title3 />
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
            id="mask0_2018_18982"
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
          <g mask="url(#mask0_2018_18982)">
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
      className="bg-[#14171a] relative shrink-0 w-full"
      data-name="Primary table title"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-1 relative w-full">
          <Type2 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div
              className="basis-0 grow h-full min-h-px min-w-px shrink-0"
              data-name="filler"
            />
          </div>
          <Download1 />
        </div>
      </div>
    </div>
  );
}

function LastActive16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[205px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">SCENARIO</p>
      </div>
    </div>
  );
}

function LastActive17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[47.569px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 1</p>
      </div>
    </div>
  );
}

function LastActive18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[48.65px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 2</p>
      </div>
    </div>
  );
}

function LastActive19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[49.731px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 3</p>
      </div>
    </div>
  );
}

function LastActive20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[49.731px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 4</p>
      </div>
    </div>
  );
}

function LastActive21() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[48.65px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 5</p>
      </div>
    </div>
  );
}

function LastActive22() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[48.65px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 6</p>
      </div>
    </div>
  );
}

function LastActive23() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-[48.65px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 7</p>
      </div>
    </div>
  );
}

function Frame2048() {
  return (
    <div className="box-border content-stretch flex flex-row gap-10 items-center justify-start pl-0 pr-3 py-0 relative shrink-0 w-[592px]">
      <LastActive17 />
      <LastActive18 />
      <LastActive19 />
      <LastActive20 />
      <LastActive21 />
      <LastActive22 />
      <LastActive23 />
    </div>
  );
}

function Tab2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Tab"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[8px] relative w-full">
          <LastActive16 />
          <Frame2048 />
        </div>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row h-[34px] items-start justify-start pl-2 pr-12 py-0 shrink-0 sticky top-0 w-[916px]"
      data-name="Title"
    >
      <Tab2 />
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
            id="mask0_2018_18954"
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
          <g mask="url(#mask0_2018_18954)">
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
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[916px]"
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
            id="mask0_2018_18954"
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
          <g mask="url(#mask0_2018_18954)">
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
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[916px]"
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

function ArrowRight2() {
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
            id="mask0_2018_18954"
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
          <g mask="url(#mask0_2018_18954)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
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
      <ArrowRight2 />
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
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[893px]">
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
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase6 />
    </div>
  );
}

function ArrowRight3() {
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
            id="mask0_2018_18954"
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
          <g mask="url(#mask0_2018_18954)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name7() {
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

function NameEmail7() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name7 />
    </div>
  );
}

function Profile7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight3 />
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
        <p className="block leading-[20px] whitespace-pre">12 NW</p>
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
        <p className="block leading-[20px] whitespace-pre">16 W</p>
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
        <p className="block leading-[20px] whitespace-pre">21 NW</p>
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">21 N</p>
      </div>
    </div>
  );
}

function TableCellMed25() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">25 S</p>
      </div>
    </div>
  );
}

function TableCellMed26() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
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
        <p className="block leading-[20px] whitespace-pre">28 S</p>
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
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
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
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[893px]">
      <Profile7 />
      <Frame2080 />
    </div>
  );
}

function ResourceBase7() {
  return (
    <div
      className="h-[54px] relative shrink-0 w-full"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2081 />
    </div>
  );
}

function PrimaryTableRowMed3() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase7 />
    </div>
  );
}

function ArrowRight4() {
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
            id="mask0_2018_18954"
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
          <g mask="url(#mask0_2018_18954)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name8() {
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

function NameEmail8() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name8 />
    </div>
  );
}

function Profile8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight4 />
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
        <p className="block leading-[20px] whitespace-pre">12 S</p>
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
        <p className="block leading-[20px] whitespace-pre">14 NW</p>
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
        <p className="block leading-[20px] whitespace-pre">19 W</p>
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
        <p className="block leading-[20px] whitespace-pre">25 NW</p>
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
        <p className="block leading-[20px] whitespace-pre">25 N</p>
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">31 S</p>
      </div>
    </div>
  );
}

function TableCellMed33() {
  return (
    <div
      className="bg-[#dc6803] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-20"
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
        <p className="block leading-[20px] whitespace-pre">33 S</p>
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
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
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
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-3 p-0 top-2 w-[893px]">
      <Profile8 />
      <Frame2082 />
    </div>
  );
}

function ResourceBase8() {
  return (
    <div
      className="h-[54px] relative shrink-0 w-full"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2083 />
    </div>
  );
}

function PrimaryTableRowMed4() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[916px]"
      data-name="Primary Table Row Med"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase8 />
    </div>
  );
}

function Frame2084() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <PrimaryTableTitle1 />
      <Title4 />
      <PrimaryTableRowMed />
      <PrimaryTableRowMed1 />
      <PrimaryTableRowMed2 />
      <PrimaryTableRowMed3 />
      <PrimaryTableRowMed4 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-x-clip overflow-y-auto p-0 relative rounded self-stretch shrink-0 w-[916px]"
      data-name="Content"
    >
      <WaSettings />
      <Frame2046 />
      <Frame2084 />
    </div>
  );
}

export default function Frame2085() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative size-full">
      <StaticMapWeatherAnalytics />
      <Content1 />
    </div>
  );
}