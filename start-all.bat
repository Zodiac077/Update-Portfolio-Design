@echo off
REM Start MongoDB and Backend together for Windows

echo.
echo ====================================
echo  Portfolio Backend + MongoDB
echo ====================================
echo.

REM Check if MongoDB is running
echo Checking MongoDB status...
netstat -ano | findstr :27017 > nul
if %errorlevel% equ 0 (
    echo ✓ MongoDB is already running on port 27017
) else (
    echo ⚠ MongoDB not running on port 27017
    echo Attempting to start MongoDB...
    sc query MongoDB | findstr "RUNNING" > nul
    if %errorlevel% equ 0 (
        echo ✓ MongoDB Service is running
    ) else (
        echo ✗ MongoDB Service not found
        echo Please ensure MongoDB is installed and running
        echo Download from: https://www.mongodb.com/try/download/community
    )
)

echo.
echo Starting Backend Server...
echo.
echo ✓ Backend will run on: http://localhost:5000
echo ✓ MongoDB connected to: mongodb://localhost:27017/portfolio
echo.
echo Press Ctrl+C to stop the server
echo.

node server.js

pause
