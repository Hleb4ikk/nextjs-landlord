import { getSessionUser } from '@/data/user';
import { db } from '@/drizzle/db';
import { UsersTable } from '@/drizzle/schemas/users';
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

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log('Upload complete for userId:', metadata.userId);
      console.log('file url', file.ufsUrl);

      await db.update(UsersTable).set({ avatarPath: file.ufsUrl }).where(eq(UsersTable.id, metadata.userId));
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
export type AppFileRouter = typeof AppFileRouter;
