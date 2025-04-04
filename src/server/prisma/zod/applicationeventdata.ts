import * as z from "zod"
import * as imports from "./schemas/index.js"
import { CompleteApplication, RelatedApplicationModelSchema, CompleteApplicationEvent, RelatedApplicationEventModelSchema } from "./index.js"

export const ApplicationEventDataModelSchema = z.object({
  id: z.string(),
  applicationId: z.string(),
  applicationEventId: z.string(),
  eventKey: z.string(),
  stringValue: z.string().nullish(),
  numberValue: z.number().nullish(),
  dateValue: z.date().nullish(),
  dataType: z.number().int(),
  createdAt: z.date(),
})

export interface CompleteApplicationEventData extends z.infer<typeof ApplicationEventDataModelSchema> {
  application: CompleteApplication
  applicationEvent: CompleteApplicationEvent
}

/**
 * RelatedApplicationEventDataModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedApplicationEventDataModelSchema: z.ZodSchema<CompleteApplicationEventData> = z.lazy(() => ApplicationEventDataModelSchema.extend({
  application: RelatedApplicationModelSchema,
  applicationEvent: RelatedApplicationEventModelSchema,
}))
