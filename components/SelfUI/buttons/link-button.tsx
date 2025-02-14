'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

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
    <Button asChild variant={'outline'} className={'bg-opacity-0 ' + className}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
