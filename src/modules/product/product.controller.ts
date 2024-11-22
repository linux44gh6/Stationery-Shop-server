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

const updateProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId
  const data = req.body
  const result = await productService.updateProduct(productId, data)
  res.json({
    message: 'product update successfully',
    status: true,
    data: result,
  })
}

const deleteProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = await productService.deleteProduct(productId)
  res.json({
    message: 'product deleted successful',
    status: true,
    data: {},
  })
}
export const productController = {
  createProduct,
  getAllProductFromDB,
  getProductById,
  updateProductById,
  deleteProductById,
}
