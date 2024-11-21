import { Request, Response } from 'express'

import productSchema from './product.validation'
import { productService } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  const payload = req.body
  const validation = productSchema.safeParse(payload)
  if (validation.success) {
    console.log('Data validation success', validation.data)
  } else {
    console.log('Data validation error', validation.error.errors)
  }
  const result = await productService.createProductInDB(payload)
  res.json({
    message: 'Product created success',
    success: true,
    data: result,
  })
}

const getAllProductFromDB = async (req: Request, res: Response) => {
  const result = await productService.getAllProducts()
  res.json({
    message: 'Products retrieved successfully',
    status: true,
    data: result,
  })
}

const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId
  const result = await productService.getProductById(productId)
  res.json({
    message: 'Product retrieved successfully',
    status: true,
    data: result,
  })
}
export const productController = {
  createProduct,
  getAllProductFromDB,
  getProductById,
}
