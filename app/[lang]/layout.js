import { Inter } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "../globals.css";
import { getDictionary } from './dictionaries';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'lt' }];
}

export default async function RootLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <html 
      lang={lang}
      data-theme={config.colors.theme}
      className={font.className}
    >
      <body>
        <ClientLayout>
          <header>
            <nav>
              {/* Your existing nav items */}
              <LanguageSwitcher 
                locale={lang} 
                label={dict.common.switchLanguage}
              />
            </nav>
          </header>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}