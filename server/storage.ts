import { db } from "./db";
import { bucketListItems, activityLogs, type BucketListItem, type InsertBucketListItem, type ActivityLog, type InsertActivityLog } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getBucketListItems(): Promise<BucketListItem[]>;
  addBucketListItem(item: InsertBucketListItem): Promise<BucketListItem>;
  toggleBucketListItem(id: string): Promise<void>;
  deleteBucketListItem(id: string): Promise<void>;
  getActivityLogs(): Promise<ActivityLog[]>;
  logActivity(type: string, itemText: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getBucketListItems(): Promise<BucketListItem[]> {
    return db.select().from(bucketListItems).orderBy(desc(bucketListItems.createdAt));
  }

  async addBucketListItem(item: InsertBucketListItem): Promise<BucketListItem> {
    const result = await db.insert(bucketListItems).values(item).returning();
    if (result[0]) {
      await this.logActivity("added", item.text);
      return result[0];
    }
    throw new Error("Failed to add bucket list item");
  }

  async toggleBucketListItem(id: string): Promise<void> {
    const item = await db.select().from(bucketListItems).where(eq(bucketListItems.id, id));
    if (item[0]) {
      const newCompleted = !item[0].completed;
      await db.update(bucketListItems)
        .set({
          completed: newCompleted,
          completedAt: newCompleted ? new Date() : null,
        })
        .where(eq(bucketListItems.id, id));
      await this.logActivity(newCompleted ? "completed" : "added", item[0].text);
    }
  }

  async deleteBucketListItem(id: string): Promise<void> {
    const item = await db.select().from(bucketListItems).where(eq(bucketListItems.id, id));
    if (item[0]) {
      await db.delete(bucketListItems).where(eq(bucketListItems.id, id));
      await this.logActivity("deleted", item[0].text);
    }
  }

  async getActivityLogs(): Promise<ActivityLog[]> {
    return db.select().from(activityLogs).orderBy(desc(activityLogs.timestamp)).limit(100);
  }

  async logActivity(type: string, itemText: string): Promise<void> {
    await db.insert(activityLogs).values({
      type,
      itemText,
    });
  }
}

export const storage = new DatabaseStorage();
