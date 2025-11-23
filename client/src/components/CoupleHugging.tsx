import { motion } from "framer-motion";

export default function CoupleHugging({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="personGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF80AB" />
          <stop offset="100%" stopColor="#F06292" />
        </linearGradient>
        <linearGradient id="personGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C48B9F" />
          <stop offset="100%" stopColor="#AD7A8E" />
        </linearGradient>
      </defs>

      {/* Person 1 (left) */}
      <motion.g
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Head */}
        <circle cx="75" cy="60" r="18" fill="url(#personGradient1)" />
        
        {/* Body */}
        <ellipse cx="75" cy="95" rx="22" ry="32" fill="url(#personGradient1)" />
        
        {/* Arms hugging */}
        <motion.path
          d="M 75 80 Q 90 85 100 90"
          stroke="url(#personGradient1)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        
        {/* Heart on shirt */}
        <motion.path
          d="M 75 85 L 72 88 Q 70 90 72 92 Q 75 95 75 95 Q 75 95 78 92 Q 80 90 78 88 Z"
          fill="#FFE0EC"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.g>

      {/* Person 2 (right) */}
      <motion.g
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Head */}
        <circle cx="125" cy="60" r="18" fill="url(#personGradient2)" />
        
        {/* Body */}
        <ellipse cx="125" cy="95" rx="22" ry="32" fill="url(#personGradient2)" />
        
        {/* Arms hugging */}
        <motion.path
          d="M 125 80 Q 110 85 100 90"
          stroke="url(#personGradient2)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        
        {/* Heart on shirt */}
        <motion.path
          d="M 125 85 L 122 88 Q 120 90 122 92 Q 125 95 125 95 Q 125 95 128 92 Q 130 90 128 88 Z"
          fill="#FFE0EC"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.g>

      {/* Sparkles around them */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <circle cx="55" cy="50" r="2" fill="#FFB3D9" />
        <circle cx="145" cy="50" r="2" fill="#FFB3D9" />
        <circle cx="50" cy="90" r="1.5" fill="#FF80AB" />
        <circle cx="150" cy="90" r="1.5" fill="#FF80AB" />
      </motion.g>

      {/* Small hearts floating */}
      <motion.g
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -30, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      >
        <path
          d="M 100 120 L 98 122 Q 96 124 98 126 Q 100 128 100 128 Q 100 128 102 126 Q 104 124 102 122 Z"
          fill="#FF80AB"
          opacity="0.6"
        />
      </motion.g>

      <motion.g
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -30, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
      >
        <path
          d="M 85 125 L 83 127 Q 81 129 83 131 Q 85 133 85 133 Q 85 133 87 131 Q 89 129 87 127 Z"
          fill="#FFB3D9"
          opacity="0.6"
        />
      </motion.g>

      <motion.g
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -30, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, delay: 3 }}
      >
        <path
          d="M 115 125 L 113 127 Q 111 129 113 131 Q 115 133 115 133 Q 115 133 117 131 Q 119 129 117 127 Z"
          fill="#C48B9F"
          opacity="0.6"
        />
      </motion.g>
    </motion.svg>
  );
}
