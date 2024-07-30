import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB connected Successfully!");
}).catch((err) => {
    console.log(err);
});

const app = express();

// CORS configuration
app.use(cors({
    origin: 'https://mern-auth-client-eight.vercel.app', // Update with your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
  });

app.listen(3000, () => {
    console.log("Server is running at port: 3000!!");
});
