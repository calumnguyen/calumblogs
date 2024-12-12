"use client";
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2039-06-11T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        // Calculate years
        let years = targetDate.getFullYear() - now.getFullYear();
        const monthDiff = targetDate.getMonth() - now.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() > targetDate.getDate())) {
          years--;
        }

        // Calculate months
        let months = targetDate.getMonth() - now.getMonth();
        if (months < 0) months += 12;
        if (now.getDate() > targetDate.getDate()) {
          months--;
          if (months < 0) months = 11;
        }

        // Calculate days
        let days = targetDate.getDate() - now.getDate();
        if (days < 0) {
          const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
          days += lastDayOfMonth;
        }

        // Calculate hours, minutes, seconds
        const hours = now.getHours() > targetDate.getHours() ? 
          23 - (now.getHours() - targetDate.getHours()) :
          targetDate.getHours() - now.getHours();
        const minutes = now.getMinutes() > targetDate.getMinutes() ? 
          59 - (now.getMinutes() - targetDate.getMinutes()) :
          targetDate.getMinutes() - now.getMinutes();
        const seconds = now.getSeconds() > targetDate.getSeconds() ? 
          59 - (now.getSeconds() - targetDate.getSeconds()) :
          targetDate.getSeconds() - now.getSeconds();

        setTimeLeft(`${years} : ${months} : ${days} : ${hours} : ${minutes} : ${seconds}`);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="text-lg text-zinc-500">
      {timeLeft}
    </span>
  );
};

export default CountdownTimer;