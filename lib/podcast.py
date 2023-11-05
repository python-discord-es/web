episodes = {
    "Episodio #05": {
        "guest": "Asdrúbal Velásquez Lagrave",
        "img": "podcast/img/asdrubal.jpg",
        "desc": (
            "Asdrúbal  es consultor en asuntos de automatización, "
            "comunicaciones, redes, diseño e implementación de sistemas IoT y de "
            "ingeniería electrónica. Actualmente trabajando en varios proyectos "
            "relacionados con Blockchain y particular interés en Tokenización "
            "y trazabilidad de activos biológicos."
        ),
        "audio": "podcast/audio/episodio05.mp3",
        "video": "https://youtu.be/Euymka1MQQ4",
        "discord": "https://discord.com/channels/775295820618661898/1170080452640522240",
    },
    "Episodio #04": {
        "guest": "Adonai Vera",
        "img": "podcast/img/adonai.jpg",
        "desc": (
            "Adonai es un desarrollador de software de IA, Emprendedor "
            "Deportista extremo que ha estado en la industria durante 5 años."
        ),
        "audio": "podcast/audio/episodio04.mp3",
        "video": "https://youtu.be/bVMWbprgbzQ",
        "discord": "https://discord.com/channels/775295820618661898/1163899364582883378",
    },
    "Episodio #03": {
        "guest": "Arturo Martínez",
        "img": "podcast/img/arturo.jpg",
        "desc": (
            "En este episodio conversamos con Arturo Martínez , egresado de la "
            "licenciatura Letras Clásicas, actualmente trabaja como Python "
            "developer y Data engineer."
        ),
        "audio": "podcast/audio/episodio03.mp3",
        "video": "https://www.youtube.com/watch?v=H-ydHftx1VY",
        "discord": "https://discord.com/channels/775295820618661898/1163080249140064296",
    },
    "Episodio #02": {
        "guest": "Cristián Maureira-Fredes",
        "img": "podcast/img/cristian.jpg",
        "desc": (
            "En este espisodio conversamos con Cristián, Sr. R&D Manager en The Qt Company, "
            "organizador de conferencias y comunidades en Alemania, España, Chile y EEUU. "
            "Además de ser parte de proyectos como python-docs-es, PyLadies, PyPI, y Qt."

        ),
        "audio": "podcast/audio/episodio02.mp3",
        "video": "https://www.youtube.com/watch?v=4QHa6aw0rRI",
        "discord": "https://discord.com/channels/775295820618661898/1163080063076532254",
    },
    "Episodio #01": {
        "guest": "Denny Pérez",
        "img": "podcast/img/denny.jpg",
        "desc": (
            "Denny es una destacada profesional "
            "en el mundo de la programación y la comunidad Python en español. En "
            "este episodio, exploramos los logros y experiencias de Denny en el "
            "mundo de la programación, así como su contribución a la comunidad "
            "Python en español."
        ),
        "audio": "podcast/audio/episodio01.mp3",
        "video": "https://www.youtube.com/watch?v=_PUN0oFUVBM",
        "discord": "https://discord.com/channels/775295820618661898/1163079808675217478",
    }
}


def get_podcast_page(_content):
    episodes_content = []
    for ep_number, ep in episodes.items():
        with open("template/podcast-episode.html", "r") as f:
            episodes_content.append(f.read().format(
                podcast_number=ep_number,
                podcast_guest=ep["guest"],
                podcast_desc=ep["desc"],
                podcast_audio=ep["audio"],
                podcast_video=ep["video"],
                podcast_discord=ep["discord"],
                podcast_img=ep["img"],
                )
            )

    _content = _content.replace(
        "PODCAST_EPISODES",
        "\n".join(episodes_content)
    )
    return _content
