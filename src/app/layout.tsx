import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J & I Facilities Management | Professional Cleaning Services',
  description: 'Expert cleaning services for homes, offices, and workspaces. Book online today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
