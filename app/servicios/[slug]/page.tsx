import { Metadata } from 'next'
import { getServiceContent } from "@/lib/service-translations"
import { ServicePageClient } from "@/components/service-page-client"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params

    // Default to 'es' for SEO metadata
    const service = getServiceContent('es', slug)

    if (!service) {
        return {
            title: 'Servicio no encontrado - Carolina Morales',
            description: 'El servicio legal que buscas no está disponible.'
        }
    }

    return {
        title: `${service.title} | Carolina Morales Abogada Extranjería`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Carolina Morales Abogada`,
            description: service.description,
            type: 'website',
            url: `https://www.abogadosmigracionyextranjeria.es/servicios/${slug}`,
        }
    }
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params

    return <ServicePageClient slug={slug} />
}
