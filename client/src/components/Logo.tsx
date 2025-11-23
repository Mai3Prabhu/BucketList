import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-1 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="120"
        height="48"
        viewBox="0 0 120 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-8"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF80AB" />
            <stop offset="100%" stopColor="#FFB3D9" />
          </linearGradient>
        </defs>
        
        <path
          d="M 15 35 L 8 15 L 22 15 L 15 35 Z M 10 15 L 20 15 M 12 22 L 18 22"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        <path
          d="M 30 30 Q 30 18 38 18 Q 42 18 42 22 Q 42 26 38 26 Q 30 26 30 30 Q 30 34 38 34 Q 46 34 46 26"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        <path
          d="M 54 15 L 54 35 M 54 20 Q 54 15 60 15 Q 66 15 66 20 L 66 30 Q 66 35 60 35 Q 54 35 54 30"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        <path
          d="M 75 35 Q 75 28 80 24 Q 85 20 90 24 Q 95 28 95 35 M 90 15 L 90 35"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        <path
          d="M 102 12 Q 104 10 106 12 Q 108 14 106 16 Q 104 18 102 16 Q 100 14 102 12 Z"
          fill="#FF80AB"
        />
        
        <circle cx="8" cy="12" r="1.5" fill="#FFB3D9" opacity="0.6" />
        <circle cx="48" cy="38" r="1" fill="#FF80AB" opacity="0.4" />
        <circle cx="70" cy="12" r="1" fill="#FFB3D9" opacity="0.5" />
      </svg>
    </motion.div>
  );
}
