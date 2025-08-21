export const personalInfo = {
  name: "Tomas Rowan",
  location: "Chacabuco, Buenos Aires, Argentina",
  email: "tomasrowan41@gmail.com",
  github: "https://github.com/tomasr41",
  linkedin: "https://www.linkedin.com/in/tom%C3%A1s-rowan/",
  description: `🚀 Soy desarrollador de software y estudiante de la Licenciatura en Sistemas (3er año) en la UNNOBA, pronto a recibir el título de Analista de Sistemas. 
  Me gusta crear soluciones prácticas que resuelvan problemas reales. 
  Desarrollé de forma freelance una aplicación para los Bomberos de Junín, participando en todo el proceso: desde hablar con el cliente y definir los requisitos, hasta programar el backend en Spring Boot y la web en React.
  Me adapto rápido a nuevas tecnologías y disfruto tanto de trabajar solo como en equipo, siempre buscando aprender y mejorar.`
};

export const workExperience = [
  {
    company: "Bomberos de Junin",
    location: "Junin, Buenos Aires, Argentina",
    position: "Analista Funcional y Desarrollador Full Stack",
    period: "Agosto 2024 - Diciembre 2024",
    achievements: [
      "Desarrollamos de forma freelance una aplicación móvil y plataforma web para los Bomberos de Junín junto a compañeros de la universidad.",
      "Implementamos la lógica de negocio del backend utilizando Spring Boot en Java, asegurando una estructura robusta y escalable.",
      "Construimos una plataforma web con React que permite a los administradores cargar y gestionar manuales de rescate de vehículos.",
      "Facilitamos el acceso rápido a información crítica mediante una app móvil que permite a los bomberos consultar manuales en situaciones de alta presión.",
      "Aseguramos la integración fluida entre frontend y backend, optimizando la experiencia de usuario y el rendimiento general de la aplicación.",
      "Colaboramos estrechamente con el cuerpo de bomberos para entender sus necesidades operativas y adaptar la solución tecnológica a un caso de uso real.",
      "Entregamos una solución completa y funcional."
    ]
    
  },
  {
    company: "Inmobiliaria Rowan",
    location: "Chacabuco, Buenos Aires, Argentina",
    position: "Analista y Desarrollador de Sistemas",
    period: "Febrero 2025 - Mayo 2025",
    achievements: [
      "Trabajé como Analista de Sistemas para Inmobiliaria Rowan (<a href='https://rowanpropiedades.ar/' target='_blank' rel='noopener noreferrer' style='color: #3b82f6; text-decoration: underline;'>https://rowanpropiedades.ar/</a>), brindando soluciones tecnológicas adaptadas a las necesidades locales del negocio.",
      "Implementé un servidor en la nube utilizando Google Cloud Platform para gestionar archivos, usuarios e información sensible de forma centralizada y segura.",
      "Diseñé procedimientos básicos de respaldo automático y configuré acceso remoto seguro para el equipo administrativo.",
      "Configuré e instalé terminales de trabajo, mejorando el entorno operativo y reduciendo tiempos de carga en las estaciones de trabajo.",
      "Digitalicé parte del flujo de trabajo tradicional de la inmobiliaria, optimizando procesos internos y reduciendo el uso de papel."
    ],
  },

];

export const education = [
  {
    institution: "Universidad Nacional del Noroeste de la Provincia de Buenos Aires",
    location: "Pergamino, Buenos Aires, Argentina",
    degree: "Licenciatura en Sistemas",
    period: "Mar 2021 - Actualidad",
  },
];
export const skills = {
  programmingLanguages: [
    "JavaScript",
    "Python",
    "Java",
  ],
  frontendDevelopment: [
    "Reactjs",
    "Vue.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Spring Boot"],
  databaseAndStorage: ["PostgreSQL"],
  cloudAndDevOps: ["AWS","Azure","Docker","Kubernetes"],
  toolsAndServices: [
"Cursor","Git","Vercel","Github Pages",
  ],
};

export const projects = [
  {
    title: "Bomberos de Junin",
    github: "https://github.com/UnnobaBomberos",
    description: [
      "Aplicación móvil y plataforma web diseñadas para que los Bomberos de Junín puedan acceder rápidamente a planos de seguridad de vehículos en situaciones críticas.",
      "La app permite consultar detalles esenciales como la ubicación de baterías, tanques de combustible y componentes clave, facilitando intervenciones más seguras y eficientes.",
      "Pensada para tablets y smartphones, la aplicación garantiza disponibilidad de datos críticos en terreno, incluso bajo presión y condiciones adversas.",
      "Cuenta con una plataforma web local  complementaria e intuitiva que permite a los administradores gestionar y actualizar manuales de rescate con facilidad y rapidez.",
      ],
  },
  {
    title: "StarType Game (clon de MonkeyType)",
    github: "https://github.com/tomasr41/StarTypeGame",
    livedemo: "https://tomasr41.github.io/StarTypeGame/",
    description: [
      "Clon funcional del popular juego MonkeyType, enfocado en mejorar la velocidad de tipeo del usuario con métricas en tiempo real.",
      "Desarrollado íntegramente con HTML, CSS y JavaScript puro, sin uso de frameworks ni librerías externas.",
      "Implementa lógica para detección de errores, control de tiempo, velocidad (WPM) y precisión, brindando feedback inmediato al usuario.",
      "Incluye animaciones suaves, diseño responsivo y cambios dinámicos en el contenido del DOM sin recargas.",
      "Proyecto enfocado en la práctica de manipulación del DOM, control de eventos de teclado y lógica de juego en el navegador."
    ],
  },
  {
    title: "Carrito de Compras",
    github: "https://github.com/tomasr41/CarritoDeCompras",
    livedemo: "https://tomasr41.github.io/CarritoDeCompras/",
    description: [
      "Aplicación web  que permite a los usuarios agregar, eliminar y visualizar productos seleccionados en un carrito de compras.",
      "Desarrollado con HTML, CSS y JavaScript puro (vanilla JS), sin frameworks ni librerías externas.",
      "Implementa lógica para manejo de stock, totales dinámicos, y persistencia de datos usando LocalStorage.",
      "Cuenta con una interfaz intuitiva, con animaciones básicas y diseño responsive adaptable a dispositivos móviles.",
      "Proyecto basico para entender el funcionamiento de un flujo de compra en aplicaciones e-commerce."
    ]
  }
  

];

export const awards = [
  {
    name: "Hackathon IEEE YESIST12",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "Internacional",
    position: "Segundo Lugar",
  },
  {
    name: "Hackathon Prodigi Cognizant",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "Nacional",
    position: "Tercer Lugar",
  },
  {
    name: "Hackathon Cisco Thingqbator",
    issuer: "Cisco",
    date: "Ene 2023",
    type: "Nacional",
    position: "Segundo Lugar",
  },
  {
    name: "Día de Innovadores",
    issuer: "Universidad Sri Manakula Vinayagar, Pondicherry",
    date: "Sep 2022",
    type: "Nacional",
    position: "Primer Premio",
  },
  {
    name: "KG Hackfest'22",
    issuer: "Instituto Tecnológico KGiSL, Coimbatore",
    date: "Sep 2022",
    type: "Nacional",
    position: "Segundo Premio",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, Grupo de Instituciones KIET, Nueva Delhi",
    date: "May 2022",
    type: "Nacional",
    position: "Tercer Lugar",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "Nacional",
    position: "Hack Más Impactante",
  },
];
