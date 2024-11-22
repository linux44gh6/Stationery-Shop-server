import { Order } from './order.interface'
import { orderModel } from './order.model'

const createOrder = async (data: Order) => {
  const result = await orderModel.create(data)
  return result
}

const getAllOrders = async () => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ])
  return result
}
export const orderService = {
  createOrder,
  getAllOrders,
}
