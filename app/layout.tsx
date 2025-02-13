import type { Metadata } from 'next';
import './globals.css';
import { rethinkSans } from '../components/SelfUI/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | LandLord',
    default: 'LandLord',
  },

  description: 'The official LandLord website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.className} antialiased`}>{children}</body>
    </html>
  );
}
