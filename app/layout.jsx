import SessionProvider from '@/components/auth/Provider';
import { RefreshProvider } from '@/components/context/RefreshContext';
import RefreshWrapper from '@/components/layout/RefreshWrapper';
import ThemeRegistry from './themes/ThemeRegistry';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = {
  title: 'Blogger',
  description: 'Written by Mike Z',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider> {/** Handles Auth */}
          <ThemeRegistry> {/** Handles Themes */}
            <RefreshProvider> {/** Provider + Wrapper refresh main page when new blog added*/}
              <RefreshWrapper>
                {children}
              </RefreshWrapper>
            </RefreshProvider>
          </ThemeRegistry>
        </SessionProvider>
      </body>
    </html>
  );
}