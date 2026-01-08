import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "सुविधाएं - AI-संचालित डेवलपमेंट के लिए शक्तिशाली टूल्स",
  description:
    "CLI Manager की शक्तिशाली सुविधाओं की खोज करें: समानांतर AI एजेंट्स के लिए Worktree मैनेजमेंट, Git इंटीग्रेशन, पोर्ट मैनेजमेंट, टर्मिनल टेम्प्लेट्स, और प्रयोगात्मक प्लेग्राउंड। अपने डेवलपमेंट वर्कफ्लो को सुपरचार्ज करें।",
  keywords: [
    "CLI Manager सुविधाएं",
    "AI एजेंट टूल्स",
    "Git worktree मैनेजमेंट",
    "समानांतर AI डेवलपमेंट",
    "पोर्ट मैनेजमेंट टूल",
    "टर्मिनल टेम्प्लेट्स",
    "डेवलपर प्रोडक्टिविटी",
    "AI-संचालित डेवलपमेंट",
    "वर्कफ्लो ऑटोमेशन",
    "Git इंटीग्रेशन",
    "Claude Code worktree",
    "मल्टी-एजेंट वर्कफ्लो",
  ],
  openGraph: {
    title: "सुविधाएं - AI-संचालित डेवलपमेंट के लिए शक्तिशाली टूल्स",
    description:
      "CLI एजेंट मैनेजमेंट को आसान बनाने वाली बुद्धिमान सुविधाओं से अपने वर्कफ्लो को सुपरचार्ज करें। Worktree, Git, पोर्ट, टर्मिनल टेम्प्लेट्स और प्लेग्राउंड।",
    type: "website",
    locale: "hi_IN",
    siteName: "CLI Manager India",
    images: [
      {
        url: "/cli-main-gemini.png",
        width: 1200,
        height: 630,
        alt: "CLI Manager सुविधाएं - AI-संचालित डेवलपमेंट टूल्स",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "सुविधाएं - AI-संचालित डेवलपमेंट के लिए शक्तिशाली टूल्स",
    description:
      "बुद्धिमान सुविधाओं से अपने वर्कफ्लो को सुपरचार्ज करें: Worktree मैनेजमेंट, Git इंटीग्रेशन, पोर्ट मैनेजमेंट, टर्मिनल टेम्प्लेट्स, और प्लेग्राउंड।",
    images: ["/cli-main-gemini.png"],
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
    canonical: "/products",
  },
}

// JSON-LD Structured Data for Features Page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CLI Manager",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS",
  description:
    "CLI Manager डेवलपर्स को worktree मैनेजमेंट, Git इंटीग्रेशन, पोर्ट ट्रैकिंग, और टर्मिनल ऑटोमेशन के लिए शक्तिशाली टूल्स के साथ AI एजेंट्स को व्यवस्थित करने में मदद करता है। macOS के लिए बनाया गया।",
  featureList: [
    "Worktree मैनेजर - Git worktrees के साथ समानांतर AI एजेंट वर्कफ्लो",
    "Git इंटीग्रेशन - विज़ुअल Git हिस्ट्री और आसान रोलबैक",
    "पोर्ट मैनेजर - प्रोजेक्ट्स में पोर्ट्स को ट्रैक और मैनेज करें",
    "टर्मिनल टेम्प्लेट्स - कमांड्स और कॉन्फ़िगरेशन सेव और रीयूज़ करें",
    "प्लेग्राउंड - AI प्रयोग के लिए सैंडबॉक्स्ड वातावरण",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
}

export default function ProductsLayout({
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
