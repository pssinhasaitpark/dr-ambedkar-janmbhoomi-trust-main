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
      <div className='App'>
        <HeaderTop />
        <Header />
        <AwardPage />
        <Achievment />
        <Footer />
      </div>
    </>
  )
}

export default AwardLayout