# BucketList Deployment Guide

## Current Status

- **Frontend**: Deployed to Netlify at https://rainbow-paprenjak-45eef4.netlify.app
- **Backend**: Not yet deployed (needs to be set up)

## Backend Deployment Options

### Option 1: Railway (Recommended - Easiest)

1. **Create a Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy the Server**
   ```bash
   npm install -g @railway/cli
   railway login
   railway init
   railway up
   ```

3. **Set Environment Variables on Railway**
   - Go to your Railway project dashboard
   - Add the `DATABASE_URL` variable with your Neon PostgreSQL connection string

4. **Get Your Production URL**
   - Railway will provide a URL like `https://your-app.up.railway.app`

### Option 2: Heroku

1. **Create a Heroku Account**
   - Go to https://www.heroku.com
   - Sign up

2. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

3. **Deploy**
   ```bash
   heroku create your-app-name
   heroku config:set DATABASE_URL="your_neon_connection_string"
   git push heroku main
   ```

### Option 3: Render

1. **Create a Render Account**
   - Go to https://render.com
   - Sign up

2. **Connect Your GitHub Repository**
   - Create a new Web Service
   - Select your GitHub repo
   - Set Build Command: `npm run build`
   - Set Start Command: `npm start`
   - Add `DATABASE_URL` environment variable

## Connecting Frontend to Backend

After deploying the backend, update the frontend API calls:

1. **Update `client/src/lib/queryClient.ts`** (if needed for cross-origin):
   ```typescript
   const API_URL = import.meta.env.VITE_API_URL || '';
   
   export async function apiRequest(
     method: string,
     url: string,
     data?: unknown | undefined,
   ): Promise<any> {
     const fullUrl = API_URL + url;
     // ... rest of the function
   }
   ```

2. **Create `.env.production`** in the project root:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

3. **Rebuild and redeploy frontend**:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist/public
   ```

## Database Setup

Your Neon PostgreSQL database is already set up with:
- Connection string in `.env`
- Schema pushed via `npm run db:push`

No additional database setup needed!

## Troubleshooting

### CORS Issues
If you get CORS errors, add CORS middleware to `server/app.ts`:
```typescript
import cors from 'cors';
app.use(cors({
  origin: 'https://your-frontend-url.netlify.app',
  credentials: true
}));
```

### Database Connection Issues
- Verify `DATABASE_URL` is set correctly in production
- Check that Neon database is accessible from your server location
- Run `npm run db:push` on the production server if needed

## Monitoring

- **Netlify**: https://app.netlify.com
- **Railway/Heroku/Render**: Check their respective dashboards
- **Database**: https://console.neon.tech

## Next Steps

1. Choose a backend hosting option (Railway recommended)
2. Deploy the backend
3. Update frontend with backend URL
4. Test the full application
5. Monitor logs for any issues
