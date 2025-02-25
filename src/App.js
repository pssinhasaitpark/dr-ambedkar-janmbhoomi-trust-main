import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PageLayout,AboutPage,BirthPlace,MuseumLayout,EventCelebrationLayout,GalleryLayout,AwardLayout, BookLayout, LegacyLayout, EducationLayout,AchievementLayout, NewsLayout, ContactLayout,DonationLayout, VisitorLayout,TrusteeLayout,HistoryLayout } from "./view/layouts";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />} />  
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/birth" element={<BirthPlace />} />  
        <Route path="/museum" element={<MuseumLayout />} />  
        <Route path="/event" element={< EventCelebrationLayout />} />
        <Route path="/gallery" element={< GalleryLayout />} />  
        <Route path="/award" element={< AwardLayout />} />  
        <Route path="/book" element={< BookLayout />} />  
        <Route path="/legacy" element={< LegacyLayout />} />  
        <Route path="/education" element={< EducationLayout />} />  
        <Route path="/achievement" element={< AchievementLayout />} />  
        <Route path="/news" element={< NewsLayout />} />  
        <Route path="/contact" element={<ContactLayout />} />  
        <Route path="/donation" element={<DonationLayout />} />  
        <Route path="/visit" element={<VisitorLayout/>} />  
        <Route path="/trustee" element={<TrusteeLayout/>} />  
        <Route path="/history" element={<HistoryLayout/>} />  
      </Routes>
    </div>
  );
}

export default App;
