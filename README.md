# Abinash Shaji | Portfolio

> A personal portfolio website featuring a bold, brutalist design aesthetic.

## Live Demo

[CONFIRM: Add live deployment link once hosted on Vercel/Render]

## Overview

Welcome to my personal portfolio! I am Abinash Shaji, a full-stack developer and MCA student based in Kerala, India. This website serves as a digital showcase of my work, featuring my software projects, technical skills, and educational journey. 

The design direction of this portfolio strictly follows a **brutalist aesthetic** — focusing on a bold, high-contrast, paper-textured look utilizing a core palette of striking red, deep black, and soft cream.

## Tech Stack

This project was built using modern web development tools:

- **React + Vite (JavaScript)**: Chosen for building modular UI components and ensuring extremely fast development builds.
- **Tailwind CSS**: Used for rapid, utility-first styling to achieve the precise brutalist design requirements.
- **Framer Motion**: Implemented to add smooth section transitions, scroll animations, and dynamic interactive elements.
- **Lucide React**: Provides clean, consistent, and scalable SVG icons across the interface.
- **React Hook Form**: Handles complex form state management and input validation efficiently.
- **EmailJS**: Powers the contact form backend, securely sending real messages directly to email without requiring a custom server.

## Features

The portfolio is structured into the following fully responsive sections:

- **Home (Hero)**: A striking full-screen introduction with overlapping typography and a scroll indicator.
- **About**: A brief biography, location details, education history, and a bold graphical quote block.
- **Services**: A grid layout detailing my core competencies (Full-Stack, Frontend, Backend, Databases, Fintech, Data Analysis).
- **Projects**: A curated showcase of my selected software projects featuring hover-revealed imagery.
- **Skills**: A breakdown of technical skills by category, complete with an infinitely scrolling tech-stack marquee.
- **Journey**: A dual-layout timeline (horizontal for desktop, vertical for mobile) tracking my coding progression, alongside key statistics.
- **Contact**: A fully functional contact form powered by EmailJS, featuring client-side validation with custom brutalist-styled error states and interactive feedback.

## Projects Featured

The following projects are actively showcased within the portfolio:

- **Finzave**: A personal finance and financial decision-support system designed to help users understand their financial behaviour, manage income and expenses, analyze spending patterns, track financial goals, and make better financial decisions.
- **SmartVest**: A financial decision-support system focused on analyzing a user's financial situation and providing useful financial insights and recommendations.
- **Triads Future**: A premium business website being developed for a technology consulting and growth-oriented company.

## Getting Started / Running Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbinashShaji/abinash-portfolio.git
   cd abinash-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the keys required for the contact form to function (see the *Environment Variables* section below).

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **View the application:**
   Open your browser and navigate to the local dev URL provided in the terminal (usually `http://localhost:5173`).

## Environment Variables

For the contact form to work locally, you must create a `.env` file in the root directory. You can obtain these keys by creating an account on the [EmailJS Dashboard](https://dashboard.emailjs.com/).

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS Service ID (e.g., connected Gmail service). |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID (the email template design). |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key (found in Account settings). |

*Note: The `.env` file is included in `.gitignore` and should never be committed to version control.*

## Project Structure

A brief overview of the core `src/` directory:

- `src/components/`: Contains all the main reusable UI sections (`about.jsx`, `contact.jsx`, `hero.jsx`, etc.)
- `src/components/ui/`: Contains advanced, specialized UI utilities (like `scroll-velocity-text.jsx`)
- `src/hooks/`: Contains custom React hooks (like `useMagnifyHover.js`)
- `src/assets/`: Stores static assets (images, fonts, etc.)
- `src/App.jsx`: The main application component that renders all the sections.
- `src/main.jsx`: The entry point that mounts the React app to the DOM.
- `src/index.css`: Contains global Tailwind directives and custom brutalist CSS overrides.

## Deployment

This project is intended to be deployed to **Vercel** or **Render**. 
[CONFIRM: Update this section to specify which host was ultimately used]

## Contact

- **Email**: [iam.abinashshaji@gmail.com](mailto:iam.abinashshaji@gmail.com)
- **Instagram**: [@___abinash.__](https://instagram.com/___abinash.__)
- **LinkedIn**: [Abinash Shaji](https://www.linkedin.com/in/abinashshaji)
- **GitHub**: [AbinashShaji](https://github.com/AbinashShaji)
