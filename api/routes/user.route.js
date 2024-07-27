import express from 'express'
import { test, updateUser,deleteUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('mern-auth-five-snowy.vercel.app
/',test)
router.post('mern-auth-five-snowy.vercel.app
/update/:id',verifyToken, updateUser)
router.delete('mern-auth-five-snowy.vercel.app
/delete/:id',verifyToken, deleteUser)





export default router
