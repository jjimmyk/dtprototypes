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

function Frame2028() {
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
      <Frame2028 />
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

function Frame2034() {
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

function Frame2033() {
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
      <Frame2034 />
      <Frame2029 />
      <Frame2030 />
      <Frame2031 />
      <Frame2032 />
      <Frame2033 />
    </div>
  );
}

function Frame2035() {
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
          <Frame2035 />
        </div>
      </div>
    </div>
  );
}

export default function XsmallTable() {
  return (
    <div
      className="bg-[#14171a] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
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