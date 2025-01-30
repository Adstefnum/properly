import { Building2, CheckCircle2, DollarSign, FileText, BarChart3, BellRing, XCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonSignIn from '@/components/ButtonSignin';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import { getDictionary } from './dictionaries';

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

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
                {dict.nav.features}
              </Link>
              <Link href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
                {dict.nav.solutions}
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                {dict.nav.pricing}
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                {dict.nav.contact}
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
          alt={dict.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              {dict.hero.title}
            </h1>
            <p className="text-lg text-gray-200 mb-8 bg-gray-900/30 p-4 rounded-lg">
              {dict.hero.description}
            </p>
            <ButtonSignIn extraStyle="bg-blue-600 text-white px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"/>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">{dict.problems.title}</h2>
          <p className="text-lg text-gray-600 mb-16 text-center">{dict.problems.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {dict.problems.items.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                {index === 0 && <DollarSign className="h-8 w-8 text-blue-600" />}
                {index === 1 && <FileText className="h-8 w-8 text-blue-600" />}
                {index === 2 && <BarChart3 className="h-8 w-8 text-blue-600" />}
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections with translations */}
      <Pricing />
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
              <p className="text-sm">{dict.footer.tagline}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{dict.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {dict.footer.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-blue-500 transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{dict.footer.legal}</h4>
              <ul className="space-y-2">
                {dict.footer.legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-blue-500 transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{dict.footer.contact}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:steveade2001@gmail.com" className="hover:text-blue-500 transition-colors">
                    steveade2001@gmail.com
                  </a>
                </li>
                <li>{dict.footer.location}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Properly. {dict.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}