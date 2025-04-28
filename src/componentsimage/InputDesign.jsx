"use client";
import * as React from "react";
import ImageWithCaption from "./ImageWithCaption";

/**
 * Main component that renders the image with caption
 */
function InputDesign() {
  return (
    <ImageWithCaption
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4de274881d1b68f774ac43dbce1ac0188be6ccf5?placeholderIfAbsent=true"
      altText="Horse jumping over a hurdle"
      caption="Image caption DM Sans italic 16px lorem ipsum dolor sit amet consectetur"
    />
  );
}

export default InputDesign;
