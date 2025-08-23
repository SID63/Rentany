/**
 * Environment configuration for Rent Any application
 * Validates and provides type-safe access to environment variables
 */

export const env = {
  // Public environment variables (available in browser)
  public: {
    appName: process.env['NEXT_PUBLIC_APP_NAME'] || 'Rent Any',
    appUrl: process.env['NEXT_PUBLIC_APP_URL'] || 'https://rent-any.vercel.app',
    appDescription: process.env['NEXT_PUBLIC_APP_DESCRIPTION'] || 'Your trusted rental marketplace',
    contactEmail: process.env['NEXT_PUBLIC_CONTACT_EMAIL'] || 'contact@rent-any.com',
    supportEmail: process.env['NEXT_PUBLIC_SUPPORT_EMAIL'] || 'support@rent-any.com',
    googleAnalyticsId: process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'],
    vercelAnalyticsId: process.env['NEXT_PUBLIC_VERCEL_ANALYTICS_ID'],
  },

  // Private environment variables (server-side only)
  private: {
    apiKey: process.env['RENT_ANY_API_KEY'],
    databaseUrl: process.env['RENT_ANY_DATABASE_URL'],
    secretKey: process.env['RENT_ANY_SECRET_KEY'],
    stripePublicKey: process.env['RENT_ANY_STRIPE_PUBLIC_KEY'],
    stripeSecretKey: process.env['RENT_ANY_STRIPE_SECRET_KEY'],
    sendgridApiKey: process.env['RENT_ANY_SENDGRID_API_KEY'],
  },

  // Feature flags
  features: {
    enableBetaFeatures: process.env['RENT_ANY_ENABLE_BETA_FEATURES'] === 'true',
    maintenanceMode: process.env['RENT_ANY_MAINTENANCE_MODE'] === 'true',
  },

  // Environment detection
  isDevelopment: process.env['NODE_ENV'] === 'development',
  isProduction: process.env['NODE_ENV'] === 'production',
  isTest: process.env['NODE_ENV'] === 'test',
} as const;

/**
 * Validates that required environment variables are present
 * Should be called during application startup
 */
export function validateEnvironment(): void {
  const requiredPublicVars = [
    'NEXT_PUBLIC_APP_NAME',
    'NEXT_PUBLIC_APP_URL',
    'NEXT_PUBLIC_CONTACT_EMAIL',
  ];

  const missingVars = requiredPublicVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn(
      `Missing environment variables: ${missingVars.join(', ')}`
    );
  }

  // In production, we might want to throw an error for critical missing vars
  if (env.isProduction && missingVars.length > 0) {
    console.error('Critical environment variables missing in production');
  }
}

/**
 * Site configuration derived from environment variables
 */
export const siteConfig = {
  name: env.public.appName,
  description: env.public.appDescription,
  url: env.public.appUrl,
  ogImage: `${env.public.appUrl}/og-image.png`,
  links: {
    contact: `mailto:${env.public.contactEmail}`,
    support: `mailto:${env.public.supportEmail}`,
  },
} as const;