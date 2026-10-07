import bcrypt from "bcryptjs";
import { User } from "../../domain/entities/User.js";
import { UserRepository } from "../../domain/repositories/UserRepository.js";

export class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();

    this.users = [
      new User({
        id: 1,
        username: "admin",
        passwordHash: bcrypt.hashSync("Diplomado2026!", 10),
        role: "admin"
      })
    ];
  }

  async findByUsername(username) {
    return this.users.find((user) => user.username === username) || null;
  }
}