import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    type = 'text',
    label,
    error,
    helperText,
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = variant === 'error' || !!error;
    const actualVariant = hasError ? 'error' : variant;
    
    const baseStyles = 'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-secondary-400';
    
    const variants = {
      default: 'border-secondary-300 bg-white text-secondary-900 focus:border-primary-500 focus:ring-primary-500/20',
      error: 'border-red-300 bg-white text-secondary-900 focus:border-red-500 focus:ring-red-500/20',
      success: 'border-accent-300 bg-white text-secondary-900 focus:border-accent-500 focus:ring-accent-500/20'
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-4 py-3 text-lg'
    };
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary-700 mb-1"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            baseStyles,
            variants[actualVariant],
            sizes[size],
            className
          )}
          ref={ref}
          {...props}
        />
        {(error || helperText) && (
          <div className="mt-1">
            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}
            {helperText && !error && (
              <p className="text-sm text-secondary-500">
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  variant?: 'default' | 'error' | 'success';
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant = 'default', 
    label,
    error,
    helperText,
    id,
    ...props 
  }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = variant === 'error' || !!error;
    const actualVariant = hasError ? 'error' : variant;
    
    const baseStyles = 'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-secondary-400 resize-vertical min-h-[80px]';
    
    const variants = {
      default: 'border-secondary-300 bg-white text-secondary-900 focus:border-primary-500 focus:ring-primary-500/20',
      error: 'border-red-300 bg-white text-secondary-900 focus:border-red-500 focus:ring-red-500/20',
      success: 'border-accent-300 bg-white text-secondary-900 focus:border-accent-500 focus:ring-accent-500/20'
    };
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-sm font-medium text-secondary-700 mb-1"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            baseStyles,
            variants[actualVariant],
            'px-4 py-2 text-base',
            className
          )}
          ref={ref}
          {...props}
        />
        {(error || helperText) && (
          <div className="mt-1">
            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}
            {helperText && !error && (
              <p className="text-sm text-secondary-500">
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Input, Textarea };