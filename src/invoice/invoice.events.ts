import { Event } from "@bett3r-dev/server-core";
import { InvoiceModel, InvoiceModelSchema } from "./invoice.types";

export const InvoiceCreated: Event<InvoiceModel> = () => ({
  schema: InvoiceModelSchema
})
