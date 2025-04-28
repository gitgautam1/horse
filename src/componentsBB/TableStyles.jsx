"use client";
import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function TableStyles() {
  // Sample data for the table rows
  const tableData = [
    ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  ];

  return (
    <section className="box-border flex flex-col items-start px-5 mt-10 py-0 mx-auto my-0 w-full max-w-[880px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@700&family=DM+Sans:wght@400;700&display=swap"
      />
      <h2 className="mb-14 text-2xl font-bold text-blue-800">Table Styles</h2>
      <div className="flex flex-col gap-4 items-center w-full">
        <TableHeader />
        {tableData.map((rowData, index) => (
          <TableRow key={index} data={rowData} />
        ))}
      </div>
    </section>
  );
}

export default TableStyles;
