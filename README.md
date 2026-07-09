# Crypto Unlock Tracker Website

Static landing and legal pages for Cloudflare Pages.

## Cloudflare Pages Setup

1. Push this folder to a new GitHub repository.
2. In Cloudflare, open Workers & Pages.
3. Click Create application, then Pages, then Connect to Git.
4. Select the repository.
5. Use these build settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
Root directory: /
```

If you keep this site inside a larger repository, set the root directory to:

```text
crypto-unlock-tracker-site
```

6. After deployment, add your custom domain in the Pages project settings.
   Recommended domain: `cryptounlockcalendar.vortixvpn.com`
7. Play Store listing:
   `https://play.google.com/store/apps/details?id=com.tradingradar.app`

## Pages Included

- `index.html`
- `privacy.html`
- `terms.html`
- `disclaimer.html`
- `contact.html`

Before production, verify the developer name, support email, and business details match the Play Console account.
