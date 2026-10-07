# Reporte técnico
## Actividad 1 - Implementación de una aplicación web segura bajo un enfoque Zero Trust en AWS

### 1. Introducción

En esta actividad se implementó una aplicación web distribuida utilizando servicios de Amazon Web Services (AWS), aplicando principios de seguridad basados en el modelo Zero Trust.

La solución está compuesta por un Frontend desarrollado con React y un Backend desarrollado con Node.js y Express. Ambos componentes se encuentran separados en redes virtuales independientes y se comunican mediante VPC Peering.

La arquitectura fue diseñada considerando autenticación, autorización, segmentación de red, mínimo privilegio, cifrado de comunicaciones y validación continua de las solicitudes.

---

### 2. Objetivo

Implementar una aplicación web segura en AWS que permita autenticar usuarios mediante credenciales y JWT, protegiendo los recursos del sistema mediante controles de seguridad de red y aplicación bajo un enfoque Zero Trust.

---

### 3. Arquitectura de infraestructura

La solución utiliza dos VPC independientes:

- VPC Frontend: `10.0.0.0/18`
- VPC Backend: `10.1.0.0/18`

La VPC Frontend contiene la instancia EC2 encargada de ejecutar el Frontend React mediante Nginx.

La VPC Backend contiene la instancia EC2 encargada de ejecutar la API desarrollada con Node.js y Express.

La comunicación entre ambas redes se realiza mediante VPC Peering y rutas privadas.

El Backend no se expone públicamente para las solicitudes de la aplicación. Las peticiones son recibidas por Nginx en el servidor Frontend y reenviadas hacia la dirección IP privada del Backend.

---

### 4. Arquitectura del Frontend

El Frontend fue desarrollado utilizando React y una arquitectura basada en componentes.

La aplicación se divide en:

- Components: componentes reutilizables.
- Pages: vistas principales de la aplicación.
- Context: administración del estado de autenticación.
- Services: comunicación con la API.
- Styles: estilos generales de la aplicación.

Las principales vistas implementadas son:

- Inicio de sesión.
- Dashboard protegido.

El acceso al Dashboard requiere que el usuario se encuentre autenticado.

---

### 5. Arquitectura del Backend

El Backend fue desarrollado con Node.js y Express aplicando separación de responsabilidades.

La estructura utilizada se divide en:

- Domain: entidades y contratos del dominio.
- Application: casos de uso y lógica de negocio.
- Infrastructure: mecanismos externos como JWT, bcrypt y repositorios.
- Interfaces: controladores, rutas y middleware.
- Config: configuración mediante variables de entorno.

Esta separación permite mantener desacoplada la lógica de negocio respecto de la infraestructura utilizada.

---

### 6. Autenticación mediante JWT

El usuario inicia sesión utilizando un nombre de usuario y una contraseña.

El Backend valida las credenciales y, cuando son correctas, genera un JSON Web Token (JWT).

El token debe enviarse posteriormente mediante el encabezado:

```text
Authorization: Bearer <TOKEN_JWT>