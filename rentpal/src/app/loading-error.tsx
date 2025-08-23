'use client';

import { ErrorDisplay } from '@/components/ui/ErrorDisplay';
import type { ErrorBoundaryProps } from '@/types/error';

export default function LoadingError({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <ErrorDisplay
        title="Loading Error"
        message="We encountered an issue while loading this content. This might be a temporary problem."
        showDetails={true}
        error={error}
        actions={[
          { 
            label: 'Try Again', 
            action: reset, 
            variant: 'primary' 
          },
          { 
            label: 'Go Home', 
            action: () => window.location.href = '/', 
            variant: 'outline' 
          }
        ]}
      />
    </div>
  );
}