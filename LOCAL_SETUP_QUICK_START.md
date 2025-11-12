# Local Development Quick Start

## YES! You Can Store Data Locally Without Deployment! ✓

### The Setup is Simple:
```
Your Computer
│
├── 🗄️ MongoDB (Local Database)
│   └── Stores contact form data on your PC
│
├── 🖥️ Backend Server (Node.js)
│   └── Runs on http://localhost:5000
│   └── Connects frontend to database
│
└── 🌐 Frontend (React)
    └── Runs on http://localhost:5173
    └── Shows your portfolio
```

---

## Step-by-Step Local Setup (15 minutes)

### 1️⃣ Install MongoDB (5 min)
- Download: https://www.mongodb.com/try/download/community
- Windows MSI installer (easiest)
- Click Next → Next → Install
- MongoDB runs as a Windows Service automatically

**Verify it's installed:**
```powershell
mongod --version
```

### 2️⃣ Start MongoDB
MongoDB is already installed and running as a service!

**Check it's running:**
```powershell
# Press Windows Key + R
# Type: services.msc
# Look for "MongoDB Server" → Should say "Running"
```

### 3️⃣ Backend Dependencies Already Installed!
I already ran `npm install` for you.

You now have:
- ✓ express (server framework)
- ✓ mongoose (MongoDB connector)
- ✓ cors (cross-origin support)
- ✓ dotenv (environment variables)

### 4️⃣ Start Backend Server

**Option A: Using the batch file (Easiest)**
1. Double-click: `start-backend.bat`
2. Window opens with backend running

**Option B: Using PowerShell**
```powershell
npm start
```

You should see:
```
✓ MongoDB connected successfully
✓ Server running on port 5000
```

**Keep this window open!**

### 5️⃣ Start Frontend

**Open a NEW terminal/PowerShell window:**
```powershell
npm run dev
```

You should see:
```
VITE v6.3.5 ready in 150 ms

➜  Local:   http://localhost:5173/
```

### 6️⃣ Test It!

1. Open: http://localhost:5173
2. Your portfolio loads ✓
3. Scroll to contact form
4. Fill in: Name, Email, Subject, Message
5. Click "Send Message"
6. You should see: **"Message Sent Successfully!"** ✓

### 7️⃣ Verify Data Saved

**Using MongoDB Compass (GUI - Easiest):**
1. Download: https://www.mongodb.com/products/compass
2. Install
3. Open Compass
4. Click "Connect"
5. You'll see database "portfolio"
6. Navigate to: portfolio → contacts
7. **Your form data is there!** ✓

**Using MongoDB Shell (CLI):**
```powershell
mongosh
```

Then:
```javascript
use portfolio
db.contacts.find()
```

You'll see your submitted data!

---

## File Structure Created

```
Your Project/
├── server.js              ← Backend server (Node.js + Express)
├── .env                   ← Environment variables
├── .env.example           ← Template for .env
├── package.json           ← Dependencies (backend + frontend)
├── node_modules/          ← All installed packages
├── src/                   ← React frontend code
├── start-backend.bat      ← Quick start script
└── LOCAL_MONGODB_SETUP.md ← Full setup guide
```

---

## Three Terminal Windows (One Time Setup)

```
Terminal 1: MongoDB (probably already running as service)
Terminal 2: Backend Server (npm start)
Terminal 3: Frontend Dev (npm run dev)
```

After setup, in future:
- Just double-click `start-backend.bat`
- Run `npm run dev` in a new terminal
- Open http://localhost:5173

---

## Troubleshooting

### "Port 5000 already in use"
```powershell
# Find what's using it
netstat -ano | findstr :5000

# Kill it (replace PID with the number shown)
taskkill /PID 1234 /F
```

### "Cannot find module 'express'"
```powershell
npm install
```

### "MongoDB connection failed"
1. Check Services (Windows Key + R → services.msc)
2. Look for "MongoDB Server"
3. If not running, right-click → Start

### "Form not saving"
1. Check that backend is running (http://localhost:5000/api/health)
2. Check browser console (F12) for errors
3. Check that .env has `VITE_API_URL=http://localhost:5000`
4. Reload page (Ctrl+F5)

---

## What's Happening Behind The Scenes

```
1. You fill form on http://localhost:5173
   ↓
2. Click "Send Message"
   ↓
3. Frontend sends data to http://localhost:5000/api/contact
   ↓
4. Backend receives data
   ↓
5. Backend saves to MongoDB (running on localhost:27017)
   ↓
6. You see success message ✓
   ↓
7. Email also sent via EmailJS (bonus!)
```

---

## Commands Cheat Sheet

```powershell
# Check if MongoDB is installed
mongod --version

# Start MongoDB from terminal (if not using service)
mongod

# Start backend server
npm start

# Start frontend
npm run dev

# Open MongoDB shell
mongosh

# Check what's using port 5000
netstat -ano | findstr :5000

# Install dependencies
npm install
```

---

## NO Deployment Needed Yet! ✓

Everything runs on your computer:
- ✓ No internet connection required
- ✓ No deployment hosting needed
- ✓ No costs
- ✓ All data stays private on your PC
- ✓ Perfect for development and testing

## When You're Ready to Deploy Later

Only then:
1. Install MongoDB Atlas (cloud)
2. Deploy backend to Railway/Render
3. Deploy frontend to Netlify
4. Update environment variables

But for now, **keep it local and simple!** 🎉

---

## Next Steps

1. ✅ Install MongoDB Community Edition
2. ✅ Run `npm start` (backend)
3. ✅ Run `npm run dev` (frontend)
4. ✅ Test contact form at http://localhost:5173
5. ✅ Check data in MongoDB Compass

**That's it! You're done!** 🚀
