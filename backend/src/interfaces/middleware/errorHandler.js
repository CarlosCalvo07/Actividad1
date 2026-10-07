export const errorHandler = (error, req, res, next) => {
  console.error(error);

  const isCredentialError =
    error.message === "Credenciales inválidas" ||
    error.message === "Usuario y contraseña son obligatorios";

  const statusCode = isCredentialError ? 401 : 500;

  return res.status(statusCode).json({
    success: false,
    message: isCredentialError
      ? error.message
      : "Ocurrió un error interno en el servidor"
  });
};