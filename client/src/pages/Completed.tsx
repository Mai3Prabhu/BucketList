import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CompletedItemCard from "@/components/CompletedItemCard";
import EmptyState from "@/components/EmptyState";
import { storage, BucketListItem } from "@/lib/localStorage";
import { Heart } from "lucide-react";

export default function Completed() {
  const [completedItems, setCompletedItems] = useState<BucketListItem[]>([]);

  useEffect(() => {
    const items = storage.getItems().filter((item) => item.completed);
    setCompletedItems(items);
  }, []);

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
                description={item.description}
                completedAt={item.completedAt!}
                priority={item.priority}
                delay={index * 0.1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
