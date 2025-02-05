# Full Stack Monorepo Template

This template leverages:
- **Backend**: Node.js, Express.js, and MongoDB (default – change to Supabase if desired)
- **Frontend**: React (with TypeScript) using Vite, Shadcn UI, and Tailwind CSS (v3)

## Project Structure

```
 monorepo-template/
 ├── backend/
 │   ├── config/
 │   │   ├── config.js
 │   │   └── database.js
 │   ├── src/
 │   │   ├── app.js
 │   │   └── index.js
 │   └── package.json
 ├── frontend/
 │   ├── config/
 │   │   ├── vite.config.ts
 │   │   ├── tailwind.config.cjs
 │   │   └── shadcn.config.js
 │   ├── src/
 │   │   ├── components/
 │   │   │   └── ui/
 │   │   ├── lib/
 │   │   ├── App.tsx
 │   │   ├── index.css
 │   │   └── main.tsx
 │   ├── index.html
 │   ├── package.json
 │   └── tsconfig.json
 ├── package.json
 ├── .gitignore
 └── README.md

```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd monorepo-template
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development environment:**
   ```
   npm run dev
   ```
   This command concurrently starts:
   - The frontend (on port 3000)
   - The backend (on port 5000)

## Configuration Files

- **Frontend Configuration:**  
  - `vite.config.ts` is located at `frontend/config/vite.config.ts`
  - `tailwind.config.cjs` is located at `frontend/config/tailwind.config.cjs`
  - `shadcn.config.js` is located at `frontend/config/shadcn.config.js`

- **Backend Configuration:**  
  - General configuration is in `backend/config/config.js`
  - Database connection settings are in `backend/config/database.js`

_Note: Some configuration files (e.g., `tsconfig.json`) remain in the project root of their respective directories as required by tooling._

## Next Steps

- Customize routes, React components, and database models as needed.
- To switch to Supabase, update the connection logic in `backend/config/database.js`.

Enjoy building your full-stack web app! 