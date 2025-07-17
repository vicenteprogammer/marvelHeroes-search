import { Router } from "express";
import { heroes } from "../database/heroes.js";
const heroesRouter = Router();

heroesRouter.get('/', (req,res)=>{
    res.send('Welcome, Marvel heroes API')
})

heroesRouter.get('/:nameHero',(req,res)=>{
    const heroname = req.params
    res.json(heroes.filter((hero)=> hero.nome === heroname.nameHero.toLowerCase() ))
})

export default heroesRouter