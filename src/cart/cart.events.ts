import { Event } from "@bett3r-dev/server-core";
import joi from 'joi';
import { CartModel, CartModelSchema, CartProduct, CartProductSchema } from ".";

export const UserCartCreated: Event<null> = () => ({
  schema: null
})

export const ProductAdded: Event<CartProduct> = () => ({
  schema: CartProductSchema
})

export const QuantityUpdated: Event<{productId:string, quantity:number}> = () => ({
  schema: joi.object().keys({
    productId: joi.string().uuid(),
    quantity: joi.number()
  })
})

export const ProductRemoved: Event<{productId: string}> = () => ({
  schema: joi.object().keys({
    productId: joi.string(),
  })
})

export const CartClosed: Event<null> = () => ({
  schema: null
})
