import React, { memo } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function HomePage() {
  return (
    <div className="home-page">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default memo(HomePage);
