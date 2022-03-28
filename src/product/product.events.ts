import { Event } from "@bett3r-dev/server-core";
import joi from 'joi';
import { ProductModel, ProductModelSchema } from "./product.types";

export const ProductCreated: Event<ProductModel> = () => ({
  schema: ProductModelSchema
})

export const StockUpdated: Event<number> = () => ({
  schema: joi.number()
})

export const ProductDeleted: Event<null> = () => ({
  schema: null
})

export const StockDecreased: Event<number> = () => ({
  schema: joi.number()
})

export const StockRestored: Event<number> = () => ({
  schema: joi.number()
})
