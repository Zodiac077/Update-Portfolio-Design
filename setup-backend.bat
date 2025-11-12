@echo off
REM Backend Setup Script for Windows

echo ========================================
echo MongoDB Portfolio Backend Setup
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Checking MongoDB connection...
call npm run server:dev

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Backend is running on: http://localhost:5000
echo MongoDB Connection: mongodb://localhost:27017/portfolio
echo.
echo Press Ctrl+C to stop the server
echo.
pause
