import joi from "joi";

export type PaymentModel = {
  amount: number,
  cartId: string,
  userId: string,
  status?: 'new' | 'approved' | 'rejected',
  reason?: string
}

export const PaymentModelSchema = joi.object().keys({
  amount: joi.number(),
  cartId: joi.string().uuid(),
  userId: joi.string().uuid(),
  status: joi.string().valid('new', 'approved', 'rejected'),
  reason: joi.string().optional()
}).preferences({presence:'required'})