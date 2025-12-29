import { Locale } from "./translations";

export type NewsItem = {
    slug: string;
    title: string;
    description: string;
    date: string;
    type: 'pdf' | 'article';
    url?: string; // For external PDFs or links
    content?: React.ReactNode; // For internal articles
};

export const newsTranslations: Record<Locale, NewsItem[]> = {
    es: [
        {
            slug: "manual-ccse-2026",
            title: "Manual CCSE 2026",
            description: "Descarga y consulta el nuevo manual de preparación para la prueba de conocimientos constitucionales y socioculturales de España (CCSE) para el año 2026.",
            date: "2025-12-27",
            type: 'pdf',
            url: "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202026.pdf"
        }
    ],
    en: [
        {
            slug: "manual-ccse-2026",
            title: "CCSE Manual 2026",
            description: "Download and consult the new preparation manual for the Spanish constitutional and sociocultural knowledge test (CCSE) for the year 2026.",
            date: "2025-12-27",
            type: 'pdf',
            url: "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202026.pdf"
        }
    ],
    fr: [
        {
            slug: "manual-ccse-2026",
            title: "Manuel CCSE 2026",
            description: "Téléchargez et consultez le nouveau manuel de préparation au test de connaissances constitutionnelles et socioculturelles de l'Espagne (CCSE) pour l'année 2026.",
            date: "2025-12-27",
            type: 'pdf',
            url: "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202026.pdf"
        }
    ],
    pt: [
        {
            slug: "manual-ccse-2026",
            title: "Manual CCSE 2026",
            description: "Descarregue e consulte o novo manual de preparação para o teste de conhecimentos constitucionais e socioculturais de Espanha (CCSE) para o ano de 2026.",
            date: "2025-12-27",
            type: 'pdf',
            url: "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202026.pdf"
        }
    ],
    ar: [
        {
            slug: "manual-ccse-2026",
            title: "دليل CCSE 2026",
            description: "تحميل ومراجعة دليل التحضير الجديد لاختبار المعرفة الدستورية والاجتماعية والثقافية لإسبانيا (CCSE) لعام 2026.",
            date: "2025-12-27",
            type: 'pdf',
            url: "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202026.pdf"
        }
    ],
    zh: [
        {
            slug: "manual-ccse-2026",
            title: "2026年 CCSE 手册",
            description: "下载并查询 2026 年西班牙宪法和社会文化知识测试 (CCSE) 的新准备手册。",
            date: "2025-12-27",
            type: 'pdf',
            url: "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202026.pdf"
        }
    ],
    ro: [
        {
            slug: "manual-ccse-2026",
            title: "Manual CCSE 2026",
            description: "Descărcați și consultați noul manual de pregătire pentru testul de cunoștințe constituționale și socioculturale ale Spaniei (CCSE) pentru anul 2026.",
            date: "2025-12-27",
            type: 'pdf',
            url: "https://examenes.cervantes.es/sites/default/files/Manual%20CCSE%202026.pdf"
        }
    ]
};

export function getNewsItems(locale: Locale): NewsItem[] {
    return newsTranslations[locale] || newsTranslations.es;
}

export function getNewsItem(locale: Locale, slug: string): NewsItem | undefined {
    const items = getNewsItems(locale);
    return items.find(item => item.slug === slug);
}
