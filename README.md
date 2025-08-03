# 🧠 ReactTrace

## 📋 Project Overview

**ReactTrace** is a frontend application built with **Next.js** and **TypeScript** designed to visually explore and understand the structure, behavior, and flow of React components. The platform provides intuitive visualizations, problem detection, and a modern UI to help developers analyze their components and improve architecture and UX decisions.

---

## 🚧 Project Status

This project is currently under development. Core functionalities like component previews, animated introductions, and UI diagnostics are already implemented. Upcoming improvements include responsiveness, dark/light themes, better accessibility, and extended interactivity.

---

## ✨ Features

🔍 **Component Visualization**: Visual assets and diagrams to explore component hierarchy and relations.  
📚 **Modular UI Components**: Reusable inputs, selects, navbar, and footer designed for flexibility.  
⚠️ **Problem Detection Display**: Static illustrations showcasing potential anti-patterns or architectural issues.  
🌍 **Currency Detection**: Detects user location and displays appropriate currency (USD, BRL, EUR) via IP.  
🎞️ **Typing and Entry Animations**: Typewriter motion, card fade-ins, and scroll-based effects.  
🧠 **Custom Hooks**: Includes `useFadeIn`, `useTypeWriterMotion`, `useUserCurrency`, and more for reactive UI behavior.  
🖼️ **Visual Reference Images**: Built-in screenshots and SVGs to highlight features, flow, and layout examples.

---

## 🛠️ Technologies Used

- ⚛️ [Next.js](https://nextjs.org/) (React framework)  
- 📜 [TypeScript](https://www.typescriptlang.org/)  
- 🎨 [Tailwind CSS](https://tailwindcss.com/) (via PostCSS)  
- 📡 [Axios](https://axios-http.com/) (for API communication)  
- ✅ [Zod](https://zod.dev/) (planned schema validation)  
- 🧠 [Framer Motion](https://www.framer.com/motion/) (animations)  
- 💅 [ESLint](https://eslint.org/) + Prettier (code quality)

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js v16 or higher  
- npm or yarn

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ReactTrace.git
    cd ReactTrace
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set environment variables:

    Create a `.env.local` file in the root with:

    ```env
    NEXT_PUBLIC_API_URL=https://your-api-url.com
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---
