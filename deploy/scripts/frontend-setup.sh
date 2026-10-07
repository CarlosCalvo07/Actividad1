#!/bin/bash

set -e

echo "======================================"
echo " Instalando Frontend - Actividad 1"
echo "======================================"

sudo apt update

sudo apt install -y \
  nginx \
  git \
  curl \
  fail2ban \
  certbot \
  python3-certbot-nginx

echo "Instalando Node.js..."

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

sudo apt install -y nodejs

echo "Versiones instaladas:"
node --version
npm --version
nginx -v

echo "Creando directorio del Frontend..."

sudo mkdir -p /var/www/actividad1

sudo chown -R $USER:$USER /var/www/actividad1

echo "Habilitando servicios..."

sudo systemctl enable nginx
sudo systemctl enable fail2ban

sudo systemctl restart nginx
sudo systemctl restart fail2ban

echo "======================================"
echo " Frontend preparado correctamente"
echo "======================================"