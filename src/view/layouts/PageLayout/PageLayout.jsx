import React from 'react';
import "./PageLayout.css";
import { Header, Footer, About, HeaderTop,PhotoGallery,Achievment,FaqSection, Biography, AccordianSection, BookPulicationSlider} from '../../components/index.js';

function PageLayout() {
  return (
    <div className="dashboard-container">
      <HeaderTop/>
      <Header />
      <About />
      <BookPulicationSlider/>
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
