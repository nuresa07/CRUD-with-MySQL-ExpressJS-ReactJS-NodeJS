import express from 'express'
import { createUser, deleteUser, getUserId, getUsers, updateUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserId)
router.post('/users', createUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)


export default router;

// 5