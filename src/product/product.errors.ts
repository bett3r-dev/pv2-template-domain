import joi from 'joi';
import { AppError } from '@bett3r-dev/server-core';

export const ProductAlreadyExists: AppError<string[]> = () => ({
  schema: joi.array().items(joi.string()),
  type: 'ConflictError',
})

export const ProductDoesNotExist: AppError<string[]> = () => ({
  schema: joi.array().items(joi.string()),
  type: 'NotFoundError',
})

export const NegativeQuantity: AppError<string[]> = () => ({
  type: 'NotAcceptableError',
  schema: joi.array().items(joi.string())
})