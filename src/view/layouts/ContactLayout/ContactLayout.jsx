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
     <div className='App'>
    <HeaderTop />
    <Header />
    <ContactPage/>
    <MediaFeed/>
    <Footer />
    </div>
  </>
  )
}

export default ContactLayout
