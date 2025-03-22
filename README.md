# Vue Simple API Fetcher App

A Vue 3 application with TypeScript that demonstrates user data fetching, error handling, and toast notifications.

## [Live demo in Netlify](https://mickey-vue-api-fetcher.netlify.app)

## Project Creation

`npm init vue` is recommended as the official Vue project scaffolding tool because it's maintained by the Vue core team and provides a modern, optimized setup with TypeScript support and best practices out of the box.

## Features

- User data fetching with 40% error simulation
- Dark/Light theme toggle
- Toast notifications for success/error states
  - Added props and emits for this component
- TypeScript support
- Pinia state management
- Environmental variables usage added
- Subtle animations
- BEM class methodology followed

## Error Handling

The application uses a centralized error handling system with:

- Typed error scenarios with status codes
- Toast notifications for user feedback
- Error state management via Pinia store

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Pinia
