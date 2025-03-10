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
      <div className='App'>
        <HeaderTop />
        <Header />
        <LegacyPage />
        <Achievment />
        <Footer />
      </div>
    </>
  )
}

export default LegacyLayout