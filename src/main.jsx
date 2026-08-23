/**
 * MAIN ENTRY POINT (main.jsx)
 * 
 * What this file is:
 * This is the very first JavaScript file that runs when someone opens the website.
 * 
 * What it's responsible for:
 * Its only job is to grab the main React component (<App />) and "render" (draw) it 
 * onto the actual HTML page (inside the div with id="root").
 * 
 * Where it's used:
 * It is linked directly in the public `index.html` file.
 */

// Import StrictMode to highlight potential problems in our React code during development
import { StrictMode } from 'react'

// Import createRoot which is the modern React tool used to display our app on the screen
import { createRoot } from 'react-dom/client'

// Import our global CSS file which contains our Tailwind styles and custom fonts
import './index.css'

// Import the main App component, which contains all of our website's sections
import App from './App.jsx'

// 1. document.getElementById('root') finds the empty <div id="root"></div> in index.html
// 2. createRoot() tells React to take control of that div
// 3. .render() draws our <App /> component inside it
createRoot(document.getElementById('root')).render(
  // StrictMode wraps our app to warn us about bad coding practices. It doesn't show in production.
  <StrictMode>
    <App />
  </StrictMode>,
)
