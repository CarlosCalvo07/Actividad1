import jwt from "jsonwebtoken";

export class JwtService {
  constructor(secret, expiresIn = "1h") {
    this.secret = secret;
    this.expiresIn = expiresIn;
  }

  generate(payload) {
    return jwt.sign(payload, this.secret, {
      expiresIn: this.expiresIn
    });
  }

  verify(token) {
    return jwt.verify(token, this.secret);
  }
}