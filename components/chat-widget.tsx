"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Minus, Loader2, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/styles/agent-mode.css";

interface Message {
    role: "user" | "assistant" | "system";
    content: string;
}

export function ChatWidget() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "¡Hola! Soy el asistente virtual de Carolina Morales. ¿En qué puedo ayudarte hoy sobre nuestros servicios de extranjería?",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Persistence
    useEffect(() => {
        const savedMessages = localStorage.getItem("chat_history");
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages);
                // Only restore if we have valid messages and not too many
                if (Array.isArray(parsed) && parsed.length > 0 && parsed.length <= 20) {
                    setMessages(parsed);
                } else if (parsed.length > 20) {
                    // Keep only last 15 messages if too many
                    setMessages(parsed.slice(-15));
                }
            } catch (e) {
                console.error("Failed to parse chat history", e);
                // Clear corrupted data
                localStorage.removeItem("chat_history");
            }
        }
    }, []);

    useEffect(() => {
        if (messages.length > 1) {
            try {
                // Keep only last 15 messages for storage
                const messagesToStore = messages.slice(-15);
                localStorage.setItem("chat_history", JSON.stringify(messagesToStore));
            } catch (e) {
                console.error("Failed to save chat history", e);
                // Clear if storage is full
                localStorage.removeItem("chat_history");
            }
        }
    }, [messages]);

    const [displayMessages, setDisplayMessages] = useState<Message[]>(messages);
    const streamingContentRef = useRef("");
    const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        setDisplayMessages(messages);
    }, [messages.length]);

    useEffect(() => {
        scrollToBottom();
    }, [displayMessages, isOpen]);

    const startTypingEffect = () => {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = setInterval(() => {
            setDisplayMessages((prev) => {
                const newMsgs = [...prev];
                const lastMsg = newMsgs[newMsgs.length - 1];
                if (lastMsg && lastMsg.role === "assistant" && lastMsg.content.length < streamingContentRef.current.length) {
                    const charsToAdd = Math.min(2, streamingContentRef.current.length - lastMsg.content.length);
                    lastMsg.content += streamingContentRef.current.slice(lastMsg.content.length, lastMsg.content.length + charsToAdd);
                    return newMsgs;
                }
                return prev;
            });
        }, 20);
    };

    const stopTypingEffect = () => {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };

    // Agentic Scanning State
    const [isScanning, setIsScanning] = useState(false);
    const [isScanSuccess, setIsScanSuccess] = useState(false);
    const [scanMessage, setScanMessage] = useState("");
    const [focusBoxStyle, setFocusBoxStyle] = useState<React.CSSProperties | null>(null);
    const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [readingProgress, setReadingProgress] = useState(0);
    const [autoSpeakEnabled, setAutoSpeakEnabled] = useState(true);
    const [accessibilityMode, setAccessibilityMode] = useState(true);
    const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        const clearFocus = () => {
            setFocusBoxStyle(null);
            // Remove agent highlights from any element
            document.querySelectorAll('.fosforito-highlight, .agent-underline').forEach(el => {
                el.classList.remove('fosforito-highlight', 'agent-underline');
            });
        };
        window.addEventListener("click", clearFocus);
        return () => window.removeEventListener("click", clearFocus);
    }, []);

    // Preload voices for better accessibility
    useEffect(() => {
        const loadVoices = () => {
            window.speechSynthesis.getVoices();
        };

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        loadVoices();
    }, []);

    // Keyboard shortcuts for accessibility
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ctrl/Cmd + Space: Toggle reading
            if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
                e.preventDefault();

                // Priority 1: Current Selection
                const selection = window.getSelection()?.toString().trim();
                if (selection) {
                    if (isSpeaking) {
                        stopSpeaking();
                    } else {
                        speakText(selection, null, accessibilityMode);
                    }
                    return;
                }

                // Priority 2: Focused Element (from agent or click)
                if (focusedElement?.textContent) {
                    if (isSpeaking) {
                        stopSpeaking();
                    } else {
                        speakText(focusedElement.textContent, focusedElement, accessibilityMode);
                    }
                }
            }
            // Escape: Stop reading
            if (e.key === 'Escape' && isSpeaking) {
                e.preventDefault();
                stopSpeaking();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [focusedElement, isSpeaking, accessibilityMode]);

    // Click-to-focus for reading
    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if it's a text element and not part of the chat widget
            const isTextElement = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'SPAN', 'STRONG', 'B'].includes(target.tagName);
            const isInsideWidget = target.closest('.fixed.bottom-4.right-4') || target.closest('[role="dialog"]');

            if (isTextElement && !isInsideWidget) {
                setFocusedElement(target);
            }
        };

        window.addEventListener('mousedown', handleGlobalClick);
        return () => window.removeEventListener('mousedown', handleGlobalClick);
    }, []);

    const speakText = (text: string, element?: HTMLElement | null, isAccessibilityMode = true) => {
        if (!window.speechSynthesis) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        setReadingProgress(0);

        const utterance = new SpeechSynthesisUtterance(text);

        // Accessibility-friendly settings
        if (isAccessibilityMode) {
            utterance.lang = "es-ES";
            utterance.rate = 0.9; // Slightly faster for natural feel
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            // Get the best available voice for Spanish
            const voices = window.speechSynthesis.getVoices();
            const preferredVoices = [
                'Google español',
                'Microsoft Helena',
                'Microsoft Laura',
                'Microsoft Pablo',
                'Monica',
                'Jorge'
            ];

            const spanishVoice = voices.find(voice =>
                preferredVoices.some(pref => voice.name.includes(pref)) && voice.lang.includes('es')
            ) || voices.find(voice => voice.lang.includes('es'));

            if (spanishVoice) {
                utterance.voice = spanishVoice;
            }

            utterance.text = text; // Just the text, no "Inicio de lectura"
        } else {
            utterance.lang = "es-ES";
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 0.9;
        }

        // Track reading progress
        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                const charIndex = event.charIndex;
                const totalChars = text.length;
                const progress = (charIndex / totalChars) * 100;
                setReadingProgress(Math.min(progress + 5, 100)); // +5 to feel ahead of the voice
            }
        };

        // Add event listeners for better accessibility
        utterance.onstart = () => {
            setIsSpeaking(true);

            // Announce to screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = 'Leyendo contenido en voz alta';
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 100);

            if (element) {
                element.classList.add("highlighted-content", "fosforito-highlight");
                // Add accessibility attributes
                element.setAttribute('aria-busy', 'true');
                element.setAttribute('aria-label', 'Contenido siendo leído en voz alta');
                element.setAttribute('role', 'status');
            }
        };

        utterance.onend = () => {
            setIsSpeaking(false);
            setReadingProgress(100);
            setTimeout(() => setReadingProgress(0), 500);

            // Clear accessibility announcement
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = 'Finalizó la lectura del contenido';
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 100);

            if (element) {
                element.classList.remove("highlighted-content", "fosforito-highlight");
                element.removeAttribute('aria-busy');
                element.removeAttribute('aria-label');
                element.removeAttribute('role');
            }
        };

        utterance.onerror = (event) => {
            setIsSpeaking(false);
            setReadingProgress(0);
            console.error('Speech synthesis error:', event);

            // Error announcement for screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'assertive');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = 'Error en la lectura por voz. Por favor, intente nuevamente.';
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 100);

            if (element) {
                element.classList.remove("highlighted-content", "fosforito-highlight");
                element.removeAttribute('aria-busy');
                element.removeAttribute('aria-label');
                element.removeAttribute('role');
            }
        };

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    const stopSpeaking = () => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            setReadingProgress(0);

            // Clear focused element accessibility attributes
            if (focusedElement) {
                focusedElement.classList.remove("highlighted-content", "fosforito-highlight");
                focusedElement.removeAttribute('aria-busy');
                focusedElement.removeAttribute('aria-label');
                focusedElement.removeAttribute('role');
            }

            // Announce cancellation to screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = 'Lectura detenida';
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 100);
        }
    };

    const handleAgentNavigation = async (route: string, isRequirementsQuery = false, serviceName = "") => {
        const textFragmentMatch = route.match(/#:~:text=(.*?)$/);
        let targetText: string | null = null;
        try {
            targetText = textFragmentMatch ? decodeURIComponent(textFragmentMatch[1]) : null;
        } catch (e) {
            targetText = textFragmentMatch ? textFragmentMatch[1] : null;
        }

        const cleanRoute = route.replace(/#:~:text=.*?$/, "");
        setIsScanning(true);
        setScanMessage(serviceName ? `Navegando a ${serviceName}...` : "Navegando...");

        if (window.location.pathname !== cleanRoute) {
            router.push(cleanRoute);
            // Give extra time for the page to load if it's a new route
            await new Promise(resolve => setTimeout(resolve, 1200));
        }

        // Handle Anchor Links (hash)
        if (cleanRoute.includes('#')) {
            const hash = cleanRoute.split('#')[1];
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                setScanMessage("¡Llegamos!");
                setTimeout(() => setIsScanning(false), 800);
                if (!targetText) return; // Exit if no text fragment search needed
            }
        }

        if (targetText) {
            setScanMessage(serviceName ? `Buscando requisitos de ${serviceName}...` : "Localizando contenido...");
            await new Promise(resolve => setTimeout(resolve, 500));

            const elements = document.querySelectorAll("p, li, h1, h2, h3, h4, h5, h6, span, strong, b, td, th, div");
            let foundElement: HTMLElement | null = null;

            const normalize = (text: string) =>
                text.toLowerCase()
                    .replace(/[^\w\sáéíóúñü]/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();

            const normalizedTarget = normalize(targetText || "");
            const targetWords = normalizedTarget.split(' ').filter(w => w.length > 2);

            // Search with multiple strategies
            const searchStrategies = [
                // Exact match
                (el: HTMLElement) => {
                    const text = normalize(el.textContent || "");
                    return text.includes(normalizedTarget);
                },
                // Partial match with key words
                (el: HTMLElement) => {
                    const text = normalize(el.textContent || "");
                    return targetWords.some(word => text.includes(word)) &&
                        targetWords.filter(word => text.includes(word)).length >= Math.min(3, targetWords.length);
                },
                // Single word match for longer targets
                (el: HTMLElement) => {
                    const text = normalize(el.textContent || "");
                    return targetWords.slice(0, 2).some(word => text.includes(word));
                }
            ];

            for (const strategy of searchStrategies) {
                for (const el of Array.from(elements)) {
                    const element = el as HTMLElement;
                    // Skip chat widget elements and invisible elements
                    if (element.closest('.fixed.bottom-4.right-4') ||
                        element.closest('[role="dialog"]') ||
                        window.getComputedStyle(element).display === 'none') continue;

                    if (strategy(element)) {
                        foundElement = element;
                        break;
                    }
                }
                if (foundElement) break;
            }

            if (foundElement) {
                setScanMessage(`¡Información de ${serviceName || 'servicio'} encontrada!`);
                setIsScanning(false); // Remove scanning overlay immediately
                setIsScanSuccess(true);

                // Wait for any layout shifts
                setTimeout(() => {
                    foundElement!.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 200);

                setTimeout(() => {
                    const rect = foundElement!.getBoundingClientRect();
                    setFocusBoxStyle({
                        top: `${rect.top + window.scrollY - 8}px`,
                        left: `${rect.left + window.scrollX - 8}px`,
                        width: `${rect.width + 16}px`,
                        height: `${rect.height + 16}px`,
                        position: 'absolute' as const,
                    });

                    foundElement!.setAttribute("tabindex", "-1");
                    foundElement!.focus({ preventScroll: true });

                    // Apply both highlight and underline
                    if (!foundElement!.classList.contains('fosforito-highlight')) {
                        foundElement!.classList.add('fosforito-highlight', 'agent-underline');
                    }

                    setFocusedElement(foundElement);
                    setScanMessage(`¡Ejecución de agente finalizada!`);

                    // Automatically clear UI after a delay, but KEEP the focus reference
                    setTimeout(() => {
                        setIsScanSuccess(false);
                        setFocusBoxStyle(null);

                        // Clean up the classes from the element
                        if (foundElement) {
                            foundElement.classList.remove('fosforito-highlight', 'agent-underline');
                        }
                    }, 3000);

                    // Auto-speak if enabled and it's a requirements query
                    if (autoSpeakEnabled && isRequirementsQuery) {
                        const elementText = foundElement!.textContent || "";
                        if (elementText.length > 30 && elementText.length < 3000) {
                            setTimeout(() => {
                                speakText(elementText, foundElement!, accessibilityMode);
                            }, 1000);
                        }
                    }
                }, 1500);
            } else {
                setScanMessage("Contenido no encontrado");
                setTimeout(() => setIsScanning(false), 1500);
            }
        } else {
            // Pure navigation only - clear scanning after a small delay
            setIsScanning(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        // Check if user is asking about requirements
        const isRequirementsQuery = /\b(requisitos|qué necesito|documentación|trámites|cómo se hace|condiciones|pasos|qué se necesita|documentos|papeles|procedimiento)\b/i.test(inputValue);

        const userMessage: Message = { role: "user", content: inputValue };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setDisplayMessages(newMessages);
        setInputValue("");
        setIsLoading(true);

        const newBotMessage: Message = { role: "assistant", content: "" };
        setMessages((prev) => [...prev, newBotMessage]);
        setDisplayMessages((prev) => [...prev, newBotMessage]);

        streamingContentRef.current = "";
        startTypingEffect();
        window.speechSynthesis.cancel();

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: newMessages.map(({ role, content }: any) => ({ role, content })),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                if (errorData.details === "HISTORY_TOO_LARGE") {
                    streamingContentRef.current = "El historial es demasiado largo. Por favor, inicia un nuevo chat.";
                } else if (errorData.error === "Error processing request") {
                    streamingContentRef.current = "El servicio no está disponible. Inténtalo más tarde o contacta por WhatsApp.";
                } else {
                    streamingContentRef.current = "Error de conexión. Por favor, inténtalo de nuevo.";
                }
                return;
            }

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let done = false;

            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                const chunkValue = decoder.decode(value, { stream: true });
                streamingContentRef.current += chunkValue;

                // Check for navigation commands
                const navMatch = streamingContentRef.current.match(/\[\[NAVIGATE:(.*?)\]\]/);
                if (navMatch) {
                    const route = navMatch[1];
                    streamingContentRef.current = streamingContentRef.current.replace(navMatch[0], "");

                    // For requirements queries, navigate immediately to show the agent mode
                    const navigationDelay = isRequirementsQuery ? 500 : 1000;

                    setTimeout(() => {
                        if (route === "WHATSAPP") {
                            window.open("https://wa.me/34651465005?text=Hola,%20vengo%20del%20chat%20de%20la%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n.", "_blank");
                        } else {
                            // Map routes to service names for dynamic messages
                            const serviceMap: Record<string, string> = {
                                "/servicios/nacionalidad": "Nacionalidad Española",
                                "/servicios/arraigo": "Arraigos",
                                "/servicios/reagrupacion-familiar": "Reagrupación Familiar",
                                "/servicios/derecho-penal": "Derecho Penal",
                                "/servicios/derecho-civil": "Derecho Civil",
                                "/servicios/reclamacion-accidentes": "Reclamación de Accidentes"
                            };
                            const serviceName = Object.entries(serviceMap).find(([path]) => route.startsWith(path))?.[1] || "";
                            handleAgentNavigation(route, isRequirementsQuery, serviceName);
                        }
                    }, navigationDelay);
                }

                setMessages((prev) => {
                    const updated = [...prev];
                    const last = updated[updated.length - 1];
                    if (last && last.role === "assistant") {
                        last.content = streamingContentRef.current;
                    }
                    return updated;
                });
            }
        } catch (error: any) {
            console.error("Error:", error);
            streamingContentRef.current = "Error al conectar con el servicio. Por favor, inténtalo más tarde.";
        } finally {
            setTimeout(() => {
                stopTypingEffect();
                setDisplayMessages((prev: any) => {
                    const newMsgs = [...prev];
                    if (newMsgs.length > 0 && newMsgs[newMsgs.length - 1].role === "assistant") {
                        newMsgs[newMsgs.length - 1].content = streamingContentRef.current;
                    }
                    return newMsgs;
                });
                setIsLoading(false);
            }, 300);
        }
    };

    return (
        <>
            <div className="sr-only" aria-live="polite">{scanMessage}</div>

            <AnimatePresence>
                {isScanning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="agent-scanning pointer-events-none fixed inset-0 z-[9999]"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isScanSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="agent-scanning-success pointer-events-none fixed inset-0 z-[10000]"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isScanning && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-8 left-1/2 -translate-x-1/2 z-[10000] bg-black/80 backdrop-blur-md text-white px-6 py-2 rounded-full border border-yellow-500/50 flex items-center gap-3 shadow-2xl"
                    >
                        <Loader2 className="w-4 h-4 animate-spin text-yellow-500" />
                        <span className="font-medium text-sm">{scanMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {focusBoxStyle && (
                <div
                    className="agent-focus-box"
                    style={focusBoxStyle}
                    role="region"
                    aria-label="Contenido destacado para lectura"
                >
                    {/* Accessibility-first premium control buttons */}
                    <div className="agent-controls-container" role="toolbar" aria-label="Controles de lectura">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={cn(
                                "agent-control-button primary",
                                isSpeaking && "speaking"
                            )}
                            onClick={() => {
                                if (isSpeaking) {
                                    stopSpeaking();
                                } else if (focusedElement?.textContent) {
                                    speakText(focusedElement.textContent, focusedElement, accessibilityMode);
                                }
                            }}
                            aria-label={isSpeaking ? "Detener lectura" : "Iniciar lectura del contenido"}
                            title={isSpeaking ? "Detener lectura (Escape)" : "Leer contenido (Ctrl+Espacio)"}
                        >
                            {isSpeaking ? (
                                <>
                                    <VolumeX className="w-3.5 h-3.5" aria-hidden="true" />
                                    <span>Detener</span>
                                </>
                            ) : (
                                <>
                                    <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                                    <span>Leer</span>
                                </>
                            )}
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="agent-control-button"
                            onClick={() => setAccessibilityMode(!accessibilityMode)}
                            aria-label={accessibilityMode ? "Desactivar modo accesibilidad" : "Activar modo accesibilidad"}
                            title={`Modo accesibilidad: ${accessibilityMode ? 'Activado' : 'Desactivado'}`}
                        >
                            <span aria-hidden="true" className="text-sm">{accessibilityMode ? "♿" : "👁️"}</span>
                            <span>Accesibilidad</span>
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="agent-control-button"
                            onClick={() => setAutoSpeakEnabled(!autoSpeakEnabled)}
                            aria-label={autoSpeakEnabled ? "Desactivar lectura automática" : "Activar lectura automática"}
                            title={`Lectura automática: ${autoSpeakEnabled ? 'Activada' : 'Desactivada'}`}
                        >
                            <span aria-hidden="true" className="text-sm">{autoSpeakEnabled ? "🔊" : "🔇"}</span>
                            <span>Auto</span>
                        </motion.button>
                    </div>

                    {/* Screen reader announcement */}
                    <div className="sr-only" aria-live="polite" aria-atomic="true" role="status">
                        {isSpeaking ? "Leyendo contenido en voz alta" : "Contenido listo para lectura"}
                    </div>

                    {/* Reading Progress Bar Overlay */}
                    <AnimatePresence>
                        {isSpeaking && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="reading-progress-container"
                            >
                                <motion.div
                                    className="reading-progress-bar"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${readingProgress}%` }}
                                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="mb-4 w-[90vw] max-w-[380px] overflow-hidden rounded-[24px] border border-white/10 bg-black/70 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] backdrop-blur-[12px] text-white"
                        >
                            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-400">
                                        <span className="text-sm font-bold text-black">CM</span>
                                    </div>
                                    <h3 className="text-sm font-semibold">Asistente Virtual</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <a href="https://wa.me/34651465005" target="_blank" className="rounded-full p-2 text-green-500 hover:bg-white/10">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </a>
                                    <button onClick={() => setIsOpen(false)} className="rounded-full p-1 text-neutral-400 hover:text-white"><Minus className="h-4 w-4" /></button>
                                </div>
                            </div>

                            <div className="h-[400px] overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                                <div className="flex flex-col gap-4">
                                    {displayMessages.map((msg, idx) => (
                                        <div key={idx} className={cn("max-w-[85%] rounded-2xl px-4 py-2 text-sm", msg.role === "user" ? "self-end bg-yellow-600/90 text-white" : "self-start bg-white/10 text-neutral-200")}>
                                            <div className="prose prose-invert prose-sm max-w-none break-words [&_a]:text-yellow-400 [&_a]:underline">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        ul: (props) => <ul className="list-disc pl-4 my-2" {...props} />,
                                                        ol: (props) => <ol className="list-decimal pl-4 my-2" {...props} />,
                                                        li: (props) => <li className="my-0.5" {...props} />,
                                                        p: (props) => <p className="leading-relaxed whitespace-pre-wrap" {...props} />,
                                                        strong: (props) => <strong className="font-bold text-yellow-500" {...props} />,
                                                    }}
                                                >
                                                    {msg.content}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && streamingContentRef.current === "" && (
                                        <div className="self-start rounded-2xl bg-white/10 px-4 py-2"><Loader2 className="h-4 w-4 animate-spin text-neutral-400" /></div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
                                <div className="relative">
                                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Escribe tu consulta..." className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-4 pr-10 text-sm placeholder-neutral-500 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50" />
                                    <button type="submit" disabled={isLoading || !inputValue.trim()} className="absolute right-1 top-1 rounded-full p-1.5 text-yellow-500 disabled:opacity-50"><Send className="h-4 w-4" /></button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-600 to-yellow-500 shadow-lg transition-all hover:shadow-yellow-600/30">
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="h-6 w-6 text-black" /></motion.div> : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle className="h-6 w-6 text-black" /></motion.div>}
                    </AnimatePresence>
                </motion.button>
            </div>
        </>
    );
}
