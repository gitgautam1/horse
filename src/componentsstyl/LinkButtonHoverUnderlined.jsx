import React from "react";

function LinkButtonHoverUnderlined() {
  return (
    <div className="relative">
      <a href="#" className="text-base font-bold text-blue-800 underline">
        Link Style CTA
      </a>
      <div className="flex max-w-full bg-yellow-400 min-h-1 w-[115px]" />
    </div>
  );
}

export default LinkButtonHoverUnderlined;
