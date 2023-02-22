# hablemospython.dev 🐍

Sitio web de introducción a la comunidad "Python en Español".  Encontrarás
consejos y recursos de nuestras comunidades en Telegram, y Discord.

## Implementación

El template está basado en bootstrap, y no se utiliza ningún generador de
sitios estáticos, en su lugar, existe un script llamado `gen_pages.py` que lee
el contenido de las páginas en `pages/` que utilizan formato markdown,
y generan archivos HTML.

### ¿Cómo contribuir?

* Los cambios a las páginas existentes van directamente en los archivos
    de `pages/`.
* Para agregar una nueva página, hay que crear el nuevo archivo markdown
    actualizar el script de generación `paginas.py`, y también modificar el
    archivo `template/page-base.html` en caso que la página deba estar presente
    en el menú superior del sitio.
* Para agregar comunidades, solo debes agregar una entrada en el diccionario en
    `comunidades.py`.

## Configuración

Los pasos para generar el sitio localmente son:

### Entorno virtual

Crea un entorno virtual, y actívalo:

```
python -m venv env
source env/bin/activate   # Linux, macOS, Windows (mingw)
env\Scripts\activate.bat  # Para Windows (cmd)
env\Scripts\Activate.ps1  # Para Windows (Powershell)
```

### Dependencia y generación

Instala las dependencias con `pip install -r requirements.txt`,
y luego ejecuta el script principal `python gen_pages.py` para
poder tener el contenido del sitio en el directorio `deploy/`.
