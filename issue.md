# Issue: Inisialisasi Project Backend (Bun + ElysiaJS + Drizzle + MySQL)

## 1. Deskripsi / Overview
Inisialisasi project backend baru pada direktori ini menggunakan runtime **Bun**, framework **ElysiaJS**, serta **Drizzle ORM** yang terhubung ke database **MySQL**.

Tujuan dari task ini adalah menyiapkan struktur dasar project (scaffolding), konfigurasi environment, setup koneksi database, dan memastikan server API siap dikembangkan untuk fitur-fitur selanjutnya.

---

## 2. Tech Stack & Dependencies
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Web Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) & `drizzle-kit` (CLI)
- **Database Driver**: MySQL (e.g., `mysql2`)
- **Database**: MySQL

---

## 3. High-Level Implementation Steps

### Langkah 1: Inisialisasi Project
- Jalankan inisialisasi project menggunakan Bun (`bun init`).
- Konfigurasi file `tsconfig.json` dan `package.json` agar sesuai dengan kebutuhan project TypeScript di Bun.
- Tambahkan script dasar pada `package.json` (seperti `dev`, `build`, `start`, dan script Drizzle).

### Langkah 2: Instalasi Dependencies
- Install framework utama: `elysia`.
- Install ORM & driver database: `drizzle-orm`, `mysql2`.
- Install development tools: `drizzle-kit`, `@types/bun` (jika belum ada).

### Langkah 3: Konfigurasi Environment Variable
- Buat file `.env.example` dan template konfigurasi `.env`.
- Siapkan variabel yang dibutuhkan:
  - `PORT` (port server aplikasi)
  - `DATABASE_URL` atau konfigurasi terpisah (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
- Pastikan file `.env` diabaikan oleh git (`.gitignore`).

### Langkah 4: Setup Drizzle ORM & Database Connection
- Buat file konfigurasi Drizzle (`drizzle.config.ts`) untuk kebutuhan migrasi schema MySQL.
- Buat koneksi database client menggunakan Drizzle dan driver MySQL.
- Siapkan direktori untuk schema database (contoh: `src/db/schema/`) dan buat 1 schema contoh/awal (misal: tabel user/sample).
- Tambahkan script generator dan migrasi Drizzle di `package.json` (seperti `db:generate`, `db:push`, `db:studio`).

### Langkah 5: Setup Entry Point Aplikasi (ElysiaJS)
- Siapkan file entry point (contoh: `src/index.ts`).
- Inisialisasi instance Elysia server.
- Buat endpoint dasar/health-check (misal: `GET /` atau `GET /health`) yang merespons status server dan status koneksi database.
- Atur listener port sesuai dengan environment variable.

### Langkah 6: Struktur Direktori yang Direkomendasikan
Susun struktur folder yang rapi dan modular:
```text
├── src/
│   ├── db/              # Konfigurasi koneksi database & schema Drizzle
│   │   ├── index.ts
│   │   └── schema.ts
│   ├── routes/          # Pengelompokan router/endpoint Elysia
│   └── index.ts         # Entry point aplikasi Elysia
├── drizzle.config.ts    # Konfigurasi Drizzle Kit
├── .env.example         # Template environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. Kriteria Keberhasilan (Acceptance Criteria)
1. **Server Berjalan**: Aplikasi dapat dijalankan dengan perintah `bun run dev` tanpa error.
2. **Health Check Berhasil**: Mengakses endpoint health check mengembalikan status 200 OK beserta respons JSON yang valid.
3. **Koneksi Database Terhubung**: Drizzle berhasil terhubung ke MySQL sesuai konfigurasi `.env`.
4. **Drizzle Tooling Berfungsi**: Perintah Drizzle Kit (`generate` / `push`) dapat membaca schema dan terhubung ke database.
5. **Dokumentasi Lingkungan**: File `.env.example` terdokumentasi dengan jelas.
