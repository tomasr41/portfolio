export const personalInfo = {
  name: "Tomas Rowan",
  location: "Chacabuco, Buenos Aires, Argentina",
  email: "tomasrowan41@gmail.com",
  github: "https://github.com/tomasr41",
  linkedin: "https://www.linkedin.com/in/tom%C3%A1s-rowan/",
  description: `🚀 Soy desarrollador de software y estudiante de la Licenciatura en Sistemas en la UNNOBA, próximo a recibirme como Analista de Sistemas. Me interesa crear soluciones prácticas que resuelvan problemas reales. Soy autodidacta y estoy en constante aprendizaje, desarrollando proyectos personales y académicos para aplicar y consolidar mis conocimientos.`
};

export const workExperience = [
  {
    company: "Bomberos de Junin",
    location: "Junin, Buenos Aires, Argentina",
    position: "Analista Funcional y Desarrollador Full Stack",
    period: "Agosto 2024 - Febrero 2025",
    achievements: [
      "Desarrollamos una aplicación móvil y plataforma web para los Bomberos de Junín junto a compañeros de la universidad.",
      "Implementamos la lógica de negocio del backend utilizando Spring Boot en Java, asegurando una estructura robusta y escalable.",
      "Construimos una plataforma web con React que permite a los administradores cargar y gestionar manuales de rescate de vehículos.",
      "Facilitamos el acceso rápido a información crítica mediante una app móvil que permite a los bomberos consultar manuales en situaciones de alta presión.",
      "Aseguramos la integración fluida entre frontend y backend, optimizando la experiencia de usuario y el rendimiento general de la aplicación.",
      "Colaboramos estrechamente con el cuerpo de bomberos para entender sus necesidades operativas y adaptar la solución tecnológica a un caso de uso real.",
      "Entregamos una solución completa y funcional."
    ]
    
  },
  {
    company: "Rowan Propiedades",
    location: "Chacabuco, Buenos Aires, Argentina",
    position: "Soporte Tecnico",
    period: "Febrero 2025 - Mayo 2025",
    achievements: [
      "Trabajé como Soporte Tecnico IT para Inmobiliaria Rowan (<a href='https://rowanpropiedades.ar/' target='_blank' rel='noopener noreferrer' style='color: #3b82f6; text-decoration: underline;'>https://rowanpropiedades.ar/</a>), brindando soluciones tecnológicas adaptadas a las necesidades locales del negocio.",
"Diseñé procedimientos básicos de respaldo automático y configuré acceso remoto seguro para el equipo administrativo.",
      "Configuré e instalé terminales de trabajo, mejorando el entorno operativo y reduciendo tiempos de carga en las estaciones de trabajo.",
      "Digitalicé parte del flujo de trabajo tradicional de la inmobiliaria, optimizando procesos internos y capacitando al personal en el uso de las nuevas tecnologias basadas en la nube."
    ],
  },

];

export const education = [
  {
    institution: "Universidad Nacional del Noroeste de la Provincia de Buenos Aires",
    location: "Pergamino, Buenos Aires, Argentina",
    degree: "Licenciatura en Sistemas",
    period: "Mar 2020 - Actualidad",
  },
];
export const skills = {
  programmingLanguages: [
    "JavaScript",
    "TypeScript",
    "Java",
  ],
  frontendDevelopment: [
    "React",
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
      ], techStack: ["HTML", "CSS", "Javascript" , "Spring Boot"]
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
      
    ], techStack: ["React","Java Spring Boot", "PostgreSQL", "Kotlin (Android Studio)"]
  },

  {
    title: "Sistema Contable Full Stack",
    github: "https://github.com/tomasr41/SistemaContable", 
    video: "https://www.youtube.com/embed/K0mPJiPmygE", 
    description: [
      "Sistema de gestión contable integral con arquitectura Full Stack (Spring Boot y React) enfocado en la integridad y trazabilidad de datos financieros.",
      "Implementación de lógica de Partida Doble: algoritmos de validación que aseguran el balance estricto entre el Debe y el Haber en cada asiento persistido.",
      "Gestión de Plan de Cuentas Jerárquico: estructura tipo árbol con relaciones recursivas en PostgreSQL, permitiendo la herencia de naturalezas contables entre cuentas padre e hijas.",
      "Validaciones de Negocio Avanzadas: restricciones de integridad para impedir el borrado de cuentas con saldo, validación cronológica de asientos y límites de edición temporal.",
      "Reportes Financieros Dinámicos: generación en tiempo real de Libro Diario y Libro Mayor con cálculo de saldos parciales y filtrado avanzado por periodos.",
      "Seguridad y Autorización: sistema basado en Roles (RBAC) y Permisos para el control de acceso a funciones sensibles como gestión de usuarios y gestion de Plan de Cuentas.",
      "Proxima funcionalidad a implementar: Modulo de Liquidación de Sueldos: integración con gestión de empleados, categorías (datos variables) y generación automática de asientos de liquidación."
    ],
    techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "Sistema de Gestión de Torneos y Competencias",
    github: "https://github.com/tomasr41/poo2025-Pergamino-RowanRosellGrilli", 
    video: "https://www.youtube.com/embed/vP4zU9CGuWs", 
    description: [
      "Plataforma integral Full Stack (Spring Boot y React) con persistencia en PostgreSQL, diseñada para la administración eficiente y escalable de eventos deportivos.",
      "Seguridad robusta mediante Spring Security y JWT: implementación de autenticación y autorización basada en roles (RBAC) para segmentar privilegios entre Administradores y Participantes.",
      "Arquitectura de Datos Optimizada: uso de DTOs y mapeos manuales para garantizar contratos de API estandarizados y resolver desafíos de serialización (ISO Date formatting).",
      "Lógica de Estados de Negocio: implementación de un flujo de estados (Borrador/Publicado) que asegura la integridad de la información antes de su exposición pública.",
      "Motor de Validaciones de Integridad: algoritmos para el control estricto de cupos, prevención de inscripciones duplicadas y validación cronológica de periodos de competencia.",
      "Administración Modular de Competencias: estructura flexible que permite parametrizar categorías, precios y requisitos técnicos de forma independiente dentro de un torneo.",
      
    ],
    techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "TypeScript", "Spring Security", "JWT"]
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
      
    ], techStack: ["HTML", "CSS", "Javascript"]
  }



  

];

