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
      <div className='App'>
      <HeaderTop />
      <Header />
      <BookDetailPage />
      <Achievment />
      <Footer />
      </div>
    </>
  )
}

export default BookListLayout

