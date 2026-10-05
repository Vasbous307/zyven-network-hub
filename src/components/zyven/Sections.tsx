import {
  ArrowRight, Coins, Compass, Crown, Monitor, Package, ScrollText, Smartphone, Store, Swords, Trees,
  MessageCircle, Music2, Youtube, Plus, ShieldAlert, Lock, Sparkles, Copy, Check,
} from "lucide-react";
import { useState } from "react";
import { EVENTS, FAQ, FEATURES, NAV, PILLARS, RULES, SERVER, SOCIALS, STATS, STORE_ITEMS } from "@/content/site";
import { cn } from "@/lib/utils";
import { CopyField, Counter, Logo, Reveal, SectionHeader, useCopy } from "./primitives";
import { StatusCard, StatusPill } from "./StatusCard";

const ICONS = { Trees, Swords, Coins, Store, Compass, ScrollText, Package, Crown, MessageCircle, Music2, Youtube } as const;

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mx-auto max-w-7xl px-5 md:px-8", className)}>{children}</div>
);

function FloatingBlocks() {
  const blocks = [
    { c: "left-[6%] top-[22%] h-14 w-14", r: "12deg", d: "0s" },
    { c: "right-[8%] top-[18%] h-20 w-20", r: "-18deg", d: "-3s" },
    { c: "left-[14%] bottom-[16%] h-10 w-10", r: "30deg", d: "-5s" },
    { c: "right-[18%] bottom-[22%] h-12 w-12", r: "-8deg", d: "-1.5s" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      {blocks.map((b, i) => (
        <div
          key={i}
          className={cn("absolute animate-float-block border border-primary/30 bg-primary/5 backdrop-blur-sm", b.c)}
          style={{ ["--r" as string]: b.r, animationDelay: b.d }}
        >
          <div className="absolute inset-1 border border-primary/15" />
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const { copied, copy } = useCopy();
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-voxel" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" aria-hidden />
      <FloatingBlocks />
      <Container className="grid w-full items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <div className="animate-rise"><StatusPill /></div>
          <h1
            className="text-gradient mt-6 animate-rise font-display text-[clamp(4.5rem,16vw,11rem)] font-bold leading-[0.82] tracking-[0.04em]"
            style={{ animationDelay: "80ms" }}
          >
            ZYVEN
          </h1>
          <p className="mt-5 animate-rise font-mono text-sm tracking-[0.35em] text-primary md:text-base" style={{ animationDelay: "160ms" }}>
            {SERVER.tagline}
          </p>
          <p className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "240ms" }}>
            Fight for loot. Trade for power. Build an empire in a world where every choice has a price.
            Java and Bedrock — one world.
          </p>
          <div className="mt-9 flex animate-rise flex-col gap-3 sm:flex-row" style={{ animationDelay: "320ms" }}>
            <a
              href="#join"
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Join now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => copy(SERVER.javaAddress)}
              className="group inline-flex items-center justify-center gap-3 rounded-md border bg-background/50 px-5 py-4 font-mono text-sm backdrop-blur transition-colors hover:border-primary/50"
              aria-label={`Copy server IP ${SERVER.javaAddress}`}
            >
              <span className="truncate">{SERVER.javaAddress}</span>
              <span aria-live="polite" className={cn("flex items-center gap-1 text-xs uppercase", copied ? "text-success" : "text-primary")}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy IP"}
              </span>
            </button>
          </div>
        </div>
        <div className="animate-rise" style={{ animationDelay: "400ms" }}>
          <StatusCard />
        </div>
      </Container>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="Server highlights" className="border-y bg-surface/60">
      <Container className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center">
            <p className="font-display text-4xl font-bold text-accent-gradient md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <Container>
        <SectionHeader eyebrow="Gameplay" title={<>Built to be<br />played hard</>} text="Eight systems designed to work together — so every hour you put in pays off somewhere." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <Reveal key={f.title} delay={(i % 4) * 70}>
                <article className="panel group relative h-full overflow-hidden rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  <span className="absolute right-5 top-5 font-mono text-xs text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function WhyZyven() {
  return (
    <section className="relative overflow-hidden border-y bg-surface/40 py-24 md:py-32">
      <div className="absolute inset-0 bg-voxel opacity-60" aria-hidden />
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader eyebrow="Why ZYVEN?" title={<>High risk.<br /><span className="text-accent-gradient">Higher reward.</span></>} text="Most servers hand you everything. ZYVEN makes you earn it — and that's exactly why winning feels incredible." />
        </div>
        <div className="space-y-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group flex gap-6 rounded-lg border bg-background/60 p-6 backdrop-blur transition-colors hover:border-primary/40 md:p-8">
                <span className="font-display text-4xl font-bold text-primary/40 transition-colors group-hover:text-primary">{p.kicker}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HowToJoin() {
  const java = ["Open Minecraft: Java Edition", "Go to Multiplayer → Add Server", "Paste the server address", "Join and claim your first land"];
  const bedrock = ["Open Minecraft (Bedrock)", "Go to Play → Servers → Add Server", "Paste the address and enter the port", "Save, join and start your run"];
  const Card = ({ icon: Icon, title, steps, fields }: { icon: typeof Monitor; title: string; steps: string[]; fields: { label: string; value: string }[] }) => (
    <div className="panel pixel-corners h-full p-7 md:p-9">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
        <h3 className="font-display text-2xl font-bold uppercase">{title}</h3>
      </div>
      <ol className="mt-7 space-y-4">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-primary/40 font-mono text-xs text-primary">{i + 1}</span>
            <span className="pt-0.5 text-foreground/90">{s}</span>
          </li>
        ))}
      </ol>
      <div className="mt-7 space-y-2">{fields.map((f) => <CopyField key={f.label} {...f} />)}</div>
    </div>
  );
  return (
    <section id="join" className="py-24 md:py-32">
      <Container>
        <SectionHeader center eyebrow="How to join" title="In the game in 60 seconds" text="PC, console or phone — everyone plays in the same world." />
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal><Card icon={Monitor} title="Java Edition" steps={java} fields={[{ label: "Server address", value: SERVER.javaAddress }]} /></Reveal>
          <Reveal delay={100}>
            <Card icon={Smartphone} title="Bedrock Edition" steps={bedrock} fields={[{ label: "Server address", value: SERVER.bedrockAddress }, { label: "Port", value: SERVER.bedrockPort }]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Rules() {
  return (
    <section id="rules" className="border-y bg-surface/40 py-24 md:py-32">
      <Container>
        <SectionHeader eyebrow="Server rules" title="Play hard. Play fair." text="Short list, strictly enforced. Breaking these can mean a mute, kick or permanent ban." />
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {RULES.map((r, i) => (
            <div key={r.title} className="bg-background p-7 transition-colors hover:bg-card">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">RULE {String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Launch() {
  return (
    <section id="events" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-primary/30 p-8 md:p-14">
            <div className="absolute inset-0 bg-aurora" aria-hidden />
            <div className="absolute inset-0 bg-voxel" aria-hidden />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Coming soon
                </span>
                <h2 className="text-gradient mt-5 font-display text-5xl font-bold uppercase leading-[0.9] md:text-7xl">Join the beta</h2>
                <p className="mt-5 max-w-md text-lg text-muted-foreground">
                  The world is open for early players right now. Get in before launch, learn the map and be first in line when the market opens.
                </p>
                <a href="#join" className="btn-shine mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-7 py-4 font-display font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                  Play the beta <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <ul className="space-y-3">
                {EVENTS.map((e) => (
                  <li key={e.title} className="rounded-lg border bg-background/70 p-5 backdrop-blur transition-colors hover:border-primary/40">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">{e.tag}</span>
                    <h3 className="mt-1 font-display text-lg font-bold uppercase">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-y bg-surface/40 py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeader eyebrow="FAQ" title="Questions, answered" text="Still stuck? Ask in our community and a staff member will help." />
        <div className="divide-y rounded-lg border bg-background">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-semibold transition-colors hover:text-primary"
                  >
                    {f.q}
                    <Plus className={cn("h-5 w-5 shrink-0 text-primary transition-transform duration-300", isOpen && "rotate-45")} />
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <p className="overflow-hidden px-6 text-muted-foreground"><span className="block pb-5">{f.a}</span></p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Community() {
  return (
    <section id="community" className="py-24 md:py-32">
      <Container>
        <SectionHeader center eyebrow="Community" title="Find your crew" text="Trade, team up and stay in the loop. Official channels are launching alongside the beta." />
        <div className="grid gap-4 md:grid-cols-3">
          {SOCIALS.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            const live = Boolean(s.href);
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span className={cn("flex h-12 w-12 items-center justify-center rounded-md", s.primary ? "bg-gradient-primary text-primary-foreground" : "bg-primary/10 text-primary")}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {live ? "Join" : "Launching soon"}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase">{s.name}</h3>
                <p className="font-mono text-xs text-primary">{s.handle}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </>
            );
            const cls = cn("panel block h-full rounded-lg p-7 transition-all duration-300", live && "hover:-translate-y-1 hover:border-primary/40", s.primary && "border-primary/30");
            return (
              <Reveal key={s.name} delay={i * 80}>
                {live ? <a href={s.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a> : <div className={cls} aria-label={`${s.name} — launching soon`}>{inner}</div>}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function StoreSoon() {
  return (
    <section id="store" className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-dashed p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" /> Store · Coming soon
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase md:text-4xl">Support the server</h2>
                <p className="mt-3 text-muted-foreground">A store is on the way. No pay-to-win — just cosmetics and ways to help keep ZYVEN online.</p>
              </div>
              <div className="grid flex-1 gap-3 sm:grid-cols-3 md:max-w-xl">
                {STORE_ITEMS.map((s) => (
                  <div key={s.title} className="rounded-lg border bg-card/50 p-5 opacity-70">
                    <h3 className="font-display font-bold uppercase">{s.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-surface/60">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 font-mono text-xs tracking-[0.3em] text-primary">{SERVER.tagline}</p>
          <div className="mt-6 max-w-sm"><CopyField label="Server IP" value={SERVER.javaAddress} /></div>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Terms of Service — coming soon</li>
            <li>Privacy Policy — coming soon</li>
            <li>Not affiliated with Mojang or Microsoft.</li>
          </ul>
        </div>
      </Container>
      <div className="border-t">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} ZYVEN. All rights reserved.</p>
          <p className="font-mono">Java + Bedrock · Crossplay</p>
        </Container>
      </div>
    </footer>
  );
}
