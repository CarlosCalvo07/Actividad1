import { Router } from "express";

export const createAuthRoutes = (authController) => {
  const router = Router();

  router.post("/login", authController.login);

  return router;
};