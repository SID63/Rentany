'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Error Icon with Rent Any styling */}
        <div className="mb-8">
          <div className="mx-auto flex items-center justify-center w-20 h-20 bg-red-100 rounded-full">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>
        
        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Something went wrong!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We're sorry, but something unexpected happened. 
            Our team has been notified and is working to fix the issue.
          </p>
          
          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <h3 className="text-sm font-medium text-red-800 mb-2">Error Details:</h3>
              <p className="text-xs text-red-700 font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
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
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full"
            onClick={reset}
          >
            Try Again
          </Button>
          
          <div className="flex space-x-4">
            <Link href="/" className="flex-1">
              <Button variant="outline" size="md" className="w-full">
                Go Home
              </Button>
            </Link>
            <Link href="/contact" className="flex-1">
              <Button variant="outline" size="md" className="w-full">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Additional Help Text */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If this problem persists, please{' '}
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              contact our support team
            </Link>{' '}
            with the error details above.
          </p>
        </div>
      </div>
    </div>
  );
}