import { Metadata } from 'next'
import { getNewsItem } from "@/lib/news-translations"
import { NewsPageClient } from "@/components/news-page-client"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params

    // Default to 'es' for SEO metadata as we don't have locale in URL
    // This ensures Google sees the Spanish content which is our primary target
    const newsItem = getNewsItem('es', slug)

    if (!newsItem) {
        return {
            title: 'Noticia no encontrada - Carolina Morales',
            description: 'La noticia que buscas no está disponible.'
        }
    }

    return {
        title: `${newsItem.title} - Carolina Morales Abogada`,
        description: newsItem.description,
        openGraph: {
            title: newsItem.title,
            description: newsItem.description,
            type: 'article',
            publishedTime: newsItem.date,
        }
    }
}

export default async function NovedadPage({ params }: Props) {
    const { slug } = await params

    return <NewsPageClient slug={slug} />
}
