/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Benefit, Advantage, Bonus, Testimonial, FAQItem } from './types';

export const BRAND_NAME = "Seri Allah Tuhanku";

export const BOOKS_DATA: Book[] = [
  {
    id: "allah-maha-kuasa",
    title: "Allah Maha Kuasa",
    tag: "Buku 1: Mengenal Keajaiban Alam",
    description: "Membantu si kecil mengagumi keindahan semesta dan mengenal kebesaran sang Pencipta dengan cara yang menyenangkan.",
    points: [
      "Mengenal kekuasaan Allah melalui ciptaan-Nya",
      "Bahasa yang manis dan berima lembut",
      "Dilengkapi aktivitas seru mencari objek gambar"
    ],
    color: 'sage',
    gradient: "from-[#F1F6F4] to-[#E2ECE9]",
    iconName: "Sparkles",
    themeColor: "#6C8E75" // Sage Green
  },
  {
    id: "allah-maha-melihat",
    title: "Allah Maha Melihat",
    tag: "Buku 2: Menanamkan Kejujuran",
    description: "Mengajarkan konsep Ihsan (merasa diawasi Allah) sejak dini melalui kisah sehari-hari yang dekat dengan dunia anak.",
    points: [
      "Mengajarkan kejujuran dan akhlak mulia",
      "Alur cerita sederhana yang mudah dicerna",
      "Ilustrasi lucu dengan ekspresi bersahabat"
    ],
    color: 'pink',
    gradient: "from-[#FAF3F3] to-[#F4DCD6]",
    iconName: "Eye",
    themeColor: "#D49B9E" // Dusty Pink
  },
  {
    id: "allah-maha-mendengar-doa",
    title: "Allah Maha Mendengar Doa",
    tag: "Buku 3: Indahnya Bercakap dengan Allah",
    description: "Membiasakan anak untuk selalu mengadu, bersyukur, dan meminta hanya kepada Allah dalam setiap kondisi.",
    points: [
      "Membiasakan si kecil berdoa sejak dini",
      "Mengenalkan bahwa Allah selalu dekat dan mendengar",
      "Cerita hangat yang menyentuh hati ibu & anak"
    ],
    color: 'blue',
    gradient: "from-[#F3F6FA] to-[#E3EDF7]",
    iconName: "Volume2",
    themeColor: "#4F709C" // Baby Blue
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: "love-allah",
    title: "Menumbuhkan Rasa Cinta",
    description: "Mengenalkan sifat-sifat Allah yang Maha Baik agar tumbuh rasa mahabbah (cinta) yang kuat di hati si kecil sejak dini.",
    iconName: "Heart"
  },
  {
    id: "good-character",
    title: "Membangun Akhlak Mulia",
    description: "Cerita di buku mengajarkan nilai integritas, kejujuran, dan empati sebagai pondasi karakter Islami anak.",
    iconName: "Smile"
  },
  {
    id: "understand-tauhid",
    title: "Memahami Tauhid Sederhana",
    description: "Mengonversi konsep ketuhanan yang abstrak menjadi cerita konkret yang mudah dibayangkan oleh anak usia 2-6 tahun.",
    iconName: "Compass"
  },
  {
    id: "parent-bonding",
    title: "Aktivitas Bonding Terbaik",
    description: "Menjadi media membaca berkualitas (read-aloud) yang merekatkan kehangatan emosi antara orang tua dan anak.",
    iconName: "Users"
  }
];

export const ADVANTAGES_DATA: Advantage[] = [
  {
    id: "simple-lang",
    title: "Bahasa Sederhana & Berirama",
    description: "Kalimatnya pendek, berima lembut seperti melodi, sehingga sangat ramah untuk rentang konsentrasi balita yang singkat.",
    iconName: "MessageSquareText"
  },
  {
    id: "cute-illustrations",
    title: "Visual Pastel Ramah Anak",
    description: "Ilustrasi bergaya aesthetic pastel, lembut di mata, didesain khusus agar memberi rasa tenang dan nyaman saat dibaca.",
    iconName: "Sparkles"
  },
  {
    id: "parenting-friendly",
    title: "Interaktif Bersama Ibu",
    description: "Disertai pertanyaan interaktif di sela-sela cerita untuk memicu rasa ingin tahu anak dan diskusi hangat.",
    iconName: "BookOpen"
  },
  {
    id: "pdf-format",
    title: "Format PDF Premium Praktis",
    description: "Bisa langsung dibaca kapan saja lewat HP, tablet, Smart TV, atau dicetak sendiri (print-friendly) di rumah.",
    iconName: "FileDown"
  },
  {
    id: "read-forever",
    title: "Dapat Dibaca Berulang Kali",
    description: "Satu kali pembelian untuk akses seumur hidup. Awet, tidak akan robek, dan siap menemani tidur malam si kecil.",
    iconName: "RotateCcw"
  },
  {
    id: "age-customized",
    title: "Materi Sesuai Psikologi Anak",
    description: "Pengenalan tauhid yang bebas dari rasa takut (neuroscience-friendly), berfokus pada kasih sayang Allah SWT.",
    iconName: "Baby"
  }
];

export const BONUS_DATA: Bonus[] = [
  {
    id: "mewarnai",
    title: "Lembar Aktivitas Mewarnai Islami",
    description: "Kumpulan halaman mewarnai bernuansa Islami yang lucu untuk melatih keterampilan motorik halus dan kreativitas si kecil.",
    badge: "GRATIS",
    items: [
      "10+ Lembar aktivitas eksklusif",
      "Format PDF siap cetak ukuran A4",
      "Desain menggemaskan bertema alam ciptaan Allah"
    ],
    iconName: "Palette"
  },
  {
    id: "poster-doa",
    title: "Poster Doa Harian Anak",
    description: "Poster dinding dekoratif beresolusi tinggi dengan gambar kartun lucu yang berisi doa harian penting agar anak mudah menghafalnya.",
    badge: "EKSKLUSIF",
    items: [
      "Poster Doa Sebelum & Bangun Tidur",
      "Poster Doa Kedua Orang Tua",
      "Desain aesthetic pastel mempercantik kamar anak"
    ],
    iconName: "Map"
  },
  {
    id: "checklist-ibadah",
    title: "Checklist Aktivitas Kebiasaan Baik",
    description: "Papan bintang harian interaktif bertema Islami yang menyenangkan untuk mengapresiasi kebiasaan baik si kecil setiap hari.",
    badge: "PREMIUM",
    items: [
      "Checklist harian bergambar menarik",
      "Mengajarkan kedisiplinan tanpa paksaan",
      "Panduan praktis untuk orang tua"
    ],
    iconName: "CheckSquare"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testi-1",
    quote: "Masha Allah, e-book ini penyelamat sekali! Sebelum tidur anak saya selalu minta dibacakan buku Seri Allah Maha Kuasa. Ilustrasinya menenangkan banget, cocok buat bedtime story.",
    author: "Ibu Nisa",
    role: "Ibu dari Rayyan (3 tahun)",
    city: "Jakarta Selatan",
    rating: 5
  },
  {
    id: "testi-2",
    quote: "Awalnya sempat ragu apa anak usia 2.5 tahun bakal paham konsep Allah Maha Melihat. Ternyata lewat analogi sederhana di buku ini, dia langsung mengerti dengan ceria. Bahasanya pas banget!",
    author: "Ibu Rina",
    role: "Ibu dari Hana & Sofia (2 & 4 tahun)",
    city: "Bandung",
    rating: 5
  },
  {
    id: "testi-3",
    quote: "E-booknya praktis sekali, tinggal buka di iPad kalau lagi bepergian. Tapi kami juga cetak untuk dibaca sambil mewarnai di rumah. Sangat mendidik dan mempererat hubungan keluarga.",
    author: "Ibu Fira",
    role: "Ibu dari Bilal (5 tahun)",
    city: "Surabaya",
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah e-book ini cocok untuk anak usia 2 tahun?",
    answer: "Ya, sangat cocok! Kosakata di dalam e-book ini dipilih dengan teliti menggunakan kalimat-kalimat pendek, berima sederhana, serta didominasi oleh ilustrasi besar berwana lembut sehingga menarik perhatian balita usia 2-6 tahun."
  },
  {
    id: "faq-2",
    question: "Apakah e-book ini bisa dicetak sendiri?",
    answer: "Tentu saja! E-book kami memiliki resolusi tinggi dan format ramah cetak (print-friendly) berukuran rasio standar. Anda bebas mencetaknya di kertas A4 atau kertas tebal untuk dibundel sendiri di rumah demi penggunaan pribadi."
  },
  {
    id: "faq-3",
    question: "Bagaimana cara menerima file e-book setelah bayar?",
    answer: "Sangat mudah dan praktis! Setelah simulasi pembayaran atau pembelian dikonfirmasi, Anda akan dialihkan langsung ke Halaman Download khusus untuk mengunduh ketiga e-book beserta seluruh bonusnya. Kami juga mengirimkan link unduhan cadangan langsung ke WhatsApp Anda."
  },
  {
    id: "faq-4",
    question: "Apakah ini produk fisik berupa buku cetak?",
    answer: "Bukan, ini adalah produk digital berupa file E-book dengan format PDF premium. Kelebihannya adalah Anda bisa menyimpannya selamanya di HP/tablet, mudah dibawa tanpa menambah muatan tas, dan harganya jauh lebih terjangkau daripada buku fisik sejenis."
  }
];
