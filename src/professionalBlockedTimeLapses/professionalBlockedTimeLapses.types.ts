import * as joi from 'joi';

export type BlockedTimeLapseModel = Partial<{
  professionalId: string;
  active: boolean;
  dateTimeStart: Date;
  dateTimeEnd: Date;
}>

export const BlockedTimeLapseModelSchema = joi.object<BlockedTimeLapseModel>().keys({
   professionalId: joi.string().uuid(),
   active: joi.bool(),
   dateTimeStart: joi.date(),
   dateTimeEnd: joi.date()
  })
