import express, { Request, Response, NextFunction } from "express"
import { json } from "express"

import todoRoutes from "./routes/todos"

const app = express()

app.use(json())

app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({ message: error.message })
})

app.get('/', (req, res) => {
    res.json({message: 'Hello from express'})
})

app.listen(3011, () => {
    console.log('server is started at http://localhost:3011')
})