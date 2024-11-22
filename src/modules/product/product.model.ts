import { Schema, model } from 'mongoose'
import { Product } from './product.interface'

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: [
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: null, // Default value
  },
  updatedAt: {
    type: Date,
    default: null, // Default value
  },
})

productSchema.pre('save', function (this, next) {
  if (!this.createdAt && !this.updatedAt) {
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
  next()
})
productSchema.pre('findOneAndUpdate', function (this, next) {
  this.set({ updatedAt: new Date() })
  next()
})
export const productModel = model<Product>('product', productSchema)
