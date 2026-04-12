# ARENA PIZZA KEBAB — Site Web Complet

## Structure du projet

```
arena-pizza-kebab/
├── index.html              ← Page d'accueil
├── menu.html               ← Menu complet interactif
├── cart.html               ← Panier
├── checkout.html           ← Commande / paiement
├── confirmation.html       ← Confirmation commande
├── reservation.html        ← Réservation de table
├── css/
│   └── style.css           ← Styles principal (site client)
├── js/
│   ├── data.js             ← Données du menu (PDF → JSON)
│   ├── cart.js             ← Gestion panier
│   └── main.js             ← Logique principale
└── admin/
    ├── login.html          ← Connexion admin
    ├── index.html          ← Dashboard (tableau de bord)
    ├── orders.html         ← Toutes les commandes
    ├── reservations.html   ← Gestion réservations
    ├── menu-manager.html   ← Gestion du menu
    ├── css/admin.css       ← Styles admin
    └── js/admin.js         ← Logique admin
```

## Accès Admin

- URL : `admin/login.html`
- Email : `admin@apk.fr`
- Mot de passe : `apk2024`

> ⚠️ Changez ces identifiants avant la mise en production !

## Fonctionnalités incluses

### Site Client
- Page d'accueil avec hero, promos, galerie, avis, horaires
- Menu interactif complet (toutes catégories du PDF)
- Filtre par taille pour les pizzas (Junior / Senior / Mega)
- Ajout au panier avec options (viandes, fromages, suppléments)
- Panier persistant (localStorage)
- Checkout complet (livraison / à emporter)
- Paiement par carte, PayPal, ou à la livraison
- Page de confirmation avec numéro de commande
- Formulaire de réservation

### Dashboard Admin
- Tableau de bord avec stats en temps réel (polling 30s)
- Gestion des commandes avec changement de statut
- Historique complet des commandes
- Gestion des réservations (accepter / refuser)
- Gestionnaire de menu (ajouter, modifier, activer/désactiver)
- Alertes sonores pour nouvelles commandes

## Mise en production

### Option 1 : Hébergement statique (Netlify/Vercel)
1. Glissez le dossier `arena-pizza-kebab/` sur Netlify
2. Le site est en ligne immédiatement

### Option 2 : Hébergement traditionnel (FTP)
1. Uploadez tous les fichiers sur votre serveur
2. Accédez à `index.html` dans votre navigateur

### Intégration Stripe (paiement réel)
1. Créez un compte Stripe : https://stripe.com
2. Récupérez votre clé publique
3. Dans `checkout.html`, remplacez la section carte par le SDK Stripe
4. Configurez un backend Node.js pour les Payment Intents

### Emails automatiques
Intégrez EmailJS (gratuit) pour les confirmations :
1. Créez un compte : https://emailjs.com
2. Ajoutez votre `serviceID` + `templateID` dans `checkout.html`
3. Ajoutez `<script src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>`

## Données du menu (js/data.js)
Toutes les données viennent directement du PDF fourni :
- Prix exacts du menu
- Noms exacts des plats
- Options et suppléments
- Promos (Promo 1, 2, 3, 4)

## Personnalisation rapide

### Changer les couleurs
Dans `css/style.css`, modifiez les variables CSS :
```css
:root {
  --red:  #D42B2B;   /* Rouge principal */
  --gold: #F5A623;   /* Doré accent */
}
```

### Ajouter/modifier un plat
Via le dashboard admin : `admin/menu-manager.html`

### Modifier les infos du restaurant
Dans `js/data.js` → section `info:`

---
© 2024 Arena Pizza Kebab · 88 Rue Lesage · 51100 Reims
