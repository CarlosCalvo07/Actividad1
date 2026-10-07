import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDirectory = path.resolve(__dirname, "../../../logs");
const logFile = path.join(logDirectory, "auth.log");

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

export const loginLogger = (req, res, next) => {
  const originalJson = res.json.bind(res);

  res.json = (body) => {
    if (req.path.includes("/login")) {
      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket.remoteAddress ||
        "IP_DESCONOCIDA";

      const username = req.body?.username || "usuario_desconocido";

      const status =
        res.statusCode === 200
          ? "LOGIN_SUCCESS"
          : "LOGIN_FAILED";

      const logLine =
        `${new Date().toISOString()} ` +
        `${status} ` +
        `ip=${ip} ` +
        `username=${username}\n`;

      fs.appendFileSync(logFile, logLine);
    }

    return originalJson(body);
  };

  next();
};