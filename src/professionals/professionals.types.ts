//TODO: USERID viene en el post de createProfessionalProfile -> verificar que exista el user

import * as joi from 'joi';
export type ProfessionalModel = Partial<{
  validationStatus: 'pending'|'approved'|'rejected',
  personalDetails: PersonalDetails,
  professionalDetails: ProfessionalDetails,
}>

export type PersonalDetails = Partial<{
  name: string,
  address: string,
  phoneNumber: number,
  email: string,
  country: string,
}>
export type ProfessionalDetails = Partial<{
  //TODO: definir
}>

export const PersonalDetailsSchema = joi.object<PersonalDetails>().keys({
  name: joi.string(),
  address: joi.string(),
  phoneNumber: joi.number(),
  email:  joi.string(),
  country:  joi.string(),
})
export const ProfessionalDetailsSchema = joi.object<ProfessionalDetails>().keys({

})

export const ProfessionalModelSchema = joi.object<ProfessionalModel>().keys({
  personalDetails: PersonalDetailsSchema,
    professionalDetails: ProfessionalDetailsSchema
})



