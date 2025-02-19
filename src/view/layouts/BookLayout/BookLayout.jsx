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
    <HeaderTop />
    <Header />
  <BookPage/>
    <Achievment />
    <Footer />
  </>
  )
}

export default BookLayout