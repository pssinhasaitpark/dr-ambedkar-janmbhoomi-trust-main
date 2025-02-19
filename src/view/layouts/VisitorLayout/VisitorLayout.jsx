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
    <HeaderTop />
    <Header />
  <VisitorPage  />
    <Achievment />
    <Footer />
  </>
  )
}

export default VisitorLayout

