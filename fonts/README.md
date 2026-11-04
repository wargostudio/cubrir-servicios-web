# BW Quinta Pro — archivos de fuente

Esta carpeta está lista para recibir los archivos licenciados de
**BW Quinta Pro** (Bold Wolves Type Foundry). El CSS del sitio
(`css/styles.css` y `widgets/presupuestador.html`) ya tiene las reglas
`@font-face` apuntando acá — apenas se agreguen los archivos con estos
nombres exactos, todo el sitio pasa a usar la tipografía real
automáticamente, sin tocar más código:

```
fonts/
├── BWQuintaPro-Regular.woff2   (peso 400 — Regular)
├── BWQuintaPro-Regular.woff
├── BWQuintaPro-Medium.woff2    (peso 500 — Medium)
├── BWQuintaPro-Medium.woff
├── BWQuintaPro-Bold.woff2      (peso 700 — Bold)
├── BWQuintaPro-Bold.woff
├── BWQuintaPro-Black.woff2     (peso 900 — Black)
└── BWQuintaPro-Black.woff
```

## Cómo generar los .woff2/.woff
Si desde Bold Wolves Type Foundry entregan los archivos en otro formato
(.otf/.ttf), se pueden convertir gratis en:
- https://cloudconvert.com/ttf-to-woff2
- https://www.fontsquirrel.com/tools/webfont-generator

## Mientras tanto
Hasta que estos archivos se agreguen, el sitio usa **Poppins** (Google
Fonts) como reemplazo visual — ya está cargado en todas las páginas y
tiene los mismos 4 pesos (Regular/Medium/Bold/Black), así que el diseño no
se rompe ni cambia de aspecto drásticamente al hacer el reemplazo final.
