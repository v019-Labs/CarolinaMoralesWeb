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
        },
        twitter: {
            card: 'summary_large_image',
            title: service.title,
            description: service.description,
            images: ['/carolina.jpeg'],
        }
    }
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const service = getServiceContent('es', slug)

    return (
        <>
            <ServicePageClient slug={slug} />
            {service && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Inicio",
                                    "item": "https://www.abogadosmigracionyextranjeria.es"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Servicios",
                                    "item": "https://www.abogadosmigracionyextranjeria.es/#servicios"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": service.title,
                                    "item": `https://www.abogadosmigracionyextranjeria.es/servicios/${slug}`
                                }
                            ]
                        })
                    }}
                />
            )}
        </>
    )
}
