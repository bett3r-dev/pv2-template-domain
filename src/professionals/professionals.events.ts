import { ProfessionalModel, ProfessionalModelSchema, ProfessionalDetails, PersonalDetailsSchema, ProfessionalDetailsSchema } from './professionals.types';

import { Event } from "@bett3r-dev/server-core";
import { PersonalDetails } from './professionals.types';

export const ProfessionalProfileCreated: Event<ProfessionalModel> = () => ({
  schema: ProfessionalModelSchema,
})
export const ProfessionalProfileApproved: Event<ProfessionalModel> = () => ({
  schema: ProfessionalModelSchema,
})
export const ProfessionalProfileRejected: Event<ProfessionalModel> = () => ({
  schema: ProfessionalModelSchema,
})
export const ProfessionalPersonalDetailsUpserted: Event<PersonalDetails> = () => ({
  schema: PersonalDetailsSchema
})
export const ProfessionalProfessionalDetailsUpserted: Event<ProfessionalDetails> = () => ({
  schema: ProfessionalDetailsSchema
})
