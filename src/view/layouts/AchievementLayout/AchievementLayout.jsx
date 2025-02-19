import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { AchievementPage } from '../../pages/index.js';
const AchievementLayout = () => {
  return (
    <>
      <HeaderTop />
      <Header />
    < AchievementPage />
      <Achievment />
      <Footer />
    </>
  )
}

export default AchievementLayout
