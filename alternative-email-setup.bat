@echo off
echo ========================================
echo    ALTERNATIVNI EMAIL SETUP
echo ========================================
echo.

echo Ako ne možeš da generiš Gmail App Password, evo alternativa:
echo.

echo [OPCIJA 1] Outlook.com (PREPORUČENO - lakši setup)
echo.
echo 1. Kreiraj novi Outlook.com nalog (ili koristi postojeći)
echo 2. Podesi environment varijable:
echo.
echo $env:EMAIL_USERNAME="tvoj-outlook@outlook.com"
echo $env:EMAIL_PASSWORD="tvoja-obična-outlook-šifra"
echo $env:ADMIN_EMAIL="tvoj-outlook@outlook.com"
echo $env:ADMIN_NAME="Aleksandar Jankovic"
echo.
echo 3. Promeni SMTP podešavanja u application.properties:
echo    spring.mail.host=smtp-mail.outlook.com
echo    spring.mail.port=587
echo.

echo [OPCIJA 2] Gmail sa OAuth2 (kompleksnije)
echo.
echo [OPCIJA 3] SendGrid (besplatno 100 email-ova dnevno)
echo.
echo [OPCIJA 4] Privremeno isključi email funkcionalnost
echo.

echo ========================================
echo Koju opciju želiš da probamo?
echo ========================================
echo.
echo 1 - Outlook.com setup (najlakše)
echo 2 - Gmail OAuth2 setup  
echo 3 - SendGrid setup
echo 4 - Isključi email privremeno
echo.

set /p choice="Unesi broj (1-4): "

if "%choice%"=="1" goto outlook_setup
if "%choice%"=="2" goto gmail_oauth
if "%choice%"=="3" goto sendgrid_setup
if "%choice%"=="4" goto disable_email

:outlook_setup
echo.
echo ========================================
echo    OUTLOOK.COM SETUP
echo ========================================
echo.
echo 1. Kreiraj novi Outlook.com nalog na: https://outlook.com
echo 2. Zapamti email i šifru
echo 3. Pokreni sledeće komande u PowerShell:
echo.
echo $env:EMAIL_USERNAME="tvoj-outlook@outlook.com"
echo $env:EMAIL_PASSWORD="tvoja-outlook-šifra"
echo $env:ADMIN_EMAIL="tvoj-outlook@outlook.com"
echo $env:ADMIN_NAME="Aleksandar Jankovic"
echo.
echo 4. Menja ću application.properties za Outlook SMTP
pause
goto end

:gmail_oauth
echo.
echo OAuth2 setup je kompleksan. Preporučujem Outlook opciju.
pause
goto end

:sendgrid_setup
echo.
echo SendGrid setup takođe kompleksan. Preporučujem Outlook opciju.
pause
goto end

:disable_email
echo.
echo OK, menjam kod da ne šalje email-ove privremeno.
pause
goto end

:end
echo.
echo Za pomoć oko implementacije, kaži mi koju opciju si izabrao!
pause
