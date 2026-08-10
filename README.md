# Enterprise Security Awareness Platform ESAP - Frontend

SSI e-learning platform. Employee interface built with React.

## Stack
- React 19 + Vite
- Tailwind CSS v4
- Shadcn (Base UI)
- React-router-dom
- Recharts
- Lucide-react
- Date-fns

## Setup

### Prerequisites
- Node.js 20+
- npm

### Install
```bash
git clone <repo-url>
cd esap-frontend
npm install
```

### Development
```bash
npm run dev
```
App runs at `http://localhost:5173`.

### Build
```bash
npm run build
```
Outputs to `dist/`.

### Preview production build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Project structure
src/
├── assets/
├── components/
│ ├── auth/
│ ├── dashboard/
│ ├── layout/
│ ├── training/
│ └── ui/
├── context/
├── data/
├── hooks/
├── lib/
├── mocks/
├── pages/
└── utils/

## Notes
- **Mock-first**: the app currently runs entirely on mock data in `src/data/api.js` and `src/mocks/`. No backend calls are made. This layer is designed to be swapped for real API calls without touching any screen component.
- **White-label**: no hardcoded brand colors, all theming goes through CSS variables (`--primary`, `--secondary-brand`, etc.) injected at runtime via `applyBranding()`.
- **Dark mode**: toggled from the user menu, persisted in `localStorage`.