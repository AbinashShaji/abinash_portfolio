export default function Footer() {
  return (
    <footer className="bg-cream text-black border-t border-black/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
        
        <div className="text-center">
          <a href="#home" className="font-display text-4xl md:text-5xl tracking-wider hover:text-red transition-colors inline-block">
            ABINASH
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-black/50 font-mono text-xs tracking-widest uppercase gap-4 font-medium">
          <div>© 2026 ABINASH SHAJI. ALL RIGHTS RESERVED.</div>
          
          <div className="flex items-center gap-6">
            <div>DESIGNED & BUILT WITH CODE <span className="text-red">♥</span></div>
            <a href="#home" className="hover:text-red transition-colors border-l border-black/20 pl-6">BACK TO TOP ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
