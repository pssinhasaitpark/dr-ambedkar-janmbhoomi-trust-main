import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { NewsPage } from '../../pages/index.js';
const NewsLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
  <NewsPage />
    <Achievment />
    <Footer />
  </>
  )
}

export default NewsLayout
