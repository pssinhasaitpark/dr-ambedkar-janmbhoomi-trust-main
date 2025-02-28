import React from 'react'
import {
  Header,
  HeaderTop,
  Footer,
  Achievment,
} from "../../components/index.js";
import { BookDetailPage } from '../../pages/index.js';
const BookListLayout = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <BookDetailPage />
      <Achievment />
      <Footer />
    </>
  )
}

export default BookListLayout

