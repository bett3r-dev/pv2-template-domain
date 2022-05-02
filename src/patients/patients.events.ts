import { PatientModel, PatientModelSchema, PersonalDetails, PersonalDetailsSchema, MedicalInformation, MedicalInformationSchema, AnthropometricData, AnthropometricDataSchema, PatientMenu, PatientMenuSchema } from './patients.types';

import { Event } from "@bett3r-dev/server-core";
import * as joi from 'joi';

export const PatientProfileCreated: Event<PatientModel> = () => ({
  schema: PatientModelSchema,
})
export const PatientPersonalDetailsUpserted: Event<PersonalDetails> = () => ({
  schema:PersonalDetailsSchema,
})
export const PatientMedicalInformationUpserted: Event<MedicalInformation> = () => ({
  schema: joi.object().keys({}).allow(null),
})
export const PatientAnthropometricDataUpserted: Event<AnthropometricData> = () => ({
  schema: AnthropometricDataSchema
})
export const MenuAssigned: Event<PatientMenu> = () => ({
  schema: PatientMenuSchema
})
