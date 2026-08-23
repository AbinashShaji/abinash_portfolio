/**
 * HERO COMPONENT (hero.jsx)
 * 
 * What this file is:
 * This is the very first section the user sees when they land on the website.
 * It's commonly called a "Hero" section in web design.
 * 
 * What it's responsible for:
 * It displays a full-screen background image of the portfolio owner, their title 
 * (Creative Developer, Problem Solver), social media links, and a scroll down indicator.
 * 
 * Where it's used:
 * Rendered at the very top of the `<main>` tag in `App.jsx`.
 * 
 * Dependencies:
 * - 'lucide-react' & 'react-icons': Provides the social media and mail icons.
 */

import { Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
    return (
        // section id="home" gives this block a name that the Navigation bar can link to.
        // h-screen makes this section take up exactly 100% of the screen's height.
        <section id="home" className="relative w-full h-screen overflow-hidden bg-red flex flex-col justify-between">

            {/* BACKGROUND IMAGE & TEXTURE BLOCK */}
            {/* 'absolute inset-0' stretches this div to touch all 4 edges of the screen, acting as a background */}
            <div className="absolute inset-0 z-0 bg-red">
                {/* The main background photo */}
                <img
                    src="/images/hero/portfolio.webp"
                    alt="Hero background with Abinash Shaji"
                    className="w-full h-full object-cover object-center"
                />
                {/* The paper texture overlay (uses a global CSS class 'paper-texture' defined in index.css) */}
                <div className="absolute inset-0 paper-texture pointer-events-none opacity-100 mix-blend-multiply"></div>
            </div>

            {/* TOP OVERLAY ELEMENTS (The text in the top-left corner) */}
            {/* 'z-10' ensures this sits on top of the background image */}
            <div className="relative z-10 px-6 lg:px-16 pt-16 md:pt-20 flex justify-between items-start pointer-events-none">

                {/* Top Left Kicker (01 — Creative Developer...) */}
                <div className="flex flex-col gap-3 md:gap-4 max-w-[200px] md:max-w-none">
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-sm tracking-widest text-cream">01</span>
                        {/* A simple decorative horizontal line */}
                        <div className="w-12 h-px bg-cream"></div>
                    </div>
                    {/* The main title text */}
                    <span className="font-mono text-[10px] md:text-sm tracking-[0.2em] text-cream uppercase leading-relaxed md:leading-relaxed">
                        Creative<br />Developer<br />Problem Solver
                    </span>
                </div>

            </div>

            {/* BOTTOM OVERLAY ELEMENTS (Scroll indicator and social links) */}
            <div className="relative z-10 px-6 lg:px-16 pb-8 md:pb-12 flex flex-col md:flex-row justify-between items-end md:items-end gap-8 md:gap-0 pointer-events-none">

                {/* Scroll Down Indicator */}
                {/* 'pointer-events-auto' allows this specific part to be clickable, even though the parent wrapper ignores clicks */}
                <div className="pointer-events-auto flex items-end">
                    {/* Clicking this scrolls down to the 'about' section */}
                    <a href="#about" className="text-cream hover:text-white transition-colors font-mono text-sm tracking-widest flex flex-col items-center gap-1 group">
                        {/* A tall, thin vertical line pointing down */}
                        <div className="w-[1px] h-20 md:h-32 bg-cream/70 mb-2"></div>
                        <span>SCROLL</span>
                        <span>DOWN</span>
                        {/* The arrow bounces downward when you hover over the entire group */}
                        <span className="text-2xl md:text-3xl font-light group-hover:translate-y-2 transition-transform mt-2">↓</span>
                    </a>
                </div>

                {/* Social Media Links & Contact Button */}
                <div className="flex flex-col items-end gap-6 pointer-events-auto ml-auto">
                    {/* The row of social icons */}
                    <div className="flex justify-end items-center gap-5 md:gap-6 text-cream mr-1">
                        <a href="https://instagram.com/___abinash.__" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/abinashshaji" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/AbinashShaji" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                            <FaGithub size={24} />
                        </a>
                        <a href="mailto:iam.abinashshaji@gmail.com" className="hover:text-white transition-colors" aria-label="Mail">
                            <Mail size={24} />
                        </a>
                    </div>

                    {/* The big Contact Me button */}
                    <a href="#contact" className="bg-[#111] text-cream px-6 py-4 font-mono text-sm tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 group whitespace-nowrap border border-transparent hover:border-white/20">
                        CONTACT ME 
                        {/* The arrow slides to the right when you hover over the button */}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

            </div>

        </section>
    );
}
