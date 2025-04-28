import React from "react";

function TextInput({ label, showLabel = true, className }) {
  return (
    <div className={className}>
      {showLabel ? (
        <label className="text-xs text-black">{label}</label>
      ) : (
        <span>{label}</span>
      )}
      {showLabel && (
        <div className="flex mt-1 w-full border border-solid bg-white bg-opacity-0 border-stone-300 min-h-[52px] max-md:max-w-full max-sm:w-auto" />
      )}
    </div>
  );
}

export default TextInput;
