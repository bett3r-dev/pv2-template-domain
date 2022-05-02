//TODO: Terminar definiciones

import * as joi from 'joi';
export type MenuModel = Partial<{
  professionalId: string,
  name: string
  variants: Array<MenuVariant>
}>

export type MenuVariant = Partial <{
 name: string,
 type: "breakfast"|"brunch"|"lunch"|"dinner",
 time: number,
 carbohydrates: string,
 protein: string,
 vegetable: string,
 fat: string,
 fruit: string,
 dressing: string,
 instructions: string
}>

export const MenuVariantSchema = joi.object<MenuVariant>().keys({
  name: joi.string(),
  type: joi.string().valid('breakfast','brunch','lunch','dinner'),
  time: joi.number(),
  carbohydrates: joi.string(),
  protein: joi.string(),
  vegetable: joi.string(),
  fat: joi.string(),
  fruit: joi.string(),
  dressing: joi.string(),
  instructions: joi.string(),
})

export const MenuModelSchema = joi.object<MenuModel>().keys({
  professionalId: joi.string().uuid(),
  name: joi.string(),
  variants: joi.array().has(MenuVariantSchema)
})
