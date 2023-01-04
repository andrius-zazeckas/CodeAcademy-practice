import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export type TUserPayload = { userName: string; issuedAt: number };

dotenv.config();

const jwtSecret = process.env.jwtSecret;

export const getHome = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ error: "User unauthorised" }).end();
  }

  try {
    const payload: TUserPayload = jwt.verify(token, jwtSecret);

    res.send(`Welcome ${payload.userName}`).end();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }
};
