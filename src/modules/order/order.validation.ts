import { z } from 'zod'

const orderSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  productId: z.string().min(1, { message: 'Product ID is required' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .positive({ message: 'Quantity must be greater than 0' })
    .min(1, { message: 'quantity is required' }),
  totalPrice: z
    .number()
    .positive({ message: 'Total price must be greater than 0' })
    .min(1, { message: 'totalPrice is required' }),
})

export default orderSchema
