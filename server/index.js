import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import homeRouter from  './routes/homeRoute.js'
const app=express();
dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/',homeRouter);

app.listen(8000,()=>console.log("connected to port"))