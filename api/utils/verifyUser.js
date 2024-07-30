import  jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
    console.log('Verify token function called');
    const token = req.headers.cookie?.split('access_token=')[1];
    console.log('Token from cookie:', token);
    if (!token) return next(errorHandler(401, 'You are not authenticated!'));
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return next(errorHandler(401, 'Token is not valid'));
      req.user = user;
      next();
    });
  };