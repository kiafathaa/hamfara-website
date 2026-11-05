# Website PT Hamfara Mitra Sejahtera

Cara membuka: klik dua kali `index.html` (butuh internet untuk font & peta).

## Struktur (setiap halaman = 1 file)
```
hamfara-website/
├── index.html          Beranda
├── profil.html         Profil Perusahaan
├── identitas.html      Identitas Perusahaan
├── visi-misi.html      Visi dan Misi
├── nilai.html          Nilai-Nilai Perusahaan
├── bidang-usaha.html   Bidang Usaha dan Model Bisnis
├── kontak.html         Kantor Pusat & Kontak (ada peta)
├── css/style.css       Tampilan (dipakai semua halaman)
├── js/config.js        PENGATURAN PETA (koordinat)
├── js/app.js           Email & peta
└── assets/
    ├── kebun-teh.jpg   Foto latar Beranda
    └── logo.png        Logo perusahaan
```

## Mengubah isi
- Teks profil / visi / dst: edit file halaman yang bersangkutan.
- Menu atas dan footer ada di setiap file (cari `<nav>` dan `<footer>`); kalau menambah menu, ubah di semua file.
- Peta: ubah `mapQuery` di `js/config.js` (isi koordinat dari Google Maps).
- Email: cari `Infohampara@gmail.com` di `kontak.html` dan `js/app.js`.
