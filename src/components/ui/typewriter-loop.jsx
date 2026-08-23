import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * TypewriterLoop Component
 * 
 * Implements a looping typewriter effect for a list of words.
 * Customized for this project by converting from TypeScript to plain JSX,
 * and modifying the color palettes to match the brutalist Red/Black theme.
 */
const TypewriterLoop = ({
  LeadText = "ABOUT",
  morphingText = ["ME", "MY PASSION", "MY WORK", "MY EXPERTISE"],
  className,
  interval = 4000,
  transition = { duration: 3.0, ease: "easeInOut" },
  LeadTextClassName,
  morphingTextClassName,
  backgroundClassName,
  cursorClassName,
}) => {
  const [index, setIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  // Custom colors to match the Brutalist Black/Red aesthetic of the portfolio
  const gradientColors = [
    "from-[#E53935] to-[#B71C1C]", // Red
    "from-black to-neutral-700", // Black
    "from-[#D32F2F] to-[#C62828]", // Dark Red
    "from-neutral-900 to-neutral-600", // Dark Gray
  ];

  const backgroundColors = [
    "from-transparent via-red-200/30 to-red-200/50",
    "from-transparent via-neutral-200/30 to-neutral-200/50",
    "from-transparent via-red-300/30 to-red-300/50",
    "from-transparent via-neutral-300/30 to-neutral-300/50",
  ];

  const cursorColors = [
    "bg-[#E53935]",
    "bg-black",
    "bg-[#D32F2F]",
    "bg-neutral-900",
  ];

  const getGradientColor = () => gradientColors[colorIndex];
  const getBackgroundColor = () => backgroundColors[colorIndex];
  const getCursorColor = () => cursorColors[colorIndex];

  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    
    const runAnimation = async () => {
      // Small initial delay before starting the loop
      await new Promise(r => setTimeout(r, 100));

      while (isMounted) {
        // 1. Reveal (typewriter effect out)
        await controls.start({ 
          width: "auto", 
          opacity: 1, 
          transition: { 
            duration: transition?.duration || 0.8, 
            ease: transition?.ease || "easeInOut" 
          } 
        });
        
        // 2. Freeze/show for 4 seconds
        await new Promise(r => setTimeout(r, 4000));
        
        if (!isMounted) break;

        // 3. Hide in reverse
        await controls.start({ 
          width: 0, 
          opacity: 0, 
          transition: { 
            duration: transition?.duration || 0.8, 
            ease: transition?.ease || "easeInOut" 
          } 
        });
        
        if (!isMounted) break;

        // Change the word and color seamlessly while hidden
        setIndex((prev) => (prev + 1) % morphingText.length);
        setColorIndex((prev) => (prev + 1) % gradientColors.length);

        // 4. Freeze/hide for 1.5 seconds before revealing again
        await new Promise(r => setTimeout(r, 1500));
      }
    };

    runAnimation();

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls, morphingText.length, gradientColors.length, transition]);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-start w-fit gap-x-2 md:gap-x-3 gap-y-1 font-medium tracking-tight",
        className,
      )}
    >
      <span
        className={cn("whitespace-nowrap text-black uppercase", LeadTextClassName)}
      >
        {LeadText}
      </span>
      <div className="relative flex items-center">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={controls}
          className="overflow-hidden whitespace-nowrap relative"
        >
          {/* Background gradient box */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-gradient-to-r",
              getBackgroundColor(),
              backgroundClassName,
            )}
          />

          <span
            className={cn(
              "relative bg-clip-text text-transparent uppercase",
              "bg-gradient-to-r",
              getGradientColor(),
              "pr-1",
              morphingTextClassName,
            )}
          >
            {morphingText[index]}
          </span>
        </motion.div>

        {/* Cursor Line */}
        <motion.div
          key={`cursor-${colorIndex}`}
          className={cn(
            "w-[3px] md:w-[4px] h-[1.10em] sm:h-[1em]",
            getCursorColor(),
            cursorClassName,
          )}
          animate={{ opacity: [1, 0.5] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterLoop;
