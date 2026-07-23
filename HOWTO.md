# Super Tour Landing — ishga tushirish (React + Node.js)

Loyiha ikki qismdan iborat:

- **`client/`** — React (Vite) frontend, barcha UI shu yerda.
- **`server/`** — Node.js (Express) backend. Production'da `client`ning build qilingan versiyasini serve qiladi, shuningdek `/api/health` endpoint'iga ega.

## Birinchi marta o'rnatish

```bash
npm run install:all
```

## Development (HMR bilan)

Ikkita alohida terminalda:

```bash
npm run dev:server   # Express — http://localhost:4001 (faqat /api)
npm run dev:client   # Vite — http://localhost:5174 (asosiy sahifa, tez qayta yuklanadi)
```

Brauzerda **http://localhost:5174** ni oching.

## Production (bitta server, bitta port)

```bash
npm start
```

Bu avval `client`ni build qiladi (`client/dist`), so'ng Express serverini ishga tushiradi — **http://localhost:4001** manzilida to'liq saytni serve qiladi.

```bash
PORT=8080 npm start
```

## Til

Sayt ikki tilda: **rus (standart)** va **o'zbek**. Header'dagi RU/UZ tugmasi orqali almashtiriladi (`client/src/i18n/`).

## Kontent va brend manbasi

Barcha matn, narxlar va kontakt ma'lumotlari [README.md](README.md) faylida hujjatlashtirilgan — Telegram kanali (@supertouruz) va Instagram profilidan (@supertour_uz) olingan. Haqiqiy fotolar hozircha yo'q — `Destinations`/`Hero` bo'limlari CSS gradient + custom SVG ikonalar bilan ishlaydi. Asl fotolar/logotip fayli kelganda `client/src/components/` ichidagi tegishli komponentlarga qo'shiladi.
