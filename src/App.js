import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PageLayout,AboutPage,BirthPlace } from "./view/layouts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />} />  
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/birth" element={<BirthPlace />} />  
      </Routes>
    </div>
  );
}

export default App;
