import { getSessionUser } from '@/data/user';
import { db } from '@/drizzle/db';
import { UsersTable } from '@/drizzle/schemas/users';
import { deleteFiles } from '@/storage/actions';
import { eq } from 'drizzle-orm';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const uploader = createUploadthing();
export const AppFileRouter = {
  AvatarUploader: uploader({
    image: {
      maxFileSize: '4MB',
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const user = await getSessionUser();

      if (!user) throw new UploadThingError('Unauthorized');
      if (user.avatarKey) await deleteFiles([user.avatarKey]);
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log('file key:', file.key);

      await db.update(UsersTable).set({ avatarKey: file.key }).where(eq(UsersTable.id, metadata.userId));
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
export type AppFileRouter = typeof AppFileRouter;
