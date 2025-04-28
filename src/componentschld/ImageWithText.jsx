"use client";
import * as React from "react";

function ImageWithText() {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-start max-w-[1000px] mx-auto my-10 px-5">
      <figure className="w-80 min-w-60">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/980c42e0bd869321dbc104e1a026f939b3e74cb3?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97"
          alt="Content image"
          className="object-contain w-full aspect-[0.84]"
        />
      </figure>
      <article className="text-base text-black min-w-60 w-[515px] max-md:max-w-full">
        <p className="max-md:max-w-full">
          Body copy DM Sans regular 16px, line height 31px #000000 lorem{" "}
        </p>
        <p className="mt-2.5 max-md:max-w-full">
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        </p>
        <p className="mt-2.5 max-md:max-w-full">
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim{" "}
        </p>
        <p className="mt-2.5 max-md:max-w-full">
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea{" "}
        </p>
        <p className="mt-2.5 max-md:max-w-full">
          commodo consequat. Lorem ipsum dolor sit amet, consectetur{" "}
        </p>
        <p className="mt-2.5 max-md:max-w-full">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore{" "}
        </p>
        <p className="mt-2.5 max-md:max-w-full">
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation{" "}
        </p>
        <p className="mt-2.5 max-md:max-w-full">
          ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
        </p>
      </article>
    </section>
  );
}

export default ImageWithText;
