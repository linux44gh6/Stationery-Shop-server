const express = require('express')
import { Request, Response } from "express"
import productRouter from "./modules/product/prodcut.router"
const app = express()
//middleware
app.use(express.json())
app.use('/api/products',productRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;