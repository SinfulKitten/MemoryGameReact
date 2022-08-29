
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Winner from "./pages/Winner"
import Game from "./pages/Game";

export default function App() {
  return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/FIGHT!' element={<Game />} />
            <Route exact path='/Fatality' element={<Winner />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
