"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const methods = [
  {
    icon: "💪",
    title: "Укрепление тазового дна",
    description:
      "Комплексная работа с мышцами тазового дна через специальные упражнения, дыхательные техники и осознанный подход к телу",
  },
  {
    icon: "🌸",
    title: "Восстановление",
    description:
      "Устранение дискомфорта, недержания и других проблем тазового дна через правильную биомеханику и постуральный баланс",
  },
  {
    icon: "✨",
    title: "Осознанность",
    description:
      "Глубокое понимание своего тела, связь с женской энергией и трансформация отношения к интимному здоровью",
  },
];

export function BaseMethod() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif text-center mb-16 lowercase"
        >
          Что лежит в основе метода?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group p-8 border border-primary/10 hover:border-primary transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-6 text-center">{method.icon}</div>
              <h3 className="text-2xl font-serif mb-4 text-center">
                {method.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-center">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
