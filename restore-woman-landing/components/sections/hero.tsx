"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative z-20 py-20">
        {/* Header Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16 text-sm tracking-wider"
        >
          <p>
            <span className="text-white/50">{"{ "}</span>
            Длительность: 8 недель
            <span className="text-white/50">{" }"}</span>
          </p>
          <p>Старт курса: 15 января</p>
          <p>
            <span className="text-white/50">{"{ "}</span>
            Формат: онлайн в записи
            <span className="text-white/50">{" }"}</span>
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 lowercase">
            Re:store Woman
          </h1>
          <div className="font-serif text-2xl md:text-4xl text-white/90 space-y-2">
            <p>New Year edition.</p>
            <p>new version of you</p>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Восстанови здоровье тазового дна, избавься от дискомфорта и обрети
          уверенность за 8 недель по методу Re:store Woman от Сезы Аманкелди
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              document
                .getElementById("program")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            программа
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document
                .getElementById("tariffs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            присоединиться
          </Button>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center mt-16 text-sm tracking-wider"
        >
          {"{ старт: 15 января }"}
        </motion.p>
      </Container>
    </section>
  );
}
