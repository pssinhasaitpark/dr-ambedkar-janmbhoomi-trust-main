import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PageLayout } from "./view/layouts";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />} />
        
      </Routes>
    </div>
  );
}

export default App;
