'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-md w-full text-center">
            {/* Critical Error Icon */}
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            
            {/* Error Message */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Critical Error
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                A critical error occurred that prevented the application from loading properly. 
                Please try refreshing the page or contact support if the problem persists.
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
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={reset}
                className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800"
              >
                Try Again
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-base border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100"
              >
                Go to Homepage
              </button>
            </div>
            
            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
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
        </div>
      </body>
    </html>
  );
}