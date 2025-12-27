"use client"

import { Check, X, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageWrapper } from "../../../components/page-wrapper"
import { UnifiedEcosystemAnimation } from "../../../components/unified-ecosystem-animation"

const comparisonData = [
  { feature: "Model Selection", comp: "All Models, No CLI Agent", solhun: "All Models + CLI Agents", compStatus: "warning" },
  { feature: "CLI Agent Management", comp: "No Direct Management", solhun: "Claude Code, Gemini CLI & More", compStatus: "no" },
  { feature: "Project Management", comp: "In-App Only", solhun: "All Projects at a Glance", compStatus: "warning" },
  { feature: "Git Worktree", comp: "Cursor Only", solhun: "Easy Parallel Dev", compStatus: "warning" },
  { feature: "Task Alerts", comp: "Limited Extensibility", solhun: "Claude Code Notifications", compStatus: "warning" },
  { feature: "Vendor Lock-in", comp: "Tied to App", solhun: "Free to Switch", compStatus: "warning" },
]

export default function AntigravityCursorComparison() {
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
            Why Solhun over <span className="text-[#37322F]">Antigravity</span> or <span className="text-[#37322F]">Cursor</span>?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-lg text-[#49423D]/80 max-w-2xl mx-auto"
          >
            Antigravity and Cursor are great, but they aren&apos;t built for CLI agents.
            Solhun manages everything in one place.
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
                <th className="p-4 text-left text-sm font-semibold text-[#49423D]/60">Feature</th>
                <th className="p-4 text-center text-sm font-semibold">Antigravity / Cursor</th>
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
                      {row.compStatus === "partial" && <Check className="w-4 h-4 text-gray-400" />}
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
                  <span className="text-xs text-[#49423D]/50">Others</span>
                  <div className="flex items-center gap-1.5 text-xs text-[#49423D]/70">
                    {row.compStatus === "no" && <X className="w-3.5 h-3.5 text-red-500" />}
                    {row.compStatus === "warning" && <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
                    {row.compStatus === "partial" && <Check className="w-3.5 h-3.5 text-gray-400" />}
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

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10"
        >
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E6E4E2]">
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#37322F]">Best of Both Worlds</h3>
            <p className="text-sm text-[#49423D]/80 leading-relaxed">
              Add Antigravity and Cursor as apps within Solhun. Get CLI agents + your favorite IDEs together.
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E6E4E2]">
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#37322F]">Why It Matters</h3>
            <p className="text-sm text-[#49423D]/80 leading-relaxed">
              CLI agents are powerful but fragmented. Solhun unifies them without vendor lock-in.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#37322F] hover:bg-black rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Started with Solhun
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
