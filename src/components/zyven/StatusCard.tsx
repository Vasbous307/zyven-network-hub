import { useQuery } from "@tanstack/react-query";
import { Monitor, Smartphone } from "lucide-react";
import { SERVER } from "@/content/site";
import { serverStatusQuery } from "@/lib/server-status";
import { cn } from "@/lib/utils";
import { CopyField } from "./primitives";

export function useServerStatus() {
  return useQuery(serverStatusQuery(SERVER.javaAddress));
}

export function StatusPill() {
  const { data, isLoading } = useServerStatus();
  const state = isLoading ? "loading" : data?.state ?? "unavailable";
  const label =
    state === "online"
      ? `Online · ${data?.state === "online" ? data.players : 0} playing`
      : state === "offline"
        ? "Server sleeping"
        : state === "loading"
          ? "Checking status"
          : "Status integration ready";
  const color = state === "online" ? "bg-success" : state === "offline" ? "bg-ember" : "bg-muted-foreground";
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border bg-background/60 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground backdrop-blur">
      <span className="relative flex h-2 w-2">
        {state === "online" && <span className={cn("absolute inset-0 rounded-full animate-ping-soft", color)} />}
        <span className={cn("relative h-2 w-2 rounded-full", color)} />
      </span>
      {label}
    </span>
  );
}

export function StatusCard({ className }: { className?: string }) {
  const { data, isLoading } = useServerStatus();
  const online = data?.state === "online";
  const pct = online && data.maxPlayers ? Math.min(100, (data.players / data.maxPlayers) * 100) : 0;

  return (
    <div className={cn("panel pixel-corners relative overflow-hidden p-6", className)}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Server status</p>
          <p className="mt-1 font-display text-2xl font-bold uppercase">
            {isLoading ? "Checking…" : online ? "Online" : data?.state === "offline" ? "Offline" : "Ready"}
          </p>
        </div>
        <StatusPill />
      </div>

      <div className="mt-6">
        <div className="flex items-end justify-between">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Players</p>
          <p className="font-display text-3xl font-bold tabular-nums">
            {online ? data.players : "—"}
            <span className="text-base text-muted-foreground">/{online ? data.maxPlayers : "—"}</span>
          </p>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-gradient-primary transition-all duration-1000" style={{ width: `${pct}%` }} />
        </div>
        {!isLoading && !online && (
          <p className="mt-3 text-xs text-muted-foreground">
            {data?.state === "offline"
              ? "The server is asleep right now. Join our community to know when it's up."
              : "Live player data will appear here once the status service responds."}
          </p>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <span className="flex items-center gap-2 rounded-md border bg-background/40 px-3 py-2 text-xs font-semibold">
          <Monitor className="h-4 w-4 text-primary" /> Java
        </span>
        <span className="flex items-center gap-2 rounded-md border bg-background/40 px-3 py-2 text-xs font-semibold">
          <Smartphone className="h-4 w-4 text-primary" /> Bedrock
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <CopyField label="Server IP" value={SERVER.javaAddress} />
        <CopyField label="Bedrock port" value={SERVER.bedrockPort} />
      </div>
    </div>
  );
}
