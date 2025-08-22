import svgPaths from "./svg-hekw3nrvce";
import imgCapsule from "figma:asset/371be526cb6c078a2a123792205d9842b99edd6d.png";
import imgCapsule1 from "figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";
import imgScreenshot20241030At62400Pm1 from "figma:asset/0cba0b747b0119e2334ca2b8225f077f9f929f40.png";

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

function Wrapper() {
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
      <Wrapper />
      <Capsule1 />
    </div>
  );
}

function TopNavLogo() {
  return (
    <div
      className="bg-[#353a40] h-16 relative shrink-0 w-full"
      data-name="Top Nav & Logo"
    >
      <LeftControl />
      <NavbarSearchCollapsed />
      <RightControl />
    </div>
  );
}

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
            id="mask0_1_18530"
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
          <g mask="url(#mask0_1_18530)">
            <g id="vector">
              <path d={svgPaths.p38f7c900} fill="var(--fill-0, #AFB5BC)" />
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
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[8px] relative w-full">
          <Cloud />
          <div
            className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#afb5bc] text-[24px] text-left text-nowrap"
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
            id="mask0_1_18409"
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
          <g mask="url(#mask0_1_18409)">
            <path
              d={svgPaths.p3d169b00}
              fill="var(--fill-0, #02A3FE)"
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
        className="absolute border-[#02a3fe] border-[0px_0px_2px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[8px] relative w-full">
          <ElectricBoltOutlined />
          <div
            className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#02a3fe] text-[24px] text-left text-nowrap"
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

function OpActive() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row items-start justify-start p-0 shrink-0 sticky top-0 w-full"
      data-name="OP Active"
    >
      <Tab />
      <Tab1 />
    </div>
  );
}

function Frame2029() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 h-full items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[36px] text-left text-nowrap tracking-[-0.72px]">
        <p className="adjustLetterSpacing block leading-[44px] whitespace-pre">
          Outage Prediction
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-[1160px]"
      data-name="Header"
    >
      <div className="flex flex-row items-center self-stretch">
        <Frame2029 />
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
            id="mask0_1_18399"
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
          <g mask="url(#mask0_1_18399)">
            <g id="vector">
              <path d={svgPaths.p30c4ba00} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[4px] relative rounded shrink-0"
      data-name="wrapper"
    >
      <Fullscreen />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 py-2 relative w-full">
          <div
            className="basis-0 font-['Open_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[20px] text-center"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[30px]">
              Wet Snow Event Prediction - Ensemble Mean Scenario
            </p>
          </div>
          <Wrapper1 />
        </div>
      </div>
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
      <Wrapper2 />
    </div>
  );
}

function Wrapper3() {
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
        <Wrapper3 />
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

function Frame2037() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 h-[269px] items-center justify-center p-0 relative w-full">
      <div className="flex h-[185.813px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[270deg]">
          <div
            className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative text-[#ffffff] text-[16px] text-nowrap text-right"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px] whitespace-pre">
              Outage Event Prediction
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
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[29px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">2</p>
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
        <p className="block leading-[20px] whitespace-pre">20</p>
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
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[49px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">200</p>
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
        className="[grid-area:1_/_1] font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] ml-[53px] mt-0 relative text-[#ffffff] text-[14px] text-nowrap text-right translate-x-[-100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">201+</p>
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
            "--transform-inner-width": "362.84375",
            "--transform-inner-height": "269",
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
          <Frame2033 />
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
        className="bg-[0%_-0.03%] bg-no-repeat bg-size-[100%_132.56%] h-[964px] shrink-0 w-full"
        data-name="Screenshot 2024-10-30 at 6.24.00 PM 1"
        style={{ backgroundImage: `url('${imgScreenshot20241030At62400Pm1}')` }}
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

function Wrapper9() {
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
            id="mask0_1_18423"
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
          <g mask="url(#mask0_1_18423)">
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
          <Wrapper9 />
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
            id="mask0_1_18512"
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
          <g mask="url(#mask0_1_18512)">
            <g id="vector">
              <path d={svgPaths.p1067900} fill="var(--fill-0, white)" />
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
      <Wrapper10 />
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
            id="mask0_1_18551"
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
          <g mask="url(#mask0_1_18551)">
            <g id="vector">
              <path d={svgPaths.p2d85c000} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
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
      <Wrapper11 />
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
            id="mask0_1_18359"
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
          <g mask="url(#mask0_1_18359)">
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
      <Wrapper12 />
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
            <g filter="url(#filter0_dd_1_18407)" id="Control">
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
                id="filter0_dd_1_18407"
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
                  result="effect1_dropShadow_1_18407"
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
                  result="effect1_dropShadow_1_18407"
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
                  result="effect2_dropShadow_1_18407"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 0.06 0"
                />
                <feBlend
                  in2="effect1_dropShadow_1_18407"
                  mode="normal"
                  result="effect2_dropShadow_1_18407"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_18407"
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
        <p className="block leading-[20px] whitespace-pre">
          98 08:00 21 Nov 2024
        </p>
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

function StaticMapOutagePrediction() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[917px]"
      data-name="Static Map Outage Prediction"
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
        <p className="block leading-[24px] whitespace-pre">Vermont Electric</p>
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
            id="mask0_1_18500"
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
          <g mask="url(#mask0_1_18500)">
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
        <p className="block leading-[20px] whitespace-pre">NBM</p>
      </div>
    </div>
  );
}

function ButtonGroupSm6() {
  return (
    <div
      className="bg-[#01476f] box-border content-stretch flex flex-row gap-1 items-center justify-center mr-[-1px] overflow-clip px-3 py-2 relative rounded shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)] shrink-0"
      data-name="Button Group/sm"
    >
      <Wrapper13 />
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
    </div>
  );
}

function Frame2036() {
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
        <p className="block leading-[20px] whitespace-pre">Wet Snow</p>
      </div>
    </div>
  );
}

function ButtonGroupSm7() {
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
        <p className="block leading-[20px] whitespace-pre">Ice</p>
      </div>
    </div>
  );
}

function ButtonGroupSm8() {
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
        <p className="block leading-[20px] whitespace-pre">Wind</p>
      </div>
    </div>
  );
}

function ButtonGroupSm9() {
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

function ButtonGroupSm10() {
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
      <ButtonGroupSm7 />
      <ButtonGroupSm8 />
      <ButtonGroupSm9 />
      <ButtonGroupSm10 />
    </div>
  );
}

function Frame2039() {
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
      <Frame2036 />
      <Frame2039 />
    </div>
  );
}

function Response1() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 h-[101px] items-start justify-center p-[12px] relative rounded-lg shrink-0"
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
      className="box-border content-stretch flex flex-row gap-1 items-start justify-center p-0 relative shrink-0"
      data-name="Label"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Accumulation period (hrs)
        </p>
      </div>
    </div>
  );
}

function Wrapper18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">24</p>
      </div>
    </div>
  );
}

function ButtonGroupSm11() {
  return (
    <div
      className="mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0"
      data-name="Button Group/sm"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-3 py-2 relative">
        <Wrapper18 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function Wrapper19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">48</p>
      </div>
    </div>
  );
}

function ButtonGroupSm12() {
  return (
    <div
      className="bg-[#01476f] box-border content-stretch flex flex-row gap-1 items-center justify-center mr-[-1px] overflow-clip px-3 py-2 relative shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)] shrink-0"
      data-name="Button Group/sm"
    >
      <Wrapper19 />
    </div>
  );
}

function Wrapper20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center px-1 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">72</p>
      </div>
    </div>
  );
}

function ButtonGroupSm13() {
  return (
    <div
      className="mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0"
      data-name="Button Group/sm"
    >
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip px-3 py-2 relative">
        <Wrapper20 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#01476f] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px] shadow-[0px_1px_2px_0px_rgba(16,40,34,0.05)]"
      />
    </div>
  );
}

function ButtonGroupExample4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-px py-0 relative shrink-0"
      data-name="button group example"
    >
      <ButtonGroupSm11 />
      <ButtonGroupSm12 />
      <ButtonGroupSm13 />
    </div>
  );
}

function Frame2040() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
      <Label5 />
      <ButtonGroupExample4 />
    </div>
  );
}

function Description2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[77px] items-start justify-center p-0 relative shrink-0"
      data-name="Description"
    >
      <Frame2040 />
    </div>
  );
}

function Response2() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 h-[101px] items-start justify-center p-[12px] relative rounded-lg shrink-0"
      data-name="Response"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#353a40] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Description2 />
    </div>
  );
}

function Label6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-[300px]"
      data-name="Label"
    >
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Start date</p>
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
            id="mask0_1_18493"
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
          <g mask="url(#mask0_1_18493)">
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
      <Label6 />
      <Input1 />
    </div>
  );
}

function Label7() {
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
            id="mask0_1_18375"
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
          <g mask="url(#mask0_1_18375)">
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
      <Label7 />
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

function Response3() {
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

function OpSettings() {
  return (
    <div
      className="bg-[#14171a] h-[250px] relative rounded shrink-0 w-full"
      data-name="OP Settings"
    >
      <div className="relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-4 h-[250px] items-start justify-start p-[16px] relative w-full">
          <Response />
          <Response1 />
          <Response2 />
          <Response3 />
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
            id="mask0_1_18455"
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
          <g mask="url(#mask0_1_18455)">
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

function KeyboardArrowDown() {
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
            id="mask0_1_18336"
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
          <g mask="url(#mask0_1_18336)">
            <g id="vector">
              <path d={svgPaths.p15553100} fill="var(--fill-0, #AFB5BC)" />
            </g>
          </g>
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
      <KeyboardArrowDown />
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

function Frame2042() {
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
      <Frame2042 />
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

function Frame2043() {
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

function Frame2044() {
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

function Frame2045() {
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
      <Frame2043 />
      <Frame2044 />
      <Frame2030 />
      <Frame2031 />
      <Frame2032 />
      <Frame2045 />
    </div>
  );
}

function Frame2046() {
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
          <Frame2046 />
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

function Frame2048() {
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
      <Frame2048 />
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

function Frame2050() {
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

function Group2050() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2048 />
      <Frame2050 />
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
      <Group2050 />
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

function Group2051() {
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

function Group2052() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2051 />
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
      <Group2052 />
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

function Group2053() {
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

function Group2054() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2053 />
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
      <Group2054 />
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

function Frame2074() {
  return (
    <div className="box-border content-stretch flex flex-col h-[250px] items-start justify-start px-0 py-[62px] relative shrink-0 w-[916px]">
      <Group2034 />
      <Title3 />
    </div>
  );
}

function Frame2075() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <Frame2074 />
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
          Wet Snow Icing System-Wide Wet Snow Outage Prediction (48 hour
          accumulation)
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
            id="mask0_1_18455"
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
          <g mask="url(#mask0_1_18455)">
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
            id="mask0_1_18336"
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
          <g mask="url(#mask0_1_18336)">
            <g id="vector">
              <path d={svgPaths.p15553100} fill="var(--fill-0, #AFB5BC)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function LastActive16() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row items-center justify-start ml-0 mt-0 p-0 relative w-[204px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">SCENARIO</p>
      </div>
      <KeyboardArrowDown1 />
    </div>
  );
}

function LastActive17() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row items-center justify-start ml-[252px] mt-0 p-0 relative w-[54px]"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 1-2</p>
      </div>
    </div>
  );
}

function Group2029() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <LastActive16 />
      <LastActive17 />
    </div>
  );
}

function LastActive18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">DAY 3-4</p>
      </div>
    </div>
  );
}

function LastActive19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">{`  DAY 4-5`}</p>
      </div>
    </div>
  );
}

function LastActive20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Last Active"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#afb5bc] text-[10px] text-nowrap text-right uppercase">
        <p className="block leading-[18px] whitespace-pre">{`     DAY 6-7`}</p>
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[101px] items-center justify-start p-[8px] relative shrink-0 w-[813px]"
      data-name="Tab"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Group2029 />
      <LastActive18 />
      <LastActive19 />
      <LastActive20 />
    </div>
  );
}

function Title4() {
  return (
    <div
      className="bg-[#14171a] shrink-0 sticky top-0 w-full"
      data-name="Title"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pl-2 pr-[106px] py-0 relative w-full">
          <Tab4 />
        </div>
      </div>
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
            id="mask0_1_18308"
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
          <g mask="url(#mask0_1_18308)">
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
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight />
      <NameEmail4 />
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
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper21 />
    </div>
  );
}

function Frame2076() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[715.483px]">
      {[...Array(4).keys()].map((_, i) => (
        <TableCellLarge key={i} />
      ))}
    </div>
  );
}

function Frame2077() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile4 />
      <Frame2076 />
    </div>
  );
}

function ResourceBase4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2077 />
        </div>
      </div>
    </div>
  );
}

function PrimaryTableRowLarge() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Primary Table Row Large"
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
            id="mask0_1_18308"
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
          <g mask="url(#mask0_1_18308)">
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
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
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
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge4() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper25 />
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">15</p>
      </div>
    </div>
  );
}

function TableCellLarge6() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper27 />
    </div>
  );
}

function Frame2078() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[715.483px]">
      <TableCellLarge4 />
      <TableCellLarge4 />
      <TableCellLarge6 />
      <TableCellLarge4 />
    </div>
  );
}

function Frame2079() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile5 />
      <Frame2078 />
    </div>
  );
}

function ResourceBase5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2079 />
        </div>
      </div>
    </div>
  );
}

function PrimaryTableRowLarge1() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Primary Table Row Large"
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
            id="mask0_1_18304"
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
          <g mask="url(#mask0_1_18304)">
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
        <p className="block leading-[20px] whitespace-pre">Ensemble Mean</p>
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
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowDropDown3 />
      <NameEmail6 />
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
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge8() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper29 />
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
        <p className="block leading-[20px] whitespace-pre">43</p>
      </div>
    </div>
  );
}

function TableCellLarge10() {
  return (
    <div
      className="bg-[#b42318] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper31 />
    </div>
  );
}

function Frame2080() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[715.483px]">
      <TableCellLarge8 />
      <TableCellLarge8 />
      <TableCellLarge10 />
      <TableCellLarge8 />
    </div>
  );
}

function Frame2081() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile6 />
      <Frame2080 />
    </div>
  );
}

function ResourceBase6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Resource Base">
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2081 />
        </div>
      </div>
    </div>
  );
}

function PrimaryTableRowLarge2() {
  return (
    <div
      className="bg-[#01476f] box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Primary Table Row Large"
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
        <p className="block leading-[20px] whitespace-pre">Grand Isle</p>
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <NameEmail7 />
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
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge12() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper33 />
    </div>
  );
}

function Frame2082() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <TableCellLarge12 key={i} />
      ))}
    </div>
  );
}

function Frame2083() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile7 />
      <Frame2082 />
    </div>
  );
}

function SecondaryTableRowLarge() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#353a40] box-border content-stretch flex flex-col gap-2.5 items-start justify-start ml-0 mt-0 px-3 py-2 relative w-[916px]"
      data-name="Secondary Table Row Large"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#2a2e33] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2083 />
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
        <p className="block leading-[20px] whitespace-pre">Johnson</p>
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <NameEmail8 />
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
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge16() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper37 />
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
        <p className="block leading-[20px] whitespace-pre">35</p>
      </div>
    </div>
  );
}

function TableCellLarge18() {
  return (
    <div
      className="bg-[#b42318] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper39 />
    </div>
  );
}

function Frame2084() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellLarge16 />
      <TableCellLarge16 />
      <TableCellLarge18 />
      <TableCellLarge16 />
    </div>
  );
}

function Frame2085() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile8 />
      <Frame2084 />
    </div>
  );
}

function SecondaryTableRowLarge1() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#353a40] box-border content-stretch flex flex-col gap-2.5 items-start justify-start ml-0 mt-10 px-3 py-2 relative w-[916px]"
      data-name="Secondary Table Row Large"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2085 />
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
        <p className="block leading-[20px] whitespace-pre">Newport</p>
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <NameEmail9 />
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
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge20() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper41 />
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
        <p className="block leading-[20px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function TableCellLarge22() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper43 />
    </div>
  );
}

function Frame2086() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellLarge20 />
      <TableCellLarge20 />
      <TableCellLarge22 />
      <TableCellLarge20 />
    </div>
  );
}

function Frame2087() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile9 />
      <Frame2086 />
    </div>
  );
}

function SecondaryTableRowLarge2() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#353a40] box-border content-stretch flex flex-col gap-2.5 items-start justify-start ml-0 mt-20 px-3 py-2 relative w-[916px]"
      data-name="Secondary Table Row Large"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2087 />
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
        <p className="block leading-[20px] whitespace-pre">Richford</p>
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <NameEmail10 />
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge24() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper45 />
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function TableCellLarge25() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
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
        <p className="block leading-[20px] whitespace-pre">70</p>
      </div>
    </div>
  );
}

function TableCellLarge26() {
  return (
    <div
      className="bg-[#dc6803] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper47 />
    </div>
  );
}

function Frame2088() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellLarge24 />
      <TableCellLarge25 />
      <TableCellLarge26 />
      <TableCellLarge24 />
    </div>
  );
}

function Frame2089() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile10 />
      <Frame2088 />
    </div>
  );
}

function SecondaryTableRowLarge3() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#353a40] box-border content-stretch flex flex-col gap-2.5 items-start justify-start ml-0 mt-[120px] px-3 py-2 relative w-[916px]"
      data-name="Secondary Table Row Large"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2089 />
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
        <p className="block leading-[20px] whitespace-pre">System</p>
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-10 pr-0 py-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <NameEmail11 />
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge28() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
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
        <p className="block leading-[20px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function TableCellLarge29() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
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
        <p className="block leading-[20px] whitespace-pre">110</p>
      </div>
    </div>
  );
}

function TableCellLarge30() {
  return (
    <div
      className="bg-[#b42318] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper51 />
    </div>
  );
}

function Frame2090() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <TableCellLarge28 />
      <TableCellLarge29 />
      <TableCellLarge30 />
      <TableCellLarge28 />
    </div>
  );
}

function Frame2091() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile11 />
      <Frame2090 />
    </div>
  );
}

function SecondaryTableRowLarge4() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#353a40] box-border content-stretch flex flex-col gap-2.5 items-start justify-start ml-0 mt-40 px-3 py-2 relative w-[916px]"
      data-name="Secondary Table Row Large"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#222529] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Frame2091 />
    </div>
  );
}

function Group2049() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <SecondaryTableRowLarge />
      <SecondaryTableRowLarge1 />
      <SecondaryTableRowLarge2 />
      <SecondaryTableRowLarge3 />
      <SecondaryTableRowLarge4 />
    </div>
  );
}

function Frame2035() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <Group2049 />
    </div>
  );
}

function ArrowRight7() {
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
            id="mask0_1_18308"
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
          <g mask="url(#mask0_1_18308)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name12() {
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

function NameEmail12() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name12 />
    </div>
  );
}

function Profile12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight7 />
      <NameEmail12 />
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
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge32() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
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
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#14171a] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function TableCellLarge33() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
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
        <p className="block leading-[20px] whitespace-pre">70</p>
      </div>
    </div>
  );
}

function TableCellLarge34() {
  return (
    <div
      className="bg-[#b42318] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper55 />
    </div>
  );
}

function Frame2092() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[715.483px]">
      <TableCellLarge32 />
      <TableCellLarge33 />
      <TableCellLarge34 />
      <TableCellLarge32 />
    </div>
  );
}

function Frame2093() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile12 />
      <Frame2092 />
    </div>
  );
}

function ResourceBase7() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2093 />
        </div>
      </div>
    </div>
  );
}

function PrimaryTableRowLarge3() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Primary Table Row Large"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase7 />
    </div>
  );
}

function ArrowRight8() {
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
            id="mask0_1_18308"
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
          <g mask="url(#mask0_1_18308)">
            <g id="vector">
              <path d={svgPaths.pb72ca50} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Name13() {
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

function NameEmail13() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Name & Email"
    >
      <Name13 />
    </div>
  );
}

function Profile13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0 w-[248px]"
      data-name="Profile"
    >
      <ArrowRight8 />
      <NameEmail13 />
    </div>
  );
}

function Wrapper57() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-3 items-center justify-start px-0.5 py-0 relative shrink-0"
      data-name="wrapper"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function TableCellLarge36() {
  return (
    <div
      className="bg-[#039855] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper57 />
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
        <p className="block leading-[20px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function TableCellLarge37() {
  return (
    <div
      className="bg-[#fdb022] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
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
        <p className="block leading-[20px] whitespace-pre">145</p>
      </div>
    </div>
  );
}

function TableCellLarge38() {
  return (
    <div
      className="bg-[#b42318] box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-[6px] relative rounded-[5px] shrink-0 w-36"
      data-name="Table Cell Large"
    >
      <Wrapper59 />
    </div>
  );
}

function Frame2094() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[715.483px]">
      <TableCellLarge36 />
      <TableCellLarge37 />
      <TableCellLarge38 />
      <TableCellLarge36 />
    </div>
  );
}

function Frame2095() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Profile13 />
      <Frame2094 />
    </div>
  );
}

function ResourceBase8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Resource Base"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#353a40] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-2 relative w-full">
          <Frame2095 />
        </div>
      </div>
    </div>
  );
}

function PrimaryTableRowLarge4() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Primary Table Row Large"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#38b7fe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <ResourceBase8 />
    </div>
  );
}

function Frame2096() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <PrimaryTableTitle1 />
      <Title4 />
      <PrimaryTableRowLarge />
      <PrimaryTableRowLarge1 />
      <PrimaryTableRowLarge2 />
      <Frame2035 />
      <PrimaryTableRowLarge3 />
      <PrimaryTableRowLarge4 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-x-clip overflow-y-auto p-0 relative rounded self-stretch shrink-0 w-[916px]"
      data-name="Content"
    >
      <OpSettings />
      <Frame2075 />
      <Frame2096 />
    </div>
  );
}

function Frame2097() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <StaticMapOutagePrediction />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-6 pt-5 px-0 relative shrink-0 w-[1856px]"
      data-name="Content"
    >
      <OpActive />
      <Header />
      <Frame2097 />
    </div>
  );
}

export default function OpSubTableExpanded() {
  return (
    <div
      className="bg-[#090909] box-border content-stretch flex flex-col items-center justify-start pb-8 pt-0 px-0 relative size-full"
      data-name="OP- Sub table expanded"
    >
      <TopNavLogo />
      <Content2 />
    </div>
  );
}