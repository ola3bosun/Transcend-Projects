"use client";

import React, { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

interface FallingTextProps {
  text: string;
  highlightWords?: string[];
  trigger?: 'auto' | 'click' | 'hover';
  gravity?: number;
  mouseConstraintStiffness?: number;
}

export const FallingText: React.FC<FallingTextProps> = ({
  text,
  highlightWords = [],
  trigger = 'auto',
  gravity = 1,
  mouseConstraintStiffness = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const [effectStarted, setEffectStarted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent SSR crashes
  useEffect(() => {
    setIsMounted(true);
    if (trigger === 'auto') {
      setEffectStarted(true);
    }
  }, [trigger]);

  // Handle the text splitting
  useEffect(() => {
    if (!textRef.current || !isMounted) return;
    const words = text.split(' ');

    const newHTML = words
      .map(word => {
        // Strip punctuation for matching, but keep it in the display
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isHighlighted = highlightWords.some(hw => cleanWord.startsWith(hw));
        
        // We use text-foreground/50 for normal words, and text-foreground (bold) for highlights
        return `<span class="inline-block mx-[4px] select-none uppercase font-black tracking-tighter ${isHighlighted ? 'text-foreground' : 'text-foreground/40'}">
          ${word}
        </span>`;
      })
      .join(' ');

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords, isMounted]);

  // The Physics Engine Loop
  useEffect(() => {
    if (!effectStarted || !isMounted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    if (!containerRef.current || !canvasContainerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    // We make the canvas completely invisible because we only want to see the HTML text moving
    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    
    // Create invisible walls to keep the text from falling off the screen
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    if (!textRef.current) return;
    const wordSpans = textRef.current.querySelectorAll('span');
    
    const wordBodies = Array.from(wordSpans).map(elem => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8, // Bounciness
        frictionAir: 0.01,
        friction: 0.2
      });
      
      // Give them a slight initial explosion outward
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      // Switch the DOM elements to absolute positioning so matter.js can take over
      elem.style.position = 'absolute';
      elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
      elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
      elem.style.transform = 'none';
      elem.style.pointerEvents = 'none'; // Ensure the mouse interacts with the physics body, not the HTML text
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });
    
    // Fix scroll hijacking bug on touch devices
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let animationFrameId: number;

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        // Map the HTML element's position exactly to the invisible physics body
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      animationFrameId = requestAnimationFrame(updateLoop);
    };
    
    updateLoop();

    // CRITICAL: Memory Leak Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [effectStarted, isMounted, gravity, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-[60vh] md:h-[70vh] cursor-crosshair text-center overflow-hidden"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="inline-block text-[4rem] md:text-[8rem] leading-[0.9] w-full max-w-[90%]"
      />
      <div className="absolute top-0 left-0 z-0 opacity-0 pointer-events-none" ref={canvasContainerRef} />
    </div>
  );
};