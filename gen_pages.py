import markdown
from pathlib import Path
from jinja2 import Template

import sys
sys.path.append(".")
from paginas import pages
from comunidades import comm


# Create pages

base = "template/page-base.html"

template = Template(open(base).read())

for p_key, p_values in pages.items():
    page = Path(p_values["filename"])
    print(page)

    md = markdown.Markdown(extensions=['toc', 'tables', 'fenced_code', 'codehilite'])
    with open(page, encoding="utf-8") as f:
        _content = md.convert(f.read())

    _comunidades = ""
    if p_key == "otrascomunidades":
        _comunidades = comm


    conf = {
        "toc": md.toc,
        "content": _content,
        "page_title": p_values["title"],
        "page_url": f"{p_key}.html",
        "page_description": p_values["description"],
        "comunidades": _comunidades,
    }

    page_rendered = template.render(conf)
    with open(f"./deploy/{page.stem}.html", "w", encoding="utf-8") as f:
        f.write(page_rendered)
        print(f"> Written {p_key}")
