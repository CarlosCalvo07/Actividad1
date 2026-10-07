export class AuthController {
  constructor(loginUser) {
    this.loginUser = loginUser;
  }

  login = async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const result = await this.loginUser.execute({
        username,
        password
      });

      return res.status(200).json({
        success: true,
        message: "Inicio de sesión correcto",
        token: result.token,
        user: result.user
      });
    } catch (error) {
      next(error);
    }
  };
}