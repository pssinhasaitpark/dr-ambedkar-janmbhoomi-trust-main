import React from 'react';
import "./PageLayout.css";
import { Header, Footer, About, HeaderTop,PhotoGallery,Achievment,FaqSection, Biography, AccordianSection, BookPulicationSlider,HistoryComponent,TrusteeSlider} from '../../components/index.js';

function PageLayout() {
  return (
    <div className="App">
     <HeaderTop/>
      <Header />
      <About />
      <BookPulicationSlider/>
      <Biography/>
      <PhotoGallery/>
      <AccordianSection/>
      <HistoryComponent/>
      <TrusteeSlider/>
      <FaqSection/>
      <Achievment/>
      <Footer/>

    </div>
  );
}

export default PageLayout;
