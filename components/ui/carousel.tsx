'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

export function Carousel({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = '',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, children.length])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.5,
            }}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {showArrows && children.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-zinc-900/80 dark:ring-zinc-800/50 dark:hover:bg-zinc-900"
            >
              <ChevronLeftIcon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg ring-1 ring-zinc-200/50 backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-zinc-900/80 dark:ring-zinc-800/50 dark:hover:bg-zinc-900"
            >
              <ChevronRightIcon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
            </button>
          </>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && children.length > 1 && (
        <div className="mt-6 flex justify-center space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-zinc-900 w-6 dark:bg-zinc-100'
                  : 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
