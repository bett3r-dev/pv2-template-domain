import { Command } from "@bett3r-dev/server-core";
import joi from 'joi';
import { ProductModel, ProductModelSchema, CreateProductCommandSchema } from "./product.types";
import { ProductEvents, ProductErrors } from "./index"

export const CreateProduct: Command<ProductModel> = () => ({
  schema: CreateProductCommandSchema,
  isPublic: true,
  multipartProperties:['image'],
  events:[
    ProductEvents.ProductCreated
  ],
  errors: [
    ProductErrors.ProductAlreadyExists
  ]
})

export const UpdateStock: Command<number> = () => ({
  schema: joi.number(),
  isPublic: true,
  events:[
    ProductEvents.StockUpdated
  ],
  errors: [
    ProductErrors.ProductDoesNotExist,
    ProductErrors.NegativeQuantity
  ]
})

export const DeleteProduct: Command<null> = () => ({
  schema: null,
  isPublic: true,
  events:[
    ProductEvents.ProductDeleted
  ],
  errors: [
    ProductErrors.ProductDoesNotExist,
  ]
})

export const DecreaseStock: Command<{cartId:string, quantity:number}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string(),
    quantity: joi.number()
  }),
  events:[
    ProductEvents.StockDecreased
  ],
  errors: [
    ProductErrors.ProductDoesNotExist,
    ProductErrors.NegativeQuantity
  ]
})

export const RestoreStock: Command<{cartId:string, quantity:number}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string(),
    quantity: joi.number()
  }),
  events:[
    ProductEvents.StockRestored
  ],
  errors: [
    ProductErrors.ProductDoesNotExist
  ]
})
