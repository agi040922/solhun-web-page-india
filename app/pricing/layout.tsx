import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "मूल्य निर्धारण",
  description: "अपनी CLI एजेंट प्रबंधन आवश्यकताओं के लिए सही योजना चुनें। पावर यूज़र्स और टीमों के लिए प्रीमियम सुविधाओं के साथ मुफ्त टियर उपलब्ध।",
  openGraph: {
    title: "CLI Manager मूल्य निर्धारण - हर डेवलपर के लिए योजनाएं",
    description: "अपनी CLI एजेंट प्रबंधन आवश्यकताओं के लिए सही योजना चुनें। पावर यूज़र्स और टीमों के लिए प्रीमियम सुविधाओं के साथ मुफ्त टियर उपलब्ध।",
    images: [
      {
        url: "/cli-main.png",
        width: 1200,
        height: 630,
        alt: "CLI Manager मूल्य निर्धारण योजनाएं",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLI Manager मूल्य निर्धारण - हर डेवलपर के लिए योजनाएं",
    description: "अपनी CLI एजेंट प्रबंधन आवश्यकताओं के लिए सही योजना चुनें। मुफ्त टियर उपलब्ध।",
    images: ["/cli-main.png"],
  },
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
