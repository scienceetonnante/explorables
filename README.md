# Explorables - Simulations Scientifiques Interactives

Une collection de simulations scientifiques interactives pour explorer la physique, la biologie et d'autres domaines scientifiques.

## 🚀 Déploiement

Ce site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main`.

URL de production : `https://[votre-username].github.io/explorables/`

## 📁 Structure du Projet

```
explorables/
├── index.html              # Page d'accueil principale
├── manifest.json           # Liste des simulations disponibles
├── css/
│   └── styles.css          # Styles de la page d'accueil
├── js/
│   └── main.js             # Logique d'auto-découverte
├── pendulum/               # Exemple de simulation
│   ├── index.html          # Page de simulation
│   └── thumbnail.jpg       # Miniature (400x300px)
└── ... (autres simulations)
```

## ➕ Ajouter une Nouvelle Simulation

### 1. Créer un nouveau dossier

```bash
mkdir ma-simulation
cd ma-simulation
```

### 2. Créer les fichiers requis

- `index.html` - Votre simulation interactive
- `thumbnail.jpg` ou `thumbnail.png` - Image de prévisualisation (recommandé : 400x300px)

### 3. Ajouter à manifest.json

Ajoutez votre simulation dans le fichier `manifest.json` :

```json
{
  "simulations": [
    {
      "id": "ma-simulation",
      "title": "Titre de Ma Simulation",
      "description": "Une brève description de ce que fait votre simulation",
      "thumbnail": "thumbnail.jpg",
      "tags": ["physics", "biology", "mathematics", "chemistry"],
      "date": "2025-01-15"
    }
  ]
}
```

### 4. Commit et Push

```bash
git add .
git commit -m "feat: add new simulation - [nom]"
git push origin main
```

Votre simulation sera automatiquement déployée sur GitHub Pages en quelques secondes !

## 🏷️ Tags Disponibles

- `physics` - Physique
- `biology` - Biologie
- `mathematics` - Mathématiques
- `chemistry` - Chimie
- `astronomy` - Astronomie
- `mechanics` - Mécanique
- `optics` - Optique
- `thermodynamics` - Thermodynamique

## 🔧 Configuration GitHub Pages

### Première Configuration

1. Allez dans **Settings** > **Pages** de votre dépôt GitHub
2. Sous **Source**, sélectionnez **GitHub Actions**
3. Le déploiement se fera automatiquement après chaque push sur `main`

### Configuration du Sous-domaine

Pour utiliser `explorables.scienceetonnante.com` :

1. Dans **Settings** > **Pages**, sous **Custom domain**, entrez : `explorables.scienceetonnante.com`
2. Chez votre hébergeur DNS (OVH), ajoutez un enregistrement CNAME :
   ```
   Type: CNAME
   Nom: explorables
   Valeur: [votre-username].github.io
   ```
3. Attendez la propagation DNS (quelques minutes à quelques heures)
4. GitHub générera automatiquement un certificat SSL

## 🛠️ Développement Local

Pour tester localement :

```bash
# Option 1 : Python
python -m http.server 8000

# Option 2 : Node.js
npx serve

# Option 3 : PHP
php -S localhost:8000
```

Puis ouvrez : `http://localhost:8000`

## 📝 Exemples de Simulations

### Simulation Simple (HTML + Canvas)

Voir `pendulum/index.html` pour un exemple complet utilisant Canvas API.

### Avec Bibliothèques Externes

Vous pouvez utiliser des bibliothèques comme :
- **p5.js** - Pour le dessin et l'interactivité
- **Three.js** - Pour les simulations 3D
- **Chart.js** - Pour les graphiques
- **D3.js** - Pour les visualisations de données

Exemple avec p5.js :

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.js"></script>
</head>
<body>
    <script>
        function setup() {
            createCanvas(600, 600);
        }

        function draw() {
            background(220);
            // Votre simulation ici
        }
    </script>
</body>
</html>
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche (`git checkout -b feature/ma-simulation`)
3. Commit vos changements (`git commit -m 'feat: add simulation'`)
4. Push vers la branche (`git push origin feature/ma-simulation`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet fait partie de [Science Étonnante](https://www.scienceetonnante.com)

---

**Note** : Ce projet utilise GitHub Pages pour l'hébergement. Toute modification sur la branche `main` déclenchera un déploiement automatique.
