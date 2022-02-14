import {Command} from '@bett3r-dev/server-core'
import joi from 'joi'
import { PaymentEvents, PaymentModel, PaymentModelSchema } from '.'

export const StartPayment: Command<{cartId: string}> = () => ({
  schema: joi.object().keys({cartId: joi.string().uuid()}),
  isPublic: true,
  events:[
    PaymentEvents.PaymentStarted
  ],
})

export const ExternalGatewayWebhook: Command<{paymentId:string, success: boolean}> = () => ({
  schema: joi.object().keys({paymentId: joi.string(), success: joi.boolean()}),
  isPublic: true,
  events:[
    PaymentEvents.PaymentApproved,
    PaymentEvents.PaymentRejected
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
