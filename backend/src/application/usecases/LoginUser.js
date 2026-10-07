export class LoginUser {
  constructor(userRepository, passwordService, jwtService) {
    this.userRepository = userRepository;
    this.passwordService = passwordService;
    this.jwtService = jwtService;
  }

  async execute({ username, password }) {
    if (!username || !password) {
      throw new Error("Usuario y contraseña son obligatorios");
    }

    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    const passwordIsValid = await this.passwordService.compare(
      password,
      user.passwordHash
    );

    if (!passwordIsValid) {
      throw new Error("Credenciales inválidas");
    }

    const token = this.jwtService.generate({
      id: user.id,
      username: user.username,
      role: user.role
    });

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    };
  }
}