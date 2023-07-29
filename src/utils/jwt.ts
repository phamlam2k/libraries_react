import jwt from "jsonwebtoken";
import { SECRET_AUTH } from "./guard";

export const verifyToken = (token: string) => {
  try {
    const status = jwt.verify(token, SECRET_AUTH, function (error, decoded) {
      if (error) {
        return false;
      } else {
        return true;
      }
    });

    return status;
  } catch (error) {
    return false;
  }
};

export const signToken = (token: string) => {
  try {
    const accessToken = jwt.sign(token, SECRET_AUTH, {
      algorithm: "HS256",
    });

    return accessToken;
  } catch (error) {
    return null;
  }
};

export const decodeToken = (token: string) => {
  try {
    const decodeToken = jwt.decode(token, { complete: true });

    return decodeToken;
  } catch (error) {
    return null;
  }
};
