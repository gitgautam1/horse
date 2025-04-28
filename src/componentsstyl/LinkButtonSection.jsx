"use client";
import React from "react";
import LinkButton from "./LinkButton";
import LinkButtonUnderlined from "./LinkButtonUnderlined";
import LinkButtonHoverImage from "./LinkButtonHoverImage";
import LinkButtonHoverUnderlined from "./LinkButtonHoverUnderlined";

function LinkButtonSection() {
  return (
    <article className="flex flex-wrap grow shrink gap-5 items-start min-w-60 w-[337px]">
      <div className="grow shrink w-[98px]">
        <h2 className="text-lg text-black">Off State</h2>
        <LinkButton />
      </div>
      <div className="grow shrink w-[90px]">
        <h2 className="text-lg text-black">Off State</h2>
        <LinkButtonUnderlined />
      </div>
      <div className="grow shrink text-lg text-black w-[120px]">
        <h2>Hover State</h2>
        <LinkButtonHoverImage />
      </div>
      <div className="grow shrink w-[94px]">
        <h2 className="text-lg text-black">Hover State</h2>
        <LinkButtonHoverUnderlined />
      </div>
    </article>
  );
}

export default LinkButtonSection;
