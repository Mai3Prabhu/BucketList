import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CompletedItemCardProps {
  text: string;
  description?: string;
  completedAt: string;
  priority?: "low" | "medium" | "high";
  delay?: number;
}

const priorityColors = {
  low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  high: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

const CompletedItemCard = forwardRef<HTMLDivElement, CompletedItemCardProps>(function CompletedItemCard({
  text,
  description,
  completedAt,
  priority,
  delay = 0,
}, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="overflow-hidden hover-elevate h-full">
        <CardContent className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground flex-1" data-testid="text-completed-title">
              {text}
            </h3>
            <Heart className="h-5 w-5 text-primary fill-current flex-shrink-0" />
          </div>

          {description && (
            <p className="text-sm text-muted-foreground" data-testid="text-completed-description">
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {priority && (
              <Badge
                variant="secondary"
                className={`${priorityColors[priority]} text-xs no-default-hover-elevate no-default-active-elevate`}
              >
                {priority}
              </Badge>
            )}
            
            <div className="flex items-center gap-1 text-xs text-muted-foreground" data-testid="text-completed-date">
              <Calendar className="h-3 w-3" />
              <span>{new Date(completedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default CompletedItemCard;
