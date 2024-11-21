import { z } from 'zod'

// Define the Zod schema
const productSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  brand: z.string().min(1, { message: 'Brand is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.enum(
    ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
    {
      message: 'Category must be one of the specified values',
    },
  ),
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .min(1, { message: 'Quantity must be at least 1' }),
  inStock: z.boolean({ message: 'InStock must be a boolean value' }),
})
export default productSchema
