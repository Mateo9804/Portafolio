# 📦 Guía de Despliegue del Portafolio

## Opción Recomendada: Vercel (Gratis)

### Pasos para desplegar en Vercel:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Importar proyecto**
   - Click en "Add New Project"
   - Selecciona el repositorio `Mateo9804/Portafolio`
   - Click en "Import"

3. **Configurar el proyecto**
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend` (cambia esto si está vacío)
   - **Build Command**: `npm run build` (debería estar automático)
   - **Output Directory**: `dist` (debería estar automático)
   - **Install Command**: `npm install` (debería estar automático)

4. **Variables de entorno** (si las necesitas)
   - Agrega cualquier variable de entorno necesaria

5. **Desplegar**
   - Click en "Deploy"
   - Espera a que termine el despliegue (1-2 minutos)
   - Tu portafolio estará disponible en `https://portafolio-mateo9804.vercel.app`

6. **Personalizar dominio** (opcional)
   - Ve a Settings > Domains
   - Agrega tu dominio personalizado si lo tienes

### Actualizar el README con el enlace

Una vez desplegado, actualiza el README.md principal reemplazando:
```markdown
[![Portafolio en Vivo](https://img.shields.io/badge/🌐-Ver%20Portafolio-blue?style=for-the-badge)](https://mateo9804.github.io)
```

Por tu URL de Vercel:
```markdown
[![Portafolio en Vivo](https://img.shields.io/badge/🌐-Ver%20Portafolio-blue?style=for-the-badge)](https://tu-proyecto.vercel.app)
```

## Opción 2: GitHub Pages (Automático)

1. Ve a tu repositorio en GitHub: `https://github.com/Mateo9804/Portafolio`
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **"GitHub Actions"**
4. El workflow ya está configurado (`.github/workflows/deploy.yml`)
5. Cada vez que hagas push a `main`, se desplegará automáticamente
6. Tu portafolio estará disponible en: `https://mateo9804.github.io/Portafolio/`

**Nota**: El workflow se ejecutará automáticamente después de configurar GitHub Pages.

## Opción 3: Netlify

1. Ve a [netlify.com](https://netlify.com)
2. Inicia sesión con GitHub
3. Click en "Add new site" > "Import an existing project"
4. Selecciona `Mateo9804/Portafolio`
5. Configuración:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
6. Click en "Deploy site"

## Hacer que aparezca en tu perfil de GitHub

### Opción 1: Fijar el repositorio
1. Ve a tu perfil de GitHub: `https://github.com/Mateo9804`
2. Scroll hasta "Pinned repositories"
3. Click en el engranaje
4. Selecciona el repositorio `Portafolio`

### Opción 2: Crear README en tu perfil
1. Crea un nuevo repositorio llamado exactamente `Mateo9804` (mismo nombre que tu usuario)
2. Agrega un archivo `README.md` con:
```markdown
# 👋 Hola, soy Mateo Alejandro Vera

## 🚀 Desarrollador Full Stack

- 🌐 **Portafolio**: [Ver Portafolio](https://tu-url-de-vercel.app)
- 💼 **LinkedIn**: [Perfil](https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/)
- 📧 **Email**: mateovera9804@gmail.com

## 🛠️ Tecnologías

React.js | JavaScript | PHP | Laravel | MySQL | Docker | Git

## 📊 Estadísticas

![GitHub stats](https://github-readme-stats.vercel.app/api?username=Mateo9804&show_icons=true&theme=dark)
```

Este README aparecerá automáticamente en tu perfil de GitHub.

