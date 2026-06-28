@echo off
title Auto-Printer - Arena Pizza Kebab
echo ========================================
echo   ARENA PIZZA KEBAB - Impression Auto
echo ========================================
echo.
echo Demarrage du systeme d'impression...
echo Appuyez sur Ctrl+C pour arreter
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0auto-printer.ps1"
pause
