import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Auth/index.jsx";
import Signup from './Pages/Signup/index.jsx';
import Homepage from './Pages/Homepage/homepage.jsx';
import  Mainapp  from './Pages/Mainapp/Mainapp.jsx';
import Medpage from './Pages/MedPage/medpage.jsx';
import Summary from './Pages/Summary/summary.jsx'; 

function App() {
  const [showMainApp, setShowMainApp] = useState(false);

  const toggleMainApp = () => {
    setShowMainApp(!showMainApp);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/main-app" element={<Mainapp toggleMainApp={toggleMainApp} showMainApp={showMainApp} />} />
        <Route path="/med-page" element={<Medpage toggleMainApp={toggleMainApp} showMainApp={showMainApp} />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
