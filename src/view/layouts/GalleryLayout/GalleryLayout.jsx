import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
import { GalleryPage } from '../../pages/index.js';

const GalleryLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
<GalleryPage />
    <Achievment />
    <Footer />
  </>
  )
}

export default GalleryLayout