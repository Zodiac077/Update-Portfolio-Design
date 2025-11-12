# Local MongoDB + Backend Setup (No Deployment Needed!)

## Overview
Store contact form data directly in MongoDB on your computer. Perfect for development and testing!

## Step 1: Install MongoDB Community Edition

### For Windows

**Option A: Using MongoDB Installer (Easiest)**
1. Download MongoDB from: https://www.mongodb.com/try/download/community
2. Choose:
   - Version: Latest (stable)
   - OS: Windows
   - Package: MSI
3. Run the installer and follow the setup wizard
4. Choose "Install MongoDB as a Service" (recommended)
5. Finish installation

**Option B: Using Chocolatey (If you have it)**
```powershell
choco install mongodb-community
```

### Verify Installation
Open PowerShell and run:
```powershell
mongod --version
```

You should see the version number.

## Step 2: Start MongoDB Server

### Method 1: As a Service (Runs automatically)
MongoDB should already be running as a Windows Service.
Check Services:
1. Press `Win + R`
2. Type `services.msc`
3. Look for "MongoDB Server"
4. Should show "Running"

### Method 2: Start Manually
Open PowerShell and run:
```powershell
mongod
```

You should see:
```
[initandlisten] waiting for connections on port 27017
```

Keep this terminal open.

## Step 3: Install Backend Dependencies Locally

In your project folder:
```powershell
npm install express mongoose cors dotenv
```

Or install from backend-package.json:
```powershell
npm install --save express mongoose cors dotenv
```

## Step 4: Start Your Backend Server

**Terminal 1 - MongoDB (if not running as service)**
```powershell
mongod
```

**Terminal 2 - Backend Server**
```powershell
npm start
```

You should see:
```
✓ MongoDB connected successfully
✓ Server running on port 5000
✓ Environment: development
```

## Step 5: Test Backend is Working

Open your browser and visit:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2025-11-12T...",
  "mongodb": "connected"
}
```

## Step 6: Update Frontend for Local Development

Create `.env` file in your project root:
```
VITE_API_URL=http://localhost:5000
```

Then start your frontend:
```powershell
npm run dev
```

## Step 7: Test Complete Setup

1. Open http://localhost:5173 (your Vite dev server)
2. Fill out the contact form
3. Submit
4. You should see success message
5. Data saved to MongoDB locally! ✓

## Step 8: Verify Data in MongoDB

### Using MongoDB Compass (GUI - Easiest)

1. Download from: https://www.mongodb.com/products/compass
2. Install and open it
3. Connect to: `mongodb://localhost:27017`
4. Look for database: `portfolio`
5. Collection: `contacts`
6. You'll see your form data!

### Using MongoDB Shell (CLI)

Open PowerShell and run:
```powershell
mongosh
```

Then:
```javascript
use portfolio
db.contacts.find()
```

You'll see all your contact submissions.

## Running Everything Together

**Quick Start Script:**

Create a file `run-local.bat` in your project:

```batch
@echo off
echo Starting MongoDB and Backend...
echo.
echo MongoDB should be running as a service.
echo If not, open another terminal and run: mongod
echo.
npm install
start cmd /k "npm start"
timeout /t 2
start cmd /k "npm run dev"
echo.
echo ✓ Backend: http://localhost:5000
echo ✓ Frontend: http://localhost:5173
echo ✓ MongoDB: mongodb://localhost:27017
pause
```

Double-click this file to start everything!

## Folder Structure

```
your-project/
├── server.js              ← Backend server
├── src/                   ← Frontend React code
├── package.json           ← Frontend + Backend dependencies
├── .env                   ← Environment variables (local)
├── node_modules/          ← All dependencies
└── MongoDB/               ← MongoDB data folder (created by MongoDB)
```

## File Locations (Windows)

- **MongoDB Data**: `C:\Program Files\MongoDB\Server\7.0\data\`
- **MongoDB Config**: `C:\Program Files\MongoDB\Server\7.0\mongod.cfg`
- **MongoDB Logs**: `C:\Program Files\MongoDB\Server\7.0\log\`

## Troubleshooting

### MongoDB Won't Start
```powershell
# Check if service is running
Get-Service MongoDB*

# Start service manually
Start-Service MongoDB

# Or start mongod manually
mongod
```

### Port Already in Use
If port 5000 is taken:
1. Find what's using it:
   ```powershell
   netstat -ano | findstr :5000
   ```
2. Kill the process or change PORT in `.env`

### MongoDB Connection Failed
1. Make sure MongoDB is running (check Services)
2. Check MongoDB is on port 27017
3. Run: `netstat -ano | findstr :27017`

### Data Not Saving
1. Check backend console for errors
2. Check MongoDB is running
3. Check browser console (F12) for network errors
4. Verify VITE_API_URL is set correctly in .env

## Development Workflow

```
┌─────────────────────────────────────────┐
│ Start MongoDB (runs as service)         │
│ mongod running on port 27017            │
└─────────────────────┬───────────────────┘
                      │
┌─────────────────────▼───────────────────┐
│ Start Backend Server                    │
│ npm start                               │
│ Server running on port 5000             │
└─────────────────────┬───────────────────┘
                      │
┌─────────────────────▼───────────────────┐
│ Start Frontend Dev Server               │
│ npm run dev                             │
│ Server running on port 5173             │
└─────────────────────┬───────────────────┘
                      │
┌─────────────────────▼───────────────────┐
│ Open http://localhost:5173              │
│ Fill contact form and submit            │
│ Data saved to local MongoDB!            │
└─────────────────────────────────────────┘
```

## No Deployment Needed!

All data stays on your computer:
- ✓ Frontend: Running locally
- ✓ Backend: Running locally  
- ✓ Database: Running locally
- ✓ No internet needed
- ✓ No deployment costs
- ✓ Perfect for development!

## When You're Ready to Deploy

Later, when you want to share online:
1. Deploy backend to Railway/Render
2. Deploy frontend to Netlify
3. Use cloud MongoDB (Atlas)
4. Update environment variables

But for now, keep it local and simple!

## Quick Commands

```powershell
# Start everything
npm run dev              # Frontend
npm start               # Backend (in different terminal)
mongod                  # MongoDB (if not running as service)

# Install dependencies
npm install

# Check MongoDB
mongosh                 # Open MongoDB shell
use portfolio           # Select database
db.contacts.find()      # View all contacts

# Check backend health
curl http://localhost:5000/api/health

# View logs
# Frontend: http://localhost:5173 (terminal 1)
# Backend: http://localhost:5000 (terminal 2)
```

That's it! No deployment headaches. Just local development! 🎉
