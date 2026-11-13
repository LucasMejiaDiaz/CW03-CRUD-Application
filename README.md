# CW03: Aplicación CRUD de tareas

Aplicación de tareas creada con Expo y React Native para la actividad **CW03: CRUD Application**.

## Funciones

- Agregar y ver tareas.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas.
- Guardar las tareas en el dispositivo con AsyncStorage.
- Cambiar entre tema claro y oscuro con el botón de la bombilla.

## Ejecutar el proyecto

Necesitas Node.js y npm. En la carpeta del proyecto, ejecuta:

```bash
npm install
npm start
```

En el menú de Expo, presiona `w` para abrir la versión web o escanea el código QR para abrir la app en tu teléfono. Detén el servidor con `Ctrl + C`.

## Organización del código

- `src/app/`: pantallas y navegación con Expo Router.
- `components/`: componente reutilizable de cada tarea.
- `hooks/`: estado y operaciones de las tareas.
- `utils/`: almacenamiento local.
- `data/`: tareas iniciales.
- `constants/`: colores fijos de los temas.
- `context/`: contexto y proveedor del tema.

## Revisar el código

```bash
npm run lint
npx tsc --noEmit
```
