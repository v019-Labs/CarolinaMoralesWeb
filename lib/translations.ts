export type Locale = 'es' | 'en' | 'fr' | 'ar' | 'pt' | 'zh' | 'ro'

export const locales: Locale[] = ['es', 'en', 'fr', 'ar', 'pt', 'zh', 'ro']
export const defaultLocale: Locale = 'es'

export const localeNames: Record<Locale, string> = {
    es: 'Español',
    en: 'English',
    fr: 'Français',
    ar: 'العربية',
    pt: 'Português',
    zh: '中文',
    ro: 'Română'
}

type TranslationKeys = {
    // Navbar
    nav: {
        home: string
        about: string
        services: string
        reviews: string
        locations: string
        contact: string
        bookAppointment: string
        news: string
    }
    // Hero
    hero: {
        nationality: string
        arraigo: string
        familyReunification: string
        penal: string
        civil: string
        accidents: string
    }
    // About Section
    about: {
        title: string
        name: string
        birthplace: string
        education: string
        courses: string
        mediation: string
        immigration: string
        canonicalLaw: string
        quote: string
        signature: string
    }
    // Services Section
    services: {
        title: string
        specialization: string
        subtitle: string
        learnMore: string
        otherServices: string
        nacionalidad: {
            title: string
            description: string
        }
        arraigo: {
            title: string
            description: string
        }
        reagrupacion: {
            title: string
            description: string
        }
        penal: {
            title: string
            description: string
        }
        civil: {
            title: string
            description: string
        }
        accidentes: {
            title: string
            description: string
        }
    }
    // Reviews Section
    reviews: {
        title: string
        clients: string
        subtitle: string
    }
    // Footer
    footer: {
        rights: string
        privacy: string
        legal: string
        cookies: string
        schedule: string
        contact: string
        barAssociation: string
        logoSubtitle: string
    }
    // Service Pages
    servicePage: {
        backToServices: string
        needHelp: string
        personalConsultation: string
        resolveDoubts: string
        contactWhatsApp: string
        responseTime: string
        scheduleTitle: string
        mondayThursday: string
        friday: string
        weekend: string
        closed: string
        appointmentRequired: string
        locationTitle: string
        location: string
        consultationType: string
        viewOnMap: string
        quickQuestion: string
        contactForConsultation: string
        notFound: string
    }
    // Common
    common: {
        whatsapp: string
    }
    // News Page
    newsPage: {
        title: string
        subtitle: string
        readMore: string
        backToNews: string
        notFound: string
        pdfDocument: string
        article: string
        viewerTitle: string
        viewerSubtitle: string
        downloadPdf: string
        searchPlaceholder: string
        filterAll: string
        filterPdf: string
        filterArticle: string
        noResults: string
        latestNews: string
    }
    // Locations Section
    locationsSection: {
        title: string
        subtitle: string
        reus: string
        barcelona: string
        addressReus: string
        addressBarcelona: string
    }
    // Contact Section
    contactSection: {
        title: string
        phone: string
        email: string
        location: string
        whatsappButton: string
    }
}

export const translations: Record<Locale, TranslationKeys> = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            services: 'Servicios',
            reviews: 'Reseñas',
            locations: 'Ubicaciones',
            contact: 'Contacto',
            bookAppointment: 'Agendar cita',
            news: 'Novedades'
        },
        hero: {
            nationality: 'Nacionalidad',
            arraigo: 'Arraigos',
            familyReunification: 'Reagrupación Familiar',
            penal: 'Derecho Penal',
            civil: 'Derecho Civil',
            accidents: 'Accidentes'
        },
        about: {
            title: 'Sobre',
            name: 'Carolina Morales',
            birthplace: 'Nací en Manizales (Colombia) en 1982 y emigré a España en el 2001.',
            education: 'Cursé el grado de Derecho en la URV (Tarragona) entre 2011 y 2016, seguido del Máster y el examen de acceso a la Abogacía (2017-2018).',
            courses: '',
            mediation: 'Curso Superior en Mediación (2018)',
            immigration: 'Curso de especialización en Extranjería (2020, ICAB)',
            canonicalLaw: 'Máster en Derecho Canónico Matrimonial (2022)',
            quote: 'Al haber pasado por un proceso migratorio junto a toda mi familia, puedo comprender y ponerme en la piel de los extranjeros que vienen buscando un futuro mejor.',
            signature: 'Carolina Morales'
        },
        services: {
            title: 'Áreas de',
            specialization: 'Especialización',
            subtitle: 'Servicios legales integrales adaptados a tus necesidades específicas con atención personalizada',
            learnMore: 'Más información',
            otherServices: 'Otros Servicios',
            nacionalidad: {
                title: 'Nacionalidad Española',
                description: 'La obtención de la nacionalidad española representa la máxima integración jurídica en el Estado.'
            },
            arraigo: {
                title: 'Arraigos',
                description: 'Tramitación de Arraigos: Social, Laboral, Familiar y para la Formación.'
            },
            reagrupacion: {
                title: 'Reagrupación Familiar',
                description: 'Ayuda legal para reunir a tu familia en España cumpliendo con todos los requisitos legales.'
            },
            penal: {
                title: 'Derecho Penal',
                description: 'Defensa en todo tipo de procedimientos penales (leve, rápido, abreviado, sumario y jurado popular) así como asesoramiento específico enfocado a la mejor defensa.'
            },
            civil: {
                title: 'Derecho Civil Matrimonial',
                description: 'Gestión de divorcios, separaciones, convenios reguladores y derecho de familia.'
            },
            accidentes: {
                title: 'Reclamación Accidentes',
                description: 'Gestión de indemnizaciones y reclamaciones ante aseguradoras por accidentes de tráfico.'
            }
        },
        reviews: {
            title: 'Lo que dicen mis',
            clients: 'clientes',
            subtitle: 'La satisfacción de mis clientes es mi mejor carta de presentación'
        },
        footer: {
            rights: 'Todos los derechos reservados',
            privacy: 'Privacidad',
            legal: 'Aviso Legal',
            cookies: 'Cookies',
            schedule: 'Horario',
            contact: 'Contacto',
            barAssociation: 'Colegiada 44240 Ilustre Colegio de la Abogacía de Barcelona',
            logoSubtitle: 'Servicios legales profesionales con más de 15 años de experiencia'
        },
        servicePage: {
            backToServices: 'Volver a servicios',
            needHelp: '¿Necesitas ayuda con este trámite?',
            personalConsultation: 'Consulta personalizada',
            resolveDoubts: 'Resuelve todas tus dudas hoy mismo. Primera consulta sin compromiso.',
            contactWhatsApp: 'Contactar por WhatsApp',
            responseTime: 'Respuesta en menos de 24 horas',
            scheduleTitle: 'Horario de atención',
            mondayThursday: 'Lunes - Jueves',
            friday: 'Viernes',
            weekend: 'Sábado - Domingo',
            closed: 'Cerrado',
            appointmentRequired: 'Cita previa requerida para atención presencial.',
            locationTitle: 'Ubicación',
            location: 'Barcelona, España',
            consultationType: 'Consultas presenciales y online disponibles',
            viewOnMap: 'Ver en el mapa',
            quickQuestion: '¿Tienes una pregunta rápida?',
            contactForConsultation: 'Contáctanos para una consulta personalizada.',
            notFound: 'Servicio no encontrado'
        },
        common: {
            whatsapp: 'WhatsApp'
        },
        newsPage: {
            title: 'Novedades y Actualidad',
            subtitle: 'Mantente informado sobre las últimas noticias, cambios legislativos y recursos importantes en materia de extranjería y nacionalidad.',
            readMore: 'Leer más',
            backToNews: 'Volver a novedades',
            notFound: 'Publicación no encontrada',
            pdfDocument: 'Documento PDF',
            article: 'Artículo',
            viewerTitle: 'Visualizador de Documento',
            viewerSubtitle: 'Si no puedes ver el documento, descárgalo directamente.',
            downloadPdf: 'Descargar PDF',
            searchPlaceholder: 'Buscar novedades...',
            filterAll: 'Todas',
            filterPdf: 'PDFs',
            filterArticle: 'Artículos',
            noResults: 'No se encontraron resultados',
            latestNews: 'Última novedad'
        },
        locationsSection: {
            title: 'Nuestras',
            subtitle: 'Oficinas',
            reus: 'Reus',
            barcelona: 'Barcelona',
            addressReus: "Carrer d'Antoni Gaudí, 74, 2-2a, 43203 Reus, Tarragona",
            addressBarcelona: 'Pg. de la Bonanova, 10, Bj 2ª, Distrito de Sarrià-Sant Gervasi, 08022 Barcelona'
        },
        contactSection: {
            title: 'Contacto',
            phone: 'Teléfono',
            email: 'Email',
            location: 'Ubicación',
            whatsappButton: 'Contactar por WhatsApp'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            reviews: 'Reviews',
            locations: 'Locations',
            contact: 'Contact',
            bookAppointment: 'Book Appointment',
            news: 'News'
        },
        hero: {
            nationality: 'Nationality',
            arraigo: 'Arraigos',
            familyReunification: 'Family Reunification',
            penal: 'Criminal Law',
            civil: 'Civil Law',
            accidents: 'Accidents'
        },
        about: {
            title: 'About',
            name: 'Carolina Morales',
            birthplace: 'I was born in Manizales (Colombia) in 1982 and emigrated to Spain in 2001.',
            education: 'I studied Law at URV (Tarragona) between 2011 and 2016, followed by a Master\'s degree and the Bar exam (2017-2018).',
            courses: '',
            mediation: 'Advanced Course in Mediation (2018)',
            immigration: 'Immigration Law Specialization Course (2020, ICAB)',
            canonicalLaw: 'Master\'s in Canonical Matrimonial Law (2022)',
            quote: 'Having gone through an immigration process with my entire family, I can understand and empathize with foreigners who come seeking a better future.',
            signature: 'Carolina Morales'
        },
        services: {
            title: 'Areas of',
            specialization: 'Specialization',
            subtitle: 'Comprehensive legal services tailored to your specific needs with personalized attention',
            learnMore: 'Learn more',
            otherServices: 'Other Services',
            nacionalidad: {
                title: 'Spanish Nationality',
                description: 'Obtaining Spanish nationality represents the highest level of legal integration into the State.'
            },
            arraigo: {
                title: 'Arraigos',
                description: 'Processing of Social, Labor, Family, and Training Arraigos.'
            },
            reagrupacion: {
                title: 'Family Reunification',
                description: 'Legal assistance to reunite your family in Spain complying with all legal requirements.'
            },
            penal: {
                title: 'Criminal Law',
                description: 'Defense in all types of criminal proceedings (minor, rapid, abbreviated, summary, and jury trial) as well as specific advice focused on the best defense.'
            },
            civil: {
                title: 'Family Law',
                description: 'Management of divorces, separations, regulatory agreements and family law.'
            },
            accidentes: {
                title: 'Accident Claims',
                description: 'Management of compensation and claims against insurers for traffic accidents.'
            }
        },
        reviews: {
            title: 'What my',
            clients: 'clients say',
            subtitle: 'My clients\' satisfaction is my best reference'
        },
        footer: {
            rights: 'All rights reserved',
            privacy: 'Privacy',
            legal: 'Legal Notice',
            cookies: 'Cookies',
            schedule: 'Schedule',
            contact: 'Contact',
            barAssociation: 'Registered Lawyer 44240 Barcelona Bar Association',
            logoSubtitle: 'Professional legal services with over 15 years of experience'
        },
        servicePage: {
            backToServices: 'Back to services',
            needHelp: 'Need help with this process?',
            personalConsultation: 'Personal consultation',
            resolveDoubts: 'Resolve all your questions today. First consultation without commitment.',
            contactWhatsApp: 'Contact via WhatsApp',
            responseTime: 'Response in less than 24 hours',
            scheduleTitle: 'Office Hours',
            mondayThursday: 'Monday - Thursday',
            friday: 'Friday',
            weekend: 'Saturday - Sunday',
            closed: 'Closed',
            appointmentRequired: 'Appointment required for in-person visits.',
            locationTitle: 'Location',
            location: 'Barcelona, Spain',
            consultationType: 'In-person and online consultations available',
            viewOnMap: 'View on map',
            quickQuestion: 'Have a quick question?',
            contactForConsultation: 'Contact us for a personalized consultation.',
            notFound: 'Service not found'
        },
        common: {
            whatsapp: 'WhatsApp'
        },
        newsPage: {
            title: 'News and Updates',
            subtitle: 'Stay informed about the latest news, legislative changes, and important resources regarding immigration and nationality.',
            readMore: 'Read more',
            backToNews: 'Back to news',
            notFound: 'Post not found',
            pdfDocument: 'PDF Document',
            article: 'Article',
            viewerTitle: 'Document Viewer',
            viewerSubtitle: 'If you cannot view the document, download it directly.',
            downloadPdf: 'Download PDF',
            searchPlaceholder: 'Search news...',
            filterAll: 'All',
            filterPdf: 'PDFs',
            filterArticle: 'Articles',
            noResults: 'No results found',
            latestNews: 'Latest news'
        },
        locationsSection: {
            title: 'Our',
            subtitle: 'Offices',
            reus: 'Reus',
            barcelona: 'Barcelona',
            addressReus: "Carrer d'Antoni Gaudí, 74, 2-2a, 43203 Reus, Tarragona",
            addressBarcelona: 'Pg. de la Bonanova, 10, Bj 2ª, Distrito de Sarrià-Sant Gervasi, 08022 Barcelona'
        },
        contactSection: {
            title: 'Contact',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            whatsappButton: 'Contact via WhatsApp'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            services: 'Services',
            reviews: 'Avis',
            locations: 'Emplacements',
            contact: 'Contact',
            bookAppointment: 'Prendre RDV',
            news: 'Actualités'
        },
        hero: {
            nationality: 'Nationalité',
            arraigo: 'Arraigos',
            familyReunification: 'Regroupement Familial',
            penal: 'Droit Pénal',
            civil: 'Droit Civil',
            accidents: 'Accidents de la Route'
        },
        about: {
            title: 'À propos de',
            name: 'Carolina Morales',
            birthplace: 'Je suis née à Manizales (Colombie) en 1982 et j\'ai émigré en Espagne en 2001.',
            education: 'J\'ai étudié le Droit à l\'URV (Tarragone) entre 2011 et 2016, suivi d\'un Master et de l\'examen du Barreau (2017-2018).',
            courses: '',
            mediation: 'Cours Supérieur en Médiation (2018)',
            immigration: 'Cours de spécialisation en Droit des Étrangers (2020, ICAB)',
            canonicalLaw: 'Master en Droit Canonique Matrimonial (2022)',
            quote: 'Ayant vécu un processus migratoire avec toute ma famille, je peux comprendre et me mettre à la place des étrangers qui viennent chercher un meilleur avenir.',
            signature: 'Carolina Morales'
        },
        services: {
            title: 'Domaines de',
            specialization: 'Spécialisation',
            subtitle: 'Services juridiques complets adaptés à vos besoins spécifiques avec une attention personnalisée',
            learnMore: 'En savoir plus',
            otherServices: 'Autres Services',
            nacionalidad: {
                title: 'Nationalité Espagnole',
                description: 'L\'obtention de la nationalité espagnole représente le plus haut niveau d\'intégration juridique dans l\'État.'
            },
            arraigo: {
                title: 'Arraigos',
                description: 'Traitement des permis de séjour sociaux, professionnels, familiaux et de formation.'
            },
            reagrupacion: {
                title: 'Regroupement Familial',
                description: 'Assistance juridique pour réunir votre famille en Espagne conformément à toutes les exigences légales.'
            },
            penal: {
                title: 'Droit Pénal',
                description: 'Défense dans tous types de procédures pénales (mineures, rapides, abrégées, sommaires et jury populaire) ainsi que des conseils spécifiques axés sur la meilleure défense.'
            },
            civil: {
                title: 'Droit de la Famille',
                description: 'Gestion des divorces, séparations, conventions réglementaires et droit de la famille.'
            },
            accidentes: {
                title: 'Réclamations Accidents',
                description: 'Gestion des indemnisations et réclamations auprès des assureurs pour accidents de la route.'
            }
        },
        reviews: {
            title: 'Ce que disent mes',
            clients: 'clients',
            subtitle: 'La satisfaction de mes clients est ma meilleure référence'
        },
        footer: {
            rights: 'Tous droits réservés',
            privacy: 'Confidentialité',
            legal: 'Mentions Légales',
            cookies: 'Cookies',
            schedule: 'Horaires',
            contact: 'Contact',
            barAssociation: 'Avocate inscrite 44240 Barreau de Barcelone',
            logoSubtitle: 'Services juridiques professionnels avec plus de 15 ans d\'expérience'
        },
        servicePage: {
            backToServices: 'Retour aux services',
            needHelp: 'Besoin d\'aide avec cette démarche?',
            personalConsultation: 'Consultation personnalisée',
            resolveDoubts: 'Résolvez toutes vos questions aujourd\'hui. Première consultation sans engagement.',
            contactWhatsApp: 'Contacter par WhatsApp',
            responseTime: 'Réponse en moins de 24 heures',
            scheduleTitle: 'Heures d\'ouverture',
            mondayThursday: 'Lundi - Jeudi',
            friday: 'Vendredi',
            weekend: 'Samedi - Dimanche',
            closed: 'Fermé',
            appointmentRequired: 'Rendez-vous requis pour les visites en personne.',
            locationTitle: 'Emplacement',
            location: 'Barcelone, Espagne',
            consultationType: 'Consultations en personne et en ligne disponibles',
            viewOnMap: 'Voir sur la carte',
            quickQuestion: 'Avez-vous une question rapide?',
            contactForConsultation: 'Contactez-nous pour une consultation personnalisée.',
            notFound: 'Service non trouvé'
        },
        common: {
            whatsapp: 'WhatsApp'
        },
        newsPage: {
            title: 'Actualités et Mises à jour',
            subtitle: 'Restez informé des dernières nouvelles, des changements législatifs et des ressources importantes en matière d\'immigration et de nationalité.',
            readMore: 'Lire la suite',
            backToNews: 'Retour aux actualités',
            notFound: 'Article non trouvé',
            pdfDocument: 'Document PDF',
            article: 'Article',
            viewerTitle: 'Visualiseur de document',
            viewerSubtitle: 'Si vous ne pouvez pas voir le document, téléchargez-le directement.',
            downloadPdf: 'Télécharger le PDF',
            searchPlaceholder: 'Rechercher des actualités...',
            filterAll: 'Toutes',
            filterPdf: 'PDFs',
            filterArticle: 'Articles',
            noResults: 'Aucun résultat trouvé',
            latestNews: 'Dernière actualité'
        },
        locationsSection: {
            title: 'Nos',
            subtitle: 'Bureaux',
            reus: 'Reus',
            barcelona: 'Barcelone',
            addressReus: "Carrer d'Antoni Gaudí, 74, 2-2a, 43203 Reus, Tarragone",
            addressBarcelona: 'Pg. de la Bonanova, 10, Bj 2ª, District de Sarrià-Sant Gervasi, 08022 Barcelone'
        },
        contactSection: {
            title: 'Contact',
            phone: 'Téléphone',
            email: 'Email',
            location: 'Emplacement',
            whatsappButton: 'Contacter par WhatsApp'
        },
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            services: 'الخدمات',
            reviews: 'التقييمات',
            locations: 'المواقع',
            contact: 'اتصل بنا',
            bookAppointment: 'حجز موعد',
            news: 'أخبار'
        },
        hero: {
            nationality: 'الجنسية',
            arraigo: 'تصاريح الإقامة (Arraigos)',
            familyReunification: 'لم شمل الأسرة',
            penal: 'القانون الجنائي',
            civil: 'القانون المدني',
            accidents: 'مطالبات الحوادث'
        },
        about: {
            title: 'حول',
            name: 'كارولينا موراليس',
            birthplace: 'ولدت في مانيزاليس (كولومبيا) عام 1982 وهاجرت إلى إسبانيا عام 2001.',
            education: 'درست القانون في جامعة URV (تاراغونا) بين 2011 و 2016، يليها درجة الماجستير وامتحان المحاماة (2017-2018).',
            courses: '',
            mediation: 'دورة متقدمة في الوساطة (2018)',
            immigration: 'دورة تخصص في قانون الهجرة (2020، ICAB)',
            canonicalLaw: 'ماجستير في القانون الكنسي الزوجي (2022)',
            quote: 'بعد أن مررت بعملية هجرة مع عائلتي بأكملها، أستطيع أن أفهم وأتعاطف مع الأجانب الذين يأتون بحثًا عن مستقبل أفضل.',
            signature: 'كارولينا موراليس'
        },
        services: {
            title: 'مجالات',
            specialization: 'التخصص',
            subtitle: 'خدمات قانونية شاملة مصممة خصيصًا لاحتياجاتك مع اهتمام شخصي',
            learnMore: 'اعرف المزيد',
            otherServices: 'خدمات أخرى',
            nacionalidad: {
                title: 'الجنسية الإسبانية',
                description: 'يمثل الحصول على الجنسية الإسبانية أعلى مستوى من التكامل القانوني في الدولة.'
            },
            arraigo: {
                title: 'تصاريح الإقامة (Arraigos)',
                description: 'معالجة تصاريح الإقامة الاجتماعية والعمالية والعائلية وللتدريب.'
            },
            reagrupacion: {
                title: 'لم شمل الأسرة',
                description: 'مساعدة قانونية لجمع شمل عائلتك في إسبانيا وفقًا لجميع المتطلبات القانونية.'
            },
            penal: {
                title: 'القانون الجنائي',
                description: 'الدفاع في جميع أنواع الإجراءات الجنائية (البسيطة، السريعة، المختصرة، الموجزة، والمحاكمة أمام هيئة المحلفين) بالإضافة إلى المشورة المحددة التي تركز على أفضل دفاع.'
            },
            civil: {
                title: 'قانون الأسرة',
                description: 'إدارة حالات الطلاق والانفصال والاتفاقيات التنظيمية وقانون الأسرة.'
            },
            accidentes: {
                title: 'مطالبات الحوادث',
                description: 'إدارة التعويضات والمطالبات ضد شركات التأمين عن حوادث المرور.'
            }
        },
        reviews: {
            title: 'ماذا يقول',
            clients: 'عملائي',
            subtitle: 'رضا عملائي هو أفضل مرجع لي'
        },
        footer: {
            rights: 'جميع الحقوق محفوظة',
            privacy: 'الخصوصية',
            legal: 'إشعار قانوني',
            cookies: 'ملفات تعريف الارتباط',
            schedule: 'ساعات العمل',
            contact: 'اتصل بنا',
            barAssociation: 'محامية مسجلة رقم 44240 نقابة المحامين في برشلونة',
            logoSubtitle: 'خدمات قانونية مهنية بخبرة تزيد عن 15 عاماً'
        },
        servicePage: {
            backToServices: 'العودة إلى الخدمات',
            needHelp: 'هل تحتاج مساعدة في هذه العملية؟',
            personalConsultation: 'استشارة شخصية',
            resolveDoubts: 'حل جميع أسئلتك اليوم. الاستشارة الأولى بدون التزام.',
            contactWhatsApp: 'تواصل عبر واتساب',
            responseTime: 'الرد في أقل من 24 ساعة',
            scheduleTitle: 'ساعات العمل',
            mondayThursday: 'الإثنين - الخميس',
            friday: 'الجمعة',
            weekend: 'السبت - الأحد',
            closed: 'مغلق',
            appointmentRequired: 'موعد مطلوب للزيارات الشخصية.',
            locationTitle: 'الموقع',
            location: 'برشلونة، إسبانيا',
            consultationType: 'استشارات شخصية وعبر الإنترنت متاحة',
            viewOnMap: 'عرض على الخريطة',
            quickQuestion: 'هل لديك سؤال سريع؟',
            contactForConsultation: 'تواصل معنا للحصول على استشارة مخصصة.',
            notFound: 'الخدمة غير موجودة'
        },
        common: {
            whatsapp: 'واتساب'
        },
        newsPage: {
            title: 'أخبار وتحديثات',
            subtitle: 'كن على اطلاع بآخر الأخبار والتغييرات التشريعية والموارد الهامة المتعلقة بالهجرة والجنسية.',
            readMore: 'اقرأ المزيد',
            backToNews: 'العودة إلى الأخبار',
            notFound: 'المنشور غير موجود',
            pdfDocument: 'وثيقة PDF',
            article: 'مقالة',
            viewerTitle: 'عارض المستندات',
            viewerSubtitle: 'إذا لم تتمكن من عرض المستند، قم بتنزيله مباشرة.',
            downloadPdf: 'تحميل PDF',
            searchPlaceholder: 'البحث في الأخبار...',
            filterAll: 'الكل',
            filterPdf: 'ملفات PDF',
            filterArticle: 'مقالات',
            noResults: 'لم يتم العثور على نتائج',
            latestNews: 'آخر الأخبار'
        },
        locationsSection: {
            title: 'مكاتبنا',
            subtitle: 'المواقع',
            reus: 'ريوس',
            barcelona: 'برشلونة',
            addressReus: "Carrer d'Antoni Gaudí, 74, 2-2a, 43203 Reus, Tarragona",
            addressBarcelona: 'Pg. de la Bonanova, 10, Bj 2ª, Distrito de Sarrià-Sant Gervasi, 08022 Barcelona'
        },
        contactSection: {
            title: 'اتصل بنا',
            phone: 'هاتف',
            email: 'بريد إلكتروني',
            location: 'موقع',
            whatsappButton: 'تواصل عبر واتساب'
        }
    },
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            services: 'Serviços',
            reviews: 'Avaliações',
            locations: 'Localizações',
            contact: 'Contato',
            bookAppointment: 'Agendar consulta',
            news: 'Novidades'
        },
        hero: {
            nationality: 'Nacionalidade',
            arraigo: 'Arraigos',
            familyReunification: 'Reagrupamento Familiar',
            penal: 'Direito Penal',
            civil: 'Direito Civil',
            accidents: 'Acidentes'
        },
        about: {
            title: 'Sobre',
            name: 'Carolina Morales',
            birthplace: 'Nasci em Manizales (Colômbia) em 1982 e emigrei para a Espanha em 2001.',
            education: 'Estudei Direito na URV (Tarragona) entre 2011 e 2016, seguido de Mestrado e exame da Ordem (2017-2018).',
            courses: '',
            mediation: 'Curso Superior em Mediação (2018)',
            immigration: 'Curso de especialização em Direito de Imigração (2020, ICAB)',
            canonicalLaw: 'Mestrado em Direito Canônico Matrimonial (2022)',
            quote: 'Tendo passado por um processo migratório com toda a minha família, posso compreender e me colocar no lugar dos estrangeiros que vêm em busca de um futuro melhor.',
            signature: 'Carolina Morales'
        },
        services: {
            title: 'Áreas de',
            specialization: 'Especialização',
            subtitle: 'Serviços jurídicos completos adaptados às suas necessidades específicas com atenção personalizada',
            learnMore: 'Saiba mais',
            otherServices: 'Outros Serviços',
            nacionalidad: {
                title: 'Nacionalidade Espanhola',
                description: 'A obtenção da nacionalidade espanhola representa o nível mais elevado de integração jurídica no Estado.'
            },
            arraigo: {
                title: 'Arraigos',
                description: 'Tramitação de permissões de residência social, laboral, familiar e para formação.'
            },
            reagrupacion: {
                title: 'Reagrupamento Familiar',
                description: 'Assistência jurídica para reunir sua família na Espanha cumprindo todos os requisitos legais.'
            },
            penal: {
                title: 'Direito Penal',
                description: 'Defesa em todos os tipos de processos penais (leves, rápidos, abreviados, sumários e júri popular), bem como assessoria específica focada na melhor defesa.'
            },
            civil: {
                title: 'Direito de Família',
                description: 'Gestão de divórcios, separações, acordos reguladores e direito de família.'
            },
            accidentes: {
                title: 'Reclamações de Acidentes',
                description: 'Gestão de indenizações e reclamações contra seguradoras por acidentes de trânsito.'
            }
        },
        reviews: {
            title: 'O que dizem meus',
            clients: 'clientes',
            subtitle: 'A satisfação dos meus clientes é minha melhor referência'
        },
        footer: {
            rights: 'Todos os direitos reservados',
            privacy: 'Privacidade',
            legal: 'Aviso Legal',
            cookies: 'Cookies',
            schedule: 'Horário',
            contact: 'Contato',
            barAssociation: 'Advogada Inscrita 44240 Ordem dos Advogados de Barcelona',
            logoSubtitle: 'Serviços jurídicos profissionais com mais de 15 anos de experiência'
        },
        servicePage: {
            backToServices: 'Voltar aos serviços',
            needHelp: 'Precisa de ajuda com este processo?',
            personalConsultation: 'Consulta personalizada',
            resolveDoubts: 'Resolva todas as suas dúvidas hoje. Primeira consulta sem compromisso.',
            contactWhatsApp: 'Contatar por WhatsApp',
            responseTime: 'Resposta em menos de 24 horas',
            scheduleTitle: 'Horário de Atendimento',
            mondayThursday: 'Segunda - Quinta',
            friday: 'Sexta',
            weekend: 'Sábado - Domingo',
            closed: 'Fechado',
            appointmentRequired: 'Agendamento necessário para visitas presenciais.',
            locationTitle: 'Localização',
            location: 'Barcelona, Espanha',
            consultationType: 'Consultas presenciais e online disponíveis',
            viewOnMap: 'Ver no mapa',
            quickQuestion: 'Tem uma pergunta rápida?',
            contactForConsultation: 'Contacte-nos para uma consulta personalizada.',
            notFound: 'Serviço não encontrado'
        },
        common: {
            whatsapp: 'WhatsApp'
        },
        newsPage: {
            title: 'Novidades e Atualizações',
            subtitle: 'Mantenha-se informado sobre as últimas notícias, alterações legislativas e recursos importantes sobre imigração e nacionalidade.',
            readMore: 'Ler mais',
            backToNews: 'Voltar para novidades',
            notFound: 'Publicação não encontrada',
            pdfDocument: 'Documento PDF',
            article: 'Artigo',
            viewerTitle: 'Visualizador de Documentos',
            viewerSubtitle: 'Se não conseguir visualizar o documento, baixe-o diretamente.',
            downloadPdf: 'Baixar PDF',
            searchPlaceholder: 'Pesquisar novidades...',
            filterAll: 'Todas',
            filterPdf: 'PDFs',
            filterArticle: 'Artigos',
            noResults: 'Nenhum resultado encontrado',
            latestNews: 'Última novidade'
        },
        locationsSection: {
            title: 'Nossos',
            subtitle: 'Escritórios',
            reus: 'Reus',
            barcelona: 'Barcelona',
            addressReus: "Carrer d'Antoni Gaudí, 74, 2-2a, 43203 Reus, Tarragona",
            addressBarcelona: 'Pg. de la Bonanova, 10, Bj 2ª, Distrito de Sarrià-Sant Gervasi, 08022 Barcelona'
        },
        contactSection: {
            title: 'Contato',
            phone: 'Telefone',
            email: 'E-mail',
            location: 'Localização',
            whatsappButton: 'Contatar por WhatsApp'
        }
    },
    zh: {
        nav: {
            home: '首页',
            about: '关于',
            services: '服务',
            reviews: '评价',
            locations: '位置',
            contact: '联系',
            bookAppointment: '预约咨询',
            news: '新闻'
        },
        hero: {
            nationality: '国籍',
            arraigo: '扎根居留 (Arraigos)',
            familyReunification: '家庭团聚',
            penal: '刑法',
            civil: '民法',
            accidents: '事故理赔'
        },
        about: {
            title: '关于',
            name: '卡罗琳娜·莫拉莱斯',
            birthplace: '我于1982年出生在哥伦比亚马尼萨莱斯，2001年移民到西班牙。',
            education: '2011年至2016年在URV（塔拉戈纳）学习法律，随后获得硕士学位并通过律师资格考试（2017-2018）。',
            courses: '',
            mediation: '高级调解课程（2018）',
            immigration: '移民法专业课程（2020，ICAB）',
            canonicalLaw: '教会婚姻法硕士（2022）',
            quote: '因为我和全家一起经历了移民过程，我能够理解并站在那些来寻求更好未来的外国人的立场上思考。',
            signature: '卡罗琳娜·莫拉莱斯'
        },
        services: {
            title: '专业',
            specialization: '领域',
            subtitle: '根据您的具体需求提供全面的法律服务，提供个性化关注',
            learnMore: '了解更多',
            otherServices: '其他服务',
            nacionalidad: {
                title: '西班牙国籍',
                description: '获得西班牙国籍代表了在该国法律层面的最高程度融合。'
            },
            arraigo: {
                title: 'Arraigos',
                description: '处理社会、劳工、家庭及培训扎根居留。'
            },
            reagrupacion: {
                title: '家庭团聚',
                description: '法律协助，帮助您的家人在西班牙团聚，符合所有法律要求。'
            },
            penal: {
                title: '刑法',
                description: '在各种类型的刑事诉讼（轻微、快速、简略、简易程序和陪审团审判）中提供辩护，以及专注于最佳辩护的具体建议。'
            },
            civil: {
                title: '家庭法',
                description: '处理离婚、分居、监管协议和家庭法事务。'
            },
            accidentes: {
                title: '事故索赔',
                description: '处理交通事故的赔偿和保险公司索赔。'
            }
        },
        reviews: {
            title: '客户',
            clients: '评价',
            subtitle: '客户的满意是我最好的名片'
        },
        footer: {
            rights: '版权所有',
            privacy: '隐私',
            legal: '法律声明',
            cookies: 'Cookie 政策',
            schedule: '营业时间',
            contact: '联系我们',
            barAssociation: '巴塞罗那律师协会注册律师 44240',
            logoSubtitle: '拥有超过15年经验的专业法律服务'
        },
        servicePage: {
            backToServices: '返回服务',
            needHelp: '需要帮助处理这个手续吗？',
            personalConsultation: '个人咨询',
            resolveDoubts: '今天解决您的所有问题。首次咨询无需承诺。',
            contactWhatsApp: '通过WhatsApp联系',
            responseTime: '24小时内回复',
            scheduleTitle: '营业时间',
            mondayThursday: '周一至周四',
            friday: '周五',
            weekend: '周六至周日',
            closed: '休息',
            appointmentRequired: '面谈需预约。',
            locationTitle: '位置',
            location: '西班牙巴塞罗那',
            consultationType: '提供面谈和在线咨询',
            viewOnMap: '在地图上查看',
            quickQuestion: '有快速问题吗？',
            contactForConsultation: '联系我们进行个性化咨询。',
            notFound: '服务未找到'
        },
        common: {
            whatsapp: 'WhatsApp'
        },
        newsPage: {
            title: '新闻与动态',
            subtitle: '了解有关移民和国籍的最新新闻、立法变更和重要资源。',
            readMore: '阅读更多',
            backToNews: '返回新闻',
            notFound: '未找到文章',
            pdfDocument: 'PDF文档',
            article: '文章',
            viewerTitle: '文档查看器',
            viewerSubtitle: '如果您无法查看文档，请直接下载。',
            downloadPdf: '下载PDF',
            searchPlaceholder: '搜索新闻...',
            filterAll: '全部',
            filterPdf: 'PDF文件',
            filterArticle: '文章',
            noResults: '未找到结果',
            latestNews: '最新消息'
        },
        locationsSection: {
            title: '我们的',
            subtitle: '办公室',
            reus: '雷乌斯',
            barcelona: '巴塞罗那',
            addressReus: "Carrer d'Antoni Gaudí, 74, 2-2a, 43203 Reus, Tarragona",
            addressBarcelona: 'Pg. de la Bonanova, 10, Bj 2ª, Distrito de Sarrià-Sant Gervasi, 08022 Barcelona'
        },
        contactSection: {
            title: '联系',
            phone: '电话',
            email: '电子邮件',
            location: '位置',
            whatsappButton: '通过WhatsApp联系'
        }
    },
    ro: {
        nav: {
            home: 'Acasă',
            about: 'Despre',
            services: 'Servicii',
            reviews: 'Recenzii',
            locations: 'Locații',
            contact: 'Contact',
            bookAppointment: 'Programează',
            news: 'Noutăți'
        },
        hero: {
            nationality: 'Cetățenie',
            arraigo: 'Arraigos',
            familyReunification: 'Reîntregirea Familiei',
            penal: 'Drept Penal',
            civil: 'Drept Civil',
            accidents: 'Accidente de Trafic'
        },
        about: {
            title: 'Despre',
            name: 'Carolina Morales',
            birthplace: 'M-am născut în Manizales (Columbia) în 1982 și am emigrat în Spania în 2001.',
            education: 'Am studiat Dreptul la URV (Tarragona) între 2011 și 2016, urmat de Masterat și examenul de Barou (2017-2018).',
            courses: '',
            mediation: 'Curs Superior în Mediere (2018)',
            immigration: 'Curs de specializare în Dreptul Imigrației (2020, ICAB)',
            canonicalLaw: 'Masterat în Drept Canonic Matrimonial (2022)',
            quote: 'Trecând printr-un proces de imigrare cu întreaga mea familie, pot înțelege și să mă pun în locul străinilor care vin în căutarea unui viitor mai bun.',
            signature: 'Carolina Morales'
        },
        services: {
            title: 'Domenii de',
            specialization: 'Specializare',
            subtitle: 'Servicii juridice complete adaptate nevoilor dvs. specifice cu atenție personalizată',
            learnMore: 'Află mai multe',
            otherServices: 'Alte Servicii',
            nacionalidad: {
                title: 'Cetățenie spaniolă',
                description: 'Obținerea cetățeniei spaniole reprezintă cel mai înalt nivel de integrare legală în stat.'
            },
            arraigo: {
                title: 'Arraigos',
                description: 'Procesarea permiselor de ședere Arraigos (social, de muncă, familial și pentru formare) pentru a vă regulariza situația în Spania.'
            },
            reagrupacion: {
                title: 'Reîntregirea Familiei',
                description: 'Asistență juridică pentru a vă reuni familia în Spania, respectând toate cerințele legale.'
            },
            penal: {
                title: 'Drept Penal',
                description: 'Apărarea în toate tipurile de proceduri penale (minore, rapide, prescurtate, sumare și proces cu juriu), precum și consiliere specifică axată pe cea mai bună apărare.'
            },
            civil: {
                title: 'Dreptul Familiei',
                description: 'Gestionarea divorțurilor, separărilor, acordurilor de reglementare și dreptului familiei.'
            },
            accidentes: {
                title: 'Reclamații Accidente',
                description: 'Gestionarea despăgubirilor și reclamațiilor împotriva asigurătorilor pentru accidente rutiere.'
            }
        },
        reviews: {
            title: 'Ce spun',
            clients: 'clienții mei',
            subtitle: 'Satisfacția clienților mei este cea mai bună referință'
        },
        footer: {
            rights: 'Toate drepturile rezervate',
            privacy: 'Confidențialitate',
            legal: 'Aviz Legal',
            cookies: 'Cookies',
            schedule: 'Program',
            contact: 'Contact',
            barAssociation: 'Avocat înscris 44240 Baroul din Barcelona',
            logoSubtitle: 'Servicii juridice profesionale cu peste 15 ani de experiență'
        },
        servicePage: {
            backToServices: 'Înapoi la servicii',
            needHelp: 'Aveți nevoie de ajutor cu acest proces?',
            personalConsultation: 'Consultație personalizată',
            resolveDoubts: 'Rezolvați toate întrebările dvs. astăzi. Prima consultație fără angajament.',
            contactWhatsApp: 'Contactați prin WhatsApp',
            responseTime: 'Răspuns în mai puțin de 24 de ore',
            scheduleTitle: 'Program de lucru',
            mondayThursday: 'Luni - Joi',
            friday: 'Vineri',
            weekend: 'Sâmbătă - Duminică',
            closed: 'Închis',
            appointmentRequired: 'Programare necesară pentru vizite în persoană.',
            locationTitle: 'Locație',
            location: 'Barcelona, Spania',
            consultationType: 'Consultații în persoană și online disponibile',
            viewOnMap: 'Vezi pe hartă',
            quickQuestion: 'Aveți o întrebare rapidă?',
            contactForConsultation: 'Contactați-ne pentru o consultație personalizată.',
            notFound: 'Serviciu negăsit'
        },
        common: {
            whatsapp: 'WhatsApp'
        },
        newsPage: {
            title: 'Noutăți și Actualizări',
            subtitle: 'Rămâneți informat cu privire la cele mai recente știri, modificări legislative și resurse importante privind imigrația și naționalitatea.',
            readMore: 'Citește mai mult',
            backToNews: 'Înapoi la noutăți',
            notFound: 'Postarea nu a fost găsită',
            pdfDocument: 'Document PDF',
            article: 'Articol',
            viewerTitle: 'Vizualizator documente',
            viewerSubtitle: 'Dacă nu puteți vizualiza documentul, descărcați-l direct.',
            downloadPdf: 'Descarcă PDF',
            searchPlaceholder: 'Căutare noutăți...',
            filterAll: 'Toate',
            filterPdf: 'PDF-uri',
            filterArticle: 'Articole',
            noResults: 'Nu s-au găsit rezultate',
            latestNews: 'Ultima noutate'
        },
        locationsSection: {
            title: 'Ale Noastre',
            subtitle: 'Birouri',
            reus: 'Reus',
            barcelona: 'Barcelona',
            addressReus: "Carrer d'Antoni Gaudí, 74, 2-2a, 43203 Reus, Tarragona",
            addressBarcelona: 'Pg. de la Bonanova, 10, Bj 2ª, Distrito de Sarrià-Sant Gervasi, 08022 Barcelona'
        },
        contactSection: {
            title: 'Contact',
            phone: 'Telefon',
            email: 'Email',
            location: 'Locație',
            whatsappButton: 'Contactați prin WhatsApp'
        }
    }
}

export function getTranslation(locale: Locale) {
    return translations[locale] || translations[defaultLocale]
}
