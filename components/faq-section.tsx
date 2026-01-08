"use client"

import { useState } from "react"

export interface FAQItem {
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    question: "Solhun क्या है?",
    answer:
      "Solhun एक मैनेजर ऐप है जो आपको कई CLI एजेंट्स (Claude Code, Gemini CLI, Codex, आदि) और प्रोजेक्ट्स को एक ही जगह प्रबंधित करने देता है।",
  },
  {
    question: "कौन से CLI टूल्स समर्थित हैं?",
    answer:
      "आप Claude Code, Gemini CLI, Codex, और यहां तक कि ऐप्स जैसे किसी भी CLI टूल को जोड़ सकते हैं। बिना किसी वेंडर लॉक-इन के उनके बीच स्वतंत्र रूप से स्विच करें।",
  },
  {
    question: "क्या यह मुफ्त में उपयोग करने के लिए है?",
    answer:
      "हां, मुख्य सुविधाएं मुफ्त में उपलब्ध हैं।",
  },
  {
    question: "क्या आप Windows/Linux को सपोर्ट करते हैं?",
    answer:
      "वर्तमान में, केवल Mac समर्थित है। Windows जल्द आ रहा है। Linux अभी रोडमैप पर नहीं है।",
  },
  {
    question: "क्या मेरा डेटा सुरक्षित है?",
    answer:
      "Solhun बाहरी रूप से कोई डेटा नहीं भेजता है। सब कुछ स्थानीय रूप से संसाधित होता है, और यह आपकी सुरक्षा के लिए Apple नोटराइज्ड है।",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            अक्सर पूछे जाने वाले प्रश्न
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Solhun के साथ अपने CLI एजेंट्स को
            <br className="hidden md:block" />
            प्रबंधित करने के बारे में जानने योग्य सब कुछ।
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
