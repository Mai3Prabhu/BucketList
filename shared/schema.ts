import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const bucketListItems = pgTable("bucket_list_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  text: text("text").notNull(),
  description: text("description"),
  priority: varchar("priority", { length: 10 }).default("medium"),
  targetDate: varchar("target_date"),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const activityLogs = pgTable("activity_logs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: varchar("type", { length: 20 }).notNull(),
  itemText: text("item_text").notNull(),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertBucketListItemSchema = createInsertSchema(bucketListItems).omit({
  id: true,
  createdAt: true,
});

export const insertActivityLogSchema = createInsertSchema(activityLogs).omit({
  id: true,
  timestamp: true,
});

export type BucketListItem = typeof bucketListItems.$inferSelect;
export type InsertBucketListItem = z.infer<typeof insertBucketListItemSchema>;
export type ActivityLog = typeof activityLogs.$inferSelect;
export type InsertActivityLog = z.infer<typeof insertActivityLogSchema>;
