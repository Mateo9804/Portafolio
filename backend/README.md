# Backend - Portafolio API (Laravel)

API REST para el portafolio personal de Mateo Alejandro Vera.

## Instalación

1. Instalar dependencias:
```bash
composer install
```

2. Copiar archivo de entorno:
```bash
cp .env.example .env
```

3. Generar clave de aplicación:
```bash
php artisan key:generate
```

4. Configurar base de datos en `.env`

5. Ejecutar migraciones (si es necesario):
```bash
php artisan migrate
```

6. Iniciar servidor:
```bash
php artisan serve
```

El servidor estará disponible en `http://localhost:8000`

## Endpoints API

- `GET /api/portfolio` - Información general del portafolio
- `GET /api/portfolio/about` - Información sobre mí
- `GET /api/portfolio/projects` - Lista de proyectos
- `GET /api/portfolio/skills` - Habilidades técnicas
- `POST /api/contact` - Enviar mensaje de contacto

## Tecnologías

- PHP 8.1+
- Laravel 10
- MySQL

