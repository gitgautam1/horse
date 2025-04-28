import React from "react";

function SubmitButton({ label, className }) {
  return (
    <button type="submit" className={className}>
      {label}
    </button>
  );
}

export default SubmitButton;
