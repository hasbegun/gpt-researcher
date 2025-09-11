"use client";

import { Inter } from "next/font/google";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import PlausibleProvider from "next-plausible";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nextProvider i18n={i18n}>
      <html className="gptr-root" lang="en">
        <head>
          <PlausibleProvider domain="localhost:3000" />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        </head>
        <body
          className={`app-container ${inter.className} flex min-h-screen flex-col justify-between`}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </I18nextProvider>
  );
}
