import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { VisitorPage } from '../../pages/index.js';
const VisitorLayout = () => {
  return (
    <>
        <div className="App">
    <HeaderTop />
    <Header />
  <VisitorPage  />
    <Achievment />
    <Footer />
    </div>
  </>
  )
}

export default VisitorLayout

