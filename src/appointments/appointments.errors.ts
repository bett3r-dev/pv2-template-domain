import joi from 'joi';
import { AppError } from 'src/serverComponents/core/src/errors';

export const ScheduleNotAvailable: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})

export const AppointmentNotReady: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
export const PaymentAlreadyStarted: AppError<string[]> = () => ({
  type: 'BadRequestError',
  schema: joi.array().items(joi.string())
})
