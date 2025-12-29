'use client'

import { useEffect, useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)
    const [displayChildren, setDisplayChildren] = useState(children)

    useEffect(() => {
        // When pathname changes, trigger animation
        setIsVisible(false)

        const timer = setTimeout(() => {
            setDisplayChildren(children)
            setIsVisible(true)
        }, 200)

        return () => clearTimeout(timer)
    }, [pathname, children])

    return (
        <div
            className="transition-all duration-300 ease-out"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
            }}
        >
            {displayChildren}
        </div>
    )
}
