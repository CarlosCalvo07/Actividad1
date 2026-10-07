import { Router } from "express";

export const createDashboardRoutes = (
  dashboardController,
  authMiddleware
) => {
  const router = Router();

  router.get(
    "/",
    authMiddleware,
    dashboardController.get
  );

  return router;
};