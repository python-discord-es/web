import re
import sys
import shutil
from pathlib import Path
from textwrap import dedent

import markdown
from jinja2 import Environment, FileSystemLoader, Template

from lib.comunidades import get_comunidades_page
from lib.podcast import get_podcast_page

def get_header_content(_content):
    # Parse first lines
    _header = {
        "@title": "",
        "@logo": "",
        "@url": "",
        "@description": "",
    }
    header_index = 0
    for line in _content.splitlines():
        header_index += 1
        if line.startswith("@"):
            try:
                option, value = line.strip().split(":")
                _header[option] = value.strip()
            except Exception as e:
                raise(f"Error with:\n{line}\n{e}")
        elif line == "-----":
            break

    _content = md.convert(
        "\n".join([line for line in _content.splitlines()[header_index:]])
    )

    return _header, _content

def render_pages(template, md):

    for page in Path("pages/").glob("*.md"):

        with open(page, encoding="utf-8") as f:
            _content = f.read()

        _header, _content = get_header_content(_content)

        # Hack for empty details/summary paragraph
        _content = _content.replace('<p><summary markdown="block"></p>', "")

        # Special cases for pages
        if "podcast" == page.stem:
            _content = get_podcast_page(_content)
        elif "otrascomunidades" == page.stem:
            _content = get_comunidades_page(_content)

        # Adding class for toc 'li'
        md.toc = md.toc.replace("<li>", '<li class="menu-item">')
        conf = {
            "toc": md.toc,
            "header": _header,
            "content": _content,
        }

        page_rendered = template.render(conf)
        with open(_header["@url"], "w", encoding="utf-8") as f:
            f.write(page_rendered)
            print(f"> Written {page}")


def render_index(template):
    # Special case for the index
    _header = {
        "@title": "Inicio",
        "@url": "index.html",
    }
    conf = {
        "header": _header,
    }
    page_rendered = template.render(conf)
    with open(f"index.html", "w", encoding="utf-8") as f:
        f.write(page_rendered)
        print(f"> Written index")


if __name__ == "__main__":
    BASE_PAGE = "template/page.html"
    md = markdown.Markdown(extensions=["toc", "tables", "fenced_code", "codehilite", "md_in_html"])
    loader = FileSystemLoader("template/")

    template = Environment(loader=loader).from_string(open(BASE_PAGE).read())
    render_pages(template, md)

    template = Environment(loader=loader).from_string(open("template/index.html").read())
    render_index(template)
