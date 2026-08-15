@title: Política de privacidad
@url: politica_privacidad.html
@description: Documento que detalla los datos que se almacenan relacionados a cada usuario la comunidad Python en Español
-----
## Python en Español, su rol y alcance

Python en Español no es una compañía, ni organización formal como
corporación o fundación - es una comunidad abierta a la comunidad
y mantenida por ella misma, con lo que no existe una entidad legal
asociada a su funcionamiento.

Al no ser un servicio, ni entidad formal, este sitio web
solo recopila información histórica sobre material y consejos
en los distintos canales, y se utiliza como galería de actividades
realizadas por la comunidad.

Existen servicios automatizados (bots) que manejan información
para asegurar el funcionamiento de las plataformas, lo que conlleva
manipulación de datos temporales de cada usuarios de las dos
plataformas de la comunidad: [Telegram](https://telegram.org)
y [Discord](https://discord.com).

## ¿Qué datos guardamos?

Guardamos datos compartidos en el servidor de Discord para evitar
*flood* (repetición de mensajes), mensajes que desencadenan la
protección *anti-spam* y *phishing*, y un registro general de los
mensajes enviados en el servidor.

Adicionalmente, guardamos la información de las personas que
envían ofertas y eventos, como puedes ver en las siguientes secciones.

Las sanciones de personas también son registradas, para tener control
y registro del hecho.

## ¿Por cuánto tiempo guardamos los datos?

- La detección de *flood* (repetición de mensajes) usa un contador
  temporal en memoria que se reinicia cada 30 minutos y nunca se
  guarda en disco.
- Los registros que sí incluyen datos personales (mensajes enviados
  al Bot, envíos de ofertas/eventos, y las decisiones de moderación
  sobre ellos) se eliminan automáticamente **30 días** después de
  su creación, sin necesidad de intervención manual.
- Para reconocer contenido de *spam*/*phishing* ya detectado
  previamente, el Bot guarda únicamente el propio contenido del
  mensaje (o el *hash* de una imagen) - **sin ningún dato de la
  persona que lo envió**. Al no incluir esa vinculación, no se
  considera un dato personal, y por eso se conserva sin fecha de
  expiración: solo sirve para reconocer el mismo contenido si vuelve
  a aparecer, nunca para identificar a quién lo compartió.

## ¿Qué datos no guardamos?

No guardamos información a sabiendas de menores de 13 años,
pues es la edad límite que Discord tiene
[Términos de servicio](https://discord.com/terms#age-requirements-and-responsibility-of-parents-and-guardians)
para permitir el uso de la plataforma, con lo que al conocer esta
situación, nos comunicaremos con Discord para que tome las medidas
del caso, para luego borrar toda la información correspondiente
a su interacción en el servidor.

No guardamos mensajes que no entran en las condiciones explicadas
en la pregunta anterior.

## Seguridad del acceso y procesamiento de datos

Los datos recopilados por el bot de Discord están almacenados
en un VPS, al que solo tienen acceso un sub grupo
de las personas del equipo de Coordinación.

Los datos relacionados a la moderación de ofertas, eventos, y spam
es visible para todas las personas del equipo de Coordinación.

Verificamos constantemente la seguridad de dicho servidor
para manejar la información de cada persona que es recopilada
por nuestro bot, y no guardamos más información que la descrita
en la sección de Servicios. Nuestra política es ser transparentes
con el proceso, con lo cual nuestro Bot de moderación de es acceso
abierto, con lo que cualquier persona puede verificar que datos
se escriben en qué procesos.

## ¿Que hacemos con los datos?

Los datos almacenados no son ni vendidos, ni compartidos a terceras
personas. Se mantienen en un servidor privado para el control
de amonestaciones, incumplimiento del reglamento, y registro de
ofertas, eventos y spam.

## Detalles de los Servicios

En esta sección puedes encontrar los datos que almacenamos provenientes
de nuestras dos plataformas de comunicación.

Ya que las plataformas no están hospedadas en servicios privados,
y pertenecen a otras empresas, te recomendamos leer la política
de privacidad de [Telegram](https://telegram.org/privacy) y
[Discord](https://discord.com/privacy), para saber como dichas
plataformas controlan tus datos.

### Sitio Web

No guardamos ninguna información, ya que no utilizamos ningún servicio
de seguimiento. Si utilizas la dirección de contacto descrita al final
de esta sección, almacenaremos temporalmente tu dirección de correo
electrónico hasta resolver tu pregunta o terminar la conversación.

### Canal de Telegram

No guardamos ninguna información adicional al contenido público del canal
de Telegram. Para el manejo del canal, moderación, y recursos, utilizamos
el bot [Rose](https://missrose.org/) que mantiene registros:

* Cuando un usuario ingresa al canal (nombre público del perfil e ID)
* Cuando un usuario recibe una amonestación (nombre público del perfil e ID)

### Servidor de Discord

La coordinación y moderación del servidor se realiza con un Bot
hospedado en un servidor privado, el cuál almacena los siguientes
registros respecto a tu usuario de Discord. Salvo que se indique lo
contrario, estos registros se eliminan automáticamente 30 días
después de su creación:

* Registro general de los mensajes enviados en el servidor
  `(Message ID, User ID, User Public Name, Message Content, Canal, Fecha)`
* Envíos de ofertas y eventos mediante los canales `#envio-ofertas`
  y `#envio-eventos`, y la decisión de moderación tomada sobre ellos
  `(Message ID, User ID, User Public Name, Message Content, moderador/a,
  motivo si fue rechazado)`

Adicionalmente, para reconocer contenido de *spam*/*phishing* ya
detectado previamente, el Bot guarda el contenido del mensaje o el
*hash* de una imagen `(Message Content o Image Hash)` - **sin ningún
dato de la persona que lo envió**. Este registro no tiene fecha de
expiración, ya que no incluye datos personales (ver sección
"¿Por cuánto tiempo guardamos los datos?").

## Derechos europeos de protección de datos

A pesar de no ser una compañía, organización sin fines de lucro,
entidad pública, fundación, corporación, etc - intentamos apegarnos a la
[ley de protección de datos de la Unión Europea](https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_es)
(RGPD) de manera parcial.

En caso de residir en Europa, y si el procesamiento de tus Datos personales
está sujeto a la RGPD tienes ciertos derechos con respecto a esos datos:

* Puedes solicitar el acceso, rectificación o eliminación de los datos
  personales. Y tienes derecho a recibir una copia de los datos personales
  en un formato utilizable y portátil. En caso de retirar tu consentimiento
  es posible eliminar todos los mensajes de las plataformas de tu usuario.

Para realizar una solicitud de las descritas anteriormente, utiliza
la información disponible más adelante en la sección Contacto. Una vez
validada la solicitud de eliminación, una persona del equipo de
Coordinación la ejecuta mediante una herramienta del Bot que primero
muestra un resumen de los registros encontrados y exige una
confirmación explícita antes de eliminar nada de forma permanente.
Como identificamos tus registros por tu ID de Discord (que no cambia,
a diferencia de tu nombre de usuario), la eliminación cubre todos los
registros asociados a tu cuenta, incluso si usaste un nombre de
usuario distinto en el pasado. Esto no elimina tu historial dentro de
Discord como plataforma (mensajes, roles, sanciones aplicadas
directamente por Discord, etc.) - solo lo que nuestro Bot almacena
por su cuenta.

## Contacto

En primera instancia, te recomendamos ponerte en contacto con alguna
persona con el rol **Coordinación** en el
<a href="https://discord.gg/35E3Ph7Fez">servidor de Discord</a>
o directamente con el dueño actual del servidor: `cmaureir#4041`.

En caso que necesites enviar un correo electrónico, puedes escribir
a `contacto@hablemospython.dev`.

Recuerda incluir la información de tu cuenta de Discord al realizar
esta petición. El *username* tiene la forma `username#XXXX` donde las
`X` representan números (`discorg tag`).
Mira la [ayuda  de Discord](https://support.discord.com/hc/es)
para encontrar información sobre tu `username` y `discord tag`.

---

*Última actualización: 2026-08-15.*



