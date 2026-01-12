---
slug: primeros-pasos-meshtastic
title: Primeros pasos en el mundo Meshtastic
authors: [MrNetsky]
tags: [dispositivos]
---

# Meshtastic, la tecnología open source para la comunicación a larga distancia (LoRa)
![Logo Meshtastic](https://i0.wp.com/pileupdx.com/wp-content/uploads/2024/04/meshtastic-banner.jpg?resize=1024%2C200&ssl=1)
## Introducción

En el combate de incendios forestales y en las operaciones de búsqueda y rescate (SAR), la comunicación es un factor determinante para un accionar eficiente. En zonas de alta montaña o quebradas profundas, las redes celulares son inexistentes y las radios VHF/UHF convencionales suelen fallar debido a la geografía del lugar.

Meshtastic surge como una solución de comunicación alternativa. No depende de infraestructura externa, permite crear una infraestructura propia.


### ¿Para qué sirve?

A diferencia de otros sistemas, Meshtastic está diseñado para operar en condiciones extremas:

+ Red de seguridad autónoma 🆘: Si el repetidor central falla o el humo bloquea las señales satelitales, los nodos Meshtastic siguen operando entre sí.
+ Geolocalización del personal 📍: Permite al *puesto de comando* visualizar en tiempo real la posición de cada brigadista o vehículo en el terreno, reduciendo riesgos como el de quedar atrapado por cambios en la dirección del viento o de extravío del combatiente. Además de saber dónde está qué y quién, puedes saber cómo llegó allí o dónde fue visto por última vez.
+ Logística Silenciosa 📻: Envío de coordenadas, estados de suministro (agua, combustible) y alertas de evacuación mediante texto, evitando la saturación de los canales de voz críticos.

### ¿Cómo lo hace?
Usando una señal de radio de baja potencia llamada LoRa, cada nodo puede enviar mensajes "saltando" de uno a otro, generando así lo que se conoce como malla colaborativa y cuyo alcance de la red se extiende con cada nodo. Los nodos Meshtastic son de bajo coste energético, permitiéndoles durar días con una sola carga, lo que es perfecto para cubir toda la jornada del día.

Algunos nodos operan de manera similar que un walkie-tolkie de texto, ya que poseen pantalla, botones, parlante (no crea que en estos dispositivos usted podrá escuchar su playlist favorita de Spotify, al menos no por ahora. Solo cumplen una función de emisión de sonido con el fin de notificar algo a su usuario) e incluso algunos hasta teclado. 
Mientras que los que no cuentan con estas características, pueden vincular su teléfono a través de la aplicación Meshtastic, logrando así, compartir mensajes y ubicaciones de forma pública o privada sin depender de redes WiFi o celulares.

![Intercomunicación Meshtastic](https://www.ultimavincam.com/fileman/entradas/10/lora-topology-2-c80684f1eafdf2a71fbaf26e494fb26d.webp)

:::info ¿sabías qué?
Meshtastic es de código abierto y está impulsado por la comunidad, lo que significa que los usuarios tienen la libertad de ejecutar, modificar y mejorar el software?. Se crea mediante la colaboración global, en la que todos trabajan juntos para mejorarlo.
:::

### Conceptos escenciales

La radiofrecuencia (RF) es como una autopista invisible que transporta señales por el aire. Estas señales ayudan a que dispositivos como teléfonos, radios y nodos Meshtastic se comuniquen entre sí de forma inalámbrica. Para entender cómo funciona la RF, analicemos algunas ideas clave:

#### Propagación
La propagación es la forma en que las señales de radio viajan de un dispositivo a otro. Estas señales se mueven en ondas, como las ondulaciones en un estanque después de arrojar una piedra. Cuanto más viajan las ondas, más débiles se vuelven. Es por eso que algunas señales no llegan muy lejos, se quedan sin energía.

#### Línea de visión
Las señales de radio son como la luz: viajan mejor cuando no hay nada en el camino. Si hay un camino despejado (como estar parado en una colina sin árboles ni edificios en el camino), las señales pueden llegar más lejos. Cuando objetos como paredes, montañas o incluso árboles frondosos bloquean la señal, esta se debilita o no llega en absoluto.

#### Frecuencia
La frecuencia es la cantidad de veces que una onda se "mueve" en un segundo. Se mide en hercios (Hz). 

Las frecuencias más bajas viajan más lejos y manejan mejor los obstáculos, pero llevan menos información. Las frecuencias más altas pueden enviar más datos, pero solo funcionan bien en distancias cortas.

#### Potencia
La potencia es la fuerza de una señal. Imagina gritar en lugar de susurrar, los gritos se pueden escuchar desde más lejos, pero también consumen más energía. De manera similar, las radios de mayor potencia pueden enviar señales a mayor distancia, pero consumen más batería. Meshtastic logra un equilibrio para garantizar que tus dispositivos sigan siendo útiles durante mucho tiempo.

#### Pérdida de señal
La pérdida de señal ocurre cuando una onda se debilita a medida que viaja. Esto puede deberse a:

- Distancia: cuanto más lejos viaja una señal, más débil se vuelve.
- Obstáculos: geográficos, árboles, humo, etc. dificultan llegar al otro nodo.
- Interferencia: otras señales (como redes WiFi u otras radios) pueden causar "atascos" en la autopista invisible, lo que dificulta la comunicación.

#### ¿Cómo funcionan Bluetooth, WiFi y LoRa con Meshtastic?
##### Bluetooth
Bluetooth es como un ayudante de corta distancia. Es la forma en que tu teléfono se comunica con tu nodo Meshtastic para enviar y recibir mensajes. Piensa en ello como un chat privado entre tu teléfono y el nodo, pero solo funciona cuando están cerca uno del otro (a unos pocos metros de distancia).

##### WiFi
Meshtastic no depende de WiFi, pero si tu nodo está cerca de una red WiFi, a veces puede usarla para enviar mensajes a través de Internet. Esto puede ayudar a conectar tu red de malla con personas que están más lejos.

##### LoRa
Está diseñado para enviar mensajes a largas distancias mientras usa muy poca energía. Funciona enviando señales de baja frecuencia que pueden viajar kilómetros, incluso en entornos difíciles como arboledas o montañas.

---

Meshtastic representa mucho más que una simple aplicación de radio; es una innovadora forma de conectividad, que al aprovechar el poder de la tecnología LoRa, ha creado un paradigma donde el alcance se maximiza y el consumo de energía se minimiza, haciendo que las comunicaciones de largo alcance sean posibles incluso en los lugares más complejos.

No busca reemplazar a ninguno de los métodos actuales de comunicación, busca ofrecer una alternativa necesaria para cuando los demás, por diversos motivos, no pueden funcionar o no están disponibles.

