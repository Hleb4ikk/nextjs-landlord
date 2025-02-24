'use client';
import { useUser } from '@/contexts/user/user-context';
import { redirect, useSearchParams } from 'next/navigation';

export default function Catalog() {
  const user = useUser();
  const params = useSearchParams();
  const redirectUrl = params?.get('redirect_url');
  if (redirectUrl && user) redirect(redirectUrl);

  return <>Catalog</>;
}
