import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import CompletedItemCard from "@/components/CompletedItemCard";
import EmptyState from "@/components/EmptyState";
import { Heart, Sparkles } from "lucide-react";
import type { BucketListItem } from "@shared/schema";

export default function Completed() {
  const { data: items = [], isLoading } = useQuery<BucketListItem[]>({
    queryKey: ["/api/bucket-list"],
  });

  const completedItems = items.filter((item) => item.completed);

  if (isLoading) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin">
            <Sparkles className="h-8 w-8 text-primary mx-auto" />
          </div>
          <p className="text-muted-foreground">Loading completed items...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Heart className="h-8 w-8 text-primary fill-current" />
            Completed Dreams
          </h1>
          <p className="text-muted-foreground">
            Celebrating the adventures we've accomplished together
          </p>
        </motion.div>

        {completedItems.length === 0 ? (
          <EmptyState
            title="No completed items yet"
            description="Complete items from your bucket list to see them here!"
            icon="sparkles"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedItems.map((item, index) => (
              <CompletedItemCard
                key={item.id}
                text={item.text}
                description={item.description || undefined}
                completedAt={item.completedAt?.toISOString?.() || new Date().toISOString()}
                priority={item.priority as "low" | "medium" | "high" | undefined}
                delay={index * 0.1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
