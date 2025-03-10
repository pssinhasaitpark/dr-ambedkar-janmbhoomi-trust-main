import React from 'react'
import {
  Header,
  HeaderTop,
  Footer,
  Achievment,
} from "../../components/index.js"
import { DonationDonate } from '../../pages/index.js'
const DonationDonateLayout = () => {
  return (
    <>
      <div className='App'>
        <HeaderTop />
        <Header />
        < DonationDonate />
        <Achievment />
        <Footer />
      </div>
    </>
  )
}

export default DonationDonateLayout
