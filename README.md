# Explorables - Interactive Scientific Simulations

A collection of interactive scientific simulations to explore physics, biology, and other scientific fields.

## 🚀 Deployment

This site is automatically deployed to GitHub Pages with every push to the `main` branch.

Production URL: `https://[your-username].github.io/explorables/`

## 📁 Project Structure

```
explorables/
├── index.html              # Main homepage
├── manifest.json           # List of available simulations
├── css/
│   └── styles.css          # Homepage styles
├── js/
│   └── main.js             # Auto-discovery logic
├── pendulum/               # Example simulation
│   ├── index.html          # Simulation page
│   └── thumbnail.jpg       # Thumbnail (400x300px)
└── ... (other simulations)
```

## ➕ Adding a New Simulation

### 1. Create a new folder

```bash
mkdir my-simulation
cd my-simulation
```

### 2. Create required files

- `index.html` - Your interactive simulation
- `thumbnail.jpg` or `thumbnail.png` - Preview image (recommended: 400x300px)

### 3. Add to manifest.json

Add your simulation to the `manifest.json` file:

```json
{
  "simulations": [
    {
      "id": "my-simulation",
      "title": "My Simulation Title",
      "description": "A brief description of what your simulation does",
      "thumbnail": "thumbnail.jpg",
      "tags": ["physics", "biology", "mathematics", "chemistry"],
      "date": "2025-01-15"
    }
  ]
}
```

### 4. Commit and Push

```bash
git add .
git commit -m "feat: add new simulation - [name]"
git push origin main
```

Your simulation will be automatically deployed to GitHub Pages in seconds!

## 🏷️ Available Tags

- `physics` - Physics
- `biology` - Biology
- `mathematics` - Mathematics
- `chemistry` - Chemistry
- `astronomy` - Astronomy
- `mechanics` - Mechanics
- `optics` - Optics
- `thermodynamics` - Thermodynamics

## 🔧 GitHub Pages Configuration

### Initial Setup

1. Go to **Settings** > **Pages** in your GitHub repository
2. Under **Source**, select **GitHub Actions**
3. Deployment will happen automatically after each push to `main`

### Subdomain Configuration

To use `explorables.scienceetonnante.com`:

1. In **Settings** > **Pages**, under **Custom domain**, enter: `explorables.scienceetonnante.com`
2. At your DNS host (OVH), add a CNAME record:
   ```
   Type: CNAME
   Name: explorables
   Value: [your-username].github.io
   ```
3. Wait for DNS propagation (a few minutes to a few hours)
4. GitHub will automatically generate an SSL certificate

## 🛠️ Local Development

To test locally:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx serve

# Option 3: PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

## 📝 Simulation Examples

### Simple Simulation (HTML + Canvas)

See `pendulum/index.html` for a complete example using the Canvas API.

### With External Libraries

You can use libraries such as:
- **p5.js** - For drawing and interactivity
- **Three.js** - For 3D simulations
- **Chart.js** - For charts
- **D3.js** - For data visualizations

Example with p5.js:

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
            // Your simulation here
        }
    </script>
</body>
</html>
```

## 🤝 Contributing

1. Fork the project
2. Create a branch (`git checkout -b feature/my-simulation`)
3. Commit your changes (`git commit -m 'feat: add simulation'`)
4. Push to the branch (`git push origin feature/my-simulation`)
5. Open a Pull Request

## 📄 License

This project is part of [Science Étonnante](https://www.scienceetonnante.com)

---

**Note**: This project uses GitHub Pages for hosting. Any changes to the `main` branch will trigger an automatic deployment.
