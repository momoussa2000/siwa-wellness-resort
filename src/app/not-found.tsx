import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
} 