import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Create Next App'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
