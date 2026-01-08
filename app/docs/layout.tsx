import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "दस्तावेज़ीकरण",
  description: "CLI Manager का उपयोग करके Claude Code, Codex CLI, और Gemini CLI को व्यवस्थित करना सीखें। पूर्ण गाइड, ट्यूटोरियल, और API संदर्भ।",
  openGraph: {
    title: "CLI Manager दस्तावेज़ीकरण - शुरुआत करने की गाइड",
    description: "CLI Manager का उपयोग करके Claude Code, Codex CLI, और Gemini CLI को व्यवस्थित करना सीखें। पूर्ण गाइड, ट्यूटोरियल, और API संदर्भ।",
    images: [
      {
        url: "/cli-main.png",
        width: 1200,
        height: 630,
        alt: "CLI Manager दस्तावेज़ीकरण",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLI Manager दस्तावेज़ीकरण - शुरुआत करने की गाइड",
    description: "CLI Manager का उपयोग करना सीखें। पूर्ण गाइड, ट्यूटोरियल, और API संदर्भ।",
    images: ["/cli-main.png"],
  },
  alternates: {
    canonical: "/docs",
  },
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
