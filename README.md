# Plantilla de Portafolio Moderno

Un sitio web de portafolio elegante y responsivo construido con **Astro**, **React** y **Tailwind CSS**, con animaciones modernas y efectos de glassmorfismo impresionantes.

![Captura de Pantalla del Portafolio](https://github.com/user-attachments/assets/4f2466f1-1ebe-4cbe-857c-40eccd63c384)

## ✨ Características

- **Diseño Moderno** – Diseño limpio y profesional con glassmorfismo elegante
- **Animaciones** – Transiciones suaves e interfaz interactiva vía Framer Motion
- **Modo Oscuro/Claro** – Cambio automático de tema con detección de preferencias del sistema
- **Totalmente Responsivo** – Optimizado para móvil, tablet y escritorio
- **Ultra Rápido** – Impulsado por Astro para rendimiento superior
- **Estructura Modular** – Construido para fácil personalización y escalabilidad
- **SEO Amigable** – Contenido estructurado y meta tags para mejor visibilidad

## 🚀 Demo

👉 [Demo en Vivo](https://rishilol.vercel.app/)

## 🛠 Comenzando

### Prerrequisitos

- Node.js (v18+ recomendado)
- npm / yarn / bun

### Instalación

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio

# Instalar dependencias
npm install
# o
yarn install
# o
bun install

# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev
# o
bun dev
```

Visita `http://localhost:4321` en tu navegador para verlo en acción.

## 🧩 Personalizando el Portafolio

Todo tu contenido vive dentro de `src/lib/data.ts`. Actualiza lo siguiente para hacerlo tuyo:

### 1. Información Personal

```ts
export const personalInfo = {
  name: "Tu Nombre",
  location: "Tu Ubicación",
  email: "tu.email@ejemplo.com",
  github: "https://github.com/tuusuario",
  linkedin: "https://www.linkedin.com/in/tuusuario/",
};
```

### 2. Experiencia Laboral

```ts
export const workExperience = [
  {
    company: "Nombre de la Empresa",
    location: "Ubicación",
    position: "Tu Posición",
    period: "Fecha de Inicio - Fecha de Fin",
    achievements: [
      "Logro 1",
      "Logro 2",
    ],
  },
];
```

### 3. Educación

```ts
export const education = [
  {
    institution: "Nombre de la Universidad",
    location: "Ubicación",
    degree: "Tu Título",
    period: "Fecha de Inicio - Fecha de Fin",
    achievements: [
      "Logro 1",
      "Logro 2",
    ],
  },
];
```

### 4. Habilidades

```ts
export const skills = {
  programmingLanguages: ["TypeScript", "Python"],
  frontendDevelopment: ["React", "Next.js"],
  // y más...
};
```

### 5. Proyectos

```ts
export const projects = [
  {
    title: "Nombre del Proyecto",
    github: "https://github.com/tuusuario/proyecto",
    description: [
      "Qué hace",
      "Tecnologías utilizadas",
    ],
  },
];
```

### 6. Premios

```ts
export const awards = [
  {
    name: "Nombre del Premio",
    issuer: "Emisor",
    date: "Fecha",
    type: "Tipo",
    position: "Posición",
  },
];
```

## 📦 Construir para Producción

```bash
npm run build
# o
yarn build
# o
bun run build
```

Para previsualizar la construcción de producción localmente:

```bash
npm run preview
# o
yarn preview
```

## 📤 Despliegue

Despliega fácilmente en plataformas como **Vercel**, **Netlify**, **GitHub Pages**, o cualquier host estático de tu elección.

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## ©️ Copyright

© 2025 **Rishikesh S.** Todos los derechos reservados.

Eres bienvenido a usar esta plantilla para tu propio portafolio — solo actualiza `data.ts` y ajusta el diseño según sea necesario. Por favor mantén la atribución al autor original.

---

## 🌟 ¿Te gustó?

Si encontraste esto útil o inspirador, **por favor considera dejar una estrella** ⭐ en el repositorio — ¡ayuda a otros a descubrirlo también!

---

## 🙏 Agradecimientos

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
