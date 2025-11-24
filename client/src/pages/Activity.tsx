import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ActivityFeedItem from "@/components/ActivityFeedItem";
import EmptyState from "@/components/EmptyState";
import { Clock, Sparkles, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { ActivityLog } from "@shared/schema";

export default function Activity() {
  const { data: activities = [], isLoading } = useQuery<ActivityLog[]>({
    queryKey: ["/api/activity"],
  });

  const clearActivityMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", "/api/activity/clear", {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/activity"] });
    },
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
          {activities.length > 0 && (
            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => clearActivityMutation.mutate()}
                disabled={clearActivityMutation.isPending}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Activity
              </Button>
            </div>
          )}
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
