import React from "react";

function PrimaryButtonHover() {
  return (
    <div className="flex relative gap-5 justify-between items-start px-5 py-4 mt-1.5 w-full min-h-[50px] max-md:px-5">
      <div className="flex absolute right-0 bottom-0 z-0 justify-between items-center self-start w-[156px]">
        <div className="flex shrink-0 self-stretch my-auto bg-blue-800 h-[50px] w-[152px]" />
        <div className="flex shrink-0 self-stretch my-auto w-1 bg-yellow-400 h-[50px]" />
      </div>
      <span className="z-0 my-auto text-sm font-bold text-white">
        PRIMARY CTA
      </span>
    </div>
  );
}

export default PrimaryButtonHover;
