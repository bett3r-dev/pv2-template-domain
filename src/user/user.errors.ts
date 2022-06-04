import joi from 'joi';
import { AppError } from '@bett3r-dev/server-core';

export const UserDoesNotExist: AppError<string[]> = () => ({
  schema: joi.array().items(joi.string()),
  type: 'NotFoundError',
})