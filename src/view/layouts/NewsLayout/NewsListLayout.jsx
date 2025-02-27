import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { NewsList } from '../../pages/index.js';
const NewsListLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
  <NewsList/>
    <Achievment />
    <Footer />
  </>
  )
}

export default NewsListLayout