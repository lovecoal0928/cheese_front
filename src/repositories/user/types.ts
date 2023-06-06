import { z } from 'zod';

export const UserResponseScheme = z.object({
    userId: z.string(),
    name: z.string(),
    iconPath: z.string(),
    resistedAt: z.string(),
    updatedAt: z.string(),
});

export type UserResponse = z.infer<typeof UserResponseScheme>;

const CreateUserRequestScheme = z.object({
    name: z.string(),
    iconPath: z.string(),
});

export type CreateUserRequest = z.infer<typeof CreateUserRequestScheme>;

const FetchUserRequestScheme = z.object({
    userId: z.string(),
});

export type FetchUserRequest = z.infer<typeof FetchUserRequestScheme>;
