import React from "react";

function CardContent({ title, details }) {
  return (
    <div className="mt-4 w-full text-2xl text-blue-800 underline max-md:max-w-full">
      {title.map((line, index) => (
        <h3
          key={index}
          className={`${index > 0 ? "mt-1.5" : ""} max-md:max-w-full`}
        >
          {line}{" "}
        </h3>
      ))}

      {details &&
        details.map((detail, index) => (
          <p
            key={`detail-${index}`}
            className={`mt-3 ${detail.className} max-md:max-w-full`}
          >
            {detail.text}
          </p>
        ))}
    </div>
  );
}

export default CardContent;
