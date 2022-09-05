
//Imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Winner1 from "./pages/Winner1";
import Winner2 from "./pages/Winner2";
import WinnerDraw from "./pages/WinnerDraw";
import Game from "./pages/Game";

export default function App() {
  return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/FIGHT!' element={<Game />} />
            <Route exact path='/Fatality' element={<Winner1 />} />
            <Route exact path='/Futality' element={<Winner2 />} />
            <Route exact path='/Brotality' element={<WinnerDraw />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
