// All editable website content for ZYVEN lives here.

export const SERVER = {
  name: "ZYVEN",
  tagline: "SURVIVAL • PVP • ECONOMY",
  javaAddress: "Vasbous-rd8x.aternos.me",
  bedrockAddress: "Vasbous-rd8x.aternos.me",
  bedrockPort: "55252",
  version: "Java & Bedrock crossplay",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Join", href: "#join" },
  { label: "Rules", href: "#rules" },
  { label: "FAQ", href: "#faq" },
  { label: "Community", href: "#community" },
];

export const FEATURES = [
  { icon: "Trees", title: "Survival", text: "A hand-tuned vanilla+ world. Claim land, build your base, and outlast everyone around you." },
  { icon: "Swords", title: "PvP", text: "Real stakes. Fight in the wild for loot, territory and bragging rights — nothing is handed to you." },
  { icon: "Coins", title: "Economy", text: "A balanced, player-driven economy where every block mined and every trade made actually matters." },
  { icon: "Store", title: "Auction House", text: "List, bid and flip. The market is run by players — prices rise and crash with supply and demand." },
  { icon: "Compass", title: "RTP", text: "One command drops you somewhere fresh in the wild. Escape the crowd and start your own story." },
  { icon: "ScrollText", title: "Quests", text: "Daily and weekly objectives that reward grinders, explorers and fighters alike." },
  { icon: "Package", title: "Crates", text: "Earn keys through play and crack open crates for gear, cosmetics and rare economy drops." },
  { icon: "Crown", title: "Ranks", text: "Climb from newcomer to legend. Progression ranks unlock perks earned in-game, not bought." },
] as const;

export const PILLARS = [
  { kicker: "01", title: "Risk / reward PvP", text: "Leave spawn with your best gear and you could come back rich — or not at all. Every fight is a decision." },
  { kicker: "02", title: "An economy that breathes", text: "No infinite admin shops propping up prices. Value is created by players mining, farming and trading." },
  { kicker: "03", title: "A player-run market", text: "The Auction House is the beating heart of ZYVEN. Corner a resource, undercut rivals, build an empire." },
  { kicker: "04", title: "Events that matter", text: "Weekend wars, boss hunts and market events with real rewards — designed to shake up the leaderboards." },
];

export const STATS = [
  { value: 8, suffix: "+", label: "Core gamemodes" },
  { value: 2, suffix: "", label: "Platforms, one world" },
  { value: 24, suffix: "/7", label: "Uptime target" },
  { value: 100, suffix: "%", label: "Earned, not bought" },
];

export const RULES = [
  { title: "No cheating", text: "Hacked clients, x-ray, macros, auto-clickers and exploit abuse result in a ban." },
  { title: "Respect players", text: "Trash talk is fine. Harassment, slurs, threats and doxxing are not." },
  { title: "No griefing claims", text: "Claimed land is protected. Unclaimed land is fair game — protect what you value." },
  { title: "Fair trading", text: "Scamming in the market or through fake trades is punished. Keep deals honest." },
  { title: "No advertising", text: "Don't promote other servers, links or services in chat or on signs." },
  { title: "Report bugs", text: "Found a dupe or exploit? Report it to staff. Abusing it costs you your account." },
];

export const FAQ = [
  { q: "Is ZYVEN free to play?", a: "Yes. ZYVEN is completely free. You only need a legitimate copy of Minecraft Java or Bedrock Edition." },
  { q: "Can Java and Bedrock players play together?", a: "Yes. ZYVEN supports full crossplay — Java and Bedrock players share the same world, economy and market." },
  { q: "Which Minecraft version should I use?", a: "Use the latest release of Minecraft. Java players connect with the address only; Bedrock players also need the port." },
  { q: "Why does the server sometimes show offline?", a: "During the beta we run on hosting that may sleep when nobody is online. If it's offline, try again shortly or check our community channels." },
  { q: "Is PvP enabled everywhere?", a: "PvP is on in the wild. Spawn and claimed land are protected so you always have somewhere safe to build and trade." },
  { q: "Will there be pay-to-win items?", a: "No. Any future store will focus on cosmetics and supporting the server. Power is earned through gameplay." },
];

export const SOCIALS = [
  { name: "Discord", handle: "Community hub", text: "Announcements, trading, support and event sign-ups.", icon: "MessageCircle", href: "", primary: true },
  { name: "TikTok", handle: "@zyven", text: "Clips, highlights and the best fights from the wild.", icon: "Music2", href: "" },
  { name: "YouTube", handle: "ZYVEN", text: "Season trailers, guides and event recaps.", icon: "Youtube", href: "" },
];

export const EVENTS = [
  { tag: "Beta", title: "Open Beta Season", text: "Get in early, shape the economy and earn a permanent founder badge." },
  { tag: "Event", title: "Launch Weekend War", text: "A server-wide PvP event with crate keys and money prizes for the top fighters." },
  { tag: "Market", title: "Opening Bell", text: "The Auction House opens to all. First traders set the prices for the entire season." },
];

export const STORE_ITEMS = [
  { title: "Cosmetic ranks", text: "Chat colors, prefixes and flair." },
  { title: "Crate keys", text: "Cosmetic-focused crate rewards." },
  { title: "Support ZYVEN", text: "Help keep the servers running." },
];
