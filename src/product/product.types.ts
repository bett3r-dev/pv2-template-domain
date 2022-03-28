import joi from "joi";

export type ProductBaseModel = Partial<{
  // id: string;
  sku: string;
  name: string;
  price: number;
}>;

export type ProductModel = ProductBaseModel & Partial<{
  quantity: number;
  image: string;
}>

export const ProductModelBaseSchema = joi.object<ProductBaseModel>().keys({
  // id: joi.string().uuid(),
  sku: joi.string(),
  name: joi.string().max(300),
  price: joi.number(),
})

export const ProductModelSchema = ProductModelBaseSchema.concat(joi.object<ProductModel>().keys({
  quantity: joi.number().integer(),
  image: joi.string().optional()
})).preferences({presence:'required'})

export const CreateProductCommandSchema = ProductModelBaseSchema.concat(joi.object<ProductModel>().keys({
  quantity: joi.number().integer(),
  image: joi.binary().optional()
})).preferences({presence:'required'})