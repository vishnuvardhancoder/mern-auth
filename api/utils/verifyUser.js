import  jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log("Token received:", token); // Add this line for debugging

    if (!token) return next(errorHandler(401, 'You are not authenticated!'));
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(401, "Token is not valid"));
        req.user = user;
        next();
    });
};
