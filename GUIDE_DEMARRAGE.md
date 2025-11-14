# 🚀 Guide de Démarrage Rapide - Zizar

## Installation et Lancement

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

## 🎨 Personnalisation Rapide

### Informations de Contact
**Fichiers à modifier :**
- `components/sections/ContactSection.tsx` (ligne 26-38)
- `components/Footer.tsx` (ligne 30-60)

Changez l'email, le téléphone et la localisation.

### Logo et Nom
**Fichier :** `components/Navigation.tsx` (ligne 48-52)
```tsx
<span className="text-2xl font-bold">ZIZAR</span>
```
Remplacez "ZIZAR" par votre logo ou nom.

### Couleurs du Site
**Fichier :** `tailwind.config.ts` (ligne 13-35)

Modifiez les couleurs `primary` et `accent` selon votre charte graphique.

### Projets du Portfolio
**Fichier :** `components/sections/PortfolioSection.tsx` (ligne 8-45)

Ajoutez/modifiez les projets dans le tableau `projects`.

### Témoignages Clients
**Fichier :** `components/sections/TestimonialsSection.tsx` (ligne 5-33)

Ajoutez vos vrais témoignages dans le tableau `testimonials`.

### Compétences
**Fichier :** `components/sections/CompetencesSection.tsx` (ligne 6-45)

Ajustez les compétences et les pourcentages selon votre expertise.

## 📝 Articles de Blog

Pour ajouter des articles de blog :

1. Créez un dossier `app/blog/[slug]`
2. Ajoutez vos articles dans `components/sections/BlogSection.tsx`

**Exemple d'article :**
```tsx
{
  title: "Votre titre",
  excerpt: "Description courte",
  date: "2024-01-15",
  readTime: "5 min",
  category: "Technique",
  slug: "votre-slug-url"
}
```

## 🌍 SEO et Metadata

### Modifier les métadonnées
**Fichier :** `app/layout.tsx` (ligne 11-44)

Changez :
- `title` - Titre du site
- `description` - Description pour Google
- `keywords` - Mots-clés SEO
- `url` - URL de production

### Sitemap
**Fichier :** `app/sitemap.ts`

Mettez à jour l'URL de base (actuellement `https://zizar.fr`).

## 🎭 Dark Mode

Le dark mode est déjà configuré avec 3 options :
- ☀️ Mode clair
- 🌙 Mode sombre
- 💻 Automatique (suit le système)

Le bouton dans la navigation permet de basculer entre ces modes.

## 📱 Responsive Design

Le site est déjà entièrement responsive pour :
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🚀 Build de Production

### 1. Créer le build
```bash
npm run build
```

### 2. Tester le build
```bash
npm start
```

### 3. Déployer

**Recommandé : Vercel (gratuit)**
```bash
npm i -g vercel
vercel
```

**Autres options :**
- Netlify
- AWS Amplify
- Serveur Node.js classique

## 📧 Configuration Email

Pour le formulaire de contact, vous devrez :

1. Créer une API route dans `app/api/contact/route.ts`
2. Utiliser un service comme :
   - SendGrid
   - Resend
   - Nodemailer
   - AWS SES

**Exemple avec Resend :**
```bash
npm install resend
```

## 🔧 Variables d'Environnement

Copiez `.env.example` vers `.env.local` et configurez :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
NEXT_PUBLIC_CONTACT_EMAIL=votre@email.com
NEXT_TELEMETRY_DISABLED=1
```

## 🎨 Images

Placez vos images dans `public/images/`

Pour les utiliser :
```tsx
import Image from "next/image";

<Image
  src="/images/votre-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

## 📊 Analytics

Pour ajouter Google Analytics :

1. Créez `components/GoogleAnalytics.tsx`
2. Ajoutez votre ID Google Analytics
3. Importez le composant dans `app/layout.tsx`

## 🆘 Support

Pour toute question :
- Consultez le `README.md`
- Documentation Next.js : https://nextjs.org/docs
- Documentation Tailwind : https://tailwindcss.com/docs

## ✅ Checklist Avant Déploiement

- [ ] Modifier les informations de contact
- [ ] Ajouter vos vrais projets au portfolio
- [ ] Ajouter de vrais témoignages clients
- [ ] Configurer le formulaire de contact avec un service d'email
- [ ] Ajouter vos images (logo, projets, etc.)
- [ ] Mettre à jour les URLs dans sitemap.ts et robots.ts
- [ ] Configurer les variables d'environnement
- [ ] Tester sur mobile, tablet et desktop
- [ ] Optimiser les images pour le web
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Tester le build de production
- [ ] Configurer votre nom de domaine

Bon développement ! 🎉
