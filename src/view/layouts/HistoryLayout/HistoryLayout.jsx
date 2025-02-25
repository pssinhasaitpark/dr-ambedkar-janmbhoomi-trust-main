import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { HistoryPage } from '../../pages/index.js';
const HistoryLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
  <HistoryPage/>
    <Achievment />
    <Footer />
  </>
  )
}

export default HistoryLayout