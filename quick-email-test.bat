@echo off
echo ========================================
echo    QUICK EMAIL TEST
echo ========================================
echo.

echo Podesi sledeće environment varijable PRE pokretanja:
echo.
echo $env:EMAIL_USERNAME="tvoj-gmail@gmail.com"
echo $env:EMAIL_PASSWORD="tvoja-16-karaktera-app-password"
echo $env:ADMIN_EMAIL="tvoj-gmail@gmail.com"
echo $env:ADMIN_NAME="Aleksandar Jankovic"
echo.

echo [1] Proveravamo environment varijable...
if "%EMAIL_USERNAME%"=="" (
    echo ❌ EMAIL_USERNAME nije podešen!
    echo.
    echo REŠENJE: Otvori PowerShell kao Administrator i pokreni:
    echo $env:EMAIL_USERNAME="tvoj-email@gmail.com"
    echo $env:EMAIL_PASSWORD="tvoja-app-password"
    echo $env:ADMIN_EMAIL="tvoj-email@gmail.com"
    echo $env:ADMIN_NAME="Aleksandar Jankovic"
    echo.
    echo Zatim pokreni ovaj script ponovo.
    pause
    exit /b 1
)

echo ✅ EMAIL_USERNAME: %EMAIL_USERNAME%
echo ✅ EMAIL_PASSWORD: ****** (skriveno)
echo ✅ ADMIN_EMAIL: %ADMIN_EMAIL%
echo ✅ ADMIN_NAME: %ADMIN_NAME%
echo.

echo [2] Kompajliranje backend-a...
cd backend
mvn clean compile -q
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Greška kompajliranja!
    pause
    exit /b 1
)

echo [3] Pokretanje aplikacije...
echo (Otvoriće se novi prozor sa backend-om)
start "Email Test Backend - GLEDAJ LOGS!" cmd /k "mvn spring-boot:run"

echo [4] Čekanje da se aplikacija pokrene...
timeout /t 15 /nobreak

echo [5] Otvaranje test stranice...
cd ../frontend
start "" "http://localhost:8080"

echo.
echo ========================================
echo    TEST INSTRUKCIJE
echo ========================================
echo.
echo 1. Otvoriće se browser sa contact formom
echo 2. Popuni formu sa test podacima
echo 3. Klikni "Pošalji poruku"
echo 4. GLEDAJ backend konzolu za detaljne logs!
echo 5. Ako ima greške, kopiraj ih i pošalji mi
echo.
echo Backend konzola je otvorena u novom prozoru!
echo Gledaj tu za sve email greške i debug info.
echo.
pause
