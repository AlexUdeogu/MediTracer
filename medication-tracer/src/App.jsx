import { useState } from 'react'
import Login from "./Pages/Auth/index.jsx"
import {Link, Route, Routes} from "react-router-dom"
import Signup from './Pages/Signup/index.jsx';
import Homepage from './Pages/Homepage/homepage.jsx';
import { Mainapp } from './Pages/Mainapp/Mainapp.jsx';
import Medpage from './Pages/MedPage/medpage.jsx';



function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/log-in" element={<Login/>}/>
      <Route path="/main-app" element={<Mainapp/>}/>

    </Routes>
    </>
  );
}

export default App
