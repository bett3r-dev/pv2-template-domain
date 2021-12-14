import joi from "joi";
import { ProductModel, ProductModelSchema } from "./product.model";

export type ProductsReadModel = ProductModel & {
  id: string,
}

export const ProductsReadModelSchema = ProductModelSchema.concat(joi.object<ProductsReadModel>().keys({
  id: joi.string().uuid()
})) 