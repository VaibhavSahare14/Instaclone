import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
import PostView from "./components/PostView";
import Upload from "./components/Upload";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/postview" element={<PostView />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </BrowserRouter>
}

export default App;