import joi from "joi";
import { CartModel, CartProduct, CartProductSchema } from "../cart";

export type InvoiceModel = CartModel & {
  userId: string;
  products: Record<string, CartProduct>,
  total: number,
  address: string
}

export const InvoiceModelSchema = joi.object().keys({
  userId: joi.string().uuid(), 
  products: joi.object().pattern(joi.string().uuid(), CartProductSchema),
  total: joi.number(),
  address: joi.string()
})
