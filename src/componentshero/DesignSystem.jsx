"use client";
import * as React from "react";
import Header from "./Header";
import Divider from "./Divider";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";

function DesignSystem() {
  return (
    <div>
      <div className="bg-[url(/heroimage.png)] bg-cover bg-no-repeat bg-center ">
        <Header />
        <Divider />
        <HeroSection />
      </div>
      <div>
        <ContentSection />
      </div>
    </div>

  );
}

export default DesignSystem;
