'use client';

import { Upload } from 'lucide-react';
import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';
import { AppFileRouter } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<AppFileRouter>();
export const UploadDropzone = generateUploadDropzone<AppFileRouter>();

export function FileInput({ className }: { className?: string }) {
  return (
    <>
      {/* <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant={'outline'}
            className={cn('flex items-center gap-2', className)}
          >
            <Upload className="min-h-[20px] min-w-[20px]" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[25em] flex-col gap-2 rounded-xl border-2 border-[#383838] bg-[#222222] p-0 p-10">
          <AlertDialogCancel className="absolute right-2 top-2 mr-4 border-none bg-opacity-0 p-0 hover:bg-opacity-0">
            <X
              color="grey"
              size={20}
            />
          </AlertDialogCancel>
          <UploadDropzone endpoint={'AvatarUploader'}></UploadDropzone>
        </AlertDialogContent>
      </AlertDialog> */}
      <UploadButton
        className={className}
        endpoint={'AvatarUploader'}
        content={{
          button() {
            return (
              <div className="flex h-[50px] w-[50px] items-center justify-center">
                <Upload />
              </div>
            );
          },
          allowedContent() {
            return <p></p>;
          },
        }}
      />
    </>
  );
}
