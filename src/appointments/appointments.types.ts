import * as joi from 'joi';

export type AppointmentModel = Partial<{
  professionalId: string;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  patientId: string;
  payment: Payment;
  status: 'pending'|'scheduled'|'canceled'|'timedout';
}>

export type Payment = Partial<{
  paymentMethod:string,
  externalPaymentId:string,
  price: number;
  status: 'approved'|'rejected';
}>

export const PaymentSchema = joi.object<Payment>().keys({
  paymentMethod: joi.string(),
  externalPaymentId:joi.string(),
  price: joi.number(), //Buscar flaot en doc
  status: joi.string().valid('approved','rejected'),
})
export const BaseAppointmentSchema = joi.object<AppointmentModel>().keys({
  professionalId: joi.string().uuid(),
  patientId: joi.string().uuid(),
  dateTimeStart: joi.date(),
  dateTimeEnd: joi.date(),
})
export const AppointmentModelSchema = BaseAppointmentSchema.concat(
  joi.object<AppointmentModel>().keys({
    payment: PaymentSchema.optional(),
  })
)


// export type ScheduleModel = EventModel & Partial<{
//   week: Array<DayTimeLapse>
// }>

// export type BlockedTimeLapseModel = EventModel & Partial<{
//   dateTimeStart: Date;
//   dateTimeEnd: Date;
// }>


// export type DayTimeLapse = {
//   dayOfWeek: 'monday'|'tuesday'|'wednesday'|'thursday'|'friday'|'saturday'|'sunday';//NOTE: all?
//   timeStart: 'number'; //NOTE: date?
//   timeEnd: 'number';
// }

// export const DayTimeLapseSchema = joi.object<DayTimeLapse>().keys({
//   dayOfWeek: joi.string().valid('monday','tuesday','wednesday','thursday','friday','saturday','sunday'),
//   timeStart: joi.number(),
//   timeEnd: joi.number()
// })

// export const ScheduleModelSchema = BaseEventSchema.concat(
//   joi.object<ScheduleModel>().keys({
//    week: joi.array().has(DayTimeLapseSchema)
//   })
// )
// export const BlockedTimeLapseModelSchema = BaseEventSchema.concat(
//   joi.object<BlockedTimeLapseModel>().keys({
//    dateTimeStart: joi.date(),
//    dateTimeEnd: joi.date()
//   })
// )


