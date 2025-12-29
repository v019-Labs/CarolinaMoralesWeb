import { Locale } from './translations'

export type LegalSection = {
    title: string
    subtitle: string
    sections: {
        title: string
        content?: string
        list?: string[]
    }[]
}

export type LegalTranslations = {
    backToHome: string
    lastUpdated: string
    lastUpdatedDate: string
    avisoLegal: LegalSection
    privacidad: LegalSection
    cookies: LegalSection
}

export const legalTranslations: Record<Locale, LegalTranslations> = {
    es: {
        backToHome: "Volver al inicio",
        lastUpdated: "Última actualización",
        lastUpdatedDate: "28 de Diciembre de 2025",
        avisoLegal: {
            title: "Aviso Legal",
            subtitle: "Aviso Legal y Condiciones Generales de Uso",
            sections: [
                {
                    title: "I. INFORMACIÓN GENERAL",
                    content: "En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:",
                    list: [
                        "Titular: Carolina Morales López",
                        "NIF: 49651821L",
                        "Dirección: Antonio Gaudí # 74 2-2a Reus 43203",
                        "Teléfono de contacto: +34 651 46 50 05",
                        "Email de contacto: carolinamoraleslopez@icab.cat"
                    ]
                },
                {
                    title: "II. TÉRMINOS Y CONDICIONES GENERALES DE USO",
                    content: "El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios)."
                },
                {
                    title: "Modificaciones",
                    content: "Carolina Morales Abogada se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento Carolina Morales Abogada pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos."
                },
                {
                    title: "Acceso al Sitio Web",
                    content: "El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario. La utilización de los Contenidos no requiere previa suscripción o registro alguno."
                },
                {
                    title: "El Usuario",
                    content: "El acceso, la navegación y uso del Sitio Web, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web."
                },
                {
                    title: "Responsabilidad del Usuario",
                    content: "El Sitio Web de Carolina Morales Abogada proporciona gran diversidad de información, servicios y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:",
                    list: [
                        "Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Carolina Morales Abogada sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.",
                        "La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por Carolina Morales Abogada para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a Carolina Morales Abogada acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no solo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación."
                    ]
                },
                {
                    title: "Mayoría de Edad y Legislación",
                    content: "El Usuario declara ser mayor de edad y disponer de la capacidad jurídica suficiente para vincularse por las presentes Condiciones. Por lo tanto, este Sitio Web de Carolina Morales Abogada no se dirige a menores de edad. Carolina Morales Abogada declina cualquier responsabilidad por el incumplimiento de este requisito."
                },
                {
                    title: "III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD",
                    content: "Carolina Morales Abogada no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. Carolina Morales Abogada hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error. Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario. En ningún caso Carolina Morales Abogada será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus."
                },
                {
                    title: "IV. POLÍTICA DE ENLACES",
                    content: "Se informa que el Sitio Web de Carolina Morales Abogada pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros. La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la visita de los mismos. Carolina Morales Abogada no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados."
                },
                {
                    title: "V. PROPIEDAD INTELECTUAL E INDUSTRIAL",
                    content: "Carolina Morales Abogada por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo. Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y comunitaria en este campo, como los tratados internacionales relativos a la materia y suscritos por España. Todos los derechos reservados."
                },
                {
                    title: "Protección de Derechos",
                    content: "El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de Carolina Morales Abogada. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, exclusivamente, para su uso personal. El Usuario, sin embargo, no podrá suprimir, alterar, o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en el Sitio Web."
                },
                {
                    title: "VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN",
                    content: "Carolina Morales Abogada se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones. La relación entre el Usuario y Carolina Morales Abogada se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho."
                }
            ]
        },
        privacidad: {
            title: "Política de Privacidad",
            subtitle: "Protección de datos personales según RGPD",
            sections: [
                {
                    title: "1. Responsable del Tratamiento",
                    list: [
                        "Identidad: Carolina Morales",
                        "Email: Contacto a través de WhatsApp",
                        "Teléfono: +34 651 465 005"
                    ]
                },
                {
                    title: "2. Finalidad del Tratamiento",
                    content: "Los datos personales que nos facilite serán tratados para:",
                    list: [
                        "Gestionar consultas y solicitudes de información",
                        "Prestar servicios profesionales de abogacía",
                        "Mantener la relación profesional establecida"
                    ]
                },
                {
                    title: "3. Legitimación",
                    content: "La base legal para el tratamiento de sus datos es el consentimiento del interesado, la ejecución de un contrato de servicios profesionales, y el cumplimiento de obligaciones legales aplicables."
                },
                {
                    title: "4. Derechos del Interesado",
                    content: "Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad contactando con nosotros. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)."
                },
                {
                    title: "5. Conservación de Datos",
                    content: "Los datos personales se conservarán mientras se mantenga la relación profesional y, posteriormente, durante los plazos legalmente establecidos."
                }
            ]
        },
        cookies: {
            title: "Política de Cookies",
            subtitle: "Información sobre el uso de cookies",
            sections: [
                {
                    title: "1. ¿Qué son las Cookies?",
                    content: "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Sirven para recordar sus preferencias y mejorar su experiencia de navegación."
                },
                {
                    title: "2. Cookies que Utilizamos",
                    content: "Utilizamos cookies técnicas necesarias para el funcionamiento del sitio:",
                    list: [
                        "locale: Almacena su preferencia de idioma (1 año)",
                        "introSeen: Recuerda si ya vio la animación de introducción (sesión)"
                    ]
                },
                {
                    title: "3. Gestión de Cookies",
                    content: "Puede configurar su navegador para rechazar cookies o para que le avise cuando se envíen. Sin embargo, algunas funciones del sitio pueden no estar disponibles."
                }
            ]
        }
    },
    en: {
        backToHome: "Back to home",
        lastUpdated: "Last updated",
        lastUpdatedDate: "December 28, 2025",
        avisoLegal: {
            title: "Legal Notice",
            subtitle: "Legal Information and General Terms of Use",
            sections: [
                {
                    title: "I. GENERAL INFORMATION",
                    content: "In compliance with the duty of information provided in Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE) of July 11, the following general information data of this website is provided below:",
                    list: [
                        "Owner: Carolina Morales López",
                        "NIF: 49651821L",
                        "Address: Antonio Gaudí # 74 2-2a Reus 43203",
                        "Contact Phone: +34 651 46 50 05",
                        "Contact Email: carolinamoraleslopez@icab.cat"
                    ]
                },
                {
                    title: "II. GENERAL TERMS AND CONDITIONS OF USE",
                    content: "The object of these General Conditions of Use (hereinafter, Conditions) is to regulate the access and use of the Website. For the purposes of these Conditions, the Website will be understood as: the external appearance of the screen interfaces, both statically and dynamically, that is, the navigation tree; and all the elements integrated both in the screen interfaces and in the navigation tree (hereinafter, Contents) and all those online services or resources that may be offered to Users (hereinafter, Services)."
                },
                {
                    title: "Modifications",
                    content: "Carolina Morales Abogada reserves the right to modify, at any time, and without prior notice, the presentation and configuration of the Website and of the Contents and Services that may be incorporated therein. The User acknowledges and accepts that at any time Carolina Morales Abogada may interrupt, deactivate and/or cancel any of these elements that are integrated into the Website or access to them."
                },
                {
                    title: "Access to the Website",
                    content: "Access to the Website by the User is free and, generally, is free of charge without the User having to provide a consideration to be able to enjoy it, except for the cost of connection through the telecommunications network supplied by the access provider that the User has contracted. The use of the Contents does not require any prior subscription or registration."
                },
                {
                    title: "The User",
                    content: "Access, navigation and use of the Website confers the condition of User, for which reason all the Conditions established herein, as well as their subsequent modifications, are accepted from the moment navigation begins on the Website, without prejudice to the application of the corresponding mandatory legal regulations according to the case. Given the relevance of the foregoing, the User is recommended to read them every time they visit the Website."
                },
                {
                    title: "User Responsibility",
                    content: "The Carolina Morales Abogada Website provides a great diversity of information, services and data. The User assumes responsibility for correct use of the Website. This responsibility will extend to:",
                    list: [
                        "A use of the information, Contents and/or Services and data offered by Carolina Morales Abogada without being contrary to the provisions of these Conditions, the Law, morality or public order, or that in any other way may involve injury to the rights of third parties or the operation of the Website itself.",
                        "The veracity and lawfulness of the information provided by the User in the forms extended by Carolina Morales Abogada for access to certain Contents or Services offered by the Website. In any case, the User will immediately notify Carolina Morales Abogada about any fact that allows the improper use of the information registered in said forms, such as, but not only, theft, loss, or unauthorized access to identifiers and/or passwords, in order to proceed to their immediate cancellation."
                    ]
                },
                {
                    title: "Majority Age and Legislation",
                    content: "The User declares to be of legal age and to have sufficient legal capacity to be bound by these Conditions. Therefore, this Carolina Morales Abogada Website is not directed at minors. Carolina Morales Abogada declines any responsibility for failure to comply with this requirement."
                },
                {
                    title: "III. ACCESS AND NAVIGATION ON THE WEBSITE: EXCLUSION OF WARRANTIES AND LIABILITY",
                    content: "Carolina Morales Abogada does not guarantee the continuity, availability and utility of the Website, nor of the Contents or Services. Carolina Morales Abogada will do everything possible for the proper functioning of the Website, however, it is not responsible nor guarantees that access to this Website will not be uninterrupted or that it is error-free. Nor is it responsible or guarantees that the content or software that can be accessed through this Website is free from error or causes damage to the User's computer system (software and hardware). In no case will Carolina Morales Abogada be responsible for losses, damages or prejudices of any kind arising from access, navigation and use of the Website, including, but not limited to, those caused to computer systems or those caused by the introduction of viruses."
                },
                {
                    title: "IV. LINK POLICY",
                    content: "It is reported that the Carolina Morales Abogada Website puts or may put at the disposal of Users link means (such as, among others, links, banners, buttons), directories and search engines that allow Users to access websites belonging to and/or managed by third parties. The installation of these links, directories and search engines on the Website is intended to facilitate Users' search for and access to information available on the Internet, without it being considered a suggestion, recommendation or invitation for the visit of the same. Carolina Morales Abogada does not offer or market by itself or through third parties the products and/or services available on said linked sites."
                },
                {
                    title: "V. INTELLECTUAL AND INDUSTRIAL PROPERTY",
                    content: "Carolina Morales Abogada by itself or as an assignee, is the owner of all intellectual and industrial property rights of the Website, as well as of the elements contained therein. They will be, therefore, works protected as intellectual property by the Spanish legal system, being applicable to them both Spanish and Community regulations in this field, as well as international treaties relating to the matter and subscribed by Spain. All rights reserved."
                },
                {
                    title: "Rights Protection",
                    content: "The User undertakes to respect the intellectual and industrial property rights of Carolina Morales Abogada. You may view the elements of the Website or even print them, copy them and store them on your computer's hard drive or on any other physical medium provided it is exclusively for your personal use. The User, however, may not suppress, alter, or manipulate any protection device or security system that was installed on the Website."
                },
                {
                    title: "VI. LEGAL ACTIONS, APPLICABLE LAW AND JURISDICTION",
                    content: "Carolina Morales Abogada reserves the right to file civil or criminal actions it deems necessary for the improper use of the Website and Contents, or for the breach of these Conditions. The relationship between the User and Carolina Morales Abogada will be governed by current regulations and applicable in Spanish territory. Should any controversy arise in relation to the interpretation and/or application of these Conditions, the parties will submit their conflicts to ordinary jurisdiction submitting themselves to the corresponding judges and courts according to law."
                }
            ]
        },
        privacidad: {
            title: "Privacy Policy",
            subtitle: "Personal data protection according to GDPR",
            sections: [
                {
                    title: "1. Data Controller",
                    list: [
                        "Identity: Carolina Morales",
                        "Email: Contact via WhatsApp",
                        "Phone: +34 651 465 005"
                    ]
                },
                {
                    title: "2. Purpose of Processing",
                    content: "The personal data you provide will be processed to:",
                    list: [
                        "Manage inquiries and information requests",
                        "Provide professional legal services",
                        "Maintain the established professional relationship"
                    ]
                },
                {
                    title: "3. Legal Basis",
                    content: "The legal basis for processing your data is the consent of the data subject, the execution of a professional services contract, and compliance with applicable legal obligations."
                },
                {
                    title: "4. Data Subject Rights",
                    content: "You may exercise the rights of access, rectification, erasure, objection, limitation and portability by contacting us. You also have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es)."
                },
                {
                    title: "5. Data Retention",
                    content: "Personal data will be kept as long as the professional relationship is maintained and, subsequently, during legally established periods."
                }
            ]
        },
        cookies: {
            title: "Cookie Policy",
            subtitle: "Information about the use of cookies",
            sections: [
                {
                    title: "1. What are Cookies?",
                    content: "Cookies are small text files that are stored on your device when you visit a website. They are used to remember your preferences and improve your browsing experience."
                },
                {
                    title: "2. Cookies We Use",
                    content: "We use technical cookies necessary for the operation of the site:",
                    list: [
                        "locale: Stores your language preference (1 year)",
                        "introSeen: Remembers if you've seen the intro animation (session)"
                    ]
                },
                {
                    title: "3. Cookie Management",
                    content: "You can configure your browser to reject cookies or to notify you when they are sent. However, some site functions may not be available."
                }
            ]
        }
    },
    fr: {
        backToHome: "Retour à l'accueil",
        lastUpdated: "Dernière mise à jour",
        lastUpdatedDate: "28 Décembre 2025",
        avisoLegal: {
            title: "Mentions Légales",
            subtitle: "Informations légales et conditions générales d'utilisation",
            sections: [
                {
                    title: "I. INFORMATIONS GÉNÉRALES",
                    content: "Conformément au devoir d'information prévu par la loi 34/2002 du 11 juillet sur les services de la société de l'information et du commerce électronique (LSSI-CE), les données d'information générale suivantes de ce site web sont fournies ci-dessous :",
                    list: [
                        "Propriétaire : Carolina Morales López",
                        "NIF : 49651821L",
                        "Adresse : Antonio Gaudí # 74 2-2a Reus 43203",
                        "Téléphone de contact : +34 651 46 50 05",
                        "Email de contact : carolinamoraleslopez@icab.cat"
                    ]
                },
                {
                    title: "II. CONDITIONS GÉNÉRALES D'UTILISATION",
                    content: "L'objet des présentes Conditions Générales d'Utilisation (ci-après, Conditions) est de régir l'accès et l'utilisation du Site Web. Aux fins des présentes Conditions, le Site Web sera entendu comme : l'apparence externe des interfaces d'écran, tant de manière statique que dynamique, c'est-à-dire l'arborescence de navigation ; et tous les éléments intégrés tant dans les interfaces d'écran que dans l'arborescence de navigation (ci-après, Contenus) et tous les services ou ressources en ligne pouvant être proposés aux Utilisateurs (ci-après, Services)."
                },
                {
                    title: "Modifications",
                    content: "Carolina Morales Abogada se réserve le droit de modifier, à tout moment et sans préavis, la présentation et la configuration du Site Web ainsi que des Contenus et Services qui pourraient y être incorporés. L'Utilisateur reconnaît et accepte qu'à tout moment Carolina Morales Abogada puisse interrompre, désactiver et/ou annuler l'un quelconque de ces éléments intégrés au Site Web ou l'accès à ceux-ci."
                },
                {
                    title: "Accès au Site Web",
                    content: "L'accès au Site Web par l'Utilisateur est libre et, en général, gratuit sans que l'Utilisateur ait à fournir une contrepartie pour pouvoir en profiter, sauf en ce qui concerne le coût de connexion via le réseau de télécommunications fourni par le fournisseur d'accès contracté par l'Utilisateur. L'utilisation des Contenus ne nécessite aucun abonnement ou inscription préalable."
                },
                {
                    title: "L'Utilisateur",
                    content: "L'accès, la navigation et l'utilisation du Site Web confèrent la condition d'Utilisateur, pour laquelle toutes les Conditions établies ici, ainsi que leurs modifications ultérieures, sont acceptées dès le début de la navigation sur le Site Web, sans préjudice de l'application des réglementations légales obligatoires correspondantes selon le cas. Compte tenu de la pertinence de ce qui précède, il est recommandé à l'Utilisateur de les lire à chaque visite du Site Web."
                },
                {
                    title: "Responsabilité de l'Utilisateur",
                    content: "Le Site Web de Carolina Morales Abogada fournit une grande diversité d'informations, de services et de données. L'Utilisateur assume la responsabilité d'une utilisation correcte du Site Web. Cette responsabilité s'étendra à :",
                    list: [
                        "Une utilisation des informations, Contenus et/ou Services et données proposés par Carolina Morales Abogada sans être contraire aux dispositions des présentes Conditions, à la Loi, à la morale ou à l'ordre public, ou qui de toute autre manière pourrait porter atteinte aux droits de tiers ou au fonctionnement du Site Web lui-même.",
                        "La véracité et la licéité des informations fournies par l'Utilisateur dans les formulaires étendus par Carolina Morales Abogada pour l'accès à certains Contenus ou Services proposés par le Site Web. Dans tous les cas, l'Utilisateur informera immédiatement Carolina Morales Abogada de tout fait permettant l'utilisation abusive des informations enregistrées dans lesdits formulaires, tels que, mais sans s'y limiter, le vol, la perte ou l'accès non autorisé aux identifiants et/ou mots de passe, afin de procéder à leur annulation immédiate."
                    ]
                },
                {
                    title: "Majorité et Législation",
                    content: "L'Utilisateur déclare être majeur et avoir la capacité juridique suffisante pour être lié par les présentes Conditions. Par conséquent, ce Site Web de Carolina Morales Abogada ne s'adresse pas aux mineurs. Carolina Morales Abogada décline toute responsabilité en cas de non-respect de cette exigence."
                },
                {
                    title: "III. ACCÈS ET NAVIGATION SUR LE SITE : EXCLUSION DE GARANTIES ET DE RESPONSABILITÉ",
                    content: "Carolina Morales Abogada ne garantit pas la continuité, la disponibilité et l'utilité du Site Web, ni des Contenus ou Services. Carolina Morales Abogada fera tout son possible pour le bon fonctionnement du Site Web, cependant, elle n'est pas responsable ni ne garantit que l'accès à ce Site Web ne sera pas ininterrompu ou qu'il est exempt d'erreurs. Elle n'est pas non plus responsable ni ne garantit que le contenu ou le logiciel accessible via ce Site Web est exempt d'erreurs ou cause des dommages au système informatique (logiciel et matériel) de l'Utilisateur. En aucun cas Carolina Morales Abogada ne sera responsable des pertes, dommages ou préjudices de toute nature découlant de l'accès, de la navigation et de l'utilisation du Site Web, y compris, mais sans s'y limiter, ceux causés aux systèmes informatiques ou ceux provoqués par l'introduction de virus."
                },
                {
                    title: "IV. POLITIQUE DE LIENS",
                    content: "Il est rapporté que le Site Web de Carolina Morales Abogada met ou peut mettre à la disposition des Utilisateurs des moyens de lien (tels que, entre autres, des liens, bannières, boutons), des répertoires et des moteurs de recherche permettant aux Utilisateurs d'accéder à des sites web appartenant et/ou gérés par des tiers. L'installation de ces liens, répertoires et moteurs de recherche sur le Site Web a pour but de faciliter la recherche et l'accès des Utilisateurs aux informations disponibles sur Internet, sans que cela puisse être considéré comme une suggestion, recommandation ou invitation à les visiter. Carolina Morales Abogada n'offre ni ne commercialise par elle-même ou par l'intermédiaire de tiers les produits et/ou services disponibles sur ces sites liés."
                },
                {
                    title: "V. PROPRIÉTÉ INTELLECTUELLE ET INDUSTRIELLE",
                    content: "Carolina Morales Abogada par elle-même ou en tant que cessionnaire, est titulaire de tous les droits de propriété intellectuelle et industrielle du Site Web, ainsi que des éléments qui y sont contenus. Ils seront, par conséquent, des œuvres protégées en tant que propriété intellectuelle par le système juridique espagnol, leur étant applicables tant les réglementations espagnoles et communautaires dans ce domaine, que les traités internationaux relatifs à la matière et souscrits par l'Espagne. Tous droits réservés."
                },
                {
                    title: "Protection des Droits",
                    content: "L'Utilisateur s'engage à respecter les droits de propriété intellectuelle et industrielle de Carolina Morales Abogada. Vous pouvez visualiser les éléments du Site Web ou même les imprimer, les copier et les stocker sur le disque dur de votre ordinateur ou sur tout autre support physique à condition que ce soit exclusivement pour votre usage personnel. L'Utilisateur, cependant, ne pourra supprimer, altérer ou manipuler aucun dispositif de protection ou système de sécurité installé sur le Site Web."
                },
                {
                    title: "VI. ACTIONS LÉGALES, LOI APPLICABLE ET JURIDICTION",
                    content: "Carolina Morales Abogada se réserve le droit d'intenter les actions civiles ou pénales qu'elle juge nécessaires pour l'utilisation abusive du Site Web et des Contenus, ou pour la violation des présentes Conditions. La relation entre l'Utilisateur et Carolina Morales Abogada sera régie par la réglementation en vigueur et applicable sur le territoire espagnol. En cas de controverse relative à l'interprétation et/ou à l'application des présentes Conditions, les parties soumettront leurs conflits à la juridiction ordinaire en se soumettant aux juges et tribunaux correspondants conformément à la loi."
                }
            ]
        },
        privacidad: {
            title: "Politique de Confidentialité",
            subtitle: "Protection des données personnelles selon le RGPD",
            sections: [
                {
                    title: "1. Responsable du Traitement",
                    list: [
                        "Identité : Carolina Morales",
                        "Email : Contact via WhatsApp",
                        "Téléphone : +34 651 465 005"
                    ]
                },
                {
                    title: "2. Finalités du Traitement",
                    content: "Les données personnelles que vous fournissez seront traitées pour :",
                    list: [
                        "Gérer les demandes et requêtes d'information",
                        "Fournir des services juridiques professionnels",
                        "Maintenir la relation professionnelle établie"
                    ]
                },
                {
                    title: "3. Base Juridique",
                    content: "La base juridique du traitement de vos données est le consentement de la personne concernée, l'exécution d'un contrat de services professionnels et le respect des obligations légales applicables."
                },
                {
                    title: "4. Droits des Personnes Concernées",
                    content: "Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité en nous contactant. Vous avez également le droit de déposer une plainte auprès de l'Agence espagnole de protection des données (www.aepd.es)."
                },
                {
                    title: "5. Conservation des Données",
                    content: "Les données personnelles seront conservées tant que la relation professionnelle est maintenue et, par la suite, pendant les périodes légalement établies."
                }
            ]
        },
        cookies: {
            title: "Politique relative aux Cookies",
            subtitle: "Informations sur l'utilisation des cookies",
            sections: [
                {
                    title: "1. Que sont les Cookies ?",
                    content: "Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils sont utilisés pour mémoriser vos préférences et améliorer votre expérience de navigation."
                },
                {
                    title: "2. Cookies Utilisés",
                    content: "Nous utilisons des cookies techniques nécessaires au fonctionnement du site :",
                    list: [
                        "locale : Stocke votre préférence de langue (1 an)",
                        "introSeen : Mémorise si vous avez vu l'animation d'introduction (session)"
                    ]
                },
                {
                    title: "3. Gestion des Cookies",
                    content: "Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous avertir lorsqu'ils sont envoyés. Cependant, certaines fonctions du site peuvent ne pas être disponibles."
                }
            ]
        }
    },
    ar: {
        backToHome: "العودة إلى الرئيسية",
        lastUpdated: "آخر تحديث",
        lastUpdatedDate: "28 ديسمبر 2025",
        avisoLegal: {
            title: "إشعار قانوني",
            subtitle: "معلومات قانونية وشروط عامة للاستخدام",
            sections: [
                {
                    title: "I. معلومات عامة",
                    content: "امتثالاً لواجب المعلومات المنصوص عليه في القانون 34/2002 المؤرخ 11 يوليو بشأن خدمات مجتمع المعلومات والتجارة الإلكترونية (LSSI-CE)، يتم توفير بيانات المعلومات العامة التالية لهذا الموقع أدناه:",
                    list: [
                        "المالك: كارولينا موراليس لوبيز",
                        "رقم التعريف الضريبي (NIF): 49651821L",
                        "العنوان: أنطونيو غاودي # 74 2-2a ريوس 43203",
                        "هاتف الاتصال: +34 651 46 50 05",
                        "بريد الاتصال: carolinamoraleslopez@icab.cat"
                    ]
                },
                {
                    title: "II. الشروط والأحكام العامة للاستخدام",
                    content: "الغرض من شروط الاستخدام العامة هذه (يشار إليها فيما يلي بـ الشروط) هو تنظيم الوصول إلى الموقع الإلكتروني واستخدامه. لأغراض هذه الشروط، سيتم فهم الموقع الإلكتروني على أنه: المظهر الخارجي لواجهات الشاشة، سواء بشكل ثابت أو ديناميكي، أي شجرة التنقل؛ وجميع العناصر المدمجة في واجهات الشاشة وفي شجرة التنقل (يشار إليها فيما يلي بـ المحتويات) وجميع تلك الخدمات أو الموارد عبر الإنترنت التي قد يتم تقديمها للمستخدمين (يشار إليها فيما يلي بـ الخدمات)."
                },
                {
                    title: "التعديلات",
                    content: "تحتفظ كارولينا موراليس (محامية) بالحق في تعديل، في أي وقت وبدون إشعار مسبق، عرض وتكوين الموقع الإلكتروني والمحتويات والخدمات التي قد تكون مدمجة فيه. يقر المستخدم ويقبل أنه في أي وقت قد تقوم كارولينا موراليس (محامية) بمقاطعة أو إلغاء تنشيط و/أو إلغاء أي من هذه العناصر المدمجة في الموقع الإلكتروني أو الوصول إليها."
                },
                {
                    title: "الوصول إلى الموقع الإلكتروني",
                    content: "الوصول إلى الموقع الإلكتروني من قبل المستخدم مجاني، وكقاعدة عامة، هو مجاني دون أن يضطر المستخدم إلى تقديم مقابل مادي للتمتع به، باستثناء تكلفة الاتصال من خلال شبكة الاتصالات المقدمة من قبل مزود الوصول الذي تعاقد معه المستخدم. لا يتطلب استخدام المحتويات أي اشتراك أو تسجيل مسبق."
                },
                {
                    title: "المستخدم",
                    content: "يمنح الوصول والتصفح واستخدام الموقع الإلكتروني صفة المستخدم، ولهذا السبب يتم قبول جميع الشروط المنصوص عليها هنا، وكذلك تعديلاتها اللاحقة، من لحظة بدء التصفح على الموقع الإلكتروني، دون الإخلال بتطبيق اللوائح القانونية الإلزامية المعمول بها حسب الحالة. ونظراً لأهمية ما سبق، يُنصح المستخدم بقراءتها في كل مرة يزور فيها الموقع الإلكتروني."
                },
                {
                    title: "مسؤولية المستخدم",
                    content: "يوفر موقع كارولينا موراليس (محامية) مجموعة كبيرة ومتنوعة من المعلومات والخدمات والبيانات. يتحمل المستخدم مسؤولية الاستخدام الصحيح للموقع الإلكتروني. وتمتد هذه المسؤولية إلى:",
                    list: [
                        "استخدام المعلومات والمحتويات و/أو الخدمات والبيانات المقدمة من قبل كارولينا موراليس (محامية) دون أن يكون ذلك متعارضًا مع أحكام هذه الشروط أو القانون أو الأخلاق أو النظام العام، أو التي قد تنطوي بأي طريقة أخرى على إضرار بحقوق الأطراف الثالثة أو تشغيل الموقع الإلكتروني نفسه.",
                        "صحة وقانونية المعلومات التي يقدمها المستخدم في النماذج التي تقدمها كارولينا موراليس (محامية) للوصول إلى محتويات أو خدمات معينة يقدمها الموقع الإلكتروني. في أي حال، سيقوم المستخدم بإخطار كارولينا موراليس (محامية) فورًا بشأن أي حقيقة تسمح بالاستخدام غير السليم للمعلومات المسجلة في هذه النماذج، مثل، ولكن ليس على سبيل الحصر، السرقة أو الفقدان أو الوصول غير المصرح به إلى المعرفات و/أو كلمات المرور، من أجل المضي قدماً في إلغائها الفوري."
                    ]
                },
                {
                    title: "سن الرشد والتشريعات",
                    content: "يصرح المستخدم بأنه بلغ سن الرشد ويتمتع بالأهلية القانونية الكافية للالتزام بهذه الشروط. لذلك، لا يستهدف موقع كارولينا موراليس (محامية) القصر. تخلي كارولينا موراليس (محامية) مسؤوليتها عن أي عدم امتثال لهذا الشرط."
                },
                {
                    title: "III. الوصول والتصفح على الموقع الإلكتروني: استبعاد الضمانات والمسؤولية",
                    content: "لا تضمن كارولينا موراليس (محامية) استمرارية وتوافر وفائدة الموقع الإلكتروني، ولا المحتويات أو الخدمات. ستبذل كارولينا موراليس (محامية) قصارى جهدها من أجل التشغيل السليم للموقع الإلكتروني، ومع ذلك، فهي ليست مسؤولة ولا تضمن أن الوصول إلى هذا الموقع لن ينقطع أو أنه خالي من الأخطاء. كما أنها لا تتحمل المسؤولية أو تضمن أن المحتوى أو البرنامج الذي يمكن الوصول إليه من خلال هذا الموقع خالي من الأخطاء أو يسبب ضرراً لنظام الكمبيوتر (البرامج والأجهزة) الخاص بالمستخدم. في أي حال من الأحوال، لن تكون كارولينا موراليس (محامية) مسؤولة عن الخسائر أو الأضرار أو التحيزات من أي نوع التي تنشأ عن الوصول والتصفح واستخدام الموقع الإلكتروني، بما في ذلك، ولكن لا تقتصر على، تلك التي تلحق بأنظمة الكمبيوتر أو تلك الناجمة عن إدخال الفيروسات."
                },
                {
                    title: "IV. سياسة الروابط",
                    content: "يتم الإبلاغ أن موقع كارولينا موراليس (محامية) يضع أو قد يضع تحت تصرف المستخدمين وسائل ربط (مثل، من بين أمور أخرى، الروابط واللافتات والأزرار)، وأدلة ومحركات بحث تسمح للمستخدمين بالوصول إلى مواقع الويب التي تنتمي إلى و/أو تديرها أطراف ثالثة. يهدف تثبيت هذه الروابط والأدلة ومحركات البحث على الموقع الإلكتروني إلى تسهيل بحث المستخدمين عن المعلومات المتاحة على الإنترنت والوصول إليها، دون اعتبار ذلك اقتراحًا أو توصية أو دعوة لزيارتها. لا تقدم كارولينا موراليس (محامية) ولا تسوق بنفسها أو من خلال أطراف ثالثة المنتجات و/أو الخدمات المتاحة على المواقع المرتبطة المذكورة."
                },
                {
                    title: "V. الملكية الفكرية والصناعية",
                    content: "كارولينا موراليس (محامية) بنفسها أو بصفتها متنازل لها، هي المالكة لجميع حقوق الملكية الفكرية والصناعية للموقع الإلكتروني، وكذلك العناصر الواردة فيه. ستكون، بالتالي، أعمالًا محمية كملكية فكرية بموجب النظام القانوني الإسباني، وتنطبق عليها اللوائح الإسبانية والمجتمعية في هذا المجال، وكذلك المعاهدات الدولية المتعلقة بالموضوع والموقعة من قبل إسبانيا. جميع الحقوق محفوظة."
                },
                {
                    title: "حماية الحقوق",
                    content: "يلتزم المستخدم باحترام حقوق الملكية الفكرية والصناعية لكارولينا موراليس (محامية). يمكنك عرض عناصر الموقع الإلكتروني أو حتى طباعتها ونسخها وتخزينها على القرص الصلب لجهاز الكمبيوتر الخاص بك أو على أي وسيط مادي آخر شريطة أن يكون ذلك حصريًا لاستخدامك الشخصي. ومع ذلك، لا يجوز للمستخدم قمع أو تغيير أو التلاعب بأي جهاز حماية أو نظام أمان تم تثبيته على الموقع الإلكتروني."
                },
                {
                    title: "VI. الإجراءات القانونية والقانون المعمول به والاختصاص القضائي",
                    content: "تحتفظ كارولينا موراليس (محامية) بالحق في رفع الدعاوى المدنية أو الجنائية التي تراها ضرورية للاستخدام غير السليم للموقع الإلكتروني والمحتويات، أو لخرق هذه الشروط. ستخضع العلاقة بين المستخدم وكارولينا موراليس (محامية) للوائح السارية والمطبقة في الأراضي الإسبانية. في حالة نشوء أي نزاع فيما يتعلق بتفسير و/أو تطبيق هذه الشروط، ستقدم الأطراف نزاعاتها إلى الاختصاص القضائي العادي وتخضع للقضاة والمحاكم المقابلة وفقًا للقانون."
                }
            ]
        },
        privacidad: {
            title: "سياسة الخصوصية",
            subtitle: "حماية البيانات الشخصية وفقاً للقانون العام لحماية البيانات (GDPR)",
            sections: [
                {
                    title: "1. مسؤول معالجة البيانات",
                    list: [
                        "الهوية: كارولينا موراليس",
                        "البريد الإلكتروني: التواصل عبر واتساب",
                        "الهاتف: +34 651 465 005"
                    ]
                },
                {
                    title: "2. الغرض من المعالجة",
                    content: "سيتم معالجة البيانات الشخصية التي تقدمها من أجل:",
                    list: [
                        "إدارة الاستفسارات وطلبات المعلومات",
                        "تقديم خدمات قانونية مهنية",
                        "الحفاظ على العلاقة المهنية القائمة"
                    ]
                },
                {
                    title: "3. الأساس القانوني",
                    content: "الأساس القانوني لمعالجة بياناتك هو موافقة صاحب البيانات، وتنفيذ عقد خدمات مهنية، والامتثال للالتزامات القانونية المعمول بها."
                },
                {
                    title: "4. حقوق صاحب البيانات",
                    content: "يمكنك ممارسة حقوق الوصول والتصحيح والحذف والمعارضة والتقييد ونقل البيانات من خلال الاتصال بنا. لديك أيضاً الحق في تقديم شكوى إلى الوكالة الإسبانية لحماية البيانات (www.aepd.es)."
                },
                {
                    title: "5. الاحتفاظ بالبيانات",
                    content: "سيتم الاحتفاظ بالبيانات الشخصية طالما استمرت العلاقة المهنية، ولاحقاً خلال الفترات المحددة قانوناً."
                }
            ]
        },
        cookies: {
            title: "سياسة ملفات تعريف الارتباط",
            subtitle: "معلومات حول استخدام ملفات تعريف الارتباط",
            sections: [
                {
                    title: "1. ما هي ملفات تعريف الارتباط؟",
                    content: "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقع ويب. يتم استخدامها لتذكر تفضيلاتك وتحسين تجربة التصفح الخاصة بك."
                },
                {
                    title: "2. ملفات تعريف الارتباط التي نستخدمها",
                    content: "نستخدم ملفات تعريف الارتباط التقنية اللازمة لتشغيل الموقع:",
                    list: [
                        "locale: يخزن تفضيل اللغة الخاص بك (سنة واحدة)",
                        "introSeen: يتذكر ما إذا كنت قد شاهدت رسوم المقدمة (جلسة)"
                    ]
                },
                {
                    title: "3. إدارة ملفات تعريف الارتباط",
                    content: "يمكنك تهيئة متصفحك لرفض ملفات تعريف الارتباط أو لإعلامك عند إرسالها. ومع ذلك، قد لا تتوفر بعض وظائف الموقع."
                }
            ]
        }
    },
    pt: {
        backToHome: "Voltar ao início",
        lastUpdated: "Última atualização",
        lastUpdatedDate: "28 de Dezembro de 2025",
        avisoLegal: {
            title: "Aviso Legal",
            subtitle: "Informação Legal e Condições Gerais de Uso",
            sections: [
                {
                    title: "I. INFORMAÇÕES GERAIS",
                    content: "Em cumprimento ao dever de informação estabelecido na Lei 34/2002 de Serviços da Sociedade da Informação e do Comércio Eletrônico (LSSI-CE) de 11 de julho, são fornecidos abaixo os seguintes dados de informação geral deste site:",
                    list: [
                        "Titular: Carolina Morales López",
                        "NIF: 49651821L",
                        "Endereço: Antonio Gaudí # 74 2-2a Reus 43203",
                        "Telefone de contato: +34 651 46 50 05",
                        "Email de contato: carolinamoraleslopez@icab.cat"
                    ]
                },
                {
                    title: "II. TERMOS E CONDIÇÕES GERAIS DE USO",
                    content: "O objeto destas Condições Gerais de Uso (doravante, Condições) é regular o acesso e a utilização do Site. Para os efeitos destas Condições, entender-se-á como Site: a aparência externa das interfaces de tela, tanto de forma estática quanto dinâmica, ou seja, a árvore de navegação; e todos os elementos integrados tanto nas interfaces de tela quanto na árvore de navegação (doravante, Conteúdos) e todos os serviços ou recursos online que possam ser oferecidos aos Usuários (doravante, Serviços)."
                },
                {
                    title: "Modificações",
                    content: "Carolina Morales Abogada reserva-se a faculdade de modificar, a qualquer momento, e sem aviso prévio, a apresentação e configuração do Site e dos Conteúdos e Serviços que nele possam estar incorporados. O Usuário reconhece e aceita que a qualquer momento Carolina Morales Abogada possa interromper, desativar e/ou cancelar qualquer um destes elementos que se integram no Site ou o acesso aos mesmos."
                },
                {
                    title: "Acesso ao Site",
                    content: "O acesso ao Site pelo Usuário tem caráter livre e, por regra geral, é gratuito sem que o Usuário tenha que fornecer uma contraprestação para poder desfrutar disso, salvo no que diz respeito ao custo de conexão através da rede de telecomunicações fornecida pelo provedor de acesso que o Usuário tenha contratado. A utilização dos Conteúdos não requer prévia assinatura ou registro algum."
                },
                {
                    title: "O Usuário",
                    content: "O acesso, a navegação e uso do Site, confere a condição de Usuário, pelo que se aceitam, desde que se inicia a navegação pelo Site, todas as Condições aqui estabelecidas, assim como suas ulteriores modificações, sem prejuízo da aplicação da correspondente normativa legal de cumprimento obrigatório segundo o caso. Dada a relevância do anterior, recomenda-se ao Usuário lê-las cada vez que visite o Site."
                },
                {
                    title: "Responsabilidade do Usuário",
                    content: "O Site de Carolina Morales Abogada proporciona grande diversidade de informação, serviços e dados. O Usuário assume sua responsabilidade para realizar um uso correto do Site. Esta responsabilidade se estenderá a:",
                    list: [
                        "Um uso da informação, Conteúdos e/ou Serviços e dados oferecidos por Carolina Morales Abogada sem que seja contrário ao disposto pelas presentes Condições, à Lei, à moral ou à ordem pública, ou que de qualquer outro modo possam supor lesão dos direitos de terceiros ou do mesmo funcionamento do Site.",
                        "A veracidade e licitude das informações fornecidas pelo Usuário nos formulários estendidos por Carolina Morales Abogada para o acesso a certos Conteúdos ou Serviços oferecidos pelo Site. Em todo caso, o Usuário notificará de forma imediata a Carolina Morales Abogada sobre qualquer fato que permita o uso indevido da informação registrada nos ditos formulários, tais como, mas não só, o roubo, extravio, ou o acesso não autorizado a identificadores e/ou senhas, com o fim de proceder ao seu imediato cancelamento."
                    ]
                },
                {
                    title: "Maioridade e Legislação",
                    content: "O Usuário declara ser maior de idade e dispor da capacidade jurídica suficiente para vincular-se pelas presentes Condições. Portanto, este Site de Carolina Morales Abogada não se dirige a menores de idade. Carolina Morales Abogada declina qualquer responsabilidade pelo descumprimento deste requisito."
                },
                {
                    title: "III. ACESSO E NAVEGAÇÃO NO SITE: EXCLUSÃO DE GARANTIAS E RESPONSABILIDADE",
                    content: "Carolina Morales Abogada não garante a continuidade, disponibilidade e utilidade do Site, nem dos Conteúdos ou Serviços. Carolina Morales Abogada fará todo o possível pelo bom funcionamento do Site, no entanto, não se responsabiliza nem garante que o acesso a este Site não vá ser ininterrupto ou que esteja livre de erro. Também não se responsabiliza ou garante que o conteúdo ou software ao qual possa acessar-se através deste Site, esteja livre de erro ou cause um dano ao sistema informático (software e hardware) do Usuário. Em nenhum caso Carolina Morales Abogada será responsável pelas perdas, danos ou prejuízos de qualquer tipo que surjam pelo acesso, navegação e o uso do Site, incluindo-se, mas não limitando-se, aos ocasionados aos sistemas informáticos ou os provocados pela introdução de vírus."
                },
                {
                    title: "IV. POLÍTICA DE LINKS",
                    content: "Informa-se que o Site de Carolina Morales Abogada coloca ou pode colocar à disposição dos Usuários meios de link (como, entre outros, links, banners, botões), diretórios e motores de busca que permitem aos Usuários acessar sites pertencentes e/ou geridos por terceiros. A instalação destes links, diretórios e motores de busca no Site tem por objeto facilitar aos Usuários a busca de e acesso à informação disponível na Internet, sem que possa considerar-se uma sugestão, recomendação ou convite para a visita dos mesmos. Carolina Morales Abogada não oferece nem comercializa por si nem por meio de terceiros os produtos e/ou serviços disponíveis nos ditos sites linkados."
                },
                {
                    title: "V. PROPRIEDADE INTELECTUAL E INDUSTRIAL",
                    content: "Carolina Morales Abogada por si ou como parte cessionária, é titular de todos os direitos de propriedade intelectual e industrial do Site, assim como dos elementos contidos no mesmo. Serão, por conseguinte, obras protegidas como propriedade intelectual pelo ordenamento jurídico espanhol, sendo-lhes aplicáveis tanto a normativa espanhola e comunitária neste campo, como os tratados internacionais relativos à matéria e subscritos pela Espanha. Todos os direitos reservados."
                },
                {
                    title: "Proteção de Direitos",
                    content: "O Usuário compromete-se a respeitar os direitos de propriedade intelectual e industrial de Carolina Morales Abogada. Poderá visualizar os elementos do Site ou até imprimi-los, copiá-los e armazená-los no disco rígido do seu computador ou em qualquer outro suporte físico sempre e quando seja, exclusivamente, para seu uso pessoal. O Usuário, no entanto, não poderá suprimir, alterar, ou manipular qualquer dispositivo de proteção ou sistema de segurança que estivesse instalado no Site."
                },
                {
                    title: "VI. AÇÕES LEGAIS, LEGISLAÇÃO APLICÁVEL E JURISDIÇÃO",
                    content: "Carolina Morales Abogada reserva-se a faculdade de apresentar as ações civis ou penais que considere necessárias pela utilização indevida do Site e Conteúdos, ou pelo descumprimento das presentes Condições. A relação entre o Usuário e Carolina Morales Abogada se regerá pela normativa vigente e de aplicação no território espanhol. De surgir qualquer controvérsia em relação à interpretação e/ou à aplicação destas Condições as partes submeterão seus conflitos à jurisdição ordinária submetendo-se aos juízes e tribunais que correspondam conforme a direito."
                }
            ]
        },
        privacidad: {
            title: "Política de Privacidade",
            subtitle: "Proteção de dados pessoais de acordo com o RGPD",
            sections: [
                {
                    title: "1. Responsável pelo Tratamento",
                    list: [
                        "Identidade: Carolina Morales",
                        "Email: Contato através do WhatsApp",
                        "Telefone: +34 651 465 005"
                    ]
                },
                {
                    title: "2. Finalidade do Tratamento",
                    content: "Os dados pessoais que nos fornecer serão tratados para:",
                    list: [
                        "Gerir consultas e solicitações de informação",
                        "Prestar serviços profissionais de advocacia",
                        "Manter a relação profissional estabelecida"
                    ]
                },
                {
                    title: "3. Legitimação",
                    content: "A base legal para o tratamento dos seus dados é o consentimento do interessado, a execução de um contrato de serviços profissionais e o cumprimento das obrigações legais aplicáveis."
                },
                {
                    title: "4. Direitos do Interessado",
                    content: "Pode exercer os direitos de acesso, retificação, eliminação, oposição, limitação e portabilidade contactando-nos. Também tem o direito de apresentar uma reclamação junto da Agência Espanhola de Proteção de Dados (www.aepd.es)."
                },
                {
                    title: "5. Conservação de Dados",
                    content: "Os dados pessoais serão conservados enquanto se mantiver a relação profissional e, posteriormente, durante os prazos legalmente estabelecidos."
                }
            ]
        },
        cookies: {
            title: "Política de Cookies",
            subtitle: "Informações sobre o uso de cookies",
            sections: [
                {
                    title: "1. O que são Cookies?",
                    content: "Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando visita um site. São usados para lembrar as suas preferências e melhorar a sua experiência de navegação."
                },
                {
                    title: "2. Cookies que Utilizamos",
                    content: "Utilizamos cookies técnicos necessários para o funcionamento do site:",
                    list: [
                        "locale: Armazena a sua preferência de idioma (1 ano)",
                        "introSeen: Lembra se já viu a animação de introdução (sessão)"
                    ]
                },
                {
                    title: "3. Gestão de Cookies",
                    content: "Pode configurar o seu navegador para rejeitar cookies ou para o avisar quando são enviados. No entanto, algumas funções do site podem não estar disponíveis."
                }
            ]
        }
    },
    zh: {
        backToHome: "返回首页",
        lastUpdated: "最后更新",
        lastUpdatedDate: "2025年12月28日",
        avisoLegal: {
            title: "法律声明",
            subtitle: "法律信息和一般使用条款",
            sections: [
                {
                    title: "I. 一般信息",
                    content: "根据7月11日第34/2002号关于信息社会服务和电子商务的法律 (LSSI-CE) 规定的信息义务，现提供本网站的以下一般信息数据：",
                    list: [
                        "所有者：Carolina Morales López",
                        "NIF：49651821L",
                        "地址：Antonio Gaudí # 74 2-2a Reus 43203",
                        "联系电话：+34 651 46 50 05",
                        "联系邮箱：carolinamoraleslopez@icab.cat"
                    ]
                },
                {
                    title: "II. 一般使用条款和条件",
                    content: "本一般使用条件（以下简称“条件”）的目的是规范网站的访问和使用。就本条件而言，网站应被理解为：屏幕界面的外观，无论是静态还是动态的，即导航树；以及集成在屏幕界面和导航树中的所有元素（以下简称“内容”）以及可能向用户提供的所有在线服务或资源（以下简称“服务”）。"
                },
                {
                    title: "修改",
                    content: "Carolina Morales Abogada 保留在任何时候且无需事先通知的情况下，修改网站以及其中可能包含的内容和服务的展示和配置的权利。用户承认并接受 Carolina Morales Abogada 可随时中断、停用和/或取消网站中集成的任何这些元素或对其的访问。"
                },
                {
                    title: "网站访问",
                    content: "用户对网站的访问是免费的，一般来说，用户无需提供对价即可享受，但用户与之签约的接入提供商提供的电信网络连接费用除外。内容的使用不需要任何事先订阅或注册。"
                },
                {
                    title: "用户",
                    content: "访问、浏览和使用网站即赋予用户身份，因此从开始浏览网站之时起，即被视为接受此处规定的所有条件及其后续修改，但不损害根据具体情况适用的相应强制性法律法规。鉴于上述情况的相关性，建议用户每次访问网站时阅读这些条款。"
                },
                {
                    title: "用户责任",
                    content: "Carolina Morales Abogada 网站提供大量信息、服务和数据。用户承担正确使用网站的责任。该责任将扩展至：",
                    list: [
                        "使用 Carolina Morales Abogada 提供的信息、内容和/或服务及数据时，不违反本条件、法律、道德或公共秩序的规定，或在任何其他方面可能损害第三方权利或网站本身的运作。",
                        "用户在 Carolina Morales Abogada 提供的用于访问网站提供的某些内容或服务的表格中提供的信息的真实性和合法性。在任何情况下，用户应立即通知 Carolina Morales Abogada 任何允许不正当使用上述表格中注册信息的行为，例如但不限于盗窃、丢失或未经授权访问标识符和/或密码，以便立即注销它们。"
                    ]
                },
                {
                    title: "成年和立法",
                    content: "用户声明已达到法定年龄并具有足够的法律能力受本条件约束。因此，本 Carolina Morales Abogada 网站不针对未成年人。Carolina Morales Abogada 对未能遵守此要求的行为不承担任何责任。"
                },
                {
                    title: "III. 网站访问和导航：保证和责任的排除",
                    content: "Carolina Morales Abogada 不保证网站、内容或服务的连续性、可用性和实用性。Carolina Morales Abogada 将尽一切可能确保网站的正常运行，但不负责也不保证访问本网站不会中断或没有错误。它也不负责或保证可以通过本网站访问的内容或软件没有错误或对用户的计算机系统（软件和硬件）造成损害。在任何情况下，Carolina Morales Abogada 均不对因访问、浏览和使用网站而产生的任何类型的损失、损害或偏见负责，包括但不限于对计算机系统造成的损害或由病毒引入造成的损害。"
                },
                {
                    title: "IV. 链接政策",
                    content: "据告知，Carolina Morales Abogada 网站向用户提供或可能提供链接手段（如链接、横幅、按钮等）、目录和搜索引擎，允许用户访问属于和/或由第三方管理的网站。在网站上安装这些链接、目录和搜索引擎旨在方便用户搜索和访问互联网上的可用信息，而不应被视为对访问这些信息的建议、推荐或邀请。Carolina Morales Abogada 不自行或通过第三方提供或营销上述链接网站上可用的产品和/或服务。"
                },
                {
                    title: "V. 知识产权和工业产权",
                    content: "Carolina Morales Abogada 本身或作为受让人，是网站及其所含元素的所有知识产权和工业产权的所有者。因此，它们将作为受西班牙法律体系保护的知识产权作品，适用于该领域的西班牙和共同体法规，以及与此事有关并由西班牙签署的国际条约。保留所有权利。"
                },
                {
                    title: "权利保护",
                    content: "用户承诺尊重 Carolina Morales Abogada 的知识产权和工业产权。您可以查看网站的元素，甚至可以将它们打印、复制并存储在您计算机的硬盘或任何其他物理介质上，只要这完全是为您个人使用。但是，用户不得删除、更改或操纵安装在网站上的任何保护装置或安全系统。"
                },
                {
                    title: "VI. 法律行动、适用法律和管辖权",
                    content: "Carolina Morales Abogada 保留对不正当使用网站和内容或违反本条件的行为提起其认为必要的民事或刑事诉讼的权利。用户与 Carolina Morales Abogada 之间的关系将受现行法规和西班牙领土适用法规的管辖。如果就本条件的解释和/或适用发生任何争议，双方将把冲突提交给普通管辖法院，并依法提交给相应的法官和法院。"
                }
            ]
        },
        privacidad: {
            title: "隐私政策",
            subtitle: "根据 GDPR 的个人数据保护",
            sections: [
                {
                    title: "1. 数据控制者",
                    list: [
                        "身份：Carolina Morales",
                        "电子邮件：通过 WhatsApp 联系",
                        "电话：+34 651 465 005"
                    ]
                },
                {
                    title: "2. 处理目的",
                    content: "您提供的个人数据将用于：",
                    list: [
                        "管理咨询和信息请求",
                        "提供专业律师服务",
                        "维持已建立的专业关系"
                    ]
                },
                {
                    title: "3. 法律依据",
                    content: "处理您数据的法律依据是数据主体的同意、专业服务合同的履行以及对适用法律义务的遵守。",
                },
                {
                    title: "4. 数据主体权利",
                    content: "您可以通过联系我们行使访问、更正、删除、反对、限制和迁移的权利。您也有权向西班牙数据保护局 (www.aepd.es) 提出投诉。",
                },
                {
                    title: "5. 数据保留",
                    content: "在维持专业关系期间，以及在法律规定的期限内，个人数据将被保留。",
                }
            ]
        },
        cookies: {
            title: "Cookie 政策",
            subtitle: "关于使用 Cookie 的信息",
            sections: [
                {
                    title: "1. 什么是 Cookie？",
                    content: "Cookie 是您访问网站时存储在您设备上的小型文本文件。它们用于记录您的偏好并改善您的浏览体验。",
                },
                {
                    title: "2. 我们使用的 Cookie",
                    content: "我们使用网站运行所需的必要技术 Cookie：",
                    list: [
                        "locale: 存储您的语言偏好（1年）",
                        "introSeen: 记录您是否看过片头动画（会话）"
                    ]
                },
                {
                    title: "3. Cookie 管理",
                    content: "您可以配置浏览器以拒绝 Cookie 或在发送 Cookie 时通知您。但是，某些网站功能可能无法使用。",
                }
            ]
        }
    },
    ro: {
        backToHome: "Înapoi la prima pagină",
        lastUpdated: "Ultima actualizare",
        lastUpdatedDate: "28 Decembrie 2025",
        avisoLegal: {
            title: "Aviz Legal",
            subtitle: "Informații legale și condiții generale de utilizare",
            sections: [
                {
                    title: "I. INFORMAȚII GENERALE",
                    content: "În conformitate cu datoria de informare stabilită prin Legea 34/2002 privind Serviciile Societății Informaționale și Comerțul Electronic (LSSI-CE) din 11 iulie, se furnizează mai jos următoarele date de informare generală a acestui site web:",
                    list: [
                        "Titular: Carolina Morales López",
                        "NIF: 49651821L",
                        "Adresa: Antonio Gaudí # 74 2-2a Reus 43203",
                        "Telefon de contact: +34 651 46 50 05",
                        "Email de contact: carolinamoraleslopez@icab.cat"
                    ]
                },
                {
                    title: "II. TERMENI ȘI CONDIȚII GENERALE DE UTILIZARE",
                    content: "Obiectul prezentelor Condiții Generale de Utilizare (în continuare, Condiții) este reglementarea accesului și utilizării Site-ului Web. În sensul prezentelor Condiții, se va înțelege prin Site Web: aspectul extern al interfețelor de ecran, atât în formă statică, cât și dinamică, adică arborele de navigare; și toate elementele integrate atât în interfețele de ecran, cât și în arborele de navigare (în continuare, Conținuturi) și toate acele servicii sau resurse online care pot fi oferite Utilizatorilor (în continuare, Servicii)."
                },
                {
                    title: "Modificări",
                    content: "Carolina Morales Abogada își rezervă dreptul de a modifica, în orice moment și fără notificare prealabilă, prezentarea și configurarea Site-ului Web, precum și a Conținuturilor și Serviciilor care ar putea fi încorporate în acesta. Utilizatorul recunoaște și acceptă că în orice moment Carolina Morales Abogada poate întrerupe, dezactiva și/sau anula oricare dintre aceste elemente integrate în Site-ul Web sau accesul la acestea."
                },
                {
                    title: "Accesul la Site-ul Web",
                    content: "Accesul la Site-ul Web de către Utilizator este liber și, în general, gratuit fără ca Utilizatorul să fie nevoit să furnizeze o contraprestație pentru a se putea bucura de acesta, cu excepția costului conexiunii prin rețeaua de telecomunicații furnizată de furnizorul de acces contractat de Utilizator. Utilizarea Conținuturilor nu necesită nicio abonare sau înregistrare prealabilă."
                },
                {
                    title: "Utilizatorul",
                    content: "Accesul, navigarea și utilizarea Site-ului Web conferă condiția de Utilizator, motiv pentru care se acceptă, din momentul începerii navigării pe Site-ul Web, toate Condițiile stabilite aici, precum și modificările lor ulterioare, fără a aduce atingere aplicării reglementărilor legale obligatorii corespunzătoare, după caz. Având în vedere relevanța celor de mai sus, se recomandă Utilizatorului să le citească la fiecare vizită pe Site-ul Web."
                },
                {
                    title: "Responsabilitatea Utilizatorului",
                    content: "Site-ul Web al Carolina Morales Abogada oferă o mare diversitate de informații, servicii și date. Utilizatorul își asumă responsabilitatea pentru utilizarea corectă a Site-ului Web. Această responsabilitate se va extinde la:",
                    list: [
                        "O utilizare a informațiilor, Conținuturilor și/sau Serviciilor și datelor oferite de Carolina Morales Abogada fără a fi contrară dispozițiilor prezentelor Condiții, Legii, moralei sau ordinii publice, sau care în orice alt mod ar putea presupune o lezare a drepturilor terților sau a funcționării Site-ului Web în sine.",
                        "Veridicitatea și legalitatea informațiilor furnizate de Utilizator în formularele extinse de Carolina Morales Abogada pentru accesul la anumite Conținuturi sau Servicii oferite de Site-ul Web. În orice caz, Utilizatorul va notifica imediat Carolina Morales Abogada cu privire la orice fapt care permite utilizarea necorespunzătoare a informațiilor înregistrate în respectivele formulare, cum ar fi, dar fără a se limita la, furtul, pierderea sau accesul neautorizat la identificatori și/sau parole, în scopul de a proceda la anularea imediată a acestora."
                    ]
                },
                {
                    title: "Majorat și Legislație",
                    content: "Utilizatorul declară că este major și dispune de capacitatea juridică suficientă pentru a se obliga prin prezentele Condiții. Prin urmare, acest Site Web al Carolina Morales Abogada nu se adresează minorilor. Carolina Morales Abogada își declină orice responsabilitate pentru nerespectarea acestei cerințe."
                },
                {
                    title: "III. ACCES ȘI NAVIGARE PE SITE-UL WEB: EXCLUDEREA GARANȚIILOR ȘI RĂSPUNDERII",
                    content: "Carolina Morales Abogada nu garantează continuitatea, disponibilitatea și utilitatea Site-ului Web, nici a Conținuturilor sau Serviciilor. Carolina Morales Abogada va face tot posibilul pentru buna funcționare a Site-ului Web, cu toate acestea, nu se responsabilizează și nici nu garantează că accesul la acest Site Web nu va fi neîntrerupt sau că este lipsit de erori. De asemenea, nu se responsabilizează sau garantează că conținutul sau software-ul la care se poate avea acces prin intermediul acestui Site Web este lipsit de erori sau cauzează o daună sistemului informatic (software și hardware) al Utilizatorului. În niciun caz Carolina Morales Abogada nu va fi responsabilă pentru pierderile, daunele sau prejudiciile de orice tip care decurg din accesul, navigarea și utilizarea Site-ului Web, incluzându-se, dar fără a se limita la, cele cauzate sistemelor informatice sau cele provocate de introducerea de viruși."
                },
                {
                    title: "IV. POLITICA DE LINK-URI",
                    content: "Se informează că Site-ul Web al Carolina Morales Abogada pune sau poate pune la dispoziția Utilizatorilor mijloace de link (cum ar fi, printre altele, link-uri, bannere, butoane), directoare și motoare de căutare care permit Utilizatorilor să acceseze site-uri web aparținând și/sau gestionate de terți. Instalarea acestor link-uri, directoare și motoare de căutare pe Site-ul Web are ca scop facilitarea căutării și accesului Utilizatorilor la informațiile disponibile pe Internet, fără a putea fi considerată o sugestie, recomandare sau invitație pentru vizitarea acestora. Carolina Morales Abogada nu oferă și nici nu comercializează prin sine sau prin intermediul terților produsele și/sau serviciile disponibile pe respectivele site-uri link-uite."
                },
                {
                    title: "V. PROPRIETATE INTELECTUALĂ ȘI INDUSTRIALĂ",
                    content: "Carolina Morales Abogada prin sine sau ca parte cesionară, este titulară a tuturor drepturilor de proprietate intelectuală și industrială ale Site-ului Web, precum și a elementelor conținute în acesta. Vor fi, prin urmare, opere protejate ca proprietate intelectuală de sistemul juridic spaniol, fiindu-le aplicabile atât reglementările spaniole și comunitare în acest domeniu, cât și tratatele internaționale referitoare la materie și subscrise de Spania. Toate drepturile rezervate."
                },
                {
                    title: "Protecția Drepturilor",
                    content: "Utilizatorul se angajează să respecte drepturile de proprietate intelectuală și industrială ale Carolina Morales Abogada. Va putea vizualiza elementele Site-ului Web sau chiar să le imprime, să le copieze și să le stocheze pe hard disk-ul computerului său sau pe orice alt suport fizic atâta timp cât este, exclusiv, pentru uzul său personal. Utilizatorul, totuși, nu va putea suprima, altera sau manipula niciun dispozitiv de protecție sau sistem de securitate care ar fi instalat pe Site-ul Web."
                },
                {
                    title: "VI. ACȚIUNI LEGALE, LEGISLAȚIE APLICABILĂ ȘI JURISDICȚIE",
                    content: "Carolina Morales Abogada își rezervă dreptul de a prezenta acțiunile civile sau penale pe care le consideră necesare pentru utilizarea necorespunzătoare a Site-ului Web și a Conținuturilor, sau pentru încălcarea prezentelor Condiții. Relația dintre Utilizator și Carolina Morales Abogada va fi guvernată de reglementările în vigoare și aplicabile pe teritoriul spaniol. În cazul apariției oricărei controverse în legătură cu interpretarea și/sau aplicarea acestor Condiții, părțile își vor supune conflictele jurisdicției ordinare supunându-se judecătorilor și tribunalelor care corespund conform legii."
                }
            ]
        },
        privacidad: {
            title: "Politică de Confidențialitate",
            subtitle: "Protecția datelor cu caracter personal conform RGPD",
            sections: [
                {
                    title: "1. Responsabil de Tratament",
                    list: [
                        "Identitate: Carolina Morales",
                        "Email: Contact prin WhatsApp",
                        "Telefon: +34 651 465 005"
                    ]
                },
                {
                    title: "2. Scopul Tratamentului",
                    content: "Datele personale pe care ni le furnizați vor fi tratate pentru:",
                    list: [
                        "Gestionarea solicitărilor și cererilor de informații",
                        "Prestarea serviciilor profesionale de avocatură",
                        "Menținerea relației profesionale stabilite"
                    ]
                },
                {
                    title: "3. Legitimare",
                    content: "Baza legală pentru tratarea datelor dumneavoastră este consimțământul persoanei vizate, executarea unui contract de servicii profesionale și conformarea cu obligațiile legale aplicabile."
                },
                {
                    title: "4. Drepturile Persoanei Vizate",
                    content: "Vă puteți exercita drepturile de acces, rectificare, ștergere, opoziție, limitare și portabilitate contactându-ne. Aveți, de asemenea, dreptul de a depune o plângere la Agenția Spaniolă pentru Protecția Datelor (www.aepd.es)."
                },
                {
                    title: "5. Conservarea Datelor",
                    content: "Datele personale vor fi păstrate atâta timp cât se menține relația profesională și, ulterior, în perioadele stabilite legal."
                }
            ]
        },
        cookies: {
            title: "Politică de Cookie-uri",
            subtitle: "Informații despre utilizarea cookie-urilor",
            sections: [
                {
                    title: "1. Ce sunt Cookie-urile?",
                    content: "Cookie-urile sunt mici fișiere text care sunt stocate pe dispozitivul dumneavoastră atunci când vizitați un site web. Ele sunt utilizate pentru a vă aminti preferințele și pentru a vă îmbunătăți experiența de navigare."
                },
                {
                    title: "2. Cookie-uri pe care le folosim",
                    content: "Folosim cookie-uri tehnice necesare pentru funcționarea site-ului:",
                    list: [
                        "locale: Stochează preferința dumneavoastră de limbă (1 an)",
                        "introSeen: Reține dacă ați văzut animația de introducere (sesiune)"
                    ]
                },
                {
                    title: "3. Gestionarea Cookie-urilor",
                    content: "Vă puteți configura browserul pentru a respinge cookie-urile sau pentru a vă anunța când sunt trimise. Cu toate acestea, unele funcții ale site-ului ar putea să nu fie disponibile."
                }
            ]
        }
    }
}
