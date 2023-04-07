import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './Database/Connection.js';
import router from './Routes/routes.js';
const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.get('/dashboard',router)
app.get('/login',router)
app.get('/register',router)
Connection();

app.listen(8000)