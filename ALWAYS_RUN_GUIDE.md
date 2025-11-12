# Always Run MongoDB + Backend with npm start

## 🎯 You Now Have Multiple Options!

### Option 1: MongoDB Already Running (Recommended)
If MongoDB is running as a Windows Service (automatic), just:

```powershell
npm start
```

This starts ONLY the backend server on http://localhost:5000

Then in a new terminal:
```powershell
npm run dev
```

This starts the frontend on http://localhost:5173

---

### Option 2: One Command - Run Everything Together
```powershell
npm run dev-all
```

This runs:
- ✓ Backend server (port 5000)
- ✓ Frontend dev server (port 5173)

**Note**: MongoDB must already be running as a service

---

### Option 3: Double-Click Batch File
Double-click: `start-all.bat`

This:
- ✓ Checks if MongoDB is running
- ✓ Starts backend server
- ✓ Shows helpful messages

---

## 🔄 Recommended Daily Workflow

### Step 1: Ensure MongoDB is Running
MongoDB should auto-start as a Windows Service on startup.

**Check if it's running:**
```powershell
# Open Services (Windows Key + R → services.msc)
# Look for "MongoDB Server" → Should say "Running"
```

Or check from PowerShell:
```powershell
netstat -ano | findstr :27017
```

If running, you'll see the port is in use. ✓

### Step 2: Start Backend + Frontend
Choose ONE of these:

**Option A: Two terminals (Most flexible)**
```powershell
# Terminal 1
npm start

# Terminal 2
npm run dev
```

**Option B: One terminal (Both at once)**
```powershell
npm run dev-all
```

**Option C: Batch file (Easiest for beginners)**
- Double-click `start-all.bat`

---

## 📊 What Each Command Does

| Command | What Runs | Terminal Count |
|---------|-----------|-----------------|
| `npm start` | Backend only | 1 |
| `npm run dev` | Frontend only | 1 |
| `npm run dev-all` | Backend + Frontend | 1 (both) |
| Double-click `start-all.bat` | Backend (checks MongoDB) | 1 |

---

## ✅ Everything Runs Automatically

Once started:
- ✓ MongoDB: Running on port 27017
- ✓ Backend: Running on port 5000
- ✓ Frontend: Running on port 5173
- ✓ All connected and working

Just visit: http://localhost:5173

---

## 🔍 Monitor What's Running

### Check Backend Health
```powershell
curl http://localhost:5000/api/health
```

Should return:
```json
{
  "success": true,
  "message": "Server is running",
  "mongodb": "connected"
}
```

### Check if Ports Are in Use
```powershell
# MongoDB port
netstat -ano | findstr :27017

# Backend port
netstat -ano | findstr :5000

# Frontend port
netstat -ano | findstr :5173
```

---

## 🛑 Stop Everything

### Stop Backend
- Press `Ctrl + C` in the backend terminal

### Stop Frontend
- Press `Ctrl + C` in the frontend terminal

### Stop MongoDB
- Goes to "Stop MongoDB Server" in Services (optional)
- Or it will stop when you restart your computer

---

## 🔧 Troubleshooting

### Port Already in Use
If you get "port X is already in use":

```powershell
# Find what's using the port (example: port 5000)
netstat -ano | findstr :5000

# Kill the process (replace PID with number)
taskkill /PID 1234 /F
```

### MongoDB Not Connecting
```powershell
# Check if MongoDB service is running
Get-Service MongoDB*

# If not running, start it
Start-Service MongoDB
```

### Changes Not Showing on Frontend
- Clear browser cache: `Ctrl + Shift + Delete`
- Hard refresh: `Ctrl + Shift + R`
- Or restart both servers

---

## 📝 Setup Summary

Your current setup:

```
✓ MongoDB: Auto-starts as Windows Service
✓ Backend: Starts with npm start
✓ Frontend: Starts with npm run dev
✓ All connected and working
```

**Everything is ready to use!**

---

## 🎯 Quick Start From Now On

### Every time you want to develop:

**Option 1 (Recommended - Two terminals):**
```powershell
# Terminal 1
npm start

# Terminal 2
npm run dev
```

**Option 2 (Quick - One command):**
```powershell
npm run dev-all
```

**Option 3 (Easiest - No typing):**
- Double-click `start-all.bat`

---

## 🚀 You're All Set!

MongoDB + Backend + Frontend all configured and ready to run!

Just use one of the three methods above whenever you want to develop. ✓

Any questions? Just ask!
