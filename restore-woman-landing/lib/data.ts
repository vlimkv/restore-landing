import { Tariff, FAQItem, WantItem, Result, ProgramModule, WorkoutWeek } from "./types";

export const tariffs: Tariff[] = [
  {
    id: "basic",
    name: "Basic",
    price: 149,
    oldPrice: 199,
    superOldPrice: 249,
    features: [
      "Программа тренировок на 8 недель",
      "Все видео-уроки и практики",
      "Готовый план тренировок",
      "Гайды и чек-листы",
    ],
    accessDuration: "Доступ к курсу 3 месяца",
    paymentLink: "#",
    prepaymentLink: "#",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Рекомендуемый тариф",
    price: 249,
    oldPrice: 299,
    superOldPrice: 349,
    features: [
      "Все из тарифа Basic",
      "Поддержка куратора",
      "Общий чат участниц",
      "Еженедельные эфиры с Сезой",
      "Дополнительные материалы",
    ],
    accessDuration: "Доступ к курсу 6 месяцев",
    highlighted: true,
    paymentLink: "#",
    prepaymentLink: "#",
  },
  {
    id: "vip",
    name: "VIP",
    subtitle: "10 мест",
    price: 599,
    oldPrice: 699,
    superOldPrice: 799,
    features: [
      "Все из тарифа Premium",
      "Персональная консультация с Сезой",
      "Индивидуальный план восстановления",
      "Приоритетная поддержка 24/7",
      "Закрытый чат VIP-участниц",
    ],
    accessDuration: "Доступ к курсу 12 месяцев",
    limitedSpots: 10,
    diagnostic: "Персональная диагностика и рекомендации от Сезы",
    paymentLink: "#",
    prepaymentLink: "#",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Есть ли противопоказания к курсу?",
    answer: [
      "Острые воспалительные процессы",
      "Первые 6-8 недель после родов",
      "Обострение хронических заболеваний",
      "Онкологические заболевания",
    ],
  },
  {
    id: "2",
    question: "Когда старт курса?",
    answer: "15 января 2025",
  },
  {
    id: "3",
    question: "Сколько времени нужно уделять курсу?",
    answer: "В среднем 20-30 минут в день, 5-6 дней в неделю",
  },
  {
    id: "4",
    question: "Можно ли проходить курс после родов?",
    answer: "Да, но не ранее чем через 6-8 недель после родов. Если были осложнения, необходима консультация врача.",
  },
  {
    id: "5",
    question: "Нужен ли какой-то инвентарь?",
    answer: "Для базовых упражнений нужен только коврик. Дополнительно можно использовать фитбол и легкие гантели, но это опционально.",
  },
];

export const wantItems: WantItem[] = [
  {
    id: "1",
    image: "/images/want/1.jpg",
    text: "Избавиться от недержания при кашле, чихании или физических нагрузках",
  },
  {
    id: "2",
    image: "/images/want/2.jpg",
    text: "Восстановиться после родов и вернуть тонус мышцам тазового дна",
  },
  {
    id: "3",
    image: "/images/want/3.jpg",
    text: "Улучшить интимную жизнь и вернуть чувствительность",
  },
  {
    id: "4",
    image: "/images/want/4.jpg",
    text: "Избавиться от пролапса и опущения органов малого таза",
  },
  {
    id: "5",
    image: "/images/want/5.jpg",
    text: "Устранить боли в пояснице и тазобедренных суставах",
  },
  {
    id: "6",
    image: "/images/want/6.jpg",
    text: "Научиться правильно дышать и использовать диафрагму",
  },
  {
    id: "7",
    image: "/images/want/7.jpg",
    text: "Улучшить осанку и избавиться от сутулости",
  },
  {
    id: "8",
    image: "/images/want/8.jpg",
    text: "Подготовиться к беременности и родам",
  },
];

export const results: Result[] = [
  {
    id: "1",
    beforeImage: "/images/results/1-before.jpg",
    afterImage: "/images/results/1-after.jpg",
    mobileImage: "/images/results/1-mobile.jpg",
    achievements: [
      "Полностью избавилась от недержания",
      "Восстановилась после 2 родов",
      "Улучшилась интимная жизнь",
      "Ушли боли в пояснице",
    ],
  },
  {
    id: "2",
    beforeImage: "/images/results/2-before.jpg",
    afterImage: "/images/results/2-after.jpg",
    mobileImage: "/images/results/2-mobile.jpg",
    achievements: [
      "Устранила пролапс 2 степени",
      "Укрепила мышцы тазового дна",
      "Вернула чувствительность",
      "Улучшилась осанка",
    ],
  },
  {
    id: "3",
    beforeImage: "/images/results/3-before.jpg",
    afterImage: "/images/results/3-after.jpg",
    mobileImage: "/images/results/3-mobile.jpg",
    achievements: [
      "Восстановилась после родов за 6 недель",
      "Научилась правильно дышать",
      "Ушли боли при интимной близости",
      "Обрела уверенность в себе",
    ],
  },
];

export const programModules: ProgramModule[] = [
  {
    id: "intro",
    week: 0,
    title: "Вводный модуль",
    description: "Погружение в программу",
    lessons: [
      {
        id: "intro-1",
        title: "Вступительный урок от Сезы",
        duration: 8,
        thumbnail: "/images/lessons/intro-1.jpg",
      },
      {
        id: "intro-2",
        title: "Анатомия тазового дна",
        duration: 12,
        thumbnail: "/images/lessons/intro-2.jpg",
      },
      {
        id: "intro-3",
        title: "Диагностика состояния тазового дна",
        duration: 15,
        thumbnail: "/images/lessons/intro-3.jpg",
      },
    ],
    guides: [
      {
        id: "guide-1",
        title: "Гайд по курсу",
        frontImage: "/images/guides/1-front.jpg",
        backImage: "/images/guides/1-back.jpg",
      },
    ],
  },
];

export const workoutWeeks: WorkoutWeek[] = [
  {
    week: 1,
    days: [
      {
        day: "Понедельник",
        workouts: [
          {
            id: "w1-mon-1",
            title: "Знакомство с дыханием и тазовым дном",
            duration: 15,
            thumbnail: "/images/workouts/w1-mon-1.jpg",
          },
          {
            id: "w1-mon-2",
            title: "Базовые упражнения Кегеля",
            duration: 20,
            thumbnail: "/images/workouts/w1-mon-2.jpg",
          },
        ],
      },
      {
        day: "Вторник",
        workouts: [
          {
            id: "w1-tue-1",
            title: "Диафрагмальное дыхание",
            duration: 12,
            thumbnail: "/images/workouts/w1-tue-1.jpg",
          },
        ],
      },
      {
        day: "Воскресенье",
        workouts: [],
        isRest: true,
      },
    ],
  },
];
