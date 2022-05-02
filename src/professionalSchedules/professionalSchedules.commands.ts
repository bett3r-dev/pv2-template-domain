import { Command } from "@bett3r-dev/server-core";
import { ProfessionalScheduleModel, ProfessionalScheduleModelSchema } from "src/domain/src/professionalSchedules/professionalSchedules.types";
import { ProfessionalSchedulesEvents } from ".";

//TODO: errors
export const UpsertSchedule: Command<ProfessionalScheduleModel> = () => ({
  schema: ProfessionalScheduleModelSchema,
  isPublic: true,
  events:[ProfessionalSchedulesEvents.ScheduleUpserted],
  errors: []
})
