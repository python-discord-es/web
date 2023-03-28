import markdown
from pathlib import Path
from jinja2 import Template
from textwrap import dedent

import sys
sys.path.append(".")
from paginas import pages
from comunidades import comm


# Create pages

base = "template/page-base.html"

template = Template(open(base).read())

for p_key, p_values in pages.items():
    page = Path(p_values["filename"])

    md = markdown.Markdown(extensions=['toc', 'tables', 'fenced_code', 'codehilite', "md_in_html"])

    with open(page, encoding="utf-8") as f:
        _content = md.convert(f.read())

    _comunidades = ""
    if p_key == "otrascomunidades":
        _comunidades = comm
        # hack to replace the TOC for pages that will be added
        # at render time.
        md.toc = dedent("""\
            <div class="toc">
            <ul>
            <li><a href="#mejora-la-lista">Mejora la lista</a></li>
            <li><a href="#discord">Discord </a></li>
            <li><a href="#telegram">Telegram </a>
                <ul>
                <li><a href="#latinoamerica">Latinoamérica</a></li>
                <li><a href="#espana">España</a></li>
                <li><a href="#tematica">Temática</a></li>
                </ul>
            </li>
            </ul>
            </div>
            """)
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
