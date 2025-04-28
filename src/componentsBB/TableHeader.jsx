import React from "react";

function TableHeader() {
  return (
    <header className="flex justify-around px-0 py-3.5 w-full bg-blue-800 max-sm:px-0 max-sm:py-2.5">
      <h3 className="text-lg font-bold text-white">COLUMN 1</h3>
      <h3 className="text-lg font-bold text-white">COLUMN 2</h3>
      <h3 className="text-lg font-bold text-white">COLUMN 3</h3>
    </header>
  );
}

export default TableHeader;
