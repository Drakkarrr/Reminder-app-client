import { useState, useEffect } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './types/reminder';
import reminderService from './services/reminderService';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  useEffect(() => {
    loadReminders()
  }, [])


  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
