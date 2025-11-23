export interface BucketListItem {
  id: string;
  text: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  targetDate?: string;
  completed: boolean;
  completedAt?: string;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  type: "added" | "completed" | "deleted";
  itemText: string;
  timestamp: string;
}

const STORAGE_KEYS = {
  ITEMS: "ash3_bucketlist_items",
  ACTIVITY: "ash3_activity_feed",
};

export const storage = {
  getItems(): BucketListItem[] {
    try {
      const items = localStorage.getItem(STORAGE_KEYS.ITEMS);
      return items ? JSON.parse(items) : [];
    } catch {
      return [];
    }
  },

  saveItems(items: BucketListItem[]): void {
    localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
  },

  addItem(item: Omit<BucketListItem, "id" | "completed" | "createdAt">): BucketListItem {
    const items = this.getItems();
    const newItem: BucketListItem = {
      ...item,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    items.push(newItem);
    this.saveItems(items);
    this.logActivity("added", newItem.text);
    return newItem;
  },

  toggleItem(id: string): void {
    const items = this.getItems();
    const item = items.find((i) => i.id === id);
    if (item) {
      item.completed = !item.completed;
      item.completedAt = item.completed ? new Date().toISOString() : undefined;
      this.saveItems(items);
      this.logActivity(item.completed ? "completed" : "added", item.text);
    }
  },

  deleteItem(id: string): void {
    const items = this.getItems();
    const item = items.find((i) => i.id === id);
    if (item) {
      const filtered = items.filter((i) => i.id !== id);
      this.saveItems(filtered);
      this.logActivity("deleted", item.text);
    }
  },

  getActivity(): ActivityLog[] {
    try {
      const activity = localStorage.getItem(STORAGE_KEYS.ACTIVITY);
      return activity ? JSON.parse(activity) : [];
    } catch {
      return [];
    }
  },

  logActivity(type: ActivityLog["type"], itemText: string): void {
    const activity = this.getActivity();
    const newLog: ActivityLog = {
      id: crypto.randomUUID(),
      type,
      itemText,
      timestamp: new Date().toISOString(),
    };
    activity.unshift(newLog);
    localStorage.setItem(STORAGE_KEYS.ACTIVITY, JSON.stringify(activity.slice(0, 100)));
  },

  clearAll(): void {
    localStorage.removeItem(STORAGE_KEYS.ITEMS);
    localStorage.removeItem(STORAGE_KEYS.ACTIVITY);
  },
};
