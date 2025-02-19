import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { Museum} from "../../pages/index.js";
const MuseumLayout = () => {
  return (
    <>
    <HeaderTop />
    <Header />
  <Museum/>
    <Achievment />
    <Footer />
  </>
  )
}

export default MuseumLayout