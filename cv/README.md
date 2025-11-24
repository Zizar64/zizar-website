# CV Numérique - Lucas Izard

CV numérique professionnel développé avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## 🎯 Caractéristiques

- ✅ Design moderne et responsive
- ✅ Dark/Light mode avec next-themes
- ✅ Animations fluides avec Framer Motion
- ✅ Export statique pour hébergement sur CDN
- ✅ SEO optimisé
- ✅ Impression PDF optimisée
- ✅ Téléchargement du CV PDF
- ✅ Style cohérent avec le site principal Zizar

## 🏗️ Stack Technique

- **Framework**: Next.js 14.2 avec App Router
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Theme**: next-themes

## 📂 Structure

```
cv/
├── app/
│   ├── layout.tsx          # Layout principal avec metadata
│   ├── page.tsx            # Page principale du CV
│   └── globals.css         # Styles globaux
├── components/
│   ├── Header.tsx          # En-tête avec toggle dark mode
│   ├── ThemeProvider.tsx   # Provider de thème
│   └── sections/           # Sections du CV
│       ├── HeroSection.tsx
│       ├── ContactSection.tsx
│       ├── ExperienceSection.tsx
│       ├── EducationSection.tsx
│       ├── SkillsSection.tsx
│       ├── CertificationsSection.tsx
│       └── LanguagesSection.tsx
├── lib/
│   └── utils.ts            # Utilitaires (cn, etc.)
├── public/
│   └── CV.PDF              # CV au format PDF
└── package.json
```

## 🚀 Installation

```bash
cd cv
npm install
```

## 💻 Développement

```bash
npm run dev
```

Le CV sera accessible sur [http://localhost:3001](http://localhost:3001)

## 🔨 Build

```bash
npm run build
```

Le build génère un dossier `out/` contenant les fichiers statiques.

## 📦 Déploiement

### Option 1: Cloudflare Pages (Sous-domaine)

1. **Créer un nouveau projet Cloudflare Pages**
   - Connecter le repository Git
   - Sélectionner le dossier `cv/` comme root directory
   - Build command: `npm run build`
   - Build output: `out`

2. **Configurer le sous-domaine**
   - Aller dans Settings > Custom domains
   - Ajouter `cv.zizar.fr` comme domaine personnalisé
   - Cloudflare configurera automatiquement les enregistrements DNS

### Option 2: Déploiement manuel

1. Build le projet:
   ```bash
   npm run build
   ```

2. Uploader le contenu du dossier `out/` sur votre hébergement

3. Configurer le sous-domaine `cv.zizar.fr` pour pointer vers ce dossier

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `app/globals.css`:
- Primary: Bleu (#0ea5e9)
- Accent: Violet/Rose (#d946ef)

### Ajouter une section

1. Créer un nouveau composant dans `components/sections/`
2. Importer et ajouter dans `app/page.tsx`

### Modifier le contenu

Le contenu est directement dans les composants sections. Pour mettre à jour:
- **Expériences**: `components/sections/ExperienceSection.tsx`
- **Formations**: `components/sections/EducationSection.tsx`
- **Compétences**: `components/sections/SkillsSection.tsx`
- **Certifications**: `components/sections/CertificationsSection.tsx`

## 📱 Responsive

Le CV est entièrement responsive:
- **Mobile**: Layout en colonne unique
- **Tablet**: Layout en 2 colonnes
- **Desktop**: Layout complet avec timeline

## 🖨️ Impression

Le CV est optimisé pour l'impression:
- Le header et le footer sont masqués (classe `.no-print`)
- Les couleurs sont adaptées pour l'impression
- Format A4 avec marges de 1cm

## 🔗 Liens

- **Site principal**: https://zizar-website.pages.dev
- **CV numérique**: https://cv.zizar.fr (à configurer)
- **Repository**: https://github.com/Zizar64/zizar-website

## 📝 Licence

© 2024 Lucas Izard - Tous droits réservés
