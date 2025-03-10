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
      <div className='App'>
        <HeaderTop />
        <Header />
        <NewsPage />
        <Achievment />
        <Footer />
      </div>
    </>
  )
}

export default NewsLayout
