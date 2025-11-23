import { motion } from "framer-motion";
import { Heart, Plus, Trash2, CheckCircle2 } from "lucide-react";

interface ActivityFeedItemProps {
  type: "added" | "completed" | "deleted";
  text: string;
  timestamp: string;
  delay?: number;
}

const activityConfig = {
  added: {
    icon: Plus,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    message: "Added to bucket list",
  },
  completed: {
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30",
    message: "Completed",
  },
  deleted: {
    icon: Trash2,
    color: "text-red-500",
    bg: "bg-red-100 dark:bg-red-900/30",
    message: "Removed from list",
  },
};

export default function ActivityFeedItem({
  type,
  text,
  timestamp,
  delay = 0,
}: ActivityFeedItemProps) {
  const config = activityConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex gap-4 items-start"
      data-testid={`activity-${type}`}
    >
      <div className={`p-2 rounded-full ${config.bg} mt-1`}>
        <Icon className={`h-4 w-4 ${config.color}`} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground" data-testid="text-activity-item">
          {text}
        </p>
        <p className="text-xs text-muted-foreground mt-1" data-testid="text-activity-message">
          {config.message}
        </p>
        <p className="text-xs text-muted-foreground mt-1" data-testid="text-activity-time">
          {new Date(timestamp).toLocaleString()}
        </p>
      </div>

      <Heart className="h-4 w-4 text-primary fill-current opacity-50" />
    </motion.div>
  );
}
