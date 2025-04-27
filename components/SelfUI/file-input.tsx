'use client';

import { Upload } from 'lucide-react';
import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';
import { AppFileRouter } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<AppFileRouter>();
export const UploadDropzone = generateUploadDropzone<AppFileRouter>();

export function FileInput({ className }: { className?: string }) {
  return (
    <>
      <UploadButton
        className={className}
        endpoint={'AvatarUploader'}
        content={{
          button() {
            return (
              <div className="flex w-[120px] justify-center gap-2 rounded-lg border-[2px] p-1 text-lg hover:bg-white hover:text-black">
                <Upload /> Upload
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
