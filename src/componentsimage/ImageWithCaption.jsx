"use client";
import * as React from "react";

/**
 * A component that displays an image with a caption underneath
 * @param {Object} props - Component props
 * @param {string} props.imageSrc - Source URL for the image
 * @param {string} props.altText - Alt text for the image
 * @param {string} props.caption - Caption text to display below the image
 */
const ImageWithCaption = ({
  imageSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/4de274881d1b68f774ac43dbce1ac0188be6ccf5?placeholderIfAbsent=true",
  altText = "Horse jumping over a hurdle",
  caption = "Image caption DM Sans italic 16px lorem ipsum dolor sit amet consectetur",
}) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;1,400&display=swap"
        rel="stylesheet"
      />
      <figure className="flex flex-col gap-6 items-start mx-auto my-0 w-full max-w-[920px] max-md:px-5 max-md:py-0 max-md:max-w-[991px] max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm">
        <img src={imageSrc} className="w-full h-auto" alt={altText} />
        <figcaption className="text-base italic text-black font-['DM_Sans']">
          {caption}
        </figcaption>
      </figure>
    </>
  );
};

export default ImageWithCaption;
