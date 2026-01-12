---
slug: formatos-digitales-de-comunicacion
title: Formatos de Comunicación Digital Fuera de la Red (Off-Grid)
authors: [MrNetsky]
tags: [dispositivos]
---

# El futuro de la conectividad descentralizada: Explorando los ecosistemas de comunicación de bajo ancho de banda y larga distancia

Nuestra dependencia de las infraestructuras de comunicación centralizadas (desde las torres celulares hasta la fibra óptica) ha crecido exponencialmente. Si bien esta dependencia ha traído una comodidad sin precedentes, también nos ha dejado vulnerables. Desastres naturales, fallos de infraestructura o la simple necesidad de operar en áreas remotas revelan que nuestra conectividad no es tan robusta como imaginamos. Esta fragilidad es la que afrontan los combatientes del fuego y nos ha impulsado en la búsqueda de una alternativa y así hemos arribado a la *conectividad descentralizada.*

Pero... ¿A qué nos referimos con una 'conectividad descentralizada'?

Se refiere a una red donde la información y el control no pasan a través de una única entidad o punto central (como un servidor principal, una torre celular o una autoridad de gobierno), sino que se distribuyen entre múltiples participantes, conocidos como *nodos.* Esto resulta en sistemas más resilientes, seguros y privados, ya que no hay un único punto de fallo ni de control que pueda ser censurado o atacado. Este enfoque puede aplicarse a través de tecnologías como *redes de malla.*

¿Y qué es una red mesh o red de malla?

Es un sistema de comunicación en donde los nodos trabajan juntos para crear una única red inalámbrica extendida, eliminando zonas muertas. A diferencia de los routers tradicionales, que emiten una señal desde un solo punto, los sistemas mesh distribuyen la señal desde varios nodos interconectados. Esto permite una cobertura más amplia y estable, con una única red (mismo nombre y contraseña) que gestiona la conexión del dispositivo al nodo más fuerte automáticamente.

Desde este espacio nos hemos propuesto explorar este ecosistema descentralizado y dentro del mismo, diferenciaremos dos grupos.

#### LoRa: Alcance extremo y resiliencia

El secreto detrás de las soluciones de larga distancia y bajo consumo energético como *Meshtastic* y *Meshcore* es la modulación *LoRa* (Long Range). Esta modulación es excepcionalmente robusta y le permite al receptor detectar la señal incluso cuando su potencia es inferior al ruido de fondo, otorgando un alcance extremo y una alta resiliencia ante las interferencias. Como contrapartida, LoRa se limita a un bajo ancho de banda, haciéndola ideal para la transmisión de pequeños paquetes de datos (texto, telemetría o coordenadas GPS).

Dentro de este grupo, el firmware [**Meshtastic**](https://meshtastic.org/) se ha establecido como la opción de código abierto por excelencia. Opera una Malla Nómada, donde cualquier nodo puede repetir, y utiliza un protocolo de enrutamiento Managed Flood (inundación controlada por un contador de saltos o TTL) para que los mensajes encuentren el destino de forma automática. Esto lo logra enviando el mensaje a todos los dispositivos disponibles, saltando entre ellos, con el fin de encontrar el destinatario, pero esta capacidad de salto está a limitada a un máximo de 8.

Por otro lado, [**Meshcore**](https://meshcore.co.uk/) utiliza la misma modulación, pero implementa una Malla Fija, donde solo algunos nodos designados, actúan como repetidores y el enrutamiento Flood-then-Direct, similar al anterior, envía el mensaje a todos los dispositivos disponibles, con el fin de encontrar la ruta más corta de llegada a un nodo, una vez logrado esto, guarda la ruta, haciendo que la comunicación sea mas rápida y que un mensaje pueda saltar hasta 64 veces, mucho más que en Meshtastic.

#### RF Digital Licenciada: Agilidad y arquitectura propietaria

Las plataformas como *goTenna* y *Beartooth* optan por modulaciones de RF Digital Estándar (FSK o similares). Aunque operan en las mismas bandas UHF/ISM sub-gigahertz, su compromiso es diferente, ya que sacrifican el alcance extremo de LoRa a cambio de una mayor velocidad de datos relativa y una gestión de red que puede estar mejor optimizada para tareas específicas.

Similar a Meshtastic, ambas soluciones crean una red de malla, un concepto fundamental que describe una red formada de manera espontánea por dispositivos que se comunican directamente sin depender de una infraestructura central.

[**goTenna**](https://gotenna.com/) Mesh utiliza su propio protocolo propietario Aspen Grove para crear esta red mesh. Su diseño está optimizado para la mensajería de texto y GPS, ofreciendo una experiencia plug-and-play con un firmware cerrado.

[**Beartooth**](https://beartooth.com/), por su parte, se enfocó en paquetes de datos más grandes, como la Voz PTT (Push-to-Talk), aprovechando la mayor velocidad de datos que permite la RF Estándar.

Esta distinción en la modulación es crucial: mientras que Meshtastic y MeshCore proporcionan la máxima autonomía y alcance a través del código abierto y LoRa, goTenna y Beartooth, ofrecen una solución empaquetada y fácil de usar, basándose en una tecnología de radio que, aunque más rápida, requiere mayor densidad de nodos para cubrir grandes distancias.

---

La exploración de los formatos de comunicación digital fuera de la red (Off-Grid) revela un panorama donde no existe una solución única, sino un conjunto de ecosistemas complementarios diseñados para satisfacer necesidades de comunicación específicas en entornos vulnerables. La búsqueda de la resiliencia frente a la fragilidad de las infraestructuras centralizadas es el motor que impulsa el desarrollo de estas tecnologías.

La distinción fundamental se encuentra en la modulación de radio utilizada:

+ Grupo LoRa (Meshtastic, Meshcore): Prioriza el alcance extremo y la eficiencia energética a través de la robusta técnica Chirp Spread Spectrum (CSS). Estas soluciones son ideales para el envío de paquetes de datos pequeños (coordenadas GPS, telemetría y mensajes de texto concisos) a largas distancias, convirtiéndose en el estándar de oro para la autonomía y el código abierto.

+ Grupo RF Digital Estándar (goTenna, Beartooth): Opta por una mayor velocidad de transferencia de datos utilizando modulaciones como FSK. Aunque sacrifican el alcance máximo de LoRa, su arquitectura permite manejar paquetes más grandes, como la Voz PTT, ofreciendo soluciones cerradas y de fácil implementación (plug-and-play) que requieren una mayor densidad de nodos.

Desde este espacio queremos resaltar que el futuro de la conectividad descentralizada no reside en la victoria de una tecnología sobre otra, sino en la sincronización estratégica de ambas. Un operativo de campo avanzado podría utilizar la red Meshtastic (LoRa) como la columna vertebral resiliente y de largo alcance para rastreo GPS y comandos de texto críticos, mientras que los equipos en proximidad podrían apoyarse en una solución como Beartooth (RF Digital Estándar) para la comunicación por voz de alta inmediatez.

En esencia, la elección final para combatientes del fuego, aventureros o grupos de resiliencia debe basarse en la priorización de la misión: ¿Necesidad de máxima distancia y autonomía (LoRa) o de agilidad en datos y voz (RF Estándar)?
