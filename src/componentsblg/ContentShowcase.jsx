"use client";
import React from "react";
import ContentCard from "./ContentCard";
import Pagination from "./Pagination";

function ContentShowcase() {
  const articleContent = {
    type: "ARTICLE",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc9248e20f2b138d6d5f2e4aed21d126d54aa6c9?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97",
    title: [
      "Lorem ipsum dolor sit amet,",
      "consectetur adipiscing elit, sed do",
      "eiusmod tempor incididunt ut",
      "labore et dolore magna aliqua",
    ],
  };

  const eventContent = {
    type: "EVENT",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/04061c20116cdce33cbdf0ca5fbf6845c94ef8be?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97",
    title: [
      "Event Title goes here sit amet,",
      "consectetur adipiscing elit sed do",
    ],
    details: [
      { text: "JUNE 18 | :00AM-3:00PM", className: "text-base" },
      {
        text: "1234 ADDRESS HERE, CITY, STATE 12345",
        className: "text-base font-black",
      },
    ],
  };

  return (
    <section className="flex flex-col pl-px font-bold max-w-[900px] mx-auto mt-20">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <ContentCard
          content={articleContent}
          className="grow shrink self-stretch my-auto min-w-60 w-[352px] max-md:max-w-full"
        />
        <ContentCard
          content={eventContent}
          className="grow shrink self-stretch my-auto min-w-60 w-[353px] max-md:max-w-full"
        />
      </div>
      <Pagination />
    </section>
  );
}

export default ContentShowcase;
