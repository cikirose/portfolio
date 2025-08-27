@echo off
echo =====================================================
echo    Aleksandar Jankovic Portfolio - Pokretanje
echo =====================================================
echo.

echo [1] Pokretanje Spring Boot aplikacije...
cd backend
start "Portfolio Backend" cmd /k "mvn spring-boot:run -Dspring-boot.run.profiles=prod"

echo [2] Cekanje da se backend pokrene...
timeout /t 10 /nobreak

echo [3] Otvaranje portfolio sajta...
cd ../frontend
start "" "http://localhost:8080"
start "" index.html

echo.
echo Portfolio je uspesno pokrenut!
echo Backend: http://localhost:8080
echo Frontend: Otvoren u browser-u
echo.
echo Za gasenje aplikacije zatvorite sve Command Prompt prozore.
echo.
pause
