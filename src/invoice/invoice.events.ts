import { Event } from "@bett3r-dev/server-core";
import { InvoiceModel, InvoiceModelSchema } from "./invoice.models";

export const InvoiceCreated: Event<InvoiceModel> = () => ({
  schema: InvoiceModelSchema
})