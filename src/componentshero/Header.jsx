import React from "react";

function Header() {
  return (
    <div className="flex flex-col bg-none items-start px-32 py-8 w-full max-md:flex max-md:flex-col max-md:px-20 max-md:py-5 max-sm:px-5 max-sm:py-4">
      <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:items-start">
        <img
          src="/logo.png"
          className="h-[124px] w-[148px]"
          alt="Maryland Horse"
        />
        <nav className="hidden lg:flex gap-8 items-center max-md:gap-5 max-sm:hidden">
          <a href="#" className="text-sm font-bold text-white">
            ABOUT
          </a>
          <a href="#" className="text-sm font-bold text-white">
            EDUCATION &amp; CAREERS
          </a>
          <a href="#" className="text-sm font-bold text-white">
            EVENTS &amp; ATTRACTIONS
          </a>
          <a href="#" className="text-sm font-bold text-white">
            RESOURCES
          </a>
          <a href="#" className="text-sm font-bold text-white">
            CONTACT US
          </a>
          <button className="text-sm font-bold text-black bg-yellow-400 h-[50px] w-[121px] max-sm:mt-2.5">
            DONATE
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
