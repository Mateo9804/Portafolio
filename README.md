# Portafolio Personal - Mateo Alejandro Vera

Portafolio web personal desarrollado con React (frontend) y Laravel (backend).

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

## Despliegue

### Frontend
- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Similar a Vercel
- **GitHub Pages**: Usa `npm run build` y sube la carpeta `dist/`

### Backend
- **Heroku**: Compatible con Laravel
- **DigitalOcean**: App Platform
- **VPS**: Cualquier servidor con PHP y MySQL

## Contacto

- LinkedIn: [Mateo Alejandro Vera](https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/)
- GitHub: [Mateo9804](https://github.com/Mateo9804)
- Email: (Configurar en el backend)

## 📄 Licencia

MIT License

---

Desarrollado por Mateo Alejandro Vera

