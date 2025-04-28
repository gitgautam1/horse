"use client";
import React from "react";

function RadioButton({ label, checked = false, className, onChange }) {
  return (
    <div className={className}>
      <div
        className={`flex shrink-0 ${checked ? "border-blue-800 border-solid border-[7px]" : "self-stretch my-auto border-2 border-blue-800 border-solid"} h-[19px] rounded-[50px] w-[19px]`}
        role="radio"
        aria-checked={checked}
        tabIndex={0}
        onClick={onChange}
      />
      <label>{label}</label>
    </div>
  );
}

export default RadioButton;
