import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js"
  import { DonationPage } from '../../pages/index.js'
const DonationLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
< DonationPage/>
    <Achievment />
    <Footer />
  </>
  )
}

export default DonationLayout
