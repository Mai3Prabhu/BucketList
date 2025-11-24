import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBucketListItemSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET all bucket list items
  app.get("/api/bucket-list", async (_req, res) => {
    try {
      const items = await storage.getBucketListItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch items" });
    }
  });

  // POST add new item
  app.post("/api/bucket-list", async (req, res) => {
    try {
      const parsed = insertBucketListItemSchema.parse(req.body);
      const item = await storage.addBucketListItem(parsed);
      res.json(item);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // PATCH toggle item completion
  app.patch("/api/bucket-list/:id/toggle", async (req, res) => {
    try {
      await storage.toggleBucketListItem(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to toggle item" });
    }
  });

  // DELETE item
  app.delete("/api/bucket-list/:id", async (req, res) => {
    try {
      await storage.deleteBucketListItem(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete item" });
    }
  });

  // GET activity logs
  app.get("/api/activity", async (_req, res) => {
    try {
      const logs = await storage.getActivityLogs();
      res.json(logs);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch activity" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
