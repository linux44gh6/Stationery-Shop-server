import { Request,Response } from "express"
import { productModel } from "./product.model"

const createProduct=async(req: Request,res: Response)=>{
    const payload=req.body
    const result=await productModel.create(payload)
    res.json({
        message:"Product created success",
        data:result
    })
}
export const productController={
    createProduct
}