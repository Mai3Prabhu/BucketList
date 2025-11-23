import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ActivityFeedItem from "@/components/ActivityFeedItem";
import EmptyState from "@/components/EmptyState";
import { storage, ActivityLog } from "@/lib/localStorage";
import { Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Activity() {
  const [activities, setActivities] = useState<ActivityLog[]>([]);

  useEffect(() => {
    const logs = storage.getActivity();
    setActivities(logs);
  }, []);

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
                  type={activity.type}
                  text={activity.itemText}
                  timestamp={activity.timestamp}
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
