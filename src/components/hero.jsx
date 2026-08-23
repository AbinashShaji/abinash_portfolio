import { Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden bg-red flex flex-col justify-between">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero/portfolio.png"
                    alt="Hero background with Abinash Shaji"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Top Overlay Elements */}
            <div className="relative z-10 px-6 lg:px-16 pt-24 md:pt-40 flex justify-between items-start pointer-events-none">

                {/* Top Left Kicker */}
                <div className="flex flex-col gap-3 md:gap-4 max-w-[200px] md:max-w-none">
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-sm tracking-widest text-cream">01</span>
                        <div className="w-12 h-px bg-cream"></div>
                    </div>
                    <span className="font-mono text-[10px] md:text-sm tracking-[0.2em] text-cream uppercase leading-relaxed md:leading-relaxed">
                        Creative<br />Developer<br />Problem Solver
                    </span>
                </div>

            </div>

            {/* Bottom Overlay Elements */}
            <div className="relative z-10 px-6 lg:px-16 pb-8 md:pb-12 flex flex-col md:flex-row justify-between items-end md:items-end gap-8 md:gap-0 pointer-events-none">

                {/* Scroll Down Indicator */}
                <div className="pointer-events-auto">
                    <a href="#about" className="text-cream hover:text-white transition-colors font-mono text-sm tracking-widest flex flex-col items-center gap-1 group">
                        <span>SCROLL</span>
                        <span>DOWN</span>
                        <span className="group-hover:translate-y-1 transition-transform mt-1">↓</span>
                    </a>
                </div>

                {/* Socials & Contact */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6 md:gap-8 pointer-events-auto ml-auto">
                    <div className="flex flex-wrap justify-end items-center gap-4 md:gap-6 text-cream">
                        <a href="https://instagram.com/___abinash.__" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/abinashshaji" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://github.com/AbinashShaji" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                            <FaGithub size={20} />
                        </a>
                        <a href="mailto:iam.abinashshaji@gmail.com" className="hover:text-white transition-colors" aria-label="Mail">
                            <Mail size={20} />
                        </a>
                    </div>

                    <a href="#contact" className="bg-[#111] text-cream px-6 py-4 font-mono text-sm tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 group whitespace-nowrap border border-transparent hover:border-white/20">
                        CONTACT ME <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

            </div>

        </section>
    );
}
