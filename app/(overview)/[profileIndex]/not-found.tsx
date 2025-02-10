"use client"
import Link from "next/link";
import { useParams } from "next/navigation";

const NotFound = () => {
  const params = useParams();
  return (
    <main className="absolute inset-0 flex justify-center items-center">
      <div className="">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-3xl">Profile <span className="font-semibold">{params?.profileIndex}</span> not found.</p>
        <Link href="/catalog">Go to catalog</Link>
      </div>
    </main>
  );
};

export default NotFound;
