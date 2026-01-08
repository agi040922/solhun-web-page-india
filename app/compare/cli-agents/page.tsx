"use client"

import { Check, X, AlertTriangle, Terminal } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageWrapper } from "../../../components/page-wrapper"
import { UnifiedEcosystemAnimation } from "../../../components/unified-ecosystem-animation"

const comparisonData = [
  { feature: "एक्सीक्यूशन", comp: "बिखरे हुए टर्मिनल", solhun: "यूनिफाइड डैशबोर्ड", compStatus: "partial" },
  { feature: "मल्टीपल एजेंट्स", comp: "कई विंडो", solhun: "क्लीन टैब मैनेजमेंट", compStatus: "warning" },
  { feature: "कॉन्टेक्स्ट स्विचिंग", comp: "भ्रमित करने वाला और अव्यवस्थित", solhun: "व्यवस्थित संरचना", compStatus: "no" },
  { feature: "नोटिफिकेशन", comp: "छूटने में आसान", solhun: "डेडिकेटेड अलर्ट्स", compStatus: "no" },
  { feature: "Git Worktree", comp: "मैनुअल कमांड्स", solhun: "वन-क्लिक मैनेजमेंट", compStatus: "warning" },
  { feature: "फाइल एक्सेस", comp: "कॉपी/पेस्ट पाथ", solhun: "Cmd+Click से खोलें", compStatus: "partial" },
]

export default function CliAgentsComparison() {
  return (
    <PageWrapper>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-[#49423D]">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight"
          >
            सिर्फ <span className="text-[#37322F]">CLI एजेंट्स</span> की जगह Solhun क्यों?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-lg text-[#49423D]/80 max-w-2xl mx-auto"
          >
            CLI एजेंट्स शक्तिशाली हैं, लेकिन कई टर्मिनल मैनेज करना अराजक हो जाता है।
            Solhun एक यूनिफाइड इंटरफेस के साथ व्यवस्था लाता है।
          </motion.p>
        </div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block bg-white rounded-2xl shadow-sm border border-[#E6E4E2] overflow-hidden mb-12"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-[#FAFAF9] border-b border-[#E6E4E2]">
                <th className="p-4 text-left text-sm font-semibold text-[#49423D]/60">फीचर</th>
                <th className="p-4 text-center text-sm font-semibold">CLI एजेंट्स <span className="text-[#49423D]/60 font-normal">(Claude Code, आदि)</span></th>
                <th className="p-4 text-center text-sm font-bold text-[#37322F]">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 rounded-md overflow-hidden border border-[rgba(55,50,47,0.08)]">
                      <img src="/solhun-logo.png" alt="Solhun" className="w-full h-full object-cover" />
                    </div>
                    Solhun
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className={i !== comparisonData.length - 1 ? "border-b border-[#E6E4E2]" : ""}>
                  <td className="p-4 text-sm font-medium text-[#49423D] bg-[#FAFAF9]">{row.feature}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-[#49423D]/70">
                      {row.compStatus === "no" && <X className="w-4 h-4 text-red-500" />}
                      {row.compStatus === "warning" && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                      {row.compStatus === "partial" && <Terminal className="w-4 h-4 text-gray-400" />}
                      <span>{row.comp}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center bg-green-50/30">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#37322F]">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>{row.solhun}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Comparison Cards - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:hidden space-y-3 mb-8"
        >
          {comparisonData.map((row, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#E6E4E2] overflow-hidden">
              <div className="bg-[#FAFAF9] px-4 py-2 border-b border-[#E6E4E2]">
                <span className="text-xs font-semibold text-[#49423D]">{row.feature}</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#49423D]/50">CLI एजेंट्स (Claude Code, आदि)</span>
                  <div className="flex items-center gap-1.5 text-xs text-[#49423D]/70">
                    {row.compStatus === "no" && <X className="w-3.5 h-3.5 text-red-500" />}
                    {row.compStatus === "warning" && <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
                    {row.compStatus === "partial" && <Terminal className="w-3.5 h-3.5 text-gray-400" />}
                    <span>{row.comp}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-green-50/50 -mx-3 px-3 py-1.5 rounded">
                  <span className="text-xs text-[#49423D]/50">Solhun</span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#37322F]">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>{row.solhun}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Animation */}
        <UnifiedEcosystemAnimation />

        {/* OpenCode Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">OpenCode के बारे में क्या?</h2>
          <div className="bg-white rounded-xl border border-[#E6E4E2] overflow-hidden">
            <div className="grid sm:grid-cols-2 p-4 sm:p-6 gap-6 sm:gap-8">
              <div>
                <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-gray-100 rounded text-sm">OpenCode</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[#49423D]/80">बढ़िया CLI एजेंट विकल्प</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[#49423D]/80">API के माध्यम से अच्छा मॉडल सिलेक्शन</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-[#49423D]/80">केवल खुद को मैनेज करता है</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md overflow-hidden border border-[rgba(55,50,47,0.08)]">
                    <img src="/solhun-logo.png" alt="Solhun" className="w-full h-full object-cover" />
                  </div>
                  Solhun
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[#49423D]/80"><span className="font-medium text-[#37322F]">सभी CLI एजेंट्स</span> को मैनेज करता है</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[#49423D]/80">डेस्कटॉप ऐप्स भी मैनेज करता है</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[#49423D]/80">सभी AI टूल्स के लिए एक इंटरफेस</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-bold mb-3">टर्मिनल से जूझना बंद करें। एजेंट्स मैनेज करना शुरू करें।</h2>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#37322F] hover:bg-black rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            अभी Solhun पाएं
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
