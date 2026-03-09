"use client";

export function TransitionOverlay() {
  return (
    <div 
      id="global-curtain"
      className="fixed inset-0 z-[9999] bg-foreground pointer-events-none will-change-transform"
      style={{ transform: "translateY(-100%)" }} 
    />
  );
}