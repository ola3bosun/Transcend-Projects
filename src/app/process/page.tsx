"use client";

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col w-full max-w-[1600px] mx-auto transition-colors duration-300">
      
      {/* HEADER SECTION */}
      <div className="mb-20 md:mb-32">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-6 block">
          03 // Methodology
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tight text-foreground leading-none">
          Form is<br />Function.
        </h1>
      </div>

      {/* MAIN CONTENT GRID */}
      {/* Complex 12-column grid to perfectly match the Dieter Rams aesthetic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start border-t border-foreground/20 pt-16">
        
        {/* COLUMN 1: Small Section Title */}
        <div className="lg:col-span-2">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground max-w-[150px] leading-relaxed">
            The Subtraction Process
          </h2>
        </div>

        {/* COLUMN 2: Core Philosophy Statement */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <p className="text-2xl md:text-3xl font-medium leading-snug text-foreground">
            Our engineering rigor removes the non-essential to reveal the structural truth. Every beam and joint serves a distinct load-bearing purpose. We believe that honesty in materials leads to clarity in design.
          </p>
          <hr className="border-foreground/20 w-3/4" />
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            By stripping away ornamentation, we expose the inherent beauty of the structure itself. This is not minimalism for style's sake, but for the sake of integrity.
          </p>
        </div>

        {/* COLUMN 3: Technical Specifications */}
        <div className="lg:col-span-3 flex flex-col gap-8 lg:pl-8 lg:border-l border-foreground/20">
          
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">ISO 9001 Compliance</h3>
            <p className="text-xs text-gray-500 leading-relaxed">International quality management standards ensuring consistency.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">Structural Analysis</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Advanced computational modeling predicts stress vectors.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">Material Fidelity</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Selection based on tensile strength and aging factors.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">Thermal Dynamics</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Energy efficiency integrated into core structural elements.</p>
          </div>

        </div>

        {/* COLUMN 4: Architectural Blueprint Image Frame */}
        <div className="lg:col-span-3">
          <div className="w-full aspect-[3/4] border border-foreground/20 p-2 relative group hover:border-foreground transition-colors duration-300">
            {/* The actual image placeholder - uses dynamic background variables */}
            <div className="w-full h-full bg-foreground/5 relative overflow-hidden grayscale opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                [ RENDER_03_A ]
              </span>
            </div>
            {/* The floating FIG tag */}
            <div className="absolute bottom-6 right-6 bg-background border border-foreground px-3 py-1.5 z-10">
              <span className="text-[8px] font-mono font-bold tracking-widest text-foreground uppercase">
                FIG. 2.4 - SECTION A
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32 border-t border-foreground/20 pt-16">
        
        {/* Card 1 */}
        <div className="border border-foreground/20 p-8 flex flex-col group hover:bg-foreground/5 transition-colors duration-300">
          <svg className="w-6 h-6 mb-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 8h16M4 16h16M8 4v16M16 4v16" strokeLinecap="round" />
          </svg>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Modular Systems</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Standardized units allowing rapid assembly and infinite scalability.</p>
        </div>

        {/* Card 2 */}
        <div className="border border-foreground/20 p-8 flex flex-col group hover:bg-foreground/5 transition-colors duration-300">
          <svg className="w-6 h-6 mb-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="18" r="3" />
            <path d="M12 15V9M9 6h6M12 9L9 6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="6" r="2" />
          </svg>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">CNC Fabrication</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Millimeter-perfect component creation directly from CAD models.</p>
        </div>

        {/* Card 3 */}
        <div className="border border-foreground/20 p-8 flex flex-col group hover:bg-foreground/5 transition-colors duration-300">
          <svg className="w-6 h-6 mb-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Sustainable Core</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Recycled steel substrates and carbon-neutral concrete mixtures.</p>
        </div>

        {/* Card 4 */}
        <div className="border border-foreground/20 p-8 flex flex-col group hover:bg-foreground/5 transition-colors duration-300">
          <svg className="w-6 h-6 mb-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Safety Protocols</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Redundant load paths ensuring stability under extreme conditions.</p>
        </div>

      </div>
    </div>
  );
}