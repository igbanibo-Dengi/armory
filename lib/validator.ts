import * as z from "zod"

export const loadoutFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    weapon: z.string(),
    gameMode: z.string(),
    description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    firstAttachment: z.string(),
    secondAttachment: z.string(),
    thirdAttachment: z.string(),
    fourthAttachment: z.string(),
    fifthAttachment: z.string(),
    imageUrl: z.string(),
    categoryId: z.string(),
    url: z.string().url()
})