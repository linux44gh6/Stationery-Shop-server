import express from 'express'
// import { Request, Response } from 'express'
import productRouter from './modules/product/prodcut.router'
import orderRoute from './modules/order/order.route'
const app = express()
//middleware
app.use(express.json())
app.use('/api/products', productRouter)
app.use('/api/orders', orderRoute)
export default app
