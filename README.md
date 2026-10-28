# ekmon.se

Source code for [ekmon.se](https://ekmon.se), the website of Ekmon AB – a Norrköping-based consultancy in music, IT and accounting that invests in sustainable ideas.

Built with [Svelte 3](https://svelte.dev) and [Rollup](https://rollupjs.org). Swedish and English text lives in `src/services/i18n.js`; contact details in `src/config.js`.

## Development

```bash
npm install
npm run dev      # http://localhost:5000 with live reload
npm run build    # production build into public/
```

## Deploying

The site is plain static files. After `npm run build`, upload the contents of `public/` (or the mirrored `ftpserver/` folder) to the web host.

**Never commit FTP passwords or other credentials.** Keep them in your FTP client, or in a local `.env` / `sftp.json`, which `.gitignore` excludes.

## Structure

```
src/
  App.svelte                  page layout
  config.js                   email and LinkedIn links
  services/i18n.js            all text, SV + EN
  components/
    home/                     header, mobile menu, hero
    about/                    about section
    clientwork/               project cards
    footer/                   contact + footer
public/                       static assets and build output
```

## Third-party assets

Fonts: Oranienbaum, Yantramanav and Oswald (SIL Open Font License, via Google Fonts). Project logos and photos belong to their respective companies.
