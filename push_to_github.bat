@echo off
echo Saving your website changes and pushing to GitHub...
cd /d "%~dp0"
git add .
git commit -m "feat: added WhatsApp redirect for services"
git push origin main
pause