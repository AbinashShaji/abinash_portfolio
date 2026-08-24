import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // 1. Track mouse position using useMotionValue
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow using useSpring
  const springConfig = { damping: 40, stiffness: 400, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 2. Render only on devices with fine pointer and no reduced motion preference
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');

    if (!pointerQuery.matches || !motionQuery.matches) {
      return;
    }

    // Set visible if conditions are met
    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // 3. Hover state for specific elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactable') ||
        target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // 6. Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Don't render if device doesn't support it
  if (!isVisible) return null;

  // 4 & 5. Styling with TailwindCSS and framer-motion animations
  return (
    <>
      <style>{`
        /* Hide the default cursor for a better custom cursor experience */
        @media (pointer: fine) {
          body, a, button, input, textarea, select, .interactable, .group {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={false}
        animate={{
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          rotate: isHovering ? 0 : 45,
          scale: isHovering ? 1.5 : 1,
          borderRadius: isHovering ? "50%" : "0%",
          borderWidth: isHovering ? "1px" : "2px",
          borderColor: "#C0261E",
          backgroundColor: "transparent",
          boxShadow: isHovering 
            ? "0 0 20px rgba(192, 38, 30, 0.8), 0 0 40px rgba(192, 38, 30, 0.4)" 
            : "0 0 10px rgba(192, 38, 30, 0.6)",
          backdropFilter: isHovering ? "invert(1)" : "invert(0)",
          WebkitBackdropFilter: isHovering ? "invert(1)" : "invert(0)",
          mixBlendMode: "normal"
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
          mass: 0.1
        }}
      />
    </>
  );
};

export default CustomCursor;
