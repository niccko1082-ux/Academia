import { Code, Layout, Palette } from 'lucide-react';
import { jsFundamentos } from './js-fundamentos';
import { domManipulation } from './dom-manipulation';
import { bootstrapModule } from './bootstrap-module';

// Contenido de todos los módulos combinado
export const contenidoModulos = {
  'js-fundamentos': jsFundamentos,
  'dom-manipulation': domManipulation,
  'bootstrap': bootstrapModule
};

// Definición de módulos con metadatos
export const modulos = [
  {
    id: 'js-fundamentos',
    titulo: 'JavaScript Fundamentos',
    icono: Code,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'rgba(245, 158, 11, 0.15)',
    descripcion: 'Aprende JavaScript desde cero, sin conocimientos previos',
    lecciones: [
      { id: 0, titulo: '¡Bienvenido! Tu Primer Script' },
      { id: 1, titulo: 'Variables y Tipos de Datos' },
      { id: 2, titulo: 'Operadores y Condicionales' },
      { id: 3, titulo: 'Funciones' },
      { id: 4, titulo: 'Arrays y sus Métodos' },
      { id: 5, titulo: 'Objetos' }
    ],
    nivel: 'Principiante',
    duracion: '4-5 horas',
    prerequisito: 'HTML y CSS básico'
  },
  {
    id: 'dom-manipulation',
    titulo: 'Manipulación del DOM',
    icono: Layout,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'rgba(16, 185, 129, 0.15)',
    descripcion: 'Aprende a hacer tus páginas web interactivas con JavaScript',
    lecciones: [
      { id: 1, titulo: 'Introducción al DOM' },
      { id: 2, titulo: 'Modificar Contenido y Estilos' },
      { id: 3, titulo: 'Eventos' },
      { id: 4, titulo: 'Crear Elementos Dinámicamente' }
    ],
    nivel: 'Intermedio',
    duracion: '3-4 horas',
    prerequisito: 'JavaScript Fundamentos'
  },
  {
    id: 'bootstrap',
    titulo: 'Bootstrap 5',
    icono: Palette,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'rgba(139, 92, 246, 0.15)',
    descripcion: 'Crea interfaces bonitas y responsive sin escribir CSS',
    lecciones: [
      { id: 1, titulo: '¿Qué es Bootstrap? + Instalación' },
      { id: 2, titulo: 'Sistema de Grid (Columnas)' },
      { id: 3, titulo: 'Componentes: Cards, Buttons, Alerts' },
      { id: 4, titulo: 'Utilidades: Espaciado, Colores, Flexbox' }
    ],
    nivel: 'Principiante',
    duracion: '2-3 horas',
    prerequisito: 'HTML y CSS básico'
  }
];

// Calcular total de lecciones
export const totalLecciones = modulos.reduce((acc, m) => acc + m.lecciones.length, 0);
