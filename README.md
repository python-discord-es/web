# hablemospython.dev 🐍

Sitio web de introducción a la comunidad "Python en Español".
Encontrarás consejos y recursos de nuestras comunidades en Telegram,
y Discord.

## Implementación

El template está basado en bootstrap, y no se utiliza ningún generador de
sitios estáticos, en su lugar, existe un script llamado `gen_pages.py`
que lee el contenido de las páginas en `pages/` que utilizan formato
markdown, y generan archivos HTML.
