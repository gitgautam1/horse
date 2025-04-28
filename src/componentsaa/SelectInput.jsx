import React from "react";

function SelectInput({ label, className }) {
  return (
    <div className={className}>
      <div className="flex gap-10 justify-between items-start max-w-full w-[400px]">
        <span>{label}</span>
        <span className="font-black"></span>
      </div>
    </div>
  );
}

export default SelectInput;
