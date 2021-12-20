import {Command} from '@bett3r-dev/server-core'
import joi from 'joi'
import { PaymentEvents, PaymentModel, PaymentModelSchema } from '.'

export const StartPayment: Command<null> = () => ({
  schema: null,
  isPublic: true,
  events:[
    PaymentEvents.PaymentStarted
  ],
})

export const ApprovePayment: Command<{cartId: string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid()
  }),
  events:[
    PaymentEvents.PaymentApproved
  ],
})

export const RejectPayment: Command<{reason: string, cartId: string}> = () => ({
  schema: joi.object().keys({
    cartId: joi.string().uuid(),
    reason: joi.string()
  }),
  events:[
    PaymentEvents.PaymentRejected
  ],
})

export const Pay: Command<Pick<PaymentModel, "cartId" | "amount">> = () => ({ //TODO: agregar userId, ver como ponerlo de donde sacarlo
  // schema: PaymentModelSchema
  schema: joi.object().keys({
    cartId: joi.string(),
    amount: joi.number()
  }),
  events:[
    PaymentEvents.PaymentSucceeded,
    PaymentEvents.PaymentFailed
  ],
})

//TODO: Webhook
