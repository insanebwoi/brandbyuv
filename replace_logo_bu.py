import os
import re

DIR = "/Users/admin/Desktop/brandbyuv"
files = [f for f in os.listdir(DIR) if f.endswith('.html')]
files.append('js/components.js')

new_inner = """<svg width="40" height="40" viewBox="0 0 971.28 971.28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M727.43,315.93c-27.93,0-50.59,22.61-50.59,50.54v141.27c0,64.44-32.97,93.64-81.69,93.64-10.22,0-19.75-1.27-28.43-3.95,15.3-28.79,23.7-62.85,23.7-100.95,0-74.47-32.51-126.92-76.93-157.62-14.3-9.9-29.79-17.57-45.87-22.93-19.39-6.54-39.55-9.76-59.26-9.76-48.73,0-89.19,19.48-113.89,56.95v-158.44c0-27.97-22.66-50.59-50.59-50.59-13.94,0-26.61,5.63-35.78,14.8-9.13,9.17-14.8,21.8-14.8,35.78v292.58c0,122.88,82.42,198.54,197.08,198.54,38.51,0,73.2-8.58,102.49-24.34h.05c28.25,16.21,62.89,24.34,102.22,24.34,109.4,0,182.83-63.67,182.83-188.05v-141.27c0-27.93-22.61-50.54-50.54-50.54ZM391.11,601.38c-57.67,0-96.63-41.19-96.63-100.4s38.96-100.4,96.63-100.4c7.4,0,14.49.68,21.21,2,45.82,8.86,75.43,46.82,75.43,98.41,0,45.64-23.16,80.6-60.22,94.18-10.99,4.04-23.2,6.22-36.42,6.22Z"/>
  <rect fill="currentColor" x="265.55" y="720.92" width="261.26" height="95.49" rx="47.75" ry="47.75"/>
  <circle fill="currentColor" cx="606.64" cy="768.67" r="48.53"/>
</svg>"""

new_card_inner = """<svg viewBox="0 0 971.28 971.28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="url(#lg-card)" d="M727.43,315.93c-27.93,0-50.59,22.61-50.59,50.54v141.27c0,64.44-32.97,93.64-81.69,93.64-10.22,0-19.75-1.27-28.43-3.95,15.3-28.79,23.7-62.85,23.7-100.95,0-74.47-32.51-126.92-76.93-157.62-14.3-9.9-29.79-17.57-45.87-22.93-19.39-6.54-39.55-9.76-59.26-9.76-48.73,0-89.19,19.48-113.89,56.95v-158.44c0-27.97-22.66-50.59-50.59-50.59-13.94,0-26.61,5.63-35.78,14.8-9.13,9.17-14.8,21.8-14.8,35.78v292.58c0,122.88,82.42,198.54,197.08,198.54,38.51,0,73.2-8.58,102.49-24.34h.05c28.25,16.21,62.89,24.34,102.22,24.34,109.4,0,182.83-63.67,182.83-188.05v-141.27c0-27.93-22.61-50.54-50.54-50.54ZM391.11,601.38c-57.67,0-96.63-41.19-96.63-100.4s38.96-100.4,96.63-100.4c7.4,0,14.49.68,21.21,2,45.82,8.86,75.43,46.82,75.43,98.41,0,45.64-23.16,80.6-60.22,94.18-10.99,4.04-23.2,6.22-36.42,6.22Z"/>
  <rect fill="url(#lg-card)" x="265.55" y="720.92" width="261.26" height="95.49" rx="47.75" ry="47.75"/>
  <circle fill="url(#lg-card)" cx="606.64" cy="768.67" r="48.53"/>
  <defs>
      <linearGradient id="lg-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff4d8d" />
          <stop offset="100%" stop-color="#cf004d" />
      </linearGradient>
  </defs>
</svg>"""

favicon_new = """<link rel="icon" href="images/iconlogo_dark.svg">"""

for fname in files:
    path = os.path.join(DIR, fname)
    if not os.path.isfile(path):
        continue
    with open(path, 'r') as f:
        content = f.read()

    # Special case, match all old logo SVGs
    content = re.sub(
        r'<svg[^>]*viewBox="0 0 100 100"[^>]*>.*?<circle[^>]*>.*?<text[^>]*>UV</text>.*?</svg>',
        new_inner,
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

    if fname == "card.html":
        content = re.sub(
            r'<svg viewBox="0 0 100 100" fill="none">.*?<circle.*?fill="url\(#lg-card\)".*?<text.*?UV.*?</text>.*?</svg>',
            new_card_inner,
            content,
            flags=re.DOTALL | re.IGNORECASE
        )

    # Favicon
    content = re.sub(
        r'<link\s+rel="icon"\s*href="data:image[^>]*>',
        favicon_new,
        content
    )

    with open(path, 'w') as f:
        f.write(content)
        
print("Replaced all global SVGs")
