"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ProductHuntSticker() {
  return (
    <Link href="https://www.producthunt.com/p/cli-manager" target="_blank">
      <motion.div
        initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 6, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2 
        }}
        className="relative w-[180px] h-[100px] bg-[#FDFBF7] shadow-lg flex flex-col justify-center items-center p-3 text-center transform rotate-6 z-20 cursor-pointer hover:scale-105 transition-transform duration-200"
        style={{
          boxShadow: "2px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Tape - Top Left */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#CC3300]/20 rotate-[-5deg] z-10 backdrop-blur-[1px] shadow-sm" />
        
        {/* Content */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-[#FF6154] text-[10px] font-bold font-sans uppercase tracking-wider">
            Product Hunt
          </div>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[#37322F] text-xl font-bold font-serif">#10 Product</span>
            <span className="text-[#605A57] text-[10px] font-medium font-sans">
              of the Day
            </span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[#FF6154] text-[10px] font-bold uppercase tracking-wider group">
            <span>Go to Forum</span>
            <svg 
              className="w-3 h-3 transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
