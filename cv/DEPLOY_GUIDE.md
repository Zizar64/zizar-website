# Guide de déploiement du CV sur un sous-domaine

Ce guide vous explique comment déployer votre CV numérique sur un sous-domaine Cloudflare Pages (par exemple `cv.zizar.fr`).

## 📋 Prérequis

- Compte Cloudflare avec un domaine configuré (zizar.fr)
- Repository Git contenant le projet (GitHub, GitLab, etc.)
- Le dossier `cv/` doit être dans le repository

## 🚀 Méthode 1: Déploiement via Cloudflare Pages Dashboard

### Étape 1: Créer un nouveau projet

1. Connectez-vous à votre dashboard Cloudflare
2. Allez dans **Pages** dans le menu latéral
3. Cliquez sur **Create a project**
4. Sélectionnez **Connect to Git**

### Étape 2: Connecter votre repository

1. Choisissez votre provider Git (GitHub)
2. Autorisez Cloudflare à accéder à vos repositories
3. Sélectionnez le repository `zizar-website`

### Étape 3: Configurer le build

**IMPORTANT**: Configurez les paramètres suivants:

- **Project name**: `zizar-cv` (ou autre nom de votre choix)
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `cv` ⚠️ **Très important!**

Cliquez sur **Advanced settings** et ajoutez:
- **Node version**: `20` ou `18`

### Étape 4: Déployer

1. Cliquez sur **Save and Deploy**
2. Cloudflare va builder et déployer votre CV
3. Une fois terminé, vous obtiendrez une URL de type `zizar-cv.pages.dev`

### Étape 5: Configurer le sous-domaine personnalisé

1. Sur la page du projet, allez dans **Custom domains**
2. Cliquez sur **Set up a custom domain**
3. Entrez `cv.zizar.fr`
4. Cloudflare configurera automatiquement les enregistrements DNS
5. Attendez quelques minutes pour la propagation DNS

## 🚀 Méthode 2: Déploiement via Wrangler CLI

### Installation de Wrangler

```bash
npm install -g wrangler
wrangler login
```

### Déploiement

```bash
cd cv
npm run build
npx wrangler pages deploy out --project-name=zizar-cv
```

## 🔧 Configuration du domaine personnalisé

Si vous utilisez Wrangler, configurez le domaine via le dashboard:

1. Allez dans **Pages** > votre projet
2. **Custom domains** > **Set up a custom domain**
3. Entrez `cv.zizar.fr`

## ✅ Vérification

Une fois déployé, votre CV sera accessible sur:
- URL Cloudflare: `https://zizar-cv.pages.dev`
- Sous-domaine personnalisé: `https://cv.zizar.fr`

## 🔄 Déploiement automatique

Cloudflare Pages déploie automatiquement à chaque `git push` sur la branche `main`.

Pour tester avant de déployer en production:
1. Créez une branche de preview
2. Poussez vos changements
3. Cloudflare créera automatiquement une preview URL

## 🐛 Résolution de problèmes

### Le build échoue

**Erreur**: `Cannot find module 'next'`
- **Solution**: Vérifiez que le Root directory est bien configuré sur `cv`

**Erreur**: `ENOENT: no such file or directory`
- **Solution**: Vérifiez que tous les fichiers sont bien committés dans Git

### Le site ne se charge pas

**Erreur**: Page blanche ou 404
- **Solution**: Vérifiez que le Build output directory est bien `out`
- Vérifiez dans `next.config.js` que `output: 'export'` est présent

### Les images ne s'affichent pas

**Erreur**: Images cassées
- **Solution**: Utilisez des chemins relatifs (`/image.png` au lieu de `./image.png`)

### DNS ne se propage pas

- Attendez 24-48h pour la propagation complète
- Utilisez `nslookup cv.zizar.fr` pour vérifier
- Videz le cache DNS: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

## 📊 Performance

Cloudflare Pages offre:
- ✅ CDN mondial (300+ villes)
- ✅ HTTPS automatique
- ✅ Bande passante illimitée
- ✅ Déploiements illimités
- ✅ Protection DDoS
- ✅ IPv6
- ✅ HTTP/3 et QUIC

## 🔒 Sécurité

- HTTPS activé par défaut
- Certificats SSL gratuits
- Protection contre les attaques DDoS
- Headers de sécurité configurables

## 📈 Analytics

Pour activer les analytics:
1. Allez dans **Analytics** dans le dashboard du projet
2. Activez **Web Analytics**
3. Copiez le script et ajoutez-le dans `app/layout.tsx` si besoin

## 🔗 Ressources

- [Documentation Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

## 💡 Conseils

1. **Testez localement** avant de déployer:
   ```bash
   cd cv
   npm run build
   npx serve out
   ```

2. **Utilisez les Preview Deployments** pour tester les changements

3. **Configurez des notifications** pour être alerté en cas d'échec de build

4. **Activez le cache** pour de meilleures performances

## 📝 Checklist de déploiement

- [ ] Repository Git configuré et à jour
- [ ] Build local réussi (`npm run build`)
- [ ] Projet Cloudflare Pages créé
- [ ] Root directory configuré sur `cv`
- [ ] Build output configuré sur `out`
- [ ] Node version définie (18 ou 20)
- [ ] Premier déploiement réussi
- [ ] Sous-domaine `cv.zizar.fr` configuré
- [ ] DNS propagé (vérifier avec `nslookup`)
- [ ] HTTPS actif
- [ ] Site accessible et fonctionnel
- [ ] Tests sur mobile/desktop
- [ ] Analytics configurés (optionnel)

---

**Dernière mise à jour**: 24 novembre 2024
