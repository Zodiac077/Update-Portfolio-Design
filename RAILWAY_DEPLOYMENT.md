# Railway Backend Deployment Guide

## Prerequisites
- GitHub account (already have this ✓)
- Railway account (free tier available)
- MongoDB connection string (you have: mongodb://localhost:27017/portfolio)

## Step-by-Step Railway Deployment

### Step 1: Sign Up on Railway
1. Go to [Railway.app](https://railway.app)
2. Click "Start Project"
3. Sign up with GitHub (recommended)
4. Authorize Railway to access your GitHub

### Step 2: Create New Project
1. Click "Create New Project"
2. Select "Deploy from GitHub repo"
3. Search for "Update-Portfolio-Design"
4. Select it and click "Deploy"

### Step 3: Configure Environment Variables
Once the deployment starts:
1. Go to your project dashboard
2. Click on the "Variables" tab
3. Add these variables:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=production
PORT=5000
```

**For Cloud MongoDB (Optional):**
If you want to use MongoDB Atlas instead of local:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Step 4: Get Your Backend URL
1. In Railway dashboard, click your project
2. Go to the "Settings" tab
3. Copy the "Service URL" (will look like: `https://portfolio-backend-production.railway.app`)
4. Save this URL

### Step 5: Update Netlify Environment Variables
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your portfolio site
3. Go to "Site Settings" → "Build & deploy" → "Environment"
4. Click "Edit variables"
5. Add or update:
   ```
   VITE_API_URL=https://portfolio-backend-production.railway.app
   ```
6. Click "Save"
7. Go to "Deploys" and click "Trigger deploy" (choose latest commit)

### Step 6: Test the Setup
1. Go to your portfolio: https://zodiacx-portfolio.netlify.app
2. Fill out the contact form
3. Submit
4. Check if you see a success message
5. Go to Railway dashboard to verify data was saved

## Troubleshooting Railway Deployment

### Deployment Failed - Build Error
Check the build logs in Railway:
1. Click on your project
2. Go to "Deployments" tab
3. Click the failed deployment
4. Check logs for error messages

Common fixes:
- Make sure `package.json` has all dependencies
- Check Node.js version compatibility
- Clear build cache and try again

### Deployment Success but Server Not Running
1. Check the "Logs" tab in Railway
2. Look for MongoDB connection errors
3. If MongoDB connection fails:
   - It's OK if using local MongoDB from Railway
   - Or update MONGODB_URI to a cloud-based MongoDB

### Contact Form Not Saving
1. Check browser console (F12) for errors
2. Check that VITE_API_URL is correct in Netlify
3. Test the backend health check:
   - Visit: `https://your-railway-url/api/health`
   - Should see: `{"success":true,"message":"Server is running",...}`

### CORS Errors
This has been fixed in the updated server.js with proper CORS configuration.

## Local Testing Before Deployment

```bash
# Copy backend package.json setup
cp backend-package.json package.json

# Install dependencies
npm install

# Run locally
npm start

# Test health endpoint
curl http://localhost:5000/api/health
```

## Important Notes

1. **MongoDB Connection**: 
   - Local: `mongodb://localhost:27017/portfolio`
   - Cloud (Atlas): `mongodb+srv://user:pass@cluster.mongodb.net/db`

2. **Backend URL Format**:
   - Railway: `https://your-project-name-production.railway.app`
   - Must be HTTPS, not HTTP

3. **Environment Variables**:
   - Always set in Railway dashboard, not in code
   - .env files are for local development only

4. **Deployment Updates**:
   - Railway watches your GitHub repo
   - Any push to `main` branch triggers auto-deployment
   - Check "Auto Deploy" is enabled in settings

## Monitoring & Logs

### View Logs in Railway
1. Project Dashboard
2. "Logs" tab
3. Real-time logs of your backend

### Common Log Messages
- ✓ "MongoDB connected successfully" - DB connected
- ✓ "Server running on port 5000" - Server started
- ✓ API endpoints working

## Next Steps After Successful Deployment

1. Test contact form submission
2. Monitor logs for any issues
3. Set up data retention policies
4. Add backup strategy for MongoDB
5. Create admin dashboard to view submissions
6. Add email notifications for new contacts

## Support & Resources

- Railway Docs: https://docs.railway.app
- MongoDB Docs: https://docs.mongodb.com
- Express Docs: https://expressjs.com
- Your Backend Health: `/api/health` endpoint

## FAQ

**Q: Can I use free MongoDB?**
A: Yes, use MongoDB Atlas free tier or local MongoDB.

**Q: Will my backend go to sleep?**
A: Railway keeps free tier apps running 24/7, no sleeping.

**Q: How to redeploy?**
A: Push to GitHub main branch, Railway auto-deploys.

**Q: Can I see submitted contacts?**
A: Yes, via `/api/contacts` endpoint or create an admin dashboard.
