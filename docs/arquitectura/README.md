# Arquitectura de la solución

## Descripción general

La solución implementa una aplicación web distribuida en AWS bajo un enfoque Zero Trust.

La infraestructura se divide en dos VPC independientes:

- VPC Frontend: `10.0.0.0/18`
- VPC Backend: `10.1.0.0/18`

Ambas VPC se comunican mediante VPC Peering.

## Arquitectura general

```text
                         INTERNET
                             |
                         HTTPS :443
                             |
                             v
                  +----------------------+
                  |     VPC FRONTEND     |
                  |     10.0.0.0/18      |
                  |                      |
                  |      EC2 Frontend    |
                  |   React + Nginx      |
                  |   Certbot + HTTPS    |
                  |   Fail2Ban           |
                  +----------+-----------+
                             |
                             |
                        VPC PEERING
                             |
                             |
                  +----------v-----------+
                  |      VPC BACKEND     |
                  |      10.1.0.0/18     |
                  |                      |
                  |       EC2 Backend    |
                  |   Node.js + Express  |
                  |   JWT + bcrypt       |
                  |   Puerto 3000        |
                  +----------------------+