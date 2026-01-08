import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://solhun.in"),
  title: {
    default: "CLI Manager - Claude Code, Codex CLI और Gemini CLI को एक जगह प्रबंधित करें",
    template: "%s | CLI Manager India"
  },
  description: "Claude Code, Codex CLI, और Gemini CLI को एक डैशबोर्ड से प्रबंधित करें। प्रोजेक्ट्स व्यवस्थित करें, एजेंट्स का नाम बदलें, और CLI Manager के साथ तुरंत एडिटर्स स्विच करें।",
  keywords: [
    "CLI Manager",
    "CLI Manager India",
    "Claude Code",
    "Codex CLI",
    "Gemini CLI",
    "AI कोडिंग असिस्टेंट",
    "CLI एजेंट प्रबंधन",
    "डेवलपर टूल्स",
    "टर्मिनल मैनेजर",
    "VS Code",
    "Cursor IDE",
    "AI डेवलपमेंट वर्कफ्लो",
    "कमांड लाइन इंटरफेस",
    "मल्टी-एजेंट प्रबंधन",
    "भारत डेवलपर्स"
  ],
  authors: [{ name: "CLI Manager Team" }],
  creator: "CLI Manager",
  publisher: "CLI Manager",
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
  openGraph: {
    type: "website",
    locale: "hi_IN",
    siteName: "CLI Manager India",
    title: "CLI Manager - आपके सभी CLI एजेंट्स एक जगह",
    description: "Claude Code, Codex CLI, और Gemini CLI को एक डैशबोर्ड से प्रबंधित करें। एजेंट्स का नाम बदलें, प्रोजेक्ट्स व्यवस्थित करें, और तुरंत एडिटर्स स्विच करें।",
    images: [
      {
        url: "/cli-main.png",
        width: 1200,
        height: 630,
        alt: "CLI Manager डैशबोर्ड - सभी CLI एजेंट्स को एक जगह प्रबंधित करें",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLI Manager - आपके सभी CLI एजेंट्स एक जगह",
    description: "Claude Code, Codex CLI, और Gemini CLI को एक डैशबोर्ड से प्रबंधित करें। AI-संचालित डेवलपमेंट के लिए सर्वोत्तम टूल।",
    images: ["/cli-main.png"],
    creator: "@climanager",
  },
  alternates: {
    canonical: "/",
  },
  category: "Developer Tools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
