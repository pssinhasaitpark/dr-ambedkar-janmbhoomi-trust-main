import React from 'react'
import {
    Header,
    HeaderTop,
    Footer,
    Achievment,
  } from "../../components/index.js";
  import { Trustee } from '../../pages/index.js';
const TrusteeLayout = () => {
  return (
    <>
     <div className="App">
    <HeaderTop />
    <Header />
  <Trustee/>
    <Achievment />
    <Footer />
    </div>
  </>
  )
}

export default TrusteeLayout