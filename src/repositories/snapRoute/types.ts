import { z } from 'zod';
import { SnapPostResponseScheme } from '../snapPost/types';

export const SnapRouteResponseScheme = z.object({
    snapRouteId: z.string(),
    title: z.string(),
    createdUserId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    snapPosts: z.array(SnapPostResponseScheme),
});

export type SnapRouteResponse = z.infer<typeof SnapRouteResponseScheme>;

const CreateSnapRouteRequestScheme = z.object({
    title: z.string(),
    snapPostIds: z.array(z.string()),
});

export type CreateSnapRouteRequest = z.infer<
    typeof CreateSnapRouteRequestScheme
>;

const DeleteSnapRouteRequestScheme = z.object({
    snapRouteId: z.string(),
});

export type DeleteSnapRouteRequest = z.infer<
    typeof DeleteSnapRouteRequestScheme
>;

const UpdateSnapRouteRequestScheme = z.object({
    snapRouteId: z.string(),
    title: z.string(),
    snapPostIds: z.array(z.string()),
});

export type UpdateSnapRouteRequest = z.infer<
    typeof UpdateSnapRouteRequestScheme
>;

export const FetchSnapRouteRequestScheme = z.object({
    snapRouteId: z.string(),
});

export type FetchSnapRouteRequest = z.infer<typeof FetchSnapRouteRequestScheme>;

export const SnapRouteResponseListScheme = z.array(SnapRouteResponseScheme);

export type SnapRouteResponseList = z.infer<typeof SnapRouteResponseListScheme>;
