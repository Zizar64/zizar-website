# Zizar - Site Vitrine

Site vitrine moderne et performant pour Zizar, spécialiste en ingénierie audiovisuelle et systèmes IP.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations fluides
- **React Hook Form + Zod** - Gestion de formulaires avec validation
- **Lucide React** - Icônes modernes
- **next-themes** - Dark mode / Light mode

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Mode sombre/clair avec toggle
- ✅ Animations fluides et professionnelles
- ✅ SEO optimisé (metadata, sitemap, robots.txt)
- ✅ Performance optimisée
- ✅ Formulaire de contact avec validation
- ✅ Section portfolio avec filtres
- ✅ Section blog
- ✅ Section témoignages clients
- ✅ Navigation sticky avec effet de scroll

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

## 🌐 Déploiement

Le site est optimisé pour être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Tout hébergeur supportant Node.js

## 📝 Personnalisation

### Modifier les informations de contact
Éditez `components/sections/ContactSection.tsx` et `components/Footer.tsx`

### Ajouter des projets au portfolio
Éditez le tableau `projects` dans `components/sections/PortfolioSection.tsx`

### Ajouter des témoignages
Éditez le tableau `testimonials` dans `components/sections/TestimonialsSection.tsx`

### Modifier les compétences
Éditez le tableau `competences` dans `components/sections/CompetencesSection.tsx`

### Changer les couleurs
Modifiez `tailwind.config.ts` pour personnaliser la palette de couleurs

## 🎨 Structure du projet

```
Site_Zizar/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   ├── sitemap.ts         # Génération du sitemap
│   ├── robots.ts          # Configuration robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # Composants React
│   ├── sections/         # Sections de la page
│   ├── ui/              # Composants UI réutilisables
│   ├── Navigation.tsx   # Navigation principale
│   ├── Footer.tsx       # Pied de page
│   └── ThemeProvider.tsx # Provider dark mode
├── public/               # Assets statiques
│   └── images/          # Images du site
└── lib/                 # Utilitaires et helpers
```

## 🔧 Configuration SEO

Le SEO est configuré dans :
- `app/layout.tsx` - Metadata globale
- `app/sitemap.ts` - Sitemap XML
- `app/robots.ts` - Règles pour les robots
- `app/manifest.ts` - PWA manifest

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1920px+)

## ⚡ Performance

Optimisations incluses :
- Images optimisées avec next/image
- Code splitting automatique
- CSS optimisé avec Tailwind
- Lazy loading des composants
- Compression des assets
- Cache optimisé

## 🎯 SEO & Analytics

Pour ajouter Google Analytics :
1. Créer un composant `GoogleAnalytics.tsx`
2. L'importer dans `app/layout.tsx`

## 📄 License

© 2024 Zizar. Tous droits réservés.
