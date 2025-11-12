# MongoDB Setup Guide for Contact Form

## Overview
This guide will help you set up MongoDB to store contact form submissions from your portfolio website.

## Step 1: Create MongoDB Account & Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster:
   - Click "Create a new cluster"
   - Choose the free tier (M0)
   - Select your preferred region
   - Click "Create Cluster"
4. Wait for the cluster to be created (this takes a few minutes)

## Step 2: Create Database User

1. In MongoDB Atlas, go to "Database Access"
2. Click "Add New Database User"
3. Create username and password (save these!)
4. Click "Add User"

## Step 3: Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. It should look like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`

## Step 4: Update .env.local File

Replace the connection string in `.env.local`:

```
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

## Step 5: Deploy Backend

You can deploy the backend on one of these platforms:

### Option A: Heroku (Recommended for beginners)
1. Go to [Heroku](https://www.heroku.com)
2. Sign up and create a new app
3. Connect your GitHub repository
4. Add environment variables in Settings
5. Deploy

### Option B: Railway
1. Go to [Railway](https://railway.app)
2. Create new project
3. Connect GitHub repo
4. Add environment variables
5. Deploy

### Option C: Render
1. Go to [Render](https://render.com)
2. Create new Web Service
3. Connect GitHub
4. Add environment variables
5. Deploy

## Step 6: Update Backend URL

Once you deploy the backend, update the URL in `ContactSection.tsx`:

```tsx
const mongoResponse = await fetch('https://your-deployed-backend.com/api/contact', {
  // ...
});
```

## Step 7: Install Dependencies Locally

```bash
npm install
npm install --save-dev express mongoose cors dotenv nodemon
```

## Step 8: Run Backend Locally (Optional)

```bash
npm run server:dev
```

The server will run on `http://localhost:5000`

## Testing the Setup

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check MongoDB Atlas > Databases > Collections to see if data is saved

## API Endpoints

### Save Contact Message
- **POST** `/api/contact`
- Body: `{ name, email, title, message }`
- Response: Success status and saved data

### Get All Contacts (Admin)
- **GET** `/api/contacts`
- Response: Array of all contact submissions

### Health Check
- **GET** `/api/health`
- Response: Server status

## Troubleshooting

### Connection Error
- Check MongoDB_URI in .env.local
- Make sure database user credentials are correct
- Ensure IP whitelist includes your server's IP

### Form Not Saving
- Check browser console for errors
- Verify backend URL is correct
- Check MongoDB Atlas for any connection issues

### CORS Error
- Make sure CORS is enabled in server.js
- Add your frontend URL to CORS allowed origins if needed

## Next Steps

1. Add email notifications when new messages arrive
2. Create an admin dashboard to manage submissions
3. Set up automated backups for your database
4. Add rate limiting to prevent spam
