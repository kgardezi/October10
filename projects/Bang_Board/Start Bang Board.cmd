@echo off
setlocal
cd /d "%~dp0"
set "BOARD_NODE=node"
where node >nul 2>nul
if errorlevel 1 set "BOARD_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "node_modules\vite\bin\vite.js" (
  echo Install dependencies first. See README.md.
  pause
  exit /b 1
)
echo Opening Bang Board at http://127.0.0.1:5173
echo Keep this window open. Press Ctrl+C to stop.
"%BOARD_NODE%" node_modules\vite\bin\vite.js --host 127.0.0.1 --port 5173 --strictPort --open
if errorlevel 1 pause
