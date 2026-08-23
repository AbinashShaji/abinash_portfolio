import { motion } from 'framer-motion';

/**
 * AnimatedRedText Component
 * 
 * Implements a letter-by-letter typewriter reveal animation for red highlighted words.
 * We use `staggerChildren` on the parent container so that each letter animates 
 * sequentially when the component enters the viewport.
 */
export default function AnimatedRedText({ text }) {
  // Split the text into an array of individual characters
  const characters = text.split('');

  return (
    <motion.span
      className="text-red inline-flex"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1, // Time delay between each letter's animation
          }
        }
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 }, // Letters start invisible and slightly lower
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.3 } 
            } // Letters fade in and move up to their final position
          }}
          className="inline-block"
        >
          {/* Preserve space characters if any exist, otherwise render the character */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
