import { Router } from "express";

const heroesRouter = Router();

heroesRouter.get('/', (req,res)=>{
    res.send('Welcome, Marvel API')
})

export default heroesRouter