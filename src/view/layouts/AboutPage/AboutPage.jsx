import React from 'react'
import { Header,HeaderTop, Footer, Achievment } from '../../components/index.js';
import { HomeDashboard } from '../../pages/index.js';

const AboutPage = () => {
  return (
    <>
    <div className='App'>
     <HeaderTop />
      <Header />
      <HomeDashboard/>
      <Achievment />
      <Footer />
      </div>
    </>
  )
}

export default AboutPage