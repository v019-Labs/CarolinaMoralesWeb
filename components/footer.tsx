"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href === "/") {
      e.preventDefault()
      const targetId = href.includes("#") ? href.split("#")[1] : "inicio"

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
        } else if (targetId === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      } else {
        router.push(`/?scrollTo=${targetId}`)
      }
    }
  }

  return (
    <footer className="bg-secondary/95 backdrop-blur-sm text-secondary-foreground py-12 px-6 border-t border-primary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 text-center md:text-left">
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/images/png-202.png"
                alt="Carolina Morales Abogada"
                width={180}
                height={60}
                className="brightness-150"
              />
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              {t.footer.logoSubtitle}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4 text-primary">{t.nav.services}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#servicios"
                  onClick={(e) => handleNavClick(e, "/#servicios")}
                  className="hover:text-primary transition-colors"
                >
                  {t.services.nacionalidad.title}
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  onClick={(e) => handleNavClick(e, "/#servicios")}
                  className="hover:text-primary transition-colors"
                >
                  {t.services.arraigo.title}
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  onClick={(e) => handleNavClick(e, "/#servicios")}
                  className="hover:text-primary transition-colors"
                >
                  {t.services.reagrupacion.title}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4 text-primary">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#sobre-mi"
                  onClick={(e) => handleNavClick(e, "/#sobre-mi")}
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/#resenas"
                  onClick={(e) => handleNavClick(e, "/#resenas")}
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.reviews}
                </Link>
              </li>
              <li>
                <Link
                  href="/#ubicaciones"
                  onClick={(e) => handleNavClick(e, "/#ubicaciones")}
                  className="hover:text-primary transition-colors"
                >
                  {t.nav.locations}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/aviso-legal" className="hover:text-primary transition-colors">
                  {t.footer.legal}
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="hover:text-primary transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-primary transition-colors">
                  {t.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
          <p>© {new Date().getFullYear()} Carolina Morales Abogada. {t.footer.rights}.</p>
          <p>{t.footer.barAssociation}</p>
        </div>
      </div>
    </footer>
  )
}
