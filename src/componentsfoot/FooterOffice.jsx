import React from "react";

function FooterOffice() {
  return (
    <section className="grow shrink text-white w-[178px]">
      <h2 className="text-3xl font-bold">Office</h2>
      <address className="mt-10 w-full text-base not-italic">
        <p>Maryland Horse Foundation</p>
        <p className="mt-5">321 Main St.</p>
        <p className="mt-5">Reisterstown, MD 21136</p>
        <a href="tel:4102522100" className="mt-5 block underline">
          410-252-2100
        </a>
      </address>
    </section>
  );
}

export default FooterOffice;
