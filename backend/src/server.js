import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";

import { InMemoryUserRepository } from "./infrastructure/repositories/InMemoryUserRepository.js";
import { PasswordService } from "./infrastructure/security/PasswordService.js";
import { JwtService } from "./infrastructure/security/JwtService.js";

import { LoginUser } from "./application/usecases/LoginUser.js";
import { GetDashboard } from "./application/usecases/GetDashboard.js";

import { AuthController } from "./interfaces/controllers/AuthController.js";
import { DashboardController } from "./interfaces/controllers/DashboardController.js";

import { authMiddleware } from "./interfaces/middleware/authMiddleware.js";
import { loginLogger } from "./interfaces/middleware/loginLogger.js";
import { errorHandler } from "./interfaces/middleware/errorHandler.js";

import { createAuthRoutes } from "./interfaces/routes/authRoutes.js";
import { createDashboardRoutes } from "./interfaces/routes/dashboardRoutes.js";

const app = express();

/*
 * Seguridad básica
 */
app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use(helmet());

app.use(
  cors({
    origin: env.frontendUrl,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json({ limit: "10kb" }));

/*
 * Registro de intentos de autenticación.
 * Después utilizaremos estos logs con Fail2Ban.
 */
app.use(loginLogger);

/*
 * Dependencias
 */
const userRepository = new InMemoryUserRepository();
const passwordService = new PasswordService();
const jwtService = new JwtService(
  env.jwtSecret,
  env.jwtExpiresIn
);

/*
 * Casos de uso
 */
const loginUser = new LoginUser(
  userRepository,
  passwordService,
  jwtService
);

const getDashboard = new GetDashboard();

/*
 * Controladores
 */
const authController = new AuthController(loginUser);

const dashboardController = new DashboardController(
  getDashboard
);

/*
 * Middleware JWT
 */
const protectRoute = authMiddleware(jwtService);

/*
 * Ruta pública para comprobar que el Backend funciona.
 */
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend funcionando correctamente"
  });
});

/*
 * Rutas
 */
app.use(
  "/api/auth",
  createAuthRoutes(authController)
);

app.use(
  "/api/dashboard",
  createDashboardRoutes(
    dashboardController,
    protectRoute
  )
);

/*
 * Ruta no encontrada
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada"
  });
});

/*
 * Manejo centralizado de errores
 */
app.use(errorHandler);

/*
 * Inicio del servidor
 */
app.listen(env.port, "0.0.0.0", () => {
  console.log(
    `Backend ejecutándose en http://0.0.0.0:${env.port}`
  );
});