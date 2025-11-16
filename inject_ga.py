from pathlib import Path

GA_SNIPPET = """
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TB125XZ6XV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TB125XZ6XV');
</script>
"""

# If your built site is in another directory (e.g. "dist"), replace "." by that path.
ROOT = Path(".")

for html_path in ROOT.rglob("index.html"):
    text = html_path.read_text(encoding="utf-8")

    # Skip if GA already present
    if "G-TB125XZ6XV" in text:
        continue

    if "</head>" in text:
        text = text.replace("</head>", GA_SNIPPET + "\n</head>")
        html_path.write_text(text, encoding="utf-8")
