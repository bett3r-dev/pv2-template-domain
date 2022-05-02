import { MenuModel, MenuModelSchema } from "./menu.types";

import { Event } from "@bett3r-dev/server-core";

export const MenuCreated: Event<MenuModel> = () => ({
  schema: MenuModelSchema,
})
export const MenuUpdated: Event<MenuModel> = () => ({
  schema: MenuModelSchema,
})
