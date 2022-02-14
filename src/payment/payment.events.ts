import { Event } from "@bett3r-dev/server-core";
import joi from 'joi';
import { CartModel } from "../cart";
import { CartProductSchema } from '../cart/cart.model';

export const PaymentStarted: Event<{ cartId: string, cart:Pick<CartModel, "products" | "userId">, amount: number}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid(),
    cart: joi.object().keys({
      userId: joi.string().uuid(),
      products: joi.object().pattern(
        joi.string(),
        CartProductSchema
      )
  }),
    amount: joi.number(),
  })
})

export const PaymentApproved: Event<{cartId: string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid(),
  })
})

export const PaymentRejected: Event<{cartId: string, reason: string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid(),
    reason: joi.string()
  })
})

export const PaymentSucceeded: Event<{cartId:string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid()
  })
})

export const PaymentFailed: Event<{cartId:string, reason:string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid(),
    reason: joi.string().max(100)
  })
})

