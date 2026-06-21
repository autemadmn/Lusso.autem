# Lusso · Carta digital

Carta estática (Cloudflare Pages) con selector de idioma **ES / EN / DE**.
Estructura adaptada a partir de Tavola Chiringo (solo como referencia); contenido
y branding propios de Lusso.

## Abrir en VS Code
1. Abre esta carpeta en VS Code (`File → Open Folder…`).
2. VS Code te sugerirá instalar la extensión **Live Server**. Acéptala.
3. Abre `public/index.html` y pulsa **"Go Live"** (abajo a la derecha),
   o usa el menú **Terminal → Run Task → "Lusso: servir en local (8080)"**.
4. Se abre en http://localhost:8080

> Sin Live Server también funciona: en la terminal de VS Code ejecuta
> `./deploy.sh serve` (sirve `public/` en el puerto 8080).

## Estructura
    public/
      index.html      · maquetación y modales
      style.css        · estilos (base visual premium)
      script.js        · datos del menú + traducciones ES/EN/DE + lógica
      assets/          · logo, fondos, line-arts, banderas, iconos
    deploy.sh          · serve / push / deploy
    wrangler.toml      · config de Cloudflare Pages

## Tareas (Terminal → Run Task)
- **Lusso: servir en local (8080)**
- **Lusso: subir a GitHub (push)** → `./deploy.sh push`
- **Lusso: publicar en Cloudflare Pages** → `./deploy.sh deploy`

## Subir a GitHub
    ./deploy.sh push
GitHub pedirá tu **usuario** y un **Personal Access Token** como contraseña
(Settings → Developer settings → Personal access tokens, permiso `repo`).
El remoto ya está configurado a https://github.com/autemadmn/Lusso.autem

## Publicar en Cloudflare Pages
    ./deploy.sh deploy
(Requiere Node.js. La primera vez wrangler te pedirá iniciar sesión en Cloudflare.)

## Pendiente antes de publicar
- Sustituir `public/assets/branding/logolusso.png` (ahora es un placeholder) por el logo real.
- Reemplazar las fotos placeholder por imágenes propias de Lusso
  (cambiar las rutas `image:` en `public/script.js`).

## Idiomas
El selector de banderas cambia entre Español / English / Deutsch y recuerda
la elección. Marcas y nombres de producto se mantienen en los tres idiomas.
