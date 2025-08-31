@echo off
echo =====================================================
echo    Aleksandar Jankovic Portfolio - Email Setup
echo =====================================================
echo.

echo [INFO] Provera email konfiguracije...
echo.

REM Proveri da li postoje environment varijable
if "%EMAIL_USERNAME%"=="" (
    echo [WARNING] EMAIL_USERNAME nije podešen!
    echo [INFO] Za email funkcionalnost, podesi sledeće environment varijable:
    echo.
    echo   EMAIL_USERNAME=tvoj-email@gmail.com
    echo   EMAIL_PASSWORD=tvoja-app-password
    echo   ADMIN_EMAIL=tvoj-email@gmail.com  
    echo   ADMIN_NAME=Tvoje Ime
    echo.
    echo [INFO] Više informacija u: backend\email-setup-instructions.md
    echo.
    echo [INFO] Aplikacija će se pokrenuti bez email funkcionalnosti...
    timeout /t 5 /nobreak
) else (
    echo [SUCCESS] Email konfiguracija je pronađena!
    echo [INFO] Admin Email: %ADMIN_EMAIL%
    echo [INFO] SMTP Username: %EMAIL_USERNAME%
    echo.
)

echo [1] Pokretanje Spring Boot aplikacije...
cd backend
start "Portfolio Backend (with Email)" cmd /k "mvn spring-boot:run -Dspring-boot.run.profiles=prod"

echo [2] Čekanje da se backend pokrene...
timeout /t 10 /nobreak

echo [3] Otvaranje portfolio sajta...
cd ../frontend
start "" "http://localhost:8080"
start "" index.html

echo.
echo Portfolio je uspešno pokrenut!
echo Backend: http://localhost:8080
echo Frontend: Otvoren u browser-u
echo.

if not "%EMAIL_USERNAME%"=="" (
    echo [EMAIL] Email notifikacije su UKLJUČENE
    echo [EMAIL] Admin prima notifikacije na: %ADMIN_EMAIL%
) else (
    echo [EMAIL] Email notifikacije su ISKLJUČENE
    echo [EMAIL] Za uključivanje, pogledaj: backend\email-setup-instructions.md
)

echo.
echo Za gašenje aplikacije zatvorite sve Command Prompt prozore.
echo.
pause
