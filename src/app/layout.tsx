import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  title: "Siphonaut - Coming Soon",
  description: "Something new is brewing. Stay tuned.",
  metadataBase: new URL("https://siphonaut.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Siphonaut - Coming Soon",
    description: "Something new is brewing. Stay tuned.",
    url: "https://siphonaut.com",
    siteName: "Siphonaut",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siphonaut - Coming Soon",
    description: "Something new is brewing. Stay tuned.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth bg-slate-950 text-slate-100"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} flex min-h-screen flex-col bg-slate-950 text-slate-100 antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
