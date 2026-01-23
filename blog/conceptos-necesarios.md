---
slug: conceptos-necesarios
title: Entendiendo el funcionamiento del universo Meshtastic
authors: [MrNetsky]
tags: [dispositivos]
---

## Conceptos escenciales

La radiofrecuencia (RF) es como una autopista invisible que transporta señales por el aire. Estas señales ayudan a que dispositivos como teléfonos, radios y nodos Meshtastic se comuniquen entre sí de forma inalámbrica. Para entender cómo funciona la RF, analicemos algunas ideas clave:

### Propagación
La propagación es la forma en que las señales de radio viajan de un dispositivo a otro. Estas señales se mueven en ondas, como las ondulaciones en un estanque después de arrojar una piedra. Cuanto más viajan las ondas, más débiles se vuelven. Es por eso que algunas señales no llegan muy lejos, se quedan sin energía.

### Línea de visión
Las señales de radio son como la luz: viajan mejor cuando no hay nada en el camino. Si hay un camino despejado (como estar parado en una colina sin árboles ni edificios en el camino), las señales pueden llegar más lejos. Cuando objetos como paredes, montañas o incluso árboles frondosos bloquean la señal, esta se debilita o no llega en absoluto.

### Frecuencia
La frecuencia es la cantidad de veces que una onda se "mueve" en un segundo. Se mide en hercios (Hz). 

Las frecuencias más bajas viajan más lejos y manejan mejor los obstáculos, pero llevan menos información. Las frecuencias más altas pueden enviar más datos, pero solo funcionan bien en distancias cortas.

### Potencia
La potencia es la fuerza de una señal. Imagina gritar en lugar de susurrar, los gritos se pueden escuchar desde más lejos, pero también consumen más energía. De manera similar, las radios de mayor potencia pueden enviar señales a mayor distancia, pero consumen más batería. Meshtastic logra un equilibrio para garantizar que tus dispositivos sigan siendo útiles durante mucho tiempo.

### Pérdida de señal
La pérdida de señal ocurre cuando una onda se debilita a medida que viaja. Esto puede deberse a:

- Distancia: cuanto más lejos viaja una señal, más débil se vuelve.
- Obstáculos: geográficos, árboles, humo, etc. dificultan llegar al otro nodo.
- Interferencia: otras señales (como redes WiFi u otras radios) pueden causar "atascos" en la autopista invisible, lo que dificulta la comunicación.

### ¿Cómo funcionan Bluetooth, WiFi y LoRa con Meshtastic?
#### Bluetooth
Bluetooth es como un ayudante de corta distancia. Es la forma en que tu teléfono se comunica con tu nodo Meshtastic para enviar y recibir mensajes. Piensa en ello como un chat privado entre tu teléfono y el nodo, pero solo funciona cuando están cerca uno del otro (a unos pocos metros de distancia).

#### WiFi
Meshtastic no depende de WiFi, pero si tu nodo está cerca de una red WiFi, a veces puede usarla para enviar mensajes a través de Internet. Esto puede ayudar a conectar tu red de malla con personas que están más lejos.

#### LoRa
Está diseñado para enviar mensajes a largas distancias mientras usa muy poca energía. Funciona enviando señales de baja frecuencia que pueden viajar kilómetros, incluso en entornos difíciles como arboledas o montañas.


