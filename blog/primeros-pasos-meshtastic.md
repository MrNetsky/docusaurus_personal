---
slug: primeros-pasos-meshtastic
title: Primeros pasos en el mundo Meshtastic
authors: [MrNetsky]
tags: [dispositivos]
---

# Descentralizando la conectividad: Meshtastic, la tecnología open source para la comunicación a larga distancia (LoRa)
![Logo Meshtastic](https://i0.wp.com/pileupdx.com/wp-content/uploads/2024/04/meshtastic-banner.jpg?resize=1024%2C200&ssl=1)

## Introducción

En la era de la hiperconectividad, nuestra dependencia de las redes centralizadas (celulares y Wi-Fi) nunca ha sido mayor. Sin embargo, esta conveniencia conlleva una vulnerabilidad inherente: ante desastres naturales, fallos de infraestructura o simplemente al aventurarnos en entornos remotos, nuestra capacidad de comunicarnos se desvanece. Es aquí donde emerge la necesidad urgente de una conectividad resiliente y autónoma.

### ¿Qué es?
Meshtastic te mantiene conectado cuando otras redes no están disponibles. Es un software que se ejecuta en radios asequibles (llamados nodos) para crear una red de comunicación inalámbrica autónoma. Estos nodos varían desde dispositivos simples listos para usar hasta hardware personalizado adaptado a necesidades específicas.

### ¿Para qué sirve?

Meshtastic mantiene a las personas conectadas cuando los métodos de comunicación habituales no están disponibles. Meshtastic es útil en múltiples escenarios:
- **Aventuras al aire libre** 🏔️⛷️🏃‍♀️🚣‍♀️🚵‍♂️: comparte tu ubicación mientras haces senderismo, acampas o exploras al aire libre.
- **Grandes eventos** 🎶🎉🥳: mantén a los grupos conectados en conciertos, festivales o maratones concurridos.
- **Preparación para emergencias** 🚢🆘🛟🚨📢: ideal para comunidades que planifican cortes de energía o vigilancia vecinal.
- **Incendios forestales y búsqueda y rescate** 🔥👩‍🚒📻: intercambio de ubicación y coordinación con n equipos. Imagina un huracán o un terremoto en el que las redes telefónicas no funcionan. Meshtastic permite que los equipos de rescate, los familiares y los amigos se mantengan en contacto sin Wi-Fi ni servicio celular.

Con Meshtastic, tienes una red autónoma que garantiza la conectividad en escenarios en los que el servicio telefónico regular no está disponible.

### ¿Cómo lo hace?
Usando una señal de radio de baja potencia llamada LoRa, cada nodo puede enviar mensajes "saltando" de uno a otro, generando así lo que se conoce como malla colaborativa y cuyo alcance de la red se extiende con cada nodo. Los nodos Meshtastic son independientes de la red eléctrica y sumado a la eficiencia de LoRa, permite que los nodos duren días con una sola carga, lo que es perfecto para viajes de campamento, festivales o emergencias donde la carga puede ser difícil.

Algunos nodos operan de manera similar que un walkie-tolkie de texto, ya que poseen pantalla, botones, parlante (no crea que en estos dispositivos usted podrá escuchar su playlist favorita de Spotify, al menos no por ahora. Solo cumplen una función de emisión de sonido con el fin de notificar algo a su usuario) e incluso algunos hasta teclado. 
Mientras que los que no cuentan con estas características, pueden vincular su teléfono inteligente a través de la aplicación Meshtastic, logrando así, compartir mensajes y ubicaciones de forma pública o privada sin depender de redes WiFi o celulares.

![Intercomunicación Meshtastic](https://www.ultimavincam.com/fileman/entradas/10/lora-topology-2-c80684f1eafdf2a71fbaf26e494fb26d.webp)

:::info ¿sabias qué?
Meshtastic es de código abierto y está impulsado por la comunidad, lo que significa que los usuarios tienen la libertad de ejecutar, modificar y mejorar el software?. Se crea mediante la colaboración global, en la que todos trabajan juntos para mejorarlo.
:::

### Conceptos escenciales

La radiofrecuencia (RF) es como una autopista invisible que transporta señales por el aire. Estas señales ayudan a que dispositivos como teléfonos, radios y nodos Meshtastic se comuniquen entre sí de forma inalámbrica. Para entender cómo funciona la RF, analicemos algunas ideas clave:

#### Propagación
La propagación es la forma en que las señales de radio viajan de un dispositivo a otro. Estas señales se mueven en ondas, como las ondulaciones en un estanque después de arrojar una piedra. Cuanto más viajan las ondas, más débiles se vuelven. Es por eso que algunas señales no llegan muy lejos: se quedan sin energía.

#### Línea de visión
Las señales de radio son como la luz: viajan mejor cuando no hay nada en el camino. Si hay un camino despejado (como estar parado en una colina sin árboles ni edificios en el camino), las señales pueden llegar más lejos. Cuando objetos como paredes, montañas o incluso árboles frondosos bloquean la señal, esta se debilita o no llega en absoluto.

#### Frecuencia
La frecuencia es la cantidad de veces que una onda se "mueve" en un segundo. Se mide en hercios (Hz). Se utilizan diferentes frecuencias para diferentes aplicaciones:

- Bluetooth: utiliza ondas cortas (alta frecuencia) para la comunicación de corto alcance, como conectar el teléfono a los auriculares.
- WiFi: utiliza ondas ligeramente más largas para conectar dispositivos a Internet a distancias medias, como dentro de su casa.
- LoRa: (abreviatura de Long Range) utiliza ondas aún más largas (baja frecuencia) para enviar señales a grandes distancias, lo que lo hace perfecto para Meshtastic.

Las frecuencias más bajas viajan más lejos y manejan mejor los obstáculos, pero llevan menos información. Las frecuencias más altas pueden enviar más datos, pero solo funcionan bien en distancias cortas.

#### Potencia
La potencia es la fuerza de una señal. Imagina gritar en lugar de susurrar: los gritos se pueden escuchar desde más lejos, pero también consumen más energía. De manera similar, las radios de mayor potencia pueden enviar señales a mayor distancia, pero consumen más batería. Meshtastic logra un equilibrio para garantizar que tus dispositivos sigan siendo útiles durante mucho tiempo.

#### Pérdida de señal
La pérdida de señal ocurre cuando una onda se debilita a medida que viaja. Esto puede deberse a:

- Distancia: cuanto más lejos viaja una señal, más débil se vuelve.
- Obstáculos: las paredes, las colinas o incluso la lluvia pueden absorber o reflejar la señal, lo que dificulta llegar al otro lado.
- Interferencia: otras señales (como redes WiFi u otras radios) pueden causar "atascos" en la autopista invisible, lo que dificulta la comunicación.

#### ¿Cómo funcionan Bluetooth, WiFi y LoRa con Meshtastic?
##### Bluetooth
Bluetooth es como un ayudante de corta distancia. Es la forma en que tu teléfono se comunica con tu nodo Meshtastic para enviar y recibir mensajes. Piensa en ello como un chat privado entre tu teléfono y el nodo, pero solo funciona cuando están cerca uno del otro (a unos pocos metros de distancia).

##### WiFi
Meshtastic no depende de WiFi, pero si tu nodo está cerca de una red WiFi, a veces puede usarla para enviar mensajes a través de Internet. Esto puede ayudar a conectar tu red de malla con personas que están más lejos.

##### LoRa
LoRa es la estrella del espectáculo para Meshtastic. Está diseñado para enviar mensajes a largas distancias mientras usa muy poca energía. LoRa funciona enviando señales de baja frecuencia que pueden viajar kilómetros, incluso en entornos difíciles como bosques o montañas. Esto lo hace perfecto para conectar a personas en áreas remotas o durante emergencias cuando fallan las redes regulares.

Al combinar Bluetooth, WiFi y LoRa, Meshtastic garantiza que te mantengas conectado ya sea que estés caminando con amigos, gestionando una respuesta ante un desastre o simplemente experimentando con la tecnología.

---

Meshtastic representa mucho más que una simple aplicación de radio; es una filosofía de conectividad que devuelve el control de la comunicación a los usuarios. Al aprovechar el poder de la tecnología LoRa, Meshtastic ha creado un paradigma donde el alcance se maximiza y el consumo de energía se minimiza, haciendo que las comunicaciones de largo alcance sean posibles incluso con dispositivos pequeños y asequibles.

Meshtastic no busca reemplazar el servicio celular o el Wi-Fi; busca ofrecer una capa de resiliencia fundamental por debajo de ellos. En un mundo cada vez más incierto, dominar Meshtastic significa asegurar que su comunicación se mantenga fluida y disponible cuando más importa.


