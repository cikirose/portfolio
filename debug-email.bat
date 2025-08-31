@echo off
echo ========================================
echo    EMAIL DEBUG - Dijagnostika
echo ========================================
echo.

echo [1] Proveravamo environment varijable...
echo.

if "%EMAIL_USERNAME%"=="" (
    echo ❌ EMAIL_USERNAME: NIJE PODEŠEN
    echo   Rešenje: set EMAIL_USERNAME=tvoj-email@gmail.com
) else (
    echo ✅ EMAIL_USERNAME: %EMAIL_USERNAME%
)

if "%EMAIL_PASSWORD%"=="" (
    echo ❌ EMAIL_PASSWORD: NIJE PODEŠEN
    echo   Rešenje: set EMAIL_PASSWORD=tvoja-app-password
) else (
    echo ✅ EMAIL_PASSWORD: ****** (16 karaktera skriveno)
)

if "%ADMIN_EMAIL%"=="" (
    echo ❌ ADMIN_EMAIL: NIJE PODEŠEN
    echo   Rešenje: set ADMIN_EMAIL=tvoj-email@gmail.com
) else (
    echo ✅ ADMIN_EMAIL: %ADMIN_EMAIL%
)

if "%ADMIN_NAME%"=="" (
    echo ❌ ADMIN_NAME: NIJE PODEŠEN
    echo   Rešenje: set ADMIN_NAME=Tvoje Ime
) else (
    echo ✅ ADMIN_NAME: %ADMIN_NAME%
)

echo.
echo [2] Najčešći problemi i rešenja:
echo.
echo PROBLEM 1: Environment varijable nisu podešene
echo REŠENJE: Otvori PowerShell kao Administrator i pokreni:
echo   $env:EMAIL_USERNAME="tvoj-email@gmail.com"
echo   $env:EMAIL_PASSWORD="tvoja-16-karaktera-app-password"
echo   $env:ADMIN_EMAIL="tvoj-email@gmail.com"
echo   $env:ADMIN_NAME="Aleksandar Jankovic"
echo.
echo PROBLEM 2: Koristiš običnu Gmail šifru umesto App Password
echo REŠENJE: 
echo   1. Idi na Gmail → Upravljaj Google nalogom
echo   2. Bezbednost → 2-stepna verifikacija (UKLJUČI)
echo   3. Bezbednost → Aplikacijska lozinka → Generiši
echo   4. Kopiraj 16-karakternu šifru u EMAIL_PASSWORD
echo.
echo PROBLEM 3: Firewall ili antivirus blokira SMTP
echo REŠENJE: Dodaj izuzetak za port 587 ili isključi firewall privremeno
echo.
echo PROBLEM 4: Gmail account nema omogućenu 2-stepnu verifikaciju
echo REŠENJE: Moraš uključiti 2-Step Verification u Gmail-u
echo.

echo [3] Quick Fix komande:
echo.
echo Za Windows Command Prompt:
echo set EMAIL_USERNAME=tvoj-email@gmail.com
echo set EMAIL_PASSWORD=tvoja-app-password
echo set ADMIN_EMAIL=tvoj-email@gmail.com
echo set ADMIN_NAME=Aleksandar Jankovic
echo mvn spring-boot:run
echo.
echo Za PowerShell:
echo $env:EMAIL_USERNAME="tvoj-email@gmail.com"
echo $env:EMAIL_PASSWORD="tvoja-app-password"
echo $env:ADMIN_EMAIL="tvoj-email@gmail.com"
echo $env:ADMIN_NAME="Aleksandar Jankovic"
echo mvn spring-boot:run
echo.

echo ========================================
echo Kopiraj komande iznad i pokreni!
echo ========================================
pause
