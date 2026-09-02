# Deployment Instructions

## GitHub Pages Sozlamlari

GitHub Pages avtomatik ravishda quyidagi joydan fayllarni serve qiladi:

- **Source:** `main` branch
- **Directory:** `/docs`
- **URL:** `https://jonsislom7-afk.github.io/minecraft/`

## Fayllar

- ✅ `docs/index.html` - Asosiy web sahifasi
- ✅ `docs/styles.css` - CSS stil
- ✅ `docs/script.js` - JavaScript funksiyalari
- ✅ `docs/.nojekyll` - Jekyll o'tkazmalarini o'chirib qo'yish
- ✅ `.github/workflows/deploy.yml` - Avtomatik deploy

## GitHub Pages Aktivlashtirilishi

1. Repository Settings-ga o'ting
2. "Pages" bo'limini tanlang
3. Source: `Deploy from a branch`
4. Branch: `main`, Directory: `/ (root)` yoki `/docs`
5. Save tugmasini bosing

## Test Qilish

Barcha fayllar `main` branch-ga push qilgandan so'ng:
1. GitHub Actions o'rnab oladi (workflow)
2. Web sayt avtomatik deploy bo'ladi
3. URL: `https://jonsislom7-afk.github.io/minecraft/`

## Localhost-da Test Qilish

```bash
# Python 3 bilan
python -m http.server 8000 --directory docs

# Python 2 bilan
python -m SimpleHTTPServer 8000

# Node.js bilan (agar o'rnatilgan bo'lsa)
npx http-server docs
```

Keyin `http://localhost:8000` ni brauzerda oching.
