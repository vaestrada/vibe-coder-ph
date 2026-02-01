"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Prevent hydration mismatch
  if (!mounted || !timeLeft) {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-violet-500/20 rounded-lg border border-violet-500/30">
            <span className="text-3xl font-mono font-bold">--</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Days</p>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div 
      className="inline-flex items-center gap-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-violet-500/30"
      aria-live="polite"
      aria-atomic="true"
    >
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4">
          <div className="text-center">
            <div className="min-w-[80px] h-20 flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-lg border border-violet-500/30">
              <span className="text-3xl sm:text-4xl font-mono font-bold tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">{unit.label}</p>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl text-violet-400 font-bold">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
