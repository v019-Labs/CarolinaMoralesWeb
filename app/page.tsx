import { cookies } from "next/headers"
import { Suspense } from "react"
import { HomePageClient } from "@/components/home-page-client"

export default async function HomePage() {
  const cookieStore = await cookies()
  const introSeen = cookieStore.get("intro_seen")?.value === "true"

  return (
    <Suspense fallback={null}>
      <HomePageClient initialIntroSeen={introSeen} />
    </Suspense>
  )
}
