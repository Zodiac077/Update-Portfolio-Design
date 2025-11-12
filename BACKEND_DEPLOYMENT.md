# Complete Backend Deployment Guide

## Your Setup
- **Frontend**: Netlify (https://zodiacx-portfolio.netlify.app)
- **Backend**: Needs to be deployed (Railway, Render, or Heroku)
- **Database**: MongoDB (local or cloud)
- **Contact Form**: Saves to MongoDB + sends email via EmailJS

## Quick Start - Deploy Backend to Railway (Recommended)

### Step 1: Prepare Your Backend

1. Your backend files are ready:
   - `server.js` - Express server
   - `package.json` - Dependencies
   - `Procfile` - Deployment config

### Step 2: Deploy on Railway

1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "Create New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository `Update-Portfolio-Design`
6. Railway will auto-detect it's a Node.js project
7. Add environment variables in Settings:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=production
   PORT=5000
   ```
8. Click Deploy

### Step 3: Get Your Backend URL

After deployment:
1. Go to Railway dashboard
2. Click on your project
3. Copy the "Service URL" (it will look like: `https://your-app.railway.app`)

### Step 4: Update Netlify Environment Variables

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your site
3. Go to Site Settings > Build & deploy > Environment
4. Add variable:
   ```
   VITE_API_URL=https://your-app.railway.app
   ```
5. Trigger a new build: Deploys > Trigger deploy

### Step 5: Test Your Setup

1. Go to your portfolio: https://zodiacx-portfolio.netlify.app
2. Fill out the contact form
3. Submit
4. You should see success message and data saved to MongoDB

## Alternative: Deploy on Render

1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. New > Web Service
4. Connect your GitHub repo
5. Configuration:
   - Name: `zodiacx-portfolio-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
6. Add Environment Variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=production
   ```
7. Click Create Web Service

## Running Locally for Testing

### Prerequisites
- Node.js installed
- MongoDB running locally (`mongodb://localhost:27017/`)

### Setup
```bash
npm install
npm run server:dev
```

### Frontend + Backend Locally
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server:dev
```

Then open `http://localhost:5173` in your browser.

## Environment Variables Summary

### Backend (.env.local)
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=https://your-deployed-backend.railway.app
```

## API Endpoints

All requests from frontend to backend:

### 1. Save Contact Message
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "title": "Project Inquiry",
  "message": "I'm interested in..."
}
```

Response:
```json
{
  "success": true,
  "message": "Message saved successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "title": "Project Inquiry",
    "message": "...",
    "createdAt": "2025-11-12T..."
  }
}
```

### 2. Get All Contacts (Admin)
```
GET /api/contacts
```

Response:
```json
{
  "success": true,
  "data": [...]
}
```

### 3. Health Check
```
GET /api/health
```

Response:
```json
{
  "success": true,
  "message": "Server is running"
}
```

## Troubleshooting

### CORS Error
If you see CORS errors:
1. Make sure your backend is running
2. Check that API_URL is correct in Netlify environment
3. Verify backend URL is accessible

### MongoDB Connection Error
1. For local MongoDB, ensure it's running on port 27017
2. For Atlas, check connection string and firewall IP whitelist
3. Check MONGODB_URI in backend environment variables

### Form Not Submitting
1. Open browser DevTools (F12)
2. Check Console for errors
3. Check Network tab to see if request reaches backend
4. Verify API URL is correct

### 502 Bad Gateway
Backend crashed or not running:
1. Check Railway/Render logs
2. Verify MONGODB_URI is valid
3. Check for errors in server.js

## Next Steps

1. ✅ Deploy backend to Railway/Render
2. ✅ Update Netlify environment variables
3. ✅ Test contact form submission
4. Create admin dashboard to view submissions
5. Add email notifications for new messages
6. Set up database backups
7. Add rate limiting to prevent spam

## Support

For more help:
- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
- MongoDB Docs: https://docs.mongodb.com
