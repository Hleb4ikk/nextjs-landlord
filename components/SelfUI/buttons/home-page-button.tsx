import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const HomePageButton = ({
  href,
  children,
}: {
  className?: string;
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <Button asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
