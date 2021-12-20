import { Command } from "@bett3r-dev/server-core";
import { InvoiceEvents } from ".";
import { InvoiceModel, InvoiceModelSchema } from "./invoice.models";

export const CreateInvoice: Command<InvoiceModel> = () => ({
  schema: InvoiceModelSchema,
  events:[
    InvoiceEvents.InvoiceCreated
  ],
})
