import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* 404 Number with Rent Any styling */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold rent-any-text-gradient">
              404
            </h1>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sorry, we couldn't find the page you're looking for. 
              The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          {/* Rent Any Logo/Brand Element */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Rent Any</span>
            </div>
          </div>
          
          {/* Navigation Actions */}
          <div className="space-y-4">
            <Link href="/">
              <Button variant="primary" size="lg" className="w-full">
                Go Back Home
              </Button>
            </Link>
            
            <div className="flex space-x-4">
              <Link href="/about" className="flex-1">
                <Button variant="outline" size="md" className="w-full">
                  About Us
                </Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button variant="outline" size="md" className="w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Additional Help Text */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Visit our{' '}
              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-700 font-medium underline"
              >
                contact page
              </Link>{' '}
              or go back to the{' '}
              <Link 
                href="/" 
                className="text-blue-600 hover:text-blue-700 font-medium underline"
              >
                homepage
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}