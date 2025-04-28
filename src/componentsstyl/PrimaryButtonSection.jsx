"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import PrimaryButtonHover from "./PrimaryButtonHover";

function PrimaryButtonSection() {
  return (
    <article className="grow shrink w-[125px]">
      <div className="w-full text-black">
        <h2 className="text-lg">Off State</h2>
        <PrimaryButton />
      </div>
      <div className="mt-6 w-full">
        <h2 className="text-lg text-black">Hover State</h2>
        <PrimaryButtonHover />
      </div>
    </article>
  );
}

export default PrimaryButtonSection;
