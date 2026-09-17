'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    const onMouseMove = (e) => {
      if (cursor) {
        // Use requestAnimationFrame for smooth native performance
        requestAnimationFrame(() => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        });
      }
    };

    const onMouseEnter = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid #0E5C8C";
      }
    };
    
    const onMouseLeave = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.backgroundColor = "#0E5C8C";
        cursor.style.border = "none";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    
    const attachHoverEvents = () => {
        const interactables = document.querySelectorAll("a, button, .cursor-pointer");
        interactables.forEach(el => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });
    };
    
    // Slight delay to allow DOM render
    setTimeout(attachHoverEvents, 100);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      const interactables = document.querySelectorAll("a, button, .cursor-pointer");
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-[#0E5C8C] rounded-full pointer-events-none z-[9999] transition-[transform,background-color,border] duration-300 ease-out"
      style={{ transform: 'translate(-50%, -50%) scale(1)' }}
    />
  );
}
