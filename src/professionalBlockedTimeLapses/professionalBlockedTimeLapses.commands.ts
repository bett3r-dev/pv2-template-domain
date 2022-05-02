import { Command } from "@bett3r-dev/server-core";
import { BlockedTimeLapseModel, BlockedTimeLapseModelSchema } from './professionalBlockedTimeLapses.types';
import * as joi from 'joi';
import { ProfessionalBlockedTimeLapsesEvents } from ".";


export const BlockTimeLapse: Command<BlockedTimeLapseModel> = () => ({
  schema: BlockedTimeLapseModelSchema,
  isPublic: true,
  events:[ProfessionalBlockedTimeLapsesEvents.TimelapseBlocked],
  errors: []
})
export const UnblockTimeLapse: Command<{}> = () => ({
  schema: joi.object().keys({}).allow(null),
  isPublic: true,
  events:[ProfessionalBlockedTimeLapsesEvents.TimelapseUnblocked],
  errors: []
})
