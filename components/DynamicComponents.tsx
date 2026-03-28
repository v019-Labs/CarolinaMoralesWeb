// app/components/DynamicComponents.tsx
'use client';

import dynamic from 'next/dynamic';

// Importación dinámica de ChatWidget
const ChatWidget = dynamic(() => import('@/components/chat-widget').then(mod => mod.ChatWidget), { ssr: false });

// Importación dinámica de CookieConsent
const CookieConsent = dynamic(() => import('@/components/cookie-consent').then(mod => mod.CookieConsent), { ssr: false });

export { ChatWidget, CookieConsent };