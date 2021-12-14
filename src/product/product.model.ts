import joi from "joi";

export type ProductBaseModel = Partial<{
  // id: string;
  sku: string;
  name: string;
  price: number;
}>;
export type ProductModel = ProductBaseModel & Partial<{
  quantity: number;
}>

export const ProductModelBaseSchema = joi.object<ProductBaseModel>().keys({
  // id: joi.string().uuid(),
  sku: joi.string(),
  name: joi.string().max(300),
  price: joi.number(),
})

export const ProductModelSchema = ProductModelBaseSchema.concat(joi.object<ProductModel>().keys({
  quantity: joi.number().integer()
})).preferences({presence:'required'})