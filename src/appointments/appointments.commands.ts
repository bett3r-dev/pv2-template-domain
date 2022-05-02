import { Command } from "@bett3r-dev/server-core";
import { AppointmentModel, AppointmentModelSchema } from "src/domain/src/appointments/appointments.types";
import * as joi from 'joi';
import { AppointmentsEvents } from ".";

//TODO: errors

export const StartPayment: Command<Omit<AppointmentModel, 'status'>> = () => ({
  schema: AppointmentModelSchema,
  isPublic: true,
  events: [AppointmentsEvents.PaymentStarted],
  errors: []
})
export const TimeoutAppointment: Command<AppointmentModel> = () => ({
  schema:joi.object().keys({}).allow(null),
  events: [AppointmentsEvents.AppointmentTimedout],
  errors: []
})
export const ApprovePayment:Command<{}> = () => ({
  schema:joi.object().keys({}).allow(null),
  events: [AppointmentsEvents.PaymentApproved],
  isPublic: true,
  errors: []
})
export const RejectPayment: Command<{}> = () => ({
  schema: joi.object().keys({}).allow(null),
  events: [AppointmentsEvents.PaymentRejected],
  isPublic: true,
  errors: []
})
export const CancelAppointment: Command<{}> = () => ({
  schema: joi.object().keys({}).allow(null),
  isPublic: true,
  events: [AppointmentsEvents.AppointmentCanceled],
  errors: []
})
export const ScheduleAppointment: Command<{}> = () => ({
  schema: joi.object().keys({}).allow(null),
  isPublic: true,
  events: [AppointmentsEvents.AppointmentScheduled],
  errors: []
})
export const RescheduleAppointment: Command<Pick<AppointmentModel, 'dateTimeStart' & 'dateTimeEnd'>> = () => ({
  schema: joi.object().keys({
    dateTimeStart: joi.date(),
    dateTimeEnd: joi.date()
  }),
  isPublic: true,
  events: [AppointmentsEvents.AppointmentRescheduled],
  errors: []
})

