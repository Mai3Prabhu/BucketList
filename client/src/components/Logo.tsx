import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="140"
        height="60"
        viewBox="0 0 140 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-10"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF80AB" />
            <stop offset="100%" stopColor="#C48B9F" />
          </linearGradient>
        </defs>
        
        {/* A - handwritten style */}
        <path
          d="M 20 45 Q 25 25 28 20 Q 30 15 32 20 Q 35 30 38 45"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 22 35 Q 28 33 34 35"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* s - flowing into h */}
        <path
          d="M 45 32 Q 42 28 45 25 Q 48 22 51 25 Q 54 28 51 31 Q 48 34 45 37 Q 42 40 45 43 Q 48 46 51 43"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* h - connected to s */}
        <path
          d="M 58 15 L 58 45 M 58 30 Q 58 25 63 25 Q 68 25 68 30 L 68 45"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* 3 - large and prominent */}
        <path
          d="M 78 18 Q 85 15 92 18 Q 98 21 95 27 Q 92 30 88 30 M 88 30 Q 95 30 98 36 Q 101 42 95 47 Q 88 52 78 48"
          stroke="url(#logoGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Flowing underline/swirl */}
        <path
          d="M 75 50 Q 85 52 95 48"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        
        {/* Sparkles near the 3 */}
        <path
          d="M 105 12 L 107 14 M 107 12 L 105 14"
          stroke="#FF80AB"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 113 8 L 116 11 M 116 8 L 113 11"
          stroke="#FF80AB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Small decorative dots */}
        <circle cx="110" cy="18" r="1.5" fill="#FFB3D9" opacity="0.6" />
        <circle cx="102" cy="22" r="1" fill="#FF80AB" opacity="0.5" />
      </svg>
    </motion.div>
  );
}
