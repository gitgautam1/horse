import React from "react";

function FooterLogo() {
  return (
    <section className="grow shrink w-28 text-sm font-bold text-black">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37c041903e4b5b3eccdd4d17a1fdffc2164e1be9?placeholderIfAbsent=true&apiKey=06421ef3a3a1474fbafcf90cbcce8e97"
        alt="Maryland Horse Foundation Logo"
        className="object-contain max-w-full aspect-[1.01] w-[140px]"
      />
      <button className="gap-2.5 self-stretch px-5 py-4 mt-10 max-w-full bg-yellow-400 min-h-[50px] w-[118px] max-md:mt-10">
        DONATE
      </button>
    </section>
  );
}

export default FooterLogo;
