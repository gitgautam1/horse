import React from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";

function ContentCard({ content, className }) {
  return (
    <article className={className}>
      <CardImage imageSrc={content.imageSrc} label={content.type} />
      <CardContent title={content.title} details={content.details} />
    </article>
  );
}

export default ContentCard;
