# hablemospython.dev 🐍

Sitio web de introducción a la comunidad "Python en Español".
Encontrarás consejos y recursos de nuestras comunidades en Telegram,
y Discord.

## Implementación

El template está basado en bootstrap, y no se utiliza ningún generador de
sitios estáticos, en su lugar, existe un script llamado `gen_pages.py`
que lee el contenido de las páginas en `pages/` que utilizan formato
markdown, y generan archivos HTML.

### ¿Cómo contribuir?

* Los cambios a las páginas existentes van directamente en los archivos
  de `pages/`.
* Para agregar una nueva página, hay que crear el nuevo archivo markdown
  actualizar el script de generación `gen_pages.py`, y también modificar
  el archivo `template/page-base.html` en caso que la página deba estar
  presente en el menú superior del sitio.

El *deployment* está pendiente de ser automatizado.
