"use client"

import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote:
        "Very nicely done! It is so cool we can build our own tooling around our own development workflows. I think this is future where every dev has their own custom made tools bespoke to their flow. Also great UI",
      name: "Otherwise_P*******",
    },
    {
      quote:
        "Downloaded and spun it up. I like the look of it a lot and genuinely think it's something that I may try to work into my day-to-day workflow.",
      name: "Top_T*******",
    },
    {
      quote:
        "I think this is a great idea, I purchased it. I hope you have a lot of sales to motivate you to maintain it :)",
      name: "thek***",
    },
    {
      quote:
        "Jumped the gun on lifetime. It seems like a cool way to use multiple agents in the CLI in one project and with Git.",
      name: "6sna***",
    },
    {
      quote:
        "Your lifetime deal seems a bit underpriced :) same cost as an annual subscription. However I am happy to support your development.",
      name: "Konsta****",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 300)
    }, 12000) // increased from 6000ms to 12000ms for longer testimonial display

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleNavigationClick = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTestimonial(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}

      {/* Testimonial Content */}
      <div className="self-stretch px-4 md:px-12 overflow-hidden flex justify-center items-center bg-background">
        <div className="w-full max-w-3xl pt-20 md:pt-24 pb-16 md:pb-20 flex flex-col justify-center items-center gap-8">
          {/* Quote */}
          <div
            className="text-center text-[#49423D] text-xl md:text-2xl lg:text-[28px] font-medium leading-8 md:leading-10 font-sans transition-all duration-700 ease-in-out tracking-tight px-4"
            style={{
              filter: isTransitioning ? "blur(4px)" : "blur(0px)",
              opacity: isTransitioning ? 0.6 : 1,
              transition: "filter 0.7s ease-in-out, opacity 0.7s ease-in-out",
            }}
          >
            &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
          </div>

          {/* Author Info */}
          <div
            className="transition-all duration-700 ease-in-out"
            style={{
              filter: isTransitioning ? "blur(4px)" : "blur(0px)",
              opacity: isTransitioning ? 0.6 : 1,
              transition: "filter 0.7s ease-in-out, opacity 0.7s ease-in-out",
            }}
          >
            <div className="text-center text-[rgba(73,66,61,0.70)] text-base font-medium leading-6 font-sans">
              — {testimonials[activeTestimonial].name}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => handleNavigationClick((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 shadow-[0px_1px_2px_rgba(0,0,0,0.08)] overflow-hidden rounded-full border border-[rgba(0,0,0,0.15)] justify-center items-center gap-2 flex hover:bg-gray-50 transition-colors"
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#46413E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigationClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-[#49423D] w-4" : "bg-[rgba(73,66,61,0.3)]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleNavigationClick((activeTestimonial + 1) % testimonials.length)}
              className="w-9 h-9 shadow-[0px_1px_2px_rgba(0,0,0,0.08)] overflow-hidden rounded-full border border-[rgba(0,0,0,0.15)] justify-center items-center gap-2 flex hover:bg-gray-50 transition-colors"
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#46413E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
