"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"
import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
    initial: { "--x": "100%" },
    animate: { "--x": "-100%" },
    whileTap: { scale: 0.94 },
    whileHover: { scale: 1.02 },
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
        type: "spring",
        stiffness: 15,
        damping: 15,
        mass: 2,
        scale: {
            type: "spring",
            stiffness: 150,
            damping: 12,
            mass: 0.4,
        },
    },
}

interface ShinyButtonProps
    extends
    Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
    children: React.ReactNode
    className?: string
}

export const ShinyButton = React.forwardRef<
    HTMLButtonElement,
    ShinyButtonProps
>(({ children, className, ...props }, ref) => {
    return (
        <motion.button
            ref={ref}
            className={cn(
                "group relative cursor-pointer rounded-lg border px-7 py-2.5 font-bold backdrop-blur-3xl transition-all duration-500 ease-in-out hover:shadow-[0_10px_30px_-5px_color-mix(in_srgb,var(--primary),transparent_80%)] bg-white/5 dark:bg-white/5 overflow-hidden",
                className
            )}
            {...animationProps}
            {...props}
        >
            <span
                className="relative block size-full text-[10px] font-black uppercase tracking-[0.3em] text-foreground/80 dark:text-foreground/90 whitespace-nowrap z-10"
                style={{
                    maskImage:
                        "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
                    WebkitMaskImage:
                        "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
                }}
            >
                {children}
            </span>

            {/* Liquid border shine */}
            <span
                style={{
                    mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                    WebkitMask:
                        "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                    backgroundImage:
                        "linear-gradient(-75deg,color-mix(in srgb, var(--primary), transparent 95%) calc(var(--x)+20%),color-mix(in srgb, var(--primary), transparent 40%) calc(var(--x)+25%),color-mix(in srgb, var(--primary), transparent 95%) calc(var(--x)+100%))",
                }}
                className="absolute inset-0 z-10 block rounded-[inherit] p-px"
            />

            {/* Premium Inner Glow pulse */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,var(--primary)/15%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.button>
    )
})

ShinyButton.displayName = "ShinyButton"
