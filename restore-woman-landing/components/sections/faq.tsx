"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { faqItems } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section className="bg-muted">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif text-center mb-16 uppercase"
        >
          F.A.Q.
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-primary/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left hover:bg-muted transition-colors"
              >
                <span className="text-base md:text-lg font-medium pr-4">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 flex items-center justify-center transition-transform duration-300 ${
                    openId === item.id ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z"
                      fill="#202020"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 pt-0">
                      {Array.isArray(item.answer) ? (
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {item.answer.map((line, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span>•</span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
