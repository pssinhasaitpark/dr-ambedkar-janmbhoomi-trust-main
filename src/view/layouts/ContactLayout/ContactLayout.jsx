import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    MediaFeed,
  } from '../../components/index.js'
 import { ContactPage } from '../../pages/index.js'
const ContactLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
    <ContactPage/>
    <MediaFeed/>
    <Footer />
  </>
  )
}

export default ContactLayout
