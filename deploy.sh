#!/usr/bin/env bash
# =============================================================
#  Lusso · script de utilidades
#  Uso:
#    ./deploy.sh serve     -> sirve la carta en http://localhost:8080
#    ./deploy.sh push      -> commit + push a GitHub (origin/main)
#    ./deploy.sh deploy    -> publica en Cloudflare Pages (wrangler)
#    ./deploy.sh all       -> push y luego deploy
# =============================================================
set -euo pipefail

REMOTE_URL="https://github.com/autemadmn/Lusso.autem.git"
BRANCH="main"
PUBLIC_DIR="public"
CF_PROJECT="lusso-menu"

cd "$(dirname "$0")"

cmd="${1:-help}"

ensure_remote() {
  if ! git rev-parse --git-dir >/dev/null 2>&1; then
    echo "→ Inicializando repositorio git…"
    git init -q
    git branch -M "$BRANCH"
  fi
  if ! git remote get-url origin >/dev/null 2>&1; then
    echo "→ Añadiendo remote origin: $REMOTE_URL"
    git remote add origin "$REMOTE_URL"
  fi
}

case "$cmd" in
  serve)
    echo "→ Sirviendo $PUBLIC_DIR/ en http://localhost:8080  (Ctrl+C para parar)"
    cd "$PUBLIC_DIR"
    python3 -m http.server 8080
    ;;

  push)
    ensure_remote
    git add -A
    if git diff --cached --quiet; then
      echo "→ No hay cambios nuevos que commitear."
    else
      msg="${2:-Actualiza carta Lusso}"
      git commit -m "$msg"
      echo "→ Commit creado: $msg"
    fi
    echo "→ Haciendo push a origin/$BRANCH…"
    echo "  (GitHub pedirá usuario + Personal Access Token como contraseña)"
    git push -u origin "$BRANCH"
    echo "✓ Push completado."
    ;;

  deploy)
    if ! command -v npx >/dev/null 2>&1; then
      echo "✗ Necesitas Node.js/npm instalado para usar wrangler."; exit 1
    fi
    echo "→ Publicando $PUBLIC_DIR/ en Cloudflare Pages (proyecto: $CF_PROJECT)…"
    npx wrangler pages deploy "$PUBLIC_DIR" --project-name "$CF_PROJECT"
    echo "✓ Despliegue lanzado."
    ;;

  all)
    "$0" push "${2:-Actualiza carta Lusso}"
    "$0" deploy
    ;;

  *)
    echo "Uso: ./deploy.sh [serve|push|deploy|all]"
    echo
    echo "  serve   Sirve la carta en http://localhost:8080"
    echo "  push    Commit + push a $REMOTE_URL ($BRANCH)"
    echo "  deploy  Publica en Cloudflare Pages"
    echo "  all     push y luego deploy"
    ;;
esac
