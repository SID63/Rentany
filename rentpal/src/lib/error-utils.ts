import type { 
  AppError, 
  ErrorContext, 
  ErrorReport, 
  ErrorSeverity, 
  ClientErrorType,
  NetworkError 
} from '@/types/error';

/**
 * Creates a standardized application error
 */
export function createAppError(
  message: string,
  code?: string,
  statusCode?: number
): AppError {
  const error = new Error(message) as AppError;
  if (code !== undefined) error.code = code;
  if (statusCode !== undefined) error.statusCode = statusCode;
  error.timestamp = new Date();
  return error;
}

/**
 * Creates a network error from a fetch response
 */
export function createNetworkError(
  message: string,
  statusCode: number,
  response?: Response
): NetworkError {
  const error = createAppError(message, 'NETWORK_ERROR', statusCode) as NetworkError;
  error.isNetworkError = true;
  if (response !== undefined) error.response = response;
  return error;
}

/**
 * Determines error severity based on error type and status code
 */
export function getErrorSeverity(error: AppError): ErrorSeverity {
  if (error.statusCode) {
    if (error.statusCode >= 500) return 'critical';
    if (error.statusCode >= 400) return 'medium';
    return 'low';
  }
  
  if (error.code) {
    switch (error.code) {
      case 'NETWORK_ERROR':
      case 'SERVER_ERROR':
        return 'high';
      case 'AUTHENTICATION_ERROR':
      case 'AUTHORIZATION_ERROR':
        return 'medium';
      case 'VALIDATION_ERROR':
      case 'NOT_FOUND_ERROR':
        return 'low';
      default:
        return 'medium';
    }
  }
  
  return 'medium';
}

/**
 * Determines client error type from error
 */
export function getClientErrorType(error: AppError): ClientErrorType {
  if (error.code) {
    switch (error.code) {
      case 'NETWORK_ERROR':
        return 'NETWORK_ERROR';
      case 'VALIDATION_ERROR':
        return 'VALIDATION_ERROR';
      case 'AUTHENTICATION_ERROR':
        return 'AUTHENTICATION_ERROR';
      case 'AUTHORIZATION_ERROR':
        return 'AUTHORIZATION_ERROR';
      case 'NOT_FOUND_ERROR':
        return 'NOT_FOUND_ERROR';
      case 'SERVER_ERROR':
        return 'SERVER_ERROR';
      default:
        return 'UNKNOWN_ERROR';
    }
  }
  
  if (error.statusCode) {
    if (error.statusCode === 404) return 'NOT_FOUND_ERROR';
    if (error.statusCode === 401) return 'AUTHENTICATION_ERROR';
    if (error.statusCode === 403) return 'AUTHORIZATION_ERROR';
    if (error.statusCode >= 400 && error.statusCode < 500) return 'VALIDATION_ERROR';
    if (error.statusCode >= 500) return 'SERVER_ERROR';
  }
  
  return 'UNKNOWN_ERROR';
}

/**
 * Creates error context for reporting
 */
export function createErrorContext(additionalContext?: Partial<ErrorContext>): ErrorContext {
  const context: ErrorContext = {
    timestamp: new Date(),
    errorId: generateErrorId(),
  };
  
  if (typeof window !== 'undefined') {
    context.userAgent = window.navigator.userAgent;
    context.url = window.location.href;
  }
  
  return {
    ...context,
    ...additionalContext
  };
}

/**
 * Generates a unique error ID
 */
export function generateErrorId(): string {
  return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Creates a complete error report
 */
export function createErrorReport(
  error: AppError,
  context?: Partial<ErrorContext>
): ErrorReport {
  const fullContext = createErrorContext(context);
  const severity = getErrorSeverity(error);
  const type = getClientErrorType(error);
  
  const report: ErrorReport = {
    error,
    context: fullContext,
    severity,
    type,
  };
  
  if (error.stack) report.stack = error.stack;
  if ((error as any).componentStack) report.componentStack = (error as any).componentStack;
  
  return report;
}

/**
 * Logs error to console with proper formatting
 */
export function logError(error: AppError, context?: ErrorContext): void {
  const report = createErrorReport(error, context);
  
  console.group(`🚨 ${report.severity.toUpperCase()} ERROR: ${report.type}`);
  console.error('Message:', error.message);
  console.error('Error ID:', report.context.errorId);
  console.error('Timestamp:', report.context.timestamp.toISOString());
  
  if (error.code) console.error('Code:', error.code);
  if (error.statusCode) console.error('Status Code:', error.statusCode);
  if (report.context.url) console.error('URL:', report.context.url);
  if (report.context.userId) console.error('User ID:', report.context.userId);
  
  if (error.stack) {
    console.group('Stack Trace:');
    console.error(error.stack);
    console.groupEnd();
  }
  
  if (report.componentStack) {
    console.group('Component Stack:');
    console.error(report.componentStack);
    console.groupEnd();
  }
  
  console.groupEnd();
}

/**
 * Handles errors with logging and optional reporting
 */
export function handleError(
  error: AppError,
  context?: Partial<ErrorContext>,
  shouldReport: boolean = true
): void {
  const fullContext = createErrorContext(context);
  
  // Always log errors in development
  if (process.env['NODE_ENV'] === 'development') {
    logError(error, fullContext);
  }
  
  // Report errors in production (you would integrate with your error reporting service here)
  if (shouldReport && process.env['NODE_ENV'] === 'production') {
    const report = createErrorReport(error, fullContext);
    // TODO: Send to error reporting service (e.g., Sentry, LogRocket, etc.)
    console.error('Error Report:', report);
  }
}

/**
 * Wraps async functions with error handling
 */
export function withErrorHandling<T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  context?: Partial<ErrorContext>
): (...args: T) => Promise<R> {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      const appError = error instanceof Error 
        ? (error as AppError)
        : createAppError('Unknown error occurred');
      
      handleError(appError, context);
      throw appError;
    }
  };
}

/**
 * Checks if an error is a network error
 */
export function isNetworkError(error: any): error is NetworkError {
  return error && typeof error === 'object' && error.isNetworkError === true;
}

/**
 * Gets user-friendly error message
 */
export function getUserFriendlyErrorMessage(error: AppError): string {
  const type = getClientErrorType(error);
  
  switch (type) {
    case 'NETWORK_ERROR':
      return 'Unable to connect to our servers. Please check your internet connection and try again.';
    case 'AUTHENTICATION_ERROR':
      return 'Please log in to access this feature.';
    case 'AUTHORIZATION_ERROR':
      return 'You don\'t have permission to perform this action.';
    case 'NOT_FOUND_ERROR':
      return 'The requested resource could not be found.';
    case 'VALIDATION_ERROR':
      return 'Please check your input and try again.';
    case 'SERVER_ERROR':
      return 'A server error occurred. Please try again later.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}