import joi from 'joi';
import { AppError } from 'src/serverComponents/core/src/errors';

export const error: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
