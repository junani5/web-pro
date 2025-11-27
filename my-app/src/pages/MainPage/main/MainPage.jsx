import React from "react";
import { Section1 } from "../Section1/Section1";
import { Section2 } from "../Section2/Section2";
import { Section3 } from "../Section3/Section3";
import { Section4 } from "../Section4/Section4";
import { Footer } from "../../../components/Footer/Footer";
import { Navbar } from "../../../components/Navbar/Navbar";
import "./MainPage.css";


export const MainPage = () => {
  return (
    <>
      <Navbar/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}


