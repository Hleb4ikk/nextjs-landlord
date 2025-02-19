'use client';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { useRef } from 'react';

import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FileInput({ className }: { className?: string }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the selected file here
      console.log('Selected file:', file);
    }
  };

  return (
    <>
      <Input
        className="hidden"
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
      />
      <Button
        onClick={handleButtonClick}
        className={cn('flex items-center gap-2', className)}
      >
        <Upload className="h-4 w-4" />
      </Button>
    </>
  );
}
