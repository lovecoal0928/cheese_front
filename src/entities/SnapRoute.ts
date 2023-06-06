import { SnapPost } from './SnapPost';

export type SnapRoute = {
    snapRouteId: string;
    title: string;
    createdUserId: string;
    createdAt: Date;
    updatedAt: Date;
    snapPosts: Array<SnapPost>;
};
