import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../config/auth";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Login required"],
    });
  }

  const [texto, token] = authorization.split(" "); // Bearer token

  try {
    const dados = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = dados.id;
    req.userEmail = dados.email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Token expirado ou inválido"],
    });
  }
};
