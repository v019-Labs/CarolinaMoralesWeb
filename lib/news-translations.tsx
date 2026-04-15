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
            slug: "rd-316-2026-modificacion-reglamento-extranjeria",
            title: "Real Decreto 316/2026 - Modificación del Reglamento de Extranjería",
            description: "Real Decreto 316/2026, de 14 de abril, por el que se modifica el Real Decreto 1155/2024, de 19 de noviembre, por el que se aprueba el Reglamento de la Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social.",
            date: "2026-04-14",
            type: 'pdf',
            url: "/files/BOE-A-2026-8284.pdf"
        },
        {
            slug: "borrador-rd-reglamento-extranjeria-2025",
            title: "Borrador de Real Decreto XX/2025 - Modificación del Reglamento de Extranjería",
            description: "Borrador de Real Decreto por el que se modifica el Real Decreto 1155/2024, de 19 de noviembre, por el que se aprueba el Reglamento de la Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social.",
            date: "2026-02-18",
            type: 'pdf',
            url: "/files/DOC-20260223-WA0109..pdf"
        },
        {
            slug: "proceso-renovacion-dana",
            title: "Proceso Renovación Autorizaciones DANA",
            description: "Información detallada sobre el proceso de renovación de autorizaciones para las personas afectadas por la DANA.",
            date: "2026-01-02",
            type: 'pdf',
            url: "/files/proceso%20de%20renovacion%20autorizaciones%20DANA-1.pdf"
        },
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
            url: "https://examenes.cervantes.es/sites/default/files/manual-ccse-2026-def.pdf"
        }
    ],
    en: [
        {
            slug: "rd-316-2026-modificacion-reglamento-extranjeria",
            title: "Royal Decree 316/2026 - Amendment to the Immigration Regulation",
            description: "Royal Decree 316/2026, of April 14, amending Royal Decree 1155/2024, of November 19, approving the Regulation of Organic Law 4/2000, of January 11, on the rights and freedoms of foreigners in Spain and their social integration.",
            date: "2026-04-14",
            type: 'pdf',
            url: "/files/BOE-A-2026-8284.pdf"
        },
        {
            slug: "borrador-rd-reglamento-extranjeria-2025",
            title: "Draft Royal Decree XX/2025 - Amendment to the Immigration Regulation",
            description: "Draft Royal Decree amending Royal Decree 1155/2024, of November 19, approving the Regulation of Organic Law 4/2000, of January 11, on the rights and freedoms of foreigners in Spain and their social integration.",
            date: "2026-02-18",
            type: 'pdf',
            url: "/files/DOC-20260223-WA0109..pdf"
        },
        {
            slug: "proceso-renovacion-dana",
            title: "DANA Authorization Renewal Process",
            description: "Detailed information on the authorization renewal process for those affected by DANA.",
            date: "2026-01-02",
            type: 'pdf',
            url: "/files/proceso%20de%20renovacion%20autorizaciones%20DANA-1.pdf"
        },
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
            url: "https://examenes.cervantes.es/sites/default/files/manual-ccse-2026-def.pdf"
        }
    ],
    fr: [
        {
            slug: "rd-316-2026-modificacion-reglamento-extranjeria",
            title: "Décret Royal 316/2026 - Modification du Règlement sur l'Immigration",
            description: "Décret Royal 316/2026, du 14 avril, modifiant le Décret Royal 1155/2024, du 19 novembre, portant approbation du Règlement de la Loi Organique 4/2000, du 11 janvier, sur les droits et libertés des étrangers en Espagne et leur intégration sociale.",
            date: "2026-04-14",
            type: 'pdf',
            url: "/files/BOE-A-2026-8284.pdf"
        },
        {
            slug: "borrador-rd-reglamento-extranjeria-2025",
            title: "Projet de Décret Royal XX/2025 - Modification du Règlement sur l'Immigration",
            description: "Projet de Décret Royal modifiant le Décret Royal 1155/2024, du 19 novembre, portant approbation du Règlement de la Loi Organique 4/2000, du 11 janvier, sur les droits et libertés des étrangers en Espagne et leur intégration sociale.",
            date: "2026-02-18",
            type: 'pdf',
            url: "/files/DOC-20260223-WA0109..pdf"
        },
        {
            slug: "proceso-renovacion-dana",
            title: "Processus de renouvellement des autorisations DANA",
            description: "Informations détaillées sur le processus de renouvellement des autorisations pour les personnes touchées par la DANA.",
            date: "2026-01-02",
            type: 'pdf',
            url: "/files/proceso%20de%20renovacion%20autorizaciones%20DANA-1.pdf"
        },
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
            url: "https://examenes.cervantes.es/sites/default/files/manual-ccse-2026-def.pdf"
        }
    ],
    pt: [
        {
            slug: "rd-316-2026-modificacion-reglamento-extranjeria",
            title: "Decreto Real 316/2026 - Alteração do Regulamento de Imigração",
            description: "Decreto Real 316/2026, de 14 de abril, que altera o Decreto Real 1155/2024, de 19 de novembro, que aprova o Regulamento da Lei Orgânica 4/2000, de 11 de janeiro, sobre os direitos e liberdades dos estrangeiros em Espanha e a sua integração social.",
            date: "2026-04-14",
            type: 'pdf',
            url: "/files/BOE-A-2026-8284.pdf"
        },
        {
            slug: "borrador-rd-reglamento-extranjeria-2025",
            title: "Projeto de Decreto Real XX/2025 - Alteração do Regulamento de Imigração",
            description: "Projeto de Decreto Real que altera o Decreto Real 1155/2024, de 19 de novembro, que aprova o Regulamento da Lei Orgânica 4/2000, de 11 de janeiro, sobre os direitos e liberdades dos estrangeiros em Espanha e a sua integração social.",
            date: "2026-02-18",
            type: 'pdf',
            url: "/files/DOC-20260223-WA0109..pdf"
        },
        {
            slug: "proceso-renovacion-dana",
            title: "Processo de Renovação de Autorizações DANA",
            description: "Informações detalhadas sobre o processo de renovação de autorizações para as pessoas afetadas pela DANA.",
            date: "2026-01-02",
            type: 'pdf',
            url: "/files/proceso%20de%20renovacion%20autorizaciones%20DANA-1.pdf"
        },
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
            url: "https://examenes.cervantes.es/sites/default/files/manual-ccse-2026-def.pdf"
        }
    ],
    ar: [
        {
            slug: "rd-316-2026-modificacion-reglamento-extranjeria",
            title: "المرسوم الملكي 316/2026 - تعديل لائحة الهجرة",
            description: "المرسوم الملكي 316/2026 الصادر في 14 أبريل، يعدل المرسوم الملكي 1155/2024 الصادر في 19 نوفمبر، الذي يوافق على لائحة القانون الأساسي 4/2000 الصادر في 11 يناير، بشأن حقوق وحريات الأجانب في إسبانيا واندماجهم الاجتماعي.",
            date: "2026-04-14",
            type: 'pdf',
            url: "/files/BOE-A-2026-8284.pdf"
        },
        {
            slug: "borrador-rd-reglamento-extranjeria-2025",
            title: "مسودة المرسوم الملكي XX/2025 - تعديل لائحة الهجرة",
            description: "مسودة مرسوم ملكي يعدل المرسوم الملكي 1155/2024 الصادر في 19 نوفمبر، الذي يوافق على لائحة القانون الأساسي 4/2000 الصادر في 11 يناير، بشأن حقوق وحريات الأجانب في إسبانيا واندماجهم الاجتماعي.",
            date: "2026-02-18",
            type: 'pdf',
            url: "/files/DOC-20260223-WA0109..pdf"
        },
        {
            slug: "proceso-renovacion-dana",
            title: "عملية تجديد تصاريح DANA",
            description: "معلومات مفصلة حول عملية تجديد التصاريح للمتضررين من DANA.",
            date: "2026-01-02",
            type: 'pdf',
            url: "/files/proceso%20de%20renovacion%20autorizaciones%20DANA-1.pdf"
        },
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
            url: "https://examenes.cervantes.es/sites/default/files/manual-ccse-2026-def.pdf"
        }
    ],
    zh: [
        {
            slug: "rd-316-2026-modificacion-reglamento-extranjeria",
            title: "第 316/2026 号皇家法令 - 移民法规修正案",
            description: "4 月 14 日第 316/2026 号皇家法令，修改2024年11月19日第1155/2024号皇家法令，该法令批准了2000年1月11日关于外国人在西班牙的权利和自由及其社会融入的第4/2000号组织法的实施细则。",
            date: "2026-04-14",
            type: 'pdf',
            url: "/files/BOE-A-2026-8284.pdf"
        },
        {
            slug: "borrador-rd-reglamento-extranjeria-2025",
            title: "皇家法令草案 XX/2025 - 移民法规修正案",
            description: "皇家法令草案，修改2024年11月19日第1155/2024号皇家法令，该法令批准了2000年1月11日关于外国人在西班牙的权利和自由及其社会融入的第4/2000号组织法的实施细则。",
            date: "2026-02-18",
            type: 'pdf',
            url: "/files/DOC-20260223-WA0109..pdf"
        },
        {
            slug: "proceso-renovacion-dana",
            title: "DANA 授权续期流程",
            description: "关于受 DANA 影响人员授权续期流程的详细信息。",
            date: "2026-01-02",
            type: 'pdf',
            url: "/files/proceso%20de%20renovacion%20autorizaciones%20DANA-1.pdf"
        },
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
            url: "https://examenes.cervantes.es/sites/default/files/manual-ccse-2026-def.pdf"
        }
    ],
    ro: [
        {
            slug: "rd-316-2026-modificacion-reglamento-extranjeria",
            title: "Decret Regal 316/2026 - Modificarea Regulamentului privind Imigrația",
            description: "Decret Regal 316/2026, din 14 aprilie, care modifică Decretul Regal 1155/2024, din 19 noiembrie, prin care se aprobă Regulamentul Legii Organice 4/2000, din 11 ianuarie, privind drepturile și libertățile străinilor în Spania și integrarea lor socială.",
            date: "2026-04-14",
            type: 'pdf',
            url: "/files/BOE-A-2026-8284.pdf"
        },
        {
            slug: "borrador-rd-reglamento-extranjeria-2025",
            title: "Proiect de Decret Regal XX/2025 - Modificarea Regulamentului privind Imigrația",
            description: "Proiect de Decret Regal care modifică Decretul Regal 1155/2024, din 19 noiembrie, prin care se aprobă Regulamentul Legii Organice 4/2000, din 11 ianuarie, privind drepturile și libertățile străinilor în Spania și integrarea lor socială.",
            date: "2026-02-18",
            type: 'pdf',
            url: "/files/DOC-20260223-WA0109..pdf"
        },
        {
            slug: "proceso-renovacion-dana",
            title: "Procesul de reînnoire a autorizațiilor DANA",
            description: "Informații detaliate despre procesul de reînnoire a autorizațiilor pentru persoanele afectate de DANA.",
            date: "2026-01-02",
            type: 'pdf',
            url: "/files/proceso%20de%20renovacion%20autorizaciones%20DANA-1.pdf"
        },
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
            url: "https://examenes.cervantes.es/sites/default/files/manual-ccse-2026-def.pdf"
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
