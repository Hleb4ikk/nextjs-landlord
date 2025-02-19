'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const LinkButton = ({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <Button
      asChild
      variant={'outline'}
      className={cn('bg-opacity-0', className)}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
