# Quick Deployment Guide

## Frontend ✅ DONE
Your frontend is already deployed at: **https://rainbow-paprenjak-45eef4.netlify.app**

## Backend - Deploy to Railway (5 minutes)

### Step 1: Create Railway Account
1. Go to https://railway.app
2. Click "Start Project"
3. Sign in with GitHub

### Step 2: Create New Project
1. Click "Create New Project"
2. Select "Deploy from GitHub repo"
3. Connect your BucketList repository

### Step 3: Configure Environment
1. In Railway dashboard, go to "Variables"
2. Add new variable:
   - Name: `DATABASE_URL`
   - Value: `postgresql://neondb_owner:npg_UgHpXJdsu68Q@ep-lively-sky-adhkb6ne-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`

### Step 4: Deploy
1. Railway will automatically detect the Node.js app
2. Build command: `npm run build`
3. Start command: `npm start`
4. Wait for deployment to complete

### Step 5: Get Your Backend URL
1. Go to "Deployments" tab
2. Copy the public URL (something like `https://your-app.railway.app`)

## Connect Frontend to Backend

### Step 1: Update Frontend
1. In your project, create `.env.production`:
   ```
   VITE_API_URL=https://your-app.railway.app
   ```

2. Update `client/src/lib/queryClient.ts`:
   ```typescript
   const API_BASE = import.meta.env.VITE_API_URL || '';
   
   export async function apiRequest(
     method: string,
     url: string,
     data?: unknown | undefined,
   ): Promise<any> {
     const fullUrl = API_BASE + url;
     const res = await fetch(fullUrl, {
       method,
       headers: data ? { "Content-Type": "application/json" } : {},
       body: data ? JSON.stringify(data) : undefined,
       credentials: "include",
     });

     await throwIfResNotOk(res);
     return await res.json();
   }
   ```

3. Update `client/src/lib/queryClient.ts` getQueryFn:
   ```typescript
   export const getQueryFn: <T>(options: {
     on401: UnauthorizedBehavior;
   }) => QueryFunction<T> =
     ({ on401: unauthorizedBehavior }) =>
     async ({ queryKey }) => {
       const url = API_BASE + queryKey.join("/");
       const res = await fetch(url, {
         credentials: "include",
       });
       // ... rest of function
     };
   ```

### Step 2: Rebuild and Deploy Frontend
```bash
npm run build
netlify deploy --prod --dir=dist/public
```

## Verify Everything Works

1. Visit https://rainbow-paprenjak-45eef4.netlify.app
2. Add a bucket list item
3. Check if it appears in the list
4. Mark as completed
5. Verify it shows in "Completed Dreams"

## Done! 🎉

Your full-stack app is now deployed:
- **Frontend**: https://rainbow-paprenjak-45eef4.netlify.app
- **Backend**: https://your-app.railway.app (from Railway)
- **Database**: Neon PostgreSQL (already configured)
