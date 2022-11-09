import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NavComponent from './components/NavComponent';
import Favourites from './pages/Favourites';
import Details from './pages/Details';
import { useEffect, useState } from 'react';

function App() {
  const mode = JSON.parse(localStorage.getItem('darkMode') || false);
  const [darkMode, setDarkMode] = useState(mode);

  const getMode = () => {
    const mode = localStorage.getItem('darkMode');
    if (mode === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true)
      } else setDarkMode(false);
    } else setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
  }

  useEffect(() => {
    getMode();
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'App bg-dark' : 'App'}>
      <NavComponent changeMode={setDarkMode} mode={darkMode} />
      <Routes>
        <Route path="/github-users" element={<Home mode={darkMode} />} />
        <Route path="/github-users/favourites" element={<Favourites mode={darkMode} />} />
        <Route path="/github-users/details/:name" element={<Details mode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
