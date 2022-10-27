import express from 'express';
import homeRouter from  './routes/home.js'
const app=express();

app.use('/',homeRouter);

app.listen(8000,()=>console.log("connected to port"))