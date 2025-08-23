import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Rent Any - your trusted property rental platform connecting tenants and landlords.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
                About Rent Any
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
                We're revolutionizing the property rental experience by connecting tenants and landlords 
                through our innovative platform that makes finding and managing rental properties simple, 
                secure, and stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-secondary-600 mb-6">
                  At Rent Any, we believe that finding the perfect rental property shouldn't be complicated 
                  or stressful. Our mission is to create a transparent, efficient, and trustworthy platform 
                  that serves both tenants looking for their next home and landlords seeking reliable tenants.
                </p>
                <p className="text-lg text-secondary-600 mb-8">
                  We're committed to using technology to eliminate the traditional pain points of property 
                  rental, making the process faster, safer, and more convenient for everyone involved.
                </p>
                <Button size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
              <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Transparency First</h3>
                      <p className="text-secondary-600">Clear pricing, honest listings, and open communication.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Security & Trust</h3>
                      <p className="text-secondary-600">Verified listings and secure payment processing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">User Experience</h3>
                      <p className="text-secondary-600">Intuitive design and seamless interactions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Values Section */}
        <section className="py-16 lg:py-24 bg-secondary-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
                These core values guide everything we do at Rent Any and shape how we serve our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <CardTitle>Community First</CardTitle>
                  <CardDescription>
                    We prioritize building strong relationships within our community of tenants, landlords, and partners.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <CardTitle>Innovation</CardTitle>
                  <CardDescription>
                    We continuously improve our platform with cutting-edge technology to enhance user experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle>Reliability</CardTitle>
                  <CardDescription>
                    We maintain the highest standards of service reliability and platform stability for our users.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                Rent Any by the Numbers
              </h2>
              <p className="mt-4 text-lg text-secondary-600">
                Our growing platform continues to connect more people with their perfect rental properties.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-secondary-600">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">25K+</div>
                <div className="text-secondary-600">Happy Tenants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5K+</div>
                <div className="text-secondary-600">Property Owners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-secondary-600">Cities Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join the Rent Any Community
              </h2>
              <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
                Whether you're looking for your next home or want to list your property, 
                we're here to make your rental experience exceptional.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Button variant="secondary" size="lg">
                  <Link href="/">Start Searching</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}