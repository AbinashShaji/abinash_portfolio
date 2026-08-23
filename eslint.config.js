/**
 * ESLINT CONFIGURATION FILE (eslint.config.js)
 * 
 * What this file is:
 * This sets up ESLint, which is a tool that analyzes our code to find and fix problems.
 * 
 * What it's responsible for:
 * It enforces coding rules and best practices. If you make a typo or use a bad practice,
 * ESLint will show a warning or error in your code editor.
 * 
 * Why it matters:
 * It helps keep the codebase clean, consistent, and free of silly bugs (like unused variables).
 */

import js from '@eslint/js' // Base JavaScript rules
import globals from 'globals' // Defines global variables like 'window' or 'document'
import reactHooks from 'eslint-plugin-react-hooks' // Rules specifically for React Hooks (like useEffect)
import reactRefresh from 'eslint-plugin-react-refresh' // Rules for Vite's fast refresh feature
import { defineConfig, globalIgnores } from 'eslint/config' // Helper functions to define the config

// We export an array of configuration objects
export default defineConfig([
  // Tell ESLint to completely ignore the 'dist' folder (which contains our compiled production code)
  globalIgnores(['dist']),
  {
    // Apply these rules to all JavaScript and JSX files
    files: ['**/*.{js,jsx}'],
    
    // We extend (inherit) these recommended rule sets instead of writing every rule from scratch
    extends: [
      js.configs.recommended, // Standard JS best practices
      reactHooks.configs.flat.recommended, // React hooks best practices
      reactRefresh.configs.vite, // Vite fast-refresh rules
    ],
    
    // Configure the environment so ESLint knows where this code will run
    languageOptions: {
      // Tells ESLint this code runs in a browser, so variables like 'window' and 'document' are valid
      globals: globals.browser,
      // Enables JSX parsing (HTML-like syntax inside JavaScript)
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
