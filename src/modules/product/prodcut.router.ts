import { Router } from 'express'
import { productController } from './product.controller'

const productRouter = Router()

productRouter.post('/create-product', productController.createProduct)
productRouter.get('/', productController.getAllProductFromDB)
productRouter.get('/:productId', productController.getProductById)
export default productRouter
