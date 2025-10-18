## KasSaku – A Simple Cash Management App

### **Deskripsi Singkat**

**KasSaku** adalah aplikasi pencatatan keuangan sederhana berbasis web yang membantu pengguna dalam memantau **pemasukan (income)** dan **pengeluaran (expense)**.
Aplikasi ini dilengkapi dengan **fitur laporan keuangan**, **filter data**, **chart visualisasi transaksi**, serta **autentikasi login**.

---

## **Teknologi yang Digunakan**

### Frontend:

* **React.js** – Library utama untuk membangun antarmuka pengguna
* **Tailwind CSS** – Framework CSS untuk tampilan yang modern dan responsif
* **Recharts** – Visualisasi data (grafik batang transaksi)

### Backend:

* **Node.js** – Runtime environment untuk server
* **Express.js** – Framework backend untuk menangani routing API
* **MongoDB + Mongoose** – Database NoSQL untuk menyimpan transaksi
* **dotenv** – Mengelola konfigurasi environment (.env)

---

## **Fitur Utama**

✅ Dashboard dengan grafik transaksi
✅ Filter transaksi berdasarkan tipe & tanggal
✅ Top 5 transaksi terbesar
✅ Peringatan otomatis saat pengeluaran melebihi pemasukan
✅ CRUD transaksi (tambah, edit, hapus)
✅ Login sistem sederhana (dengan penyimpanan status login di localStorage)
✅ Responsive design (mobile & desktop)

---

## **Struktur Folder**

```
kas-saku/
├─ backend/
│  ├─ server.js          # Entry point backend
│  ├─ routes/            # Routing API
│  ├─ models/            # Schema MongoDB
│  ├─ .env               # File environment (JANGAN diupload)
│  ├─ .env.example       # Contoh environment
│  └─ package.json
│
├─ src/                  # Source code React frontend
├─ public/               # Assets dan index.html
├─ package.json          # Dependensi frontend
├─ .gitignore
└─ README.md
```

---

## **Persiapan Environment**

Buat file baru bernama `.env` di dalam folder **backend/**
Lalu isi seperti ini (pakai data kamu sendiri):

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Untuk contoh file, sudah disediakan:

```
backend/.env.example
```

---

## **Cara Menjalankan Project**

### Clone Repository

```bash
git clone https://github.com/airlanggapangestu/kas-saku.git
cd kas-saku
```

---

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ..
npm install
```

---

### Jalankan Aplikasi

#### Jalankan Backend

```bash
cd backend
npm start
```

> Server akan berjalan di: `http://localhost:5000`

#### Jalankan Frontend

Buka terminal baru di folder utama, lalu:

```bash
npm start
```

> Frontend akan berjalan di: `http://localhost:3000`

---

## **Login Default**

* **Username:** rangga
* **Password:** 123456

> Login ini bisa diubah sesuai kebutuhan (sistem login sederhana, belum terhubung ke database user).

---

## **Deploy **

---
