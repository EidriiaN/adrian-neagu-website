"use client";

import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adrian Neagu",
    jobTitle: "Cloud Support Engineer",
    description:
      "Cloud Support Engineer at Cognizant for Google Cloud Platform specializing in cloud serverless, cloud databases, cloud-native databases, and cloud storage solutions.",
    url: "https://adrian-neagu.ro",
    sameAs: ["https://www.linkedin.com/in/adrian-neagu/", "https://github.com/EidriiaN"],
    knowsAbout: [
      "Google Cloud Platform",
      "Cloud Serverless",
      "Cloud Databases",
      "Cloud Storage Solutions",
      "Cloud Architecture",
      "Database Migration",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Cognizant",
    },
    nationality: {
      "@type": "Country",
      name: "Romania",
    },
  };

  return <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
