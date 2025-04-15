import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='container mx-auto max-w-6xl px-10'>{children}</body>
    </html>
  );
}
