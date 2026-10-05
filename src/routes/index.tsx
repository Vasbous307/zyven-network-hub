import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/zyven/Nav";
import {
  Community, FaqSection, Features, Footer, Hero, HowToJoin, Launch, Rules, StatsStrip, StoreSoon, WhyZyven,
} from "@/components/zyven/Sections";

const TITLE = "ZYVEN — Survival, PvP & Economy Minecraft Server";
const DESC =
  "Join ZYVEN: a Java + Bedrock crossplay Minecraft server with risk/reward PvP, a player-driven economy, auction house, quests, crates and ranks.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#features" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <WhyZyven />
        <HowToJoin />
        <Launch />
        <Rules />
        <FaqSection />
        <Community />
        <StoreSoon />
      </main>
      <Footer />
    </>
  );
}
