import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree';

// Initialize router with proper configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
});

// Register router for TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <div className="min-h-screen bg-galaxy-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-galaxy-900 via-galaxy-950 to-galaxy-950">
      <RouterProvider router={router} />
    </div>
  );
}