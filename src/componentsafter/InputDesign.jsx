"use client";
import React from "react";
import BulletPointList from "./BulletPointList";
import NumberedList from "./NumberedList";

function InputDesignTwo() {
  // Bullet point list items
  const bulletPoints = [
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "Lorem ipsum dolor adipiscing",
  ];

  // Numbered list items
  const numberedPoints = [
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet, consectetur",
  ];

  return (
    <article className="font-bold max-w-[816px] mx-auto">
      <h2 className="max-w-full text-2xl text-blue-800 rounded-none w-[613px] max-md:max-w-full">
        H4 Bodoni 72 Bold 24px Line Height 34px Letter Spacing 20px
      </h2>

      <section className="flex flex-wrap gap-10 items-start mt-5 w-full max-md:max-w-full">
        <BulletPointList
          heading="H5 DM SANS BOLD ALL CAPS 18PX"
          items={bulletPoints}
        />

        <NumberedList
          heading="H5 DM SANS BOLD ALL CAPS 18PX"
          items={numberedPoints}
        />
      </section>
    </article>
  );
}

export default InputDesignTwo;
