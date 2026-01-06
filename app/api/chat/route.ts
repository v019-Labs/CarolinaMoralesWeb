import { NextResponse } from 'next/server';
import { Mistral } from '@mistralai/mistralai';
import { WEBSITE_CONTEXT } from '@/lib/chatbot-context';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const apiKey = process.env.GITHUB_TOKEN;
        if (!apiKey) {
            return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
        }

        const client = new Mistral({
            apiKey: apiKey,
            serverURL: "https://models.github.ai/inference"
        });

        // Use last 3 messages for context but filter out system messages
        const recentMessages = messages.filter((m: any) => m.role !== 'system').slice(-3);

        const response = await client.chat.stream({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `Eres el asistente experto de Carolina Morales, abogada de extranjería. Tu función es ayudar a los usuarios con información sobre trámites de inmigración y nacionalidad.

REGLA CRÍTICA - NAVEGACIÓN Y ACCIONES:
1. SIEMPRE que el usuario mencione "WhatsApp", "hablar", "llamar", "contacto", "humano" o quiera continuar fuera del chat, usa: [[NAVIGATE:WHATSAPP]]
2. SI EL USUARIO QUIERE IR A UNA PÁGINA O SECCIÓN (ej: "llévame a...", "quiero ver...", "donde está..."): Usa [[NAVIGATE:/ruta]] o [[NAVIGATE:/ruta#ancla]]
3. SI PIDE REQUISITOS O DETALLES específicos (modo agente): Usa [[NAVIGATE:/ruta#:~:text=FRASE_EXACTA]]

RUTAS Y SECCIONES DISPONIBLES:
• Inicio / Home: [[NAVIGATE:/]]
• Servicios (General): [[NAVIGATE:/#servicios]]
• Sobre mí: [[NAVIGATE:/#sobre-mi]]
• Contacto: [[NAVIGATE:/#contacto]]
• Opiniones: [[NAVIGATE:/#opiniones]]
• Ubicaciones: [[NAVIGATE:/#sedes]]
• Novedades / Blog: [[NAVIGATE:/novedades]]

• SERVICIOS ESPECÍFICOS (/servicios/[slug]):
  - Nacionalidad: /servicios/nacionalidad
  - Arraigos: /servicios/arraigo
  - Reagrupación Familiar: /servicios/reagrupacion-familiar
  - Derecho Penal: /servicios/derecho-penal
  - Derecho Civil: /servicios/derecho-civil
  - Reclamación Accidentes: /servicios/reclamacion-accidentes

REGLA DE ORO:
- Para ir a una página -> [[NAVIGATE:/la-ruta]]
- Para buscar un texto -> [[NAVIGATE:/ruta#:~:text=el texto]]
- Sé extremamente breve si vas a navegar.
- Di siempre algo como "Te llevo ahora mismo a [sitio]..." seguido del comando.

CONTEXTO WEB:
${WEBSITE_CONTEXT}`
                },
                ...recentMessages
            ],
            temperature: 0.6,
            maxTokens: 800,
        });

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of response) {
                        const delta = chunk.data.choices[0]?.delta;
                        let content = "";

                        if (delta?.content) {
                            if (typeof delta.content === 'string') {
                                content = delta.content;
                            } else if (Array.isArray(delta.content)) {
                                content = (delta.content as any[]).map((c: any) => ('text' in c ? c.text : '')).join('');
                            }
                        }

                        if (content) {
                            controller.enqueue(encoder.encode(content));
                        }
                    }
                } catch (e) {
                    console.error('Stream error:', e);
                    controller.error(e);
                } finally {
                    controller.close();
                }
            },
        });

        return new NextResponse(stream);
    } catch (error: any) {
        console.error('Error in chat API:', error);

        // Handle the specific 413 error with a helpful message
        if (error.status === 413 || error.message?.includes('413')) {
            return NextResponse.json({
                error: 'Error processing request',
                details: 'HISTORY_TOO_LARGE'
            }, { status: 413 });
        }

        return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
    }
}
