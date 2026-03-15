"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLiveTime } from "@/hooks/useLiveTime";
import { TransitionLink } from "@/components/ui/TransitionLink";
import ScrambleLink from "@/components/shared/ScrambleLink";
import { useTheme } from "next-themes";

export function Navbar() {
  const containerRef = useRef<HTMLElement>(null);
  const mobileTl = useRef<gsap.core.Timeline | null>(null);
  const currentTime = useLiveTime();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Theme State
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // 1. Initial Desktop Load Animation
  useGSAP(
    () => {
      const navLinks = gsap.utils.toArray(".desktop-nav-item");
      const systemText = gsap.utils.toArray(".system-text");

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([navLinks, systemText], { autoAlpha: 0, y: 10 });

      tl.to(systemText, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
      }).to(
        navLinks,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
        },
        "-=0.2",
      );
    },
    { scope: containerRef },
  );

  // 2. Mobile Menu Setup
  useGSAP(
    () => {
      const mobileOverlay = ".mobile-overlay";
      const mobileTopBar = ".mobile-top-bar";
      const mobileLinks = gsap.utils.toArray(".mobile-link");
      const mobileFooter = gsap.utils.toArray(".mobile-footer-item");

      gsap.set(mobileOverlay, { autoAlpha: 0 });
      gsap.set(mobileTopBar, { autoAlpha: 0, y: -10 });
      gsap.set(mobileLinks, { yPercent: 150 }); 
      gsap.set(mobileFooter, { autoAlpha: 0, y: 10 });

      mobileTl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.inOut" },
      });

      mobileTl.current
        .to(mobileOverlay, { autoAlpha: 1, duration: 0.4 })
        .to(mobileTopBar, { autoAlpha: 1, y: 0, duration: 0.3 }, "-=0.2")
        .to(mobileLinks, { yPercent: 0, duration: 0.6, stagger: 0.08 }, "-=0.1")
        .to(
          mobileFooter,
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.05 },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  // 3. Trigger Play/Reverse AND Lock Background Scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileTl.current?.play();
      document.body.style.overflow = "hidden";
    } else {
      mobileTl.current?.reverse();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={containerRef}
      className="w-full uppercase tracking-widest font-mono text-sm fixed top-0 z-50 bg-background"
    >
      {/* --- TOP BAR --- */}
      <div className="flex justify-between items-center py-4 px-6 border-b border-foreground bg-background relative">
        <div className="flex flex-col gap-1">
          <span className="font-bold system-text text-foreground">
            <ScrambleLink text="Transcend Projects" href="/" />
          </span>
          <span className="text-gray-500 text-xs system-text hidden md:block">
            System_Version: 2.0.4 // Localhost
          </span>
        </div>

        <div className="hidden md:flex gap-12 font-bold">
          <TransitionLink
            href="/selected_work"
            className="text-foreground desktop-nav-item group relative overflow-hidden block h-[1.2em] leading-[1.2em]"
          >
            <span className="text-foreground block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              [ WORKS ]
            </span>
            <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
              [ WORKS ]
            </span>
          </TransitionLink>

          <TransitionLink
            href="/process"
            className="text-foreground desktop-nav-item group relative overflow-hidden block h-[1.2em] leading-[1.2em]"
          >
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              [ PROCESS ]
            </span>
            <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
              [ PROCESS ]
            </span>
          </TransitionLink>

          <TransitionLink
            href="/contact"
            className="text-foreground desktop-nav-item group relative overflow-hidden block h-[1.2em] leading-[1.2em]"
          >
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              [ CONTACT ]
            </span>
            <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
              [ CONTACT ]
            </span>
          </TransitionLink>
        </div>

        <div className="text-foreground hidden md:flex items-center gap-4 system-text">
          {/* THEME TOGGLE BUTTON */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-foreground desktop-nav-item group relative overflow-hidden block h-[1.2em] leading-[1.2em]"
              type="button"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full text-xs font-bold tracking-widest">
                [ {theme === 'dark' ? 'LIGHT' : 'DARK'} ]
              </span>
              <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-xs font-bold tracking-widest">
                [ {theme === 'dark' ? 'LIGHT' : 'DARK'} ]
              </span>
            </button>
          )}
          <span className="text-foreground text-xs text-right">
            UTC: {currentTime}
          </span>
          <div className="border border-foreground px-2 py-1 text-xs font-bold flex items-center gap-1">
            <div className="bg-foreground w-2 h-2 animate-ping"></div> LIVE
          </div>
        </div>

        {/* Custom Offset Line Toggle */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center z-50 group system-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Replaced bg-black with bg-foreground */}
          <span
            className={`absolute h-[2px] w-6 bg-foreground transition-all duration-300 ease-out ${
              isMobileMenuOpen
                ? "rotate-45 translate-x-0 translate-y-0"
                : "-translate-y-[4px] -translate-x-[3px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-foreground transition-all duration-300 ease-out ${
              isMobileMenuOpen
                ? "-rotate-45 translate-x-0 translate-y-0"
                : "translate-y-[4px] translate-x-[3px]"
            }`}
          />
        </button>
      </div>

      {/* --- MOBILE FULL-SCREEN MENU OVERLAY --- */}
      {/* Replaced bg-white with bg-background and ensured text-foreground */}
      <div className="mobile-overlay md:hidden fixed inset-0 top-[60px] bg-background text-foreground flex flex-col z-40 overflow-y-auto">
        <div className="mobile-top-bar flex justify-between items-center px-6 py-4 border-b border-foreground">
          <div className="flex items-center gap-4">
            <div className="border border-foreground px-2 py-1 text-xs font-bold flex items-center gap-1">
              <div className="bg-foreground w-2 h-2 animate-ping"></div> LIVE
            </div>
            <span className="text-xs">UTC: {currentTime}</span>
          </div>
          
          {/* MOBILE THEME TOGGLE */}
          {mounted && (
            <button onClick={toggleTheme} className="text-[10px] font-bold tracking-widest">
              [ {theme === 'dark' ? 'LIGHT' : 'DARK'} ]
            </button>
          )}
        </div>

        <div className="flex flex-col px-6 mt-12 mb-16 space-y-8 text-5xl font-bold tracking-tight">
          <div className="overflow-hidden border-b border-gray-200/20 pb-2">
            <TransitionLink
              href="/selected_work"
              className="text-foreground mobile-link block hover:opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              [ WORKS ]
            </TransitionLink>
          </div>
          <div className="overflow-hidden border-b border-gray-200/20 pb-2">
            <TransitionLink
              href="/process"
              className="text-foreground mobile-link block hover:opacity-50 leading-[1.1]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              [ PROCESS ]
            </TransitionLink>
          </div>
          <div className="overflow-hidden border-b border-gray-200/20 pb-2">
            <TransitionLink
              href="/contact"
              className="text-foreground mobile-link block hover:opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              [ CONTACT ]
            </TransitionLink>
          </div>
        </div>

        <div className="px-6 mt-auto mb-8 flex flex-col gap-12 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-500 mobile-footer-item">
              <p className="mb-2">LOCATIONS</p>
              <p className="font-bold tracking-widest leading-relaxed">
                [ LOS / ABUJA / NYC ]
              </p>
            </div>
            <div className="text-gray-500 mobile-footer-item">
              <p className="mb-2">ENQUIRIES</p>
              <p className="font-bold tracking-widest break-all">
                <a href="mailto:INFO@TRANSCEND.COM"> INFO@TRANSCEND.COM</a>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-end border-t border-gray-200/20 pt-4 text-[10px] text-gray-500 mobile-footer-item">
            <p className="max-w-[200px] uppercase leading-relaxed">
              Structural Engineering for the Next Century. Minimalism Through
              Precision.
            </p>
            <p className="font-bold text-foreground uppercase">© 2026</p>
          </div>
        </div>
      </div>
    </nav>
  );
}