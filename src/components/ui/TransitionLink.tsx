"use client";

import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TransitionLink({ href, children, className, onClick }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    if (pathname === href) return;

    // DROP: Pull the current page's curtain down from the ceiling
    gsap.to(".global-curtain", {
      y: "100dvh", 
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        router.push(href);
      }
    });
  };

  return (
    <a href={href} onClick={handleTransition} className={className}>
      {children}
    </a>
  );
}