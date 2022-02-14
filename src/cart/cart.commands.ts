import { Command } from "@bett3r-dev/server-core";
import joi from 'joi';
import {CartEvents }from "./index";
import { CartProduct, CartProductSchema, CartErrors } from ".";

export const CreateUserCart: Command<{userId: string}> = () => ({
  schema: joi.object().keys({userId: joi.string().uuid().required()}),
  isPublic: true,
  events:[
    CartEvents.UserCartCreated
  ],
  errors: [
    CartErrors.CartAlreadyExist,
  ]
})

export const AddProduct: Command<CartProduct> = () => ({
  schema: CartProductSchema,
  isPublic: true,
  events:[
    CartEvents.ProductAdded
  ],
  errors: [
    CartErrors.ProductAlreadyInCart,
    CartErrors.ProductDoesNotExist,
    CartErrors.ProductOutOfStock
  ]
})

export const UpdateQuantity: Command<{productId:string, quantity:number}> = () => ({
  isPublic: true,
  schema: joi.object().keys({
    productId: joi.string().uuid(),
    quantity: joi.number()
  }),
  events:[
    CartEvents.QuantityUpdated
  ],
  errors: [
    CartErrors.ProductOutOfStock,
    CartErrors.NegativeQuantity,
    CartErrors.ProductNotInCart
  ]
})

export const RemoveProduct: Command<string> = () => ({
  schema: joi.string(),
  isPublic: true,
  events:[
    CartEvents.ProductRemoved
  ],
  errors: [
    CartErrors.ProductNotInCart
  ]
})

export const CloseCart: Command<null> = () => ({
  schema: null,
  events:[
    CartEvents.CartClosed
  ],
  errors: [
  ]
})
