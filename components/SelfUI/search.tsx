'use client';

import { Input } from '@/components/ui/input';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
interface SearchProps {
  className?: string;
  placeholder: string;
}

export default function Search({ className, placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      className={className}
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
}
