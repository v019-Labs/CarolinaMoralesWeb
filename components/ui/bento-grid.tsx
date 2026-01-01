import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedLink } from "@/components/animated-link";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className?: string;
    background: ReactNode;
    Icon?: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <AnimatedLink
        href={href}
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
            // light styles
            "bg-card text-card-foreground shadow-sm border border-border",
            // dark styles
            "dark:bg-black dark:text-neutral-200",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            {Icon && <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />}
            <h3 className="text-2xl font-semibold text-foreground dark:text-neutral-300 font-dancing">
                {name}
            </h3>
            <p className="max-w-lg text-muted-foreground">{description}</p>
        </div>

        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">
                <span>{cta}</span>
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </div>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[0.03] group-hover:dark:bg-neutral-800/10" />
    </AnimatedLink>
);

export { BentoCard, BentoGrid };
