import joi from "joi";
import { ProductBaseModel, ProductModelBaseSchema } from "../product/product.types";

export type CartProduct = Partial<{
  productId: string,
  productInfo: ProductBaseModel,
  quantity: number
}>

export const CartProductSchema = joi.object().keys({
  productId: joi.string().description('Es el uuid del producto'),
  productInfo: ProductModelBaseSchema,
  quantity: joi.number().integer()
}).description('Es un producto del carrito');

export type CartModel = Partial<{
  userId: string;
  products: Record<string, CartProduct>
  isClosed?: boolean
}>;

export const CartModelSchema = joi.object<CartModel>().keys({
  userId: joi.string().uuid().description('Es un userId'),
  products: joi.object().pattern(joi.string().uuid(), CartProductSchema),
  isClosed: joi.boolean()
}).description('Es un carrito');
