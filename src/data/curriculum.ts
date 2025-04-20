import { Unit } from '../types';

export const curriculum: Unit[] = [
  {
    id: 1,
    name: "Sayılar ve Cebir",
    grade: 9,
    questions: [
      {
        id: 1,
        text: "Bir sayının 3 katının 5 fazlası 26 ise, bu sayı kaçtır?",
        options: ["5", "7", "8", "9"],
        correctAnswer: 1,
        explanation: "3x + 5 = 26 denklemini çözersek: 3x = 21, x = 7"
      },
      {
        id: 2,
        text: "(-2)⁴ işleminin sonucu kaçtır?",
        options: ["8", "16", "-16", "4"],
        correctAnswer: 2,
        explanation: "(-2)⁴ = (-2) × (-2) × (-2) × (-2) = 16"
      },
      {
        id: 3,
        text: "√144 + √36 işleminin sonucu kaçtır?",
        options: ["12", "18", "24", "30"],
        correctAnswer: 1,
        explanation: "√144 = 12 ve √36 = 6, toplam 18"
      },
      {
        id: 4,
        text: "2⁵ × 2³ işleminin sonucu kaçtır?",
        options: ["128", "256", "64", "32"],
        correctAnswer: 2,
        explanation: "2⁵ × 2³ = 2⁸ = 256"
      },
      {
        id: 5,
        text: "3! + 4! işleminin sonucu kaçtır?",
        options: ["30", "24", "18", "12"],
        correctAnswer: 0,
        explanation: "3! = 6 ve 4! = 24, toplam 30"
      }
    ]
  },
  {
    id: 2,
    name: "Üçgenler",
    grade: 9,
    questions: [
      {
        id: 1,
        text: "Bir üçgende iç açıların toplamı kaç derecedir?",
        options: ["90", "180", "270", "360"],
        correctAnswer: 1,
        explanation: "Bir üçgenin iç açılarının toplamı her zaman 180 derecedir."
      },
      {
        id: 2,
        text: "Bir dik üçgende hipotenüs 13 ve bir kenar 5 ise, diğer kenar kaçtır?",
        options: ["12", "8", "10", "15"],
        correctAnswer: 0,
        explanation: "Pisagor teoremi: 5² + x² = 13², x = 12"
      }
    ]
  },
  {
    id: 3,
    name: "Analitik Geometri",
    grade: 10,
    questions: [
      {
        id: 1,
        text: "İki nokta arasındaki uzaklık formülü nedir?",
        options: [
          "√((x₂-x₁)² + (y₂-y₁)²)",
          "(x₂-x₁) + (y₂-y₁)",
          "x₂-x₁/y₂-y₁",
          "(x₁y₂ + x₂y₁)/2"
        ],
        correctAnswer: 0,
        explanation: "İki nokta arasındaki uzaklık formülü: d = √((x₂-x₁)² + (y₂-y₁)²)"
      }
    ]
  },
  {
    id: 4,
    name: "Trigonometri",
    grade: 10,
    questions: [
      {
        id: 1,
        text: "sin²θ + cos²θ = ?",
        options: ["0", "1", "2", "π"],
        correctAnswer: 1,
        explanation: "Trigonometrik temel özdeşlik: sin²θ + cos²θ = 1"
      }
    ]
  },
  {
    id: 5,
    name: "Fonksiyonlar",
    grade: 11,
    questions: [
      {
        id: 1,
        text: "f(x) = x² + 2x + 1 fonksiyonunun grafiği nedir?",
        options: ["Doğru", "Parabol", "Hiperbol", "Çember"],
        correctAnswer: 1,
        explanation: "İkinci dereceden fonksiyonların grafikleri paraboldür."
      }
    ]
  },
  {
    id: 6,
    name: "Logaritma",
    grade: 11,
    questions: [
      {
        id: 1,
        text: "log₂8 = x ise, 2ˣ kaçtır?",
        options: ["4", "6", "8", "16"],
        correctAnswer: 2,
        explanation: "log₂8 = 3 olduğundan, 2³ = 8"
      }
    ]
  },
  {
    id: 7,
    name: "Diziler",
    grade: 11,
    questions: [
      {
        id: 1,
        text: "Aritmetik dizide a₁ = 3 ve d = 2 ise a₅ kaçtır?",
        options: ["7", "9", "11", "13"],
        correctAnswer: 2,
        explanation: "aₙ = a₁ + (n-1)d formülünden, a₅ = 3 + (5-1)2 = 11"
      }
    ]
  },
  {
    id: 8,
    name: "Türev Uygulamaları",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "f(x) = x² + 2x fonksiyonunun x = 1 noktasındaki türevi kaçtır?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "f'(x) = 2x + 2, f'(1) = 2(1) + 2 = 4"
      }
    ]
  },
  {
    id: 9,
    name: "İntegral Uygulamaları",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "∫(2x + 1)dx işleminin sonucu nedir?",
        options: ["x² + x + C", "2x² + x + C", "x² + 2x + C", "2x² + 2x + C"],
        correctAnswer: 0,
        explanation: "∫(2x + 1)dx = x² + x + C"
      }
    ]
  },
  {
    id: 10,
    name: "Karmaşık Sayılar",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "i² = -1 ise, (2 + 3i)(1 - i) işleminin sonucu nedir?",
        options: ["5 + i", "2 - i", "5 + 2i", "2 + 5i"],
        correctAnswer: 0,
        explanation: "(2 + 3i)(1 - i) = 2(1) + 2(-i) + 3i(1) + 3i(-i) = 2 - 2i + 3i + 3 = 5 + i"
      },
      {
        id: 2,
        text: "|2 + 3i| değeri kaçtır?",
        options: ["5", "13", "√13", "3"],
        correctAnswer: 2,
        explanation: "|2 + 3i| = √(2² + 3²) = √(4 + 9) = √13"
      }
    ]
  },
  {
    id: 11,
    name: "Limit ve Süreklilik",
    grade: 12,
    questions: [
      {
        id: 1,
        text: "lim(x→2) (x² - 4)/(x - 2) değeri kaçtır?",
        options: ["4", "2", "0", "-2"],
        correctAnswer: 0,
        explanation: "L'Hospital kuralı ile: lim(x→2) 2x/(1) = 4"
      }
    ]
  }
];