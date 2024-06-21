import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/Auth/index.jsx";
import Signup from './Pages/Signup/index.jsx';
import Homepage from './Pages/Homepage/homepage.jsx';
import Mainapp from './Pages/Mainapp/Mainapp.jsx';
import Medpage from './Pages/MedPage/medpage.jsx';
import Summary from './Pages/Summary/summary.jsx'; 
import { QueryClient, QueryClientProvider } from 'react-query';
import addNotification from 'react-push-notification';

const queryClient = new QueryClient();

const App = () => {
  const [reminders, setReminders] = useState(JSON.parse(localStorage.getItem('reminders')) || []);

  const handleDeleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
    localStorage.setItem('reminders', JSON.stringify(newReminders));
  };

  const handleAddReminder = (reminder) => {
    const newReminders = [...reminders, reminder];
    setReminders(newReminders);
    localStorage.setItem('reminders', JSON.stringify(newReminders));
  };

  useEffect(() => {
    const requestNotificationPermission = async () => {
      if (Notification.permission !== 'granted') {
        await Notification.requestPermission();
      }
    };

    requestNotificationPermission();

    const checkReminders = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Time in minutes since midnight
      console.log(`Current Time: ${currentTime}`); // Debugging log

      reminders.forEach(reminder => {
        reminder.prescriptionTimes.forEach(time => {
          const [hours, minutes] = time.split(':').map(Number);
          const reminderTime = hours * 60 + minutes; // Time in minutes since midnight
          console.log(`Checking Reminder Time: ${reminderTime} (for ${time})`); // Debugging log
          if (currentTime === reminderTime) {
            console.log(`Notification Triggered for ${reminder.prescriptionName} at ${time}`); // Debugging log
            addNotification({
              title: 'Medication Reminder',
              message: `It's time to take your ${reminder.prescriptionName}`,
              duration: 5000,
              native: true,
            });
          }
        });
      });
    };

    const interval = setInterval(checkReminders, 60000); // Check every minute

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [reminders]);

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
        <Route path="/main-app" element={<Mainapp toggleMainApp={toggleMainApp} showMainApp={showMainApp} onAddReminder={handleAddReminder} />} />
        <Route path="/med-page" element={<Medpage toggleMainApp={toggleMainApp} showMainApp={showMainApp} />} />
        <Route path="/summary" element={<Summary reminders={reminders} onDeleteReminder={handleDeleteReminder} />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
