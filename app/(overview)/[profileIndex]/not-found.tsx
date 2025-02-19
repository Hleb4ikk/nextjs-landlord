'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
//TODO: fix scroll
const NotFound = () => {
  const params = useParams();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-3xl">
          Profile <span className="font-semibold">{params?.profileIndex}</span> not found.
        </p>
        <Link
          href="/catalog"
          className="text-blue-500 hover:underline"
        >
          Go to catalog
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
