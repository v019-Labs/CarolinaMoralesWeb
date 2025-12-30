import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Política de Privacidad | Carolina Morales Abogada",
    description: "Información sobre cómo tratamos sus datos personales y sus derechos RGPD.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
