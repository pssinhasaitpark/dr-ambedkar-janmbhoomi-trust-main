import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from '../../components/index.js'
 import { ContactPage } from '../../pages/index.js'
const ContactLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
    <ContactPage/>
    <Achievment />
    <Footer />
  </>
  )
}

export default ContactLayout
