"use client";
import * as React from "react";

// Title component for better semantic structure
function CTATitle({ children }) {
  return (
    <h2 className="text-3xl font-bold text-white max-md:text-3xl max-sm:text-2xl">
      {children}
    </h2>
  );
}

// Button component for the secondary CTA
function SecondaryButton({ children }) {
  return (
    <button className="px-5 py-4 text-sm font-bold text-white border-2 border-yellow-400 border-solid h-[50px] w-[180.7px] max-md:w-40 max-md:h-[45px] max-sm:h-10 max-sm:w-[140px]">
      {children}
    </button>
  );
}

// Main CTA Block component
function CTABlock() {
  return (
    <section className="flex justify-center items-center  max-w-[1000px] mx-auto w-full mt-20 h-100 bg-blue-800 max-md:p-5 max-sm:p-4">
      <div className="flex flex-col gap-11 items-center">
        <CTATitle>Optional Bold CTA Block</CTATitle>
        <SecondaryButton>SECONDARY CTA</SecondaryButton>
      </div>
    </section>
  );
}

export default CTABlock;
