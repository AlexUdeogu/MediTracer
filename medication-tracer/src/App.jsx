import { useState } from 'react'
import Auth from "./Pages/Auth/index.jsx"
import {Link, Route, Routes} from "react-router-dom"
import Signup from './Pages/Signup/index.jsx';
import Homepage from './Pages/Homepage/homepage.jsx';
import { Mainapp } from './Pages/Mainapp/Mainapp.jsx';



function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<Mainapp />} />
    </Routes>
    </>
  );
}

export default App
