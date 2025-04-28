"use client";
import React, { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav
      className="flex gap-7 items-center self-center mt-24 text-base text-blue-800 whitespace-nowrap max-md:mt-10"
      aria-label="Pagination"
    >
      <button
        className="self-stretch my-auto text-3xl text-neutral-300"
        aria-label="Previous page"
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>

      <button
        className={`self-stretch px-1.5 my-auto ${currentPage === 1 ? "text-white bg-blue-800" : "underline"} h-[30px] min-h-[30px] w-[30px]`}
        onClick={() => handlePageChange(1)}
        aria-current={currentPage === 1 ? "page" : undefined}
      >
        01
      </button>

      <button
        className={`self-stretch my-auto ${currentPage === 2 ? "text-white bg-blue-800 px-1.5 h-[30px] min-h-[30px] w-[30px]" : "underline"}`}
        onClick={() => handlePageChange(2)}
        aria-current={currentPage === 2 ? "page" : undefined}
      >
        02
      </button>

      <button
        className={`self-stretch my-auto ${currentPage === 3 ? "text-white bg-blue-800 px-1.5 h-[30px] min-h-[30px] w-[30px]" : "underline"}`}
        onClick={() => handlePageChange(3)}
        aria-current={currentPage === 3 ? "page" : undefined}
      >
        03
      </button>

      <button
        className={`self-stretch my-auto ${currentPage === 4 ? "text-white bg-blue-800 px-1.5 h-[30px] min-h-[30px] w-[30px]" : "underline"}`}
        onClick={() => handlePageChange(4)}
        aria-current={currentPage === 4 ? "page" : undefined}
      >
        04
      </button>

      <span className="self-stretch my-auto text-black">...</span>

      <button
        className={`self-stretch my-auto ${currentPage === 8 ? "text-white bg-blue-800 px-1.5 h-[30px] min-h-[30px] w-[30px]" : "underline"}`}
        onClick={() => handlePageChange(8)}
        aria-current={currentPage === 8 ? "page" : undefined}
      >
        08
      </button>

      <button
        className="self-stretch my-auto text-3xl text-black"
        aria-label="Next page"
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        &#8250;
      </button>
    </nav>
  );
}

export default Pagination;
