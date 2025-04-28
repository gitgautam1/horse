"use client";
import React from "react";
import SecondaryButton from "./SecondaryButton";
import SecondaryButtonHover from "./SecondaryButtonHover";

function SecondaryButtonSection() {
  return (
    <article className="flex grow shrink gap-2.5 items-center px-5 py-9 bg-blue-800 min-h-[250px] w-[189px]">
      <div className="self-stretch my-auto w-[181px]">
        <div className="w-full text-white">
          <h2 className="text-lg">Off State</h2>
          <SecondaryButton />
        </div>
        <div className="mt-6 w-full">
          <h2 className="text-lg text-white">Hover State</h2>
          <SecondaryButtonHover />
        </div>
      </div>
    </article>
  );
}

export default SecondaryButtonSection;
