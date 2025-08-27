#!/bin/bash

echo "====================================================="
echo "    Aleksandar Jankovic Portfolio - Pokretanje"
echo "====================================================="
echo

echo "[1] Pokretanje Spring Boot aplikacije..."
cd backend
gnome-terminal -- bash -c "mvn spring-boot:run -Dspring-boot.run.profiles=prod; exec bash" &

echo "[2] Cekanje da se backend pokrene..."
sleep 10

echo "[3] Otvaranje portfolio sajta..."
cd ../frontend

# Za Linux
if command -v xdg-open > /dev/null; then
    xdg-open "http://localhost:8080"
    xdg-open "index.html"
fi

# Za macOS
if command -v open > /dev/null; then
    open "http://localhost:8080"
    open "index.html"
fi

echo
echo "Portfolio je uspesno pokrenut!"
echo "Backend: http://localhost:8080"
echo "Frontend: Otvoren u browser-u"
echo
echo "Za gasenje aplikacije zatvorite terminal sa Spring Boot aplikacijom."
