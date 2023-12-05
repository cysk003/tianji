import * as z from "zod"
import { CompleteWorkspacesOnUsers, RelatedWorkspacesOnUsersModelSchema, CompleteWebsite, RelatedWebsiteModelSchema, CompleteNotification, RelatedNotificationModelSchema, CompleteMonitor, RelatedMonitorModelSchema, CompleteUser, RelatedUserModelSchema } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const WorkspaceModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  dashboardOrder: z.string().array(),
  /**
   * [DashboardLayout]
   */
  dashboardLayout: jsonSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteWorkspace extends z.infer<typeof WorkspaceModelSchema> {
  users: CompleteWorkspacesOnUsers[]
  websites: CompleteWebsite[]
  notifications: CompleteNotification[]
  monitors: CompleteMonitor[]
  selectedUsers: CompleteUser[]
}

/**
 * RelatedWorkspaceModelSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWorkspaceModelSchema: z.ZodSchema<CompleteWorkspace> = z.lazy(() => WorkspaceModelSchema.extend({
  users: RelatedWorkspacesOnUsersModelSchema.array(),
  websites: RelatedWebsiteModelSchema.array(),
  notifications: RelatedNotificationModelSchema.array(),
  monitors: RelatedMonitorModelSchema.array(),
  selectedUsers: RelatedUserModelSchema.array(),
}))