# Cloudflare worker to optimize content
This site is hosted behind Cloudflare.

`proxy.ts` handles the different sponsored links in the site properly.

## Deployment

```bash
$ npm install
$ npx wrangler login
```

### Testing environment

```bash
$ npx wrangler deploy
```

### Production

```bash
$ npx wrangler deploy --env production
```
