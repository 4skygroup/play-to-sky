# 🚀 Play To Sky -- Frontend Project

## 📌 Présentation du projet

**Play To Sky**

---

## 🛠️ Stack technique

- Vite
- React
- TypeScript
- TailwindCSS
- React Router
- ESLint
- PostCSS

---

## 📂 Structure du projet

    play-to-sky-main/
    │
    ├── public/
    │   ├── fonts/
    │   └── images/
    │
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── types/
    │   ├── utils/
    │   ├── App.tsx
    │   ├── main.tsx
    │
    ├── index.html
    ├── package.json
    ├── vite.config.ts

---

## 🧠 Architecture globale

### 🔹 Entry point

- `main.tsx` initialise React
- `App.tsx` contient la structure globale et le routing

---

### 🔹 Routing (React Router)

Le projet utilise **React Router** pour la navigation entre les pages.

Les routes principales sont définies dans `App.tsx` :

- `/` → Home
- `/group` → Group
- `/contact` → Contact
- `/offices/cities` → Offices par ville
- `/offices/regions` → Offices par région

👉 Le routing permet : - navigation fluide sans rechargement -
organisation claire des pages - extensibilité du projet

---

### 🔹 Pages

- Home
- Group
- Contact
- OfficesByCities
- OfficesByRegion

---

### 🔹 Composants

- Header / Footer
- LandingSection
- Subsidiary
- Offices (City, Region)
- Inputs (input, textarea)

---

### 🔹 Utilitaires

- gestion des fuseaux horaires

---

## ⚙️ Installation

```bash
npm install
npm run dev
```

---

## 📈 Améliorations possibles

- API backend
- state management
- tests
- SEO

---

## 👨‍💻 Auteur

Projet frontend moderne.
