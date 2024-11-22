import { Product } from './product.interface'
import { productModel } from './product.model'

const createProductInDB = async (product: Product) => {
  const result = await productModel.create(product)
  return result
}

const getAllProducts = async () => {
  const result = await productModel.find()
  return result
}
const getProductById = async (id: string) => {
  const result = await productModel.findById(id)
  return result
}

const updateProduct = async (id: string, data: Product) => {
  const result = await productModel.findByIdAndUpdate(id, data)
  return result
}

const deleteProduct = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id)
  return result
}
export const productService = {
  createProductInDB,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
