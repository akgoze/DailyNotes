import { useEffect, useState } from 'react';

const AppDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-date">
      {date.toLocaleDateString()} {date.toLocaleTimeString()}
    </div>
  );
}

export default AppDate;