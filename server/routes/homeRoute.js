import express from "express"
const router =express.Router()

import {getRates,getSymbols,getStats} from '../controllers/homeController.js'
router.get('/',(req,res)=>{
    res.json("hiii this is back end")
})
router.get('/getRates',getRates)

router.get('/getSymbols',getSymbols)

router.get('/getStats',getStats)

export default router