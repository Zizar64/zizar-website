# 📤 Commandes pour pousser sur GitHub

Après avoir créé le repository "zizar-website" sur GitHub, exécutez ces commandes dans le terminal :

```bash
# Ajouter le remote GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/zizar-website.git

# Renommer la branche en main (convention GitHub)
git branch -M main

# Pousser le code sur GitHub
git push -u origin main
```

## Alternative : Si vous connaissez déjà votre username GitHub

Remplacez `VOTRE_USERNAME` dans la commande ci-dessous :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/zizar-website.git
git branch -M main
git push -u origin main
```

## Après le push

Votre site sera sur : `https://github.com/VOTRE_USERNAME/zizar-website`

## 🚀 Déploiement automatique sur Vercel

1. Allez sur https://vercel.com/new
2. Connectez votre compte GitHub
3. Sélectionnez le repository `zizar-website`
4. Cliquez sur Deploy
5. Votre site sera en ligne en ~2 minutes !

Vercel va automatiquement :
- Détecter Next.js
- Installer les dépendances
- Builder le projet
- Déployer sur un domaine .vercel.app
- Activer les déploiements automatiques sur chaque push

Vous pourrez ensuite ajouter votre propre domaine (zizar.fr) dans les paramètres Vercel.
