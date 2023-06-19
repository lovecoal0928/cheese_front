import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from 'firebase/storage';
import { storage } from '../plugins/firebase';

export const storageRepository = {
    upload: async (blob: Blob, filePath: string): Promise<string> => {
        const storageRef = ref(storage, filePath);
        const result = await uploadBytes(storageRef, blob);
        return result.ref.fullPath;
    },

    getFileUrl: async (filePath: string): Promise<string> => {
        const storageRef = ref(storage, filePath);
        return getDownloadURL(storageRef);
    },

    delete: async (filePath: string) => {
        const storageRef = ref(storage, filePath);
        await deleteObject(storageRef);
    },
};
