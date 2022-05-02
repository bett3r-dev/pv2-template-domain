import { AppointmentModel, AppointmentModelSchema } from './appointments.types';

import { Event } from "@bett3r-dev/server-core";

export const PaymentStarted: Event<Pick<AppointmentModel, 'professionalId'|'patientId'|'dateTimeStart'|'dateTimeEnd'|'status'>> = () => ({
  schema: AppointmentModelSchema,
})
export const PaymentApproved: Event<AppointmentModel> = () => ({
  schema: AppointmentModelSchema
})
export const PaymentRejected: Event<AppointmentModel> = () => ({
  schema: AppointmentModelSchema
})
export const AppointmentScheduled: Event<AppointmentModel> = () => ({
  schema: AppointmentModelSchema,
})
export const AppointmentCanceled: Event<AppointmentModel> = () => ({
  schema: AppointmentModelSchema,
})
export const AppointmentTimedout: Event<AppointmentModel> = () => ({
  schema: AppointmentModelSchema,
})
export const AppointmentRescheduled: Event<AppointmentModel> = () => ({
  schema: AppointmentModelSchema,
})
