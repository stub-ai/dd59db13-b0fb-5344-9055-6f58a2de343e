import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <p className="mt-4">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <a className="mt-8 bg-blue-500 text-white py-2 px-4 rounded">Go Back Home</a>
      </Link>
    </div>
  );
}