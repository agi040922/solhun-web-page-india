"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Code } from "lucide-react"

// viewBox 기준 중앙점 (고정 좌표계)
const VIEW_CENTER = { x: 400, y: 250 }
const MOBILE_VIEW_CENTER = { x: 160, y: 160 }

// 데스크탑/모바일 좌표 분리
const iconData = [
  // Left Side (Apps)
  { id: "antigravity", imgSrc: "/antigravity.png", label: "Antigravity", desktop: { x: -200, y: -50 }, mobile: { x: -90, y: -55 }, delay: 0 },
  { id: "cursor", imgSrc: "/cursor.webp", label: "Cursor", desktop: { x: -160, y: 70 }, mobile: { x: -90, y: 55 }, delay: 0.2 },
  { id: "vscode", imgSrc: "/vs%20code123.png", label: "VS Code", desktop: { x: -120, y: -130 }, mobile: { x: -5, y: -100 }, delay: 0.4 },

  // Right Side (Agents)
  { id: "opencode", imgSrc: "/opencode-logo-light.png", label: "OpenCode", desktop: { x: 200, y: -50 }, mobile: { x: 90, y: -55 }, delay: 0.1 },
  { id: "claude", imgSrc: "/claude%20code.svg", label: "Claude Code", desktop: { x: 160, y: 70 }, mobile: { x: 90, y: 55 }, delay: 0.3 },
  { id: "codex", isIcon: true, iconType: "code", label: "Codex", desktop: { x: 120, y: -130 }, mobile: { x: -55, y: 105 }, delay: 0.5 },
  { id: "etc", isIcon: true, iconType: "more", label: "Etc", desktop: { x: 5, y: 140 }, mobile: { x: 55, y: 105 }, delay: 0.6 },
]

export function UnifiedEcosystemAnimation() {
  return (
    <div className="w-full h-[320px] sm:h-[450px] md:h-[500px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-[#FAFAF9]/50 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#37322F]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Connecting Lines - Desktop */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="line-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(55, 50, 47, 0.08)" />
            <stop offset="100%" stopColor="rgba(55, 50, 47, 0.3)" />
          </linearGradient>
          <linearGradient id="line-gradient-right" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(55, 50, 47, 0.08)" />
            <stop offset="100%" stopColor="rgba(55, 50, 47, 0.3)" />
          </linearGradient>
          <linearGradient id="line-gradient-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(55, 50, 47, 0.3)" />
            <stop offset="100%" stopColor="rgba(55, 50, 47, 0.08)" />
          </linearGradient>
        </defs>
        {iconData.map((item) => (
          <motion.line
            key={`line-${item.id}`}
            x1={VIEW_CENTER.x}
            y1={VIEW_CENTER.y}
            x2={VIEW_CENTER.x + item.desktop.x}
            y2={VIEW_CENTER.y + item.desktop.y}
            stroke={item.desktop.x === 0 ? "url(#line-gradient-bottom)" : `url(#line-gradient-${item.desktop.x < 0 ? "left" : "right"})`}
            strokeWidth="2"
            strokeDasharray="8 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: item.delay, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Connecting Lines - Mobile */}
      <svg
        className="sm:hidden absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="mobile-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(55, 50, 47, 0.1)" />
            <stop offset="100%" stopColor="rgba(55, 50, 47, 0.25)" />
          </linearGradient>
        </defs>
        {iconData.map((item) => (
          <motion.line
            key={`mobile-line-${item.id}`}
            x1={MOBILE_VIEW_CENTER.x}
            y1={MOBILE_VIEW_CENTER.y}
            x2={MOBILE_VIEW_CENTER.x + item.mobile.x}
            y2={MOBILE_VIEW_CENTER.y + item.mobile.y}
            stroke="url(#mobile-line-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: item.delay, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Central Hub (Solhun) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center justify-center"
      >
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-[#E6E4E2] flex items-center justify-center relative z-10">
          <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 relative rounded-lg sm:rounded-xl overflow-hidden shadow-sm border border-[rgba(55,50,47,0.08)]">
            <img src="/solhun-logo.png" alt="Solhun Logo" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Pulsing Rings */}
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#37322F]/10 rounded-full"
            initial={{ width: 60, height: 60, opacity: 0 }}
            animate={{
              width: [60, 150 + i * 40],
              height: [60, 150 + i * 40],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {iconData.map((item) => (
          <FloatingIcon key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

interface IconItem {
  id: string
  imgSrc?: string
  isIcon?: boolean
  iconType?: string
  label: string
  desktop: { x: number; y: number }
  mobile: { x: number; y: number }
  delay: number
  hideOnMobile?: boolean
}

function FloatingIcon({ item }: { item: IconItem }) {
  const renderIcon = () => {
    if (item.isIcon) {
      if (item.iconType === "code") return <Code className="w-5 h-5 sm:w-8 sm:h-8 text-[#2C94F7]" />
      if (item.iconType === "more") return <MoreHorizontal className="w-5 h-5 sm:w-8 sm:h-8 text-[#37322F]" />
    }
    return <img src={item.imgSrc} alt={item.label} className="w-5 h-5 sm:w-8 sm:h-8 object-contain rounded-sm" />
  }

  return (
    <>
      {/* Desktop */}
      <motion.div
        className="hidden sm:flex absolute z-20 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg border border-[#E6E4E2] flex-col items-center gap-1 sm:gap-2 w-16 sm:w-20 md:w-24"
        initial={{ x: item.desktop.x * 1.5, y: item.desktop.y * 1.5, opacity: 0, scale: 0.8 }}
        animate={{
          x: item.desktop.x,
          opacity: 1,
          scale: 1,
          y: [item.desktop.y - 3, item.desktop.y + 3],
        }}
        transition={{
          x: { duration: 1, delay: item.delay, ease: "easeOut" },
          y: { duration: 1, delay: item.delay, ease: "easeOut" },
          opacity: { duration: 0.5, delay: item.delay },
          scale: { duration: 0.5, delay: item.delay },
          default: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2.5,
            ease: "easeInOut",
            delay: item.delay + 1,
          },
        }}
      >
        <div className="text-[#37322F] flex items-center justify-center h-6 w-6 sm:h-10 sm:w-10">{renderIcon()}</div>
        <span className="text-[8px] sm:text-[10px] uppercase tracking-wide font-bold text-[#49423D]/70 text-center leading-tight">{item.label}</span>
      </motion.div>

      {/* Mobile */}
      {!item.hideOnMobile && (
        <motion.div
          className="sm:hidden absolute z-20 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-md border border-[#E6E4E2] flex flex-col items-center gap-0.5 w-14"
          initial={{ x: item.mobile.x * 1.3, y: item.mobile.y * 1.3, opacity: 0, scale: 0.8 }}
          animate={{
            x: item.mobile.x,
            opacity: 1,
            scale: 1,
            y: [item.mobile.y - 2, item.mobile.y + 2],
          }}
          transition={{
            x: { duration: 0.8, delay: item.delay, ease: "easeOut" },
            y: { duration: 0.8, delay: item.delay, ease: "easeOut" },
            opacity: { duration: 0.4, delay: item.delay },
            scale: { duration: 0.4, delay: item.delay },
            default: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
              ease: "easeInOut",
              delay: item.delay + 1,
            },
          }}
        >
          <div className="text-[#37322F] flex items-center justify-center h-5 w-5">{renderIcon()}</div>
          <span className="text-[7px] uppercase tracking-wide font-bold text-[#49423D]/70 text-center leading-tight truncate w-full">{item.label}</span>
        </motion.div>
      )}
    </>
  )
}
