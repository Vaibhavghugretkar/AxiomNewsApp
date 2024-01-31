
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const storedMode = localStorage.getItem('theme') || 'light';
  const [mode, setMode] = useState(storedMode);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : '#181818';
    document.body.style.color = mode === 'light' ? 'black' : 'white';
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const ApiKey = '0c68f6d51c29468e90f7156376935eab';

  return (
    <div>
      <LoadingBar color='#f11946' progress={progress} />
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
        <Route path="/axiomnewsapp" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="general" />} />
        <Route path="/" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} Apikey={ApiKey} pageSize={9} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
