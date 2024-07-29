import express from 'express'
import { test, updateUser,deleteUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('https://mern-auth-api-black.vercel.app/',test)
router.post('https://mern-auth-api-black.vercel.app/update/:id',verifyToken, updateUser)
router.delete('https://mern-auth-api-black.vercel.app/delete/:id',verifyToken, deleteUser)





export default router
