/**
 * VITE CONFIGURATION FILE (vite.config.js)
 * 
 * What this file is:
 * This is the configuration file for Vite, which is the build tool that runs and bundles this React project.
 * 
 * What it's responsible for:
 * It tells Vite how to process our code. When you run `npm run dev`, Vite reads this file to know it needs
 * to support React (JSX) and Tailwind CSS.
 * 
 * Why it matters:
 * Without this, the server wouldn't know how to convert React code into plain JavaScript that the browser understands,
 * and it wouldn't know how to generate our Tailwind styles.
 */

import { defineConfig } from 'vite' // Imports the function to define our config
import react from '@vitejs/plugin-react' // Imports the official React plugin for Vite
import tailwindcss from '@tailwindcss/vite' // Imports the Tailwind CSS plugin for Vite

// We export the configuration object so Vite can use it
export default defineConfig({
  // The plugins array lists all the extra tools Vite should use when building our app
  plugins: [
    react(), // Enables React support (JSX, Fast Refresh, etc.)
    tailwindcss() // Enables Tailwind CSS support for styling
  ],
})