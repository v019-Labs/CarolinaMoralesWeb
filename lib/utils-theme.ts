/**
 * Utility to check if the current date is within the Christmas theme 
 * range (Dec 1 - Jan 6).
 */
export function isChristmasTime(): boolean {
  // If we are in the browser, check for forcing
  if (typeof window !== "undefined") {
    // Override for testing during desenvolvimento
    const isForced = localStorage.getItem("force-christmas") === "true"
    if (isForced) return true
  }

  const now = new Date()
  
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    month: '2-digit',
    day: '2-digit'
  })
  
  const formatted = formatter.format(now) // MM-DD
  const [month, day] = formatted.split('-').map(Number)

  // Dec 1 to Jan 6
  const isDec = month === 12
  const isJan = month === 1 && day <= 6

  return isDec || isJan
}
