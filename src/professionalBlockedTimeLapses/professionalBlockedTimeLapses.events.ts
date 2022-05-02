import { Event } from "@bett3r-dev/server-core";
import { BlockedTimeLapseModel, BlockedTimeLapseModelSchema } from './professionalBlockedTimeLapses.types';

export const TimelapseBlocked: Event<BlockedTimeLapseModel> = () => ({
  schema: BlockedTimeLapseModelSchema
})
export const TimelapseUnblocked: Event<BlockedTimeLapseModel> = () => ({
  schema: BlockedTimeLapseModelSchema
})
