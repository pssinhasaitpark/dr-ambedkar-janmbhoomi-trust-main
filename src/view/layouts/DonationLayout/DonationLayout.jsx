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
      <div className='App'>
        <HeaderTop />
        <Header />
        < DonationPage />
        <Achievment />
        <Footer />
      </div>
    </>
  )
}

export default DonationLayout
