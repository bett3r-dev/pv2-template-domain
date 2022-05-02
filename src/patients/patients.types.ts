//TODO: USERID viene en el post de createPatientProfile -> verificar que exista el user

import * as joi from 'joi';
export type PatientModel = Partial<{
  personalDetails: PersonalDetails,
  medicalInformation: MedicalInformation,
  anthropometricData: AnthropometricData,
  menuList: Array<PatientMenu>
}>

export type PersonalDetails = Partial<{
  //TODO: RUT o algo mas universal?
  name: string,
  address: string,
  phoneNumber: number,
  email: string,
  country: string
}>
export type MedicalInformation = Partial<{
  //TODO: definir
}>
export type AnthropometricData = Partial<{
  //TODO: definir
  weight: number,
  height: number,
}>
export type PatientMenu = Partial<{
  professionalId: string,
  menuId: string
}>

export const PersonalDetailsSchema = joi.object<PersonalDetails>().keys({
  address: joi.string(),
  phoneNumber: joi.number(),
  email:  joi.string(),
  country: joi.string(),
  name: joi.string()
})
export const MedicalInformationSchema = joi.object<MedicalInformation>().keys({

})
export const PatientMenuSchema = joi.object<PatientMenu>().keys({
  professionalId: joi.string().uuid(),
  menuId: joi.string().uuid()
})
export const MenuListSchema = joi.array().items(PatientMenuSchema)
export const AnthropometricDataSchema = joi.object<AnthropometricData>().keys({
  weight: joi.number(),
  height: joi.number(),
})


export const BasePatientSchema = joi.object<PatientModel>().keys({
  menuList: MenuListSchema
})

export const PatientModelSchema = BasePatientSchema.concat(
  joi.object<PatientModel>().keys({
    personalDetails: PersonalDetailsSchema.optional(),
    medicalInformation: MedicalInformationSchema.optional(),
    anthropometricData: AnthropometricDataSchema.optional()
  })
)


