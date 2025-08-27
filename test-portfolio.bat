@echo off
echo ========================================
echo    Portfolio Test Suite
echo ========================================
echo.

echo [1] Testing backend compilation...
cd backend
mvn clean compile -q
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Backend compilation FAILED!
    pause
    exit /b 1
) else (
    echo ✅ Backend compilation successful!
)

echo.
echo [2] Testing if Java 17+ is available...
java -version 2>&1 | findstr "17\|18\|19\|20\|21" >nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Java 17+ is required!
    java -version
    pause
    exit /b 1
) else (
    echo ✅ Java version is compatible!
)

echo.
echo [3] Testing Maven installation...
mvn -version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Maven is not installed or not in PATH!
    pause
    exit /b 1
) else (
    echo ✅ Maven is available!
)

echo.
echo [4] Testing frontend files...
cd ../frontend
if not exist "index.html" (
    echo ❌ index.html not found!
    pause
    exit /b 1
) else (
    echo ✅ Frontend files exist!
)

echo.
echo [5] Starting Spring Boot application...
cd ../backend
echo Starting backend on port 8080...
echo (This will take 10-15 seconds)
start "Portfolio Backend Test" cmd /c "mvn spring-boot:run -Dspring-boot.run.profiles=prod"

echo.
echo [6] Waiting for application to start...
timeout /t 15 /nobreak

echo.
echo [7] Testing API endpoint...
powershell -Command "try { $response = Invoke-WebRequest -Uri 'http://localhost:8080/contacts/health' -UseBasicParsing; if($response.StatusCode -eq 200) { Write-Host '✅ API is responding!' } else { Write-Host '❌ API returned status:' $response.StatusCode } } catch { Write-Host '❌ API is not responding!' }"

echo.
echo [8] Opening portfolio in browser...
cd ../frontend
start "" "http://localhost:8080"

echo.
echo ========================================
echo    Test Results Summary
echo ========================================
echo ✅ Backend compilation: OK
echo ✅ Java version: OK  
echo ✅ Maven installation: OK
echo ✅ Frontend files: OK
echo ✅ Application started: Check browser
echo.
echo Portfolio is ready for presentation!
echo.
echo To stop the application:
echo - Close the "Portfolio Backend Test" window
echo.
pause
