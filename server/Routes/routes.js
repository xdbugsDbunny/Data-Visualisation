import express from 'express'
import { getData } from '../Controller/dataController.js'



const router = express.Router()


router.get('/dashboard',getData)



export default router;

