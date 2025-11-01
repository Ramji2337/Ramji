import type { Metadata } from 'next';
import { AuthProvider } from '@/context/AuthContext';
import '@/index.css';
import '@/App.css';
import '@/styles/globals.css';
import '@/styles/animations.css';

export const metadata: Metadata = {
  title: 'Ramji',
  description: "Ramji's Portfolio - Full Stack Developer",
  themeColor: '#030014',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
