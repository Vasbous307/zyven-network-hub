import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, text, center }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl md:mb-16", center && "mx-auto text-center")}>
      <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span className="h-2 w-2 bg-primary" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-gradient text-4xl font-bold uppercase leading-[0.95] md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (value: string, key = value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const t = document.createElement("textarea");
      t.value = value;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(key);
    setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
  };
  return { copied, copy };
}

export function CopyField({ label, value, className }: { label: string; value: string; className?: string }) {
  const { copied, copy } = useCopy();
  const isCopied = copied === value;
  return (
    <button
      type="button"
      onClick={() => copy(value)}
      aria-label={`Copy ${label}: ${value}`}
      className={cn(
        "group flex w-full items-center justify-between gap-3 rounded-md border bg-background/60 px-4 py-3 text-left transition-all hover:border-primary/50 hover:bg-background",
        isCopied && "border-success/60",
        className,
      )}
    >
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <span className="block truncate font-mono text-sm text-foreground">{value}</span>
      </span>
      <span
        className={cn(
          "flex shrink-0 items-center gap-1.5 rounded px-2 py-1 font-mono text-[11px] uppercase transition-colors",
          isCopied ? "bg-success/15 text-success" : "bg-muted text-muted-foreground group-hover:text-primary",
        )}
        aria-live="polite"
      >
        {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {isCopied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

export function Counter({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <path d="M16 2 29 9.5v13L16 30 3 22.5v-13Z" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
        <path d="M10 11h12l-12 10h12" className="stroke-primary" strokeWidth="2.5" fill="none" strokeLinecap="square" />
      </svg>
      <span className="font-display text-xl font-bold tracking-[0.2em]">ZYVEN</span>
    </span>
  );
}
