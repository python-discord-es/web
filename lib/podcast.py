episodes = {
    "Episodio Especial - Año nuevo": {
        "guest": "Equipo de BitaBit",
        "img": "podcast/img/bitabit_team.jpg",
        "desc": (
            "En este episodio especial platicamos sobre nuestros momentos más humildes del 2023, "
            "qué proyectos tenemos en mente para el 2024, y consejos o tips "
            "que creemos que pueden ayudar para lograr dichos propósitos. "
        ),
        "audio": "podcast/audio/episodio_año_nuevo.mp3",
        "video": "https://youtu.be/HcxiJdPqGcg",
        "discord": "https://discord.com/channels/775295820618661898/1210989898727956490",
    },
    "Episodio #07": {
        "guest": "Eugenia Bahit",
        "img": "podcast/img/eugenia.jpg",
        "desc": (
            "Eugenia Bahit es desarrolladora, divulgadora científica, escritora, entre muchas cosas más; "
            "ha publicado 4 libros y es miembro de la European Association for Theoretical Computer Science (EATCS) y "
            "de la Association of British Science Writers (ABSW). "
            "En esta entrevista platicamos con ella sobre cómo empezó a programar, "
            "el autismo, cómo es ser autodidacta, etc. Una plática muy amena que se sintió como si "
            "estuviéramos en un café con una amiga que conociéramos desde hace tiempo. ¡Disfruten! "
        ),
        "audio": "podcast/audio/episodio07.mp3",
        "video": "https://youtu.be/AS4DOUry528",
        "discord": "https://discord.com/channels/775295820618661898/1206354448037707787",
    },
    "Episodio #06": {
        "guest": "Karolina Ladino",
        "img": "podcast/img/karolina.jpg",
        "desc": (
            "Karo es una product manager con una sólida formación en Robótica y una maestría en Analítica de Datos; "
            "su experiencia abarca más de una década en la creación de hardware para diversas disciplinas y en la industria "
            "del desarrollo. También ha sido líder de PyLadies Bogotá y Colombia. Karo juega un papel fundamental en el "
            "empoderamiento de mujeres en el mundo de la programación y la tecnología. "
        ),
        "audio": "podcast/audio/episodio06.mp3",
        "video": "https://youtu.be/7wqI_Enw8yw",
        "discord": "https://discord.com/channels/775295820618661898/1182004620139176057",
    },
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
    },
}


def get_podcast_page(_content):
    episodes_content = []
    for ep_number, ep in episodes.items():
        with open("template/podcast-episode.html", "r") as f:
            episodes_content.append(
                f.read().format(
                    podcast_number=ep_number,
                    podcast_guest=ep["guest"],
                    podcast_desc=ep["desc"],
                    podcast_audio=ep["audio"],
                    podcast_video=ep["video"],
                    podcast_discord=ep["discord"],
                    podcast_img=ep["img"],
                )
            )

    _content = _content.replace("PODCAST_EPISODES", "\n".join(episodes_content))
    return _content
