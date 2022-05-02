import joi from 'joi';
import { AppError } from 'src/serverComponents/core/src/errors';

export const TimeLapseNotAvailable: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
export const TimeLapseNotBlocked: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
