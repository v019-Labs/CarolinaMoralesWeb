"use client"

import Link from "next/link"
import { ArrowLeft, FileQuestion } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center animate-fade-in-scale">
            <div className="p-6 bg-primary/10 rounded-full mb-6">
                <FileQuestion className="w-16 h-16 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                404 - Página no encontrada
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-md">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
                <ArrowLeft className="w-4 h-4" />
                Volver al Inicio
            </Link>
        </div>
    )
}
