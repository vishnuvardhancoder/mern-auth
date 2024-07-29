import express from 'express'
import { google, signin, signup,signout } from '../controllers/auth.controller.js';

const router = express.Router()

router.post('https://mern-auth-api-black.vercel.app/signup',signup)
router.post('https://mern-auth-api-black.vercel.app/signin',signin)
router.post('https://mern-auth-api-black.vercel.app/google', google)
router.get('https://mern-auth-api-black.vercel.app/signout',signout)
export default router;
