import jwt from "jsonwebtoken";
import { config } from "../config/env.js";
const JWT_SECRET = config.JWT_SECRET;

export function generateToken(id, username) {
  return jwt.sign({ id, username }, JWT_SECRET, { expiresIn: "24h" });
}

export function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Auth error",
    });
  }
}

export { JWT_SECRET };
