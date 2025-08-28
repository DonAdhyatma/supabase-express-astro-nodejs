# This Repository is For Monorepo Project SEAN STACK

Simple blog application built with SEAN Stack (Supabase, Express, Astro, Node.js).

## Tech Stack

- **Frontend**: Astro
- **Backend**: Express.js + Node.js
- **Database**: Supabase
- **Architecture**: Monorepo

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository

```bash
git clone <https://github.com/DonAdhyatma/supabase-express-astro-nodejs>
cd supabase-express-astro-nodejs
```

2. Setup Backend

```bash
cd backend
npm install
```

3. Setup Frontend

```bash
cd frontend
npm install
```

### Environment Setup

Copy `.env.example` file in the `backend` folder to `.env` your own file:

```env
PORT=yourport
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE=your_supabase_service_role_key
```

### Running the Application

1. Start Backend Server

```bash
cd backend
npm start
# Server runs on http://localhost:yourport
```

2. Start Frontend Development Server

```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:yourport
```

## API Endpoints

- `/` - Get all blog posts
- `/post` - Create new blog post

## Features

- ✅ Blog CRUD operations
- ✅ Supabase database integration
- ✅ Environment variables configuration
- ✅ Monorepo structure

## Contributing

Feel free to open issues and pull requests!

## License

MIT
