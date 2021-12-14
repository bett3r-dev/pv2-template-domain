import joi from 'joi';
import { AppError } from '@bett3r-dev/server-core';

export const ProductDoesNotExist: AppError<string[]> = () => ({
  type: 'NotFoundError',
  schema: joi.array().items(joi.string())
})

export const ProductAlreadyInCart: AppError<string[]> = () => ({
  type: 'ConflictError',
  schema: joi.array().items(joi.string())
})

export const ProductOutOfStock: AppError<string[]> = () => ({
  type: 'ConflictError',
  schema: joi.array().items(joi.string())
})

export const ProductNotInCart: AppError<string[]> = () => ({
  type: 'NotFoundError',
  schema: joi.array().items(joi.string())
})

export const NegativeQuantity: AppError<string[]> = () => ({
  type: 'NotAcceptableError',
  schema: joi.array().items(joi.string())
})

export const CartAlreadyExist: AppError<string[]> = () => ({
  type: 'ConflictError',
  schema: joi.array().items(joi.string())
})

export const CartDoesNotExist: AppError<string[]> = () => ({
  type: 'NotFoundError',
  schema: joi.array().items(joi.string())
})

export const EmptyCart: AppError<null> = () => ({
  type: 'NotAcceptableError',
  schema: null
})
