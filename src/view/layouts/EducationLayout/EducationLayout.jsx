import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from '../../components/index.js'
  import { Education } from '../../pages/index.js'
const EducationLayout = () => {
  return (
    <>
       <div className='App'>
    <HeaderTop />
    <Header />
    <Education />
    <Achievment />
    <Footer />
    </div>
  </>
  )
}

export default EducationLayout
