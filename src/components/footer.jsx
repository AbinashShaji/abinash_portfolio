export default function Footer() {
  return (
    <footer className="bg-red paper-texture text-black py-10 md:py-16 px-4 sm:px-6 lg:px-8 border-t-[3px] border-black overflow-hidden relative">
      
      {/* Background brutalist element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15rem] md:text-[25rem] text-black/5 whitespace-nowrap pointer-events-none select-none z-0">
        PORTFOLIO
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10 flex flex-col justify-center">
        
        {/* Brutalist Arrow Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 md:mb-16 font-mono text-xs md:text-sm tracking-[0.2em] font-bold uppercase text-black/80">
          <a href="#home" className="hover:text-white hover:-translate-y-1 flex items-center gap-2 transition-all">
            HOME <span className="text-lg leading-none">↑</span>
          </a>
          <a href="#about" className="hover:text-white hover:-translate-y-1 flex items-center gap-2 transition-all">
            ABOUT <span className="text-lg leading-none">↗</span>
          </a>
          <a href="#services" className="hover:text-white hover:-translate-y-1 flex items-center gap-2 transition-all">
            SERVICES <span className="text-lg leading-none">↗</span>
          </a>
          <a href="#projects" className="hover:text-white hover:-translate-y-1 flex items-center gap-2 transition-all">
            PROJECTS <span className="text-lg leading-none">↗</span>
          </a>
          <a href="#skills" className="hover:text-white hover:-translate-y-1 flex items-center gap-2 transition-all">
            SKILLS <span className="text-lg leading-none">↗</span>
          </a>
          <a href="#journey" className="hover:text-white hover:-translate-y-1 flex items-center gap-2 transition-all">
            JOURNEY <span className="text-lg leading-none">↗</span>
          </a>
          <a href="#contact" className="hover:text-white hover:-translate-y-1 flex items-center gap-2 transition-all">
            CONTACT <span className="text-lg leading-none">→</span>
          </a>
        </div>

        {/* Main Reference Layout Row */}
        <div className="relative flex items-center justify-center w-full">
          
          {/* Left - Absolute on xl */}
          <div className="hidden xl:block absolute left-0 font-mono text-[10px] md:text-xs tracking-widest uppercase text-black/80 font-bold z-20">
            © {new Date().getFullYear()} ABINASH. ALL RIGHTS RESERVED.
          </div>
          
          {/* Center */}
          <div className="flex items-center justify-center gap-4 md:gap-6 w-full z-10">
            <div className="h-[3px] bg-black w-6 sm:w-10 lg:w-16 hidden sm:block"></div>
            <a href="#home" className="font-display text-[13vw] xl:text-[10rem] tracking-normal text-black hover:text-white transition-colors leading-[0.8] pt-2 md:pt-4 font-black">
              ABINASH
            </a>
            <div className="h-[3px] bg-black w-6 sm:w-10 lg:w-16 hidden sm:block"></div>
          </div>
          
          {/* Right - Absolute on xl */}
          <div className="hidden xl:flex absolute right-0 font-mono text-[10px] md:text-xs tracking-widest uppercase items-center gap-6 text-black/80 font-bold z-20">
            <div className="flex items-center gap-2">DESIGNED & BUILT WITH CODE <span className="text-white text-base leading-none">♥</span></div>
            <a href="#home" className="hover:text-white transition-colors border-l-2 border-black/30 pl-6 flex items-center gap-2 uppercase tracking-widest">
              BACK TO TOP <span className="text-lg leading-none">↑</span>
            </a>
          </div>
          
        </div>

        {/* Mobile Left & Right Stacked below */}
        <div className="flex xl:hidden flex-col md:flex-row items-center justify-between w-full mt-10 gap-4 font-mono text-[10px] md:text-xs tracking-widest uppercase text-black/80 font-bold">
           <div>© {new Date().getFullYear()} ABINASH. ALL RIGHTS RESERVED.</div>
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
             <div className="flex items-center gap-2">DESIGNED & BUILT WITH CODE <span className="text-white text-base leading-none">♥</span></div>
             <a href="#home" className="hover:text-white transition-colors md:border-l-2 md:border-black/30 md:pl-6 flex items-center gap-2 uppercase tracking-widest">
               BACK TO TOP <span className="text-lg leading-none">↑</span>
             </a>
           </div>
        </div>

      </div>
    </footer>
  );
}
