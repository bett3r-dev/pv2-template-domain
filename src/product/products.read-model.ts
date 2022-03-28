import joi from "joi";
import { ProductModel, ProductModelSchema } from "./product.types";

export type ProductsReadModel = ProductModel & {
  id: string,
}

export const ProductsReadModelSchema = ProductModelSchema.concat(joi.object<ProductsReadModel>().keys({
  id: joi.string().uuid()
}))
