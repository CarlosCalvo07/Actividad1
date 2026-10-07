# Pruebas de la solución

Este documento registra las pruebas realizadas para comprobar el funcionamiento de la aplicación y de la infraestructura desplegada en AWS.

---

## Prueba 01 - Conectividad entre VPC

**Objetivo:**  
Comprobar que existe comunicación privada entre la VPC Frontend y la VPC Backend.

**Procedimiento:**  
Desde la instancia EC2 Frontend se realizará una prueba de conectividad hacia la IP privada de la instancia EC2 Backend.

**Resultado esperado:**  
La instancia Frontend deberá poder comunicarse con el Backend mediante la red privada configurada a través de VPC Peering.

**Resultado obtenido:**  
Pendiente de ejecución en AWS.

---

## Prueba 02 - Estado del Backend

**Objetivo:**  
Comprobar que la API se encuentra disponible.

**Endpoint:**

```text
GET /api/health