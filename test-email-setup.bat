@echo off
echo ========================================
echo    Email Setup Test
echo ========================================
echo.

echo [1] Provera email environment varijabli...
if "%EMAIL_USERNAME%"=="" (
    echo ❌ EMAIL_USERNAME nije podešen!
    set EMAIL_ERROR=1
) else (
    echo ✅ EMAIL_USERNAME: %EMAIL_USERNAME%
)

if "%EMAIL_PASSWORD%"=="" (
    echo ❌ EMAIL_PASSWORD nije podešen!
    set EMAIL_ERROR=1
) else (
    echo ✅ EMAIL_PASSWORD: ****** (skriveno)
)

if "%ADMIN_EMAIL%"=="" (
    echo ❌ ADMIN_EMAIL nije podešen!
    set EMAIL_ERROR=1
) else (
    echo ✅ ADMIN_EMAIL: %ADMIN_EMAIL%
)

if "%ADMIN_NAME%"=="" (
    echo ❌ ADMIN_NAME nije podešen!
    set EMAIL_ERROR=1
) else (
    echo ✅ ADMIN_NAME: %ADMIN_NAME%
)

echo.

if defined EMAIL_ERROR (
    echo ❌ GREŠKA: Email konfiguracija nije kompletna!
    echo.
    echo Za podešavanje:
    echo 1. Otvori PowerShell kao Administrator
    echo 2. Pokreni sledeće komande:
    echo.
    echo $env:EMAIL_USERNAME="tvoj-email@gmail.com"
    echo $env:EMAIL_PASSWORD="tvoja-app-password"
    echo $env:ADMIN_EMAIL="tvoj-email@gmail.com"
    echo $env:ADMIN_NAME="Tvoje Ime"
    echo.
    echo 3. Više instrukcija: backend\email-setup-instructions.md
    echo.
    pause
    exit /b 1
)

echo [2] Pokretanje aplikacije za test...
cd backend
echo Kompajliranje...
mvn clean compile -q
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Greška kompajliranja!
    pause
    exit /b 1
)

echo.
echo [3] Pokretanje Spring Boot aplikacije...
echo (Aplikacija će se pokrenuti za ~15 sekundi)
start "Email Test Backend" cmd /c "mvn spring-boot:run -Dspring-boot.run.profiles=prod"

echo.
echo [4] Čekanje da se aplikacija pokrene...
timeout /t 15 /nobreak

echo.
echo [5] Testiranje email funkcionalnosti...
echo.
echo INSTRUKCIJE ZA TEST:
echo 1. Otvoriće se browser sa contact formom
echo 2. Popuni formu sa test podacima
echo 3. Klikni "Pošalji poruku"
echo 4. Proveri email inbox za:
echo    - Notifikaciju na admin email (%ADMIN_EMAIL%)
echo    - Auto-reply na email koji si uneo u formu
echo.

cd ../frontend
start "" "http://localhost:8080"

echo.
echo ========================================
echo    Email Test Instructions
echo ========================================
echo.
echo ✅ Aplikacija je pokrenuta
echo 📧 Admin email: %ADMIN_EMAIL%
echo 🌐 Test forma: http://localhost:8080
echo.
echo Za zatvaranje testa:
echo - Zatvori "Email Test Backend" prozor
echo.
pause
