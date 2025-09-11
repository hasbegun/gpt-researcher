import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from './ClientLayoutWrapper';

let title = "Innox Researcher";
let description =
  "LLM based autonomous agent that conducts local and web research on any topic and generates a comprehensive report with citations.";
let url = "https://github.com/hasbegun/gpt-researcher";
let ogimage = "/favicon.ico";
let sitename = "Innox Researcher";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayoutWrapper>
      {children}
    </ClientLayoutWrapper>
  );
}