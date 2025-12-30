import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Aviso Legal | Carolina Morales Abogada",
    description: "Información legal y términos de uso del sitio web de Carolina Morales.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
