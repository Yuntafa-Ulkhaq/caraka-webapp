# caraka-webapp

Backend API service built with [Bun](https://bun.sh/), [ElysiaJS](https://elysiajs.com/), [Drizzle ORM](https://orm.drizzle.team/), and MySQL.

## Tech Stack
- **Runtime**: Bun
- **Framework**: ElysiaJS
- **ORM**: Drizzle ORM (`drizzle-orm`, `drizzle-kit`)
- **Database Driver**: `mysql2`

## Getting Started

### 1. Install Dependencies
```bash
bun install
```

### 2. Environment Setup
Copy `.env.example` to `.env` and adjust database credentials:
```bash
cp .env.example .env
```

### 3. Database Migration
Generate SQL migration from schema:
```bash
bun run db:generate
```

Push schema directly to database (when MySQL is active):
```bash
bun run db:push
```

Open Drizzle Studio:
```bash
bun run db:studio
```

### 4. Run Server
Development mode with hot reload:
```bash
bun run dev
```

Production start:
```bash
bun run start
```

### 5. API Endpoints
- `GET http://localhost:3000/` : Application info
- `GET http://localhost:3000/health` : Health check status & database connection
