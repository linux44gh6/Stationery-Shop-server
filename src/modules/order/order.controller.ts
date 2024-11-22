import { Request, Response } from 'express'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body
  const result = await orderService.createOrder(orderData)
  res.json({
    message: 'Order created successful',
    status: true,
    data: result,
  })
}

const getAllOrders = async (req: Request, res: Response) => {
  const result = await orderService.getAllOrders()
  res.json({
    message: 'Order revenue collection',
    status: true,
    data: result,
  })
}
export const orderController = {
  createOrder,
  getAllOrders,
}
