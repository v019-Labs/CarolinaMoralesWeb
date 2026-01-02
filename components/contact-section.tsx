"use client"

import { useTranslation } from "@/lib/i18n"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function ContactSection() {
    const { t } = useTranslation()
    const pathname = usePathname()
    const router = useRouter()

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#")) {
            e.preventDefault()
            const targetId = href.split("#")[1]

            if (pathname === "/") {
                const element = document.getElementById(targetId)
                if (element) {
                    const offset = 80
                    const bodyRect = document.body.getBoundingClientRect().top
                    const elementRect = element.getBoundingClientRect().top
                    const elementPosition = elementRect - bodyRect
                    const offsetPosition = elementPosition - offset

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    })
                }
            } else {
                router.push(`/?scrollTo=${targetId}`)
            }
        }
    }

    return (
        <section id="contacto" className="py-20 px-6 relative overflow-hidden bg-secondary/5">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance">
                        {t.contactSection.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <ContactCard
                        icon={Phone}
                        title={t.contactSection.phone}
                        content="+34 651 465 005"
                        href="tel:+34651465005"
                        delay={0}
                    />
                    <ContactCard
                        icon={Mail}
                        title={t.contactSection.email}
                        content="info@carolinamorales.com"
                        href="mailto:info@carolinamorales.com"
                        delay={100}
                    />
                    <ContactCard
                        icon={MapPin}
                        title={t.contactSection.location}
                        content={`${t.locationsSection.barcelona} & ${t.locationsSection.reus}`}
                        href="/#ubicaciones"
                        onClick={(e) => handleNavClick(e, "/#ubicaciones")}
                        delay={200}
                    />
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="https://wa.me/34651465005"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
                    >
                        {t.contactSection.whatsappButton}
                    </Link>

                    <div className="flex justify-center gap-6 mt-8">
                        <Link
                            href="https://www.instagram.com/carolinamoralesabogada/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/carolinamoraleslopezabogadaextranjeria/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link
                            href="https://es.linkedin.com/in/carolina-morales-l%C3%B3pez-3332b2129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContactCard({ icon: Icon, title, content, href, delay, onClick }: { icon: any, title: string, content: string, href: string, delay: number, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-center">{content}</p>
        </Link>
    )
}
