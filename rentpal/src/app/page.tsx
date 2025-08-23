import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl lg:text-7xl">
                Find Your Perfect
                <span className="text-primary-600 block">Rental Property</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-2xl mx-auto">
                Discover thousands of rental properties with Rent Any. From cozy apartments to spacious houses, 
                find your next home with our trusted property rental platform.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="px-8 py-4">
                  Start Searching
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4">
                  List Your Property
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                Why Choose Rent Any?
              </h2>
              <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
                We make property rental simple, secure, and stress-free for both tenants and landlords.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card variant="elevated" className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <CardTitle>Easy Search</CardTitle>
                  <CardDescription>
                    Find properties that match your criteria with our advanced search filters and interactive maps.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card variant="elevated" className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <CardTitle>Secure Platform</CardTitle>
                  <CardDescription>
                    All listings are verified and our secure payment system protects both tenants and landlords.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card variant="elevated" className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944l7.071 7.071-7.071 7.071-7.071-7.071L12 2.944z" />
                    </svg>
                  </div>
                  <CardTitle>24/7 Support</CardTitle>
                  <CardDescription>
                    Our dedicated support team is available around the clock to help with any questions or issues.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Find Your Next Home?
              </h2>
              <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have found their perfect rental property with Rent Any.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Button variant="secondary" size="lg" className="px-8 py-4">
                  Browse Properties
                </Button>
                <Link 
                  href="/about" 
                  className="text-primary-100 hover:text-white font-semibold transition-colors duration-200"
                >
                  Learn more about us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
