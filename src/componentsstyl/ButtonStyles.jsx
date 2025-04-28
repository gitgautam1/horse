"use client";
import React from "react";
import PrimaryButtonSection from "./PrimaryButtonSection";
import SecondaryButtonSection from "./SecondaryButtonSection";
import LinkButtonSection from "./LinkButtonSection";

function ButtonStyles() {
  return (
    <section className="max-w-[908px] mx-auto mt-20">
      <h1 className="text-2xl font-bold text-blue-800 max-md:max-w-full">
        Button Styles
      </h1>
      <div className="flex flex-wrap gap-10 justify-center items-start mt-5 w-full max-md:max-w-full">
        <PrimaryButtonSection />
        <SecondaryButtonSection />
        <LinkButtonSection />
      </div>
    </section>
  );
}

export default ButtonStyles;
