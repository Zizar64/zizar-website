# 🤖 Claude Code - Documentation du Projet Zizar

## 📋 Vue d'ensemble du projet

**Nom** : Site vitrine Zizar + CV Numérique
**Type** : Site vitrine professionnel + Application CV
**Client** : Lucas Izard - Ingénieur Broadcast
**Stack** : Next.js 14, TypeScript, Tailwind CSS, Framer Motion
**Repository** : https://github.com/Zizar64/zizar-website
**Status** : ✅ Site en production sur Cloudflare Pages | 🚀 CV prêt pour déploiement

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

## 📄 CV Numérique (Nouveau - Nov 2024)

### Vue d'ensemble
Application Next.js dédiée pour un CV numérique professionnel, déployable sur un sous-domaine `cv.zizar.fr`.

**Localisation** : `cv/` (dossier séparé dans le repository)
**Port de dev** : http://localhost:3001
**Build output** : `cv/out/`
**Status** : ✅ Prêt pour déploiement

### Structure du CV
```
cv/
├── app/
│   ├── layout.tsx              # Layout avec SEO et footer
│   ├── page.tsx                # Page principale du CV
│   └── globals.css             # Styles identiques au site principal
│
├── components/
│   ├── Header.tsx              # Header avec dark mode, download PDF, print
│   ├── ThemeProvider.tsx       # Provider next-themes
│   └── sections/               # 8 sections du CV
│       ├── HeroSection.tsx                    # Présentation avec badges
│       ├── ContactSection.tsx                 # Contact (sans âge/adresse)
│       ├── ExperienceSection.tsx              # Expériences principales (timeline)
│       ├── AdditionalExperiencesSection.tsx   # Expériences complémentaires
│       ├── EducationSection.tsx               # Formations
│       ├── SkillsSection.tsx                  # Protocoles avec jauges %
│       ├── CertificationsSection.tsx          # 8 certifications
│       └── LanguagesSection.tsx               # Langues avec barres
│
├── lib/
│   └── utils.ts                # Utilitaires (cn, etc.)
│
├── public/
│   └── CV.PDF                  # CV au format PDF
│
├── package.json
├── next.config.js              # Export statique configuré
├── tailwind.config.ts          # Même config que le site principal
├── README.md                   # Documentation du CV
└── DEPLOY_GUIDE.md             # Guide de déploiement détaillé
```

### Sections du CV

1. **Hero Section**
   - Titre : Lucas Izard - Ingénieur Broadcast
   - Description professionnelle
   - 4 badges : +5 ans d'expérience, Infrastructures IP, AWS Certified, DANTE Level 3

2. **Contact**
   - ✅ Email (cliquable)
   - ✅ Téléphone (cliquable)
   - ✅ Localisation (Greater Paris Metropolitan Region)
   - ✅ Permis (A, B, C)
   - ✅ LinkedIn (lien cliquable, 500+ connexions)
   - ❌ Âge (supprimé)
   - ❌ Adresse complète (supprimée)

3. **Expériences Professionnelles** (Timeline avec alternance gauche/droite)
   - Chargé d'exploitation - AMP Visual TV (Depuis Juin 2024)
   - INGÉNIEUR Intégration & Support - CANAL+ (Fev 2024)
   - AUDIO SYSTEM ENGINEER - WARNER BROS (Oct 2023 - Fev 2024)
   - BROADCAST SUPPORT ENGINEER - Eurosport (Sept 2022 - Oct 2023)
   - BROADCAST ENGINEER JR - QVEST (2021 - 2022)
   - RESPONSABLE TECHNIQUE - LA RUCHE (2020 - 2021)
   - Technicien Audiovisuel - Intermitent (2019 - 2021)

4. **Expériences Complémentaires** (Nouveau - Grille condensée)
   - **Statistiques** : 24+ missions, 50+ événements, 30+ personnes formées
   - **6 expériences** affichées en format compact
   - Démontre le parcours depuis le début de carrière
   - Format carte avec hover effects

5. **Formations**
   - Licence W.A.M.N - IUT de Bayonne (2021)
   - BTS AUDIOVISUEL SON (MAJOR) - BTS de Bayonne (2019)
   - BAC SCIENTIFIQUE - Lycée Jean Vigo (2016)

6. **Protocoles & Standards** (Avec jauges de pourcentage)
   - **Audio IP** : AES67 (95%), DANTE (98%), SIP (85%)
   - **Video IP** : SMPTE2110 (95%), NDI (90%), IPMX (60%)
   - **INTERCOM** : RTS (85%), RIEDEL (90%)
   - **Cloud** : AWS EC2 (80%), AWS S3 (85%), AWS Networking (75%)
   - **Infrastructure** : TCP/IP (95%), VLAN (90%), QoS (85%), Virtualisation (80%)
   - Jauges animées avec Framer Motion

7. **Certifications** (8 certifications affichées)
   - ✅ DANTE Level 3 (Janvier 2022)
   - ✅ Scality Advanced Operations (Décembre 2021)
   - 🔄 CCNA Routing & Switching (En préparation - Objectif 2025)
   - 🔄 AWS Solutions Architect (Associate - Sept 2025)
   - 🔄 AWS Cloud Practitioner (Foundational - Août 2025)
   - 🔄 AWS AI Practitioner (Foundational - Jan 2025)

8. **Langues**
   - Français (100%) - Langue maternelle
   - Anglais (80%) - B2 TOEIC | Pratique professionnelle quotidienne
   - Espagnol (40%) - A2

### Fonctionnalités du CV

- ✅ **Dark/Light Mode** : Toggle dans le header
- ✅ **Téléchargement PDF** : Bouton dans le header
- ✅ **Impression optimisée** : Header/footer masqués, format A4
- ✅ **Responsive complet** : Mobile, tablet, desktop
- ✅ **Animations Framer Motion** : Au scroll et au chargement
- ✅ **SEO optimisé** : Metadata complète
- ✅ **Performance** : 130 kB First Load JS
- ✅ **Style cohérent** : Identique au site principal (bleu/violet)

### Commandes CV

```bash
# Développement
cd cv
npm run dev          # http://localhost:3001

# Build
npm run build        # Génère cv/out/

# Linter
npm run lint
```

### Déploiement CV sur Cloudflare Pages

**Option recommandée** : Sous-domaine `cv.zizar.fr`

1. **Créer un nouveau projet Cloudflare Pages**
   - Root directory: `cv`
   - Build command: `npm run build`
   - Build output: `out`
   - Node version: 20

2. **Configurer le domaine personnalisé**
   - Ajouter `cv.zizar.fr` dans Custom domains
   - DNS automatiquement configuré par Cloudflare

3. **Déploiement automatique**
   - Git push → Build → Déploiement

**Documentation complète** : `cv/DEPLOY_GUIDE.md`

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

### Site vitrine - Contenu à personnaliser
- [ ] Remplacer les informations de contact (email, téléphone)
- [ ] Ajouter le vrai logo dans la navigation
- [ ] Ajouter de vraies photos de projets
- [ ] Remplacer les projets exemples par de vrais projets
- [ ] Ajouter de vrais témoignages clients
- [ ] Modifier les pourcentages de compétences selon l'expertise réelle

### CV Numérique - Déploiement
- [ ] Créer un projet Cloudflare Pages pour le CV
- [ ] Configurer le sous-domaine cv.zizar.fr
- [ ] Tester le déploiement automatique
- [ ] Vérifier l'accessibilité du PDF en production
- [ ] Partager le lien du CV sur LinkedIn

### CV Numérique - Améliorations optionnelles
- [ ] Ajouter un système de tracking des vues (Plausible, Analytics)
- [ ] Créer une version multi-langues (EN/FR)
- [ ] Ajouter une section "Projets" avec détails techniques
- [ ] Intégrer les recommandations LinkedIn
- [ ] Ajouter un QR code généré dynamiquement

### Fonctionnalités à ajouter (optionnel)
- [ ] Intégrer un service email pour le formulaire de contact (Resend, SendGrid)
- [ ] Implémenter le système de blog avec MDX
- [ ] Ajouter Google Analytics ou Plausible sur le site principal
- [ ] Créer des pages individuelles pour les projets du portfolio
- [ ] Ajouter un CMS headless (Sanity, Strapi) pour gérer le contenu
- [ ] Configurer le domaine personnalisé zizar.fr

### Optimisations futures
- [ ] Optimiser les images (WebP, AVIF)
- [ ] Ajouter des tests unitaires (Jest) pour le site et le CV
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

### Site Principal
**Créé le** : 14 novembre 2024
**Version** : 1.0.0
**Fichiers** : 34
**Lignes de code** : ~8600
**Build time** : ~45s
**First Load JS** : 161 kB

### CV Numérique
**Créé le** : 24 novembre 2024
**Version** : 1.1.0
**Fichiers** : 20
**Lignes de code** : ~3500
**Build time** : ~35s
**First Load JS** : 130 kB
**Sections** : 8

---

## 🔄 Historique des versions

### v1.1.0 (2024-11-24) - CV Numérique
- ✅ Création du dossier `cv/` avec application Next.js dédiée
- ✅ 8 sections complètes : Hero, Contact, Expériences, Expériences Complémentaires, Formations, Protocoles, Certifications, Langues
- ✅ Intégration des informations LinkedIn (500+ connexions)
- ✅ Jauges de pourcentage animées pour les compétences techniques
- ✅ Section "Expériences Complémentaires" avec statistiques
- ✅ 8 certifications détaillées (certifiées + en préparation)
- ✅ Suppression âge et adresse complète (remplacés par localisation région)
- ✅ Fonctionnalités : Dark mode, Download PDF, Impression optimisée
- ✅ Documentation complète : README.md et DEPLOY_GUIDE.md
- ✅ Style cohérent avec le site principal
- ✅ Prêt pour déploiement sur cv.zizar.fr

### v1.0.0 (2024-11-14)
- ✅ Création du projet Next.js 14
- ✅ Configuration Tailwind CSS + Dark mode
- ✅ Implémentation de toutes les sections
- ✅ Formulaire de contact avec validation
- ✅ SEO optimisé
- ✅ Export statique pour Cloudflare Pages
- ✅ Premier déploiement sur Cloudflare Pages

---

**Dernière mise à jour** : 24 novembre 2024
**Par** : Claude Code
**Contact projet** : https://github.com/Zizar64/zizar-website
