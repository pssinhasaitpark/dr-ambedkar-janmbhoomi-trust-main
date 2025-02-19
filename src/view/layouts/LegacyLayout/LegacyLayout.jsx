import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { LegacyPage } from '../../pages/index.js';
const LegacyLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
 <LegacyPage />
    <Achievment />
    <Footer />
  </>
  )
}

export default LegacyLayout