---
slug: compras-12-25
title: Compras 12/2025 - Parte 1
authors: [MrNetsky]
tags: [dispositivos]
---

# Nos fuimos de compras: Nuestra primera experiencia adquiriendo dispositivos meshtastic

Temas a tratar:

+ Dispositivos elegidos
+ Métodos de envío
+ Precio
+ Tiempos estimádos de entrega


## ¿Cuales son y por qué elegimos estos dispositivos?

Nuestro objetivo fue intentar abarcar la mayor cantidad de dispositivos que, bajo nuestro juicio, los combatientes pueden sacarle partido para poder llevar a cabo talleres de formación y prubas de campo. La elección sobre qué dispositivos se iban a adquirir no fue sencilla, hicimos un equilibrio entre la [*función*](/blog/tipos-de-dispositivos) que pueden llevar a cabo y sus [*especificaciones técnicas*](/blog/consideraciones-previas-compras), pero intentado no dejar afuera a ningun fabricante (tenga en cuenta que fabricante y ensamblador NO son lo mismo y [*aquí*](/blog/fabricantes-ensambladores) puede ver la diferencia). 

Sin embargo hay una gran cantidad de dispositivos en el mercado y luego de un análisis riguroso, los dispositivos y las cantidades que decidimos adquirir, son las siguientes:

<!-- 
Notese la diferencia entre uno y otro. El 1ro da error, porque cuando trabajas en React, no podes escribir HTML crudo y CSS como lo harías en un archivo HTML normal. La propiedad style espera un objeto de JS donde las propiedades CSS se escriben en formato camelCase y los valores son strings o números.

<div style="margin-left: auto; margin-right: auto; width: fit-content;">
-->

<div style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>

  | Modelo | Marca | Tipo | Cantidad |
  | :---: | :---: | :---: | :---: |
  | N37 | Meshnology | Portable c/pantalla | 6 |
  | MeshPocket Qi2 | Heltec | Powerbank | 6 |
  | SenseCAP P1-Pro | SeedStudio | Fijo | 2 |
  | Voyager | Spec5 | Fijo p/Vehículo | 1 |
  | ThinkNode M1 | Elecrow | Portable c/pantalla | 6|
  | ThinkNode M6 | Elecrow | Fijo | 2 |
  | WisMesh Tag | RAK | Tarjeta | 6 |

</div>

**Proceso de elección**

:::warning ADVERTENCIA:
Nuestra elección de dispositivos y cantidades estan dirigidas a los combatiententes del fuego, a las situaciones que deben afrontar y a nuestras creencias sobre las necesidades que deben estar cubiertas.
<!-- Este proceso de elección seguramente cambiará una vez realizada las pruebas de campo con los bomberos. Y en una eventual compra futura, aquí se adjuntará su respectivo blog. -->
:::

Si hablamos de los dispositivos portables, adquirimos 6 de c/u (N37 y M1) y 6 MeshPocket, que si bien son powerbanks (de 10.000mAh, en el modelo que nosotros elegimos) pueden desempeñarse como los dos anteriormente citados. En un inicio los portables serán de la misma marca, para evaluar su funcionalidad y nivel de adopción, una vez que cada brigada haya probado los distintos nodos portables y nos hayan dado feedback sobre su uso, carcterísticas positivas tanto como negativas, procederemos a mezclar todos los tipos de dispositivos. Es de nuestro intrés saber cómo trabajan estos dispositivos en entornos donde los dispositivos son iguales, para luego evaluarlos en entornos totalmente opuestos, y contrastar los resultados obtenidos, ya que posiblemente este último se aproxime al escenario real.

La elección de los portables tuvo varios aspectos en cuenta. Desde un inicio se decidió NO contar con los procesadores ESP32, debido a su alto consumo de energía. La disponibilidad fue otra arista a evaluar, ya que modelos como el Nano G2 Ultra no se encuentran en stock. El precio, debido a esto modelos como el WisMesh Pocket V2 quedaron afuera, porque en comparación a los elegidos no ofrecía, bajo nuestro criterio, algo que valga la pena por lo que pagar la diferencia. El T-Echo de LilyGo no se tuvo en cuenta ya que nosotros tenemos 2 unidades y decidimos probar nuevas opciones, (No obstante,en un futuro próximo podrán ver aquí una reseña de este modelo y de todos los que se adquieran). Por ello elegimos al M1 y al N37 (que está basado en un WioTracker L1 de SeedStudio)

Dentro del universo de dispositivos portables que no poseen una pantalla, elegimos a los tipo tarjeta, pero aún no tenemos definido una finalidad específica, en primer instancia pensamos en estos dispositivos como un repetidor para suplir una eventual falta en la cobertura. Sin embargo, aún no sabemos si será necesario que cumpla esta función, cómo lo hara y si cumple con las espectativas o si por el contrario necesitamos un aparato más robusto. Con esto en mente, elegimos al WisMesh Tag ya que hacía un gps lock en menor tiempo que su similar de seedstudio, mientras que el M3 de Elecrow no fue tomado en cuenta por su falta de stock.

Para los dispositivos fijos, el P1 y el M6 fueron los elegidos. En cuanto a las prestaciones había mucha paridad, por lo que el aspecto económico en este caso, fue más determinante que en las elecciones anteriores anteriores. Pero también se eleigió el P1 sobre su versión pro por varios aspectos. El envío, al no incluir baterías es más facil conseguir un courier, ya que hay empresas (como FedEx) que no hacen envíos de dispositivos que posean baterías, además esa falta de baterías, las podemos suplir con las que nosotros hemos reciclado. Consume menos energía, al no tener GPS integrado y por último pero no menos importante, debido a no poseer baterías ni GPS, en comparación a sus similares del mercado, su precio es el más bajo.

En el caso de del Spec5 Voyager, su compra fue un hecho aún más experimental, sumado a su precio, se decidió solamente adquirir una única unidad. Principalmente creemos que es importante saber dónde se encuentran todos los vehículos que participan del combate contra el fuego, pero también pueden contribuir a expandir la red ubicándose en puntos estratégicos. Función que podrá desempeñar por un largo tiempo debido al panel solar que incluye.

Se decidió inicialmente conformar un kit de 4 nodos portátiles, 2 tipo card y 1 nodo fijo. Creemos que es sufuciente para una brigada pequeña, al menos en un inicio. No obstante está sujeto a modificaciones ya que aún no se realizaron prubas de campo junto a los bomberos. A cada brigada se le brindará solo un modelo (de dispositivo portable) para que nosotros podamos evaluar el desempeño de cada dispositivos (en 1er instacia en un espacio donde todos los dispositivos son iguales, para posteriormente hacer lo opuesto), y obtener referencias de su adopción, desempeño, funcionalidades, mejoras,etc. 

Otros factores que influyeron en la desición, fueron la necesidad de testear al menos un dispositivo de cada una de las empresas manufactureras (que si te interean saber cuales son [*aquí*](/blog/fabricantes-ensambladores) puedes verlas). También fue de nuestro intrés usar distintos lugares de compra (sitio web propietario de la empresa a la que le adquiramos el producto, o sitio externos de reventa, como AliExpress o Amazon) con el fin de conseguir dispositivos en stock, pero también para comparar precios, costos(de envío, impuestos o algún otro costo extra), tiempos estimados de llegada, así como tiempos reales de llegada y comparar los diferentes couriers disponibles (FedEx, DHL, UPS, etc.)

**Proceso de compra**

Se definieron en primer lugar, los sitios de compra. Poteriormente algunos tuvieron que variar por su falta de stock o por errores nuestros, a la hora de armar la ingeniería de envío para darnos cuenta al momento de la compra que el sitio web NO hace envíos a Argentina. Errores de los cuales nos hemos reido y aprendido.
También se definieron las cantidades de cada producto por envío. Esto fue limitado a 3 debido a la modalidad de pequeños envíos. Razón por la cual, en Heltec por ejemplo hicimos dos compras de 3 unidades. En Amazon encontramos una buena oferta de los N37 de 2 unidades a 99U$D, pero no sabíamos si era posible comprar 2 packs (4 unidades en total), por cómo lo tomaría la aduana, por lo que probaremos y también estaremos comunicando nuestros resultados (a cruzar los dedos para que no lo retenga la aduana :crossed_fingers:).

Con respecto a los envíos, páginas como RAK y Heltec no nos dieron tiempos estimados de entrega, suponemos que mientras está siendo procesado, no habrá un fecha, seguramente nos la comunicarán una vez que hayan despachado nuestro paquete. Spec5 es una de las páginas que NO hace envíos a Argentina, de hecho es muy limitado el número de países a los que si envía. ¿Cómo resolvimos esto? Comprando en la tienda oficial, pero con la dirección de los depósitos de AeroBox de allá, con la finalidad de que ellos lo traigan hasta Argentina, posteriormente nosotros lo retiraremos en sus depósitos de nuestro país o pagaremos el envío al interior, aún no lo definimos. Lo que si quería comentar que el envío más económico de Spec5 dentro de USA demora aproximadamente 12 días, una locura para tratarse de un envío dentro del mismo país, ya que hemos pagado envíos, con diferencias menores a 6U$D que en ese tiempo (supuestamente), lo traen hasta tu casa.

Creo que Amazon nos ha dado la experiecia más gratificante de compra, buen precio y facilidad de envío. El gran problema aquí es que no tienen variedad en los dispositivos Meshtastic. Pierde mucho e este aspecto con Rockland, que si posee estos aspectps, en cuanto a aparatos de RAK, Heltec o LilyGo, pero pierde mucho en el envío, ya que no los hace a Argentina y comprar ahí para que luego Aerbox te lo importe, no tenía sentido desde lo económico y logístico. Tiendamía es un servicio similar a AeroBox, pero con un funcionamiento diferente. Ellos te efectúan la compra desde Amazon, eBay ó AliExpress y te lo importan, el problema es que no anduvo bien con loslinks de compras con AliExpress y con las tiendas alojadas en EEUU (Amazon o eBay, ya que en Rockland hasta el momento no se puede) al no manejar stock y variedad, no se pudo efectuar compras allí, es por ello que no efectuamos compras de esta forma, aunque aún es una posibilidad para una futura compra.

AliExpress tiene diferentes formas de envío, stock en la mayoría de productos, marcas con su tienda oficial ahí (como SeedStudio o Elecrow), precios competentes pero... Y esto es un GRAN PERO, no puedes hacer compras sucesivas con la misma tarjeta. Razón por la cual, solo compramos 3 WisMesh Tag y no pudimos hacer la compra de los otros 3 con diferente envío. Intetamos cambiando de día y de perfil, pero aún así no pudimos. Esto contribuyó a que SeedStudio, fuera un auténtico dolor de cabeza, ya que desde su página oficial no tiene casi stock de nada (a excepción de los M1), muchos de sus productos estan en back order, otros sin stock y algunos con stock o bajo orden pero en USA o EU Entonces ustedes se preguntarán, ¿cuál es el problema?, si a esta altura del partido ya habian hecho compras en USA y no habia motivos para no importar desde EU. Bueno, la cuestión es que el wharehuse que hace envíos a todo el mundo es China, los otros dos solo venden donde residen. Igual, conseguimos productos en stock en AliExpress, aquí el problema, era que no podíamos usar la tarjeta, a esta altura, las esperanzas se desvanecían, pero hubo un guiño del destino, luego de aproximadamente 3 semanas, conseguimos al M6 en stock, nostros ni lentos ni perezosos efectuams nuestra compra, completando así toda nustra lista.
