"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { tariffs } from "@/lib/data";
import { motion } from "framer-motion";

export function Tariffs() {
  return (
    <Section id="tariffs" className="bg-white">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif text-center mb-16 uppercase"
        >
          Тарифы
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tariffs.map((tariff, index) => (
            <motion.div
              key={tariff.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 border ${
                tariff.highlighted
                  ? "border-primary shadow-2xl scale-105"
                  : "border-primary/20"
              } hover:border-primary hover:-translate-y-3 transition-all duration-300`}
            >
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-primary/10">
                <h3 className="text-4xl font-serif mb-2">{tariff.name}</h3>
                {tariff.subtitle && (
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {tariff.subtitle}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-6">
                {tariff.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Diagnostic (VIP only) */}
              {tariff.diagnostic && (
                <div className="mb-6 p-4 bg-primary text-white text-sm flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <p>{tariff.diagnostic}</p>
                </div>
              )}

              {/* Access Duration */}
              <div className="mb-6 p-4 bg-muted text-center text-sm">
                {tariff.accessDuration}
              </div>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-4 mb-6">
                <span className="text-5xl font-serif">${tariff.price}</span>
                {tariff.oldPrice && (
                  <span className="text-2xl line-through text-muted-foreground">
                    ${tariff.oldPrice}
                  </span>
                )}
                {tariff.superOldPrice && (
                  <span className="text-lg line-through text-muted-foreground/50">
                    ${tariff.superOldPrice}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(tariff.paymentLink, "_blank")}
                >
                  оплатить полностью
                </Button>
                {tariff.prepaymentLink && (
                  <Button
                    variant="primary"
                    className="w-full relative"
                    onClick={() =>
                      window.open(tariff.prepaymentLink, "_blank")
                    }
                  >
                    <span className="flex flex-col items-center">
                      <span>Внести предоплату: $30</span>
                      <span className="text-[10px] mt-1 opacity-70">
                        Предоплата не возвращается
                      </span>
                    </span>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
