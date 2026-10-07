import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "cambiar-este-secreto",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173"
};