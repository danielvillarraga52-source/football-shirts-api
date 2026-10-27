import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET no está definida");
}

export const claveJwt: string = jwtSecret;