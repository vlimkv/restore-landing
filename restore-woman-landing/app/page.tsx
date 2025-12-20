import { Hero } from "@/components/sections/hero";
import { BaseMethod } from "@/components/sections/base-method";
import { Tariffs } from "@/components/sections/tariffs";
import { CountdownTimer } from "@/components/sections/countdown-timer";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BaseMethod />
      <CountdownTimer />
      <Tariffs />
      <FAQ />
      <Footer />
    </main>
  );
}
