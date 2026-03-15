"use client";

import { TransitionLink } from "@/components/ui/TransitionLink";
import Image from "next/image";

// Project Data Structure (Ready for dynamic routing or CMS integration)
const projects = [
  {
    id: "001",
    slug: "nexus-tower",
    title: "diyaolu Tower",
    location: "NEW YORK",
    year: "2026",
    layout: "left",
    aspect: "aspect-[3/4]",
    image: "/20260307_103504.jpg",
  },
  {
    id: "002",
    slug: "the-arch",
    title: "The Arch",
    location: "LONDON",
    year: "2025",
    layout: "right",
    aspect: "aspect-square",
    image: "/istockphoto-1498876801-612x612.jpg",
  },
  {
    id: "003",
    slug: "facility-08",
    title: "Facility 08",
    location: "BERLIN",
    year: "2024",
    layout: "left",
    aspect: "aspect-[3/4]",
    image: "/20260307_103506.jpg",
  },
  {
    id: "004",
    slug: "eco-center",
    title: "Eco Center",
    location: "TOKYO",
    year: "2023",
    layout: "right",
    aspect: "aspect-[3/4]",
    image: "/20260307_103502.jpg",
  },
  {
    id: "005",
    slug: "hydro-one",
    title: "Hydro One",
    location: "NEVADA",
    year: "2022",
    layout: "full",
    aspect: "aspect-[21/9]",
    image: "/istockphoto-626349590-612x612.webp",
  },
  {
    id: "006",
    slug: "the-prism",
    title: "The Prism",
    location: "SEOUL",
    year: "2024",
    layout: "left",
    aspect: "aspect-[3/4]",
    image: "/istockphoto-1222952117-612x612.webp",
  },
  {
    id: "007",
    slug: "void-space",
    title: "Void Space",
    location: "OSLO",
    year: "2021",
    layout: "right",
    aspect: "aspect-square",
    image: "/istockphoto-827380056-612x612.jpg",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-18 pb-18 px-6 md:px-12 flex flex-col w-full max-w-[1600px] mx-auto transition-colors duration-300">
      {/* HEADER */}
      <div className="mb-20 md:mb-24">
        <div className="border border-foreground/20 p-4 md:px-6 md:py-5">
          <div className="flex justify-between items-end text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase pb-2 border-b border-foreground/20 mb-4 md:mb-5">
            <span>01 // SELECTED_WORK</span>
            <span>Ref: Work_01</span>
          </div>

          <h1 className="text-5xl md:text-4xl lg:text-[5rem] font-black tracking-tighter text-foreground leading-[0.85] uppercase max-w-5xl">
            Engineering the Future Built Environment.
          </h1>
        </div>
      </div>

      {/* 12-COLUMN STAGGERED GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-0 md:gap-x-8">
        {projects.map((project, index) => {
          // Logic to assign exact grid placement based on the layout property
          let gridClasses = "";
          if (project.layout === "left") {
            // Left items span 5 columns, start at column 1. Add bottom margin to space them out.
            gridClasses = "md:col-span-5 md:col-start-1 md:mb-48";
          } else if (project.layout === "right") {
            // Right items span 6 columns, start at column 7. Add top margin to stagger them downwards.
            gridClasses = "md:col-span-6 md:col-start-7 md:mt-64 md:-mb-16";
          } else if (project.layout === "full") {
            // Full width items span all 12 columns
            gridClasses = "md:col-span-12 my-12 md:my-32";
          }

          return (
            <TransitionLink
              key={project.id}
              href={`/selected_work/${project.slug}`}
              className={`group flex flex-col ${gridClasses}`}
            >
              {/* IMAGE PLACEHOLDER */}
              <div
                className={`w-full ${project.aspect} bg-foreground/5 relative overflow-hidden transition-all duration-700 border border-foreground/10 group-hover:border-foreground/40`}
              >
                {/* THE ACTUAL IMAGE */}
                <Image
                  src={project.image}
                  alt={`${project.title} Architectural Render`}
                  fill
                  className="object-cover grayscale opacity-80 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100 ease-out"
                />

                {/* Optional: Brutalist Label overlay that fades out on hover */}
                <div className="absolute top-4 right-4 bg-background/90 px-2 py-1 text-foreground opacity-100 group-hover:opacity-0 transition-opacity duration-500 font-mono text-[10px] tracking-widest uppercase z-10">
                  [ RENDER_PENDING ]
                </div>
              </div>

              {/* META DATA ROW */}
              {/* Uses a 3-column sub-grid to exactly match the [001] | Title | Location // Year alignment */}
              <div className="grid grid-cols-3 w-full mt-6 text-[10px] md:text-xs font-mono uppercase tracking-widest text-foreground items-start">
                <div className="text-gray-500">[{project.id}]</div>
                <div className="text-center font-bold relative inline-block">
                  <span className="relative z-10">{project.title}</span>
                  {/* Subtle hover underline effect */}
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-50" />
                </div>
                <div className="text-right text-gray-500">
                  {project.location} // {project.year}
                </div>
              </div>
            </TransitionLink>
          );
        })}
      </div>
    </div>
  );
}
