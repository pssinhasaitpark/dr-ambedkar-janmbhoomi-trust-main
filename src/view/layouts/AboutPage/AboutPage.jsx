import React from 'react'
import { Header,HeaderTop, Footer, Achievment } from '../../components/index.js';
import { HomeDashboard } from '../../pages/index.js';

const AboutPage = () => {
  return (
    <>
     <HeaderTop />
      <Header />
      <HomeDashboard/>
      <Achievment />
      <Footer />
    </>
  )
}

export default AboutPage