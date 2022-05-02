import joi from 'joi';
import { AppError } from 'src/serverComponents/core/src/errors';

export const ProfessionalNotCreated: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
export const ProfessionalAlreadyCreated: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
