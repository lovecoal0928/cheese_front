import { z } from 'zod';

const UserRequestScheme = z.object({
    name: z.string(),
    iconPath: z.string(),
});

export type UserRequest = z.infer<typeof UserRequestScheme>;
