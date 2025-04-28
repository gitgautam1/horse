import React from "react";

function HeroSection() {
  return (
    <section className="flex flex-col gap-2.5 items-start pl-24 pb-8 max-md:pl-12 max-sm:pl-5">
      <h1 className="text-6xl font-bold text-white font-['Bodoni_72'] max-sm:text-5xl max-sm:leading-[60px]">
        H1 Bodoni 72 Bold 65px
      </h1>
      <p className="text-6xl font-bold text-white font-['Bodoni_72'] max-sm:text-5xl max-sm:leading-[60px]">
        Line Height 80px
      </p>
    </section>
  );
}

export default HeroSection;
