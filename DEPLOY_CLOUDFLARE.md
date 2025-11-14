# 🔶 Déploiement sur Cloudflare Pages

## Option 1 : Export statique (Recommandé pour ce projet)

Votre site est parfait pour un export statique car il n'utilise pas de fonctionnalités serveur.

### 1. Modifier next.config.js

Ajoutez `output: 'export'` :

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Active l'export statique
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
  },
};

module.exports = nextConfig;
```

### 2. Modifier package.json

Ajoutez un script build pour Cloudflare :

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "build:cloudflare": "next build && touch out/.nojekyll",
  "start": "next start",
  "lint": "next lint"
}
```

### 3. Configuration Cloudflare Pages

**Dans le dashboard Cloudflare :**
- **Build command** : `npm run build`
- **Build output directory** : `out`
- **Root directory** : (laissez vide)
- **Environment variables** :
  - `NODE_VERSION` = `20`

### 4. Déployer

- Allez sur https://dash.cloudflare.com/
- **Workers & Pages** → **Create application** → **Pages**
- **Connect to Git** → Sélectionnez `zizar-website`
- Utilisez la configuration ci-dessus
- **Save and Deploy**

---

## Option 2 : Avec @cloudflare/next-on-pages (Si vous avez besoin des fonctionnalités serveur)

### 1. Installer le package

```bash
npm install --save-dev @cloudflare/next-on-pages
```

### 2. Modifier package.json

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "pages:build": "npx @cloudflare/next-on-pages",
  "preview": "npm run pages:build && wrangler pages dev",
  "deploy": "npm run pages:build && wrangler pages deploy",
  "start": "next start",
  "lint": "next lint"
}
```

### 3. Configuration Cloudflare Pages

- **Build command** : `npx @cloudflare/next-on-pages`
- **Build output directory** : `.vercel/output/static`
- **Environment variables** :
  - `NODE_VERSION` = `20`

---

## 🎯 Recommandation

Pour votre site vitrine Zizar, **utilisez l'Option 1 (export statique)** car :
- ✅ Plus rapide
- ✅ Plus simple
- ✅ Moins de coûts
- ✅ Parfait pour un site vitrine
- ✅ Votre site n'utilise pas de fonctionnalités serveur (API routes, etc.)

---

## 🌐 Après le déploiement

Votre site sera accessible sur : `https://zizar-website.pages.dev`

### Ajouter un domaine personnalisé

1. Dans Cloudflare Pages → Votre projet
2. **Custom domains** → **Set up a custom domain**
3. Ajoutez `zizar.fr` et `www.zizar.fr`
4. Cloudflare configure automatiquement le DNS et le SSL

---

## 🔄 Déploiements automatiques

Chaque fois que vous faites un `git push`, Cloudflare redéploie automatiquement !

```bash
git add .
git commit -m "Mes modifications"
git push
# → Cloudflare Pages redéploie automatiquement
```

---

## 📊 Avantages Cloudflare Pages

- ✅ **Gratuit illimité** (contrairement à Vercel qui limite à 100GB/mois)
- ✅ **CDN mondial** ultra-rapide
- ✅ **SSL automatique**
- ✅ **DDoS protection**
- ✅ **Analytics gratuits**
- ✅ **Rollback facile** vers versions précédentes
