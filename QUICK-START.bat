@echo off
echo ========================================
echo    ALEKSANDAR PORTFOLIO - QUICK START
echo ========================================
echo.

echo [1] Podešavanje email konfiguracije...
set EMAIL_USERNAME=aleksandarjankovic159@gmail.com
set EMAIL_PASSWORD=aaweazkdkfogfmbz
set ADMIN_EMAIL=aleksandarjankovic159@gmail.com
set ADMIN_NAME=Aleksandar Jankovic

echo [2] Pokretanje backend-a...
cd backend
start "Portfolio Backend" cmd /k "mvn spring-boot:run"

echo [3] Čekanje da se backend pokrene...
timeout /t 15 /nobreak

echo [4] Otvaranje portfolio-a...
cd ../docs/frontend
start "" index.html

echo.
echo ✅ Portfolio je pokrenut!
echo 📧 Email funkcionalnost je uključena
echo 🌐 Frontend: Otvoren u browser-u
echo 🔧 Backend: http://localhost:8080
echo.
echo Za gašenje zatvorite "Portfolio Backend" prozor.
pause
