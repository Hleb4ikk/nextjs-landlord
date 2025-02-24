import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const ActionButton = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <Button
      size={'lg'}
      onClick={onClick}
      variant={'outline'}
      className={cn(className, 'bg-opacity-35')}
    >
      {children}
    </Button>
  );
};
