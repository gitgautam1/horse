import React from "react";

function TableRow({ data }) {
  return (
    <div className="flex gap-48 justify-around w-full max-md:gap-24 max-sm:gap-12">
      {data.map((cell, index) => (
        <p key={index} className="text-base text-black">
          {cell}
        </p>
      ))}
    </div>
  );
}

export default TableRow;
