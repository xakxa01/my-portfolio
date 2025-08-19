# Carlos's Developer Portfolio

A modern, interactive portfolio built with React, Vite, and Tailwind CSS. This project showcases my experience, projects, and skills as a software developer.

## ✨ Features

- **About Me**: Introduction and background, including language proficiency.
- **Projects**: Highlights of selected projects with descriptions, tech stack, and links.
- **Experiences**: Professional experience with roles, achievements, and technologies used.
- **Skills**: Overview of technical skills and tools.
- **Card System**: Interactive card-based navigation for a smooth and engaging user experience.

## 🃏 Card System

The portfolio uses a dynamic card system to present content. Each section (About Me, Projects, Experiences, Skills) is displayed as a card in a deck. Users can:

- **Swipe cards** left or right using mouse or touch gestures.
- **Use keyboard controls**: Arrow keys to navigate, Space to bring back a card, Home/End to jump to the first/last card.
- **Animated transitions** powered by react-spring for a fluid, tactile feel.
- When all cards are swiped away, the deck automatically resets, allowing for continuous exploration.

This system is built with custom React hooks, context, and gesture handling for a seamless, interactive portfolio experience.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (or npm/yarn)

### Install dependencies
```bash
pnpm install
```

### Run the development server
```bash
pnpm dev
```

### Build for production
```bash
pnpm build
```

### Preview production build
```bash
pnpm preview
```

## 📁 Project Structure

- `src/app/` – App entry and providers
- `src/features/portfolio/` – Portfolio cards, data, and components
- `src/features/deck/` – Deck/card navigation logic
- `src/shared/` – Shared UI, types, and utilities
- `src/assets/` – Images and icons
- `src/styles/` – CSS (using Tailwind's @apply for utility classes)

## 🛠️ Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [@tabler/icons-react](https://tabler-icons.io/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
