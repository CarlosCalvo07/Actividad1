#!/bin/bash

set -e

echo "======================================"
echo " Instalando Backend - Actividad 1"
echo "======================================"

sudo apt update

sudo apt install -y \
  git \
  curl

echo "Instalando Node.js..."

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

sudo apt install -y nodejs

echo "Versiones instaladas:"
node --version
npm --version

echo "Creando directorio de la aplicación..."

sudo mkdir -p /opt/actividad1/backend

sudo chown -R $USER:$USER /opt/actividad1

echo "======================================"
echo " Backend preparado correctamente"
echo "======================================"
echo ""
echo "Directorio:"
echo "/opt/actividad1/backend"
echo ""
echo "Puerto esperado del Backend:"
echo "3000"