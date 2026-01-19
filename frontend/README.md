# Frontend - Portafolio React

Frontend del portafolio personal de Mateo Alejandro Vera desarrollado con React.

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Build para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## Tecnologías

- React 18
- Vite
- Bootstrap 5
- React Router DOM
- Axios
- Bootstrap Icons

## Estructura

```
src/
  ├── components/
  │   ├── Navbar.jsx
  │   ├── Hero.jsx
  │   ├── About.jsx
  │   ├── Projects.jsx
  │   ├── Skills.jsx
  │   ├── Contact.jsx
  │   └── Footer.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

## Configuración

Asegúrate de que el backend Laravel esté corriendo en `http://localhost:8000` para que las peticiones API funcionen correctamente.

