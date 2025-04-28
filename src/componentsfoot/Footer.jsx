"use client";
import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import FooterOffice from "./FooterOffice";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="flex relative flex-col px-36 pt-24 pb-6 max-md:px-5 mt-20 bg-black">
      <div className="flex absolute inset-0 z-0 flex-col w-full max-md:max-w-full">
      </div>
      <div className="z-0 self-center w-full max-w-[1161px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full max-sm:bg-black">
          <FooterLogo />
          <FooterMenu />
          <FooterOffice />
          <FooterSocial />
        </div>
        <div className="mt-10 w-full">
          <hr className="flex shrink-0 h-0.5 bg-white max-md:max-w-full" />
        </div>
        <p className="mt-10 text-base text-white max-md:max-w-full">
          2021 Maryland Horse Foundation | Privacy Policy | Terms & Conditions
        </p>
      </div>
    </footer>
  );
}

export default Footer;
