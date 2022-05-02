import { Command } from "@bett3r-dev/server-core";
import { PatientMenu, PatientMenuSchema, PatientModel, PatientModelSchema, PersonalDetailsSchema, MedicalInformationSchema, AnthropometricDataSchema, PersonalDetails, MedicalInformation, AnthropometricData } from "./patients.types";
import * as joi from 'joi';
import { PatientsEvents } from ".";

//TODO: errors
export const CreatePatientProfile: Command<PatientModel> = () => ({
  schema: PatientModelSchema,
  isPublic: true,
  events:[PatientsEvents.PatientProfileCreated],
  errors: []
})
export const UpsertPatientPersonalDetails: Command<PersonalDetails> = () => ({
  schema: PersonalDetailsSchema,
  isPublic: true,
  events:[PatientsEvents.PatientPersonalDetailsUpserted],
  errors: []
})
export const UpsertPatientMedicalInformation:Command<MedicalInformation> = () => ({
  schema: joi.object().keys({}).allow(null),
  isPublic: true,
  events:[PatientsEvents.PatientMedicalInformationUpserted],
  errors: []
})
export const UpsertPatientAnthropometricData:Command<AnthropometricData>= () => ({
  schema: AnthropometricDataSchema,
  isPublic: true,
  events:[PatientsEvents.PatientAnthropometricDataUpserted],
  errors: []
})
export const AssignMenu:Command<PatientMenu> = () => ({
  schema: PatientMenuSchema,
  isPublic: true,
  events:[PatientsEvents.MenuAssigned],
  errors: []
})

