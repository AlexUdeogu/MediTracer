// App.js
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/Auth/index.jsx";
import Signup from './Pages/Signup/index.jsx';
import Homepage from './Pages/Homepage/homepage.jsx';
import Mainapp from './Pages/Mainapp/Mainapp.jsx';
import Medpage from './Pages/MedPage/medpage.jsx';
import Summary from './Pages/Summary/summary.jsx'; 
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [reminders, setReminders] = useState([
    // Example reminder
    {
      prescriptionName: 'Aspirin',
      dosage: '100mg',
      prescriptionTimes: ['8:00 AM', '8:00 PM'],
      dailyIntake: '2 times a day'
    },
    // Add more reminders as needed
  ]);

  const handleDeleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  const [showMainApp, setShowMainApp] = useState(false);

  const toggleMainApp = () => {
    setShowMainApp(!showMainApp);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/main-app" element={<Mainapp toggleMainApp={toggleMainApp} showMainApp={showMainApp} />} />
        <Route path="/med-page" element={<Medpage toggleMainApp={toggleMainApp} showMainApp={showMainApp} />} />
        <Route path="/summary" element={<Summary reminders={reminders} onDeleteReminder={handleDeleteReminder} />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
