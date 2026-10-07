export const authMiddleware = (jwtService) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          success: false,
          message: "Token no proporcionado"
        });
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwtService.verify(token);

      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Token inválido o expirado"
      });
    }
  };
};