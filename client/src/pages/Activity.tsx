import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ActivityFeedItem from "@/components/ActivityFeedItem";
import EmptyState from "@/components/EmptyState";
import { Clock, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { ActivityLog } from "@shared/schema";

export default function Activity() {
  const { data: activities = [], isLoading } = useQuery<ActivityLog[]>({
    queryKey: ["/api/activity"],
  });

  if (isLoading) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin">
            <Sparkles className="h-8 w-8 text-primary mx-auto" />
          </div>
          <p className="text-muted-foreground">Loading activity feed...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Clock className="h-8 w-8 text-primary" />
            Activity Feed
          </h1>
          <p className="text-muted-foreground">
            A timeline of your bucket list journey
          </p>
        </motion.div>

        {activities.length === 0 ? (
          <EmptyState
            title="No activity yet"
            description="Your activity feed will show all the changes to your bucket list!"
            icon="sparkles"
          />
        ) : (
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={activity.id}>
                <ActivityFeedItem
                  type={activity.type as "added" | "completed" | "deleted"}
                  text={activity.itemText}
                  timestamp={activity.timestamp?.toISOString?.() || new Date().toISOString()}
                  delay={index * 0.05}
                />
                {index < activities.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
