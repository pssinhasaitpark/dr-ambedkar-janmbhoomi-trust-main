import React from "react";
import {
  Header,
  HeaderTop,
  Footer,
  Achievment,
} from "../../components/index.js";
import { BirthPlacePage } from "../../pages/index.js";

const BirthPlace = () => {
  return (
    <>
      <HeaderTop />
      <Header />
    <BirthPlacePage/>
      <Achievment />
      <Footer />
    </>
  );
};

export default BirthPlace;
