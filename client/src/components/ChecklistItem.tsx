import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

interface ChecklistItemProps {
  id: string;
  text: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  targetDate?: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  high: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

export default function ChecklistItem({
  id,
  text,
  description,
  priority,
  targetDate,
  completed,
  onToggle,
  onDelete,
}: ChecklistItemProps) {
  const handleToggle = () => {
    if (!completed) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#FF80AB", "#FFB3D9", "#FFC1E3"],
      });
    }
    onToggle(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      layout
      className="group"
    >
      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border hover-elevate">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-1"
        >
          <Checkbox
            checked={completed}
            onCheckedChange={handleToggle}
            className="h-6 w-6 rounded-md data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            data-testid={`checkbox-item-${id}`}
          />
        </motion.div>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-medium ${
              completed ? "line-through text-muted-foreground" : "text-foreground"
            }`}
            data-testid={`text-title-${id}`}
          >
            {text}
          </h3>
          
          {description && (
            <p className="text-sm text-muted-foreground mt-1" data-testid={`text-description-${id}`}>
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-2">
            {priority && (
              <Badge
                variant="secondary"
                className={`${priorityColors[priority]} text-xs no-default-hover-elevate no-default-active-elevate`}
                data-testid={`badge-priority-${id}`}
              >
                {priority}
              </Badge>
            )}
            
            {targetDate && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground" data-testid={`text-date-${id}`}>
                <Calendar className="h-3 w-3" />
                <span>{new Date(targetDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          data-testid={`button-delete-${id}`}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
