"use client";

import { useParams } from "next/navigation";
import { TransitionLink } from "@/components/ui/TransitionLink";
import ScrambleLink from "@/components/shared/ScrambleLink";

// 1. THE DATABASE
// In production, this would be moved to a separate file or fetched from a CMS like Sanity.
const projectDatabase = [
  {
    slug: "nexus-tower",
    meta: "[PRJ-001] — IBADAN, NG // 2026",
    title: "The Diyaolu Tower",
    specs: [
      { label: "HEIGHT", value: "420m", icon: "wave" },
      { label: "STRUCTURAL CORE", value: "Steel-RC", icon: "grid" },
      { label: "WIND LOAD RATIO", value: "0.85", icon: "power" }
    ],
    brief: "Designed to standout in the brown roof city skyline, Diyaolu Tower demanded a structural footprint that minimized ground-level disruption while maximizing vertical load-bearing capacity.",
    execution: "We implemented a tuned mass damper system hidden within the crown, allowing the incredibly slender profile to withstand extreme crosswinds without compromising the glass curtain wall."
  },
  {
    slug: "the-arch",
    meta: "[PRJ-002] — LONDON, UK // 2025",
    title: "The Arch",
    specs: [
      { label: "SPAN", value: "150m", icon: "grid" },
      { label: "MATERIAL", value: "Carbon-Steel", icon: "wave" },
      { label: "TENSILE STRENGTH", value: "High", icon: "power" }
    ],
    brief: "A pedestrian crossing connecting two vital economic zones across the Thames. The brief called for a structure that felt weightless but could support severe foot traffic congestion.",
    execution: "By utilizing a post-tensioned carbon-steel diagrid, we eliminated the need for central suspension cables, creating an uninterrupted sightline across the water."
  },
  // Fallback data for any other links clicked in your grid
  {
    slug: "default",
    meta: "[PRJ-XXX] — LOCATION // YEAR",
    title: "Retrieving Project Data",
    specs: [
      { label: "STATUS", value: "Archived", icon: "grid" },
      { label: "ACCESS", value: "Restricted", icon: "power" },
      { label: "ENCRYPTION", value: "AES-256", icon: "wave" }
    ],
    brief: "Project details are currently compiling. Please check back when the render sequence is complete.",
    execution: "Access to structural schematics is restricted to authorized personnel only."
  }
];

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // 2. THE LOOKUP LOGIC
  // Find the project that matches the URL slug, or load the default fallback if it doesn't exist yet
  const project = projectDatabase.find((p) => p.slug === slug) || projectDatabase.find((p) => p.slug === "default");

  // Safety catch for TypeScript
  if (!project) return null;

  return (
    <div className="min-h-screen pt-16 pb-32 px-6 md:px-12 flex flex-col w-full max-w-[1600px] mx-auto transition-colors duration-300">
      
      {/* 1. PROJECT HEADER */}
      <div className="mb-12 md:mb-16">
        <div className="flex flex-col gap-6">
          {/* <TransitionLink href="/selected_work" className="text-[12px] font-mono font-bold uppercase tracking-widest text-gray-500 hover:text-foreground transition-colors w-fit"> */}
            <ScrambleLink
                className="text-[12px] font-mono font-bold uppercase tracking-widest text-gray-500"
                href="/selected_work"
                text = "[ BACK_TO_SELECTED_WORK ]"
            />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 block">
            {project.meta}
          </span>
        </div>
        
        <h1 className={`text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tight text-foreground leading-none mt-6 ${project.title === "Retrieving Project Data" ? "nav-link" : ""}`}>
          {project.title}
        </h1>
      </div>

      {/* 2. HERO IMAGE */}
      <div className="w-full aspect-[21/9] md:aspect-[2.5/1] bg-foreground/5 border border-foreground/20 relative overflow-hidden mb-24 md:mb-32">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs tracking-widest uppercase">
          [ HERO_RENDER_PENDING ]
        </div>
      </div>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      <div className="mb-24 md:mb-32">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-8 block">
          Technical Specifications
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-foreground/20">
          {project.specs.map((spec, index) => (
            <div 
              key={index} 
              className={`p-8 md:p-12 flex flex-col justify-between min-h-[250px] ${
                index !== 2 ? "border-b md:border-b-0 md:border-r border-foreground/20" : ""
              }`}
            >
              <div className="text-gray-400 mb-12">
                {spec.icon === "grid" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                  </svg>
                )}
                {spec.icon === "power" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                )}
                {spec.icon === "wave" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                )}
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-3">
                  {spec.label}
                </p>
                <p className="text-3xl md:text-4xl font-light text-foreground tracking-tight">
                  {spec.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. THE BRIEF & EXECUTION TEXT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 md:mb-32">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-6">The Brief</span>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">{project.brief}</p>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-6">The Execution</span>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">{project.execution}</p>
        </div>
      </div>

      {/* 5. SECONDARY DETAIL IMAGE */}
      <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-foreground/5 border border-foreground/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs tracking-widest uppercase">
          [ DETAIL_RENDER_PENDING ]
        </div>
      </div>

    </div>
  );
}