import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Niken Nuraifah Suherlan",
  nickName: "Niken",
  title: "Fresh Graduate Sistem Informasi",
  subTitle: "Tertarik pada Data & Teknologi",
  email: "10nikenniken24@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/nikenns",
  institution: "Universitas Komputer Indonesia (UNIKOM) Bandung",
  heroDescription: "Saya merupakan lulusan Sistem Informasi yang memiliki ketertarikan pada Data Science, Machine Learning, dan pengembangan solusi berbasis data.",
  aboutText: "Saya adalah fresh graduate Sistem Informasi dari Universitas Komputer Indonesia dengan minat pada Data Science, Machine Learning, Artificial Intelligence, dan pengembangan sistem informasi. Selama kuliah, saya mengerjakan berbagai project yang berkaitan dengan pengolahan data, prediksi, klasifikasi, Natural Language Processing, serta analisis kebutuhan sistem."
};

export const featuredProject: Project = {
  id: "hortikultura-lstm",
  title: "Dashboard Prediksi Produksi Hortikultura",
  badge: "Project Skripsi — Individu",
  technologies: ["Python", "LSTM", "Streamlit", "Google Colab", "Time Series"],
  description: "Membangun dashboard interaktif untuk melakukan prediksi hasil produksi tanaman sayuran dan buah-buahan menggunakan algoritma Long Short-Term Memory (LSTM) pada data time series.",
  isFeatured: true,
  details: {
    role: "Project Skripsi — Peneliti & Pengembang Tunggal",
    overview: "Penelitian skripsi yang berfokus pada pemodelan deret waktu (time series forecasting) untuk membantu estimasi tren dan volume produksi komoditas hortikultura (sayuran dan buah-buahan) secara akurat.",
    objectives: [
      "Mengembangkan arsitektur model Long Short-Term Memory (LSTM) untuk menangkap pola musiman dan tren historis pada data produksi.",
      "Melakukan pra-pemrosesan data time series mulai dari penanganan missing value, normalisasi skala (MinMaxScaler), hingga windowing sequence.",
      "Mengintegrasikan model inferensi ke dalam antarmuka dashboard interaktif menggunakan Streamlit untuk mempermudah visualisasi prediksi dan pemantauan data."
    ],
    highlights: [
      "Implementasi arsitektur deep learning LSTM untuk data time series",
      "Eksperimentasi dan tuning hyperparameter melalui lingkungan Google Colab",
      "Dashboard interaktif berbasis Streamlit dengan visualisasi grafik tren aktual vs hasil estimasi",
      "Penyusunan alur analisis kebutuhan sistem dan dokumentasi ilmiah skripsi"
    ],

    images: [
      {
        src: "/images/projects/hortikultura-dashboard.jpg",
        title: "Dashboard Agro-LSTM Predictor",
        description: "Tampilan utama dashboard prediksi produksi hortikultura."
      },
      {
        src: "/images/projects/hortikultura-komoditas.jpg",
        title: "Daftar Komoditas Hortikultura",
        description: "Daftar komoditas yang tersedia dalam dashboard beserta informasi estimasi produksi."
      },
      {
        src: "/images/projects/hortikultura-prediksi.png",
        title: "Hasil Prediksi Produksi",
        description: "Tampilan hasil prediksi produksi bulan berikutnya beserta rekomendasi dan faktor yang memengaruhi prediksi."
      },
      {
        src: "/images/projects/hortikultura-reliabilitas.jpg",
        title: "Reliabilitas Model",
        description: "Tampilan evaluasi reliabilitas model menggunakan Cronbach's Alpha."
      }
    ],

    result: "Menghasilkan dashboard interaktif untuk memprediksi hasil produksi tanaman hortikultura berdasarkan data historis produksi dan variabel pendukung. Dashboard saat ini digunakan sebagai aplikasi lokal dan belum dideploy secara publik."
  }
};

export const otherProjects: Project[] = [
  {
    id: "pakan-sapi-xgboost",
    title: "Prediksi Penjualan Pakan Sapi",
    badge: "Project Kelompok — Riset",
    technologies: ["Python", "XGBoost", "GridSearchCV", "TimeSeriesSplit"],
    description: "Project prediksi penjualan berbasis data time series dengan feature engineering dan XGBoost.",
    metrics: [{ label: "R²", value: "0,88" }, { label: "MAPE", value: "6,60%" }],
    details: {
      role: "Project Kelompok — Riset & Pemodelan Data",
      overview: "Menerapkan pendekatan machine learning berbasis pohon keputusan (gradient boosting) untuk memprediksi volume penjualan pakan sapi pada rentang waktu tertentu guna membantu perencanaan inventaris.",
      objectives: [
        "Menerapkan feature engineering untuk variabel time series seperti lag features dan rolling statistics.",
        "Mengoptimasi performa model menggunakan GridSearchCV dengan skema validasi TimeSeriesSplit.",
        "Mengevaluasi akurasi prediksi model XGBoost pada data penjualan berkala."
      ],
      highlights: [
        "Feature engineering lag & rolling window",
        "Hyperparameter tuning menggunakan GridSearchCV",
        "Evaluasi time series tanpa data leakage dengan TimeSeriesSplit"
      ],

      // contribution: "Isi 1-2 kalimat spesifik tentang bagian yang kamu kerjakan di project ini",
      evidence: [
        { src: "/images/evidence/pakan-sapi-xgboost-1.jpg", caption: "Prediksi vs aktual data mingguan sebelum dan sesudah hyperparameter tuning." },
        { src: "/images/evidence/pakan-sapi-xgboost-2.jpg", caption: "Output evaluasi: MAPE turun dari 23,54% menjadi 6,60%, R² naik dari −1,01 menjadi 0,88." },
        { src: "/images/evidence/pakan-sapi-xgboost-3.jpg", caption: "Alur penelitian: Random Forest sebagai model awal, XGBoost sebagai model lanjutan." }
      ],
      report: { url: "/reports/laporan-prediksi-pakan-sapi.pdf", note: "Laporan tugas akhir, belum dipublikasikan." },
      result: "Model XGBoost yang telah dioptimasi menghasilkan R² sebesar 0,88 dengan MAPE sebesar 6,60%."
    }
  },
  {
    id: "status-stunting-ml",
    title: "Prediksi Status Stunting",
    badge: "Project Kelompok — Riset",
    technologies: ["Machine Learning", "Orange Data Mining"],
    algorithms: ["Logistic Regression", "Decision Tree", "Random Forest", "Naive Bayes", "KNN"],
    description: "Melakukan perbandingan beberapa algoritma Machine Learning untuk klasifikasi status stunting pada balita.",
    metrics: [{ label: "Akurasi", value: "93,2%" }, { label: "AUC", value: "0,962" }],
    details: {
      role: "Project Kelompok — Analis Data & Komparasi Model",
      overview: "Riset komparatif untuk mengidentifikasi status stunting pada balita berdasarkan fitur antropometri dan data kesehatan anak menggunakan workflow visual data mining.",
      objectives: [
        "Mengeksplorasi dan membersihkan data kesehatan balita dari outlier atau data tidak lengkap.",
        "Membangun pipeline visual komparasi multi-algoritma pada Orange Data Mining.",
        "Membandingkan kinerja metrik klasifikasi (akurasi, presisi, recall, F1-Score, dan AUC-ROC) antar algoritma."
      ],
      highlights: [
        "Komparasi 5 algoritma: Logistic Regression, Decision Tree, Random Forest, Naive Bayes, dan KNN",

        "Eksplorasi visual dan analisis matriks kebingungan (confusion matrix)",

        "Penyusunan rekomendasi algoritma klasifikasi terbaik berdasarkan evaluasi"
      ],

      // contribution: "Isi 1-2 kalimat spesifik tentang bagian yang kamu kerjakan di project ini",
      evidence: [
        { src: "/images/evidence/status-stunting-ml-1.jpg", caption: "Confusion matrix lima algoritma pada Orange Data Mining (5-fold cross validation, n = 4.262)." }
        // Tabel Test and Score belum dipasang: cek dulu angka akurasi/AUC (lihat catatan). File siap:
        // { src: "/images/evidence/status-stunting-ml-TEST-AND-SCORE-belum-dipakai.jpg", caption: "Tabel Test and Score Orange." }
      ],
      report: { url: "/reports/laporan-prediksi-stunting.pdf", note: "Laporan tugas akhir, belum dipublikasikan." },
      result: "Hasil evaluasi menunjukkan bahwa model Random Forest memperoleh akurasi sebesar 93,2% dengan nilai AUC sebesar 0,962 pada klasifikasi status stunting."
    }
  },
  {
    id: "absa-indobert",
    title: "Aspect-Based Sentiment Analysis",
    badge: "Project Kelompok",
    technologies: ["Python", "IndoBERT", "Google Colab", "NLP"],
    description: "Menerapkan fine-tuning IndoBERT untuk melakukan analisis sentimen berbasis aspek pada ulasan pelanggan.",
    metrics: [{ label: "Akurasi sentimen", value: "93,07%" }, { label: "Macro F1 aspek", value: "90,63%" }],
    details: {
      role: "Project Kelompok — Pengembang Model NLP",
      overview: "Proyek pemrosesan bahasa alami (NLP) untuk menganalisis opini pelanggan secara lebih spesifik berdasarkan aspek produk/layanan yang dibahas dalam teks ulasan bahasa Indonesia.",
      objectives: [
        "Melakukan tokenisasi dan pra-pemrosesan teks ulasan bahasa Indonesia (text cleaning, case folding).",
        "Melakukan fine-tuning model transformer pretrained IndoBERT untuk klasifikasi aspek dan polaritas sentimen.",
        "Mengevaluasi ketepatan klasifikasi sentimen positif, negatif, atau netral per aspek spesifik."
      ],
      highlights: [
        "Fine-tuning model transformer IndoBERT pada Google Colab GPU",
        "Ekstraksi aspek dan penentuan polaritas sentimen pada ulasan teks",
        "Analisis sentimen mendalam untuk masukan evaluasi kepuasan pengguna"
      ],

      // contribution: "Isi 1-2 kalimat spesifik tentang bagian yang kamu kerjakan di project ini",
      evidence: [
        { src: "/images/evidence/absa-indobert-1.jpg", caption: "Confusion matrix model sentimen pada data uji (202 ulasan)." },
        { src: "/images/evidence/absa-indobert-2.jpg", caption: "Distribusi aspek pada 2.012 ulasan Richeese Pizza Bandung: makanan paling banyak dibahas." },
        { src: "/images/evidence/absa-indobert-3.jpg", caption: "Alur metodologi dari pengumpulan data hingga evaluasi model." }
      ],
      report: { url: "/reports/laporan-absa-indobert-richeese-pizza.pdf", note: "Paper tugas besar NLP, belum dipublikasikan." },
      result: "Hasil pengujian menunjukkan model sentimen memperoleh akurasi 93,07% dengan macro F1-score 80,80%, sedangkan model aspek memperoleh macro F1-score 90,63% dan micro F1-score 91,95%. Performa terbaik pada aspek pelayanan mencapai F1-score 96,52%."
    }
  },
 
  {
    id: "katilu-nature-lodge",
    title: "Sistem Booking Web — Katilu Nature Lodge",
    badge: "Project Kelompok",
    technologies: ["Business Analysis", "System Analysis", "UI/UX"],
    description:
      "Merancang solusi sistem informasi booking berbasis web untuk membantu proses reservasi, informasi layanan, dan pembayaran.",
    details: {
      role: "Project Kelompok — Analis Sistem & Perancang UI/UX",
      overview:
        "Perancangan sistem informasi reservasi penginapan berbasis web.",
      objectives: [
        "Mengidentifikasi kebutuhan bisnis.",
        "Merancang alur dan antarmuka pemesanan.",
        "Menyusun rancangan sistem booking."
      ],
      highlights: [
        "Analisis kebutuhan bisnis",
        "Perancangan UI/UX",
        "Perancangan alur reservasi"
      ],
      result:
        "Menghasilkan rancangan sistem informasi booking berbasis web."
    }
  },
  {
    id: "mangrove-maison-azkies",
    title: "Project Mangrove — Maison Azkies",
    badge: "Project Komunitas",
    technologies: [
      "Project Management",
      "Community Engagement",
      "Environmental Conservation"
    ],
    description:
      "Mengkoordinasikan project komunitas Maison Azkies yang berfokus pada kegiatan penanaman mangrove sebagai bentuk partisipasi dalam pelestarian lingkungan.",
    details: {
      role: "Koordinator Project",
      overview:
        "Project komunitas Maison Azkies yang berfokus pada kegiatan penanaman mangrove dan kepedulian terhadap kelestarian lingkungan pesisir.",
      objectives: [
        "Mengkoordinasikan pelaksanaan kegiatan penanaman mangrove.",
        "Mendukung kolaborasi dan partisipasi anggota komunitas dalam kegiatan lingkungan.",
        "Mendorong kepedulian terhadap pelestarian ekosistem mangrove."
      ],
      highlights: [
        "Koordinasi project dan kegiatan komunitas",
        "Partisipasi dalam upaya pelestarian lingkungan",
        "Kolaborasi anggota dalam kegiatan penanaman mangrove"
      ],
      result:
        "Project komunitas yang mendukung partisipasi dalam pelestarian lingkungan melalui kegiatan penanaman mangrove."
    }
  }
];
export const skillCategories: SkillCategory[] = [
  {
    title: "Pemrograman",
    skills: ["Python", "JavaScript", "C++", "PHP", "HTML", "CSS"]
  },
  {
    title: "Data & Machine Learning",
    skills: ["Machine Learning", "LSTM", "XGBoost", "Time Series", "Data Preprocessing"]
  },
  {
    title: "Tools",
    skills: ["Google Colab", "Streamlit", "Orange Data Mining", "Microsoft Excel"]
  },
  {
    title: "Database",
    skills: ["MySQL"]
  },
  {
    title: "Sistem Informasi",
    skills: ["Business Analysis", "System Documentation", "UI/UX", "Software Development"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Dinas Komunikasi dan Informatika Kota Bandung",
    role: "Bantuan Teknis Dokumentasi Sistem",
    type: "Magang",
    bullets: [
      "Membantu pembuatan dokumentasi sistem aplikasi",
      "Membantu penyusunan use case",
      "Menyusun dokumen teknis pendukung"
    ]
  }
];

export const educationData: EducationItem = {
  institution: "Universitas Komputer Indonesia",
  degree: "S1 Sistem Informasi",
  major: "Sistem Informasi",
  gpa: "3.80 / 4.00",
  graduationDate: "Lulus September 2026"
};

export const certificationsData: CertificationItem[] = [
  {
    title: "Certified Associate Data Scientist (CADS)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
    fileUrl: "/images/certificates/bnsp-cads-1.jpg",
    fileUrls: [
      "/images/certificates/bnsp-cads-1.jpg",
      "/images/certificates/bnsp-cads-2.jpg"
    ],
    category: "Sertifikasi"
  },
  {
    title: "Associate Data Scientist",
    issuer: "Digital Talent Scholarship – BPSDMP Bandung",
    year: "2025",
    fileUrl: "/images/certificates/associate-data-scientist-2025.jpg",
    category: "Pelatihan"
  },
  {
    title: "Dasar dan Penggunaan Generatif AI",
    issuer: "CODEPOLITAN",
    year: "2025",
    fileUrl: "/images/certificates/generative-ai-codepolitan-2025.jpg",
    category: "Pelatihan"
  },
  {
    title: "Pengantar Mindset Digital 1: Mengubah Masa Depan Anda Dengan Pola Pikir Digital",
    issuer: "Kementerian Komunikasi dan Digital RI",
    year: "2025",
    fileUrl: "/images/certificates/mindset-digital-2025.jpg",
    category: "Pelatihan"
  },
  {
    title: "Machine Learning",
    issuer: "Special Skill",
    year: "2025",
    fileUrl: "/images/certificates/machine-learning-special-skill-2025.jpg",
    category: "Pelatihan"
  },
  {
    title: "Bimbingan Teknis Pengembangan Bank Sampah di Jawa Barat 2024",
    issuer: "Dinas Lingkungan Hidup (DLH) Provinsi Jawa Barat",
    year: "Juli 2024",
    fileUrl: "/images/certificates/bimbingan_teknis_pengembangan_bank_sampah_di_jawa_barat_2024_page-1.jpg",
    fileUrls: [
      "/images/certificates/bimbingan_teknis_pengembangan_bank_sampah_di_jawa_barat_2024_page-1.jpg",
      "/images/certificates/bimbingan_teknis_pengembangan_bank_sampah_di_jawa_barat_2024_page-2.jpg",
      "/images/certificates/bimbingan_teknis_pengembangan_bank_sampah_di_jawa_barat_2024_page-3.jpg",
    ],
    category: "Pelatihan"
  },
  {
    title: "Seminar Nasional Machine Learning dan Data Science: Fondasi AI Modern",
    issuer: "Universitas Komputer Indonesia (UNIKOM)",
    year: "2025",
    fileUrl: "/images/certificates/seminar-machine-learning-data-science-2025.jpg",
    category: "Seminar"
  },
  {
    title: "Seminar Teknik dan Ilmu Komputer: Intermediary Data Analytics",
    issuer: "Universitas Komputer Indonesia (UNIKOM)",
    year: "2024",
    fileUrl: "/images/certificates/seminar-data-analytics-2024.jpg",
    category: "Seminar"
  },
  {
    title: "Workshop Data Analyst: Pengenalan SQL untuk Data Analytics",
    issuer: "Dunia Coding",
    year: "2024",
    fileUrl: "/images/certificates/workshop-data-analyst-sql-2024.jpg",
    category: "Workshop"
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy / Universitas Komputer Indonesia",
    year: "2024",
    fileUrl: "/images/certificates/ccna2-switching-routing-wireless-2024.jpg",
    category: "Pelatihan"
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy / Universitas Komputer Indonesia",
    year: "2024",
    fileUrl: "/images/certificates/ccna1-introduction-to-networks-2024.jpg",
    category: "Pelatihan"
  },
  {
    title: "Thriving as UI/UX Designer & UX Researcher in Competitive Tech Market",
    issuer: "Connextion",
    year: "2024",
    fileUrl: "/images/certificates/uiux-designer-ux-researcher-2024.jpg",
    category: "Workshop"
  },
  {
    title: "First Step into the World of Back End and Front End Engineering",
    issuer: "Connextion",
    year: "2024",
    fileUrl: "/images/certificates/backend-frontend-engineering-2024.jpg",
    category: "Workshop"
  },
  {
    title: "Seminar Nasional Digipreneur Vol. 2",
    issuer: "HIPMA UNIKOM",
    year: "2024",
    fileUrl: "/images/certificates/seminar-digipreneur-2024.jpg",
    category: "Seminar"
  },
  {
    title: "Seminar Character Building 2024",
    issuer: "HIMA Sistem Informasi UNIKOM",
    year: "2024",
    fileUrl: "/images/certificates/seminar-character-building-2024.jpg",
    category: "Seminar"
  },
  {
    title: "Certificate of Completion – 1-Week Online Course",
    issuer: "RevoU",
    year: "2024",
    fileUrl: "/images/certificates/revou-damc-2024.jpg",
    category: "Pelatihan"
  },
  {
    title: "Indonesia CEO Talk 2023: Urgensi Cybersecurity di Era Transformasi Digital Indonesia",
    issuer: "ICT-OMG",
    year: "2023",
    fileUrl: "/images/certificates/indonesia-ceo-talk-2023.jpg",
    category: "Seminar"
  },
  {
    title: "TOEFL Certificate",
    issuer: "NAMA LEMBAGA PENERBIT",
    year: "TAHUN SERTIFIKAT",
    fileUrl: "/images/certificates/toefl-certificate.jpg",
    category: "Sertifikasi"
  }
];
