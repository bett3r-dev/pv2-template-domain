import { Command } from "@bett3r-dev/server-core";
import { ProfessionalModel } from "src/domain/src/professionals/professionals.types";
import { PersonalDetails, PersonalDetailsSchema, ProfessionalDetails, ProfessionalDetailsSchema, ProfessionalModelSchema } from './professionals.types';
import * as ProfessionalsEvents from 'src/domain/src/professionals/professionals.events';
import { ProfessionalsErrors } from 'src/domain/src/professionals/index';

export const CreateProfessionalProfile: Command<Omit<ProfessionalModel, 'validationStatus'>> = () => ({
  schema: ProfessionalModelSchema,
  isPublic: true,
  events:[ProfessionalsEvents.ProfessionalProfileCreated],
  errors: [ProfessionalsErrors.ProfessionalAlreadyCreated]
})
export const ApproveProfessionalProfile: Command<ProfessionalModel> = () => ({
  schema: ProfessionalModelSchema,
  isPublic: true,
  events:[ProfessionalsEvents.ProfessionalProfileApproved],
  errors: [ProfessionalsErrors.ProfessionalNotCreated]
})
export const RejectProfessionalProfile: Command<ProfessionalModel> = () => ({
  schema: ProfessionalModelSchema,
  isPublic: true,
  events:[ProfessionalsEvents.ProfessionalProfileRejected],
  errors: [ProfessionalsErrors.ProfessionalNotCreated]
})
export const UpsertProfessionalPersonalDetails: Command<Omit<PersonalDetails, 'email'>> = () => ({
  schema: PersonalDetailsSchema,
  isPublic: true,
  events:[ProfessionalsEvents.ProfessionalPersonalDetailsUpserted],
  errors: [ProfessionalsErrors.ProfessionalNotCreated]
})
export const UpsertProfessionalProfessionalDetails:Command<ProfessionalDetails> = () => ({
  schema: ProfessionalDetailsSchema,
  isPublic: true,
  events:[ProfessionalsEvents.ProfessionalProfessionalDetailsUpserted],
  errors: [ProfessionalsErrors.ProfessionalNotCreated]
})

