'use client';

import { Building2, CheckCircle2, DollarSign, FileText, BarChart3, BellRing, XCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonSignIn from '@/components/ButtonSignin';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-11/12 z-50 bg-white/80 backdrop-blur-md border-b rounded-full mx-auto left-0 right-0 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Properly</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
             <ButtonSignIn extraStyle="bg-blue-600 text-white px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"/> 
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <Image
          src="https://www.lrt.lt/img/2022/05/04/1252248-34539-1287x836.jpg"
          alt="Dashboard Preview"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              Manage property finance in minutes, not days.
            </h1>
            <p className="text-lg text-gray-200 mb-8 bg-gray-900/30 p-4 rounded-lg">
              No more spreadsheets, manual bookkeeping, or tax filing. We make it easy for <b>private landlords</b> to collect rent, automate bookkeeping, and simplify tax filing - all in one powerful platform.
            </p>
            <ButtonSignIn extraStyle="bg-blue-600 text-white px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"/>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">The problems you face everyday</h2>
          <p className="text-lg text-gray-600 mb-16 text-center">It&apos;s not your fault, you just have a really bad system to manage your property finances.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="h-8 w-8 text-blue-600" />,
                title: "Rent Collection",
                description: "Travelling to collect rent from every building and not knowing which tenants have paid is a waste of time and energy."
              },
              {
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                title: "Financial Records",
                description: "Someone paid into your account, you collected cash, now money is missing and you don't know how."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                title: "Tax Filing",
                description: "You didn't keep proper financial records and now filing taxes is a problem."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* With/Without Comparison */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">The Properly Difference: do things properly</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">With Properly</h3>
              <ul className="space-y-4">
                {[
                  "Automated rent collection and reminders",
                  "Real-time financial tracking and reporting",
                  "One-click tax document generation",
                  // "Integrated maintenance request system",
                  "Smart analytics and insights"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-600 mb-6">Without Properly</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Manual rent tracking and late payment follow-ups",
                  "Scattered spreadsheets and paper records",
                  "Time-consuming tax preparation",
                  // "Disorganized maintenance tracking",
                  "Limited visibility into property performance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Here&apos;s what we&apos;ll do for you. </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FileText className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Financial Tracking & Tax Reporting</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive financial management with automatic categorization and one-click tax document generation.
              </p>
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
                alt="Financial Dashboard"
                width={375}
                height={225}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BellRing className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Automated Rent Collection</h3>
              <p className="text-gray-600 mb-6">
                Set up automatic rent collection, late payment reminders, and direct bank deposits.
              </p>
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3"
                alt="Payment Dashboard"
                width={375}
                height={225}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* Call-to-Action */}
      <section className="py-20 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Property Management?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join other property owners who have simplified their management process with Properly.
          </p>
          <ButtonSignIn extraStyle="bg-blue-600 text-white px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"/>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">Properly</span>
              </div>
              <p className="text-sm">
                Making property financemanagement simple, efficient, and profitable.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="hover:text-blue-500 transition-colors">Features</Link></li>
                <li><Link href="#solutions" className="hover:text-blue-500 transition-colors">Solutions</Link></li>
                <li><Link href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</Link></li>
                <li><Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:steveade2001@gmail.com" className="hover:text-blue-500 transition-colors">steveade2001@gmail.com</a></li>
                <li>Kaunas, Lithuania</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Properly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}