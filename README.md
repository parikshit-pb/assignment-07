# React + Vite

=> Vite is a lightning-fast frontend build tool, and when paired with React, it provides a modern, efficient development environment.
It offers instant server start, Hot Module Replacement (HMR), and optimized production builds.
Why Choose Vite for React
1=> Fast Development Server – Starts almost instantly.
2=> Hot Module Replacement (HMR) – Updates changes in real-time without reloading the page.
3=> Optimized Production Builds – Uses Rollup for fast, tree-shaken bundles
4=> Modern JavaScript Support – Native ES modules, smart caching, and minimal configuration.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler
=>React Compiler is a new compiler for React designed to run code faster and more efficiently. It can affect development and build performance.It transforms React JSX and other features into optimized JavaScript.In new templates, it is not enabled by default because it may slow down development in some cases.To enable and use it, follow the official documentation: React Compiler Installation. In short: It’s an option to make your React code run faster and more optimized.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

=> Here’s how you can create a strong ESLint setup that covers:
Expanded ESLint Configuration for React + TypeScript
1 React best practices
2 TypeScript rules
3 Code formatting with Prettier
4 Import sorting & clean structure

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
