"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-25T23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "дня", value: timeLeft.days },
    { label: "часов", value: timeLeft.hours },
    { label: "минут", value: timeLeft.minutes },
    { label: "секунд", value: timeLeft.seconds },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-center mb-12"
        >
          до конца скидок осталось:
        </motion.h2>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-center gap-4 md:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center min-w-[60px] md:min-w-[100px]"
              >
                <div className="text-4xl md:text-6xl font-serif mb-2">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">
                  {unit.label}
                </div>
              </motion.div>

              {index < timeUnits.length - 1 && (
                <div className="text-3xl md:text-5xl font-light text-muted-foreground">
                  :
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
