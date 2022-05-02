import joi from 'joi';
import { AppError } from 'src/serverComponents/core/src/errors';

export const PatientNotCreated: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
export const PatientNotActive: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
