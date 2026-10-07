export class GetDashboard {
  async execute(user) {
    if (!user) {
      throw new Error("Usuario no autenticado");
    }

    return {
      message: `Bienvenido al Dashboard, ${user.username}`,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      },
      security: {
        authenticated: true,
        zeroTrust: true
      }
    };
  }
}