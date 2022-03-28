import { AppError } from '@bett3r-dev/server-core';
import joi from 'joi';

export const PaymentNotStarted: AppError<string[]> = () => ({
  type: 'NotFoundError',
  schema: joi.array().items(joi.string())
})
