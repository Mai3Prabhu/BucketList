import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: "heart" | "sparkles";
}

export default function EmptyState({
  title,
  description,
  icon = "heart",
}: EmptyStateProps) {
  const Icon = icon === "heart" ? Heart : Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mb-6"
      >
        <div className="p-6 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30">
          <Icon className="h-16 w-16 text-primary fill-current" />
        </div>
      </motion.div>

      <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-empty-title">
        {title}
      </h3>
      <p className="text-muted-foreground max-w-md" data-testid="text-empty-description">
        {description}
      </p>
    </motion.div>
  );
}
