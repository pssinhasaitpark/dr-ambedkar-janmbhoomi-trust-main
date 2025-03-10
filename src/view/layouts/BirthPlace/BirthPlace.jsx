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
       <div className='App'>
      <HeaderTop />
      <Header />
    <BirthPlacePage/>
      <Achievment />
      <Footer />
      </div>
    </>
  );
};

export default BirthPlace;
