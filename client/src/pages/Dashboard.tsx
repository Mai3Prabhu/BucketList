import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChecklistItem from "@/components/ChecklistItem";
import AddItemDialog from "@/components/AddItemDialog";
import EmptyState from "@/components/EmptyState";
import Logo from "@/components/Logo";
import { storage, BucketListItem } from "@/lib/localStorage";
import { Sparkles, Heart } from "lucide-react";

export default function Dashboard() {
  const [items, setItems] = useState<BucketListItem[]>([]);
  const [activeItems, setActiveItems] = useState<BucketListItem[]>([]);

  useEffect(() => {
    const allItems = storage.getItems();
    setItems(allItems);
    setActiveItems(allItems.filter((item) => !item.completed));
  }, []);

  const handleAddItem = (newItem: Omit<BucketListItem, "id" | "completed" | "createdAt">) => {
    const added = storage.addItem(newItem);
    setItems((prev) => [...prev, added]);
    setActiveItems((prev) => [...prev, added]);
  };

  const handleToggleItem = (id: string) => {
    storage.toggleItem(id);
    const allItems = storage.getItems();
    setItems(allItems);
    setActiveItems(allItems.filter((item) => !item.completed));
  };

  const handleDeleteItem = (id: string) => {
    storage.deleteItem(id);
    const allItems = storage.getItems();
    setItems(allItems);
    setActiveItems(allItems.filter((item) => !item.completed));
  };

  return (
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-primary fill-current" />
            Our Bucket List
            <Sparkles className="h-8 w-8 text-primary fill-current" />
          </h1>
          <p className="text-muted-foreground">
            Dreams we want to achieve together
          </p>
        </motion.div>

        <div className="flex justify-center">
          <AddItemDialog onAdd={handleAddItem} />
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {activeItems.length === 0 ? (
              <EmptyState
                title="No dreams yet"
                description="Start adding your bucket list items and make your dreams come true together!"
                icon="heart"
              />
            ) : (
              activeItems.map((item) => (
                <ChecklistItem
                  key={item.id}
                  {...item}
                  onToggle={handleToggleItem}
                  onDelete={handleDeleteItem}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
