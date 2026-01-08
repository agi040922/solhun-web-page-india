import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "गैलरी - CLI Manager की सुविधाओं को एक्शन में देखें",
  description:
    "CLI Manager गैलरी ब्राउज़ करें जो Worktree प्रबंधन, Git इंटीग्रेशन, पोर्ट मॉनिटरिंग, टर्मिनल टेम्प्लेट्स, और प्लेग्राउंड सुविधाओं को वास्तविक स्क्रीनशॉट्स के साथ दिखाती है।",
  keywords: [
    "CLI Manager गैलरी",
    "CLI Manager स्क्रीनशॉट्स",
    "AI एजेंट टूल्स डेमो",
    "Git worktree स्क्रीनशॉट्स",
    "पोर्ट प्रबंधन प्रीव्यू",
    "टर्मिनल टेम्प्लेट्स डेमो",
    "डेवलपर टूल्स गैलरी",
    "AI-संचालित डेवलपमेंट प्रीव्यू",
    "वर्कफ्लो ऑटोमेशन इमेज",
    "Claude Code स्क्रीनशॉट्स",
    "Gemini CLI स्क्रीनशॉट्स",
  ],
  openGraph: {
    title: "गैलरी - CLI Manager की सुविधाओं को एक्शन में देखें",
    description:
      "CLI Manager को एक्शन में देखें: Worktree प्रबंधन, Git इंटीग्रेशन, पोर्ट मॉनिटरिंग, टर्मिनल टेम्प्लेट्स, और प्रयोगात्मक प्लेग्राउंड वास्तविक स्क्रीनशॉट्स के साथ।",
    type: "website",
    locale: "hi_IN",
    siteName: "CLI Manager India",
    images: [
      {
        url: "/worktree-create.png",
        width: 1200,
        height: 630,
        alt: "CLI Manager गैलरी - फीचर स्क्रीनशॉट्स",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "गैलरी - CLI Manager की सुविधाओं को एक्शन में देखें",
    description:
      "वास्तविक स्क्रीनशॉट्स के साथ CLI Manager को एक्शन में देखें: Worktree, Git इंटीग्रेशन, पोर्ट प्रबंधन, टर्मिनल टेम्प्लेट्स, और प्लेग्राउंड।",
    images: ["/worktree-create.png"],
    creator: "@climanager",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/gallery",
  },
}

// JSON-LD Structured Data for Gallery Page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "CLI Manager फीचर गैलरी",
  description:
    "CLI Manager सुविधाओं का विज़ुअल शोकेस जिसमें worktree प्रबंधन, Git इंटीग्रेशन, पोर्ट मॉनिटरिंग, और टर्मिनल टेम्प्लेट्स शामिल हैं।",
  about: {
    "@type": "SoftwareApplication",
    name: "CLI Manager",
    applicationCategory: "DeveloperApplication",
  },
  image: [
    "/worktree-create.png",
    "/git-integration-1.png",
    "/port-monitor.png",
    "/terminal-templates.png",
    "/playground.png",
  ],
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
