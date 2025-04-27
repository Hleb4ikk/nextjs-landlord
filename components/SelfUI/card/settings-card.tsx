import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function SettingsCard({
  className,
  title,
  children,
  footer,
}: {
  className?: string;
  title: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <Card className={cn(className, 'w-full border-none bg-[#444444] text-white shadow-md')}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter className="flex justify-between">{footer}</CardFooter>}
    </Card>
  );
}
