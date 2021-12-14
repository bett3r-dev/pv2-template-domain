import {Command} from '@bett3r-dev/server-core'
import joi from 'joi'
import { PaymentModel, PaymentModelSchema } from '.'

export const StartPayment: Command<null> = () => ({
  schema: null,
  isPublic: true
})

export const ApprovePayment: Command<{cartId: string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid()
  })
})

export const RejectPayment: Command<{reason: string, cartId: string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid(),
    reason: joi.string()
  })
})

export const Pay: Command<Pick<PaymentModel, "cartId" | "amount">> = () => ({ //TODO: agregar userId, ver como ponerlo de donde sacarlo
  // schema: PaymentModelSchema
  schema: joi.object().keys({
    cartId: joi.string(),
    amount: joi.number()
  })
})

//TODO: Webhook
