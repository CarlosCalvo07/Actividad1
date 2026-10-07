# Actividad 1 - Aplicación Web Segura Zero Trust en AWS

Proyecto desarrollado para la Actividad 1 del Diplomado en Ciberseguridad.

La solución implementa una aplicación web distribuida en AWS utilizando una arquitectura separada para Frontend y Backend, autenticación mediante JWT, comunicación privada entre VPC y controles de seguridad basados en el enfoque Zero Trust.

---

## Tecnologías utilizadas

### Frontend

- React
- Vite
- React Router
- Nginx

### Backend

- Node.js
- Express
- JWT
- bcrypt
- Helmet
- CORS

### AWS

- Amazon VPC
- Amazon EC2
- VPC Peering
- Security Groups
- Route Tables

### Seguridad

- HTTPS
- Certbot
- JWT
- bcrypt
- Fail2Ban
- Security Headers
- Principio de mínimo privilegio
- Segmentación de red
- Zero Trust

---

## Arquitectura de red

La infraestructura utiliza dos VPC independientes:

```text
VPC Frontend
10.0.0.0/18

        |
        | VPC Peering
        |

VPC Backend
10.1.0.0/18