import express from 'express'
import { google, signin, signup,signout } from '../controllers/auth.controller.js';

const router = express.Router()

router.post('mern-auth-five-snowy.vercel.app
/signup',signup)
router.post('mern-auth-five-snowy.vercel.app
/signin',signin)
router.post('mern-auth-five-snowy.vercel.app
/google', google)
router.get('mern-auth-five-snowy.vercel.app
/signout',signout)
export default router;
