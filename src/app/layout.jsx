import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://adrian-neagu.ro"),
  title: "Adrian Neagu | Cloud Support Engineer & GCP Specialist",
  description:
    "Cloud Support Engineer at Cognizant for Google Cloud Platform specializing in cloud serverless, cloud databases, cloud-native databases, and cloud storage solutions. Certified Cloud Digital Leader based in Romania.",
  keywords: [
    "Cloud Support Engineer",
    "Google Cloud Platform",
    "Cloud Serverless",
    "Cloud Functions",
    "Cloud Run",
    "Cloud Databases",
    "Cloud SQL",
    "Firestore",
    "Cloud Storage",
    "AI Strategy",
    "GCP Specialist Romania",
    "Cloud Architecture",
    "Database Migration",
    "IT Professional Romania",
    "Google Cloud Expert",
    "React",
    "Web Development",
  ],
  authors: [{ name: "Adrian Neagu" }],
  creator: "Adrian Neagu",
  publisher: "Adrian Neagu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://adrian-neagu.ro",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ro_RO",
    url: "https://adrian-neagu.ro",
    title: "Adrian Neagu | Cloud Support Engineer & GCP Specialist",
    description:
      "Cloud Support Engineer at Cognizant for Google Cloud Platform specializing in cloud serverless, cloud databases, cloud-native databases, and cloud storage solutions.",
    siteName: "Adrian Neagu",
    images: [
      {
        url: "https://adrian-neagu.ro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adrian Neagu - Cloud Support Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Neagu | Cloud Support Engineer & GCP Specialist",
    description: "Cloud Support Engineer specializing in Google Cloud Platform services and solutions.",
    images: ["https://adrian-neagu.ro/twitter-image.jpg"],
  },
  verification: {
    google: "verification_token",
  },
  other: {
    "geo.region": "RO",
    "geo.placename": "Romania",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} translate="no">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
