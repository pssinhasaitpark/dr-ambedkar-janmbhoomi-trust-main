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
      <div className='App'>
    <HeaderTop />
    <Header />
  <NewsList/>
    <Achievment />
    <Footer />
    </div>
  </>
  )
}

export default NewsListLayout