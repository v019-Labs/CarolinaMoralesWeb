"use client"

import { Star, Quote } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { Marquee } from "@/components/ui/marquee"

const ReviewCard = ({
  name,
  rating,
  text,
  case: caseType,
  initial,
}: {
  name: string
  rating: number
  text: string
  case: string
  initial: string
}) => {
  return (
    <div className="w-[360px] sm:w-[380px] mx-4 sm:mx-6 group relative p-6 sm:p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-primary/15 rounded-3xl hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 ease-out flex flex-col justify-between h-full">
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-20 h-20 text-primary" />
      </div>

      <div className="relative space-y-6">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 fill-primary text-primary drop-shadow-[0_0_8px_rgba(164,144,107,0.4)]"
            />
          ))}
        </div>

        <p className="text-base text-foreground leading-relaxed relative z-10 line-clamp-6">{text}</p>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t-2 border-primary/20 mt-6 text-left">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full text-primary-foreground text-lg font-bold group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20 shrink-0">
          {initial}
        </div>
        <div>
          <div className="font-bold text-foreground text-base">{name}</div>
          <div className="text-xs text-primary font-medium">{caseType}</div>
        </div>
      </div>
    </div>
  )
}

export function ReviewsSection() {
  const { t } = useTranslation()

  const reviews = [
    {
      name: "Tushar Saini",
      rating: 5,
      text: "When you're navigating the often-tricky waters of immigration, you need more than just a lawyer who knows the law inside and out. Of course, deep legal knowledge is essential, but it's equally important to find someone who genuinely understands and supports your personal situation.\nThe best immigration lawyers don't just quote legal texts; they explain complex processes clearly so you're never left in the dark. They also set realistic expectations and keep you consistently updated on your case's progress. Think of them as your meticulous guides – they're super precise with all the paperwork and deadlines, ensuring every detail is handled perfectly.\nUltimately, what brings real peace of mind during such a stressful time is knowing you have a lawyer with a proven track record of successful cases and a reputation for being both professional and highly ethical. They're the ones who truly make a difference.\ntivo.",
      case: "Inmigración/Extranjería",
      initial: "T",
    },
    {
      name: "Carolyn Handley",
      rating: 5,
      text: "10/10, would highly recommend to anyone going through a visa process! Carolina was incredibly kind and informative throughout the process, and she was able to answer all of my questions. Even more, she was so encouraging and compassionate throughout the visa process, it made the process feel less daunting. Highly recommended!",
      case: "Extranjería/Visa",
      initial: "C",
    },
    {
      name: "Ramiro Barreto Gutiérrez",
      rating: 5,
      text: "Quiero agradecer a Carolina por ser una Excelente profesional, una abogada de extranjería que realizó un trabajo impecable, logrando mi nacionalidad en muy poco tiempo. Destaco su eficacia, compromiso y dominio del proceso. Siempre atenta, clara y resolutiva. La recomiendo sin ninguna duda por su gran profesionalismo y calidad humana. Muchas gracias",
      case: "Nacionalidad",
      initial: "R",
    },
    {
      name: "Diana Tabares",
      rating: 5,
      text: "Carolina!\n\nQuiero expresarle mi más sincero agradecimiento por su excelente trabajo y dedicación en mi caso. Su efectividad y profesionalismo han sido fundamentales para lograr un resultado positivo. Me siento afortunada de haber contado con su apoyo y orientación.\n\nGracias por su tiempo, esfuerzo, compromiso y paciencia con mis innumerables preguntas🫣. Su trabajo ha sido invaluable y siempre recordaré su dedicación y expertise.\n\nEstoy más que feliz, que Dios le bendiga grandemente, le dé sabiduría para continuar ayudando a otras personas que como yo también sueñan con alcanzar este gran logro.\nDiana Tabares",
      case: "Arraigo socio-laboral",
      initial: "D",
    },
  ]

  return (
    <section id="resenas" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-glow"
        />
        <div
          className="absolute top-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse"
        />
      </div>

      <div className="mx-auto max-w-[1600px]">
        <div className="text-center space-y-4 mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            {t.reviews.title}{" "}
            <span className="font-vibes text-primary drop-shadow-[0_0_20px_rgba(164,144,107,0.4)]">{t.reviews.clients}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-base text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:40s]">
            {reviews.map((review, index) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  )
}
