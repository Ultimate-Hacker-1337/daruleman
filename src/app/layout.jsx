// app/layout.jsx (Updated for RTL)

import Header from '../components/Header';
import './globals.css';

export const metadata = {
  title: 'Dar ul Eman',
};

export default function RootLayout({
  children,
}) {
  return (
    // ⬅️ Added dir="rtl" to the <html> tag
    <html lang="ur" dir="rtl"> 
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Header /> 
        {children}
      </body>
    </html>
  );
}