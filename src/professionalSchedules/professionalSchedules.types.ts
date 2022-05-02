import * as joi from 'joi';

//TODO: revisar tyopes

export type ProfessionalScheduleModel = Partial<{
  professionalId: string;
  teamId: string;
  week: Array<DayTimeLapse>;
}>;

export type DayTimeLapse = {
  // dayOfWeek: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; //NOTE: all?
  dayOfWeek: number,
  hoursStart: number; //NOTE: date?
  hoursEnd: number;
  minutesStart: number;
  minutesEnd: number
};

export const DayTimeLapseSchema = joi.object<DayTimeLapse>().keys({
  dayOfWeek: joi.number().valid(1,2,3,4,5,6,7),
  hoursStart: joi.number(),
  hoursEnd: joi.number(),
  minutesStart: joi.number(),
  minutesEnd: joi.number()
});

export const ProfessionalScheduleModelSchema = joi.object<ProfessionalScheduleModel>().keys({
  professionalId: joi.string().uuid(),
  teamId: joi.string().uuid().optional(),
  week: joi.array().has(DayTimeLapseSchema)
});
