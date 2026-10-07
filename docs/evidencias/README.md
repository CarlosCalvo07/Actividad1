# Evidencias de implementación

En esta carpeta se documentarán las capturas de pantalla utilizadas como evidencia de la práctica.

Cada evidencia deberá incluir:

- Número de evidencia.
- Nombre de la evidencia.
- Descripción.
- Configuración realizada.
- Resultado obtenido.
- Captura de pantalla correspondiente.

---

## Evidencia 01 - Creación de VPC Frontend

**Descripción:**  
Se demuestra la creación de la VPC destinada al Frontend.

**Configuración:**  
Red utilizada: `10.0.0.0/18`.

**Resultado:**  
La VPC fue creada correctamente en AWS.

---

## Evidencia 02 - Creación de VPC Backend

**Descripción:**  
Se demuestra la creación de la VPC destinada al Backend.

**Configuración:**  
Red utilizada: `10.1.0.0/18`.

**Resultado:**  
La VPC fue creada correctamente en AWS.

---

## Evidencia 03 - VPC Peering

**Descripción:**  
Se demuestra la conexión entre la VPC Frontend y la VPC Backend mediante VPC Peering.

**Resultado:**  
El estado de la conexión de Peering se encuentra activo.

---

## Evidencia 04 - Tablas de rutas

**Descripción:**  
Se demuestra la configuración de las rutas necesarias para permitir la comunicación privada entre ambas VPC.

**Resultado:**  
Las VPC pueden comunicarse mediante sus rangos privados.

---

## Evidencia 05 - Security Groups

**Descripción:**  
Se demuestra la aplicación del principio de mínimo privilegio mediante Security Groups.

**Resultado:**  
Solo se encuentran habilitados los puertos, protocolos y orígenes necesarios.

---

## Evidencia 06 - EC2 Frontend

**Descripción:**  
Se demuestra la instancia destinada al Frontend.

**Resultado:**  
La instancia ejecuta React mediante Nginx.

---

## Evidencia 07 - EC2 Backend

**Descripción:**  
Se demuestra la instancia destinada al Backend.

**Resultado:**  
La instancia ejecuta Node.js y Express en el puerto 3000.

---

## Evidencia 08 - Comunicación privada entre VPC

**Descripción:**  
Se demuestra la conectividad entre la instancia Frontend y la instancia Backend mediante direcciones IP privadas.

**Resultado:**  
La comunicación entre ambas redes funciona mediante VPC Peering.

---

## Evidencia 09 - Pantalla de Login

**Descripción:**  
Se demuestra la interfaz de inicio de sesión desarrollada con React.

**Resultado:**  
El usuario puede ingresar sus credenciales para autenticarse.

---

## Evidencia 10 - Autenticación JWT

**Descripción:**  
Se demuestra que el Backend genera un token JWT después de validar correctamente las credenciales.

**Resultado:**  
El usuario autenticado obtiene un JWT válido.

---

## Evidencia 11 - Dashboard protegido

**Descripción:**  
Se demuestra que el Dashboard solamente puede consultarse utilizando un JWT válido.

**Resultado:**  
El Backend permite el acceso al recurso protegido únicamente a usuarios autenticados.

---

## Evidencia 12 - HTTPS

**Descripción:**  
Se demuestra el acceso seguro a la aplicación mediante HTTPS.

**Configuración:**  
Certificado digital administrado mediante Certbot.

**Resultado:**  
La comunicación entre el navegador y el servidor se encuentra cifrada.

---

## Evidencia 13 - Fail2Ban

**Descripción:**  
Se demuestra la detección de múltiples intentos fallidos de autenticación.

**Configuración:**  
Fail2Ban bloquea temporalmente una dirección IP después de superar el número máximo de intentos configurado.

**Resultado:**  
La dirección IP utilizada para realizar intentos repetidos es bloqueada temporalmente.

---

## Evidencia 14 - SecurityHeaders.com

**Descripción:**  
Se demuestra el análisis de los encabezados HTTP de seguridad de la aplicación.

**Resultado:**  
La aplicación cuenta con encabezados de seguridad configurados mediante Nginx y Helmet.

---

## Evidencia 15 - Aplicación funcionando

**Descripción:**  
Se demuestra el funcionamiento completo de la solución.

**Resultado:**  
El usuario puede acceder mediante HTTPS, autenticarse, recibir un JWT y consultar el Dashboard protegido.