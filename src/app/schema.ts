import { z } from 'zod';

export const userSchema = z
  .object({
    name: z.string(),
    email: z.string(),
  })
  .brand<'User'>();

declare global {
  type UserT = z.infer<typeof userSchema>;
}
