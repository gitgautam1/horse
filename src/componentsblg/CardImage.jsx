import React from "react";

function CardImage({ imageSrc, label }) {
  return (
    <div className="flex relative flex-col items-start px-px w-full text-lg text-black whitespace-nowrap min-h-[248px] max-md:max-w-full">
      <img
        src={imageSrc}
        alt={`${label} thumbnail`}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative gap-2.5 self-stretch px-6 py-3.5 max-w-full bg-white min-h-[49px] w-[127px] max-md:px-5">
        {label}
      </div>
    </div>
  );
}

export default CardImage;
