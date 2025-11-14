# 🤖 Claude Code - Documentation du Projet Zizar

## 📋 Vue d'ensemble du projet

**Nom** : Site vitrine Zizar
**Type** : Site vitrine professionnel
**Client** : Zizar - Freelance en ingénierie audiovisuelle
**Stack** : Next.js 14, TypeScript, Tailwind CSS, Framer Motion
**Repository** : https://github.com/Zizar64/zizar-website
**Status** : ✅ En production sur Cloudflare Pages

---

## 🎯 Objectifs du projet

Créer un site vitrine moderne, rapide et responsive pour présenter :
- Services d'ingénierie audiovisuelle
- Expertise en vidéo/audio sur IP (ST 2110, NDI, AES67, DANTE)
- Certifications (AWS Solution Architect, DANTE Level 3)
- Portfolio de projets
- Blog technique
- Formulaire de contact

---

## 🏗️ Architecture technique

### Framework & Outils
- **Next.js 14.2** avec App Router
- **TypeScript** pour le typage statique
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Hook Form + Zod** pour la validation de formulaires
- **Lucide React** pour les icônes
- **next-themes** pour le dark/light mode

### Configuration spécifique

**Export statique activé** (`output: 'export'` dans `next.config.js`)
- Optimisé pour Cloudflare Pages
- Pas de fonctionnalités serveur (API routes)
- 100% statique, génération au build time

**Build output** : Dossier `out/`

---

## 📂 Structure du projet

```
Site_Zizar/
├── app/
│   ├── layout.tsx              # Layout principal avec metadata SEO
│   ├── page.tsx                # Page d'accueil
│   ├── globals.css             # Styles globaux et variables CSS
│   ├── sitemap.ts              # Génération du sitemap XML
│   ├── robots.ts               # Configuration robots.txt
│   └── manifest.ts             # PWA manifest
│
├── components/
│   ├── sections/               # Sections de la page d'accueil
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CompetencesSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                     # Composants UI réutilisables
│   │   └── Button.tsx
│   ├── Navigation.tsx          # Navigation avec dark mode toggle
│   ├── Footer.tsx              # Pied de page
│   └── ThemeProvider.tsx       # Provider next-themes
│
├── lib/
│   └── utils.ts                # Utilitaires (cn, formatDate, slugify)
│
├── public/                     # Assets statiques
│   └── images/                 # Images (à ajouter par le client)
│
└── Documentation/
    ├── README.md               # Documentation principale
    ├── GUIDE_DEMARRAGE.md      # Guide de démarrage rapide
    ├── PROCHAINES_ETAPES.md    # Améliorations futures
    ├── DEPLOY_CLOUDFLARE.md    # Guide de déploiement Cloudflare
    └── CLOUDFLARE_FIX.md       # Fix configuration Cloudflare
```

---

## 🎨 Design & Fonctionnalités

### Thème & Couleurs
- **Primary** : Bleu (#0ea5e9)
- **Accent** : Violet/Rose (#d946ef)
- **Dark/Light mode** : 3 modes (clair, sombre, automatique)
- **Transitions** : Fluides avec Framer Motion

### Sections implémentées
1. ✅ **Hero Section** - Présentation avec animations
2. ✅ **Services** - 3 types de prestations
3. ✅ **Compétences** - Barres de progression animées
4. ✅ **Certifications** - AWS, DANTE, Formation
5. ✅ **Portfolio** - 4 projets avec filtres par catégorie
6. ✅ **Témoignages** - 3 témoignages clients
7. ✅ **Blog** - 3 articles exemples
8. ✅ **Contact** - Formulaire avec validation

### Optimisations
- ✅ SEO : Metadata complète, sitemap, robots.txt
- ✅ Performance : 161 kB First Load JS
- ✅ Responsive : Mobile, tablet, desktop
- ✅ Accessibilité : Structure sémantique

---

## 🚀 Déploiement

### Plateforme : Cloudflare Pages

**URL de production** : https://zizar-website.pages.dev

**Configuration** :
- Build command : `npm run build`
- Build output : `out`
- Node version : 20
- Deploy : Automatique sur chaque `git push`

### Processus de déploiement
1. `git push` sur la branche `main`
2. Cloudflare détecte le push
3. Build automatique (~2-3 min)
4. Déploiement sur CDN mondial
5. Site en ligne

---

## 📝 Décisions techniques

### Pourquoi Next.js export statique ?
- ✅ Site vitrine = pas besoin de serveur
- ✅ Performance maximale
- ✅ Hébergement gratuit illimité
- ✅ CDN mondial Cloudflare
- ✅ Pas de coûts d'infrastructure

### Pourquoi Cloudflare Pages vs Vercel ?
- ✅ Bande passante illimitée (vs 100GB/mois Vercel)
- ✅ Déploiements illimités
- ✅ Protection DDoS incluse
- ✅ Analytics gratuits
- ✅ Mêmes performances

### Pourquoi Tailwind CSS ?
- ✅ Développement rapide
- ✅ Design system cohérent
- ✅ Purge CSS automatique = petite taille
- ✅ Dark mode intégré
- ✅ Responsive facile

---

## 🔧 Commandes utiles

### Développement
```bash
npm run dev          # Serveur de dev sur http://localhost:3000
npm run build        # Build de production
npm run lint         # Linter ESLint
```

### Git & Déploiement
```bash
git add .
git commit -m "Description"
git push             # → Déploie automatiquement sur Cloudflare
```

---

## 📋 TODO / Prochaines étapes

### Contenu à personnaliser
- [ ] Remplacer les informations de contact (email, téléphone)
- [ ] Ajouter le vrai logo dans la navigation
- [ ] Ajouter de vraies photos de projets
- [ ] Remplacer les projets exemples par de vrais projets
- [ ] Ajouter de vrais témoignages clients
- [ ] Modifier les pourcentages de compétences selon l'expertise réelle

### Fonctionnalités à ajouter (optionnel)
- [ ] Intégrer un service email pour le formulaire de contact (Resend, SendGrid)
- [ ] Implémenter le système de blog avec MDX
- [ ] Ajouter Google Analytics ou Plausible
- [ ] Créer des pages individuelles pour les projets du portfolio
- [ ] Ajouter un CMS headless (Sanity, Strapi) pour gérer le contenu
- [ ] Configurer le domaine personnalisé zizar.fr

### Optimisations futures
- [ ] Optimiser les images (WebP, AVIF)
- [ ] Ajouter des tests unitaires (Jest)
- [ ] Ajouter des tests E2E (Playwright)
- [ ] Améliorer l'accessibilité (audit a11y)
- [ ] Configurer PWA complète avec Service Worker

---

## 🐛 Problèmes connus & Solutions

### 1. Erreur Cloudflare "Missing entry-point to Worker script"
**Problème** : Cloudflare essaie d'exécuter `wrangler deploy`
**Solution** : Supprimer le "Deploy command" dans les settings Cloudflare Pages
**Référence** : `CLOUDFLARE_FIX.md`

### 2. Build error "border-border class does not exist"
**Problème** : Tailwind ne reconnaît pas les classes custom
**Solution** : Utiliser `hsl(var(--border))` au lieu de `@apply border-border`
**Commit** : `Configure static export for Cloudflare Pages`

---

## 📚 Ressources & Documentation

### Documentation officielle
- Next.js : https://nextjs.org/docs
- Tailwind CSS : https://tailwindcss.com/docs
- Framer Motion : https://www.framer.com/motion/
- Cloudflare Pages : https://developers.cloudflare.com/pages/

### Guides du projet
- `README.md` - Documentation complète
- `GUIDE_DEMARRAGE.md` - Démarrage rapide
- `PROCHAINES_ETAPES.md` - Roadmap et améliorations
- `DEPLOY_CLOUDFLARE.md` - Guide de déploiement

---

## 👤 Informations client

**Activité** : Zizar - Freelance en ingénierie audiovisuelle

**Spécialités** :
- Vidéo/Audio sur IP (ST 2110, NDI, AES67)
- SMPTE ST 2110
- DANTE Level 3
- AWS Solution Architect
- Workflows audiovisuels et médias numériques

**Expérience** :
- Broadcasters nationaux et internationaux
- Production vidéo mobile
- Régies finales et studios TV
- Infrastructures IP complexes

---

## 📊 Statistiques du projet

**Créé le** : 14 novembre 2024
**Version** : 1.0.0
**Commits** : 3
**Fichiers** : 34
**Lignes de code** : ~8600
**Build time** : ~45s
**First Load JS** : 161 kB

---

## 🔄 Historique des versions

### v1.0.0 (2024-11-14)
- ✅ Création du projet Next.js 14
- ✅ Configuration Tailwind CSS + Dark mode
- ✅ Implémentation de toutes les sections
- ✅ Formulaire de contact avec validation
- ✅ SEO optimisé
- ✅ Export statique pour Cloudflare Pages
- ✅ Premier déploiement sur Cloudflare Pages

---

**Dernière mise à jour** : 14 novembre 2024
**Par** : Claude Code
**Contact projet** : https://github.com/Zizar64/zizar-website
