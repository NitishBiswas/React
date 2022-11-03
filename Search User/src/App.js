import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from "react-router-dom";
import Details from './pages/details/Details';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
