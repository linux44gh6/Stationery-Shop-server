import { Schema, model } from 'mongoose'
import { Order } from './order.interface'

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: null,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
})

orderSchema.pre('save', function (this, next) {
  if (!this.createdAt && !this.updatedAt) {
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
  next()
})
export const orderModel = model<Order>('order', orderSchema)
