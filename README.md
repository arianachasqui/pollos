# Nuevo Amanecer

App web instalable (PWA) para controlar lotes de pollos: pesos, mortalidad, gastos, ventas y ganancias.
Los datos se guardan en el celular (localStorage) y se pueden enviar a Google Sheets.

## Archivos
- `index.html`: toda la app
- `manifest.webmanifest` e `icons/`: datos e íconos para instalarla
- `sw.js`: service worker (funciona sin internet)
- `xlsx.full.min.js`: librería para descargar Excel
- `vercel.json`: configuración de Vercel
- `apps-script/Code.gs`: código para conectar Google Sheets

## Subir a GitHub y Vercel
1. Crea un repositorio en GitHub y sube todo el contenido de esta carpeta (en la raíz del repo).
2. En vercel.com: Add New → Project → importa el repositorio.
3. Framework Preset: **Other**. Deja Build Command y Output Directory vacíos. Deploy.
4. Abre la URL de Vercel (https) en el celular.

## Instalar en el celular
- **Android (Chrome):** botón "Instalar aplicación" de la app, o menú ⋮ → Instalar app.
- **iPhone/iPad (Safari):** Compartir → Agregar a pantalla de inicio.
- **Computador (Chrome/Edge):** ícono de instalar en la barra de direcciones.

## Conectar Google Sheets
1. Crea una hoja de cálculo en Google Sheets.
2. Extensiones → Apps Script. Borra lo que haya y pega `apps-script/Code.gs`.
3. Cambia `CLAVE` por una palabra tuya.
4. Implementar → Nueva implementación → tipo **Aplicación web**.
   Ejecutar como: **Yo**. Quién tiene acceso: **Cualquier persona**. Implementar y autoriza los permisos.
5. Copia la **URL de la aplicación web** (termina en `/exec`).
6. En la app, en "Google Sheets y Excel": pega la URL, la clave y (opcional) el código de la hoja.
   El código es lo que está entre `/d/` y `/edit` en el link de la hoja.
7. Toca **Enviar a Google Sheets**. Se crean las hojas Lotes, Gastos, Pollos y Ventas.
   Cada envío reemplaza el contenido de esas hojas.

Si cambias el código del script, vuelve a implementar (Administrar implementaciones → Editar → Nueva versión).

## Actualizar la app
Cambia `V` en `sw.js` (por ejemplo `na-v2`) cuando modifiques archivos, para que los celulares tomen la nueva versión.
