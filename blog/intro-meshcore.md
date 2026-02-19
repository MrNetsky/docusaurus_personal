---
slug: intro-meshcore
title: 'Explorando alternativas LoRa: Primer contacto con MeshCore'
sidebar_label: "Intro a MeshCore"
authors: 
  - key: MrNetsky
    title: Autor
  - key: nicopace
    title: Colaborador
  - key: aguslasp
    title: Colaborador
tags:
  - meshcore
  - meshtastic
  - dispositivos
---

Diría que lo mejor para este artículo es empezar por el principio, por lo que partiremos desde la pregunta más sencilla y la que en primer lugar se nos ocurriría...

**¿Qué es MeshCore? ¿Y qué relación tiene con Meshtastic?**

Si bien algo ya hemos mencionado en un [*artículo anterior*](/blog/formatos-digitales-de-comunicacion), lo mencionaremos nuevamente. MeshCore es un sistema multiplataforma que permite comunicaciones off-grid (off-grid), basadas en texto mediante hardware de radio LoRa. Similar a Meshtastic hasta el momento, pero... *¿Qué los diferencia?*. 

La forma de enviar los mensajes, ambos envían un mensaje a todos los nodos, con el motivo de encontrar a su destinatario. Pero MeshCore va más allá, ya que, una vez encontrado su destinatario, guarda la ruta de comunicación con dicho nodo. Debido a esto, cuando se vuelvan a comunicar entre ellos, el mensaje sólo se transmitirá a nodos que repitan el mensaje y que se encuentren en la ruta de comunicación entre ambos. Esta cualidad le permite a los mensajes 'saltar' entre nodos, hasta 64 veces. Una gran diferencia con Meshtastic que solo puede hacer apenas 7 'saltos'.

Sabiendo esto, debemos preguntarnos... **¿Cómo funciona?**

Funciona de manera similar que Meshtastic y opera en los mismos dispositivos. Nosotros ya tenemos algunos de ellos adquiridos, por lo que no nos representa un costo extra probarla. Lo único que debemos hacer es flashear nuestros dispositivos con firmware MeshCore, y lo podremos hacer desde la siguiente [*página.*](https://flasher.meshcore.co.uk/) El proceso es similar tanto para los dispositivos con nRF52, como con ESP32, pero si hay que hacer una gran salvedad en este apartado, los firmware de la gran mayoría de dispositivos, está pensado para cumplir una única función.

Me explico... En Meshtastic, podías cambiar qué función iba a desempeñar el aparato o el método de conexión a la pc o celular desde un mismo firmware, mientras que en MeshCore hay firmware dedicado para diferentes situaciones. Por ejemplo, existen 4 firmwares para el Elecrow ThinkNode M1, dependiendo de si el dispositivo que envía y recibe mensajes va a usar la conexión vía BLE o vía USB, si es repetidor exclusivo o si es un room server (depósito de mensajes para quien no haya podido recibirlos acceda y los pueda ver). 

Además, el proceso de flasheo, tiene problemas tanto para la conexión vía USB, como para el flasheo en sí, que más de una vez ha fallado. Dicho proceso se repitió sin cambios, obteniendo un flasheo con éxito, por lo que no sabemos cuales eran los motivos de los fallos, ya que repitiendo el mismo proceso se obtienen resultados diferentes. Da la sensación que es más una lotería.

Ambos tienen app de celular, pero... Meshtastic tiene una plataforma en Español casi en su totalidad, mientras que MeshCore está en Inglés. Además, la interfaz de usuario de Meshtastic está más pulida que la de MeshCore, sin embargo ésta, tiene algunas funcionalidades destacadas, como el poder limitar a un cierto números de participantes de un canal puedan leer pero no escribir. También, la especificidad del firmware MeshCore no te permite hacer uso de la vía de conexión que sea más útil para operar un dispositivo, mientras que en el de Meshtastic puedes usar hasta el USB del teléfono si lo que necesitas es una conexión casi instantánea, o BLE, si no posee cable o no deseas una conexión cableada. Párrafo aparte para los notables problemas de primera conexión vía BLE, por parte de MeshCore, desde este espacio creemos que es un aspecto que deberá mejorar en un futuro próximo.

En cuanto al hardware en el que corre Meshtastic y MeshCore, hay diferencias notables. Ambos están en inglés para la gran mayoría de hardwares disponibles. La interfaz de usuario es notablemente mejor Meshtastic y hace un mejor aprovechamiento del hardware que tiene a disposición el dispositivo en el que está instalado. Mientras que en MeshCore, se siente que es un firmware poco optimizado para un dispositivo en particular, y se siente que ha sido porteado de uno en particular, a los demás, no pudiendo adaptarse de forma óptima al hardware de todos los dispositivos en los que se instala. Al menos eso sucedió para todos nuestros dispositivos, a excepción del T-Deck, donde no realizamos pruebas con Meshcore aún. Pero ya que hablamos de este nodo, quiero corregirme... ¿Recuerdan cuando mencioné que no tenía costo para nosotros la implementación de MeshCore? Bueno... No era del todo cierto.

Si bien podemos usarlo de manera libre, también existen firmwares con funciones interesantes pero que tienen un costo de obtención. No es alto, pero es algo que Meshtastic no posee, ya que es 100% libre.

MeshCore tiene aristas interesantes que nos gustaría resaltar. La primera es que cuando configuras el nodo, desde el celular, las configuraciones no reinician el dispositivo, cosa que sí sucede para Meshtastic y que es un punto a favor de MeshCore. También que desde la app podés renombrar a los nodos que tengas en tu lista de contactos. 

Para finalizar, un dato de color... Si tienes las apps de Meshtastic y de MeshCore, podrás conectarte a dos nodos de manera simultánea, uno con firmware de Meshtastic y otro nodo con firmware MeshCore. Pero la pregunta del millón... ¿Es útil? La verdad es que por el momento creemos que no, pero también creemos que abre una puerta a una futura colaboración entre ambas tecnologías.

---

Creemos que MeshCore es una tecnología interesante, digna de ser explorada y expandida, pero las diferencias que poseen, creemos que se debe al tiempo en el que una salió al mercado, con respecto a la otra. Además explica también la diferencia entre comunidades, ya que es mucho más grande que la de MeshCore.

Es positivo que haya competencia entre ambos, ya que los únicos beneficiados son los usuarios. Creemos que de momento seguiremos con Meshtastic porque creemos que es una tecnología un poco más robusta, que nos ayudará con el combate contra el fuego. No obstante, seguiremos de cerca a MeshCore considerándolo tanto como posible reemplazo, como un compañero de Meshtastic, en el caso de que en un futuro, ambas tecnologías puedan trabajar en conjunto, potenciando sus fortalezas y disminuyendo sus debilidades.

