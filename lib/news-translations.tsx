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
            slug: "ley-eficiencia-justicia-2025",
            title: "Ley Orgánica 1/2025, de 2 de enero, de medidas en materia de eficiencia del Servicio Público de Justicia.",
            description: "Publicación de la nueva Ley Orgánica con medidas para la eficiencia del servicio público de justicia y acciones colectivas.",
            date: "2025-12-30",
            type: 'pdf',
            url: "/files/Eficiencia%20justiciaLey-Ley%20Orgánica%201-2025-0201-medidas%20eficiencia%20Justicia.pdf"
        },
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
            slug: "ley-eficiencia-justicia-2025",
            title: "Organic Law 1/2025, of January 2, on measures for the efficiency of the Public Justice Service.",
            description: "Publication of the new Organic Law with measures for the efficiency of the public justice service and collective actions.",
            date: "2025-12-30",
            type: 'pdf',
            url: "/files/Eficiencia%20justiciaLey-Ley%20Orgánica%201-2025-0201-medidas%20eficiencia%20Justicia.pdf"
        },
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
            slug: "ley-eficiencia-justicia-2025",
            title: "Loi organique 1/2025, du 2 janvier, relative aux mesures d'efficacité du Service Public de la Justice.",
            description: "Publication de la nouvelle loi organique avec des mesures pour l'efficacité du service public de la justice et des actions collectives.",
            date: "2025-12-30",
            type: 'pdf',
            url: "/files/Eficiencia%20justiciaLey-Ley%20Orgánica%201-2025-0201-medidas%20eficiencia%20Justicia.pdf"
        },
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
            slug: "ley-eficiencia-justicia-2025",
            title: "Lei Orgânica 1/2025, de 2 de janeiro, de medidas em matéria de eficiência do Serviço Público de Justiça.",
            description: "Publicação della nova Lei Orgânica com medidas para a eficiência do serviço público de justiça e ações coletivas.",
            date: "2025-12-30",
            type: 'pdf',
            url: "/files/Eficiencia%20justiciaLey-Ley%20Orgánica%201-2025-0201-medidas%20eficiencia%20Justicia.pdf"
        },
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
            slug: "ley-eficiencia-justicia-2025",
            title: "القانون العضوي رقم 1/2025 المؤرخ في 2 يناير، بشأن تدابير كفاءة خدمة العدالة العامة.",
            description: "نشر القانون العضوي الجديد الذي يتضمن تدابير لكفاءة خدمة العدالة العامة والإجراءات الجماعية.",
            date: "2025-12-30",
            type: 'pdf',
            url: "/files/Eficiencia%20justiciaLey-Ley%20Orgánica%201-2025-0201-medidas%20eficiencia%20Justicia.pdf"
        },
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
            slug: "ley-eficiencia-justicia-2025",
            title: "1月2日关于公共司法服务效率措施的第1/2025号组织法。",
            description: "发布包含公共司法服务效率措施和集体诉讼措施的新组织法。",
            date: "2025-12-30",
            type: 'pdf',
            url: "/files/Eficiencia%20justiciaLey-Ley%20Orgánica%201-2025-0201-medidas%20eficiencia%20Justicia.pdf"
        },
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
            slug: "ley-eficiencia-justicia-2025",
            title: "Legea organică 1/2025, din 2 ianuarie, privind măsurile de eficiență a Serviciului Public de Justiție.",
            description: "Publicarea noii Legi Organice cu măsuri pentru eficiența serviciului public de justiție și acțiuni colective.",
            date: "2025-12-30",
            type: 'pdf',
            url: "/files/Eficiencia%20justiciaLey-Ley%20Orgánica%201-2025-0201-medidas%20eficiencia%20Justicia.pdf"
        },
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
