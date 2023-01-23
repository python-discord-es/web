import markdown
from pathlib import Path
from jinja2 import Template


# Create pages

base = "template/page-base.html"
pages = {
    "principiantes": {
        "filename": "pages/principiantes.md",
        "title": "Principiantes",
        "description": (
            "Consejos para resolver problemas comunes relacionados al "
            "aprendizaje de Python y también comentarios para que "
            "puedas hacer mejores preguntas."
        ),
    },
    "cursosylibros": {
        "filename": "pages/cursosylibros.md",
        "title": "Cursos y Libros",
        "description": (
            "Cursos, Libros y material para que puedas aprender Python "
            "desde cero, o mejorar tus conocimientos actuales."
        ),
    },
    "faq": {
        "filename": "pages/faq.md",
        "title": "Preguntas Frecuentes",
        "description": "Descripción faq",
    },
    "normativa": {
        "filename": "pages/normativa.md",
        "title": "Normativa",
        "description": (
            "La comunidad está abierta a todas las personas, y en ella "
            "se hablan temas que tienen que ver con el lenguaje y la "
            "comunidad Python - se preguntan dudas y se intercambia "
            "información."
        ),
    },
    "tutoriales": {
        "filename": "pages/tutoriales.md",
        "title": "Tutoriales",
        "description": (
            "Guías de tareas y procesos habituales en Python."
        ),
    },
    "comienzacomunidad": {
        "filename": "pages/comienzacomunidad.md",
        "title": "Comienza tu comunidad",
        "description": (
            "¿Te gustaría comenzar una comunidad local? Mira estas "
            "recomendaciones, consejos, beneficios y otros detalles "
            "para comenzar."
        ),
    },
    "otrascomunidades": {
        "filename": "pages/otrascomunidades.md",
        "title": "Otras comunidades",
        "description": (
            "Lista de otras comunidades de Python y temáticas relacionadas "
            "al mismo lenguaje de programación."
        ),
    },
    "preguntarayudar": {
        "filename": "pages/preguntarayudar.md",
        "title": "Preguntar y Ayudar",
        "description": "Descripción como preguntar",
    },
    "ofertas": {
        "filename": "pages/ofertas.md",
        "title": "Ofertas de Trabajo",
        "description": "Descripción ofertas",
    },
    "coc": {
        "filename": "pages/coc.md",
        "title": "Código de Conducta",
        "description": (
            "Nuestro objetivo es que nuestra comunidad sea un lugar "
            "seguro para todas las personas interesadas en Python de "
            "habla hispana. Para ello, seguimos un código de conducta "
            "que nos ayuda a tener un comportamiento adecuado para "
            "mantener una comunidad saludable e inclusiva."
        ),
    },
    "aprendepython": {
        "filename": "pages/aprendepython.md",
        "title": "Aprende Python Construyendo",
        "description": (
            "Con la ayuda de más personas, podrás mejorar tu portafolio 💼 para estar listo al momento de buscar trabajo como Python dev 🐍 "
        ),
    },
    "politica_privacidad": {
        "filename": "pages/politica_privacidad.md",
        "title": "Política de Privacidad",
        "description": (
            "Documento que detalla los datos que se almacenan relacionados a cada usuario la comunidad Python en Español"
        ),
    },
}

template = Template(open(base).read())

for p_key, p_values in pages.items():
    page = Path(p_values["filename"])
    print(page)

    md = markdown.Markdown(extensions=['toc', 'tables', 'fenced_code', 'codehilite'])
    with open(page, encoding="utf-8") as f:
        _content = md.convert(f.read())

    conf = {
        "toc": md.toc,
        "content": _content,
        "page_title": p_values["title"],
        "page_url": f"{p_key}.html",
        "page_description": p_values["description"],
    }

    page_rendered = template.render(conf)
    with open(f"./deploy/{page.stem}.html", "w", encoding="utf-8") as f:
        f.write(page_rendered)
        print(f"> Written {p_key}")
