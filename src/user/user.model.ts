import joi from "joi";

export type UserModel = {
  address: string
}

export const UserModelSchema = joi.object().keys({
  address: joi.string()
})