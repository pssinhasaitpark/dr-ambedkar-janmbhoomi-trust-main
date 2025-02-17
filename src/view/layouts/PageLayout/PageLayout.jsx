import React from 'react';
import "./PageLayout.css";
import { Header, Footer, About, HeaderTop,BookSlider,PhotoGallery,Achievment,FaqSection, Biography, AccordianSection} from '../../components/index.js';

function PageLayout() {
  return (
    <div className="dashboard-container">
      <HeaderTop/>
      <Header />
      <About />
      <BookSlider/>
      <Biography/>
      <PhotoGallery/>
      <AccordianSection/>
    <FaqSection/>
      <Achievment/>
      <Footer/>

    </div>
  );
}

export default PageLayout;
