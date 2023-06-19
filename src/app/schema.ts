import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  authorId: z.number(),
});

declare global {
  type UserT = z.infer<typeof userSchema>;
  type PostT = z.infer<typeof postSchema>;
}
