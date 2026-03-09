import { useState, useEffect } from 'react';

export function useLiveTime() {
  // Use a placeholder that matches the mechanical aesthetic during server render
  const [time, setTime] = useState<string>("XX:XX:XX");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Force UTC timezone and 24-hour format
      const formatted = now.toLocaleTimeString('en-GB', {
        timeZone: 'UTC',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      
      setTime(formatted);
    };

    // Run immediately on mount to replace the "XX:XX:XX"
    updateTime();
    
    // Set the ticker
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return time;
}