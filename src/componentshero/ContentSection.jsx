import React from "react";

function ContentSection() {
  return (
    <section className="flex flex-col gap-24 items-center p-5 mx-auto my-0 w-full max-w-[826px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <h2 className="text-4xl font-bold text-left text-black leading-[52px] tracking-[3px] font-['Bodoni_72'] max-md:text-5xl max-md:leading-[60px] max-sm:text-4xl max-sm:leading-[50px]">
        H2 Bodoni 72 Bold 52px Line Height 65px Letter Spacing 20px
      </h2>

      <p className="text-base leading-8 text-left text-black max-w-[750px] max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-6">
        Body copy DM Sans regular 16px, line height 31px #000000 lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>

      <h3 className="text-3xl font-bold tracking-normal leading-10 text-center text-black font-['Bodoni_72'] max-md:text-3xl max-md:leading-10 max-sm:text-2xl max-sm:leading-9">
        H3 Bodoni 72 Bold 30px Line Height 45px Letter Spacing 0px
      </h3>

      <p className="text-base leading-8 text-left text-black max-w-[750px] max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-6">
        Body copy DM Sans regular 16px, line height 31px #000000 lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </section>
  );
}

export default ContentSection;
