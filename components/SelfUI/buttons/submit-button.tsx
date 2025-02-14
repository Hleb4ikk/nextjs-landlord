import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      className="mt-2 w-[10em] w-full border-[2px] border-[#393939] bg-[#393939] hover:bg-[#393939]/20 active:bg-[#303030]/0"
    >
      {pending ? 'Submitting...' : children}
    </Button>
  );
};
