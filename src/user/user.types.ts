import joi from "joi";

export type UserModel = {
  id: string,
  name: string,
  lastName: string,
  mail: string,
  address: string
}

export const UserModelSchema = joi.object().keys({
  id: joi.string().uuid(),
  name: joi.string(),
  lastName: joi.string(),
  mail: joi.string().email(),
  address: joi.string()
})