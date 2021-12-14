import joi from "joi";
import { ProductBaseModel, ProductModelBaseSchema } from "../product/product.model";

export type CartProduct = Partial<{
  productId: string,
  productInfo: ProductBaseModel,
  quantity: number
}>

export const CartProductSchema = joi.object().keys({
  productId: joi.string(),
  productInfo: ProductModelBaseSchema,
  quantity: joi.number().integer()
})

export type CartModel = Partial<{
  userId: string;
  products: Record<string, CartProduct>
  isClosed?: boolean
}>;

export const CartModelSchema = joi.object<CartModel>().keys({
  userId: joi.string().uuid(), 
  products: joi.object().pattern(joi.string().uuid(), CartProductSchema),
  isClosed: joi.boolean()
})

JSON.stringify(CartModelSchema.describe(),null, 4);//?
