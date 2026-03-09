import ScrambleLink from "@/components/shared/ScrambleLink";

const getYear = new Date().getFullYear();
const location = `1085, Victoria Island,\nLagos, NG`;

export function Footer() {
  return (
    // 1. Swapped bg/border colors, added transition, and inverted the text selection highlight
    <footer className="w-full border-t border-foreground px-6 py-12 md:p-8 font-mono text-sm bg-background text-foreground mt-auto selection:bg-foreground selection:text-background transition-colors duration-300">
      
      {/* 4-Column Terminal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
        
        {/* Column 1: System Info */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            {/* 2. Swapped text-black to text-foreground */}
            <span className="nav-link text-foreground font-bold tracking-widest uppercase">Transcend</span>
          </div>
          
          <div className="flex flex-col gap-1 text-gray-500 text-xs uppercase tracking-wider">
            <span><ScrambleLink text="PROJECT_COMMAND_CENTER_V2.0" /></span>
            <span><ScrambleLink text="SYSTEMS_SECURED_SSL"/></span>
          </div>
        </div>

        {/* Column 2: Location & Map */}
        <div className="flex flex-col gap-4 text-foreground">
          <span className="text-foreground text-xs font-bold uppercase tracking-widest nav-link">
            OFFICE_LOC
          </span>
          <div className="text-gray-500 flex flex-col leading-relaxed whitespace-pre-wrap">
            <ScrambleLink text={`${location}`} className="text-gray-500" />
          </div>
          
          <div className="w-full max-w-[250px] h-20 bg-foreground/5 relative mt-2 overflow-hidden border border-foreground/20 grayscale opacity-80 hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-500 tracking-widest">
              [ MAP_RENDER_PENDING ]
            </div>
            {/* <Image src="/map-snippet.png" alt="Office Location Map" fill className="object-cover" /> */}
          </div>
        </div>

        {/* Column 3: Contact Protocols */}
        <div className="flex flex-col gap-4 text-foreground">
          <span className="text-foreground text-xs font-bold uppercase tracking-widest nav-link">
            Contact_Protocols
          </span>
          <div className="text-gray-500 flex flex-col gap-2">
              <ScrambleLink text="hello@transcend.com" href="mailto:hello@transcend.com" />
              <ScrambleLink text="+234 810 912 2015" href="tel:+2348109122015" />
          </div>
        </div>

        {/* Column 4: Socials & Terminal End */}
        <div className="flex flex-col justify-between h-full items-start md:items-end gap-12 md:gap-0">
          
          {/* Social Links */}
          <div className="flex gap-6 font-bold uppercase">
            <a href="#" className="text-gray-500 hover:text-foreground transition-colors nav-link">LN</a>
            <a href="#" className="text-gray-500 hover:text-foreground transition-colors nav-link">IG</a>
            <a href="#" className="text-gray-500 hover:text-foreground transition-colors nav-link">TW</a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-[10px] uppercase tracking-widest" id="terminalEnd">
            © {getYear} 
            <ScrambleLink 
              text="_Transcend. TERMINAL_END" 
              href="https://transcend.com" 
            />
          </div>
          
        </div>

      </div>
    </footer>
  );
}