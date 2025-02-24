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
              <div className="flex h-[40px] h-[50px] w-[40px] w-[50px] items-center justify-center">
                <Upload className="h-[50%] w-[50%]" />
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
