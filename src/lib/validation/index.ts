import { z } from "zod"

export const SignUpFormSchema = z.object({
    name: z.string().min(2, {message: 'Too Short'}),
    username: z.string().min(2, {message: 'Too Short'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Too Short'}),
  })
 