import React from "react";

function ErrorInput({ label, errorMessage, className }) {
  return (
    <div className={className}>
      <div className="flex gap-3 items-end self-start">
        <label className="text-xs text-black">{label} </label>
        <div className="flex gap-0.5 items-center text-red-600">
          <span className="self-stretch my-auto text-xs font-black"></span>
          <span className="self-stretch my-auto text-sm">{errorMessage} </span>
        </div>
      </div>
      <div className="flex w-full border border-rose-600 border-solid bg-white bg-opacity-0 min-h-[52px] max-md:max-w-full" />
    </div>
  );
}

export default ErrorInput;
