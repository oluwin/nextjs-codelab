import { z } from 'zod'

export const businessHubSchema = z.object({
    businessUnitId: z.number(),
    businessUnitName: z.string(),
    region: z.string(),
    state: z.string(),
    contactPerson: z.string(),
})

export type GetBusinessHubResponse = z.infer<typeof businessHubSchema>
