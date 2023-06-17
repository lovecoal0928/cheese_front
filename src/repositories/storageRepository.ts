import { deleteObject, ref, uploadString } from 'firebase/storage';
import { storage } from '../plugins/firebase';

export const storageRepository = {
    upload: async (base64Url: string, folderName: string): Promise<string> => {
        const storageRef = ref(storage, folderName);
        const result = await uploadString(storageRef, base64Url, 'base64');
        return result.ref.fullPath;
    },
    // delete: async (filePath: string) => {
    //     const storageRef = ref(storage, filePath);
    //     await storage.refFromURL(fileUrl).delete();
    // },
};
