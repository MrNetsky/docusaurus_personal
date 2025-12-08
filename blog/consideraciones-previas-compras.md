---
slug: consideraciones-previas-compras
title: Consideraciones técnicas previas a la compra de dispositivos
authors: [MrNetsky]
tags: [dispositivos]
---

# De novato a experto: Qué debes saber antes de comprar tu primer dispositivo Meshtastic

El auge de las comunicaciones descentralizadas ha puesto a **Meshtastic** en el mapa como la solución líder para crear redes de malla fuera de línea utilizando radios de bajo consumo *LoRa*. Sin embargo, la amplia variedad de dispositivos disponibles en el mercado, que van desde simples placas de desarrollo hasta productos finales robustos, puede ser abrumadora. Antes de invertir en un nodo, es crucial entender cómo las especificaciones técnicas del hardware afectarán tu experiencia en el terreno, ya sea en entornos urbanos densos o en vastas áreas rurales. Esta guía te ayudará a navegar por las especificaciones más importantes, asegurando que el dispositivo que elijas se adapte perfectamente a tu misión y presupuesto.

**Frecuencia y Región**

Este es un punto muy importante, ya que comprar la frecuencia incorrecta hace que el dispositivo sea inutilizable en tu área. Por ello es necesario conocer la verificación regulatoria ya que los dispositivos LoRa operan en bandas de frecuencia ISM (industrial, ciencia, y medicina) que son diferentes en cada continente. Debes asegurarte de que el dispositivo que compres esté configurado para la banda de tu región. En nuestro caso, en Argentina la adecuada es 915Mhz. Además la antena debe estar ajustada específicamente para la frecuencia elegida (ej. una antena de 868 MHz funcionará muy mal a 915 MHz).

**Microcontrolador (MCU) y Conectividad**

El chip principal determina el rendimiento, las capacidades y el consumo de energía del dispositivo. En este aspecto, encontramos 2 alternativas:

+ *ESP32* (de Espressif Systems):
Es el más común y versátil. Suele ser más económico, tiene mucha memoria e incluye Wi-Fi. Pero conlleva un mayor consumo de energía, lo que reduce la duración de la batería. Actualmente es el más utilizado en dispositivos tipo celular, smartwatch.

+ *nRF52* (de Nordic Semiconductor):
No incluyen Wi-Fi, son más costosos y menos potente. Aún con ello su consumo de energía ultra bajo, lo hacen los más recomendables en nodos portátiles o tipo powerbank.

Ambos incluyen concexión Bluetooh, necesaria para concetar el dispositivo con el teléfono.

:::tip NOTA:
¿Quieres saber cuales son o qué características conllevan los tipos de dispositivos aquí mencionados? <u> [***Aquí tenemos un artículo donde hablamos de ello***](/blog/tipos-de-dispositivos) </u>
:::

**GPS**

Es un apartado importante e innecesario a la vez y esto se debe al tipo de dispositivo que lo tenga. Me explico, si hablamos de dispositivos móviles, es una utilidad necesaria, e incluso hay dispositivos que pueden encender y apagar la posición según desee o si la necesidad de ahorrar batería apremia. Pero en nuestro caso particular, donde dirigimos el uso de estos dispositivos a los bomberos, se vuelve vital su uso. 

En contra partida, en un nodo fijo, es mejor no tenerlo pues aumenta el precio del mismo, pero si ya lo incluye, es mejor no hacer uso, porque demanda un consumo de energía y no aporta en absolutamente nada.

Entonces usted en este momento se preguntará el por qué esta diferencia. Y esto se debe a que un nodo fijo se ubicará en un lugar específico, usted sabrá donde se encuentra, incluso puede mapearlo, sumado a que generalmente tienen un suministro constante de energía y baterías para cubir los momentos en los que no, por lo que está conectado 24/7 y si desea saber si el nodo está activo solo deberá comunicarse con el mismo.

**Batería(mAh)**

Una capacidad mayor de miliamperios-hora es mejor. Sin embargo, el rendimiento final de la batería dependerá del MCU, si utiliza una pantalla cuyo consumo dependerá según sea el tipo y a qué información esté eviando, ya que enviar la pocisión constantemente consume energía. Esto también aplica para cuando envía datos de los sensores.

**Pantalla y tipo**

Son útiles para interactuar con el dispositivo y existen 3 tipos:
+ *LCD*: 
        * Menos eficiencia energética.
        * Pobre visibiliad en el exterior.
        * Más económica.
+ *OLED*: 
        * Eficiencia energética media.
        * Posee una mejor visibilidad que la LCD, pero inferior a la E-Ink. Pero si posee el mejor contraste de las 3.
        + Costo itermedio
+ *E-Paper*: 
        * Mayor eficiencia energética.
        * Ostenta la mejor vibilidad en el exterior. Suelen incluir un interruptor o reglador de luz. 
        * Tiempo de respuesta significativamente mayor en comparación con las otras.
        * Más costosa.

Su consumo de energía disminuye la durabilidad de la batería. Por lo que para nodos portátiles será mejor usar un nRF52, en busca de una autonomía que permita ser usado durante una jornada completa de combate contra el fuego, sin la necesidad de depender de un powerbank o un nodo de repuesto. Las más usadas son las OLED y la de papel electrónico. 

Debido a la ausencia actual de pantallas en dispositivos fijos, este autor se pregunta, ¿serán de utilidad?. Y si lo fueran ¿cuán útiles serían?, ¿Qué tamaño deberían tener? ¿De qué tipo debería ser?

---

La incursión en el ecosistema Meshtastic exige pasar de la mera curiosidad tecnológica a una compra estratégica informada. Como hemos analizado, la elección del dispositivo es un ejercicio de equilibrio de compromisos que debe estar rigurosamente alineado con el entorno operativo y los objetivos de la misión.

En última instancia, el dispositivo ideal es aquel que sacrifica la funcionalidad innecesaria para potenciar lo esencial. Para la comunicación de primera línea (móvil), la autonomía y el GPS confiable son innegociables, favoreciendo los chips nRF52 y las pantallas E-Paper. Para la infraestructura (fija), el enfoque está en la estabilidad 24/7, la potencia de transmisión y la carga solar robusta para asegurar la continuidad de la red.



