'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface AnimatedLinkProps {
    href: string
    children: ReactNode
    className?: string
}

export function AnimatedLink({ href, children, className = '' }: AnimatedLinkProps) {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        // Use View Transitions API if available, otherwise just navigate
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                router.push(href)
            })
        } else {
            router.push(href)
        }
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    )
}
