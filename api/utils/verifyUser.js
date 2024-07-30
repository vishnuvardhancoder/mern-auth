import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(req.cookies)
    console.log('Token from cookie:', token);

    if (!token) {
        console.log('Token not found in cookies');
        return next(errorHandler(401, 'You are not authenticated!'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('Error verifying token:', err.message);
            return next(errorHandler(403, 'Token is not valid!'));
        }

        console.log('Verified user:', user);
        req.user = user;
        next();
    });
};
