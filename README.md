# 🍅 Pomodoro Timer App

Una aplicación minimalista de temporizador Pomodoro construida con React y Tailwind CSS. Esta aplicación te ayuda a gestionar tu tiempo utilizando la técnica Pomodoro, alternando entre períodos de trabajo y descanso.

![Pomodoro Timer App Screenshot](/api/placeholder/800/400)

## ✨ Características

- ⏰ Temporizador personalizable para períodos de trabajo y descanso
- 🎨 Interfaz moderna y minimalista
- 🔄 Cambio automático entre modos de trabajo y descanso
- 🔊 Notificación sonora al cambiar de modo
- 📱 Diseño responsivo
- ⚡ Controles intuitivos (play, pause, reset)

## 🛠️ Tecnologías Utilizadas

- React
- Tailwind CSS
- Lucide React (para iconos)

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14.0 o superior)
- npm (normalmente viene con Node.js)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/pomodoro-app.git
```

2. Navega al directorio del proyecto:
```bash
cd pomodoro-app
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm start
```

5. Abre tu navegador y visita:
```
http://localhost:3000
```

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

## 🎯 Uso

1. Selecciona la duración deseada para tu sesión de trabajo (15-60 minutos)
2. Selecciona la duración deseada para tu descanso (5-20 minutos)
3. Presiona el botón de play para iniciar el temporizador
4. Trabaja hasta que suene la alarma
5. Toma un descanso cuando el temporizador cambie al modo de descanso
6. Repite el ciclo

## 🛠️ Personalización

### Modificar los tiempos disponibles

Puedes modificar las opciones de tiempo editando los arrays `workTimeOptions` y `breakTimeOptions` en el archivo `src/components/PomodoroTimer.js`:

```javascript
const workTimeOptions = [15, 20, 25, 30, 45, 60];  // Tiempos en minutos
const breakTimeOptions = [5, 10, 15, 20];          // Tiempos en minutos
```

### Cambiar colores

Los colores se pueden personalizar modificando las clases de Tailwind en el componente o ajustando el archivo `tailwind.config.js`.

## 📝 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm test`: Ejecuta los tests
- `npm run build`: Construye la aplicación para producción
- `npm run eject`: Expone las configuraciones de Create React App

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, siéntete libre de:

1. Hacer un Fork del proyecto
2. Crear una rama para tu función: `git checkout -b feature/AmazingFeature`
3. Commit de tus cambios: `git commit -m 'Add: AmazingFeature'`
4. Push a la rama: `git push origin feature/AmazingFeature`
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
