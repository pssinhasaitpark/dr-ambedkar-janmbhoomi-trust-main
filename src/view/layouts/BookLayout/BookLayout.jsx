import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { BookPage } from '../../pages/index.js';
const BookLayout = () => {
  return (
    <>
          <div className='App'>
    <HeaderTop />
    <Header />
  <BookPage/>
    <Achievment />
    <Footer />
    </div>
  </>
  )
}

export default BookLayout