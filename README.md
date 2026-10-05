# ZYVEN Network Hub

Build the BEST possible public website for my Minecraft server brand ZYVEN. Do not make a generic template. Make it look like a premium, competitive Minecraft network website that could realistically be used for a serious server launch.

Brand:
- Name: ZYVEN
- Tagline: SURVIVAL • PVP • ECONOMY
- Style: dark, premium, cinematic, modern gaming, sharp typography, subtle Minecraft-inspired details, polished animations, responsive on desktop/mobile.
- Primary goal: make visitors want to JOIN NOW.
- Server address Java: Vasbous-rd8x.aternos.me
- Bedrock address: Vasbous-rd8x.aternos.me
- Bedrock port: 55252
- Java + Bedrock crossplay.

Core sections:
1. Hero with huge ZYVEN branding, tagline, short punchy copy, JOIN NOW CTA, copy-IP button, and server status/player count area.
2. Live server status card showing Online/Offline, Java + Bedrock, IP and port. For now use a clean mock/live-ready status component and structure the code so a real status API can be connected later.
3. Feature cards: Survival, PvP, Economy, Player Market/Auction House, RTP, Quests, Crates, Ranks.
4. “Why ZYVEN?” section focused on risk/reward PvP, economy, player-driven market and events.
5. How to Join section for Java and Bedrock with simple copyable instructions.
6. Rules section with concise server rules.
7. FAQ section.
8. Community / social section with Discord placeholder and TikTok/YouTube placeholders, designed for future real links.
9. Launch/events section with a strong “COMING SOON / JOIN THE BETA” area.
10. Future Store/Donations section, visually present but clearly marked as coming soon.
11. Footer with ZYVEN branding, server IP, navigation and legal placeholders.

UX requirements:
- Sticky nav with ZYVEN logo and anchors: Home, Features, Join, Rules, FAQ, Community.
- Smooth scrolling.
- Excellent hover states and micro-animations, but never cheesy or excessive.
- Copy-to-clipboard feedback for server IP and Bedrock port.
- Mobile navigation.
- Accessible contrast and keyboard-friendly controls.
- SEO title/description and social metadata for ZYVEN.
- Fast loading and clean component structure.
- No stock-photo look. Prefer abstract/cinematic Minecraft-inspired backgrounds made with CSS/gradients and tasteful visual effects.
- Use a coherent premium color system (near-black base with electric cyan/blue accent and restrained secondary glow).
- Make it feel like a real server brand, not an AI-generated landing page.

Technical:
- Use the default Lovable full-stack TypeScript stack.
- Build production-quality React components.
- No authentication needed yet.
- Keep server status integration isolated so it can be connected to a real Minecraft status endpoint later.
- Make all content easy to edit.
- Include subtle animated counters/status indicators where appropriate.
- Ensure there are no broken links or placeholder “lorem ipsum”.
- If an external API cannot be called from the browser, do not fake a real status; label it as “Status integration ready” or use a clearly styled demo state.

Take the time to make the visual hierarchy, spacing, typography, animations, responsive behavior and copy exceptionally polished. The site should feel like the official website of a large Minecraft network.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0d7136a9-1be8-4a9b-beb8-3abb05d72352).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
