import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = process.env.VERCEL_URL || "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Product Catalog",
        template: "Product Catalog",
    },
    description:
        "Browse a modern product catalog, CMS-driven layouts, and responsive product cards.",
    keywords: [
        "product catalog",
        "next.js catalog",
        "headless cms",
    ],
    openGraph: {
        title: "Product Catalog",
        description:
            "Browse a modern product catalog with CMS-driven presentation Layouts.",
        url: "/",
        siteName: "Product Catalog",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Product Catalog",
        description:
            "Browse a modern product catalog with CMS-driven presentation Layouts.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
