import express from 'express';
import heroesRoutes from './routes/heroesRoute.js'
const app = express();

app.use(heroesRoutes)

export default app