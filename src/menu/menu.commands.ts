import { Command } from "@bett3r-dev/server-core";
import { MenuModel, MenuModelSchema } from "src/domain/src/menu/menu.types";
import * as MenuEvents from 'src/domain/src/menu/menu.events';


//TODO: errors
export const CreateMenu: Command<MenuModel> = () =>({
  schema: MenuModelSchema,
  isPublic: true,
  events: [MenuEvents.MenuCreated],
  errors: []
})
export const UpdateMenu: Command<MenuModel> = () => ({
  schema: MenuModelSchema,
  isPublic: true,
  events: [MenuEvents.MenuUpdated],
  errors: []
})

