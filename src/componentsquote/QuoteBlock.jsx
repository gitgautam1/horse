"use client";
import React from "react";
import QuoteMark from "./QuoteMark";
import QuoteContent from "./QuoteContent";

function QuoteBlock() {
  return (
    <blockquote className="flex flex-nowrap gap-10 justify-between items-center mx-auto mt-20 text-blue-800 max-w-[762px] max-sm:flex max-sm:flex-row">
      <div className="box-border flex relative flex-col shrink-0 mt-5 w-1 bg-yellow-400 h-[23rem]" />
      <div className="flex flex-row gap-4 justify-start items-start self-stretch my-auto min-w-60 max-md:max-w-full max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:justify-start max-sm:items-start">
        <QuoteMark />
        <QuoteContent />
      </div>
    </blockquote>
  );
}

export default QuoteBlock;
