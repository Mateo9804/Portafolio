# 🚀 Portafolio Personal - Mateo Alejandro Vera

> **Portafolio web interactivo con tema Visual Studio Code**

[![Portafolio en Vivo](https://img.shields.io/badge/🌐-Ver%20Portafolio-blue?style=for-the-badge)](https://mateo9804.github.io) 
[![GitHub](https://img.shields.io/badge/GitHub-Repositorio-black?style=for-the-badge&logo=github)](https://github.com/Mateo9804/Portafolio)

Portafolio web personal desarrollado con React (frontend) y Laravel (backend), diseñado con un tema inspirado en Visual Studio Code.

## Características

- **Frontend**: React con Vite, Bootstrap 5, CSS personalizado
- **Backend**: Laravel 10 con API REST
- **Diseño**: Moderno, responsivo y optimizado para LinkedIn
- **Secciones**: Inicio, Sobre Mí, Proyectos, Habilidades, Contacto

## Requisitos

- Node.js 16+ y npm
- PHP 8.1+ y Composer
- MySQL 5.7+ o MariaDB

## 🛠️ Instalación

### Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Configurar base de datos en .env
php artisan serve
```

El backend estará disponible en `http://localhost:8000`

### Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:3000`

## Estructura del Proyecto

```
miportafolio/
├── backend/          # API Laravel
│   ├── app/
│   ├── routes/
│   └── ...
├── frontend/         # Aplicación React
│   ├── src/
│   │   ├── components/
│   │   └── ...
│   └── ...
└── README.md
```

## 🔧 Configuración

1. **Backend**: Edita `backend/.env` con tus credenciales de base de datos
2. **Frontend**: El proxy está configurado para conectarse a `http://localhost:8000/api`

## Personalización

### Actualizar información personal

Edita los controladores en `backend/app/Http/Controllers/Api/`:
- `PortfolioController.php` - Información general, proyectos, habilidades
- `ContactController.php` - Configuración de email

### Cambiar estilos

Modifica `frontend/src/index.css` para personalizar colores, fuentes y estilos.

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado - Gratis y Fácil)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Click en "Add New Project"
3. Selecciona el repositorio `Portafolio`
4. Configuración:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click en "Deploy"
6. Tu portafolio estará disponible en `https://tu-proyecto.vercel.app`

### Opción 2: Netlify

1. Ve a [netlify.com](https://netlify.com) e inicia sesión con GitHub
2. Click en "Add new site" > "Import an existing project"
3. Selecciona el repositorio `Portafolio`
4. Configuración:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
5. Click en "Deploy site"

### Opción 3: GitHub Pages

1. Edita `frontend/vite.config.js` y agrega `base: '/Portafolio/'`
2. Ejecuta `npm run build` en la carpeta `frontend`
3. Ve a Settings > Pages en tu repositorio de GitHub
4. Selecciona la rama `main` y carpeta `/frontend/dist`
5. Tu portafolio estará en `https://mateo9804.github.io/Portafolio/`

### Backend (Opcional)
- **Railway**: Compatible con Laravel
- **Render**: Gratis para proyectos personales
- **VPS**: Cualquier servidor con PHP y MySQL

## Contacto

- LinkedIn: [Mateo Alejandro Vera](https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/)
- GitHub: [Mateo9804](https://github.com/Mateo9804)
- Email: (Configurar en el backend)

## 📄 Licencia

MIT License

---

Desarrollado por Mateo Alejandro Vera

