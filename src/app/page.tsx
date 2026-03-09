"use client";

import { TransitionLink } from "@/components/ui/TransitionLink";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-12 flex flex-col w-full max-w-[1600px] mx-auto transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      {/* Wrapped in a master border box */}
      <div className="border border-foreground/20 grid grid-cols-1 lg:grid-cols-12 mb-12">
        
        {/* Left Column: Copy & Stats */}
        <div className="lg:col-span-7 p-6 md:p-12 flex flex-col justify-between">
          
          <div className="flex justify-between items-end text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase pb-4 border-b border-foreground/20 mb-12">
            <span>01 // STRUCTURAL INTEGRITY // STATUS_REPORT</span>
            <span className="text-foreground">REF: CORE_ASSET_01</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-foreground leading-[0.85] mb-8">
            Engineering the<br />Essential.
          </h1>

          <p className="font-mono text-xs md:text-sm text-gray-500 leading-relaxed max-w-md mb-24">
            We strip away the superfluous to reveal the enduring. A synthesis of form, function, and physics.
          </p>

          {/* Progress Bars */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-md">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground">Load Factor</span>
              <div className="w-full h-1 bg-foreground/10"><div className="h-full bg-foreground w-[75%]"></div></div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground">Efficiency</span>
              <div className="w-full h-1 bg-foreground/10"><div className="h-full bg-foreground w-[92%]"></div></div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-foreground/20 p-4 relative flex flex-col">
          <div className="w-full h-full min-h-[400px] bg-foreground/5 relative overflow-hidden grayscale">
            
            {/* Absolute positioned floating tags */}
            <div className="absolute top-4 left-4 bg-background border border-foreground/20 px-3 py-1.5 z-10">
              <span className="text-[8px] font-mono font-bold tracking-widest text-foreground uppercase">VISUAL_FEED_01</span>
            </div>
            <div className="absolute top-4 right-4 bg-background border border-foreground/20 px-3 py-1.5 z-10">
              <span className="text-[8px] font-mono font-bold tracking-widest text-foreground uppercase">CAM: BRUTALIST_EXT</span>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs tracking-widest uppercase">
              [ HERO_RENDER_PENDING ]
            </div>
          </div>
        </div>
      </div>

      {/* 2. SHOWCASE HEADER */}
      <div className="flex justify-between items-center py-3 border-y border-foreground/20 text-[10px] font-mono font-bold tracking-widest text-foreground uppercase mb-12">
        <span>[ PROJECT SHOWCASE ]</span>
        <span className="text-gray-500">TOTAL_ENTRIES: 02</span>
      </div>

      {/* 3. SHOWCASE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-foreground/20 mb-12">
        
        {/* Project 1 */}
        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-foreground/20 flex flex-col justify-between">
          <div className="relative w-full mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase block mb-4">
              [PRJ-086] — LONDON, UK // 2023
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">The Atrium Complex</h3>
            {/* Thumbnail Box */}
            <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-foreground/5 border border-foreground/20 flex items-center justify-center">
               <span className="text-[8px] font-mono text-gray-400">THUMB_01</span>
            </div>
          </div>
          <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12">
            A sustainable redevelopment focusing on vertical light integration. Passive thermal mass optimization implemented.
          </p>
          <div className="grid grid-cols-3 text-center border-t border-dashed border-foreground/20 pt-8">
            <div>
              <p className="text-[10px] font-mono text-gray-400 mb-2">CO2_RED</p>
              <p className="font-black text-sm text-foreground">-42%</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-400 mb-2">LUX_AVG</p>
              <p className="font-black text-sm text-foreground">850</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-400 mb-2">STATUS</p>
              <p className="font-black text-sm text-foreground uppercase">Archived</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div className="relative w-full mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase block mb-4">
              [PRJ-091] — TOKYO, JP // 2024
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">Zenith Data Center</h3>
            <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-foreground/5 border border-foreground/20 flex items-center justify-center">
               <span className="text-[8px] font-mono text-gray-400">THUMB_02</span>
            </div>
          </div>
          <p className="font-mono text-xs text-gray-500 leading-relaxed mb-12">
            Seismic-resistant infrastructure with passive cooling systems. Tier IV redundancy metrics achieved.
          </p>
          <div className="grid grid-cols-3 text-center border-t border-dashed border-foreground/20 pt-8">
            <div>
              <p className="text-[10px] font-mono text-gray-400 mb-2">PUE_RT</p>
              <p className="font-black text-sm text-foreground">1.08</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-400 mb-2">UPTIME</p>
              <p className="font-black text-sm text-foreground">99.99</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-400 mb-2">STATUS</p>
              <p className="font-black text-sm text-foreground uppercase">Active</p>
            </div>
          </div>
        </div>

      </div>

      {/* 4. PROCESS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-foreground/20 mb-12">
        {/* Empty left column simulating architectural negative space */}
        <div className="hidden lg:block lg:col-span-4 border-r border-foreground/20 bg-background"></div>
        
        {/* Process Content */}
        <div className="col-span-1 lg:col-span-8 p-8 md:p-12">
          
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest text-foreground uppercase">PROCESS_TIMELINE</span>
            <div className="h-[1px] bg-foreground/20 flex-1"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-16 max-w-3xl leading-tight">
            Good engineering is as little engineering as possible.
          </h2>

          {/* Vertical Timeline */}
          <div className="flex flex-col gap-12 relative border-l border-foreground/20 ml-2 pl-8 mb-16">
            
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-foreground border-2 border-background"></div>
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-foreground uppercase mb-4">PHASE_01 // ANALYSIS</h4>
              <p className="font-mono text-xs text-gray-500 leading-relaxed max-w-xl">
                We strip away the non-essential, we uncover the purity of the project's purpose. This results in spaces that are honest, unobtrusive, and enduring.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-foreground border-2 border-background"></div>
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-foreground uppercase mb-4">PHASE_02 // SYNTHESIS</h4>
              <p className="font-mono text-xs text-gray-500 leading-relaxed max-w-xl">
                Every element is calibrated for longevity and sustainability. No trendy or ephemeral additions.
              </p>
            </div>

          </div>

          <TransitionLink 
            href="/process"
            className="group inline-flex items-center gap-4 border border-foreground px-6 py-4 text-[10px] font-mono font-bold tracking-widest text-foreground uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            EXECUTE_PROCESS_EXPLORATION
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </TransitionLink>

        </div>
      </div>

      {/* 5. STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-foreground/20">
        
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground/20 flex flex-col justify-end min-h-[200px]">
          <svg className="w-5 h-5 mb-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h18v18H3zM3 9h18M9 21V9" /></svg>
          <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-2">SQ FT BUILT</p>
          <p className="text-4xl font-black text-foreground">2.4M</p>
        </div>

        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-foreground/20 flex flex-col justify-end min-h-[200px]">
          <svg className="w-5 h-5 mb-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="7" r="4"/><path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"/><path d="M19 11v-2a2 2 0 0 0-2-2"/></svg>
          <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-2">ENGINEERS</p>
          <p className="text-4xl font-black text-foreground">140+</p>
        </div>

        <div className="p-8 md:p-12 border-b md:border-b-0 lg:border-r border-foreground/20 flex flex-col justify-end min-h-[200px]">
          <svg className="w-5 h-5 mb-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-2">COUNTRIES</p>
          <p className="text-4xl font-black text-foreground">12</p>
        </div>

        <TransitionLink href="/contact" className="group p-8 md:p-12 flex flex-col justify-end min-h-[200px] hover:bg-foreground hover:text-background transition-colors cursor-pointer">
          <svg className="w-5 h-5 mb-8 text-foreground group-hover:text-background transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 group-hover:text-background/70 uppercase mb-2 transition-colors">YOUR PROJECT</p>
          <p className="text-4xl font-black">Start</p>
        </TransitionLink>

      </div>

    </div>
  );
}