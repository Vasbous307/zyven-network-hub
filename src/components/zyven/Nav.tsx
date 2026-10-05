import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b bg-background/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main">
        <a href="#home" aria-label="ZYVEN home">
          <Logo />
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="btn-shine hidden rounded-md bg-gradient-primary px-4 py-2 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Join now
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t bg-background px-5 py-6 md:hidden animate-fade-in">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b py-4 font-display text-2xl font-bold uppercase tracking-wide"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="mt-8 flex justify-center rounded-md bg-gradient-primary py-4 font-display font-bold uppercase tracking-wider text-primary-foreground"
          >
            Join now
          </a>
        </div>
      )}
    </header>
  );
}
