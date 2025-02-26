import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import {BookLIstPage} from '../../pages/index.js';
const BookListLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
  <BookLIstPage/>
    <Achievment />
    <Footer />
  </>
  )
}

export default BookListLayout

