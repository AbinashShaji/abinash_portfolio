import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally join Tailwind CSS classes together.
 * It uses clsx for conditional classes and tailwind-merge to properly resolve tailwind class conflicts.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
