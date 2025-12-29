"use client"

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

// Dynamically import SimpleParallax to avoid SSR issues
const SimpleParallax = dynamic(() => import('simple-parallax-js'), {
    ssr: false,
    loading: () => null,
})

interface ParallaxImageProps {
    children: ReactNode
    /** Direction of parallax: up, down, left, right, or combinations like "up left" */
    orientation?: "up" | "down" | "left" | "right" | "up left" | "up right" | "down left" | "down right"
    /** Scale factor - higher = more visible effect (default: 1.3) */
    scale?: number
    /** Allow overflow outside container */
    overflow?: boolean
    /** Delay in seconds for smooth follow effect */
    delay?: number
    /** CSS transition timing function */
    transition?: string
    /** Stop parallax at this percentage (0-99) */
    maxTransition?: number
    className?: string
}

export function ParallaxImage({
    children,
    orientation = "up",
    scale = 1.3,
    overflow = false,
    delay = 0.6,
    transition = "cubic-bezier(0,0,0,1)",
    maxTransition,
    className,
}: ParallaxImageProps) {
    return (
        <div className={className}>
            <SimpleParallax
                orientation={orientation}
                scale={scale}
                overflow={overflow}
                delay={delay}
                transition={transition}
                maxTransition={maxTransition}
            >
                {children}
            </SimpleParallax>
        </div>
    )
}
