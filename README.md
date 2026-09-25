# Portfolio Niken Nuraifah Suherlan

Update:
- Menambahkan galeri Sertifikat, Pelatihan, Workshop, dan Seminar.
- Sertifikat dapat diklik untuk melihat versi besar (modal).
- Ada filter: Semua, Sertifikasi, Pelatihan, Workshop, Seminar.
- Sertifikat BNSP CADS sengaja dibuat sebagai slot kosong agar dapat ditambahkan manual.
- File sertifikat PDF telah dikonversi menjadi JPG untuk ditampilkan di galeri.
- Duplikat CCNA 1 dan CCNA 2 hanya dimasukkan satu kali.

## Menambahkan sertifikat BNSP
Tambahkan gambar ke:
`public/images/certificates/bnsp-cads.jpg`

Kemudian buka:
`src/data/portfolioData.ts`

Pada data:
`Certified Associate Data Scientist (CADS)`

tambahkan:
`fileUrl: "/images/certificates/bnsp-cads.jpg"`

## Menjalankan
```bash
npm install
npm run dev
```

Catatan: folder `node_modules` tidak disertakan dalam paket final. Jalankan `npm install` setelah mengekstrak ZIP.
