import { Router } from 'express'
import { productController } from './product.controller'

const productRouter = Router()

productRouter.post('/', productController.createProduct)
productRouter.get('/', productController.getAllProductFromDB)
productRouter.get('/:productId', productController.getProductById)
productRouter.put('/:productId', productController.updateProductById)
productRouter.delete('/:productId', productController.deleteProductById)
export default productRouter
