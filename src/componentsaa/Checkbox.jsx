"use client";
import React from "react";

function Checkbox({ label, checked = false, className, onChange }) {
  return (
    <div className={className}>
      <div
        className={`flex shrink-0 self-stretch my-auto ${checked ? "bg-blue-800" : ""} border-2 border-blue-800 border-solid h-[19px] w-[19px]`}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onClick={onChange}
      />
      <label className="self-stretch my-auto">{label}</label>
    </div>
  );
}

export default Checkbox;
