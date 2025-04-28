import React from "react";

function NumberedList({ heading, items }) {
  return (
    <div className="grow shrink text-xl text-blue-800 min-w-60 w-[269px]">
      <h3 className="text-lg text-black">{heading}</h3>
      <ol className="list-none">
        {items.map((item, index) => (
          <li key={index} className="mt-3.5">
            {index + 1}{" "}
            <span style={{ fontSize: "16px", color: "rgba(49,79,166,1)" }}>
              {item}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default NumberedList;
