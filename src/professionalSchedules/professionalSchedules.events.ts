import { Event } from "@bett3r-dev/server-core";
import { ProfessionalScheduleModel, ProfessionalScheduleModelSchema } from './professionalSchedules.types';

export const ScheduleUpserted: Event<ProfessionalScheduleModel> = () => ({
  schema: ProfessionalScheduleModelSchema
})
