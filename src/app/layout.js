import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}
