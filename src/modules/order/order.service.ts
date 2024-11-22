import { Order } from './order.interface'
import { orderModel } from './order.model'

const createOrder = async (data: Order) => {
  const result = await orderModel.create(data)
  return result
}

const getAllOrders = async () => {
  const result = await orderModel.aggregate([
    {
      $project: {
        totalPrice: 1,
      },
    },
  ])
  const totalRevenue = result.reduce((sum, order) => sum + order.totalPrice, 0)
  return totalRevenue
}

export const orderService = {
  createOrder,
  getAllOrders,
}
