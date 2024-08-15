import type { Metadata } from 'next';
import './globals.css';
import HeaderContainer from './components/Header/HeaderContainer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-96">
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}
