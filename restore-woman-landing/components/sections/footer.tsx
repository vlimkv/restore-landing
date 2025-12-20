import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <Container>
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl font-serif mb-2">Re:store Woman</h2>
          <p className="text-sm text-white/60">by Seza Amankeldi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="#"
              className="hover:text-white/70 transition-colors underline"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="hover:text-white/70 transition-colors underline"
            >
              Договор оферты
            </a>
            <a
              href="https://t.me/restore_support"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Написать менеджеру
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="#program"
              className="hover:text-white/70 transition-colors"
            >
              Программа
            </a>
            <a
              href="#tariffs"
              className="hover:text-white/70 transition-colors"
            >
              Тарифы
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>© 2025 Re:store Woman. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
}
