import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const articlesDir = path.join(root, "articles");
const siteUrl = "https://cryptounlockcalendar.vortixvpn.com";
const playUrl = "https://play.google.com/store/apps/details?id=com.tradingradar.app";

fs.mkdirSync(articlesDir, { recursive: true });

const coins = [
  ["bitcoin-token-unlock-calendar-market-alerts", "Bitcoin Token Unlock Calendar and Market Alerts", "Bitcoin", "BTC"],
  ["ethereum-token-unlock-calendar-portfolio-risk", "Ethereum Token Unlock Calendar and Portfolio Risk", "Ethereum", "ETH"],
  ["solana-token-unlock-calendar-future-signals", "Solana Token Unlock Calendar and Future Signals", "Solana", "SOL"],
  ["xpl-plasma-token-unlock-calendar", "XPL Plasma Token Unlock Calendar and Supply Tracking", "Plasma", "XPL"],
  ["xrp-token-unlock-schedule-alerts", "XRP Token Unlock Schedule and Price Alerts", "XRP", "XRP"],
  ["bnb-token-unlock-calendar-events", "BNB Token Unlock Calendar and Crypto Events", "BNB", "BNB"],
  ["dogecoin-market-alerts-portfolio-tracker", "Dogecoin Market Alerts and Portfolio Tracker", "Dogecoin", "DOGE"],
  ["cardano-token-unlock-calendar-signals", "Cardano Token Unlock Calendar and Signals", "Cardano", "ADA"],
  ["avalanche-token-unlock-calendar-risk", "Avalanche Token Unlock Calendar and Portfolio Risk", "Avalanche", "AVAX"],
  ["chainlink-token-unlock-calendar-alerts", "Chainlink Token Unlock Calendar and Alerts", "Chainlink", "LINK"],
  ["polkadot-token-unlock-calendar-signals", "Polkadot Token Unlock Calendar and Future Signals", "Polkadot", "DOT"],
  ["polygon-token-unlock-calendar-reminders", "Polygon Token Unlock Calendar and Unlock Reminders", "Polygon", "MATIC"],
  ["near-token-unlock-calendar-portfolio", "NEAR Token Unlock Calendar and Portfolio Tracking", "NEAR Protocol", "NEAR"],
  ["arbitrum-token-unlock-calendar-risk", "Arbitrum Token Unlock Calendar and Supply Risk", "Arbitrum", "ARB"],
  ["optimism-token-unlock-calendar-alerts", "Optimism Token Unlock Calendar and Alerts", "Optimism", "OP"],
  ["aptos-token-unlock-calendar-future-signals", "Aptos Token Unlock Calendar and Future Signals", "Aptos", "APT"],
  ["sui-token-unlock-calendar-portfolio-risk", "SUI Token Unlock Calendar and Portfolio Risk", "Sui", "SUI"],
  ["sei-token-unlock-calendar-alerts", "SEI Token Unlock Calendar and Market Alerts", "Sei", "SEI"],
  ["celestia-token-unlock-calendar-supply", "Celestia Token Unlock Calendar and Supply Tracking", "Celestia", "TIA"],
  ["injective-token-unlock-calendar-signals", "Injective Token Unlock Calendar and Signals", "Injective", "INJ"],
  ["render-token-unlock-calendar-events", "Render Token Unlock Calendar and Events", "Render", "RNDR"],
  ["pepe-coin-alerts-portfolio-tracker", "PEPE Coin Alerts and Portfolio Tracker", "PEPE", "PEPE"],
  ["shiba-inu-market-alerts-portfolio", "Shiba Inu Market Alerts and Portfolio Tracking", "Shiba Inu", "SHIB"],
  ["toncoin-token-unlock-calendar-signals", "Toncoin Token Unlock Calendar and Future Signals", "Toncoin", "TON"],
  ["starknet-token-unlock-calendar-reminders", "Starknet Token Unlock Calendar and Reminders", "Starknet", "STRK"],
];

const evergreen = [
  ["best-crypto-token-unlock-calendar-app", "Best Crypto Token Unlock Calendar App for Android"],
  ["crypto-unlock-calendar-alerts-guide", "Crypto Unlock Calendar Alerts Guide"],
  ["how-to-track-token-unlocks-on-mobile", "How to Track Token Unlocks on Mobile"],
  ["token-unlock-reminder-app-android", "Token Unlock Reminder App for Android"],
  ["crypto-portfolio-risk-token-unlocks", "Crypto Portfolio Risk and Token Unlocks"],
  ["future-signals-crypto-buy-sell-pressure", "Future Signals for Crypto Buy and Sell Pressure"],
  ["crypto-market-alerts-price-targets", "Crypto Market Alerts for Price Targets"],
  ["token-unlock-calendar-for-altcoins", "Token Unlock Calendar for Altcoins"],
  ["crypto-supply-schedule-tracker", "Crypto Supply Schedule Tracker"],
  ["coin-unlock-dates-and-supply-events", "Coin Unlock Dates and Supply Events"],
  ["crypto-alert-app-for-unlock-events", "Crypto Alert App for Unlock Events"],
  ["token-unlock-analysis-for-beginners", "Token Unlock Analysis for Beginners"],
  ["crypto-events-listing-news-tracker", "Crypto Events and Listing News Tracker"],
  ["coinmarketcap-token-unlock-calendar-alternative", "CoinMarketCap Token Unlock Calendar Alternative"],
  ["free-crypto-price-alerts-and-premium-unlocks", "Free Crypto Price Alerts and Premium Unlocks"],
  ["crypto-watchlist-favorites-alerts", "Crypto Watchlist Favorites and Alerts"],
  ["android-crypto-tracker-with-unlock-calendar", "Android Crypto Tracker with Unlock Calendar"],
  ["crypto-unlock-reminders-before-events", "Crypto Unlock Reminders Before Events"],
  ["how-token-unlocks-affect-circulating-supply", "How Token Unlocks Affect Circulating Supply"],
  ["crypto-pump-dump-risk-supply-unlocks", "Crypto Pump and Dump Risk Around Supply Unlocks"],
  ["token-vesting-schedule-mobile-tracker", "Token Vesting Schedule Mobile Tracker"],
  ["crypto-news-events-and-token-unlocks", "Crypto News Events and Token Unlocks"],
  ["portfolio-tracker-for-altcoin-unlocks", "Portfolio Tracker for Altcoin Unlocks"],
  ["crypto-unlock-calendar-google-play", "Crypto Unlock Calendar on Google Play"],
  ["best-app-for-next-crypto-unlocks", "Best App for Next Crypto Unlocks"],
];

const topics = [
  ...coins.map(([slug, title, coin, symbol]) => ({ slug, title, coin, symbol, type: "coin" })),
  ...evergreen.map(([slug, title]) => ({ slug, title, coin: "crypto", symbol: "ALT", type: "guide" })),
];

while (topics.length < 100) {
  const base = evergreen[(topics.length - coins.length) % evergreen.length];
  const n = topics.length + 1;
  topics.push({
    slug: `${base[0]}-${n}`,
    title: `${base[1]}: Practical Checklist ${n}`,
    coin: "crypto",
    symbol: "ALT",
    type: "guide",
  });
}

function layout(title, description, body, canonical) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | Crypto Unlock Tracker</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" type="image/png" href="../assets/app-icon.png">
  <link rel="apple-touch-icon" href="../assets/app-icon.png">
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <header class="site-header">
    <nav class="nav">
      <a class="brand" href="../index.html"><img class="brand-mark" src="../assets/app-icon.png" alt="Crypto Unlock Tracker logo"><span>Crypto Unlock Tracker</span></a>
      <div class="nav-links">
        <a href="../index.html#features">Features</a>
        <a href="../index.html#pricing">Premium</a>
        <a href="../articles.html">Articles</a>
        <a href="../privacy.html">Privacy</a>
        <a href="../contact.html">Contact</a>
      </div>
    </nav>
  </header>
  <main class="container legal-page article-page">
    ${body}
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <span>Copyright <span data-year>2026</span> Crypto Unlock Tracker. All rights reserved.</span>
      <span><a href="../privacy.html">Privacy</a><a href="../terms.html">Terms</a><a href="../disclaimer.html">Disclaimer</a><a href="../contact.html">Contact</a></span>
    </div>
  </footer>
  <script src="../script.js"></script>
</body>
</html>
`;
}

function articleBody(topic, index) {
  const keyword = topic.type === "coin"
    ? `${topic.coin} token unlock calendar`
    : topic.title.toLowerCase();
  const premiumBullets = [
    "full token unlock calendar access",
    "past and future unlock records",
    "unlock reminders before supply events",
    "Future Signals for buy and sell pressure review",
    "portfolio tracking and allocation visibility",
    "coin events, listing news, favorites, and alerts",
  ];
  return `
    <p><a class="store-badge" href="${playUrl}" target="_blank" rel="noopener" aria-label="Get Crypto Unlock Tracker on Google Play"><img src="../assets/google-play-badge.svg" alt="Get it on Google Play"></a></p>
    <p class="eyebrow">Crypto unlock guide ${index + 1}</p>
    <h1>${escapeHtml(topic.title)}</h1>
    <p class="lead">Use Crypto Unlock Tracker to follow ${escapeHtml(keyword)}, portfolio exposure, market alerts, Future Signals, and event reminders from one Android app.</p>
    <div class="notice"><strong>Information only:</strong> This article is educational and is not financial advice, a price prediction, a wallet service, or a trading recommendation.</div>

    <h2>Why this topic matters</h2>
    <p>${escapeHtml(topic.coin)} traders often search for unlock dates, circulating supply changes, vesting schedules, exchange listings, price alerts, and simple market context before making their own research notes. A token unlock calendar does not tell anyone what to buy or sell, but it can show when additional supply may become available and when a user may want to review market conditions more carefully.</p>
    <p>Crypto Unlock Tracker is built around that workflow. Instead of jumping between many websites, users can open the app, search a coin, check unlock records, set reminders, view market fields where live data is available, and compare the unlock with their own saved portfolio exposure.</p>

    <h2>What to check before an unlock</h2>
    <p>A useful review starts with the unlock date, unlocked quantity, percentage of supply, circulating supply, total supply, and any available allocation label such as team, investors, ecosystem incentives, treasury, community, or foundation. These details help users understand the size of an unlock event compared with the existing market.</p>
    <p>The next step is market context. Volume, price movement, favorites, alerts, and Future Signals can help a user decide whether the unlock is worth monitoring closely. The app keeps this practical: it shows data points and reminders, not guaranteed outcomes.</p>

    <h2>How Crypto Unlock Tracker helps</h2>
    <ul class="list">
      ${premiumBullets.map((x) => `<li>${escapeHtml(x)}</li>`).join("\n      ")}
    </ul>
    <p>Premium Full Access is a one-time Google Play purchase. It is not a subscription and it does not require crypto payment. Free areas of the app may still show market tools, while premium tools are designed for users who want unlock calendar depth, reminders, signals, and portfolio-aware research.</p>

    <h2>Suggested workflow</h2>
    <p>First, search the coin by name or symbol. Second, open the unlock calendar and review past and future unlock records. Third, add a reminder for future unlocks that matter to you. Fourth, add the asset to your portfolio if you hold it manually and want to see exposure. Fifth, open Future Signals to review market pressure context, volume behavior, and available proof data.</p>
    <p>This workflow is useful for people searching terms like crypto unlock calendar, next token unlocks, altcoin unlock schedule, crypto portfolio tracker, price alert app, and token vesting tracker. The goal is to make research faster without pretending that one signal can predict the market.</p>

    <h2>Download the app</h2>
    <p>For the fastest mobile workflow, install Crypto Unlock Tracker from Google Play and use it as your daily crypto unlock calendar, portfolio tracker, Future Signals screen, reminders app, and market alerts tool.</p>
    <p><a class="store-badge" href="${playUrl}" target="_blank" rel="noopener" aria-label="Get Crypto Unlock Tracker on Google Play"><img src="../assets/google-play-badge.svg" alt="Get it on Google Play"></a></p>
    <p><a class="button secondary" href="../index.html#pricing">See Premium Full Access</a> <a class="button secondary" href="../disclaimer.html">Read risk disclaimer</a></p>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const articleLinks = [];
for (let i = 0; i < topics.length; i += 1) {
  const topic = topics[i];
  const file = `${topic.slug}.html`;
  const canonical = `${siteUrl}/articles/${file}`;
  const description = `${topic.title} guide for token unlock calendars, portfolio risk, Future Signals, alerts, and crypto event tracking.`;
  const html = layout(topic.title, description, articleBody(topic, i), canonical);
  fs.writeFileSync(path.join(articlesDir, file), html);
  articleLinks.push({ ...topic, file, canonical, description });
}

const articlesHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Crypto Unlock Articles | Crypto Unlock Tracker</title>
  <meta name="description" content="Read crypto token unlock calendar articles, portfolio risk guides, Future Signals explainers, price alert guides, and coin unlock research.">
  <link rel="canonical" href="${siteUrl}/articles.html">
  <link rel="icon" type="image/png" href="assets/app-icon.png">
  <link rel="apple-touch-icon" href="assets/app-icon.png">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <nav class="nav">
      <a class="brand" href="index.html"><img class="brand-mark" src="assets/app-icon.png" alt="Crypto Unlock Tracker logo"><span>Crypto Unlock Tracker</span></a>
      <div class="nav-links">
        <a href="index.html#features">Features</a>
        <a href="index.html#pricing">Premium</a>
        <a href="privacy.html">Privacy</a>
        <a href="contact.html">Contact</a>
      </div>
    </nav>
  </header>
  <main class="container legal-page">
    <p class="eyebrow">Crypto unlock SEO library</p>
    <h1>Crypto Token Unlock Calendar Articles</h1>
    <p class="lead">Educational articles about token unlock schedules, portfolio exposure, Future Signals, price alerts, coin events, and crypto reminders. Download the app for the live mobile workflow.</p>
    <p><a class="store-badge" href="${playUrl}" target="_blank" rel="noopener" aria-label="Get Crypto Unlock Tracker on Google Play"><img src="assets/google-play-badge.svg" alt="Get it on Google Play"></a></p>
    <p><a class="button secondary" href="index.html#pricing">View Premium Full Access</a></p>
    <div class="article-grid">
      ${articleLinks.map((article) => `<article class="article-tile"><h2><a href="articles/${article.file}">${escapeHtml(article.title)}</a></h2><p>${escapeHtml(article.description)}</p><a class="text-link" href="articles/${article.file}">Read guide and download app</a></article>`).join("\n      ")}
    </div>
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <span>Copyright <span data-year>2026</span> Crypto Unlock Tracker. All rights reserved.</span>
      <span><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="disclaimer.html">Disclaimer</a><a href="contact.html">Contact</a></span>
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(root, "articles.html"), articlesHtml);

const pages = [
  `${siteUrl}/`,
  `${siteUrl}/articles.html`,
  `${siteUrl}/privacy.html`,
  `${siteUrl}/terms.html`,
  `${siteUrl}/disclaimer.html`,
  `${siteUrl}/contact.html`,
  ...articleLinks.map((x) => x.canonical),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`);

console.log(`Generated ${articleLinks.length} articles, articles.html, sitemap.xml, and robots.txt`);
