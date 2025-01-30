'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ locale, label }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'lt' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={switchLanguage}
      className="text-sm font-medium text-gray-700 hover:text-gray-900"
    >
      {label}
    </button>
  );
} 