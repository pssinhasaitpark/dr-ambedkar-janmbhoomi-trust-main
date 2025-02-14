import React from 'react';
import { Header, Footer, About, HeaderTop,BookSlider,PhotoGallery,Achievment,FaqSection} from '../../components/index.js';

function PageLayout() {
  return (
    <div className="dashboard-container">
      <HeaderTop/>
      <Header />
      <About />
      <BookSlider/>
      <PhotoGallery/>
    <FaqSection/>
      <Achievment/>
      <Footer/>

    </div>
  );
}

export default PageLayout;
