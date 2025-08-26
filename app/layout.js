import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ASL Studio - Professional Web & Mobile App Development | Profesyonel Web ve Mobil Uygulama Geliştirme",
    template: "%s | ASL Studio"
  },
  description: "ASL Studio offers professional web design, mobile app development, e-commerce solutions and digital marketing services. Turkey's leading software development agency. | ASL Studio olarak web tasarım, mobil uygulama geliştirme, e-ticaret çözümleri ve dijital pazarlama hizmetleri sunuyoruz.",
  keywords: "web design, mobile app development, e-commerce, software development, digital marketing, ASL Studio, web development, react, next.js, web tasarım, mobil uygulama, yazılım geliştirme, dijital pazarlama",
  authors: [{ name: "ASL Studio" }],
  creator: "ASL Studio",
  publisher: "ASL Studio",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://madebyasl.com",
    languages: {
      'en': 'https://madebyasl.com/en',
      'tr': 'https://madebyasl.com',
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://madebyasl.com",
    title: "ASL Studio - Professional Web & Mobile App Development",
    description: "Professional web design, mobile app development, e-commerce solutions and digital marketing services from Turkey's leading software development agency.",
    siteName: "ASL Studio",
    images: [
      {
        url: "https://madebyasl.com/logo.png",
        width: 1200,
        height: 630,
        alt: "ASL Studio Logo - Professional Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASL Studio - Professional Web & Mobile App Development",
    description: "Professional web design, mobile app development, e-commerce solutions and digital marketing services.",
    images: ["https://madebyasl.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://madebyasl.com" />
        <link rel="alternate" hrefLang="tr" href="https://madebyasl.com" />
        <link rel="alternate" hrefLang="en" href="https://madebyasl.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://madebyasl.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ASL Studio",
              url: "https://madebyasl.com",
              logo: "https://madebyasl.com/logo.png",
              description: {
                "@language": "en",
                "@value": "Professional web and mobile application development services"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "TR",
              },
              sameAs: [
                "https://linkedin.com/company/aslstudio",
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://madebyasl.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
