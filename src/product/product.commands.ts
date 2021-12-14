import { Command } from "@bett3r-dev/server-core";
import joi from 'joi';
import { ProductModel, ProductModelSchema } from "./product.model";

export const CreateProduct: Command<ProductModel> = () => ({
  schema: ProductModelSchema,
  isPublic: true
})

export const UpdateStock: Command<number> = () => ({
  schema: joi.number(),
  isPublic: true
})

export const DeleteProduct: Command<null> = () => ({
  schema: null,
  isPublic: true
})

export const DecreaseStock: Command<{cartId:string, quantity:number}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string(),
    quantity: joi.number()
  })
})

export const IncreaseStock: Command<{cartId:string, quantity:number}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string(),
    quantity: joi.number()
  })
})