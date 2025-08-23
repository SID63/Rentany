/**
 * Error handling types for Rent Any application
 */

// Base error interface for application errors
export interface AppError extends Error {
  code?: string;
  statusCode?: number;
  digest?: string;
  timestamp?: Date;
}

// Error boundary props interface
export interface ErrorBoundaryProps {
  error: AppError;
  reset: () => void;
}

// Error context for logging and reporting
export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  userAgent?: string;
  url?: string;
  timestamp: Date;
  errorId: string;
}

// API error response interface
export interface ApiErrorResponse {
  error: {
    message: string;
    code: string;
    statusCode: number;
    details?: Record<string, any>;
  };
  timestamp: string;
  path: string;
}

// Form validation error interface
export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

// Network error interface
export interface NetworkError extends AppError {
  isNetworkError: true;
  statusCode: number;
  response?: Response;
}

// Client-side error types
export type ClientErrorType = 
  | 'NETWORK_ERROR'
  | 'VALIDATION_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'AUTHORIZATION_ERROR'
  | 'NOT_FOUND_ERROR'
  | 'SERVER_ERROR'
  | 'UNKNOWN_ERROR';

// Error severity levels
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

// Error reporting interface
export interface ErrorReport {
  error: AppError;
  context: ErrorContext;
  severity: ErrorSeverity;
  type: ClientErrorType;
  stack?: string;
  componentStack?: string;
}

// Error handler function type
export type ErrorHandler = (error: AppError, context?: ErrorContext) => void;

// Error recovery action interface
export interface ErrorRecoveryAction {
  label: string;
  action: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

// Error display props interface
export interface ErrorDisplayProps {
  title: string;
  message: string;
  actions?: ErrorRecoveryAction[];
  showDetails?: boolean;
  error?: AppError;
  className?: string;
}