import { Command } from "@bett3r-dev/server-core";
import joi from 'joi';
import { CartProduct, CartProductSchema, CartErrors } from ".";

export const CreateUserCart: Command<null> = () => ({
  schema: null,
  isPublic: true
})

export const AddProduct: Command<CartProduct> = () => ({
  schema: CartProductSchema,
  isPublic: true
})

export const UpdateQuantity: Command<{productId:string, quantity:number}> = () => ({
  schema: joi.object().keys({
    productId: joi.string().uuid(),
    quantity: joi.number()
  }),
  isPublic: true,
  errors: [
    CartErrors.ProductOutOfStock,
    CartErrors.NegativeQuantity,
    CartErrors.ProductNotInCart
  ]
})

export const RemoveProduct: Command<string> = () => ({
  schema: joi.string(),
  isPublic: true
})

export const CloseCart: Command<null> = () => ({
  schema: null
})