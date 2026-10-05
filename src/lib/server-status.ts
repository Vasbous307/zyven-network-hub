// Isolated server status integration.
// Swap `fetchServerStatus` for your own endpoint later — the UI only depends on `ServerStatus`.

export type ServerStatus =
  | { state: "online"; players: number; maxPlayers: number; version?: string; source: string }
  | { state: "offline"; source: string }
  | { state: "unavailable"; source: string };

const STATUS_API = (host: string) => `https://api.mcsrvstat.us/3/${encodeURIComponent(host)}`;

export async function fetchServerStatus(host: string): Promise<ServerStatus> {
  try {
    const res = await fetch(STATUS_API(host), { headers: { Accept: "application/json" } });
    if (!res.ok) return { state: "unavailable", source: "mcsrvstat.us" };
    const data = await res.json();
    // Aternos returns a placeholder MOTD when the server is asleep.
    const motd: string = (data?.motd?.clean ?? []).join(" ").toLowerCase();
    if (!data?.online || motd.includes("offline")) return { state: "offline", source: "mcsrvstat.us" };
    return {
      state: "online",
      players: data.players?.online ?? 0,
      maxPlayers: data.players?.max ?? 0,
      version: data.version,
      source: "mcsrvstat.us",
    };
  } catch {
    return { state: "unavailable", source: "mcsrvstat.us" };
  }
}

export const serverStatusQuery = (host: string) => ({
  queryKey: ["server-status", host],
  queryFn: () => fetchServerStatus(host),
  refetchInterval: 60_000,
  staleTime: 30_000,
});
