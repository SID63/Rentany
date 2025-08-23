import React from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import type { ErrorDisplayProps } from '@/types/error';

export function ErrorDisplay({
  title,
  message,
  actions = [],
  showDetails = false,
  error,
  className
}: ErrorDisplayProps) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 text-center",
      className
    )}>
      {/* Error Icon */}
      <div className="mb-6">
        <div className="mx-auto flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
          <svg
            className="w-8 h-8 text-red-600"
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
      
      {/* Error Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      
      {/* Error Message */}
      <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
        {message}
      </p>
      
      {/* Error Details (development only) */}
      {showDetails && error && process.env.NODE_ENV === 'development' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-lg w-full">
          <h3 className="text-sm font-medium text-red-800 mb-2">Error Details:</h3>
          <p className="text-xs text-red-700 font-mono break-all">
            {error.message}
          </p>
          {error.digest && (
            <p className="text-xs text-red-600 mt-2">
              Error ID: {error.digest}
            </p>
          )}
          {error.stack && (
            <details className="mt-2">
              <summary className="text-xs text-red-600 cursor-pointer">
                Stack Trace
              </summary>
              <pre className="text-xs text-red-700 mt-1 whitespace-pre-wrap">
                {error.stack}
              </pre>
            </details>
          )}
        </div>
      )}
      
      {/* Action Buttons */}
      {actions.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'primary'}
              size="md"
              onClick={action.action}
              className={cn(
                actions.length === 1 ? 'w-full' : 'flex-1'
              )}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

// Preset error displays for common scenarios
export function NetworkErrorDisplay({ onRetry }: { onRetry: () => void }) {
  return (
    <ErrorDisplay
      title="Connection Error"
      message="Unable to connect to our servers. Please check your internet connection and try again."
      actions={[
        { label: 'Try Again', action: onRetry, variant: 'primary' }
      ]}
    />
  );
}

export function NotFoundErrorDisplay({ onGoHome }: { onGoHome: () => void }) {
  return (
    <ErrorDisplay
      title="Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
      actions={[
        { label: 'Go Home', action: onGoHome, variant: 'primary' }
      ]}
    />
  );
}

export function UnauthorizedErrorDisplay({ onLogin }: { onLogin: () => void }) {
  return (
    <ErrorDisplay
      title="Access Denied"
      message="You don't have permission to access this resource. Please log in and try again."
      actions={[
        { label: 'Log In', action: onLogin, variant: 'primary' }
      ]}
    />
  );
}