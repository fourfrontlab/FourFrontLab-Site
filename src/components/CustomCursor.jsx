'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });
    
    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2.5, backgroundColor: "transparent", border: "1px solid #0E5C8C", duration: 0.3 });
    };
    
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#0E5C8C", border: "none", duration: 0.3 });
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
      className="fixed top-0 left-0 w-4 h-4 bg-[#0E5C8C] rounded-full pointer-events-none z-[9999]"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
}
