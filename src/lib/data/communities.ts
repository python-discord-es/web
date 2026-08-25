// Community directory data, ported from the legacy site's `lib/comunidades.py`.
// Images live in `public/images/communities/`.

export interface Community {
  name: string;
  url: string;
  img?: string;
}

export const discord: Community[] = [
  {
    name: "Python Argentina",
    url: "https://discord.gg/WqaynUdMQF",
    img: "/images/communities/python_argentina.jpg",
  },
  {
    name: "Python Chile",
    url: "https://discord.gg/dTHMfJvauS",
    img: "/images/communities/python_chile.jpg",
  },
  {
    name: "Python Colombia",
    url: "https://discord.gg/MGYQzUaA3S",
    img: "/images/communities/python_colombia.jpg",
  },
  {
    name: "Python La Paz",
    url: "https://discord.gg/Fr2HUqv64P",
    img: "/images/communities/python_lapaz.jpg",
  },
  {
    name: "Python Panama",
    url: "https://discord.gg/3mEkGHK2",
    img: "/images/communities/python_panama.jpg",
  },
];

export const telegramLatam: Community[] = [
  {
    name: "Python Argentina",
    url: "https://t.me/pythonargentina",
    img: "/images/communities/python_argentina.jpg",
  },
  {
    name: "Python Norte",
    url: "https://t.me/pythonnorte",
    img: "/images/communities/python_norte.jpg",
  },
  {
    name: "Python Bolivia",
    url: "https://t.me/PythonBolivia",
    img: "/images/communities/python_logo.png",
  },
  {
    name: "Python La Paz",
    url: "https://t.me/pythonlapaz",
    img: "/images/communities/python_lapaz.jpg",
  },
  {
    name: "Python Chile",
    url: "https://t.me/PythonChile",
    img: "/images/communities/python_chile.jpg",
  },
  {
    name: "Python Colombia",
    url: "https://t.me/pythoncolombia",
    img: "/images/communities/python_colombia.jpg",
  },
  {
    name: "Python Cuba",
    url: "https://t.me/pythoncuba",
    img: "/images/communities/python_cuba.jpg",
  },
  {
    name: "Python Ecuador",
    url: "https://t.me/PythonEcuador",
    img: "/images/communities/python_ecuador.jpg",
  },
  {
    name: "Python México",
    url: "https://t.me/PythonMexico",
    img: "/images/communities/python_mexico.jpg",
  },
  {
    name: "Python CDMX",
    url: "https://t.me/pythonCDMX",
    img: "/images/communities/python_cdmx.jpg",
  },
  {
    name: "Python Nicaragua",
    url: "https://t.me/pythonNIC",
    img: "/images/communities/python_nicaragua.jpg",
  },
  {
    name: "Python Panamá",
    url: "https://t.me/PythonPanama",
    img: "/images/communities/python_panama.jpg",
  },
  {
    name: "Python Paraguay",
    url: "https://t.me/pythonparaguay",
    img: "/images/communities/python_paraguay.jpg",
  },
  {
    name: "Python Perú",
    url: "https://t.me/PytonPeru",
    img: "/images/communities/python_peru.jpg",
  },
  {
    name: "Python Uruguay",
    url: "https://t.me/PythonUruguay",
    img: "/images/communities/python_logo.png",
  },
  {
    name: "Python Venezuela",
    url: "https://t.me/Python_Venezuela",
    img: "/images/communities/python_venezuela.jpg",
  },
];

export const telegramSpain: Community[] = [
  {
    name: "Python Alicante",
    url: "https://t.me/python_alc",
    img: "/images/communities/python_alicante.jpg",
  },
  {
    name: "Python Canarias",
    url: "https://t.me/joinchat/AJ7pmT-X0xZVPgWDIzGA-A",
    img: "/images/communities/python_canarias.jpg",
  },
  {
    name: "Python Castilla y León",
    url: "https://t.me/PyCyL",
    img: "/images/communities/python_castillayleon.jpg",
  },
  {
    name: "Python Catalunya",
    url: "https://t.me/pythoncatalunya",
    img: "/images/communities/python_logo.png",
  },
  {
    name: "Python Coruña",
    url: "https://t.me/pythoncoruna",
    img: "/images/communities/python_coruna.jpg",
  },
  {
    name: "Extre Python",
    url: "https://t.me/ExtrePython_grupo",
    img: "/images/communities/python_logo.png",
  },
  {
    name: "Python Girona",
    url: "https://t.me/pygrn",
    img: "/images/communities/python_girona.jpg",
  },
  {
    name: "Python Granada",
    url: "https://t.me/pythongrx",
    img: "/images/communities/python_granada.jpg",
  },
  {
    name: "Python Guadalajara",
    url: "https://t.me/pythonguada",
    img: "/images/communities/python_logo.png",
  },
  {
    name: "Python La Rioja",
    url: "https://t.me/pythonlarioja",
    img: "/images/communities/python_larioja.png",
  },
  {
    name: "Python Madrid",
    url: "https://t.me/pythonmadrid",
    img: "/images/communities/python_madrid.jpg",
  },
  {
    name: "Python Málaga",
    url: "https://t.me/python_malaga",
    img: "/images/communities/python_malaga.jpg",
  },
  {
    name: "Python Sevilla",
    url: "https://t.me/joinchat/AgH9wQ4oQVIpbW_1gDvH-A",
    img: "/images/communities/python_logo.png",
  },
  {
    name: "Python Valencia",
    url: "https://t.me/python_vlc",
    img: "/images/communities/python_valencia.jpg",
  },
  {
    name: "Python Vigo",
    url: "https://t.me/+B9bb6mt07Uyp5Pj7",
    img: "/images/communities/python_vigo.png",
  },
  {
    name: "Python Zaragoza",
    url: "https://t.me/PythonZaragoza",
    img: "/images/communities/python_zaragoza.jpg",
  },
];

export const telegramTopics: Community[] = [
  {
    name: "Traducción de la documentación oficial de Python",
    url: "https://t.me/python_docs_es",
  },
  { name: "Python Científico", url: "https://t.me/python_cientifico" },
  { name: "SciPy Latinoamericano", url: "https://t.me/scipyla" },
  { name: "AeroPython", url: "https://t.me/AeroPython" },
  { name: "Django España", url: "https://t.me/DjangoEsp" },
  { name: "Django Venezuela", url: "https://t.me/DjangoVE" },
  { name: "Flask España", url: "https://t.me/FlaskEsp" },
  { name: "Kivy Python (es)", url: "https://t.me/kivy_python_es" },
  { name: "Odoo en español", url: "https://t.me/odoo_es" },
  { name: "Python para docentes", url: "https://t.me/pythonparadocentes" },
  { name: "Un Python al día (canal)", url: "https://t.me/UnPythonAlDia" },
  { name: "Aprende Python (canal)", url: "https://t.me/aprendepython" },
  { name: "Sólo Python", url: "https://t.me/Python_es" },
  { name: "Tryton en español", url: "https://t.me/trytonespana" },
  { name: "MicroPython", url: "https://t.me/micropython_es" },
  { name: "Ciencia y tecnología", url: "https://t.me/natayadevcomunidad" },
];

export const whatsappTopics: Community[] = [
  {
    name: "Ingeniería de datos",
    url: "https://chat.whatsapp.com/CgXo5yI6LwhEdbRJpBWs4u",
  },
  {
    name: "Gobernanza de datos",
    url: "https://chat.whatsapp.com/HsCAtLdmU3E1Ir0CDOrtyr",
  },
];
