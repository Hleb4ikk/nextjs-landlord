import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const HomePageButton = ({
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
      size={'lg'}
      asChild
      variant={'outline'}
      className={cn(className, 'bg-opacity-35')}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
