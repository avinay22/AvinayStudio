import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
};

export const metadata: Metadata = {
  title: 'AvinayStudio | We Build Digital Presence That Brings Customers',
  description: 'Websites. Content. Growth. Everything your business needs. Trusted by leading businesses across Assam and beyond.',
  keywords: [
    'AvinayStudio',
    'Avinay Sharma',
    'Web Development Assam',
    'Digital Agency Assam',
    'Website Design Dhemaji',
    'E-Commerce Development',
    'Premium Web Agency'
  ],
  authors: [{ name: 'Avinay Sharma' }],
  openGraph: {
    title: 'AvinayStudio | Build • Create • Grow',
    description: 'We Build Digital Presence That Brings Customers. Premium websites, content, and growth strategy.',
    images: ['/images/about-avinay.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#F5F2ED] antialiased selection:bg-[#C5A880] selection:text-[#050505] min-h-screen overflow-x-hidden max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}
