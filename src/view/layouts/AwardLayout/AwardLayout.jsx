import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { AwardPage } from '../../pages/index.js';
const AwardLayout = () => {
  return (
<>
    <HeaderTop />
    <Header />
    <AwardPage/> 
    <Achievment />
    <Footer />
  </>
  )
}

export default AwardLayout