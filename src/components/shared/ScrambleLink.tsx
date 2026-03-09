"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface ScrambleLinkProps {
    href: string;
    text: string;
    className?: string;
}

export default function ScrambleLink({href, text, className}: ScrambleLinkProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const handleMouseEnter = () => {
        let iterations = 0;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter: string, index: number) => {
                        if (letter === "\n") return "\n"
                        if (letter === " " || letter === "[" || letter === "]") 
                            return letter;
                        
                        if (index < iterations) return text[index];
                        return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            }

            iterations += 1 / 3;
        }, 20);
    };

    return(
        <span 
            href = {href}
            className = {className}
            onMouseEnter = {handleMouseEnter}

            onMouseLeave = {() => {
                clearInterval(intervalRef.current);
                setDisplayText(text);
            }}
        >
            {displayText}
        </span>
    );
}