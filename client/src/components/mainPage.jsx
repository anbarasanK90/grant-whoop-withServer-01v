import React from "react";
import DisclaimerSection from "./disclaimerSection";
import LetsconnectSection from "./letsconnectSection";
import SliderComponent from "./slider";
import WhoopconnectSection from "./whoopconnectSection";

const MainPage = () => {
  return (
    <>
      <section className="carousalSection">
        <SliderComponent />
      </section>
      <LetsconnectSection />
      <WhoopconnectSection />
      <DisclaimerSection />
    </>
  );
}
export default MainPage;
