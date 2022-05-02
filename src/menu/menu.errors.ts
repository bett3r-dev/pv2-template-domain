import joi from 'joi';
import { AppError } from 'src/serverComponents/core/src/errors';

export const ProfessionalNotFound: AppError<string[]> = () => ({
  type: 'NotFoundError',
  schema: joi.array().items(joi.string())
})
export const MenuNotFound: AppError<string[]> = () => ({
  type: 'NotFoundError',
  schema: joi.array().items(joi.string())
})
